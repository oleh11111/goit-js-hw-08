!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,o,u,a,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,f=setTimeout(h,t),s?p(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function h(){var e=b();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return d?g(n,u-(e-l)):n}(e))}function w(e){return f=void 0,m&&r?p(e):(r=o=void 0,a)}function T(){var e=b(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(h,t),p(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(j(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?a:w(b())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}function S(){return JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""}}function O(e){var t=document.querySelector('[name="email"]'),n=document.querySelector('[name="message"]');t.value=e.email,n.value=e.message}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var h=document.querySelector("form"),w=S();O(w),h.addEventListener("input",e(t)((function(e){var t=e.target.value;"email"===e.target.getAttribute("name")?w.email=t:w.message=t,localStorage.setItem("feedback-form-state",JSON.stringify(w))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),localStorage.removeItem("feedback-form-state"),O(w=S())}))}();
//# sourceMappingURL=03-feedback.8bdb8140.js.map