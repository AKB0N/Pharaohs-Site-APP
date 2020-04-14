'use strict';
var _typeof = typeof Symbol === &quot;function&quot; &amp;&amp; typeof Symbol.iterator === &quot;symbol&quot; ? function(type) {
  return typeof type;
} : function(obj) {
  return obj &amp;&amp; typeof Symbol === &quot;function&quot; &amp;&amp; obj.constructor === Symbol &amp;&amp; obj !== Symbol.prototype ? &quot;symbol&quot; : typeof obj;
};
var _0x70f3 = ['&lt;span style=&quot;text-decoration:underline;&quot;&gt;{TEXT}&lt;/span&gt;', &quot;[s]{TEXT}[/s]&quot;, &quot;[mail={EMAIL}]{TEXT}[/mail]&quot;, &quot;[url={URL}]{TEXT}[/url]&quot;, '&lt;a href=&quot;{URL}&quot; class=&quot;cookie_link&quot; title=&quot;link&quot; target=&quot;_blank&quot;&gt;{TEXT}&lt;/a&gt;', &quot;[url]{URL}[/url]&quot;, '&lt;a href=&quot;{URL}&quot; class=&quot;cookie_link&quot; title=&quot;link&quot; target=&quot;_blank&quot;&gt;{URL}&lt;/a&gt;', &quot;[url={LINK}]{TEXT}[/url]&quot;, '&lt;a href=&quot;{LINK}&quot; class=&quot;cookie_link&quot; title=&quot;link&quot; target=&quot;_blank&quot;&gt;{TEXT}&lt;/a&gt;', &quot;[url]{LINK}[/url]&quot;, '&lt;a href=&quot;{LINK}&quot; class=&quot;cookie_link&quot; title=&quot;link&quot; target=&quot;_blank&quot;&gt;{LINK}&lt;/a&gt;', 
'&lt;img src=&quot;{URL}&quot; width=&quot;{NUMBER1}&quot; height=&quot;{NUMBER2}&quot; alt=&quot;{TEXT}&quot; /&gt;', &quot;[img]{URL}[/img]&quot;, &quot;[img={LINK} width={NUMBER1} height={NUMBER2}]{TEXT}[/img]&quot;, '&lt;img src=&quot;{LINK}&quot; width=&quot;{NUMBER1}&quot; height=&quot;{NUMBER2}&quot; alt=&quot;{TEXT}&quot; /&gt;', &quot;[img]{LINK}[/img]&quot;, '&lt;img src=&quot;{LINK}&quot; alt=&quot;{LINK}&quot; /&gt;', '[quote=&quot;{TEXT1}&quot;]{TEXT2}[/quote]', &quot;[quote]{TEXT}[/quote]&quot;, &quot;&lt;cite&gt;{TEXT}&lt;/cite&gt;&quot;, &quot;[blockquote]{TEXT}[/blockquote]&quot;, &quot;querySelectorAll&quot;, &quot; &gt; .&quot;, &quot;classList&quot;, &quot;contains&quot;, &quot;hasClass&quot;, &quot;trimString&quot;, &quot;remove&quot;, &quot;(\\s|$)&quot;, 
&quot;(\\s|^)&quot;, &quot;split&quot;, &quot;limit&quot;, &quot;addEventListener&quot;, &quot;target&quot;, &quot;call&quot;, &quot;cookie&quot;, &quot;charAt&quot;, &quot;substring&quot;, &quot;opera&quot;, &quot;ActiveXObject&quot;, &quot;Gecko&quot;, &quot;product&quot;, &quot;Webkit&quot;, &quot;cookie.js&quot;, &quot;Init&quot;, &quot;removeChild&quot;, &quot;callee&quot;, &quot;loaded&quot;, &quot;readyState&quot;, &quot;complete&quot;, &quot;load&quot;, &quot;DOMContentLoaded&quot;, &quot;undefined&quot;, &quot;Browser&quot;, &quot;Initialized&quot;, &quot;QueryParams&quot;, &quot;mode&quot;, &quot;demo&quot;, &quot;getReady&quot;, &quot;Utils&quot;, &quot;getCookie&quot;, &quot;cookie_law&quot;, &quot;getElementsByTagName&quot;, &quot;script&quot;, &quot;length&quot;, &quot;src&quot;, &quot;indexOf&quot;, &quot;getQueryParams&quot;, &quot;replace&quot;, &quot;.js&quot;, &quot;.css&quot;, &quot;CSS&quot;, &quot;add&quot;, 
&quot;Law&quot;, &quot;build&quot;, &quot;added&quot;, &quot;link&quot;, &quot;setAttribute&quot;, &quot;rel&quot;, &quot;stylesheet&quot;, &quot;text/css&quot;, &quot;charset&quot;, &quot;utf-8&quot;, &quot;href&quot;, &quot;body&quot;, &quot;getElementById&quot;, &quot;cookie_law_notification&quot;, &quot;createElement&quot;, &quot;div&quot;, &quot;style&quot;, &quot;className&quot;, &quot;skin&quot;, &quot;cookielaw1&quot;, &quot;cookie_&quot;, &quot;position&quot;, &quot;bg_color&quot;, &quot;background&quot;, &quot;innerHTML&quot;, &quot;msg&quot;, &quot;bbcodeToHtml&quot;, &quot;We use cookies to understand how you use our site and to improve your experience. This includes personalizing content and advertising. To learn more, [url=https://cookiegenerator.eu/learnmore]click here[/url]. By continuing to use our site, you accept our use of cookies, revised [url=https://cookiegenerator.eu/privacy]Privacy Policy[/url] and [url=https://cookiegenerator.eu/tos]Terms of Use[/url]. Still confused? send us an [mail=info@cookiegenerator.eu]email[/mail].&quot;, 
&quot;learnmore&quot;, &quot;[i][/i]&quot;, &quot;morelink&quot;, &quot;https://cookiegenerator.eu/&quot;, ' &lt;a style=&quot;font-size:10px;float: right;&quot; id=&quot;cookie_learnmore_link&quot; target=&quot;_blank&quot; title=&quot;100% Free mobile friendly opt-out cookie generator for your website&quot; class=&quot;cookie_link&quot; href=&quot;https://cookiegenerator.eu/&quot;&gt;', &quot;&lt;/a&gt;&quot;, &quot;msg_color&quot;, &quot;cookie_accept_button&quot;, &quot;accept_text&quot;, &quot;title&quot;, &quot;hide&quot;, &quot;accept_background&quot;, &quot;accept_color&quot;, &quot;color&quot;, &quot;accept_radius&quot;, &quot;borderRadius&quot;, &quot;appendChild&quot;, &quot;cookie_close_button&quot;, 
&quot;getByClass&quot;, &quot;cookie_link&quot;, &quot;link_color&quot;, &quot;animation&quot;, &quot;delay&quot;, &quot;addClass&quot;, &quot;opacity&quot;, &quot;parentNode&quot;, &quot;setTime&quot;, &quot;cookie_law=1; &quot;, &quot;((?:(?:[a-z][a-z\\d+\\-.]*:\\/{2}(?:(?:[a-z0-9\\-._~\\!$&amp;'*+,;=:@|]+|%[\\dA-F]{2})+|[0-9.]+|\\[[a-z0-9.]+:[a-z0-9.]+:[a-z0-9.:]+\\])(?::\\d*)?(?:\\/(?:[a-z0-9\\-._~\\!$&amp;'*+,;=:@|]+|%[\\dA-F]{2})*)*(?:\\?(?:[a-z0-9\\-._~\\!$&amp;'*+,;=:@\\/?|]+|%[\\dA-F]{2})*)?(?:#(?:[a-z0-9\\-._~\\!$&amp;'*+,;=:@\\/?|]+|%[\\dA-F]{2})*)?)|(?:www\\.(?:[a-z0-9\\-._~\\!$&amp;'*+,;=:@|]+|%[\\dA-F]{2})+(?::\\d*)?(?:\\/(?:[a-z0-9\\-._~\\!$&amp;'*+,;=:@|]+|%[\\dA-F]{2})*)*(?:\\?(?:[a-z0-9\\-._~\\!$&amp;'*+,;=:@\\/?|]+|%[\\dA-F]{2})*)?(?:#(?:[a-z0-9\\-._~\\!$&amp;'*+,;=:@\\/?|]+|%[\\dA-F]{2})*)?)))&quot;, 
&quot;([a-z0-9-./]+[^\&quot;' ]*)&quot;, &quot;((?:[\\w!#$%&amp;'*+-/=?^`{|}~]+.)*(?:[\\w!#$%'*+-/=?^`{|}~]|&amp;)+@(?:(?:(?:(?:(?:[a-z0-9]{1}[a-z0-9-]{0,62}[a-z0-9]{1})|[a-z]).)+[a-z]{2,6})|(?:\\d{1,3}.){3}\\d{1,3}(?::\\d{1,5})?))&quot;, &quot;(.*?)&quot;, &quot;([a-zA-Z0-9-+.,_ ]+)&quot;, &quot;([a-zA-Z0-9-_]+)&quot;, &quot;([a-z]+|#[0-9abcdef]+)&quot;, &quot;([0-9]+)&quot;, &quot;match&quot;, &quot;substr&quot;, &quot;[.\\\\+*?\\[\\^\\]$(){}=!&lt;&gt;|:\\&quot;, &quot;\\$&amp;&quot;, &quot;addBBCode&quot;, &quot;push&quot;, &quot;htmlToBBCode&quot;, &quot;[b]{TEXT}[/b]&quot;, &quot;&lt;strong&gt;{TEXT}&lt;/strong&gt;&quot;, &quot;[i]{TEXT}[/i]&quot;, &quot;&lt;em&gt;{TEXT}&lt;/em&gt;&quot;, &quot;[u]{TEXT}[/u]&quot;];
(function(data, i) {
  var validateGroupedContexts = function fn(selected_image) {
    for (; --selected_image;) {
      data[&quot;push&quot;](data[&quot;shift&quot;]());
    }
  };
  validateGroupedContexts(++i);
})(_0x70f3, 350);
var _0x7493 = function PocketDropEvent(ballNumber, opt_target) {
  ballNumber = ballNumber - 0;
  var ball = _0x70f3[ballNumber];
  return ball;
};
_0x7493(&quot;0x0&quot;) == (typeof COOKIE === &quot;undefined&quot; ? &quot;undefined&quot; : _typeof(COOKIE)) &amp;&amp; (COOKIE = {}), COOKIE_CSSHOST = null, COOKIE[_0x7493(&quot;0x1&quot;)] = null, COOKIE[&quot;QueryParams&quot;] = {}, COOKIE[_0x7493(&quot;0x2&quot;)] = false, COOKIE[&quot;Init&quot;] = function() {
  if (void 0 != COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x4&quot;)] &amp;&amp; _0x7493(&quot;0x5&quot;) == COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x4&quot;)]) {
    COOKIE[_0x7493(&quot;0x6&quot;)]();
  } else {
    if (!COOKIE[_0x7493(&quot;0x7&quot;)][_0x7493(&quot;0x8&quot;)](_0x7493(&quot;0x9&quot;))) {
      COOKIE[&quot;getReady&quot;]();
    }
  }
}, COOKIE[_0x7493(&quot;0x6&quot;)] = function() {
  if (0 == COOKIE[_0x7493(&quot;0x2&quot;)]) {
    COOKIE[_0x7493(&quot;0x2&quot;)] = true;
    var nextIdLookup = document[_0x7493(&quot;0xa&quot;)](_0x7493(&quot;0xb&quot;));
    var indexLookupKey = 0;
    for (; indexLookupKey &lt; nextIdLookup[_0x7493(&quot;0xc&quot;)]; indexLookupKey++) {
      var currentIndex = nextIdLookup[indexLookupKey];
      if (-1 != currentIndex[_0x7493(&quot;0xd&quot;)][_0x7493(&quot;0xe&quot;)](&quot;cookie.js&quot;)) {
        COOKIE[&quot;Utils&quot;][_0x7493(&quot;0xf&quot;)](currentIndex[_0x7493(&quot;0xd&quot;)], COOKIE[&quot;QueryParams&quot;]);
        COOKIE_CSSHOST = currentIndex[_0x7493(&quot;0xd&quot;)][_0x7493(&quot;0x10&quot;)](_0x7493(&quot;0x11&quot;), _0x7493(&quot;0x12&quot;));
      }
    }
    COOKIE[_0x7493(&quot;0x13&quot;)][_0x7493(&quot;0x14&quot;)]();
    COOKIE[_0x7493(&quot;0x15&quot;)][_0x7493(&quot;0x16&quot;)]();
  }
}, COOKIE[_0x7493(&quot;0x13&quot;)] = {
  &quot;added&quot; : false,
  &quot;add&quot; : function callback() {
    if (&quot;undefined&quot; == typeof COOKIE_HAS_CSS &amp;&amp; 0 == COOKIE[_0x7493(&quot;0x13&quot;)][_0x7493(&quot;0x17&quot;)]) {
      COOKIE[&quot;CSS&quot;][&quot;added&quot;] = true;
      var el = document[&quot;createElement&quot;](_0x7493(&quot;0x18&quot;));
      el[_0x7493(&quot;0x19&quot;)](_0x7493(&quot;0x1a&quot;), _0x7493(&quot;0x1b&quot;));
      el[_0x7493(&quot;0x19&quot;)](&quot;type&quot;, _0x7493(&quot;0x1c&quot;));
      el[_0x7493(&quot;0x19&quot;)](_0x7493(&quot;0x1d&quot;), _0x7493(&quot;0x1e&quot;));
      el[_0x7493(&quot;0x19&quot;)](_0x7493(&quot;0x1f&quot;), COOKIE_CSSHOST);
      document[_0x7493(&quot;0x20&quot;)][&quot;appendChild&quot;](el);
    }
  }
}, COOKIE[_0x7493(&quot;0x15&quot;)] = {
  &quot;build&quot; : function init() {
    if (null == document[_0x7493(&quot;0x21&quot;)](_0x7493(&quot;0x22&quot;))) {
      var el = document[_0x7493(&quot;0x23&quot;)](_0x7493(&quot;0x24&quot;));
      el[_0x7493(&quot;0x19&quot;)](&quot;id&quot;, _0x7493(&quot;0x22&quot;));
      el[_0x7493(&quot;0x25&quot;)][&quot;visibility&quot;] = &quot;hidden&quot;;
      el[_0x7493(&quot;0x26&quot;)] = COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x27&quot;)] ? COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x27&quot;)] : _0x7493(&quot;0x28&quot;);
      if (void 0 != COOKIE[&quot;QueryParams&quot;][&quot;position&quot;]) {
        COOKIE[_0x7493(&quot;0x7&quot;)][&quot;addClass&quot;](el, _0x7493(&quot;0x29&quot;) + COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x2a&quot;)]);
      }
      if (void 0 != COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x2b&quot;)]) {
        el[&quot;style&quot;][_0x7493(&quot;0x2c&quot;)] = &quot;#&quot; + COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x2b&quot;)];
      }
      var i = document[_0x7493(&quot;0x23&quot;)](_0x7493(&quot;0x24&quot;));
      i[&quot;setAttribute&quot;](&quot;id&quot;, &quot;cookie_message&quot;);
      i[_0x7493(&quot;0x2d&quot;)] = COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x2e&quot;)] ? bbcodeParser[_0x7493(&quot;0x2f&quot;)](decodeURIComponent(COOKIE[&quot;QueryParams&quot;][&quot;msg&quot;])) : bbcodeParser[_0x7493(&quot;0x2f&quot;)](_0x7493(&quot;0x30&quot;));
      var _0x392214 = COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x31&quot;)] ? bbcodeParser[_0x7493(&quot;0x2f&quot;)](decodeURIComponent(COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x31&quot;)])) : bbcodeParser[_0x7493(&quot;0x2f&quot;)](_0x7493(&quot;0x32&quot;));
      if (void 0 != COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x33&quot;)]) {
        COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x33&quot;)];
      } else {
        _0x7493(&quot;0x34&quot;);
      }
      i[_0x7493(&quot;0x2d&quot;)] += _0x7493(&quot;0x35&quot;) + _0x392214 + _0x7493(&quot;0x36&quot;);
      if (void 0 != COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x37&quot;)]) {
        i[_0x7493(&quot;0x25&quot;)][&quot;color&quot;] = &quot;#&quot; + COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x37&quot;)];
      }
      el[&quot;appendChild&quot;](i);
      var a = document[&quot;createElement&quot;](_0x7493(&quot;0x24&quot;));
      a[_0x7493(&quot;0x19&quot;)](&quot;id&quot;, _0x7493(&quot;0x38&quot;));
      var t;
      t = void 0 != COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x39&quot;)] ? COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x39&quot;)] : &quot;I Accept&quot;;
      a[_0x7493(&quot;0x19&quot;)](_0x7493(&quot;0x3a&quot;), t);
      a[_0x7493(&quot;0x2d&quot;)] = t;
      a[&quot;onclick&quot;] = COOKIE[_0x7493(&quot;0x15&quot;)][_0x7493(&quot;0x3b&quot;)];
      if (void 0 != COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x3c&quot;)]) {
        a[_0x7493(&quot;0x25&quot;)][_0x7493(&quot;0x2c&quot;)] = &quot;#&quot; + COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x3c&quot;)];
      }
      if (void 0 != COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x3d&quot;)]) {
        a[_0x7493(&quot;0x25&quot;)][_0x7493(&quot;0x3e&quot;)] = &quot;#&quot; + COOKIE[_0x7493(&quot;0x3&quot;)][&quot;accept_color&quot;];
      }
      if (void 0 != COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x39&quot;)]) {
        a[_0x7493(&quot;0x25&quot;)][_0x7493(&quot;0x2d&quot;)] = &quot;#&quot; + COOKIE[_0x7493(&quot;0x3&quot;)][&quot;accept_text&quot;];
      }
      if (void 0 != COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x3f&quot;)]) {
        a[_0x7493(&quot;0x25&quot;)][_0x7493(&quot;0x40&quot;)] = COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x3f&quot;)];
      }
      el[_0x7493(&quot;0x41&quot;)](a);
      var test = document[&quot;createElement&quot;](_0x7493(&quot;0x24&quot;));
      if (test[_0x7493(&quot;0x19&quot;)](&quot;id&quot;, _0x7493(&quot;0x42&quot;)), test[_0x7493(&quot;0x19&quot;)](&quot;title&quot;, &quot;Close&quot;), el[_0x7493(&quot;0x41&quot;)](test), document[_0x7493(&quot;0x20&quot;)][&quot;appendChild&quot;](el), void 0 != COOKIE[_0x7493(&quot;0x3&quot;)][&quot;link_color&quot;]) {
        var PL$13 = COOKIE[_0x7493(&quot;0x7&quot;)][_0x7493(&quot;0x43&quot;)](_0x7493(&quot;0x44&quot;));
        var PL$17 = 0;
        for (; PL$17 &lt; PL$13[_0x7493(&quot;0xc&quot;)]; PL$17++) {
          PL$13[PL$17][_0x7493(&quot;0x25&quot;)][_0x7493(&quot;0x3e&quot;)] = &quot;#&quot; + COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x45&quot;)];
        }
      }
      if (void 0 != COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x46&quot;)] &amp;&amp; COOKIE[_0x7493(&quot;0x3&quot;)][_0x7493(&quot;0x47&quot;)]) {
        setTimeout(function() {
          COOKIE[_0x7493(&quot;0x7&quot;)][_0x7493(&quot;0x48&quot;)](el, COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x46&quot;)]);
        }, 1E3 * COOKIE[&quot;QueryParams&quot;][_0x7493(&quot;0x47&quot;)]);
      }
    }
  },
  &quot;hide&quot; : function testcase() {
    var PL$67 = document[_0x7493(&quot;0x21&quot;)](_0x7493(&quot;0x22&quot;));
    PL$67[_0x7493(&quot;0x25&quot;)][_0x7493(&quot;0x49&quot;)] = &quot;0&quot;;
    setTimeout(function() {
      PL$67[_0x7493(&quot;0x4a&quot;)][&quot;removeChild&quot;](PL$67);
    }, 1E3);
    var d = new Date;
    d[_0x7493(&quot;0x4b&quot;)](d[&quot;getTime&quot;]() + 31536E6);
    var dot_ref = &quot;expires=&quot; + d[&quot;toUTCString&quot;]();
    document[&quot;cookie&quot;] = _0x7493(&quot;0x4c&quot;) + dot_ref;
  }
};
var BBCodeHTML = function run() {
  function escape(value, text) {
    return (value + &quot;&quot;)[_0x7493(&quot;0x10&quot;)](new RegExp(_0x7493(&quot;0x57&quot;) + (text || &quot;&quot;) + &quot;-]&quot;, &quot;g&quot;), _0x7493(&quot;0x58&quot;));
  }
  var _0x525b09 = this;
  var req = /{[A-Z_]+[0-9]*}/gi;
  var focusableElements = {
    &quot;URL&quot; : _0x7493(&quot;0x4d&quot;),
    &quot;LINK&quot; : _0x7493(&quot;0x4e&quot;),
    &quot;EMAIL&quot; : _0x7493(&quot;0x4f&quot;),
    &quot;TEXT&quot; : _0x7493(&quot;0x50&quot;),
    &quot;SIMPLETEXT&quot; : _0x7493(&quot;0x51&quot;),
    &quot;INTTEXT&quot; : &quot;([a-zA-Z0-9-+,_. ]+)&quot;,
    &quot;IDENTIFIER&quot; : _0x7493(&quot;0x52&quot;),
    &quot;COLOR&quot; : _0x7493(&quot;0x53&quot;),
    &quot;NUMBER&quot; : _0x7493(&quot;0x54&quot;)
  };
  var vals = [];
  var units = [];
  var PL$4 = [];
  var chartObject = [];
  var round = function create(p) {
    var d = p[_0x7493(&quot;0x55&quot;)](req);
    var b1 = d[_0x7493(&quot;0xc&quot;)];
    var i = 0;
    var s = &quot;&quot;;
    if (b1 &lt;= 0) {
      return new RegExp(escape(p), &quot;g&quot;);
    }
    for (; i &lt; b1; i = i + 1) {
      var index = d[i][&quot;replace&quot;](/[{}0-9]/g, &quot;&quot;);
      if (focusableElements[index]) {
        s = s + (escape(p[_0x7493(&quot;0x56&quot;)](0, p[&quot;indexOf&quot;](d[i]))) + focusableElements[index]);
        p = p[_0x7493(&quot;0x56&quot;)](p[_0x7493(&quot;0xe&quot;)](d[i]) + d[i][_0x7493(&quot;0xc&quot;)]);
      }
    }
    return s = s + escape(p), new RegExp(s, &quot;gi&quot;);
  };
  var parseInt = function create(fn) {
    var api = fn[_0x7493(&quot;0x55&quot;)](req);
    var action = api[_0x7493(&quot;0xc&quot;)];
    var name = 0;
    var url = &quot;&quot;;
    var window = {};
    var rawValue = 0;
    if (action &lt;= 0) {
      return fn;
    }
    for (; name &lt; action; name = name + 1) {
      var value;
      var index = api[name][_0x7493(&quot;0x10&quot;)](/[{}0-9]/g, &quot;&quot;);
      if (window[api[name]]) {
        value = window[api[name]];
      } else {
        value = rawValue = rawValue + 1;
        window[api[name]] = value;
      }
      if (focusableElements[index]) {
        url = url + (fn[_0x7493(&quot;0x56&quot;)](0, fn[_0x7493(&quot;0xe&quot;)](api[name])) + &quot;$&quot; + value);
        fn = fn[&quot;substr&quot;](fn[_0x7493(&quot;0xe&quot;)](api[name]) + api[name][&quot;length&quot;]);
      }
    }
    return url + fn;
  };
  _0x525b09[_0x7493(&quot;0x59&quot;)] = function(value, n) {
    vals[&quot;push&quot;](round(value));
    units[_0x7493(&quot;0x5a&quot;)](parseInt(n));
    PL$4[_0x7493(&quot;0x5a&quot;)](round(n));
    chartObject[_0x7493(&quot;0x5a&quot;)](parseInt(value));
  };
  _0x525b09[&quot;bbcodeToHtml&quot;] = function(serializers) {
    var h = vals[_0x7493(&quot;0xc&quot;)];
    var i = 0;
    for (; i &lt; h; i = i + 1) {
      serializers = serializers[_0x7493(&quot;0x10&quot;)](vals[i], units[i]);
    }
    return serializers;
  };
  _0x525b09[_0x7493(&quot;0x5b&quot;)] = function(PL$6) {
    var PL$12 = PL$4[&quot;length&quot;];
    var PL$11 = 0;
    for (; PL$11 &lt; PL$12; PL$11 = PL$11 + 1) {
      PL$6 = PL$6[_0x7493(&quot;0x10&quot;)](PL$4[PL$11], chartObject[PL$11]);
    }
    return PL$6;
  };
  _0x525b09[_0x7493(&quot;0x59&quot;)](_0x7493(&quot;0x5c&quot;), _0x7493(&quot;0x5d&quot;));
  _0x525b09[&quot;addBBCode&quot;](_0x7493(&quot;0x5e&quot;), _0x7493(&quot;0x5f&quot;));
  _0x525b09[_0x7493(&quot;0x59&quot;)](_0x7493(&quot;0x60&quot;), _0x7493(&quot;0x61&quot;));
  _0x525b09[&quot;addBBCode&quot;](_0x7493(&quot;0x62&quot;), '&lt;span style=&quot;text-decoration:line-through;&quot;&gt;{TEXT}&lt;/span&gt;');
  _0x525b09[&quot;addBBCode&quot;](_0x7493(&quot;0x63&quot;), '&lt;a href=&quot;mailto:{URL}&quot; class=&quot;cookie_link&quot; title=&quot;Send email to {URL}&quot;&gt;{TEXT}&lt;/a&gt;');
  _0x525b09[_0x7493(&quot;0x59&quot;)](_0x7493(&quot;0x64&quot;), _0x7493(&quot;0x65&quot;));
  _0x525b09[&quot;addBBCode&quot;](_0x7493(&quot;0x66&quot;), _0x7493(&quot;0x67&quot;));
  _0x525b09[_0x7493(&quot;0x59&quot;)](_0x7493(&quot;0x68&quot;), _0x7493(&quot;0x69&quot;));
  _0x525b09[_0x7493(&quot;0x59&quot;)](_0x7493(&quot;0x6a&quot;), _0x7493(&quot;0x6b&quot;));
  _0x525b09[_0x7493(&quot;0x59&quot;)](&quot;[img={URL} width={NUMBER1} height={NUMBER2}]{TEXT}[/img]&quot;, _0x7493(&quot;0x6c&quot;));
  _0x525b09[_0x7493(&quot;0x59&quot;)](_0x7493(&quot;0x6d&quot;), '&lt;img src=&quot;{URL}&quot; alt=&quot;{URL}&quot; /&gt;');
  _0x525b09[_0x7493(&quot;0x59&quot;)](_0x7493(&quot;0x6e&quot;), _0x7493(&quot;0x6f&quot;));
  _0x525b09[_0x7493(&quot;0x59&quot;)](_0x7493(&quot;0x70&quot;), _0x7493(&quot;0x71&quot;));
  _0x525b09[_0x7493(&quot;0x59&quot;)](&quot;[color=COLOR]{TEXT}[/color]&quot;, '&lt;span style=&quot;{COLOR}&quot;&gt;{TEXT}&lt;/span&gt;');
  _0x525b09[&quot;addBBCode&quot;](&quot;[highlight={COLOR}]{TEXT}[/highlight]&quot;, '&lt;span style=&quot;background-color:{COLOR}&quot;&gt;{TEXT}&lt;/span&gt;');
  _0x525b09[_0x7493(&quot;0x59&quot;)](_0x7493(&quot;0x72&quot;), '&lt;div class=&quot;quote&quot;&gt;&lt;cite&gt;{TEXT1}&lt;/cite&gt;&lt;p&gt;{TEXT2}&lt;/p&gt;&lt;/div&gt;');
  _0x525b09[&quot;addBBCode&quot;](_0x7493(&quot;0x73&quot;), _0x7493(&quot;0x74&quot;));
  _0x525b09[_0x7493(&quot;0x59&quot;)](_0x7493(&quot;0x75&quot;), &quot;&lt;blockquote&gt;{TEXT}&lt;/blockquote&gt;&quot;);
};
var bbcodeParser = new BBCodeHTML;
COOKIE[_0x7493(&quot;0x7&quot;)] = {
  &quot;getByClass&quot; : function getAll(selector, name) {
    try {
      return null != name ? document[_0x7493(&quot;0x76&quot;)](name + _0x7493(&quot;0x77&quot;) + selector) : document[_0x7493(&quot;0x76&quot;)](&quot;.&quot; + selector);
    } catch (_0x46ebcd) {
      if (null != name) {
        var moduleEntryFile = name;
      } else {
        moduleEntryFile = document[_0x7493(&quot;0xa&quot;)](&quot;body&quot;)[0];
      }
      var options = [];
      var test = new RegExp(&quot;\\b&quot; + selector + &quot;\\b&quot;);
      els = moduleEntryFile[&quot;getElementsByTagName&quot;](&quot;*&quot;);
      var i = 0;
      var page = els[_0x7493(&quot;0xc&quot;)];
      for (; i &lt; page; i++) {
        if (test[&quot;test&quot;](els[i][_0x7493(&quot;0x26&quot;)])) {
          options[&quot;push&quot;](els[i]);
        }
      }
      return options;
    }
  },
  &quot;hasClass&quot; : function locusOfChapter(src, optional_callbackfn) {
    try {
      return src[_0x7493(&quot;0x78&quot;)][_0x7493(&quot;0x79&quot;)](optional_callbackfn);
    } catch (_0x33efc5) {
      try {
        return null != src[_0x7493(&quot;0x26&quot;)][_0x7493(&quot;0x55&quot;)](new RegExp(&quot;(\\s|^)&quot; + optional_callbackfn + &quot;(\\s|$)&quot;));
      } catch (_0x339db3) {
      }
    }
  },
  &quot;addClass&quot; : function init(obj, type) {
    try {
      if (void 0 != obj[&quot;length&quot;]) {
        var i = 0;
        for (; i &lt; obj[_0x7493(&quot;0xc&quot;)]; i++) {
          (item = obj[i])[_0x7493(&quot;0x78&quot;)][_0x7493(&quot;0x14&quot;)](type);
        }
      } else {
        obj[_0x7493(&quot;0x78&quot;)][&quot;add&quot;](type);
      }
    } catch (_0x475ceb) {
      try {
        if (void 0 != obj[&quot;length&quot;]) {
          i = 0;
          for (; i &lt; obj[&quot;length&quot;]; i++) {
            var item = obj[i];
            if (!COOKIE[_0x7493(&quot;0x7&quot;)][_0x7493(&quot;0x7a&quot;)](item, type)) {
              var i = COOKIE[&quot;Utils&quot;][_0x7493(&quot;0x7b&quot;)](item[_0x7493(&quot;0x26&quot;)] += &quot; &quot; + type);
              item[_0x7493(&quot;0x26&quot;)] = i;
            }
          }
        } else {
          if (!COOKIE[_0x7493(&quot;0x7&quot;)][_0x7493(&quot;0x7a&quot;)](obj, type)) {
            i = COOKIE[_0x7493(&quot;0x7&quot;)][_0x7493(&quot;0x7b&quot;)](obj[&quot;className&quot;] += &quot; &quot; + type);
            obj[_0x7493(&quot;0x26&quot;)] = i;
          }
        }
      } catch (_0x3031e5) {
      }
    }
  },
  &quot;removeClass&quot; : function _addClass(cache, server) {
    try {
      if (void 0 != cache[&quot;length&quot;]) {
        var name = 0;
        for (; name &lt; cache[_0x7493(&quot;0xc&quot;)]; name++) {
          (ret = cache[name])[_0x7493(&quot;0x78&quot;)][_0x7493(&quot;0x7c&quot;)](server);
        }
      } else {
        cache[_0x7493(&quot;0x78&quot;)][_0x7493(&quot;0x7c&quot;)](server);
      }
    } catch (_0x491cad) {
      try {
        if (void 0 != cache[_0x7493(&quot;0xc&quot;)]) {
          name = 0;
          for (; name &lt; cache[_0x7493(&quot;0xc&quot;)]; name++) {
            var ret = cache[name];
            if (COOKIE[_0x7493(&quot;0x7&quot;)][&quot;hasClass&quot;](ret, server)) {
              var r = new RegExp(&quot;(\\s|^)&quot; + server + _0x7493(&quot;0x7d&quot;));
              ret[_0x7493(&quot;0x26&quot;)] = ret[&quot;className&quot;][_0x7493(&quot;0x10&quot;)](r, &quot; &quot;);
            }
          }
        } else {
          if (COOKIE[_0x7493(&quot;0x7&quot;)][_0x7493(&quot;0x7a&quot;)](cache, server)) {
            r = new RegExp(_0x7493(&quot;0x7e&quot;) + server + _0x7493(&quot;0x7d&quot;));
            cache[_0x7493(&quot;0x26&quot;)] = cache[_0x7493(&quot;0x26&quot;)][_0x7493(&quot;0x10&quot;)](r, &quot; &quot;);
          }
        }
      } catch (_0x33b5f4) {
      }
    }
  },
  &quot;trimString&quot; : function publish(selector) {
    return selector[_0x7493(&quot;0x10&quot;)](/^\s\s*/, &quot;&quot;)[&quot;replace&quot;](/\s\s*$/, &quot;&quot;);
  },
  &quot;getQueryParams&quot; : function install(name, stubs) {
    try {
      var PL$13 = name[&quot;split&quot;](&quot;?&quot;)[1][_0x7493(&quot;0x7f&quot;)](&quot;&amp;&quot;);
      var PL$17 = 0;
      for (; PL$17 &lt; PL$13[_0x7493(&quot;0xc&quot;)]; PL$17++) {
        var env_data = PL$13[PL$17][_0x7493(&quot;0x7f&quot;)](&quot;=&quot;);
        stubs[env_data[0]] = env_data[1];
      }
    } catch (_0x406c61) {
    }
  },
  &quot;debounce&quot; : function debounceWithSelector(source, durationSelector) {
    return COOKIE[_0x7493(&quot;0x7&quot;)][_0x7493(&quot;0x80&quot;)](source, durationSelector, true);
  },
  &quot;limit&quot; : function timeoutSaver(PL$5, timeout, throttle) {
    var contentTimer;
    return function() {
      var PL$3 = this;
      var PL$12 = arguments;
      if (throttle) {
        clearTimeout(contentTimer);
      }
      if (!(!throttle &amp;&amp; contentTimer)) {
        contentTimer = setTimeout(function() {
          contentTimer = null;
          PL$5[&quot;apply&quot;](PL$3, PL$12);
        }, timeout);
      }
    };
  },
  &quot;on&quot; : function remove(name, res, value, callbacks) {
    var parent = document[&quot;querySelector&quot;](name);
    parent[_0x7493(&quot;0x81&quot;)](res, function(match) {
      var raw = parent[&quot;querySelectorAll&quot;](value);
      var first = match[_0x7493(&quot;0x82&quot;)];
      var j = 0;
      var len = raw[&quot;length&quot;];
      for (; j &lt; len; j++) {
        var el = first;
        var a = raw[j];
        for (; el &amp;&amp; el !== parent;) {
          if (el === a) {
            return callbacks[_0x7493(&quot;0x83&quot;)](a, match);
          }
          el = el[&quot;parentNode&quot;];
        }
      }
    });
  },
  &quot;getCookie&quot; : function applyTheme(scope) {
    var data = scope + &quot;=&quot;;
    var PL$13 = document[_0x7493(&quot;0x84&quot;)][&quot;split&quot;](&quot;;&quot;);
    var PL$17 = 0;
    for (; PL$17 &lt; PL$13[_0x7493(&quot;0xc&quot;)]; PL$17++) {
      var PL$6 = PL$13[PL$17];
      for (; &quot; &quot; == PL$6[_0x7493(&quot;0x85&quot;)](0);) {
        PL$6 = PL$6[&quot;substring&quot;](1);
      }
      if (0 == PL$6[_0x7493(&quot;0xe&quot;)](data)) {
        return PL$6[_0x7493(&quot;0x86&quot;)](data[_0x7493(&quot;0xc&quot;)], PL$6[&quot;length&quot;]);
      }
    }
    return &quot;&quot;;
  }
}, window[_0x7493(&quot;0x87&quot;)] ? COOKIE[&quot;Browser&quot;] = &quot;Opera&quot; : window[_0x7493(&quot;0x88&quot;)] ? COOKIE[_0x7493(&quot;0x1&quot;)] = &quot;IE&quot; : navigator[&quot;taintEnabled&quot;] ? _0x7493(&quot;0x89&quot;) == navigator[_0x7493(&quot;0x8a&quot;)] &amp;&amp; (COOKIE[_0x7493(&quot;0x1&quot;)] = &quot;Mozilla&quot;) : COOKIE[_0x7493(&quot;0x1&quot;)] = _0x7493(&quot;0x8b&quot;), function() {
  var nextIdLookup = document[_0x7493(&quot;0xa&quot;)](&quot;script&quot;);
  var indexLookupKey = 0;
  for (; indexLookupKey &lt; nextIdLookup[_0x7493(&quot;0xc&quot;)]; indexLookupKey++) {
    var currentIndex = nextIdLookup[indexLookupKey];
    if (-1 != currentIndex[_0x7493(&quot;0xd&quot;)][_0x7493(&quot;0xe&quot;)](_0x7493(&quot;0x8c&quot;))) {
      COOKIE[_0x7493(&quot;0x7&quot;)][_0x7493(&quot;0xf&quot;)](currentIndex[_0x7493(&quot;0xd&quot;)], COOKIE[_0x7493(&quot;0x3&quot;)]);
    }
  }
}(), function() {
  try {
    var reset = function _0x3361d7() {
      COOKIE[_0x7493(&quot;0x8d&quot;)]();
    };
    switch(COOKIE[_0x7493(&quot;0x1&quot;)]) {
      case &quot;IE&quot;:
        var c = document[&quot;createElement&quot;](_0x7493(&quot;0x24&quot;));
        !function() {
          try {
            c[_0x7493(&quot;0x2d&quot;)] = &quot;temp&quot;;
            document[_0x7493(&quot;0x20&quot;)][&quot;appendChild&quot;](c);
            document[_0x7493(&quot;0x20&quot;)][_0x7493(&quot;0x8e&quot;)](c);
            reset();
          } catch (_0x472eb3) {
            setTimeout(arguments[_0x7493(&quot;0x8f&quot;)], 50);
          }
        }();
        break;
      case _0x7493(&quot;0x8b&quot;):
        !function() {
          if (_0x7493(&quot;0x90&quot;) == document[_0x7493(&quot;0x91&quot;)] || _0x7493(&quot;0x92&quot;) == document[_0x7493(&quot;0x91&quot;)]) {
            reset();
          } else {
            setTimeout(arguments[_0x7493(&quot;0x8f&quot;)], 50);
          }
        }();
        break;
      default:
        try {
          window[_0x7493(&quot;0x81&quot;)](_0x7493(&quot;0x93&quot;), reset, false);
          document[&quot;addEventListener&quot;](_0x7493(&quot;0x94&quot;), reset, false);
        } catch (_0x5c9beb) {
        }
    }
  } catch (_0x23d90e) {
  }
}();
