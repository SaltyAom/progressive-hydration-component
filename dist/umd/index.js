!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports"],e)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>new Promise(t=>{let o=[];e.map(i=>setTimeout(u=>{o.push(i),o.length===e.length&&t(o)},i))})}));