!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},u=n.parcelRequired7c6;null==u&&((u=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var u={id:e,exports:{}};return t[e]=u,n.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=u);var i=u("6JpON"),r=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]');function l(n,t,o){setTimeout((function(){for(var u=function(o){setTimeout((function(){(function(e,n){return new Promise((function(t,o){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}))})(o+1,n).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}),t*o)},r=0;r<o;r++)u(r)}),n)}document.querySelector('button[type="submit"]').addEventListener("click",(function(e){e.preventDefault();var n=Number(r.value),t=Number(a.value),o=Number(c.value);l(n,t,o),setTimeout((function(){r.value="",a.value="",c.value=""}),o*t+n)}))}();
//# sourceMappingURL=03-promises.ffc84cdb.js.map