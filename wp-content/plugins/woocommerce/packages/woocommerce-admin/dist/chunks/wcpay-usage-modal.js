(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[52],{125:function(e,t,n){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},163:function(e,t,n){"use strict";var o=n(8),r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=n(125),a=n(164),c=n(165),s="function"==typeof Symbol&&Symbol.iterator;function l(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,o={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return o[e]}))):t.toString(36);var n,o}function u(e,t,n,o){var i,c=typeof e;if("undefined"!==c&&"boolean"!==c||(e=null),null===e||"string"===c||"number"===c||"object"===c&&e.$$typeof===r)return n(o,e,""===t?"."+l(e,0):t),1;var d=0,p=""===t?".":t+":";if(Array.isArray(e))for(var f=0;f<e.length;f++)d+=u(i=e[f],p+l(i,f),n,o);else{var m=function(e){var t=e&&(s&&e[s]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(m){0;for(var h,b=m.call(e),y=0;!(h=b.next()).done;)d+=u(i=h.value,p+l(i,y++),n,o)}else if("object"===c){0;var v=""+e;a(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===v?"object with keys {"+Object.keys(e).join(", ")+"}":v,"")}}return d}var d=/\/+/g;function p(e){return(""+e).replace(d,"$&/")}var f,m,h=b,b=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)},y=function(e){a(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)};function v(e,t,n,o){this.result=e,this.keyPrefix=t,this.func=n,this.context=o,this.count=0}function g(e,t,n){var r,a,c=e.result,s=e.keyPrefix,l=e.func,u=e.context,d=l.call(u,t,e.count++);Array.isArray(d)?O(d,c,n,i.thatReturnsArgument):null!=d&&(o.isValidElement(d)&&(r=d,a=s+(!d.key||t&&t.key===d.key?"":p(d.key)+"/")+n,d=o.cloneElement(r,{key:a},void 0!==r.props?r.props.children:void 0)),c.push(d))}function O(e,t,n,o,r){var i="";null!=n&&(i=p(n)+"/");var a=v.getPooled(t,i,o,r);!function(e,t,n){null==e||u(e,"",t,n)}(e,g,a),v.release(a)}v.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},f=function(e,t,n,o){if(this.instancePool.length){var r=this.instancePool.pop();return this.call(r,e,t,n,o),r}return new this(e,t,n,o)},(m=v).instancePool=[],m.getPooled=f||h,m.poolSize||(m.poolSize=10),m.release=y;e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return c(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(o.isValidElement(e))return c(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;a(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)O(e[n],t,n,i.thatReturnsArgument);return t}},164:function(e,t,n){"use strict";e.exports=function(e,t,n,o,r,i,a,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,r,i,a,c],u=0;(s=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},165:function(e,t,n){"use strict";var o=n(125);e.exports=o},166:function(e,t,n){"use strict";function o(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(o)}},353:function(e,t,n){"use strict";var o=n(7),r=n(0),i=n(77),a=n(147);t.a=Object(i.a)((function(e){return function(t){var n=Object(a.a)(e);return Object(r.createElement)(e,Object(o.a)({},t,{instanceId:n}))}}),"withInstanceId")},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=c(n(8)),i=c(n(163)),a=c(n(166));function c(e){return e&&e.__esModule?e:{default:e}}var s=void 0;function l(e,t){var n,a,c,u,d,p,f,m,h=[],b={};for(p=0;p<e.length;p++)if("string"!==(d=e[p]).type){if(!t.hasOwnProperty(d.value)||void 0===t[d.value])throw new Error("Invalid interpolation, missing component node: `"+d.value+"`");if("object"!==o(t[d.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+d.value+"`","\n> "+s);if("componentClose"===d.type)throw new Error("Missing opening component token: `"+d.value+"`");if("componentOpen"===d.type){n=t[d.value],c=p;break}h.push(t[d.value])}else h.push(d.value);return n&&(u=function(e,t){var n,o,r=t[e],i=0;for(o=e+1;o<t.length;o++)if((n=t[o]).value===r.value){if("componentOpen"===n.type){i++;continue}if("componentClose"===n.type){if(0===i)return o;i--}}throw new Error("Missing closing component token `"+r.value+"`")}(c,e),f=l(e.slice(c+1,u),t),a=r.default.cloneElement(n,{},f),h.push(a),u<e.length-1&&(m=l(e.slice(u+1),t),h=h.concat(m))),1===h.length?h[0]:(h.forEach((function(e,t){e&&(b["interpolation-child-"+t]=e)})),(0,i.default)(b))}t.default=function(e){var t=e.mixedString,n=e.components,r=e.throwErrors;if(s=t,!n)return t;if("object"!==(void 0===n?"undefined":o(n))){if(r)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var i=(0,a.default)(t);try{return l(i,n)}catch(e){if(r)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},546:function(e,t,n){"use strict";var o=n(7),r=n(11),i=n(16),a=n(17),c=n(18),s=n(21),l=n(9),u=n(0),d=n(353),p=n(47),f=n(12),m=n(4),h=n.n(m),b=n(57),y=n(181),v=n(111),g=n(110),O=n(113),w=n(109);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(s.a)(this,n)}}var k=function(e){Object(c.a)(n,e);var t=j(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).containerRef=Object(u.createRef)(),e.handleKeyDown=e.handleKeyDown.bind(Object(f.a)(e)),e.handleFocusOutside=e.handleFocusOutside.bind(Object(f.a)(e)),e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.focusOnMount&&this.containerRef.current.focus()}},{key:"handleFocusOutside",value:function(e){this.props.shouldCloseOnClickOutside&&this.onRequestClose(e)}},{key:"handleKeyDown",value:function(e){e.keyCode===b.b&&this.handleEscapeKeyDown(e)}},{key:"handleEscapeKeyDown",value:function(e){this.props.shouldCloseOnEsc&&(e.stopPropagation(),this.onRequestClose(e))}},{key:"onRequestClose",value:function(e){var t=this.props.onRequestClose;t&&t(e)}},{key:"render",value:function(){var e=this.props,t=e.overlayClassName,n=e.contentLabel,o=e.aria,r=o.describedby,i=o.labelledby,a=e.children,c=e.className,s=e.role,l=e.style;return Object(u.createElement)(v.a,{className:h()("components-modal__screen-overlay",t),onKeyDown:this.handleKeyDown},Object(u.createElement)("div",{className:h()("components-modal__frame",c),style:l,ref:this.containerRef,role:s,"aria-label":n,"aria-labelledby":n?null:i,"aria-describedby":r,tabIndex:"-1"},a))}}]),n}(u.Component),_=Object(y.a)([O.a,w.a,g.a])(k),E=n(3),R=n(257),C=n(68),S=function(e){var t=e.icon,n=e.title,o=e.onClose,r=e.closeLabel,i=e.headingId,a=e.isDismissible,c=r||Object(E.__)("Close dialog");return Object(u.createElement)("div",{className:"components-modal__header"},Object(u.createElement)("div",{className:"components-modal__header-heading-container"},t&&Object(u.createElement)("span",{className:"components-modal__icon-container","aria-hidden":!0},t),n&&Object(u.createElement)("h1",{id:i,className:"components-modal__header-heading"},n)),a&&Object(u.createElement)(C.a,{onClick:o,icon:R.a,label:c}))},D=n(2),x=new Set(["alert","status","log","marquee","timer"]),N=[],P=!1;function M(e){if(!P){var t=document.body.children;Object(D.forEach)(t,(function(t){t!==e&&function(e){var t=e.getAttribute("role");return!("SCRIPT"===e.tagName||e.hasAttribute("aria-hidden")||e.hasAttribute("aria-live")||x.has(t))}(t)&&(t.setAttribute("aria-hidden","true"),N.push(t))})),P=!0}}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(s.a)(this,n)}}var A,q=0,I=function(e){Object(c.a)(n,e);var t=T(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).prepareDOM(),o}return Object(a.a)(n,[{key:"componentDidMount",value:function(){1===++q&&this.openFirstModal()}},{key:"componentWillUnmount",value:function(){0===--q&&this.closeLastModal(),this.cleanDOM()}},{key:"prepareDOM",value:function(){A||(A=document.createElement("div"),document.body.appendChild(A)),this.node=document.createElement("div"),A.appendChild(this.node)}},{key:"cleanDOM",value:function(){A.removeChild(this.node)}},{key:"openFirstModal",value:function(){M(A),document.body.classList.add(this.props.bodyOpenClassName)}},{key:"closeLastModal",value:function(){document.body.classList.remove(this.props.bodyOpenClassName),P&&(Object(D.forEach)(N,(function(e){e.removeAttribute("aria-hidden")})),N=[],P=!1)}},{key:"render",value:function(){var e=this.props,t=e.onRequestClose,n=e.title,i=e.icon,a=e.closeButtonLabel,c=e.children,s=e.aria,l=e.instanceId,d=e.isDismissible,f=e.isDismissable,m=Object(r.a)(e,["onRequestClose","title","icon","closeButtonLabel","children","aria","instanceId","isDismissible","isDismissable"]),h=s.labelledby||"components-modal-header-".concat(l);return f&&Object(p.a)("isDismissable prop of the Modal component",{alternative:"isDismissible prop (renamed) of the Modal component"}),Object(u.createPortal)(Object(u.createElement)(_,Object(o.a)({onRequestClose:t,aria:{labelledby:n?h:null,describedby:s.describedby}},m),Object(u.createElement)("div",{className:"components-modal__content",role:"document"},Object(u.createElement)(S,{closeLabel:a,headingId:h,icon:i,isDismissible:d||f,onClose:t,title:n}),c)),this.node)}}]),n}(u.Component);I.defaultProps={bodyOpenClassName:"modal-open",role:"dialog",title:null,focusOnMount:!0,shouldCloseOnEsc:!0,shouldCloseOnClickOutside:!0,isDismissible:!0,aria:{labelledby:null,describedby:null}};t.a=Object(d.a)(I)},587:function(e,t,n){"use strict";var o=n(14),r=n.n(o),i=n(75),a=n.n(i),c=n(20),s=n.n(c),l=n(15),u=n.n(l),d=n(22),p=n.n(d),f=n(23),m=n.n(f),h=n(10),b=n.n(h),y=n(0),v=n(3),g=n(181),O=n(25),w=n(43),j=n.n(w),k=n(546),_=n(68),E=n(74),R=n(34);function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m()(this,n)}}var S=function(e){p()(o,e);var t,n=C(o);function o(e){var t;return s()(this,o),(t=n.call(this,e)).state={isLoadingScripts:!1,isRequestStarted:!1},t}return u()(o,[{key:"componentDidUpdate",value:(t=a()(r.a.mark((function e(t,n){var o,i,a,c,s,l,u,d,p,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props,i=o.hasErrors,a=o.isRequesting,c=o.onClose,s=o.onContinue,l=o.createNotice,u=this.state,d=u.isLoadingScripts,u.isRequestStarted){e.next=4;break}return e.abrupt("return");case 4:p=!a&&!d&&(t.isRequesting||n.isLoadingScripts)&&!i,f=!a&&t.isRequesting&&i,p&&(c(),s()),f&&(l("error",Object(v.__)("There was a problem updating your preferences.",'woocommerce')),c());case 8:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"updateTracking",value:function(e){var t=this,n=e.allowTracking,o=this.props.updateOptions;n&&"function"==typeof window.wcTracks.enable?(this.setState({isLoadingScripts:!0}),window.wcTracks.enable((function(){t._isMounted&&t.setState({isLoadingScripts:!1})}))):n||(window.wcTracks.isEnabled=!1);var r=n?"yes":"no";this.setState({isRequestStarted:!0}),o({woocommerce_allow_tracking:r})}},{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;if(this.props.allowTracking){var t=this.props,n=t.onClose,o=t.onContinue;return n(),o(),null}var r=this.props,i=r.isRequesting,a=r.title,c=void 0===a?Object(v.__)("Build a better WooCommerce",'woocommerce'):a,s=r.message,l=void 0===s?j()({mixedString:Object(v.__)("Get improved features and faster fixes by sharing non-sensitive data via {{link}}usage tracking{{/link}} that shows us how WooCommerce is used. No personal data is tracked or stored.",'woocommerce'),components:{link:Object(y.createElement)(E.Link,{href:"https://woocommerce.com/usage-tracking",target:"_blank",type:"external"})}}):s,u=r.dismissActionText,d=void 0===u?Object(v.__)("No thanks",'woocommerce'):u,p=r.acceptActionText,f=void 0===p?Object(v.__)("Yes, count me in!",'woocommerce'):p,m=this.state.isRequestStarted&&i;return Object(y.createElement)(k.a,{title:c,isDismissible:this.props.isDismissible,onRequestClose:function(){return e.props.onClose()},className:"woocommerce-usage-modal"},Object(y.createElement)("div",{className:"woocommerce-usage-modal__wrapper"},Object(y.createElement)("div",{className:"woocommerce-usage-modal__message"},l),Object(y.createElement)("div",{className:"woocommerce-usage-modal__actions"},Object(y.createElement)(_.a,{isSecondary:!0,isBusy:m,onClick:function(){return e.updateTracking({allowTracking:!1})}},d),Object(y.createElement)(_.a,{isPrimary:!0,isBusy:m,onClick:function(){return e.updateTracking({allowTracking:!0})}},f))))}}]),o}(y.Component);t.a=Object(g.a)(Object(O.withSelect)((function(e){var t=e(R.OPTIONS_STORE_NAME),n=t.getOption,o=t.getOptionsUpdatingError,r=t.isOptionsUpdating;return{allowTracking:"yes"===n("woocommerce_allow_tracking"),isRequesting:Boolean(r()),hasErrors:Boolean(o())}})),Object(O.withDispatch)((function(e){return{createNotice:e("core/notices").createNotice,updateOptions:e(R.OPTIONS_STORE_NAME).updateOptions}})))(S)},606:function(e,t,n){"use strict";n.r(t);var o=n(31),r=n.n(o),i=n(0),a=n(3),c=n(29),s=n(43),l=n.n(s),u=n(74),d=n(587);t.default=function(){var e="1"===Object(c.getQuery)()["wcpay-connection-success"],t=Object(i.useState)(e),n=r()(t,2),o=n[0],s=n[1];if(!o)return null;var p=function(){s(!1),Object(c.updateQueryString)({"wcpay-connection-success":void 0})},f=Object(a.__)("Help us build a better WooCommerce Payments experience",'woocommerce'),m=l()({mixedString:Object(a.__)("By agreeing to share non-sensitive {{link}}usage data{{/link}}, you’ll help us improve features and optimize the WooCommerce Payments experience. You can opt out at any time.",'woocommerce'),components:{link:Object(i.createElement)(u.Link,{href:"https://woocommerce.com/usage-tracking",target:"_blank",type:"external"})}});return Object(i.createElement)(d.a,{isDismissible:!1,title:f,message:m,acceptActionText:Object(a.__)("I agree",'woocommerce'),dismissActionText:Object(a.__)("No thanks",'woocommerce'),onContinue:p,onClose:p})}}}]);