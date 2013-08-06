<<<<<<< HEAD
﻿/**
* @class Object Native Object
* @namespace __proto__
=======
'use strict';
/**
* @class Object Classe base do framework
* @namespace Object
>>>>>>> 6e165aaae6268ae3a00de8e5a75afbeda713e56f
* @singleton
*/
/**
* Object values, similar to Object.keys
* @method
* @param {object} obj Object to get values
* @return {array} Array object values
* @example 
*   var obj = {a:1, b:2, c:3}, values = Object.values(obj);
*   //[1, 2, 3];
*/
Object.values = function (obj) {
    var vals = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            vals.push(obj[key]);
        }
    }
    return vals;
}
/**
* @class String String.prototype
* @namespace __proto__
* @singleton
*/
/**
* Remove any underscores or dashes and convert a string into camel casing.
* @method 
* @return {string} 
* @example
*   'data_rate'.camelize(); //'dataRate'
*   'background-color'.camelize(); //'backgroundColor'
*   '-moz-something'.camelize(); //'mozSomething'
*   '_car_speed_'.camelize(); //'carSpeed'
*   'yes_we_can'.camelize(); //'yesWeCan'
*/
/*String.prototype.camelize = null;*/
Object.defineProperty(String.prototype, "camelize", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        var s = this.trim().replace(/(\-|_|\s)+(.)?/g, function (mathc, sep, c) {
            return (c ? c.toUpperCase() : '');
        });
        return s;
    }
});
/**
* Capitalizes the first character of a string.
* @method
* @return {string} 
* @example
*   'jon'.capitalize(); //Jon
*   'jon, peter'.capitalize(); //Jon, Peter
*/
/*String.prototype.capitalize = null;*/
Object.defineProperty(String.prototype, "capitalize", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        return (this.substr(0, 1).toUpperCase() + this.substring(1).toLowerCase());
    }
});
/**
* Converts all adjacent whitespace characters to a single space. 
* @method
* @return {string} 
* @example 
*   '  String   \t libraries are   \n\n\t fun\n!  '.collapseWhitespace(); //'String libraries are fun !'
*/
/*String.prototype.collapseWhitespace = null;*/
Object.defineProperty(String.prototype, "collapseWhitespace", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        return this.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
    }
});
/**
* Returns true if the string contains
* @method
* @return {boolean} 
* @example
*   'JavaScript is one of the best languages!'.contains('one'); //true
*/
/*String.prototype.contains = null;*/
Object.defineProperty(String.prototype, "contains", {
    enumerable: false, configurable: false, writable: false,
    value: function (s) {
        return !! ~this.indexOf(s); //this.indexOf(s) >= 0;
    }
});
/**
* Returns a converted camel cased string into a string delimited by dashes.
* @method
* @return {string} 
* @example
*   'dataRate'.dasherize() //'data-rate'
*/
/*String.prototype.dasherize = null;*/
Object.defineProperty(String.prototype, "dasherize", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        return this.trim().replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase();
    }
});
/**
* Decodes HTML entities into their string representation.
* @method
* @return {string} 
* @example
*   'Ken Thompson &amp; Dennis Ritchie'.decodeHtmlEntities() //'Ken Thompson & Dennis Ritchie'
*/
/*String.prototype.decodeHtmlEntities = null;*/
Object.defineProperty(String.prototype, "decodeHtmlEntities", {
    enumerable: false, configurable: false, writable: false,
    value: function (quote_style) { //from php.js
        var symbol = "", entity = "", hash_map = {};
        var tmp_str = this;
        if (false === (hash_map = get_html_translation_table("HTML_ENTITIES", quote_style))) {
            return false;
        }
        delete hash_map["&"];
        hash_map["&"] = "&amp;";
        for (symbol in hash_map) {
            entity = hash_map[symbol];
            tmp_str = tmp_str.split(entity).join(symbol);
        }
        return tmp_str.split("&#039;").join("'");
    }
});
/**
* Returns true if the string ends with
* @method
* @return {boolean} 
* @example
*   "hello jon".endsWith('jon'); //true
*/
/*String.prototype.endsWith = null;*/
Object.defineProperty(String.prototype, "endsWith", {
    enumerable: false, configurable: false, writable: false,
    value: function (suffix) {
        var l = this.length - suffix.length;
        return l >= 0 && this.indexOf(suffix, l) === l;
    }
});
/**
* Escapes the html.
* @method
* @return {string} 
* @example
*   '<div>hi</div>'.escapeHTML(); //&lt;div&gt;hi&lt;/div&gt;
*/
/*String.prototype.escapeHTML = null;*/
Object.defineProperty(String.prototype, "escapeHTML", {
    enumerable: false, configurable: false, writable: false,
    value: function () { //from underscore.string
        return this.replace(/[&<>"']/g, function (m) { return '&' + reversedEscapeChars[m] + ';'; });
    }
});
/**
* Return true if the string contains only letters.
* @method
* @return {boolean} 
* @example
*   "afaf".isAlpha(); //true
*   'fdafaf3'.isAlpha(); //false
*   'dfdf--dfd'.isAlpha(); //false
*/
/*String.prototype.isAlpha = null;*/
Object.defineProperty(String.prototype, "isAlpha", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        return !/[^a-z\xC0-\xFF]/.test(this.toLowerCase());
    }
});
/**
* Return true if the string contains only letters and numbers
* @method
* @return {boolean} 
* @example
*   "afaf35353afaf".isAlphaNumeric(); //true
*   "FFFF99fff".isAlphaNumeric(); //true
*   "99".isAlphaNumeric(); //true
*   "Infinity".isAlphaNumeric(); //true
*   "-Infinity".isAlphaNumeric(); //false
*/
/*String.prototype.isAlphaNumeric = null;*/
Object.defineProperty(String.prototype, "isAlphaNumeric", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        return !/[^0-9a-z\xC0-\xFF]/.test(this.toLowerCase());
    }
});
/**
* Return true if the string is solely composed of whitespace or is null/undefined.
* @method
* @return {boolean} 
* @example
*   ' '.isEmpty(); //true
*   ' '.isEmpty(' '); //true
*/
/*String.prototype.isEmpty = null;*/
Object.defineProperty(String.prototype, "isEmpty", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        return this === null || this === undefined ? true : /^[\s\xa0]*$/.test(this);
    }
});
/**
* Return true if the character or string is lowercase
* @method
* @return {boolean}
* @example 
*   'a'.isLower(); //true
*   'B'.isLower(); //false
*/
/*String.prototype.isLower = null;*/
Object.defineProperty(String.prototype, "isLower", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        return this.isAlpha() && this.toLowerCase() === this;
    }
});
/**
* Return true if the string only contains digits
* @method
* @return {boolean}
* @example 
*   "3".isNumeric(); //true
*   "NaN".isNumeric(); //false
*/
/*String.prototype.isNumeric = null;*/
Object.defineProperty(String.prototype, "isNumeric", {
    enumerable: false, configurable: false, writable: false,
    value: function () { 
        return !/[^0-9]/.test(this);
    }
});
/**
* Returns true if the character or string is uppercase
* @method
* @return {boolean} 
* @example
*   'a'.isUpper() //false
*   'B'.isUpper() //true
*/
/*String.prototype.isUpper = null;*/
Object.defineProperty(String.prototype, "isUpper", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        return this.isAlpha() && this.toUpperCase() === this;
    }
});
/**
* Return the substring denoted by n positive left-most characters.
* @method
* @return {string} 
* @example
*   'My name is JP'.left(2); //'My'
*   'My name is JP'.left(-2); //'JP', same as right(2)
*/
/*String.prototype.left = null;*/
Object.defineProperty(String.prototype, "left", {
    enumerable: false, configurable: false, writable: false,
    value: function (N) {
        if (N >= 0) {
            return this.substr(0, N);
        } else {
            return this.right(-N);
        }
    }
});
/**
* Returns an array of native strings representing lines with whitespace trimmed.
* @method
* @return {array} 
* @example
*   var lines = S('1 Infinite Loop\r\nCupertino, CA').toLines();
*   lines[0] // '1 Infinite Loop'
*   lines[1] // 'Cupertino, CA'
*/
/*String.prototype.toLines = null;*/
Object.defineProperty(String.prototype, "toLines", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        var lines = this.split('\n');
        for (var i = 0; i < lines.length; ++i) {
            lines[i] = lines[i].replace(/(^\s*|\s*$)/g, '');
        }
        return lines;
    }
});
/**
* Pads the string in the center with specified character
* @method
* @return {string} 
* @example
*   'hello'.pad(10)   //'   hello  '
*   'hey'.pad(7, '-') //'--hey--'
* @ref https://github.com/component/pad
*/
/*String.prototype.pad = null;*/
Object.defineProperty(String.prototype, "pad", {
    enumerable: false, configurable: false, writable: false,
    value: function (len, ch) {
        ch = ch || ' ';
        if (this.length >= len) return this;
        len = len - this.length;
        var left = Array(Math.ceil(len / 2) + 1).join(ch);
        var right = Array(Math.floor(len / 2) + 1).join(ch);
        return left + this + right;
    }
});
/**
* Left pads the string.
* @method
* @return {string} 
* @example
*   'hello'.padLeft(10)   //'     hello'
*/
/*String.prototype.padLeft = null;*/
Object.defineProperty(String.prototype, "padLeft", {
    enumerable: false, configurable: false, writable: false,
    value: function (len, ch) { //https://github.com/component/pad
        ch = ch || ' ';
        if (this.length >= len) return this.s;
        return Array(len - this.length + 1).join(ch) + this;
    }
});
/**
* Right pads the string.
* @method
* @return {string} 
* @example
*   'hello'.padRight(10, '.') //'hello.....'
* @ref https://github.com/component/pad
*/
/*String.prototype.padRight = null;*/
Object.defineProperty(String.prototype, "padRight", {
    enumerable: false, configurable: false, writable: false,
    value: function (len, ch) { 
        ch = ch || ' ';
        if (this.length >= len) return this.toString();
        return this.toString().substr(0, len) + ch;
    }
});
/**
* Return the new string with all occurrences of ss replaced with newstr.
* @method
* @return {string} 
* @example
*   ' does IT work? '.replaceAll(' ', '_'); //'_does_IT_work?_'
*   'Yes it does!'.replaceAll(' ', ''); //'Yesitdoes!'
*/
/*String.prototype.replaceAll = null;*/
Object.defineProperty(String.prototype, "replaceAll", {
    enumerable: false, configurable: false, writable: false,
    value: function (ss, r) {
        return this.split(ss).join(r);
    }
});
/**
* Return the substring denoted by n positive right-most characters.
* @method
* @return {string} 
* @example
*   'My name is JP'.right(-2); //'My', same as left(2)
*/
/*String.prototype.right = null;*/
Object.defineProperty(String.prototype, "right", {
    enumerable: false, configurable: false, writable: false,
    value: function (N) {
        if (N >= 0) {
            return this.substr(this.length - N, N);
        } else {
            return this.left(-N);
        }
    }
});
/**
* Converts the text into a valid url slug.
* @method
* @return {string} 
* @example
*   'Global Thermonuclear Warfare'.slugify() // 'global-thermonuclear-warfare'
*/
/*String.prototype.slugify = null;*/
Object.defineProperty(String.prototype, "slugify", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        var sl = (this.replace(/[^\w\s-]/g, '').toLowerCase()).dasherize();
        if (sl.charAt(0) === '-') sl = sl.substr(1);
        return sl;
    }
});
/**
* Return true if the string starts with prefix.
* @method
* @return {boolean} 
* @example
*   "JP is a software engineer".startsWith("JP"); //true
*/
/*String.prototype.startsWith = null;*/
Object.defineProperty(String.prototype, "startsWith", {
    enumerable: false, configurable: false, writable: false,
    value: function(prefix) {
        return this.lastIndexOf(prefix, 0) === 0;
    }
});
/**
* Strip all of the punctuation.
* @method
* @return {string} 
* @example
*   'My, st[ring] *full* of %punct)'.stripPunctuation(); //My string full of punct
*/
/*String.prototype.stripPunctuation = null;*/
Object.defineProperty(String.prototype, "stripPunctuation", {
    enumerable: false, configurable: false, writable: false,
    value: function() {
        return this.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    }
});
/**
* Strip all of the HTML tags or tags specified by the parameters.
* @method
* @return {string} 
* @example
*   '<p>just <b>some</b> text</p>'.stripTags() //'just some text'
*   '<p>just <b>some</b> text</p>'.stripTags('p') //'just <b>some</b> text'
*/
/*String.prototype.stripTags = null;*/
Object.defineProperty(String.prototype, "stripTags", {
    enumerable: false, configurable: false, writable: false,
    value: function() { //from sugar.js
        var s = this, args = arguments.length > 0 ? arguments : [''];
        multiArgs(args, function(tag) {
            s = s.replace(RegExp('<\/?' + tag + '[^<>]*>', 'gi'), '');
        });
      return s;
    }
});
/**
* Takes a string and interpolates the values. Defaults to {{ and }} for Mustache compatible templates
* @method
* @return {string} 
* @example
*   var str = "Hello {{name}}! How are you doing during the year of {{date-year}}?"
*   var values = {name: 'JP', 'date-year': 2013}
*   str.template(values); //'Hello JP! How are you doing during the year of 2013?'
*/
/*String.prototype.template = null;*/
Object.defineProperty(String.prototype, "template", {
    enumerable: false, configurable: false, writable: false,
    value: function(values, opening, closing) {
        var s = this
        var opening = opening || '{{';
        var closing = closing || '}}';
        var r = new RegExp(opening + '(.+?)' + closing, 'g')
          //, r = /\{\{(.+?)\}\}/g
        var matches = s.match(r) || [];
        
        matches.forEach(function(match) {
          var key = match.substring(opening.length, match.length - closing.length);//chop {{ and }}
          if (values[key]) 
            s = s.replace(match, values[key]);
        });
        return s;
    }
});
/**
* Returns a string repeated n times.
* @method
* @return {string} 
* @example
*   '*'.repeat(3) //'***'
*/
/*String.prototype.repeat = null;*/
Object.defineProperty(String.prototype, "repeat", {
    enumerable: false, configurable: false, writable: false,
    value: function(n) {
        return new Array(n + 1).join(this);
    }
});
/**
* Converts a a logical truth string to boolean. That is: true, 1, 'true', 'on', or 'yes'.
* @method
* @return {boolean} 
* @example
*   'true'.toBoolean() //true
*   'ON'.toBoolean() //true
*/
/*String.prototype.toBoolean = null;*/
Object.defineProperty(String.prototype, "toBoolean", {
    enumerable: false, configurable: false, writable: false,
    value: function() {
        var s = this.toLowerCase();
        return s === 'true' || s === 'yes' || s === 'on' || s === '1';
    }
});
/**
* Return the float value, wraps parseFloat.
* @method
* @return {float} 
* @example
*   '5'.toFloat() // 5
*   '3.45522222333232'.toFloat(2) // 3.46
*/
/*String.prototype.toFloat = null;*/
Object.defineProperty(String.prototype, "toFloat", {
    enumerable: false, configurable: false, writable: false,
    value: function(precision) {
        var num = parseFloat(this, 10);
        if (precision) return parseFloat(num.toFixed(precision));
        else return num;
    }
});
/**
* Return the number value in integer form. Wrapper for parseInt(). Can also parse hex values.
* @method
* @return {int} 
* @example
*   '5'.toInt(); //5
*   '0xff'.toInt() //255
*/
/*String.prototype.toInt = null;*/
Object.defineProperty(String.prototype, "toInt", {
    enumerable: false, configurable: false, writable: false,
    value: function() {
        return /^\s*-?0x/i.test(this) ? parseInt(this, 16) : parseInt(this, 10);
    }
});
/**
* Return the string with leading and trailing whitespace removed. Reverts to native trim() if it exists.
* @method
* @return {string} 
* @example
*   '\nhello\r\n'.trim(); //'hello'
*/
/*String.prototype.trim = null;*/
Object.defineProperty(String.prototype, "trim", {
    enumerable: false, configurable: false, writable: false,
    value: String.prototype.trim || function() {
        return this.replace(/(^\s*|\s*$)/g, '');
    }
});
/**
* Return the string with leading and whitespace removed
* @method
* @return {string} 
* @example
*   '  How are you?'.trimLeft(); //'How are you?';
*/
/*String.prototype.trimLeft = null;*/
Object.defineProperty(String.prototype, "trimLeft", {
    enumerable: false, configurable: false, writable: false,
    value: String.prototype.trimLeft||function() {
        return this.replace(/(^\s*)/g, '');
    }
});
/**
* Return the string with trailing whitespace removed.
* @method
* @return {string} 
* @example
*   'How are you?   '.trimRight(); //'How are you?';
*/
/*String.prototype.trimRight = null;*/
Object.defineProperty(String.prototype, "trimRight", {
    enumerable: false, configurable: false, writable: false,
    value: String.prototype.trimRight||function() {
        return this.replace(/\s+$/, '');
    }
});
/**
* Truncates the string, accounting for word placement and character count.
* @method
* @return {string} 
* @example
*   'this is some long text'.truncate(7) //'this is...'
*   'this is some long text'.truncate(14, ' read more') //'this is some read more'
*/
/*String.prototype.truncate = null;*/
Object.defineProperty(String.prototype, "truncate", {
    enumerable: false, configurable: false, writable: false,
    value: function(length, pruneStr) { //from underscore.string, author: github.com/rwz
        var str = this;

        length = ~~length;
        pruneStr = pruneStr || '...';

        if (str.length <= length) return str;
        else return str.substring(0, length) + pruneStr;

        var tmpl = function(c){ return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' '; },
          template = str.slice(0, length+1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'

        if (template.slice(template.length-2).match(/\w\w/))template = template.replace(/\s*\S+$/, '');
        else template = template.slice(0, template.length-1).trimRight();

        return (template+pruneStr).length > str.length ? str : str.slice(0, template.length)+pruneStr;
    }
});
/**
* Returns converted camel cased string into a string delimited by underscores.
* @method
* @return {string} 
* @example
*   'dataRate'.underscore(); //'data_rate'
* @ref https://github.com/epeli/underscore.string
*/
/*String.prototype.underscore = null;*/
Object.defineProperty(String.prototype, "underscore", {
    enumerable: false, configurable: false, writable: false,
    value: function() {
        var s = this.trim().replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
        if ((this.charAt(0)).isUpper()) {
          s = '_' + s;
        }
        return s;
    }
});
/**
* Unescapes the html.
* @method
* @return {string} 
* @example
*   '&lt;div&gt;hi&lt;/div&gt;'.unescapeHTML(); //<div>hi</div>
*/
/*String.prototype.unescapeHTML = null;*/
Object.defineProperty(String.prototype, "unescapeHTML", {
    enumerable: false, configurable: false, writable: false,
    value: function() { //from underscore.string
        return this.replace(/\&([^;]+);/g, function(entity, entityCode){
            var match;

            if (entityCode in escapeChars) {
              return escapeChars[entityCode];
            } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
              return String.fromCharCode(parseInt(match[1], 16));
            } else if (match = entityCode.match(/^#(\d+)$/)) {
              return String.fromCharCode(~~match[1]);
            } else {
              return entity;
            }
        });
    }
});
/**
* Convert all break lines in <br/>
* @method
* @return {string} 
* @example
*   "line 1\nline2".nl2br(); //line 1<br/>line 2
*/
/*String.prototype.nl2br = null;*/
Object.defineProperty(String.prototype, "nl2br", {
    enumerable: false, configurable: false, writable: false,
    value: function(){
        return this.replace(/\n/g, "<br />").replace(/\n/g, "<br/>").replace(/\n/g, "<br>");
    }
});
/**
* String that contains placeholders and some parameters, and it replaces the placeholders from the template string with the 
* parameter values. It is similar to String.template.
* @method
* @return {string} 
* @example
*   "{0} is dead, but {1} is alive!".format("ASP", "ASP.NET") //"ASP is dead, but ASP.NET is alive!"
*   "This is a test {test}".format({test: "utils"});      //This is a test utils
* @ref /__proto__/docs/source/__proto__.html#method-String-template String.template
*/
/*String.prototype.format = null;*/
Object.defineProperty(String.prototype, "format", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        if (typeof arguments[0] === "object") {
            var obj = arguments[0];
            return this.replace(/{([^{}]+)}/g, function (full, word) {
                return ((typeof obj[word] === 'string' || typeof obj[word] === 'number') ? obj[word] : full);
            });
        } else {
            var s = this;
            for (var i = 0; i < arguments.length; i++) {
                var reg = new RegExp("\\{" + i + "\\}", "gm");
                s = s.replace(reg, arguments[i]);
            }
            return s;
        }
    }
});
/**
* Convert string to number, int ou double
* @method
* @return {int|float} 
* @example
*   "0,01".toNumber(); //0.01
*   "1".toNumber(); //1
*/
/*String.prototype.toNumber = null;*/
Object.defineProperty(String.prototype, "toNumber", {
    enumerable: false, configurable: false, writable: false,
    value: function () {
        var value = this.toString();

        if(value.toString().isEmpty())value = 0;
        else if (value.indexOf(",") > 0 && value.indexOf(".") == 0) value = parseFloat(value.replace(",", "."));
        else if(value.indexOf(",") > 0) {
            value = value.replace(/\./gi, "");
            value = value.replace(/,/gi, ".");
            value = parseFloat(value);
        }
        else if (value.indexOf(".") > 0)value = parseFloat(value);
        else if (isNaN(value) === false) value = parseInt(value);
        else value = 0;

        return value;
    }
});
/**
* @class Array Array.prototype
* @namespace __proto__
* @singleton
*/
/**
* Array.prototype.[method name] allows you to define/overwrite an objects method
* needle is the item you are searching for
* this is a special variable that refers to "this" instance of an Array.
* @method
* @return {boolean} true if needle is in the array, and false otherwise 
* @example
*   [1,3,5,7,9].contains(3); //true
*/
/*Array.prototype.contains = null;*/
Object.defineProperty(Array.prototype, "contains", {
    enumerable: false, configurable: false, writable: false,
    value: function (needle) {
        for (var i in this) {
            if (this[i] == needle) return true;
        }
        return false;
    }
});
/**
* Return agruped array 
* @method
* @return {array} 
* @example
*   [
*       { "day": 1, "value", 35 }, 
*       { "day": 1, "value", 15 }, 
*       { "day": 2, "value", 90 }, 
*       { "day": 2, "value", 90 }, 
*       { "day": 3, "value", 10 }
*   ].groupBy("day"); 
*   //return
*   [
*       {key: 1, values: [{ "day": 1, "value", 35 }, { "day": 1, "value", 35 }]},
*       {key: 2, values: [{ "day": 2, "value", 90 }, { "day": 2, "value", 90 }]},
*       {key: 3, values: [{ "day": 3, "value", 10 }]}
*   ]
* @ref http://stackoverflow.com/questions/1267158/javascript-dynamic-grouping
*/
/*Array.prototype.groupBy = null;*/
Object.defineProperty(Array.prototype, "groupBy", {
    enumerable: false, configurable: false, writable: false,
    value: function (property) {
        "use strict";
        function deepCopy(p) {
            var c = {};
            for (var i in p) {
                if (typeof p[i] === 'object') {
                    c[i] = (Object.hasOwnProperty(p[i], "constructor") && p[i].constructor === Array) ? [] : p[i];
                    deepCopy(p[i], c[i]);
                }
                else {
                    var type = Object.prototype.toString.call(p[i]);
                    try {
                        if (/Boolean/i.test(type)) p[i] = p[i].toString().toBoolean();
                        else if (/Number/i.test(type)) p[i] = p[i].toString().toNumber();
                        else if (/Date/i.test(type)) p[i] = Date.parse(p[i]);
                    } catch (e) {

                    }                    
                    c[i] = p[i];                    
                }
            }
            return c;
        }
        var retarr = [];
        var len = this.length;
        for (var i = 0; i < len; i++) {
            var groupedlen = retarr.length, found = false;
            for (var j = 0; j < groupedlen; j++) {
                if (this[i][property].toString() === retarr[j].key.toString()) {
                    retarr[j].values.push(deepCopy(this[i]));
                    found = true;
                    break;
                }
            }
            if (found === false) {
                retarr.push({
                    key: this[i][property],
                    values: []
                });
                retarr[retarr.length - 1].values.push(deepCopy(this[i]));
            }
        }
        return retarr;
    }
});

