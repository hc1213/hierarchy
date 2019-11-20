(function(root) {
  console.log("hello jquery is coming");
  var jQuery = function() {
    return new jQuery.prototype.init();
  };
  jQuery.fn = jQuery.prototype = {
    init: function() {}
  };
  jQuery.fn.extend = jQuery.extend = function() {
    var target = arguments[0] || {};
    var length = arguments.length;
    var i = 1;
    var deep = false;
    var option, name, copy, src, clone;
    if (typeof target === "boolean") {
      target = arguments[1];
      deep = true;
      i = 2;
    }
    if (typeof target !== "object") {
      target = {};
    }
    if (length === 1) {
      //此时是往jQuery上拓展属性
      i--;
      target = this;
    }
    for (; i < length; i++) {
      if ((option = arguments[i]) != null) {
        for (name in option) {
          copy = option[name];
          src = target[name];
          if (deep && typeof copy === "object") {
            if (jQuery.isArray(src)) {
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy != undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.prototype.init.prototype = jQuery.prototype;
  jQuery.extend({
    isPlainObject: function(obj) {
      return toString.call(obj) === "[object Object]";
    },
    isArray: function(obj) {
      return toString.call(obj) === "[object Array]";
    }
  });
  root.$ = root.jQuery = jQuery;
})(this);
