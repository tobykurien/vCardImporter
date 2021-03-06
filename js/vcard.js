// Generated by CoffeeScript 1.3.1
var VCARD;

VCARD = (function() {
  var generate_adr, generate_bday, generate_categories, generate_class, generate_email, generate_fn, generate_geo, generate_key, generate_label, generate_logo, generate_mailer, generate_n, generate_nickname, generate_note, generate_org, generate_photo, generate_prodid, generate_rev, generate_role, generate_sort_string, generate_sound, generate_tel, generate_title, generate_tz, generate_uid, generate_url, m, parse_adr, parse_bday, parse_categories, parse_class, parse_email, parse_fn, parse_geo, parse_key, parse_label, parse_line, parse_logo, parse_mailer, parse_n, parse_nickname, parse_note, parse_org, parse_params, parse_photo, parse_prodid, parse_rev, parse_role, parse_sort_string, parse_sound, parse_tel, parse_title, parse_tz, parse_uid, parse_url;
  m = {};
  m.generate = function(json) {
    var adr, email, k, klass, label, logo, note, org, photo, role, sound, string, tel, title, url, v, _i, _j, _k, _l, _len, _len1, _len10, _len11, _len12, _len2, _len3, _len4, _len5, _len6, _len7, _len8, _len9, _m, _n, _o, _p, _q, _r, _ref, _ref1, _ref10, _ref11, _ref12, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _s, _t, _u;
    string = "";
    string += "BEGIN:VCARD\r\n";
    for (k in json) {
      v = json[k];
      switch (k) {
        case "version":
          string += "VERSION:" + v + "\r\n";
          break;
        case "fn":
          string += generate_fn(json.fn);
          break;
        case "n":
          string += generate_n(json.n);
          break;
        case "nickname":
          string += generate_nickname(json.nickname);
          break;
        case "photos":
          _ref = json.photos;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            photo = _ref[_i];
            string += generate_photo(photo);
          }
          break;
        case "bday":
          string += generate_bday(json.bday);
          break;
        case "adrs":
          _ref1 = json.adrs;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            adr = _ref1[_j];
            string += generate_adr(adr);
          }
          break;
        case "labels":
          _ref2 = json.labels;
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
            label = _ref2[_k];
            string += generate_label(label);
          }
          break;
        case "tels":
          _ref3 = json.tels;
          for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
            tel = _ref3[_l];
            string += generate_tel(tel);
          }
          break;
        case "emails":
          _ref4 = json.emails;
          for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
            email = _ref4[_m];
            string += generate_email(email);
          }
          break;
        case "mailer":
          string += generate_mailer(json.mailer);
          break;
        case "tz":
          string += generate_tz(json.tz);
          break;
        case "geo":
          string += generate_geo(json.geo);
          break;
        case "titles":
          _ref5 = json.titles;
          for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
            title = _ref5[_n];
            string += generate_title(title);
          }
          break;
        case "roles":
          _ref6 = json.roles;
          for (_o = 0, _len6 = _ref6.length; _o < _len6; _o++) {
            role = _ref6[_o];
            string += generate_role(role);
          }
          break;
        case "logos":
          _ref7 = json.logos;
          for (_p = 0, _len7 = _ref7.length; _p < _len7; _p++) {
            logo = _ref7[_p];
            string += generate_logo(logo);
          }
          break;
        case "orgs":
          _ref8 = json.orgs;
          for (_q = 0, _len8 = _ref8.length; _q < _len8; _q++) {
            org = _ref8[_q];
            string += generate_org(org);
          }
          break;
        case "categories":
          string += generate_categories(json.categories);
          break;
        case "notes":
          _ref9 = json.notes;
          for (_r = 0, _len9 = _ref9.length; _r < _len9; _r++) {
            note = _ref9[_r];
            string += generate_note(note);
          }
          break;
        case "prodid":
          string += generate_prodid(json.prodid);
          break;
        case "rev":
          string += generate_rev(json.rev);
          break;
        case "sort_string":
          string += generate_sort_string(json.sort_string);
          break;
        case "sounds":
          _ref10 = json.sounds;
          for (_s = 0, _len10 = _ref10.length; _s < _len10; _s++) {
            sound = _ref10[_s];
            string += generate_sound(sound);
          }
          break;
        case "uid":
          string += generate_uid(json.uid);
          break;
        case "urls":
          _ref11 = json.urls;
          for (_t = 0, _len11 = _ref11.length; _t < _len11; _t++) {
            url = _ref11[_t];
            string += generate_url(url);
          }
          break;
        case "classes":
          _ref12 = json.classes;
          for (_u = 0, _len12 = _ref12.length; _u < _len12; _u++) {
            klass = _ref12[_u];
            string += generate_class(klass);
          }
          break;
        case "key":
          string += generate_key(json.key);
      }
    }
    return string += "END:VCARD";
  };
  
  m.parse = function(string) {
    var line, lines, newline, newlines, stringlines, _i, _j, _len, _len1;
    stringlines = string.split("\r\n");
    newlines = [];
    for (_i = 0, _len = stringlines.length; _i < _len; _i++) {
      line = stringlines[_i];
      if (!line.match(/BEGIN:VCARD|END:VCARD/)) {
        try { newlines.push(parse_line(line)); } catch (e) { console.log(e); }  // toby
      }
    }

    lines = {};
    for (_j = 0, _len1 = newlines.length; _j < _len1; _j++) {
      newline = newlines[_j];
      switch (newline.name) {
        case "VERSION":
          lines.version = newline.value;
          break;
        case "FN":
          lines.fn = parse_fn(newline);
          break;
        case "N":
          lines.n = parse_n(newline);
          break;
        case "NICKNAME":
          lines.nickname = parse_nickname(newline);
          break;
        case "PHOTO":
          lines.photos || (lines.photos = []);
          lines.photos.push(parse_photo(newline));
          break;
        case "BDAY":
          lines.bday = parse_bday(newline);
          break;
        case "ADR":
          lines.adrs || (lines.adrs = []);
          lines.adrs.push(parse_adr(newline));
          break;
        case "LABEL":
          lines.labels || (lines.labels = []);
          lines.labels.push(parse_label(newline));
          break;
        case "TEL":
          lines.tels || (lines.tels = []);
          lines.tels.push(parse_tel(newline));
          break;
        case "EMAIL":
          lines.emails || (lines.emails = []);
          lines.emails.push(parse_email(newline));
          break;
        case "MAILER":
          lines.mailer = parse_mailer(newline);
          break;
        case "TZ":
          lines.tz = parse_tz(newline);
          break;
        case "GEO":
          lines.geo = parse_geo(newline);
          break;
        case "TITLE":
          lines.titles || (lines.titles = []);
          lines.titles.push(parse_title(newline));
          break;
        case "ROLE":
          lines.roles || (lines.roles = []);
          lines.roles.push(parse_role(newline));
          break;
        case "LOGO":
          lines.logos || (lines.logos = []);
          lines.logos.push(parse_logo(newline));
          break;
        case "ORG":
          lines.orgs || (lines.orgs = []);
          lines.orgs.push(parse_org(newline));
          break;
        case "CATEGORIES":
          lines.categories = parse_categories(newline);
          break;
        case "NOTE":
          lines.notes || (lines.notes = []);
          lines.notes.push(parse_note(newline));
          break;
        case "PRODID":
          lines.prodid = parse_prodid(newline);
          break;
        case "REV":
          lines.rev = parse_rev(newline);
          break;
        case "SORT-STRING":
          lines.sort_string = parse_sort_string(newline);
          break;
        case "SOUND":
          lines.sounds || (lines.sounds = []);
          lines.sounds.push(parse_sound(newline));
          break;
        case "UID":
          lines.uid = parse_uid(newline);
          break;
        case "URL":
          lines.urls || (lines.urls = []);
          lines.urls.push(parse_url(newline));
          break;
        case "CLASS":
          lines.classes || (lines.classes = []);
          lines.classes.push(parse_class(newline));
          break;
        case "KEY":
          lines.key = parse_key(newline);
      }
    }
    return lines;
  };
  parse_line = function(string) {
    var json, res;
    json = {};
    res = string.match(/^(?:(\w+)\.)?([a-zA-Z-_]+)((?:;[a-zA-Z0-9-_]+=[a-zA-Z0-9-,]+)+)?:((?:.|\n)+)$/);
    if (!res) return {}; // toby
    if (res[1]) {
      json.group = res[1];
    }
    json.name = res[2];
    if (res[3]) {
      json.params = parse_params(res[3]);
    }
    json.value = res[4];
    return json;
  };
  parse_params = function(string) {
    var json, k, param, params, v, _i, _len;
    params = string.split(";");
    params.shift();
    json = {};
    for (_i = 0, _len = params.length; _i < _len; _i++) {
      param = params[_i];
      k = param.split("=")[0];
      v = param.split("=")[1];
      json[k.toLowerCase()] = v.toLowerCase();
    }
    return json;
  };
  parse_fn = function(json) {
    var fn, k, v, _ref;
    fn = {};
    if (json.group) {
      fn.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        fn.params || (fn.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          fn.params[k] = v;
        }
      }
    }
    fn.name = json.value;
    return fn;
  };
  parse_n = function(json) {
    var k, n, names, v, _ref;
    n = {};
    if (json.group) {
      n.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        n.params || (n.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          n.params[k] = v;
        }
      }
    }
    names = json.value.split(';');
    if (names[0]) {
      n.families = names[0].split(',');
    }
    if (names[1]) {
      n.givens = names[1].split(',');
    }
    if (names[2]) {
      n.middles = names[2].split(',');
    }
    if (names[3]) {
      n.prefixes = names[3].split(',');
    }
    if (names[4]) {
      n.suffixes = names[4].split(',');
    }
    return n;
  };
  parse_nickname = function(json) {
    var k, names, nickname, v, _ref;
    nickname = {};
    if (json.group) {
      nickname.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        nickname.params || (nickname.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          nickname.params[k] = v;
        }
      }
    }
    names = json.value.split(',');
    nickname.names = names;
    return nickname;
  };
  parse_photo = function(json) {
    var k, photo, v, _ref;
    photo = {};
    if (json.group) {
      photo.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        photo.params || (photo.params = {});
        if (k.match(/value|encoding|type/i)) {
          photo.params[k] = v;
        }
      }
    }
    photo.image = json.value;
    return photo;
  };
  parse_bday = function(json) {
    var bday, k, res, v, _ref;
    res = json.value.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})Z)?$/);
    bday = {};
    if (json.group) {
      bday.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        bday.params || (bday.params = {});
        if (k.match(/value/i)) {
          bday.params[k] = v;
        }
      }
    }
    bday.year = res[1];
    bday.month = res[2];
    bday.day = res[3];
    if (json.params && json.params.value && json.params.value.match(/date-time/i)) {
      if (res[4]) {
        bday.hour = res[4];
      }
      if (res[5]) {
        bday.minute = res[5];
      }
      if (res[6]) {
        bday.second = res[6];
      }
    }
    return bday;
  };
  parse_adr = function(json) {
    var a, adr, arr, k, res, v, _i, _len, _ref;
    adr = {};
    if (json.group) {
      adr.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        adr.params || (adr.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          adr.params[k] = v;
        }
        if (k.match("type")) {
          adr.params.types || (adr.params.types = []);
          if (v.match(/,/)) {
            arr = v.split(',');
            for (_i = 0, _len = arr.length; _i < _len; _i++) {
              a = arr[_i];
              adr.params.types.push(a);
            }
          } else {
            adr.params.types.push(v);
          }
        }
      }
    }
    res = json.value.split(';');
    if (res[0]) {
      adr.pobox = res[0];
    }
    if (res[1]) {
      adr.extended = res[1];
    }
    if (res[2]) {
      adr.street = res[2];
    }
    if (res[3]) {
      adr.locality = res[3];
    }
    if (res[4]) {
      adr.region = res[4];
    }
    if (res[5]) {
      adr.code = res[5];
    }
    if (res[6]) {
      adr.country = res[6];
    }
    return adr;
  };
  parse_label = function(json) {
    var a, arr, k, label, v, _i, _len, _ref;
    label = {};
    if (json.group) {
      label.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        label.params || (label.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          label.params[k] = v;
        }
        if (k.match("type")) {
          label.params.types || (label.params.types = []);
          if (v.match(/,/)) {
            arr = v.split(',');
            for (_i = 0, _len = arr.length; _i < _len; _i++) {
              a = arr[_i];
              label.params.types.push(a);
            }
          } else {
            label.params.types.push(v);
          }
        }
      }
    }
    label.address = json.value;
    return label;
  };
  parse_tel = function(json) {
    var a, arr, k, tel, v, _i, _len, _ref;
    tel = {};
    if (json.group) {
      tel.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match("type")) {
          tel.params || (tel.params = {});
          tel.params.types || (tel.params.types = []);
          if (v.match(/,/)) {
            arr = v.split(',');
            for (_i = 0, _len = arr.length; _i < _len; _i++) {
              a = arr[_i];
              tel.params.types.push(a);
            }
          } else {
            tel.params.types.push(v);
          }
        }
      }
    }
    tel.number = json.value;
    return tel;
  };
  parse_email = function(json) {
    var a, arr, email, k, v, _i, _len, _ref;
    email = {};
    if (json.group) {
      email.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match("type")) {
          email.params || (email.params = {});
          email.params.types || (email.params.types = []);
          if (v.match(/,/)) {
            arr = v.split(',');
            for (_i = 0, _len = arr.length; _i < _len; _i++) {
              a = arr[_i];
              email.params.types.push(a);
            }
          } else {
            email.params.types.push(v);
          }
        }
      }
    }
    email.address = json.value;
    return email;
  };
  parse_mailer = function(json) {
    var k, mailer, v, _ref;
    mailer = {};
    if (json.group) {
      mailer.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        mailer.params || (mailer.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          mailer.params[k] = v;
        }
      }
    }
    mailer.name = json.value;
    return mailer;
  };
  parse_tz = function(json) {
    var k, tz, v, _ref;
    tz = {};
    if (json.group) {
      tz.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        tz.params || (tz.params = {});
        if (k.match(/value/i)) {
          tz.params[k] = v;
        }
      }
    }
    tz.zone = json.value;
    return tz;
  };
  parse_geo = function(json) {
    var geo, res;
    geo = {};
    if (json.group) {
      geo.group = json.group;
    }
    res = json.value.split(';');
    geo.latitude = res[0];
    geo.longitude = res[1];
    return geo;
  };
  parse_title = function(json) {
    var k, title, v, _ref;
    title = {};
    if (json.group) {
      title.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        title.params || (title.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          title.params[k] = v;
        }
      }
    }
    title.name = json.value;
    return title;
  };
  parse_role = function(json) {
    var k, role, v, _ref;
    role = {};
    if (json.group) {
      role.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        role.params || (role.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          role.params[k] = v;
        }
      }
    }
    role.name = json.value;
    return role;
  };
  parse_logo = function(json) {
    var k, logo, v, _ref;
    logo = {};
    if (json.group) {
      logo.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        logo.params || (logo.params = {});
        if (k.match(/value|encoding|type/i)) {
          logo.params[k] = v;
        }
      }
    }
    logo.image = json.value;
    return logo;
  };
  parse_org = function(json) {
    var k, org, res, v, _ref;
    org = {};
    if (json.group) {
      org.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        org.params || (org.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          org.params[k] = v;
        }
      }
    }
    res = json.value.split(';');
    if (res[0]) {
      org.name = res[0];
    }
    if (res[1]) {
      org.unit = res[1];
    }
    if (res[2]) {
      org.unit2 = res[2];
    }
    return org;
  };
  parse_categories = function(json) {
    var categories, k, v, _ref;
    categories = {};
    if (json.group) {
      categories.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        categories.params || (categories.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          categories.params[k] = v;
        }
      }
    }
    categories.names = json.value.split(',');
    return categories;
  };
  parse_note = function(json) {
    var k, note, v, _ref;
    note = {};
    if (json.group) {
      note.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        note.params || (note.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          note.params[k] = v;
        }
      }
    }
    note.description = json.value;
    return note;
  };
  parse_prodid = function(json) {
    var prodid;
    prodid = {};
    if (json.group) {
      prodid.group = json.group;
    }
    prodid.id = json.value;
    return prodid;
  };
  parse_rev = function(json) {
    var k, res, rev, v, _ref;
    res = json.value.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})Z)?$/);
    rev = {};
    if (json.group) {
      rev.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        rev.params || (rev.params = {});
        if (k.match(/value/i)) {
          rev.params[k] = v;
        }
      }
    }
    if (!res) return {}; // toby
    rev.year = res[1];
    rev.month = res[2];
    rev.day = res[3];
    if (res[4]) {
      rev.hour = res[4];
    }
    if (res[5]) {
      rev.minute = res[5];
    }
    if (res[6]) {
      rev.second = res[6];
    }
    return rev;
  };
  parse_sort_string = function(json) {
    var k, sort_string, v, _ref;
    sort_string = {};
    if (json.group) {
      sort_string.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        sort_string.params || (sort_string.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          sort_string.params[k] = v;
        }
      }
    }
    sort_string.name = json.value;
    return sort_string;
  };
  parse_sound = function(json) {
    var k, sound, v, _ref;
    sound = {};
    if (json.group) {
      sound.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        sound.params || (sound.params = {});
        if (k.match(/value|encoding|type/i)) {
          sound.params[k] = v;
        }
      }
    }
    sound.value = json.value;
    return sound;
  };
  parse_uid = function(json) {
    var k, uid, v, _ref;
    uid = {};
    if (json.group) {
      uid.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        uid.params || (uid.params = {});
        if (k.match(/type/i)) {
          uid.params[k] = v;
        }
      }
    }
    uid.id = json.value;
    return uid;
  };
  parse_url = function(json) {
    var url;
    url = {};
    if (json.group) {
      url.group = json.group;
    }
    url.uri = json.value;
    return url;
  };
  parse_class = function(json) {
    var klass;
    klass = {};
    if (json.group) {
      klass.group = json.group;
    }
    klass.name = json.value.toLowerCase();
    return klass;
  };
  parse_key = function(json) {
    var k, key, v, _ref;
    key = {};
    if (json.group) {
      key.group = json.group;
    }
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        key.params || (key.params = {});
        if (k.match(/value|encoding|type/i)) {
          key.params[k] = v;
        }
      }
    }
    key.value = json.value;
    return key;
  };
  generate_fn = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "FN";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.name + "\r\n";
    return string;
  };
  generate_n = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "N";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += json.families ? ":" + (json.families.join(',')) + ";" : ":;";
    string += json.givens ? "" + (json.givens.join(',')) + ";" : ";";
    string += json.middles ? "" + (json.middles.join(',')) + ";" : ";";
    string += json.prefixes ? "" + (json.prefixes.join(',')) + ";" : ";";
    string += json.suffixes ? "" + (json.suffixes.join(',')) + "\r\n" : "\r\n";
    return string;
  };
  generate_nickname = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "NICKNAME";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + (json.names.join(',')) + "\r\n";
    return string;
  };
  generate_photo = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "PHOTO";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|encoding|type/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.image + "\r\n";
    return string;
  };
  generate_bday = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "BDAY";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.year + "-" + json.month + "-" + json.day;
    if (json.params && json.params.value && (json.params.value === "date-time")) {
      string += "T" + json.hour + ":" + json.minute + ":" + json.second + "Z";
    }
    string += "\r\n";
    return string;
  };
  generate_adr = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "ADR";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
        if (k.match(/types/)) {
          string += ";TYPE=" + (v.join(',').toUpperCase());
        }
      }
    }
    if (json.pobox) {
      string += ":" + json.pobox + ";";
    } else {
      string += ":;";
    }
    if (json.extended) {
      string += "" + json.extended + ";";
    } else {
      string += ";";
    }
    if (json.street) {
      string += "" + json.street + ";";
    } else {
      string += ";";
    }
    if (json.locality) {
      string += "" + json.locality + ";";
    } else {
      string += ";";
    }
    if (json.region) {
      string += "" + json.region + ";";
    } else {
      string += ";";
    }
    if (json.code) {
      string += "" + json.code + ";";
    } else {
      string += ";";
    }
    if (json.country) {
      string += "" + json.country + "\r\n";
    } else {
      string += "\r\n";
    }
    return string;
  };
  generate_label = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "LABEL";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
        if (k.match(/types/)) {
          string += ";TYPE=" + (v.join(',').toUpperCase());
        }
      }
    }
    string += ":" + json.address + "\r\n";
    return string;
  };
  generate_tel = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "TEL";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/types/)) {
          string += ";TYPE=" + (v.join(',').toUpperCase());
        }
      }
    }
    string += ":" + json.number + "\r\n";
    return string;
  };
  generate_email = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "EMAIL";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/types/)) {
          string += ";TYPE=" + (v.join(',').toUpperCase());
        }
      }
    }
    string += ":" + json.address + "\r\n";
    return string;
  };
  generate_mailer = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "MAILER";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.name + "\r\n";
    return string;
  };
  generate_tz = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "TZ";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.zone;
    string += "\r\n";
    return string;
  };
  generate_geo = function(json) {
    var string;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "GEO";
    string += ":" + json.latitude + ";" + json.longitude + "\r\n";
    return string;
  };
  generate_title = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "TITLE";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.name + "\r\n";
    return string;
  };
  generate_role = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "ROLE";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.name + "\r\n";
    return string;
  };
  generate_logo = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "LOGO";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|encoding|type/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.image + "\r\n";
    return string;
  };
  generate_org = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "ORG";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.name;
    string += ";" + json.unit;
    string += ";" + json.unit2;
    string += "\r\n";
    return string;
  };
  generate_categories = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "CATEGORIES";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + (json.names.join(',')) + "\r\n";
    return string;
  };
  generate_note = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "NOTE";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.description + "\r\n";
    return string;
  };
  generate_prodid = function(json) {
    var string;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "PRODID";
    string += ":" + json.id + "\r\n";
    return string;
  };
  generate_rev = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "REV";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.year + "-" + json.month + "-" + json.day;
    if (json.hour && json.minute && json.second) {
      string += "T" + json.hour + ":" + json.minute + ":" + json.second + "Z";
    }
    string += "\r\n";
    return string;
  };
  generate_sort_string = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "SORT-STRING";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.name + "\r\n";
    return string;
  };
  generate_sound = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "SOUND";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|encoding|type/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.value + "\r\n";
    return string;
  };
  generate_uid = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "UID";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/type/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.id + "\r\n";
    return string;
  };
  generate_url = function(json) {
    var string;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "URL";
    string += ":" + json.uri + "\r\n";
    return string;
  };
  generate_class = function(json) {
    var string;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "CLASS";
    string += ":" + (json.name.toUpperCase()) + "\r\n";
    return string;
  };
  generate_key = function(json) {
    var k, string, v, _ref;
    string = "";
    if (json.group) {
      string += "" + json.group + ".";
    }
    string += "KEY";
    if (json.params) {
      _ref = json.params;
      for (k in _ref) {
        v = _ref[k];
        if (k.match(/value|encoding|type/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.value + "\r\n";
    return string;
  };
  return m;
})();