//TODO: Implements storage prototype, to parse values when get and set
localStorage.setItem = function(key, value){
    var type = Object.prototype.toString.call(value, []);
    if(/object|json/i.test(type))value = JSON.stringify(value);
    else if(/array/i.test(type))value = value.join("||");
    localStorage[key] = value;
    return this;
};
localStorage.getItem = function(key, parseType){
    var value = localStorage[key];
    if(/bool/i.test(parseType))value = value.toString().toBoolean();
    else if(/int|float/i.test(parseType))value = value.toString().toNumber();
    else if(/date/i.test(parseType)){
        try{ value = new Date(value); }
        catch(ex){ value = Date.parse(value); }
    }else if(/object|json/i.test(parseType))value = JSON.parse(value);
    else if(/array/i.test(parseType))value = value.split(",");
    return value;
};
sessionStorage.setItem = function(key, value){
    var type = Object.prototype.toString.call(value, []);
    if(/object|json/i.test(type))value = JSON.stringify(value);
    else if(/array/i.test(type))value = value.join("||");
    localStorage[key] = value;
    return this;
};
sessionStorage.getItem = function(key, parseType){
    var value = localStorage[key];
    if(/bool/i.test(parseType))value = value.toString().toBoolean();
    else if(/int|float/i.test(parseType))value = value.toString().toNumber();
    else if(/date/i.test(parseType)){
        try{ value = new Date(value); }
        catch(ex){ value = Date.parse(value); }
    }else if(/object|json/i.test(parseType))value = JSON.parse(value);
    else if(/array/i.test(parseType))value = value.split(",");
    return value;
};


