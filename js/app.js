window.addEventListener("load", function() {
  var btnImport = document.getElementById("btnImport");
  var logDiv = document.getElementById("logs");
  
  btnImport.onclick = function() {
    btnImport.enabled = false;
    log("Starting import...");
    startImport();
  }
  
  function startImport() {
    // Load /sdcard/Personal.vcf for import
    var sdcard = navigator.getDeviceStorages("sdcard")[0];
    var vcf = sdcard.get("Personal.vcf");

    vcf.onsuccess = function() {    
      // File found
      var file = this.result;
      log("Found file " + file.name);

      // Read the file
      var reader = new FileReader();
      reader.onload = function(data) {
        // split the data up into individual vcards for import
        var cards = reader.result.split("BEGIN:VCARD");
        for (var i=1; i < cards.length; i++) {
          try { 
            // parse each vcard and save to contacts
            var card = VCARD.parse(("BEGIN:VCARD" + cards[i]));
            saveCard(card);
          } catch (e) {
            log(e);
          }
        }
        
        log("Done.");
      }

      reader.onerror = function(err) {
        log(err);
      }

      reader.readAsText(file);
    }

    vcf.onerror = function() {
      log(this.error);
    }

    function saveCard(j) {
      var contactData = {
        id: j.uid.id,
        name: [ j.fn.name ],
        givenName: j.n.givens,
        familyName: j.n.families
      };

      if (j.emails) {
        contactData.email = j.emails.map(function(i) {
          return { 'value': i.address };
        });
      }

      if (j.tels) {
        contactData.tel = j.tels.map(function(i) {
          return { 'value': i.number };
        });
      }

      if (j.urls) {
        contactData.url = j.urls.map(function(i) {
          return { 'value': i.uri };
        });
      }

      if (j.notes) {
        contactData.note = j.notes.map(function(i) {
          // TODO this currently returns an object instead of string
          return { 'value': i.note };
        });
      }

      // TODO photo import not working    
  //     if (j.photos) {
  //       contactData.photo = j.photos.map(function(i) {
  //         return new Blob([ atob(i.image) ]);
  //       });
  //     }

      var person = new mozContact(contactData); // Firefox OS 1.3 takes a parameter to initialize the object
      if ("init" in person) {
        // Firefox OS 1.2 and below uses a "init" method to initialize the object
        person.init(contactData);
      }

      // save the new contact
      var saving = navigator.mozContacts.save(person);
      saving.onsuccess = function() {
        log('Saved ' + person.name);
        // This update the person as it is stored
        // It includes its internal unique ID
        // Note that saving.result is null here
      };

      saving.onerror = function(err) {
        log(err);
      };    
    }    
  }

  function log(str) {
    if (str.name) logDiv.innerHTML += str.name + "<br/>";
    else if (str.message) logDiv.innerHTML += str.message + "<br/>";
    else logDiv.innerHTML += str + "<br/>";
  }
  
});