/**
* Helpers
*/
//from sugar.js
function multiArgs(args, fn) {
    var result = [], i;
    for(i = 0; i < args.length; i++) {
      result.push(args[i]);
      if(fn) fn.call(args, args[i], i);
    }
    return result;
}
//from underscore.string
var escapeChars = {
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    amp: '&'
};

//from underscore.string
var reversedEscapeChars = {};
for (var key in escapeChars) { reversedEscapeChars[escapeChars[key]] = key; }

//from PHP.js  
function get_html_translation_table(table, quote_style) {
    var entities = {},
          hash_map = {},
          decimal;
    var constMappingTable = {},
          constMappingQuoteStyle = {};
    var useTable = {},
          useQuoteStyle = {};

    // Translate arguments
    constMappingTable[0] = 'HTML_SPECIALCHARS';
    constMappingTable[1] = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';

    useTable = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
    useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT';

    if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
        throw new Error("Table: " + useTable + ' not supported');
        // return false;
    }

    entities['38'] = '&amp;';
    if (useTable === 'HTML_ENTITIES') {
        entities['160'] = '&nbsp;';
        entities['161'] = '&iexcl;';
        entities['162'] = '&cent;';
        entities['163'] = '&pound;';
        entities['164'] = '&curren;';
        entities['165'] = '&yen;';
        entities['166'] = '&brvbar;';
        entities['167'] = '&sect;';
        entities['168'] = '&uml;';
        entities['169'] = '&copy;';
        entities['170'] = '&ordf;';
        entities['171'] = '&laquo;';
        entities['172'] = '&not;';
        entities['173'] = '&shy;';
        entities['174'] = '&reg;';
        entities['175'] = '&macr;';
        entities['176'] = '&deg;';
        entities['177'] = '&plusmn;';
        entities['178'] = '&sup2;';
        entities['179'] = '&sup3;';
        entities['180'] = '&acute;';
        entities['181'] = '&micro;';
        entities['182'] = '&para;';
        entities['183'] = '&middot;';
        entities['184'] = '&cedil;';
        entities['185'] = '&sup1;';
        entities['186'] = '&ordm;';
        entities['187'] = '&raquo;';
        entities['188'] = '&frac14;';
        entities['189'] = '&frac12;';
        entities['190'] = '&frac34;';
        entities['191'] = '&iquest;';
        entities['192'] = '&Agrave;';
        entities['193'] = '&Aacute;';
        entities['194'] = '&Acirc;';
        entities['195'] = '&Atilde;';
        entities['196'] = '&Auml;';
        entities['197'] = '&Aring;';
        entities['198'] = '&AElig;';
        entities['199'] = '&Ccedil;';
        entities['200'] = '&Egrave;';
        entities['201'] = '&Eacute;';
        entities['202'] = '&Ecirc;';
        entities['203'] = '&Euml;';
        entities['204'] = '&Igrave;';
        entities['205'] = '&Iacute;';
        entities['206'] = '&Icirc;';
        entities['207'] = '&Iuml;';
        entities['208'] = '&ETH;';
        entities['209'] = '&Ntilde;';
        entities['210'] = '&Ograve;';
        entities['211'] = '&Oacute;';
        entities['212'] = '&Ocirc;';
        entities['213'] = '&Otilde;';
        entities['214'] = '&Ouml;';
        entities['215'] = '&times;';
        entities['216'] = '&Oslash;';
        entities['217'] = '&Ugrave;';
        entities['218'] = '&Uacute;';
        entities['219'] = '&Ucirc;';
        entities['220'] = '&Uuml;';
        entities['221'] = '&Yacute;';
        entities['222'] = '&THORN;';
        entities['223'] = '&szlig;';
        entities['224'] = '&agrave;';
        entities['225'] = '&aacute;';
        entities['226'] = '&acirc;';
        entities['227'] = '&atilde;';
        entities['228'] = '&auml;';
        entities['229'] = '&aring;';
        entities['230'] = '&aelig;';
        entities['231'] = '&ccedil;';
        entities['232'] = '&egrave;';
        entities['233'] = '&eacute;';
        entities['234'] = '&ecirc;';
        entities['235'] = '&euml;';
        entities['236'] = '&igrave;';
        entities['237'] = '&iacute;';
        entities['238'] = '&icirc;';
        entities['239'] = '&iuml;';
        entities['240'] = '&eth;';
        entities['241'] = '&ntilde;';
        entities['242'] = '&ograve;';
        entities['243'] = '&oacute;';
        entities['244'] = '&ocirc;';
        entities['245'] = '&otilde;';
        entities['246'] = '&ouml;';
        entities['247'] = '&divide;';
        entities['248'] = '&oslash;';
        entities['249'] = '&ugrave;';
        entities['250'] = '&uacute;';
        entities['251'] = '&ucirc;';
        entities['252'] = '&uuml;';
        entities['253'] = '&yacute;';
        entities['254'] = '&thorn;';
        entities['255'] = '&yuml;';
    }

    if (useQuoteStyle !== 'ENT_NOQUOTES') {
        entities['34'] = '&quot;';
    }
    if (useQuoteStyle === 'ENT_QUOTES') {
        entities['39'] = '&#39;';
    }
    entities['60'] = '&lt;';
    entities['62'] = '&gt;';


    // ascii decimals to real symbols
    for (decimal in entities) {
        if (entities.hasOwnProperty(decimal)) {
            hash_map[String.fromCharCode(decimal)] = entities[decimal];
        }
    }

    return hash_map;

};
