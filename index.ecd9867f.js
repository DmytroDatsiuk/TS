!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(i,o){var a=e.apply(n,r);function s(e){t(a,i,o,s,u,"next",e)}function u(e){t(a,i,o,s,u,"throw",e)}s(void 0)}))}}function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function i(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}Object.create;Object.create;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e,t){return c(e,t)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function d(e){if(Array.isArray(e))return e}function f(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function _(e,t){return d(e)||f(e)||y(e,t)||v()}function g(e){if(Array.isArray(e))return p(e)}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(e){return g(e)||f(e)||y(e)||m()}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function w(e,t,n){return w=b()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&l(i,n.prototype),i},w.apply(null,arguments)}function I(e,t,n){return w.apply(null,arguments)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function T(e){return C(e)}function E(e){var t="function"==typeof Map?new Map:void 0;return E=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return I(e,arguments,T(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,e)},E(e)}function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function P(e){return e&&e.constructor===Symbol?"symbol":typeof e}function N(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?o(e):t}function R(e){var t=S();return function(){var n,r=T(e);if(t){var i=T(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return N(this,n)}}var O,A,D,x=O={};function L(){throw new Error("setTimeout has not been defined")}function M(){throw new Error("clearTimeout has not been defined")}function F(e){if(A===setTimeout)return setTimeout(e,0);if((A===L||!A)&&setTimeout)return A=setTimeout,setTimeout(e,0);try{return A(e,0)}catch(t){try{return A.call(null,e,0)}catch(t){return A.call(this,e,0)}}}!function(){try{A="function"==typeof setTimeout?setTimeout:L}catch(e){A=L}try{D="function"==typeof clearTimeout?clearTimeout:M}catch(e){D=M}}();var U,q=[],j=!1,W=-1;function B(){j&&U&&(j=!1,U.length?q=U.concat(q):W=-1,q.length&&H())}function H(){if(!j){var e=F(B);j=!0;for(var t=q.length;t;){for(U=q,q=[];++W<t;)U&&U[W].run();W=-1,t=q.length}U=null,j=!1,function(e){if(D===clearTimeout)return clearTimeout(e);if((D===M||!D)&&clearTimeout)return D=clearTimeout,clearTimeout(e);try{D(e)}catch(t){try{return D.call(null,e)}catch(t){return D.call(this,e)}}}(e)}}function V(e,t){this.fun=e,this.array=t}function z(){}x.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];q.push(new V(e,t)),1!==q.length||j||F(H)},V.prototype.run=function(){this.fun.apply(null,this.array)},x.title="browser",x.browser=!0,x.env={},x.argv=[],x.version="",x.versions={},x.on=z,x.addListener=z,x.once=z,x.off=z,x.removeListener=z,x.removeAllListeners=z,x.emit=z,x.prependListener=z,x.prependOnceListener=z,x.listeners=function(e){return[]},x.binding=function(e){throw new Error("process.binding is not supported")},x.cwd=function(){return"/"},x.chdir=function(e){throw new Error("process.chdir is not supported")},x.umask=function(){return 0};var K=!1,G=!1,Y="${JSCORE_VERSION}",J=function(e,t){if(!e)throw Q(t)},Q=function(e){return new Error("Firebase Database ("+Y+") INTERNAL ASSERT FAILED: "+e)},$=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},X={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=o>>2,h=(3&o)<<4|s>>4,d=(15&s)<<2|c>>6,f=63&c;u||(f=64,a||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw Error();var c=o<<2|a>>4;if(r.push(c),64!==s){var l=a<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Z=function(e){var t=$(e);return X.encodeByteArray(t,!0)},ee=function(e){return Z(e).replace(/\./g,"")},te=function(e){try{return X.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ne(e){return re(void 0,e)}function re(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=re(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ie=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},oe=function(){try{return ie()||function(){if(void 0!==O&&void 0!==O.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&te(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},ae=function(e){var t,n;return null===(n=null===(t=oe())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},se=function(e){var t=ae(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},ue=function(){var e;return null===(e=oe())||void 0===e?void 0:e.config},ce=function(e){var t;return null===(t=oe())||void 0===t?void 0:t["_".concat(e)]},le=function(){"use strict";function e(){var t=this;a(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return u(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var o=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ee(JSON.stringify({alg:"none",type:"JWT"})),ee(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function fe(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function ve(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function pe(){return!0===K||!0===G}function ye(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _e=function(e){"use strict";h(n,e);var t=R(n);function n(e,r,i){var s;return a(this,n),(s=t.call(this,r)).code=e,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(o(s),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(o(s),ge.prototype.create),s}return n}(E(Error)),ge=function(){"use strict";function e(t,n,r){a(this,e),this.service=t,this.serviceName=n,this.errors=r}return u(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?me(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new _e(o,u,i);return c}}]),e}();function me(e,t){return e.replace(ke,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ke=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){return JSON.parse(e)}function we(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=be(te(o[0])||""),n=be(te(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},Ce=function(e){var t=Ie(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Te(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ee(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Se(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Pe(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Ne(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(Re(l)&&Re(h)){if(!Ne(l,h))return!1}else if(l!==h)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var d=!0,f=!1,v=void 0;try{for(var p,y=r[Symbol.iterator]();!(d=(p=y.next()).done);d=!0){var _=p.value;if(!n.includes(_))return!1}}catch(e){f=!0,v=e}finally{try{d||null==y.return||y.return()}finally{if(f)throw v}}return!0}function Re(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oe(e){var t=[],n=!0,r=!1,i=void 0;try{for(var o,a=function(){var e=_(o.value,2),n=e[0],r=e[1];Array.isArray(r)?r.forEach((function(e){t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))},s=Object.entries(e)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)a()}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t.length?"&"+t.join("&"):""}function Ae(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=_(e.split("="),2),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function De(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe=function(){"use strict";function e(){a(this,e),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}return u(e,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var o=16;o<80;o++){var a=n[o-3]^n[o-8]^n[o-14]^n[o-16];n[o]=4294967295&(a<<1|a>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],d=this.chain_[3],f=this.chain_[4],v=0;v<80;v++){v<40?v<20?(s=d^l&(h^d),u=1518500249):(s=l^h^d,u=1859775393):v<60?(s=l&h|d&(l|h),u=2400959708):(s=l^h^d,u=3395469782);var p=(c<<5|c>>>27)+s+f+u+n[v]&4294967295;f=d,d=h,h=4294967295&(l<<30|l>>>2),l=c,c=p}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}]),e}();var Le=function(){"use strict";function e(t,n){var r=this;a(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){t(r)})).catch((function(e){r.error(e)}))}return u(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Me),void 0===r.error&&(r.error=Me),void 0===r.complete&&(r.complete=Me);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function Me(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e,t){return"".concat(e," failed: ").concat(t," argument ")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ue=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,J(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(o<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},qe=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(e){return e&&e._delegate?e._delegate:e}function We(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Be(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function He(e,t,n){return He="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Be(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}},He(e,t,n)}function Ve(e,t,n){return He(e,t,n)}var ze=function(){"use strict";function e(t,n,r){a(this,e),this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return u(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),Ke="[DEFAULT]",Ge=function(){"use strict";function e(t,n){a(this,e),this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return u(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new le;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch(e){}var t=!0,n=!1,r=void 0;try{for(var i,o=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=_(i.value,2),s=a[0],u=a[1],c=this.normalizeInstanceIdentifier(s);try{var l=this.getOrInitializeService({instanceIdentifier:c});u.resolve(l)}catch(e){}}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return t=Array.from(e.instances.values()),[4,Promise.all(k(t.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(k(t.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return n.sent(),[2]}}))}))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,n=void 0===t?{}:t,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:r,options:n}),o=!0,a=!1,s=void 0;try{for(var u,c=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=_(u.value,2),h=l[0],d=l[1],f=this.normalizeInstanceIdentifier(h);r===f&&d.resolve(i)}}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}return i}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Ke?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke;return this.component?this.component.multipleInstances?e:Ke:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,Je,Qe=function(){"use strict";function e(t){a(this,e),this.name=t,this.providers=new Map}return u(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ge(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),$e=[];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Je=Ye||(Ye={}))[Je.DEBUG=0]="DEBUG",Je[Je.VERBOSE=1]="VERBOSE",Je[Je.INFO=2]="INFO",Je[Je.WARN=3]="WARN",Je[Je.ERROR=4]="ERROR",Je[Je.SILENT=5]="SILENT";var Xe,Ze={debug:Ye.DEBUG,verbose:Ye.VERBOSE,info:Ye.INFO,warn:Ye.WARN,error:Ye.ERROR,silent:Ye.SILENT},et=Ye.INFO,tt=(We(Xe={},Ye.DEBUG,"log"),We(Xe,Ye.VERBOSE,"log"),We(Xe,Ye.INFO,"info"),We(Xe,Ye.WARN,"warn"),We(Xe,Ye.ERROR,"error"),Xe),nt=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o;if(!(t<e.logLevel)){var a=(new Date).toISOString(),s=tt[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(o=console)[s].apply(o,["[".concat(a,"]  ").concat(e.name,":")].concat(k(r)))}},rt=function(){"use strict";function e(t){a(this,e),this.name=t,this._logLevel=et,this._logHandler=nt,this._userLogHandler=null,$e.push(this)}return u(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Ye))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Ze[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ye.DEBUG].concat(k(t))),this._logHandler.apply(this,[this,Ye.DEBUG].concat(k(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ye.VERBOSE].concat(k(t))),this._logHandler.apply(this,[this,Ye.VERBOSE].concat(k(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ye.INFO].concat(k(t))),this._logHandler.apply(this,[this,Ye.INFO].concat(k(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ye.WARN].concat(k(t))),this._logHandler.apply(this,[this,Ye.WARN].concat(k(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ye.ERROR].concat(k(t))),this._logHandler.apply(this,[this,Ye.ERROR].concat(k(t)))}}]),e}();function it(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var ot,at;var st=new WeakMap,ut=new WeakMap,ct=new WeakMap,lt=new WeakMap,ht=new WeakMap;var dt={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ut.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ct.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ft(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(at||(at=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(yt(this),n),pt(st.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return pt(e.apply(yt(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o,a=(o=e).call.apply(o,[yt(this),t].concat(k(r)));return ct.set(a,t.sort?t.sort():[t]),pt(a)}}function vt(e){return"function"==typeof e?ft(e):(e instanceof IDBTransaction&&function(e){if(!ut.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),r()},o=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));ut.set(e,t)}}(e),t=e,(ot||(ot=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,dt):e);var t}function pt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(pt(t.result)),r()},o=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&st.set(e,t)})).catch((function(){})),ht.set(n,t),n;var t,n;if(lt.has(e))return lt.get(e);var r=vt(e);return r!==e&&(lt.set(e,r),ht.set(r,e)),r}var yt=function(e){return ht.get(e)};function _t(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,o=n.blocking,a=n.terminated,s=indexedDB.open(e,t),u=pt(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(pt(s.result),e.oldVersion,e.newVersion,pt(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),u}var gt,mt=["get","getKey","getAll","getAllKeys","count"],kt=["put","add","delete","clear"],bt=new Map;function wt(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(bt.get(t))return bt.get(t);var r=t.replace(/FromIndex$/,""),o=t!==r,a=kt.includes(r);if(r in(o?IDBIndex:IDBObjectStore).prototype&&(a||mt.includes(r))){var s,u=(s=n((function(e){var t,n,s,u,c,l,h=arguments;return i(this,(function(i){switch(i.label){case 0:for(t=h.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=h[s];return c=this.transaction(e,a?"readwrite":"readonly"),l=c.store,o&&(l=l.index(n.shift())),[4,Promise.all([(u=l)[r].apply(u,k(n)),a&&c.done])];case 1:return[2,i.sent()[0]]}}))})),function(e){return s.apply(this,arguments)});return bt.set(t,u),u}}}gt=function(e){return it(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){We(e,t,n[t])}))}return e}({},e),{get:function(t,n,r){return wt(t,n)||e.get(t,n,r)},has:function(t,n){return!!wt(t,n)||e.has(t,n)}})},dt=gt(dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var It=function(){"use strict";function e(t){a(this,e),this.container=t}return u(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var Ct,Tt,Et="@firebase/app",St="0.9.1",Pt=new rt("@firebase/app"),Nt="[DEFAULT]",Rt=(We(Ct={},Et,"fire-core"),We(Ct,"@firebase/app-compat","fire-core-compat"),We(Ct,"@firebase/analytics","fire-analytics"),We(Ct,"@firebase/analytics-compat","fire-analytics-compat"),We(Ct,"@firebase/app-check","fire-app-check"),We(Ct,"@firebase/app-check-compat","fire-app-check-compat"),We(Ct,"@firebase/auth","fire-auth"),We(Ct,"@firebase/auth-compat","fire-auth-compat"),We(Ct,"@firebase/database","fire-rtdb"),We(Ct,"@firebase/database-compat","fire-rtdb-compat"),We(Ct,"@firebase/functions","fire-fn"),We(Ct,"@firebase/functions-compat","fire-fn-compat"),We(Ct,"@firebase/installations","fire-iid"),We(Ct,"@firebase/installations-compat","fire-iid-compat"),We(Ct,"@firebase/messaging","fire-fcm"),We(Ct,"@firebase/messaging-compat","fire-fcm-compat"),We(Ct,"@firebase/performance","fire-perf"),We(Ct,"@firebase/performance-compat","fire-perf-compat"),We(Ct,"@firebase/remote-config","fire-rc"),We(Ct,"@firebase/remote-config-compat","fire-rc-compat"),We(Ct,"@firebase/storage","fire-gcs"),We(Ct,"@firebase/storage-compat","fire-gcs-compat"),We(Ct,"@firebase/firestore","fire-fst"),We(Ct,"@firebase/firestore-compat","fire-fst-compat"),We(Ct,"fire-js","fire-js"),We(Ct,"firebase","fire-js-all"),Ct),Ot=new Map,At=new Map;function Dt(e,t){try{e.container.addComponent(t)}catch(n){Pt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function xt(e){var t=e.name;if(At.has(t))return Pt.debug("There were multiple attempts to register component ".concat(t,".")),!1;At.set(t,e);var n=!0,r=!1,i=void 0;try{for(var o,a=Ot.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){Dt(o.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}function Lt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mt=(We(Tt={},"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),We(Tt,"bad-app-name","Illegal App name: '{$appName}"),We(Tt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),We(Tt,"app-deleted","Firebase App named '{$appName}' already deleted"),We(Tt,"no-options","Need to provide options, when not being deployed to hosting via source."),We(Tt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),We(Tt,"invalid-log-argument","First argument to `onLog` must be null or a function."),We(Tt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),We(Tt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),We(Tt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),We(Tt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Tt),Ft=new ge("app","Firebase",Mt),Ut=function(){"use strict";function e(t,n,r){var i=this;a(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ze("app",(function(){return i}),"PUBLIC"))}return u(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}]),e}(),qt="9.16.0";function jt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:Nt,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw Ft.create("bad-app-name",{appName:String(o)});if(n||(n=ue()),!n)throw Ft.create("no-options");var a=Ot.get(o);if(a){if(Ne(n,a.options)&&Ne(i,a.config))return a;throw Ft.create("duplicate-app",{appName:o})}var s=new Qe(o),u=!0,c=!1,l=void 0;try{for(var h,d=At.values()[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=h.value;s.addComponent(f)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var v=new Ut(n,i,s);return Ot.set(o,v),v}function Wt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=Ot.get(e);if(!t&&e===Nt)return jt();if(!t)throw Ft.create("no-app",{appName:e});return t}function Bt(e,t,n){var r,i=null!==(r=Rt[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Pt.warn(s.join(" "))}xt(new ze("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ht="firebase-heartbeat-store",Vt=null;function zt(){return Vt||(Vt=_t("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Ht)}}).catch((function(e){throw Ft.create("idb-open",{originalErrorMessage:e.message})}))),Vt}function Kt(e){return Gt.apply(this,arguments)}function Gt(){return(Gt=n((function(e){var t,n;return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,zt()];case 1:return[2,r.sent().transaction(Ht).objectStore(Ht).get(Qt(e))];case 2:return(t=r.sent())instanceof _e?Pt.warn(t.message):(n=Ft.create("idb-get",{originalErrorMessage:null==t?void 0:t.message}),Pt.warn(n.message)),[3,3];case 3:return[2]}}))}))).apply(this,arguments)}function Yt(e,t){return Jt.apply(this,arguments)}function Jt(){return(Jt=n((function(e,t){var n,r,o,a;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,zt()];case 1:return n=i.sent(),r=n.transaction(Ht,"readwrite"),[4,r.objectStore(Ht).put(t,Qt(e))];case 2:return i.sent(),[2,r.done];case 3:return(o=i.sent())instanceof _e?Pt.warn(o.message):(a=Ft.create("idb-set",{originalErrorMessage:null==o?void 0:o.message}),Pt.warn(a.message)),[3,4];case 4:return[2]}}))}))).apply(this,arguments)}function Qt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t=1024,Xt=function(){"use strict";function e(t){var n=this;a(this,e),this.container=t,this._heartbeatsCache=null;var r=this.container.getProvider("app").getImmediate();this._storage=new tn(r),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return u(e,[{key:"triggerHeartbeat",value:function(){var e=this;return n((function(){var t,n,r;return i(this,(function(i){switch(i.label){case 0:return t=e.container.getProvider("platform-logger").getImmediate(),n=t.getPlatformInfoString(),r=Zt(),null!==e._heartbeatsCache?[3,2]:[4,e._heartbeatsCachePromise];case 1:e._heartbeatsCache=i.sent(),i.label=2;case 2:return e._heartbeatsCache.lastSentHeartbeatDate===r||e._heartbeatsCache.heartbeats.some((function(e){return e.date===r}))?[2]:(e._heartbeatsCache.heartbeats.push({date:r,agent:n}),e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),[2,e._storage.overwrite(e._heartbeatsCache)])}}))}))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return n((function(){var t,n,r,o,a;return i(this,(function(i){switch(i.label){case 0:return null!==e._heartbeatsCache?[3,2]:[4,e._heartbeatsCachePromise];case 1:i.sent(),i.label=2;case 2:return null===e._heartbeatsCache||0===e._heartbeatsCache.heartbeats.length?[2,""]:(t=Zt(),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$t,n=[],r=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(){var e=s.value,i=n.find((function(t){return t.agent===e.agent}));if(i){if(i.dates.push(e.date),nn(n)>t)return i.dates.pop(),"break"}else if(n.push({agent:e.agent,dates:[e.date]}),nn(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){if("break"===u())break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:n,unsentEntries:r}}(e._heartbeatsCache.heartbeats),r=n.heartbeatsToSend,o=n.unsentEntries,a=ee(JSON.stringify({version:2,heartbeats:r})),e._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(e._heartbeatsCache.heartbeats=o,[4,e._storage.overwrite(e._heartbeatsCache)]):[3,4]);case 3:return i.sent(),[3,5];case 4:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache),i.label=5;case 5:return[2,a]}}))}))()}}]),e}();function Zt(){return(new Date).toISOString().substring(0,10)}var en,tn=function(){"use strict";function e(t){a(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return u(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return n((function(){return i(this,(function(e){return ye()?[2,new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1}))]:[2,!1]}))}))()}},{key:"read",value:function(){var e=this;return n((function(){return i(this,(function(t){switch(t.label){case 0:return[4,e._canUseIndexedDBPromise];case 1:return t.sent()?[3,2]:[2,{heartbeats:[]}];case 2:return[4,Kt(e.app)];case 3:return[2,t.sent()||{heartbeats:[]}];case 4:return[2]}}))}))()}},{key:"overwrite",value:function(e){var t=this;return n((function(){var n,r;return i(this,(function(i){switch(i.label){case 0:return[4,t._canUseIndexedDBPromise];case 1:return i.sent()?[3,2]:[2];case 2:return[4,t.read()];case 3:return r=i.sent(),[2,Yt(t.app,{lastSentHeartbeatDate:null!==(n=e.lastSentHeartbeatDate)&&void 0!==n?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})];case 4:return[2]}}))}))()}},{key:"add",value:function(e){var t=this;return n((function(){var n,r;return i(this,(function(i){switch(i.label){case 0:return[4,t._canUseIndexedDBPromise];case 1:return i.sent()?[3,2]:[2];case 2:return[4,t.read()];case 3:return r=i.sent(),[2,Yt(t.app,{lastSentHeartbeatDate:null!==(n=e.lastSentHeartbeatDate)&&void 0!==n?n:r.lastSentHeartbeatDate,heartbeats:k(r.heartbeats).concat(k(e.heartbeats))})];case 4:return[2]}}))}))()}}]),e}();function nn(e){return ee(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en="",xt(new ze("platform-logger",(function(e){return new It(e)}),"PRIVATE")),xt(new ze("heartbeat",(function(e){return new Xt(e)}),"PRIVATE")),Bt(Et,St,en),Bt(Et,St,"esm2017"),Bt("fire-js","");function rn(){return We({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var on=rn,an=new ge("auth","Firebase",rn()),sn=new rt("@firebase/auth");function un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i;sn.logLevel<=Ye.ERROR&&(i=sn).error.apply(i,["Auth (".concat(qt,"): ").concat(e)].concat(k(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw fn.apply(void 0,[e].concat(k(n)))}function ln(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return fn.apply(void 0,[e].concat(k(n)))}function hn(e,t,n){var r=Object.assign(Object.assign({},on()),We({},t,n));return new ge("auth","Firebase",r).create(t,{appName:e.name})}function dn(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&cn(e,"argument-error"),hn(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function fn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i;if("string"!=typeof e){var o,a=n[0],s=k(n.slice(1));return s[0]&&(s[0].appName=e.name),(o=e._errorFactory).create.apply(o,[a].concat(k(s)))}return(i=an).create.apply(i,[e].concat(k(n)))}function vn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(!e)throw fn.apply(void 0,[t].concat(k(r)))}function pn(e){var t="INTERNAL ASSERTION FAILED: "+e;throw un(t),new Error(t)}function yn(e,t){e||pn(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _n=new Map;function gn(e){yn(e instanceof Function,"Expected a class definition");var t=_n.get(e);return t?(yn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_n.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,t){var n=Lt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(Ne(n.getOptions(),null!=t?t:{}))return r;cn(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function bn(){return"http:"===wn()||"https:"===wn()}function wn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!bn()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Cn=function(){"use strict";function e(t,n){a(this,e),this.shortDelay=t,this.longDelay=n,yn(n>t,"Short delay should be less than long delay!"),this.isMobile=fe()||ve()}return u(e,[{key:"get",value:function(){return In()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e,t){yn(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En,Sn=function(){"use strict";function e(){a(this,e)}return u(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),Pn=(We(En={},"CREDENTIAL_MISMATCH","custom-token-mismatch"),We(En,"MISSING_CUSTOM_TOKEN","internal-error"),We(En,"INVALID_IDENTIFIER","invalid-email"),We(En,"MISSING_CONTINUE_URI","internal-error"),We(En,"INVALID_PASSWORD","wrong-password"),We(En,"MISSING_PASSWORD","internal-error"),We(En,"EMAIL_EXISTS","email-already-in-use"),We(En,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),We(En,"INVALID_IDP_RESPONSE","invalid-credential"),We(En,"INVALID_PENDING_TOKEN","invalid-credential"),We(En,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),We(En,"MISSING_REQ_TYPE","internal-error"),We(En,"EMAIL_NOT_FOUND","user-not-found"),We(En,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),We(En,"EXPIRED_OOB_CODE","expired-action-code"),We(En,"INVALID_OOB_CODE","invalid-action-code"),We(En,"MISSING_OOB_CODE","internal-error"),We(En,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),We(En,"INVALID_ID_TOKEN","invalid-user-token"),We(En,"TOKEN_EXPIRED","user-token-expired"),We(En,"USER_NOT_FOUND","user-token-expired"),We(En,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),We(En,"INVALID_CODE","invalid-verification-code"),We(En,"INVALID_SESSION_INFO","invalid-verification-id"),We(En,"INVALID_TEMPORARY_PROOF","invalid-credential"),We(En,"MISSING_SESSION_INFO","missing-verification-id"),We(En,"SESSION_EXPIRED","code-expired"),We(En,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),We(En,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),We(En,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),We(En,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),We(En,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),We(En,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),We(En,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),We(En,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),We(En,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),We(En,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),We(En,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),En),Nn=new Cn(3e4,6e4);function Rn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function On(e,t,n,r){return An.apply(this,arguments)}function An(){return An=n((function(e,t,r,o){var a,s=arguments;return i(this,(function(u){return a=s.length>4&&void 0!==s[4]?s[4]:{},[2,Dn(e,a,n((function(){var n,a,s,u;return i(this,(function(i){switch(i.label){case 0:return n={},a={},o&&("GET"===t?a=o:n={body:JSON.stringify(o)}),s=Oe(Object.assign({key:e.config.apiKey},a)).slice(1),[4,e._getAdditionalHeaders()];case 1:return(u=i.sent())["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),[2,Sn.fetch()(Fn(e,e.config.apiHost,r,s),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},n))]}}))})))]}))})),An.apply(this,arguments)}function Dn(e,t,n){return xn.apply(this,arguments)}function xn(){return(xn=n((function(e,t,n){var r,o,a,s,u,c,l,h,d,f;return i(this,(function(i){switch(i.label){case 0:e._canInitEmulator=!1,r=Object.assign(Object.assign({},Pn),t),i.label=1;case 1:return i.trys.push([1,4,,5]),o=new Un(e),[4,Promise.race([n(),o.promise])];case 2:return a=i.sent(),o.clearNetworkTimeout(),[4,a.json()];case 3:if("needConfirmation"in(s=i.sent()))throw qn(e,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return[2,s];if(u=a.ok?s.errorMessage:s.error.message,c=_(u.split(" : "),2),l=c[0],h=c[1],"FEDERATED_USER_ID_ALREADY_LINKED"===l)throw qn(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===l)throw qn(e,"email-already-in-use",s);if("USER_DISABLED"===l)throw qn(e,"user-disabled",s);if(d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-"),h)throw hn(e,d,h);return cn(e,d),[3,5];case 4:if((f=i.sent())instanceof _e)throw f;return cn(e,"network-request-failed"),[3,5];case 5:return[2]}}))}))).apply(this,arguments)}function Ln(e,t,n,r){return Mn.apply(this,arguments)}function Mn(){return Mn=n((function(e,t,n,r){var o,a,s=arguments;return i(this,(function(i){switch(i.label){case 0:return o=s.length>4&&void 0!==s[4]?s[4]:{},[4,On(e,t,n,r,o)];case 1:return"mfaPendingCredential"in(a=i.sent())&&cn(e,"multi-factor-auth-required",{_serverResponse:a}),[2,a]}}))})),Mn.apply(this,arguments)}function Fn(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Tn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Un=function(){"use strict";function e(t){var n=this;a(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){n.timer=setTimeout((function(){return t(ln(n.auth,"network-request-failed"))}),Nn.get())}))}return u(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function qn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=ln(e,t,r);return i.customData._tokenResponse=n,i}function jn(e,t){return Wn.apply(this,arguments)}function Wn(){return(Wn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n((function(e,t){return i(this,(function(n){return[2,On(e,"POST","/v1/accounts:delete",t)]}))}))).apply(this,arguments)}function Bn(e,t){return Hn.apply(this,arguments)}function Hn(){return(Hn=n((function(e,t){return i(this,(function(n){return[2,On(e,"POST","/v1/accounts:lookup",t)]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return zn=n((function(e){var t,n,r,o,a,s,u=arguments;return i(this,(function(i){switch(i.label){case 0:return t=u.length>1&&void 0!==u[1]&&u[1],[4,(n=je(e)).getIdToken(t)];case 1:return r=i.sent(),vn((o=Gn(r))&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error"),a="object"==typeof o.firebase?o.firebase:void 0,s=null==a?void 0:a.sign_in_provider,[2,{claims:o,token:r,authTime:Vn(Kn(o.auth_time)),issuedAtTime:Vn(Kn(o.iat)),expirationTime:Vn(Kn(o.exp)),signInProvider:s||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}]}}))})),zn.apply(this,arguments)}function Kn(e){return 1e3*Number(e)}function Gn(e){var t=_(e.split("."),3),n=t[0],r=t[1],i=t[2];if(void 0===n||void 0===r||void 0===i)return un("JWT malformed, contained fewer than 3 sections"),null;try{var o=te(r);return o?JSON.parse(o):(un("Failed to decode base64 JWT payload"),null)}catch(e){return un("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Yn(e,t){return Jn.apply(this,arguments)}function Jn(){return Jn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n((function(e,t){var n,r=arguments;return i(this,(function(i){switch(i.label){case 0:if(r.length>2&&void 0!==r[2]&&r[2])return[2,t];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,t];case 2:return[2,i.sent()];case 3:return(n=i.sent())instanceof _e&&Qn(n)?e.auth.currentUser!==e?[3,5]:[4,e.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw n;case 6:return[2]}}))})),Jn.apply(this,arguments)}function Qn(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n=function(){"use strict";function e(t){a(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return u(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),r=this;this.timerId=setTimeout(n((function(){return i(this,(function(e){switch(e.label){case 0:return[4,r.iteration()];case 1:return e.sent(),[2]}}))})),t)}}},{key:"iteration",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,e.user.getIdToken(!0)];case 1:return n.sent(),[3,3];case 2:return"auth/network-request-failed"===(null==(t=n.sent())?void 0:t.code)&&e.schedule(!0),[2];case 3:return e.schedule(),[2]}}))}))()}}]),e}(),Xn=function(){"use strict";function e(t,n){a(this,e),this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}return u(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=Vn(this.lastLoginAt),this.creationTime=Vn(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e){return er.apply(this,arguments)}function er(){return(er=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n((function(e){var t,n,r,o,a,s,u,c,l,h,d;return i(this,(function(i){switch(i.label){case 0:return n=e.auth,[4,e.getIdToken()];case 1:return r=i.sent(),[4,Yn(e,Bn(n,{idToken:r}))];case 2:return vn(null==(o=i.sent())?void 0:o.users.length,n,"internal-error"),a=o.users[0],e._notifyReloadListener(a),s=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?rr(a.providerUserInfo):[],u=nr(e.providerData,s),c=e.isAnonymous,l=!(e.email&&a.passwordHash||(null==u?void 0:u.length)),h=!!c&&l,d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Xn(a.createdAt,a.lastLoginAt),isAnonymous:h},Object.assign(e,d),[2]}}))}))).apply(this,arguments)}function tr(){return(tr=n((function(e){var t;return i(this,(function(n){switch(n.label){case 0:return[4,Zn(t=je(e))];case 1:return n.sent(),[4,t.auth._persistUserIfCurrent(t)];case 2:return n.sent(),t.auth._notifyListenersIfCurrent(t),[2]}}))}))).apply(this,arguments)}function nr(e,t){return k(e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}))).concat(k(t))}function rr(e){return e.map((function(e){var t=e.providerId,n=r(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function ir(e,t){return or.apply(this,arguments)}function or(){return(or=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n((function(e,t){var r;return i(this,(function(o){switch(o.label){case 0:return[4,Dn(e,{},n((function(){var n,r,o,a,s,u;return i(this,(function(i){switch(i.label){case 0:return n=Oe({grant_type:"refresh_token",refresh_token:t}).slice(1),r=e.config,o=r.tokenApiHost,a=r.apiKey,s=Fn(e,o,"/v1/token","key=".concat(a)),[4,e._getAdditionalHeaders()];case 1:return(u=i.sent())["Content-Type"]="application/x-www-form-urlencoded",[2,Sn.fetch()(s,{method:"POST",headers:u,body:n})]}}))})))];case 1:return[2,{accessToken:(r=o.sent()).access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}]}}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ar=function(){"use strict";function e(){a(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return u(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){vn(e.idToken,"internal-error"),vn(void 0!==e.idToken,"internal-error"),vn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,vn(n=Gn(t),"internal-error"),vn(void 0!==n.exp,"internal-error"),vn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:return vn(!r.accessToken||r.refreshToken,e,"user-token-expired"),t||!r.accessToken||r.isExpired?r.refreshToken?[4,r.refresh(e,r.refreshToken)]:[3,2]:[2,r.accessToken];case 1:return n.sent(),[2,r.accessToken];case 2:return[2,null]}}))}))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var r=this;return n((function(){var n,o,a,s;return i(this,(function(i){switch(i.label){case 0:return[4,ir(e,t)];case 1:return n=i.sent(),o=n.accessToken,a=n.refreshToken,s=n.expiresIn,r.updateTokensAndExpiration(o,a,Number(s)),[2]}}))}))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return pn("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,a=new e;return r&&(vn("string"==typeof r,"internal-error",{appName:t}),a.refreshToken=r),i&&(vn("string"==typeof i,"internal-error",{appName:t}),a.accessToken=i),o&&(vn("number"==typeof o,"internal-error",{appName:t}),a.expirationTime=o),a}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e,t){vn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var ur=function(){"use strict";function e(t){a(this,e);var n=t.uid,i=t.auth,o=t.stsTokenManager,s=r(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $n(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?k(s.providerData):[],this.metadata=new Xn(s.createdAt||void 0,s.lastLoginAt||void 0)}return u(e,[{key:"getIdToken",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,Yn(t,t.stsTokenManager.getToken(t.auth,e))];case 1:return vn(n=r.sent(),t.auth,"internal-error"),t.accessToken===n?[3,3]:(t.accessToken=n,[4,t.auth._persistUserIfCurrent(t)]);case 2:r.sent(),t.auth._notifyListenersIfCurrent(t),r.label=3;case 3:return[2,n]}}))}))()}},{key:"getIdTokenResult",value:function(e){return function(e){return zn.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return tr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(vn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){vn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n((function(){var n;return i(this,(function(i){switch(i.label){case 0:return n=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),n=!0),t?[4,Zn(r)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,r.auth._persistUserIfCurrent(r)];case 3:return i.sent(),n&&r.auth._notifyListenersIfCurrent(r),[2]}}))}))()}},{key:"delete",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,e.getIdToken()];case 1:return t=n.sent(),[4,Yn(e,jn(e.auth,{idToken:t}))];case 2:return n.sent(),e.stsTokenManager.clearRefreshToken(),[2,e.auth.signOut()]}}))}))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,o,a,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,f=null!==(o=n.phoneNumber)&&void 0!==o?o:void 0,v=null!==(a=n.photoURL)&&void 0!==a?a:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,_=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,m=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;vn(m&&I,t,"internal-error");var C=ar.fromJSON(this.name,I);vn("string"==typeof m,t,"internal-error"),sr(h,t.name),sr(d,t.name),vn("boolean"==typeof k,t,"internal-error"),vn("boolean"==typeof b,t,"internal-error"),sr(f,t.name),sr(v,t.name),sr(p,t.name),sr(y,t.name),sr(_,t.name),sr(g,t.name);var T=new e({uid:m,auth:t,email:d,emailVerified:k,displayName:h,isAnonymous:b,photoURL:v,phoneNumber:f,tenantId:p,stsTokenManager:C,createdAt:_,lastLoginAt:g});return w&&Array.isArray(w)&&(T.providerData=w.map((function(e){return Object.assign({},e)}))),y&&(T._redirectEventId=y),T}},{key:"_fromIdTokenResponse",value:function(t,r){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n((function(){var n,a;return i(this,(function(i){switch(i.label){case 0:return(n=new ar).updateFromServerResponse(r),[4,Zn(a=new e({uid:r.localId,auth:t,stsTokenManager:n,isAnonymous:o}))];case 1:return i.sent(),[2,a]}}))}))()}}]),e}(),cr=function(){"use strict";function e(){a(this,e),this.type="NONE",this.storage={}}return u(e,[{key:"_isAvailable",value:function(){return n((function(){return i(this,(function(e){return[2,!0]}))}))()}},{key:"_set",value:function(e,t){var r=this;return n((function(){return i(this,(function(n){return r.storage[e]=t,[2]}))}))()}},{key:"_get",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){return[2,void 0===(n=t.storage[e])?null:n]}))}))()}},{key:"_remove",value:function(e){var t=this;return n((function(){return i(this,(function(n){return delete t.storage[e],[2]}))}))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr.type="NONE";var lr=cr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var dr=function(){"use strict";function e(t,n,r){a(this,e),this.persistence=t,this.auth=n,this.userKey=r;var i=this.auth,o=i.config,s=i.name;this.fullUserKey=hr(this.userKey,o.apiKey,s),this.fullPersistenceKey=hr("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return u(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,e.persistence._get(e.fullUserKey)];case 1:return[2,(t=n.sent())?ur._fromJSON(e.auth,t):null]}}))}))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){switch(r.label){case 0:return t.persistence===e?[2]:[4,t.getCurrentUser()];case 1:return n=r.sent(),[4,t.removeCurrentUser()];case 2:return r.sent(),t.persistence=e,n?[2,t.setCurrentUser(n)]:[2]}}))}))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return n((function(){var a,s,u,c,l,h,d,f,v,p,y,_,g,m;return i(this,(function(k){switch(k.label){case 0:return r.length?[4,Promise.all(r.map((b=n((function(e){return i(this,(function(t){switch(t.label){case 0:return[4,e._isAvailable()];case 1:return t.sent()?[2,e]:[2,void 0]}}))})),function(e){return b.apply(this,arguments)})))]:[2,new e(gn(lr),t,o)];case 1:a=k.sent().filter((function(e){return e})),s=a[0]||gn(lr),u=hr(o,t.config.apiKey,t.name),c=null,l=!0,h=!1,d=void 0,k.label=2;case 2:k.trys.push([2,9,10,11]),f=r[Symbol.iterator](),k.label=3;case 3:if(l=(v=f.next()).done)return[3,8];p=v.value,k.label=4;case 4:return k.trys.push([4,6,,7]),[4,p._get(u)];case 5:return(y=k.sent())?(_=ur._fromJSON(t,y),p!==s&&(c=_),s=p,[3,8]):[3,7];case 6:return k.sent(),[3,7];case 7:return l=!0,[3,3];case 8:return[3,11];case 9:return g=k.sent(),h=!0,d=g,[3,11];case 10:try{l||null==f.return||f.return()}finally{if(h)throw d}return[7];case 11:return m=a.filter((function(e){return e._shouldAllowMigration})),s._shouldAllowMigration&&m.length?(s=m[0],c?[4,s._set(u,c.toJSON())]:[3,13]):[2,new e(s,t,o)];case 12:k.sent(),k.label=13;case 13:return[4,Promise.all(r.map(function(){var e=n((function(e){return i(this,(function(t){switch(t.label){case 0:if(e===s)return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,e._remove(u)];case 2:return t.sent(),[3,4];case 3:return t.sent(),[3,4];case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}()))];case 14:return k.sent(),[2,new e(s,t,o)]}var b}))}))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_r(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(mr(t))return"Blackberry";if(kr(t))return"Webos";if(pr(t))return"Safari";if((t.includes("chrome/")||yr(t))&&!t.includes("edge/"))return"Chrome";if(gr(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function vr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de();return/firefox\//i.test(e)}function pr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de();return/crios\//i.test(e)}function _r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de();return/iemobile/i.test(e)}function gr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de();return/android/i.test(e)}function mr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de();return/blackberry/i.test(e)}function kr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de();return/webos/i.test(e)}function br(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function wr(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de();return br(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ir(){return((e=de()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Cr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de();return br(e)||gr(e)||kr(e)||mr(e)||/windows phone/i.test(e)||_r(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tr(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=fr(de());break;case"Worker":t="".concat(fr(de()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(qt,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Er=function(){"use strict";function e(t){a(this,e),this.auth=t,this.queue=[]}return u(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return n((function(){var n,r,o,a,s,u,c,l,h,d,f,v,p,y,_;return i(this,(function(i){switch(i.label){case 0:if(t.auth.currentUser===e)return[2];n=[],i.label=1;case 1:i.trys.push([1,10,,11]),r=!0,o=!1,a=void 0,i.label=2;case 2:i.trys.push([2,7,8,9]),s=t.queue[Symbol.iterator](),i.label=3;case 3:return(r=(u=s.next()).done)?[3,6]:[4,(c=u.value)(e)];case 4:i.sent(),c.onAbort&&n.push(c.onAbort),i.label=5;case 5:return r=!0,[3,3];case 6:return[3,9];case 7:return l=i.sent(),o=!0,a=l,[3,9];case 8:try{r||null==s.return||s.return()}finally{if(o)throw a}return[7];case 9:return[3,11];case 10:h=i.sent(),n.reverse(),d=!0,f=!1,v=void 0;try{for(p=n[Symbol.iterator]();!(d=(y=p.next()).done);d=!0){_=y.value;try{_()}catch(e){}}}catch(e){f=!0,v=e}finally{try{d||null==p.return||p.return()}finally{if(f)throw v}}throw t.auth._errorFactory.create("login-blocked",{originalMessage:null==h?void 0:h.message});case 11:return[2]}}))}))()}}]),e}(),Sr=function(){"use strict";function e(t,n,r){a(this,e),this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nr(this),this.idTokenSubscription=new Nr(this),this.beforeStateQueue=new Er(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=an,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}return u(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=gn(t));var r=this;return this._initializationPromise=this.queue(n((function(){var n,o;return i(this,(function(i){switch(i.label){case 0:return r._deleted?[2]:[4,dr.create(r,e)];case 1:if(r.persistenceManager=i.sent(),r._deleted)return[2];if(!(null===(n=r._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively))return[3,5];i.label=2;case 2:return i.trys.push([2,4,,5]),[4,r._popupRedirectResolver._initialize(r)];case 3:return i.sent(),[3,5];case 4:return i.sent(),[3,5];case 5:return[4,r.initializeCurrentUser(t)];case 6:return i.sent(),r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,r._deleted?[2]:(r._isInitialized=!0,[2])}}))}))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return e._deleted?[2]:[4,e.assertedPersistence.getCurrentUser()];case 1:return t=n.sent(),e.currentUser||t?e.currentUser&&t&&e.currentUser.uid===t.uid?(e._currentUser._assign(t),[4,e.currentUser.getIdToken()]):[3,3]:[2];case 2:case 4:return n.sent(),[2];case 3:return[4,e._updateCurrentUser(t,!0)]}}))}))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return n((function(){var n,r,o,a,s,u,c,l;return i(this,(function(i){switch(i.label){case 0:return[4,t.assertedPersistence.getCurrentUser()];case 1:return r=i.sent(),o=r,a=!1,e&&t.config.authDomain?[4,t.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return i.sent(),s=null===(n=t.redirectUser)||void 0===n?void 0:n._redirectEventId,u=null==o?void 0:o._redirectEventId,[4,t.tryRedirectSignIn(e)];case 3:c=i.sent(),s&&s!==u||!(null==c?void 0:c.user)||(o=c.user,a=!0),i.label=4;case 4:if(!o)return[2,t.directlySetCurrentUser(null)];if(o._redirectEventId)return[3,9];if(!a)return[3,8];i.label=5;case 5:return i.trys.push([5,7,,8]),[4,t.beforeStateQueue.runMiddleware(o)];case 6:return i.sent(),[3,8];case 7:return l=i.sent(),o=r,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(l)})),[3,8];case 8:return o?[2,t.reloadAndSetCurrentUserOrClear(o)]:[2,t.directlySetCurrentUser(null)];case 9:return vn(t._popupRedirectResolver,t,"argument-error"),[4,t.getOrInitRedirectPersistenceManager()];case 10:return i.sent(),t.redirectUser&&t.redirectUser._redirectEventId===o._redirectEventId?[2,t.directlySetCurrentUser(o)]:[2,t.reloadAndSetCurrentUserOrClear(o)]}}))}))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){switch(r.label){case 0:n=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,t._popupRedirectResolver._completeRedirectFn(t,e,!0)];case 2:return n=r.sent(),[3,5];case 3:return r.sent(),[4,t._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,n]}}))}))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,Zn(e)];case 1:return r.sent(),[3,3];case 2:return"auth/network-request-failed"!==(null==(n=r.sent())?void 0:n.code)?[2,t.directlySetCurrentUser(null)]:[3,3];case 3:return[2,t.directlySetCurrentUser(e)]}}))}))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return n((function(){return i(this,(function(t){return e._deleted=!0,[2]}))}))()}},{key:"updateCurrentUser",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){return(n=e?je(e):null)&&vn(n.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),[2,t._updateCurrentUser(n&&n._clone(t))]}))}))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n((function(){return i(this,(function(o){switch(o.label){case 0:return r._deleted?[2]:(e&&vn(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),t?[3,2]:[4,r.beforeStateQueue.runMiddleware(e)]);case 1:o.sent(),o.label=2;case 2:return[2,r.queue(n((function(){return i(this,(function(t){switch(t.label){case 0:return[4,r.directlySetCurrentUser(e)];case 1:return t.sent(),r.notifyAuthListeners(),[2]}}))})))]}}))}))()}},{key:"signOut",value:function(){var e=this;return n((function(){return i(this,(function(t){switch(t.label){case 0:return[4,e.beforeStateQueue.runMiddleware(null)];case 1:return t.sent(),e.redirectPersistenceManager||e._popupRedirectResolver?[4,e._setRedirectUser(null)]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2,e._updateCurrentUser(null,!0)]}}))}))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue(n((function(){return i(this,(function(n){switch(n.label){case 0:return[4,t.assertedPersistence.setPersistence(gn(e))];case 1:return n.sent(),[2]}}))})))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new ge("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var r=this;return n((function(){var n;return i(this,(function(i){switch(i.label){case 0:return[4,r.getOrInitRedirectPersistenceManager(t)];case 1:return n=i.sent(),[2,null===e?n.removeCurrentUser():n.setCurrentUser(e)]}}))}))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){switch(r.label){case 0:return t.redirectPersistenceManager?[3,3]:(vn(n=e&&gn(e)||t._popupRedirectResolver,t,"argument-error"),[4,dr.create(t,[gn(n._redirectPersistence)],"redirectUser")]);case 1:return t.redirectPersistenceManager=r.sent(),[4,t.redirectPersistenceManager.getCurrentUser()];case 2:t.redirectUser=r.sent(),r.label=3;case 3:return[2,t.redirectPersistenceManager]}}))}))()}},{key:"_redirectUserForId",value:function(e){var t=this;return n((function(){var r,o;return i(this,(function(a){switch(a.label){case 0:return t._isInitialized?[4,t.queue(n((function(){return i(this,(function(e){return[2]}))})))]:[3,2];case 1:a.sent(),a.label=2;case 2:return(null===(r=t._currentUser)||void 0===r?void 0:r._redirectEventId)===e?[2,t._currentUser]:(null===(o=t.redirectUser)||void 0===o?void 0:o._redirectEventId)===e?[2,t.redirectUser]:[2,null]}}))}))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return n((function(){return i(this,(function(r){return e===t.currentUser?[2,t.queue(n((function(){return i(this,(function(n){return[2,t.directlySetCurrentUser(e)]}))})))]:[2]}))}))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return vn(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:return t.currentUser&&t.currentUser!==e&&t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh(),t.currentUser=e,e?[4,t.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,t.assertedPersistence.removeCurrentUser()];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return vn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tr(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return n((function(){var t,n,r;return i(this,(function(i){switch(i.label){case 0:return n=We({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(n["X-Firebase-gmpid"]=e.app.options.appId),[4,null===(t=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader()];case 1:return(r=i.sent())&&(n["X-Firebase-Client"]=r),[2,n]}}))}))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(e){return je(e)}var Nr=function(){"use strict";function e(t){var n,r,i=this;a(this,e),this.auth=t,this.observer=null,this.addObserver=(r=new Le((function(e){return i.observer=e}),n)).subscribe.bind(r)}return u(e,[{key:"next",get:function(){return vn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function Rr(e,t,n){var r=Pr(e);vn(r._canInitEmulator,r,"emulator-config-failed"),vn(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");var i=!!(null==n?void 0:n.disableWarnings),o=Or(t),a=function(e){var t=Or(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};var r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){var o=i[1];return{host:o,port:Ar(r.substr(o.length+1))}}var a=_(r.split(":"),2);return{host:a[0],port:Ar(a[1])}}(t),s=a.host,u=a.port,c=null===u?"":":".concat(u);r.config.emulator={url:"".concat(o,"//").concat(s).concat(c,"/")},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Or(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ar(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Dr=function(){"use strict";function e(t,n){a(this,e),this.providerId=t,this.signInMethod=n}return u(e,[{key:"toJSON",value:function(){return pn("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return pn("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return pn("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return pn("not implemented")}}]),e}();function xr(e,t){return Lr.apply(this,arguments)}function Lr(){return(Lr=n((function(e,t){return i(this,(function(n){return[2,On(e,"POST","/v1/accounts:update",t)]}))}))).apply(this,arguments)}function Mr(e,t){return Fr.apply(this,arguments)}function Fr(){return(Fr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n((function(e,t){return i(this,(function(n){return[2,Ln(e,"POST","/v1/accounts:signInWithPassword",Rn(e,t))]}))}))).apply(this,arguments)}function Ur(e,t){return qr.apply(this,arguments)}function qr(){return(qr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n((function(e,t){return i(this,(function(n){return[2,Ln(e,"POST","/v1/accounts:signInWithEmailLink",Rn(e,t))]}))}))).apply(this,arguments)}function jr(e,t){return Wr.apply(this,arguments)}function Wr(){return(Wr=n((function(e,t){return i(this,(function(n){return[2,Ln(e,"POST","/v1/accounts:signInWithEmailLink",Rn(e,t))]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Br=function(e){"use strict";h(r,e);var t=R(r);function r(e,n,i){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a(this,r),(o=t.call(this,"password",i))._email=e,o._password=n,o._tenantId=s,o}return u(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return n((function(){return i(this,(function(n){switch(t.signInMethod){case"password":return[2,Mr(e,{returnSecureToken:!0,email:t._email,password:t._password})];case"emailLink":return[2,Ur(e,{email:t._email,oobCode:t._password})];default:cn(e,"internal-error")}return[2]}))}))()}},{key:"_linkToIdToken",value:function(e,t){var r=this;return n((function(){return i(this,(function(n){switch(r.signInMethod){case"password":return[2,xr(e,{idToken:t,returnSecureToken:!0,email:r._email,password:r._password})];case"emailLink":return[2,jr(e,{idToken:t,email:r._email,oobCode:r._password})];default:cn(e,"internal-error")}return[2]}))}))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Dr);function Hr(e,t){return Vr.apply(this,arguments)}function Vr(){return(Vr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n((function(e,t){return i(this,(function(n){return[2,Ln(e,"POST","/v1/accounts:signInWithIdp",Rn(e,t))]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zr=function(e){"use strict";h(n,e);var t=R(n);function n(){var e;return a(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return u(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Hr(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Hr(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Hr(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Oe(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cn("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,i=t.providerId,o=t.signInMethod,a=r(t,["providerId","signInMethod"]);if(!i||!o)return null;var s=new n(i,o);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}}]),n}(Dr);function Kr(e,t){return Gr.apply(this,arguments)}function Gr(){return(Gr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n((function(e,t){return i(this,(function(n){return[2,On(e,"POST","/v1/accounts:sendVerificationCode",Rn(e,t))]}))}))).apply(this,arguments)}function Yr(){return(Yr=n((function(e,t){return i(this,(function(n){return[2,Ln(e,"POST","/v1/accounts:signInWithPhoneNumber",Rn(e,t))]}))}))).apply(this,arguments)}function Jr(){return(Jr=n((function(e,t){var n;return i(this,(function(r){switch(r.label){case 0:return[4,Ln(e,"POST","/v1/accounts:signInWithPhoneNumber",Rn(e,t))];case 1:if((n=r.sent()).temporaryProof)throw qn(e,"account-exists-with-different-credential",n);return[2,n]}}))}))).apply(this,arguments)}var Qr=We({},"USER_NOT_FOUND","user-not-found");function $r(){return($r=n((function(e,t){var n;return i(this,(function(r){return n=Object.assign(Object.assign({},t),{operation:"REAUTH"}),[2,Ln(e,"POST","/v1/accounts:signInWithPhoneNumber",Rn(e,n),Qr)]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xr=function(e){"use strict";h(n,e);var t=R(n);function n(e){var r;return a(this,n),(r=t.call(this,"phone","phone")).params=e,r}return u(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Yr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Jr.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return $r.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return r||t||i||o?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o}):null}}]),n}(Dr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zr=function(){"use strict";function e(t){var n,r,i,o,s,u;a(this,e);var c=Ae(De(t)),l=null!==(n=c.apiKey)&&void 0!==n?n:null,h=null!==(r=c.oobCode)&&void 0!==r?r:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);vn(l&&h&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=h,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return u(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=Ae(De(e)).link,n=t?Ae(De(t)).deep_link_id:null,r=Ae(De(e)).deep_link_id;return(r?Ae(De(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ei=function(){"use strict";function e(){a(this,e),this.providerId=e.PROVIDER_ID}return u(e,null,[{key:"credential",value:function(e,t){return Br._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Zr.parseLink(t);return vn(n,"argument-error"),Br._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();ei.PROVIDER_ID="password",ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ti=function(){"use strict";function e(t){a(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return u(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),ni=function(e){"use strict";h(n,e);var t=R(n);function n(){var e;return a(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return u(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return k(this.scopes)}}]),n}(ti),ri=function(e){"use strict";h(n,e);var t=R(n);function n(){return a(this,n),t.call(this,"facebook.com")}return u(n,null,[{key:"credential",value:function(e){return zr._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(ni);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ri.FACEBOOK_SIGN_IN_METHOD="facebook.com",ri.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ii=function(e){"use strict";h(n,e);var t=R(n);function n(){var e;return a(this,n),(e=t.call(this,"google.com")).addScope("profile"),e}return u(n,null,[{key:"credential",value:function(e,t){return zr._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(ni);ii.GOOGLE_SIGN_IN_METHOD="google.com",ii.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oi=function(e){"use strict";h(n,e);var t=R(n);function n(){return a(this,n),t.call(this,"github.com")}return u(n,null,[{key:"credential",value:function(e){return zr._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(ni);oi.GITHUB_SIGN_IN_METHOD="github.com",oi.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ai=function(e){"use strict";h(n,e);var t=R(n);function n(){return a(this,n),t.call(this,"twitter.com")}return u(n,null,[{key:"credential",value:function(e,t){return zr._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(ni);function si(e,t){return ui.apply(this,arguments)}function ui(){return(ui=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n((function(e,t){return i(this,(function(n){return[2,Ln(e,"POST","/v1/accounts:signUp",Rn(e,t))]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ai.TWITTER_SIGN_IN_METHOD="twitter.com",ai.PROVIDER_ID="twitter.com";var ci=function(){"use strict";function e(t){a(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return u(e,null,[{key:"_fromIdTokenResponse",value:function(t,r,o){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n((function(){var n,s;return i(this,(function(i){switch(i.label){case 0:return[4,ur._fromIdTokenResponse(t,o,a)];case 1:return n=i.sent(),s=li(o),[2,new e({user:n,providerId:s,_tokenResponse:o,operationType:r})]}}))}))()}},{key:"_forOperation",value:function(t,r,o){return n((function(){var n;return i(this,(function(i){switch(i.label){case 0:return[4,t._updateTokensIfNecessary(o,!0)];case 1:return i.sent(),n=li(o),[2,new e({user:t,providerId:n,_tokenResponse:o,operationType:r})]}}))}))()}}]),e}();function li(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hi=function(e){"use strict";h(n,e);var t=R(n);function n(e,r,i,s){var u,c;return a(this,n),(u=t.call(this,r.code,r.message)).operationType=i,u.user=s,Object.setPrototypeOf(o(u),n.prototype),u.customData={appName:e.name,tenantId:null!==(c=e.tenantId)&&void 0!==c?c:void 0,_serverResponse:r.customData._serverResponse,operationType:i},u}return u(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(_e);function di(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw hi._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e,t){return vi.apply(this,arguments)}function vi(){return vi=n((function(e,t){var n,r,o,a,s,u=arguments;return i(this,(function(i){switch(i.label){case 0:return n=u.length>2&&void 0!==u[2]&&u[2],o=[e],a=t._linkToIdToken,s=[e.auth],[4,e.getIdToken()];case 1:return[4,Yn.apply(void 0,o.concat([a.apply(t,s.concat([i.sent()])),n]))];case 2:return r=i.sent(),[2,ci._forOperation(e,"link",r)]}}))})),vi.apply(this,arguments)}function pi(e,t){return yi.apply(this,arguments)}function yi(){return yi=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n((function(e,t){var n,r,o,a,s,u,c,l=arguments;return i(this,(function(i){switch(i.label){case 0:n=l.length>2&&void 0!==l[2]&&l[2],r=e.auth,o="reauthenticate",i.label=1;case 1:return i.trys.push([1,3,,4]),[4,Yn(e,di(r,o,t,e),n)];case 2:return vn((a=i.sent()).idToken,r,"internal-error"),vn(s=Gn(a.idToken),r,"internal-error"),u=s.sub,vn(e.uid===u,r,"user-mismatch"),[2,ci._forOperation(e,o,a)];case 3:throw"auth/user-not-found"===(null==(c=i.sent())?void 0:c.code)&&cn(r,"user-mismatch"),c;case 4:return[2]}}))})),yi.apply(this,arguments)}function _i(e,t){return gi.apply(this,arguments)}function gi(){return gi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n((function(e,t){var n,r,o,a,s=arguments;return i(this,(function(i){switch(i.label){case 0:return n=s.length>2&&void 0!==s[2]&&s[2],[4,di(e,r="signIn",t)];case 1:return o=i.sent(),[4,ci._fromIdTokenResponse(e,r,o)];case 2:return a=i.sent(),n?[3,4]:[4,e._updateCurrentUser(a.user)];case 3:i.sent(),i.label=4;case 4:return[2,a]}}))})),gi.apply(this,arguments)}function mi(e,t){return ki.apply(this,arguments)}function ki(){return(ki=n((function(e,t){return i(this,(function(n){return[2,_i(Pr(e),t)]}))}))).apply(this,arguments)}function bi(e,t,n){return wi.apply(this,arguments)}function wi(){return(wi=n((function(e,t,n){var r,o,a;return i(this,(function(i){switch(i.label){case 0:return[4,si(r=Pr(e),{returnSecureToken:!0,email:t,password:n})];case 1:return o=i.sent(),[4,ci._fromIdTokenResponse(r,"signIn",o)];case 2:return a=i.sent(),[4,r._updateCurrentUser(a.user)];case 3:return i.sent(),[2,a]}}))}))).apply(this,arguments)}function Ii(e,t,n){return mi(je(e),ei.credential(t,n))}function Ci(e,t,n,r){return je(e).onIdTokenChanged(t,n,r)}function Ti(e,t,n){return je(e).beforeAuthStateChanged(t,n)}function Ei(e){return Si.apply(this,arguments)}function Si(){return(Si=n((function(e){return i(this,(function(t){return[2,je(e).delete()]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pi(e,t){return On(e,"POST","/v2/accounts/mfaEnrollment:start",Rn(e,t))}new WeakMap;var Ni="__sak",Ri=function(){"use strict";function e(t,n){a(this,e),this.storageRetriever=t,this.type=n}return u(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Ni,"1"),this.storage.removeItem(Ni),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oi=function(e){"use strict";h(r,e);var t=R(r);function r(){var e,n;return a(this,r),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(pr(n=de())||br(n))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Cr(),e._shouldAllowMigration=!0,e}return u(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var o=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},a=this.storage.getItem(r);Ir()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else this.forAllChangedKeys((function(e,t,r){n.notifyListeners(e,r)}))}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){e.forAllChangedKeys((function(t,n,r){e.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var o=this,a=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:return[4,Ve(T(r.prototype),"_set",o).call(a,e,t)];case 1:return n.sent(),a.localCache[e]=JSON.stringify(t),[2]}}))}))()}},{key:"_get",value:function(e){var t=this,o=this;return n((function(){var n;return i(this,(function(i){switch(i.label){case 0:return[4,Ve(T(r.prototype),"_get",t).call(o,e)];case 1:return n=i.sent(),o.localCache[e]=JSON.stringify(n),[2,n]}}))}))()}},{key:"_remove",value:function(e){var t=this,o=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:return[4,Ve(T(r.prototype),"_remove",t).call(o,e)];case 1:return n.sent(),delete o.localCache[e],[2]}}))}))()}}]),r}(Ri);Oi.type="LOCAL";var Ai=Oi,Di=function(e){"use strict";h(n,e);var t=R(n);function n(){return a(this,n),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return u(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(Ri);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Di.type="SESSION";var xi=Di;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e){return Promise.all(e.map((t=n((function(e){return i(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,e];case 1:return[2,{fulfilled:!0,value:t.sent()}];case 2:return[2,{fulfilled:!1,reason:t.sent()}];case 3:return[2]}}))})),function(e){return t.apply(this,arguments)})));var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mi=function(){"use strict";function e(t){a(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return u(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return n((function(){var r,o,a,s,u,c,l,h;return i(this,(function(d){switch(d.label){case 0:return o=(r=e).data,a=o.eventId,s=o.eventType,u=o.data,(null==(c=t.handlersMap[s])?void 0:c.size)?(r.ports[0].postMessage({status:"ack",eventId:a,eventType:s}),l=Array.from(c).map((f=n((function(e){return i(this,(function(t){return[2,e(r.origin,u)]}))})),function(e){return f.apply(this,arguments)})),[4,Li(l)]):[2];case 1:return h=d.sent(),r.ports[0].postMessage({status:"done",eventId:a,eventType:s,response:h}),[2]}var f}))}))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mi.receivers=[];var Ui=function(){"use strict";function e(t){a(this,e),this.target=t,this.handlers=new Set}return u(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,o=this;return n((function(){var n,a,s;return i(this,(function(i){if(!(n="undefined"!=typeof MessageChannel?new MessageChannel:null))throw new Error("connection_unavailable");return[2,new Promise((function(i,u){var c=Fi("",20);n.port1.start();var l=setTimeout((function(){u(new Error("unsupported_event"))}),r);s={messageChannel:n,onMessage:function(e){var t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),a=setTimeout((function(){u(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),i(t.data.response);break;default:clearTimeout(l),clearTimeout(a),u(new Error("invalid_response"))}}},o.handlers.add(s),n.port1.addEventListener("message",s.onMessage),o.target.postMessage({eventType:e,eventId:c,data:t},[n.port2])})).finally((function(){s&&o.removeMessageHandler(s)}))]}))}))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ji(){return void 0!==qi().WorkerGlobalScope&&"function"==typeof qi().importScripts}function Wi(){return Bi.apply(this,arguments)}function Bi(){return(Bi=n((function(){return i(this,(function(e){switch(e.label){case 0:if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return[2,null];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,navigator.serviceWorker.ready];case 2:return[2,e.sent().active];case 3:return e.sent(),[2,null];case 4:return[2]}}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hi="firebaseLocalStorageDb",Vi="firebaseLocalStorage",zi="fbase_key",Ki=function(){"use strict";function e(t){a(this,e),this.request=t}return u(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.request.addEventListener("success",(function(){t(e.request.result)})),e.request.addEventListener("error",(function(){n(e.request.error)}))}))}}]),e}();function Gi(e,t){return e.transaction([Vi],t?"readwrite":"readonly").objectStore(Vi)}function Yi(){var e=indexedDB.deleteDatabase(Hi);return new Ki(e).toPromise()}function Ji(){var e=indexedDB.open(Hi,1);return new Promise((function(t,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Vi,{keyPath:zi})}catch(e){r(e)}})),e.addEventListener("success",n((function(){var n;return i(this,(function(r){switch(r.label){case 0:return(n=e.result).objectStoreNames.contains(Vi)?[3,3]:(n.close(),[4,Yi()]);case 1:return r.sent(),[4,Ji()];case 2:return t.apply(void 0,[r.sent()]),[3,4];case 3:t(n),r.label=4;case 4:return[2]}}))})))}))}function Qi(e,t,n){return $i.apply(this,arguments)}function $i(){return($i=n((function(e,t,n){var r,o;return i(this,(function(i){return o=Gi(e,!0).put((We(r={},zi,t),We(r,"value",n),r)),[2,new Ki(o).toPromise()]}))}))).apply(this,arguments)}function Xi(){return(Xi=n((function(e,t){var n,r;return i(this,(function(i){switch(i.label){case 0:return n=Gi(e,!1).get(t),[4,new Ki(n).toPromise()];case 1:return[2,void 0===(r=i.sent())?null:r.value]}}))}))).apply(this,arguments)}function Zi(e,t){var n=Gi(e,!0).delete(t);return new Ki(n).toPromise()}var eo=function(){"use strict";function e(){a(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return u(e,[{key:"_openDb",value:function(){var e=this;return n((function(){return i(this,(function(t){switch(t.label){case 0:return e.db?[2,e.db]:[4,Ji()];case 1:return e.db=t.sent(),[2,e.db]}}))}))()}},{key:"_withRetries",value:function(e){var t=this;return n((function(){var n,r,o;return i(this,(function(i){switch(i.label){case 0:n=0,i.label=1;case 1:0,i.label=2;case 2:return i.trys.push([2,5,,6]),[4,t._openDb()];case 3:return r=i.sent(),[4,e(r)];case 4:return[2,i.sent()];case 5:if(o=i.sent(),n++>3)throw o;return t.db&&(t.db.close(),t.db=void 0),[3,6];case 6:return[3,1];case 7:return[2]}}))}))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return n((function(){return i(this,(function(t){return[2,ji()?e.initializeReceiver():e.initializeSender()]}))}))()}},{key:"initializeReceiver",value:function(){var e=this;return n((function(){return i(this,(function(t){var r;return e.receiver=Mi._getInstance(ji()?self:null),e.receiver._subscribe("keyChanged",(r=n((function(t,n){return i(this,(function(t){switch(t.label){case 0:return[4,e._poll()];case 1:return[2,{keyProcessed:t.sent().includes(n.key)}]}}))})),function(e,t){return r.apply(this,arguments)})),e.receiver._subscribe("ping",function(){var e=n((function(e,t){return i(this,(function(e){return[2,["keyChanged"]]}))}));return function(t,n){return e.apply(this,arguments)}}()),[2]}))}))()}},{key:"initializeSender",value:function(){var e=this;return n((function(){var t,n,r;return i(this,(function(i){switch(i.label){case 0:return[4,Wi()];case 1:return e.activeServiceWorker=i.sent(),e.activeServiceWorker?(e.sender=new Ui(e.activeServiceWorker),[4,e.sender._send("ping",{},800)]):[2];case 2:return(r=i.sent())?((null===(t=r[0])||void 0===t?void 0:t.fulfilled)&&(null===(n=r[0])||void 0===n?void 0:n.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0),[2]):[2]}}))}))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:if(!t.sender||!t.activeServiceWorker||function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()!==t.activeServiceWorker)return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50)];case 2:return n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:return[2]}}))}))()}},{key:"_isAvailable",value:function(){return n((function(){var e;return i(this,(function(t){switch(t.label){case 0:return t.trys.push([0,4,,5]),indexedDB?[4,Ji()]:[2,!1];case 1:return[4,Qi(e=t.sent(),Ni,"1")];case 2:return t.sent(),[4,Zi(e,Ni)];case 3:return t.sent(),[2,!0];case 4:return t.sent(),[3,5];case 5:return[2,!1]}}))}))()}},{key:"_withPendingWrite",value:function(e){var t=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:t.pendingWrites++,n.label=1;case 1:return n.trys.push([1,,3,4]),[4,e()];case 2:return n.sent(),[3,4];case 3:return t.pendingWrites--,[7];case 4:return[2]}}))}))()}},{key:"_set",value:function(e,t){var r=this;return n((function(){return i(this,(function(o){return[2,r._withPendingWrite(n((function(){return i(this,(function(n){switch(n.label){case 0:return[4,r._withRetries((function(n){return Qi(n,e,t)}))];case 1:return n.sent(),r.localCache[e]=t,[2,r.notifyServiceWorker(e)]}}))})))]}))}))()}},{key:"_get",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,t._withRetries((function(t){return function(e,t){return Xi.apply(this,arguments)}(t,e)}))];case 1:return n=r.sent(),t.localCache[e]=n,[2,n]}}))}))()}},{key:"_remove",value:function(e){var t=this;return n((function(){return i(this,(function(r){return[2,t._withPendingWrite(n((function(){return i(this,(function(n){switch(n.label){case 0:return[4,t._withRetries((function(t){return Zi(t,e)}))];case 1:return n.sent(),delete t.localCache[e],[2,t.notifyServiceWorker(e)]}}))})))]}))}))()}},{key:"_poll",value:function(){var e=this;return n((function(){var t,n,r,o,a,s,u,c,l,h,d,f,v,p,y,_,g;return i(this,(function(i){switch(i.label){case 0:return[4,e._withRetries((function(e){var t=Gi(e,!1).getAll();return new Ki(t).toPromise()}))];case 1:if(!(t=i.sent()))return[2,[]];if(0!==e.pendingWrites)return[2,[]];n=[],r=new Set,o=!0,a=!1,s=void 0;try{for(u=t[Symbol.iterator]();!(o=(c=u.next()).done);o=!0)l=c.value,h=l.fbase_key,d=l.value,r.add(h),JSON.stringify(e.localCache[h])!==JSON.stringify(d)&&(e.notifyListeners(h,d),n.push(h))}catch(e){a=!0,s=e}finally{try{o||null==u.return||u.return()}finally{if(a)throw s}}f=!0,v=!1,p=void 0;try{for(y=Object.keys(e.localCache)[Symbol.iterator]();!(f=(_=y.next()).done);f=!0)g=_.value,e.localCache[g]&&!r.has(g)&&(e.notifyListeners(g,null),n.push(g))}catch(e){v=!0,p=e}finally{try{f||null==y.return||y.return()}finally{if(v)throw p}}return[2,n]}}))}))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(n((function(){return i(this,(function(t){return[2,e._poll()]}))})),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();eo.type="LOCAL";var to=eo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e,t){return On(e,"POST","/v2/accounts/mfaSignIn:start",Rn(e,t))}function ro(e){return new Promise((function(t,n){var r,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=ln("internal-error");t.customData=e,n(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(o)}))}function io(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
io("rcb"),new Cn(3e4,6e4);var oo="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(e,t,n){return so.apply(this,arguments)}function so(){return(so=n((function(e,t,n){var r,o,a,s,u;return i(this,(function(i){switch(i.label){case 0:return[4,n.verify()];case 1:o=i.sent(),i.label=2;case 2:return i.trys.push([2,,10,11]),vn("string"==typeof o,e,"argument-error"),vn(n.type===oo,e,"argument-error"),"session"in(a="string"==typeof t?{phoneNumber:t}:t)?(s=a.session,"phoneNumber"in a?(vn("enroll"===s.type,e,"internal-error"),[4,Pi(e,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}})]):[3,4]):[3,7];case 3:return[2,i.sent().phoneSessionInfo.sessionInfo];case 4:return vn("signin"===s.type,e,"internal-error"),vn(u=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid,e,"missing-multi-factor-info"),[4,no(e,{mfaPendingCredential:s.credential,mfaEnrollmentId:u,phoneSignInInfo:{recaptchaToken:o}})];case 5:return[2,i.sent().phoneResponseInfo.sessionInfo];case 6:return[3,9];case 7:return[4,Kr(e,{phoneNumber:a.phoneNumber,recaptchaToken:o})];case 8:return[2,i.sent().sessionInfo];case 9:return[3,11];case 10:return n._reset(),[7];case 11:return[2]}}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var uo=function(){"use strict";function e(t){a(this,e),this.providerId=e.PROVIDER_ID,this.auth=Pr(t)}return u(e,[{key:"verifyPhoneNumber",value:function(e,t){return ao(this.auth,e,je(t))}}],[{key:"credential",value:function(e,t){return Xr._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Xr._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function co(e,t){return t?gn(t):(vn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uo.PROVIDER_ID="phone",uo.PHONE_SIGN_IN_METHOD="phone";var lo=function(e){"use strict";h(n,e);var t=R(n);function n(e){var r;return a(this,n),(r=t.call(this,"custom","custom")).params=e,r}return u(n,[{key:"_getIdTokenResponse",value:function(e){return Hr(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Hr(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Hr(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(Dr);function ho(e){return _i(e.auth,new lo(e),e.bypassAuthState)}function fo(e){var t=e.auth,n=e.user;return vn(n,t,"internal-error"),pi(n,new lo(e),e.bypassAuthState)}function vo(e){return po.apply(this,arguments)}function po(){return(po=n((function(e){var t,n;return i(this,(function(r){return t=e.auth,vn(n=e.user,t,"internal-error"),[2,fi(n,new lo(e),e.bypassAuthState)]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yo=function(){"use strict";function e(t,n,r,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];a(this,e),this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return u(e,[{key:"execute",value:function(){var e,t=this;return new Promise((e=n((function(e,n){var r;return i(this,(function(i){switch(i.label){case 0:t.pendingPromise={resolve:e,reject:n},i.label=1;case 1:return i.trys.push([1,4,,5]),[4,t.resolver._initialize(t.auth)];case 2:return t.eventManager=i.sent(),[4,t.onExecution()];case 3:return i.sent(),t.eventManager.registerConsumer(t),[3,5];case 4:return r=i.sent(),t.reject(r),[3,5];case 5:return[2]}}))})),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var t=this;return n((function(){var n,r,o,a,s,u,c,l,h;return i(this,(function(i){switch(i.label){case 0:if(n=e.urlResponse,r=e.sessionId,o=e.postBody,a=e.tenantId,s=e.error,u=e.type,s)return t.reject(s),[2];c={auth:t.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:t.user,bypassAuthState:t.bypassAuthState},i.label=1;case 1:return i.trys.push([1,3,,4]),l=t.resolve,[4,t.getIdpTask(u)(c)];case 2:return l.apply(t,[i.sent()]),[3,4];case 3:return h=i.sent(),t.reject(h),[3,4];case 4:return[2]}}))}))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ho;case"linkViaPopup":case"linkViaRedirect":return vo;case"reauthViaPopup":case"reauthViaRedirect":return fo;default:cn(this.auth,"internal-error")}}},{key:"resolve",value:function(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),_o=new Cn(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e,t,n){return mo.apply(this,arguments)}function mo(){return(mo=n((function(e,t,n){var r,o;return i(this,(function(i){return r=Pr(e),dn(e,t,ti),o=co(r,n),[2,new ko(r,"signInViaPopup",t,o).executeNotNull()]}))}))).apply(this,arguments)}var ko=function(e){"use strict";h(r,e);var t=R(r);function r(e,n,i,s,u){var c;return a(this,r),(c=t.call(this,e,n,s,u)).provider=i,c.authWindow=null,c.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=o(c),c}return u(r,[{key:"executeNotNull",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,e.execute()];case 1:return vn(t=n.sent(),e.auth,"internal-error"),[2,t]}}))}))()}},{key:"onExecution",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return yn(1===e.filter.length,"Popup operations only handle one event"),t=Fi(),[4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],t)];case 1:return e.authWindow=n.sent(),e.authWindow.associatedEvent=t,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(ln(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation(),[2]}}))}))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(ln(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed)?e.pollId=window.setTimeout((function(){e.pollId=null,e.reject(ln(e.auth,"popup-closed-by-user"))}),2e3):e.pollId=window.setTimeout(t,_o.get())};t()}}]),r}(yo);ko.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bo=new Map,wo=function(e){"use strict";h(r,e);var t=R(r);function r(e,n){var i,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a(this,r),(i=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,o)).eventId=null,i}return u(r,[{key:"execute",value:function(){var e=this,t=this;return n((function(){var n,o,a,s;return i(this,(function(i){switch(i.label){case 0:if(n=bo.get(t.auth._key()))return[3,8];i.label=1;case 1:return i.trys.push([1,6,,7]),[4,Io(t.resolver,t.auth)];case 2:return i.sent()?[4,Ve(T(r.prototype),"execute",e).call(t)]:[3,4];case 3:return a=i.sent(),[3,5];case 4:a=null,i.label=5;case 5:return o=a,n=function(){return Promise.resolve(o)},[3,7];case 6:return s=i.sent(),n=function(){return Promise.reject(s)},[3,7];case 7:bo.set(t.auth._key(),n),i.label=8;case 8:return t.bypassAuthState||bo.set(t.auth._key(),(function(){return Promise.resolve(null)})),[2,n()]}}))}))()}},{key:"onAuthEvent",value:function(e){var t=this,o=this,a=function(){return Ve(T(r.prototype),"onAuthEvent",t)};return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return"signInViaRedirect"===e.type?[2,a().call(o,e)]:"unknown"===e.type?(o.resolve(null),[2]):e.eventId?[4,o.auth._redirectUserForId(e.eventId)]:[3,2];case 1:if(t=n.sent())return o.user=t,[2,a().call(o,e)];o.resolve(null),n.label=2;case 2:return[2]}}))}))()}},{key:"onExecution",value:function(){return n((function(){return i(this,(function(e){return[2]}))}))()}},{key:"cleanUp",value:function(){}}]),r}(yo);function Io(e,t){return Co.apply(this,arguments)}function Co(){return(Co=n((function(e,t){var n,r,o;return i(this,(function(i){switch(i.label){case 0:return n=So(t),[4,(r=Eo(e))._isAvailable()];case 1:return i.sent()?[4,r._get(n)]:[2,!1];case 2:return o="true"===i.sent(),[4,r._remove(n)];case 3:return i.sent(),[2,o]}}))}))).apply(this,arguments)}function To(e,t){bo.set(e._key(),t)}function Eo(e){return gn(e._redirectPersistence)}function So(e){return hr("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(e,t){return No.apply(this,arguments)}function No(){return No=n((function(e,t){var n,r,o,a,s=arguments;return i(this,(function(i){switch(i.label){case 0:return n=s.length>2&&void 0!==s[2]&&s[2],r=Pr(e),o=co(r,t),[4,new wo(r,o,n).execute()];case 1:return!(a=i.sent())||n?[3,4]:(delete a.user._redirectEventId,[4,r._persistUserIfCurrent(a.user)]);case 2:return i.sent(),[4,r._setRedirectUser(null,t)];case 3:i.sent(),i.label=4;case 4:return[2,a]}}))})),No.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ro=function(){"use strict";function e(t){a(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return u(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ao(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Ao(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ln(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oo(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Oo(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Oo(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Ao(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Do(e){return xo.apply(this,arguments)}function xo(){return xo=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n((function(e){var t,n=arguments;return i(this,(function(r){return t=n.length>1&&void 0!==n[1]?n[1]:{},[2,On(e,"GET","/v1/projects",t)]}))})),xo.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mo=/^https?/;function Fo(){return(Fo=n((function(e){var t,n,r,o,a,s,u;return i(this,(function(i){switch(i.label){case 0:return e.config.emulator?[2]:[4,Do(e)];case 1:t=i.sent().authorizedDomains,n=!0,r=!1,o=void 0;try{for(a=t[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){u=s.value;try{if(Uo(u))return[2]}catch(e){}}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return cn(e,"unauthorized-domain"),[2]}}))}))).apply(this,arguments)}function Uo(e){var t=kn(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===i}if(!Mo.test(r))return!1;if(Lo.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qo=new Cn(3e4,6e4);function jo(){var e=qi().___jsl,t=!0,n=!1,r=void 0;if(null==e?void 0:e.H)try{for(var i,o=Object.keys(e.H)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;if(e.H[a].r=e.H[a].r||[],e.H[a].L=e.H[a].L||[],e.H[a].r=k(e.H[a].L),e.CP)for(var s=0;s<e.CP.length;s++)e.CP[s]=null}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}var Wo=null;function Bo(e){return Wo=Wo||function(e){return new Promise((function(t,n){var r,i,o;function a(){jo(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){jo(),n(ln(e,"network-request-failed"))},timeout:qo.get()})}if(null===(i=null===(r=qi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=qi().gapi)||void 0===o?void 0:o.load)){var s=io("iframefcb");return qi()[s]=function(){gapi.load?a():n(ln(e,"network-request-failed"))},ro("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}a()}})).catch((function(e){throw Wo=null,e}))}(e),Wo}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ho=new Cn(5e3,15e3),Vo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ko(e){var t=e.config;vn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Tn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:qt},i=zo.get(e.config.apiHost);i&&(r.eid=i);var o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),"".concat(n,"?").concat(Oe(r).slice(1))}function Go(e){return Yo.apply(this,arguments)}function Yo(){return Yo=n((function(e){var t,r;return i(this,(function(o){switch(o.label){case 0:return[4,Bo(e)];case 1:return t=o.sent(),vn(r=qi().gapi,e,"internal-error"),[2,t.open({where:document.body,url:Ko(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vo,dontclear:!0},(function(t){return new Promise((r=n((function(n,r){var o,a;function s(){qi().clearTimeout(a),n(t)}return i(this,(function(n){switch(n.label){case 0:return[4,t.restyle({setHideOnLeave:!1})];case 1:return n.sent(),o=ln(e,"network-request-failed"),a=qi().setTimeout((function(){r(o)}),Ho.get()),t.ping(s).then(s,(function(){r(o)})),[2]}}))})),function(e,t){return r.apply(this,arguments)}));var r}))]}}))})),Yo.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qo="_blank",$o="http://localhost",Xo=function(){"use strict";function e(t){a(this,e),this.window=t,this.associatedEvent=null}return u(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Zo(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),s="",u=Object.assign(Object.assign({},Jo),{width:r.toString(),height:i.toString(),top:o,left:a}),c=de().toLowerCase();n&&(s=yr(c)?Qo:n),vr(c)&&(t=t||$o,u.scrollbars="yes");var l=Object.entries(u).reduce((function(e,t){var n=_(t,2),r=n[0],i=n[1];return"".concat(e).concat(r,"=").concat(i,",")}),"");if(wr(c)&&"_self"!==s)return ea(t||"",s),new Xo(null);var h=window.open(t||"",s,l);vn(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Xo(h)}function ea(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ta="__/auth/handler",na="emulator/auth/handler";function ra(e,t,n,r,i,o){vn(e.config.authDomain,e,"auth-domain-config-required"),vn(e.config.apiKey,e,"invalid-api-key");var a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qt,eventId:i};if(t instanceof ti){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Se(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));var s=!0,u=!1,c=void 0;try{for(var l,h=Object.entries(o||{})[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var d=_(l.value,2),f=d[0],v=d[1];a[f]=v}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}}if(t instanceof ni){var p=t.getScopes().filter((function(e){return""!==e}));p.length>0&&(a.scopes=p.join(","))}e.tenantId&&(a.tid=e.tenantId);var y,g,m=a,k=!0,b=!1,w=void 0;try{for(var I,C=Object.keys(m)[Symbol.iterator]();!(k=(I=C.next()).done);k=!0){var T=I.value;void 0===m[T]&&delete m[T]}}catch(e){b=!0,w=e}finally{try{k||null==C.return||C.return()}finally{if(b)throw w}}return"".concat((y=e,g=y.config,g.emulator?Tn(g,na):"https://".concat(g.authDomain,"/").concat(ta)),"?").concat(Oe(m).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ia="webStorageSupport",oa=function(){"use strict";function e(){a(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xi,this._completeRedirectFn=Po,this._overrideRedirectResult=To}return u(e,[{key:"_openPopup",value:function(e,t,r,o){var a=this;return n((function(){var n,s;return i(this,(function(i){return yn(null===(n=a.eventManagers[e._key()])||void 0===n?void 0:n.manager,"_initialize() not called before _openPopup()"),s=ra(e,t,r,kn(),o),[2,Zo(e,s,Fi())]}))}))()}},{key:"_openRedirect",value:function(e,t,r,o){var a=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:return[4,a._originValidation(e)];case 1:return n.sent(),i=ra(e,t,r,kn(),o),qi().location.href=i,[2,new Promise((function(){}))]}var i}))}))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,o=r.promise;return i?Promise.resolve(i):(yn(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch((function(){delete t.eventManagers[n]})),a}},{key:"initAndGetManager",value:function(e){var t=this;return n((function(){var n,r;return i(this,(function(i){switch(i.label){case 0:return[4,Go(e)];case 1:return n=i.sent(),r=new Ro(e),n.register("authEvent",(function(t){return vn(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:r},t.iframes[e._key()]=n,[2,r]}}))}))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(ia,{type:ia},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[ia];void 0!==i&&t(!!i),cn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Fo.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Cr()||pr()||br()}}]),e}(),aa=oa,sa=function(e){"use strict";h(n,e);var t=R(n);function n(e){var r;return a(this,n),(r=t.call(this,"phone")).credential=e,r}return u(n,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return On(e,"POST","/v2/accounts/mfaEnrollment:finalize",Rn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return On(e,"POST","/v2/accounts/mfaSignIn:finalize",Rn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function e(t){a(this,e),this.factorId=t}return u(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return pn("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){a(this,e)}return u(e,null,[{key:"assertion",value:function(e){return sa._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var ua="@firebase/auth",ca="0.21.1",la=function(){"use strict";function e(t){a(this,e),this.auth=t,this.internalListeners=new Map}return u(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:return t.assertAuthConfigured(),[4,t.auth._initializationPromise];case 1:return n.sent(),t.auth.currentUser?[4,t.auth.currentUser.getIdToken(e)]:[2,null];case 2:return[2,{accessToken:n.sent()}]}}))}))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){vn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ha,da=ce("authIdTokenMaxAge")||300,fa=null,va=function(e){return t=n((function(t){var n,r,o,a;return i(this,(function(i){switch(i.label){case 0:return(r=t)?[4,t.getIdTokenResult()]:[3,2];case 1:r=i.sent(),i.label=2;case 2:return(o=(n=r)&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3)&&o>da?[2]:(a=null==n?void 0:n.token,fa===a?[2]:(fa=a,[4,fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:"Bearer ".concat(a)}:{}})]));case 3:return i.sent(),[2]}}))})),function(e){return t.apply(this,arguments)};var t};function pa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt(),t=Lt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=mn(e,{popupRedirectResolver:aa,persistence:[to,Ai,xi]}),r=ce("authTokenSyncURL");if(r){var i=va(r);Ti(n,i,(function(){return i(n.currentUser)})),Ci(n,(function(e){return i(e)}))}var o=ae("auth");return o&&Rr(n,"http://".concat(o)),n}ha="Browser",xt(new ze("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=r.options,a=o.apiKey,s=o.authDomain;return function(e,t){vn(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),vn(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:a,authDomain:s,clientPlatform:ha,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tr(ha)},i=new Sr(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),xt(new ze("auth-internal",(function(e){return function(e){return new la(e)}(Pr(e.getProvider("auth").getImmediate()))}),"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(ua,ca,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ha)),Bt(ua,ca,"esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Bt("firebase","9.16.0","app");var ya="@firebase/database",_a="0.14.1",ga="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ma,ka=function(){"use strict";function e(t){a(this,e),this.domStorage_=t,this.prefix_="firebase:"}return u(e,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:be(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),e}(),ba=function(){"use strict";function e(){a(this,e),this.cache_={},this.isInMemoryStorage=!0}return u(e,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return Te(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),e}(),wa=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new ka(t)}}catch(e){}return new ba},Ia=wa("localStorage"),Ca=wa("sessionStorage"),Ta=new rt("@firebase/database"),Ea=(ma=1,function(){return ma++}),Sa=function(e){var t=Ue(e),n=new xe;n.update(t);var r=n.digest();return X.encodeByteArray(r)},Pa=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var o=t[i];Array.isArray(o)||o&&"object"==typeof o&&"number"==typeof o.length?r+=Pa.apply(null,o):r+="object"==typeof o?we(o):o,r+=" "}return r},Na=null,Ra=!0,Oa=function(e,t){J(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Ta.logLevel=Ye.VERBOSE,Na=Ta.log.bind(Ta),t&&Ca.set("logging_enabled",!0)):"function"==typeof e?Na=e:(Na=null,Ca.remove("logging_enabled"))},Aa=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===Ra&&(Ra=!1,null===Na&&!0===Ca.get("logging_enabled")&&Oa(!0)),Na){var r=Pa.apply(null,t);Na(r)}},Da=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];Aa.apply(void 0,[e].concat(k(n)))}},xa=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r="FIREBASE INTERNAL ERROR: "+Pa.apply(void 0,k(t));Ta.error(r)},La=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r="FIREBASE FATAL ERROR: ".concat(Pa.apply(void 0,k(t)));throw Ta.error(r),new Error(r)},Ma=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r="FIREBASE WARNING: "+Pa.apply(void 0,k(t));Ta.warn(r)},Fa=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Ua="[MIN_NAME]",qa="[MAX_NAME]",ja=function(e,t){if(e===t)return 0;if(e===Ua||t===qa)return-1;if(t===Ua||e===qa)return 1;var n=Ya(e),r=Ya(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},Wa=function(e,t){return e===t?0:e<t?-1:1},Ba=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+we(t))},Ha=function(e){if("object"!=typeof e||null===e)return we(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=we(t[i]),r+=":",r+=Ha(e[t[i]]);return r+="}"},Va=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var Ka=function(e){J(!Fa(e),"Invalid JSON number");var t,n,r,i,o,a=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),a))+a,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(o=52;o;o-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(o=0;o<64;o+=8){var l=parseInt(u.substr(o,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var Ga=new RegExp("^-?(0*)\\d{1,10}$"),Ya=function(e){if(Ga.test(e)){var t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Ja=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw Ma("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Qa=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},$a=function(){"use strict";function e(t,n){var r=this;a(this,e),this.appName_=t,this.appCheckProvider=n,this.appCheck=null==n?void 0:n.getImmediate({optional:!0}),this.appCheck||null==n||n.get().then((function(e){return r.appCheck=e}))}return u(e,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){setTimeout((function(){t.appCheck?t.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){Ma('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),e}(),Xa=function(){"use strict";function e(t,n,r){var i=this;a(this,e),this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit((function(e){return i.auth_=e}))}return u(e,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(Aa("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){setTimeout((function(){t.auth_?t.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ma(e)}}]),e}(),Za=function(){"use strict";function e(t){a(this,e),this.accessToken=t}return u(e,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),e}();Za.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var es="5",ts=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ns="ac",rs="websocket",is="long_polling",os=function(){"use strict";function e(t,n,r,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]&&arguments[6];a(this,e),this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=u,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ia.get("host:"+t)||this._host}return u(e,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ia.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),e}();function as(e,t,n){var r;if(J("string"==typeof t,"typeof type must == string"),J("object"==typeof n,"typeof params must == object"),t===rs)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==is)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return za(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ss=function(){"use strict";function e(){a(this,e),this.counters_={}}return u(e,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;Te(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return ne(this.counters_)}}]),e}(),us={},cs={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e){var t=e.toString();return us[t]||(us[t]=new ss),us[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hs=function(){"use strict";function e(t){a(this,e),this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return u(e,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){var n=this,r=function(){var e=function(e){t[e]&&Ja((function(){i.onMessage_(t[e])}))},t=n.pendingResponses[n.currentResponseNum];delete n.pendingResponses[n.currentResponseNum];for(var r=0;r<t.length;++r)e(r);if(n.currentResponseNum===n.closeAfterResponse)return n.onClose&&(n.onClose(),n.onClose=null),"break";n.currentResponseNum++},i=this;for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){if("break"===r())break}}}]),e}(),ds="start",fs="close",vs=function(){"use strict";function e(t,n,r,i,o,s,u){var c=this;a(this,e),this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Da(t),this.stats_=ls(n),this.urlFn=function(e){return c.appCheckToken&&(e[ns]=c.appCheckToken),as(n,is,e)}}return u(e,[{key:"open",value:function(e,t){var n=this;this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new hs(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){n.log_("Timed out trying to connect."),n.onClosed_(),n.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(pe()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){if(!n.isClosed_){n.scriptTagHolder=new ps((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=_(t,5),o=i[0],a=i[1],s=i[2];i[3],i[4];if(n.incrementIncomingBytes_(t),n.scriptTagHolder)if(n.connectTimeoutTimer_&&(clearTimeout(n.connectTimeoutTimer_),n.connectTimeoutTimer_=null),n.everConnected_=!0,o===ds)n.id=a,n.password=s;else{if(o!==fs)throw new Error("Unrecognized command received: "+o);a?(n.scriptTagHolder.sendNewPolls=!1,n.myPacketOrderer.closeAfter(a,(function(){n.onClosed_()}))):n.onClosed_()}}),(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=_(t,2),o=i[0],a=i[1];n.incrementIncomingBytes_(t),n.myPacketOrderer.handleResponse(o,a)}),(function(){n.onClosed_()}),n.urlFn);var e={};e[ds]="t",e.ser=Math.floor(1e8*Math.random()),n.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=n.scriptTagHolder.uniqueCallbackIdentifier),e.v=es,n.transportSessionId&&(e.s=n.transportSessionId),n.lastSessionId&&(e.ls=n.lastSessionId),n.applicationId&&(e.p=n.applicationId),n.appCheckToken&&(e[ns]=n.appCheckToken),"undefined"!=typeof location&&location.hostname&&ts.test(location.hostname)&&(e.r="f");var t=n.urlFn(e);n.log_("Connecting via long-poll to "+t),n.scriptTagHolder.addTag(t,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=we(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=Z(t),r=Va(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!pe()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=we(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){e.forceAllow_=!0}},{key:"forceDisallow",value:function(){e.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!pe()&&(!!e.forceAllow_||!(e.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),e}(),ps=function(){"use strict";function e(t,n,r,i){if(a(this,e),this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,pe())this.commandCB=t,this.onMessageCB=n;else{this.uniqueCallbackIdentifier=Ea(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=n,this.myIFrame=e.createIFrame_();var o="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))o='<script>document.domain="'+document.domain+'";<\/script>';var s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){Aa("frame writing exception"),e.stack&&Aa(e.stack),Aa(e)}}}return u(e,[{key:"close",value:function(){var e=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0)));var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;pe()?this.doNodeLongPoll(e,t):setTimeout((function(){try{if(!n.sendNewPolls)return;var r=n.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){var e=r.readyState;e&&"loaded"!==e&&"complete"!==e||(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=function(){Aa("Long-poll script failed to load: "+e),n.sendNewPolls=!1,n.close()},n.myIFrame.doc.body.appendChild(r)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Aa("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),e}(),ys=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"undefined"!=typeof MozWebSocket?ys=MozWebSocket:"undefined"!=typeof WebSocket&&(ys=WebSocket);var _s=function(){"use strict";function e(t,n,r,i,o,s,u){a(this,e),this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Da(this.connId),this.stats_=ls(n),this.connURL=e.connectionURL_(n,s,u,i,r),this.nodeAdmin=n.nodeAdmin}return u(e,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ia.set("previous_websocket_failure",!0);try{var r;if(pe()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(es,"/").concat(ga,"/").concat(O.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var o={},a=0===this.connURL.indexOf("wss://")?o.HTTPS_PROXY||o.https_proxy:o.HTTP_PROXY||o.http_proxy;a&&(r.proxy={origin:a})}this.mySock=new ys(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){Ia.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=be(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(J(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=we(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=Va(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var o={};return o.v=es,!pe()&&"undefined"!=typeof location&&location.hostname&&ts.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),r&&(o[ns]=r),i&&(o.p=i),as(e,rs,o)}},{key:"forceDisallow",value:function(){e.forceDisallow_=!0}},{key:"isAvailable",value:function(){var t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==ys&&!e.forceDisallow_}},{key:"previouslyFailed",value:function(){return Ia.isInMemoryStorage||!0===Ia.get("previous_websocket_failure")}}]),e}();_s.responsesRequiredToBeHealthy=2,_s.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gs=function(){"use strict";function e(t){a(this,e),this.initTransports_(t)}return u(e,[{key:"initTransports_",value:function(t){var n=_s&&_s.isAvailable(),r=n&&!_s.previouslyFailed();if(t.webSocketOnly&&(n||Ma("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_s];else{var i=this.transports_=[],o=!0,a=!1,s=void 0;try{for(var u,c=e.ALL_TRANSPORTS[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}e.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[vs,_s]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),e}();gs.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ms=function(){"use strict";function e(t,n,r,i,o,s,u,c,l,h){a(this,e),this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=u,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Da("c:"+this.id+":"),this.transportManager_=new gs(n),this.log_("Connection created"),this.start_()}return u(e,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qa((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=Ba("t",e),n=Ba("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=Ba("t",e),n=Ba("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=Ba("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?xa("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xa("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),es!==n&&Ma("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Qa((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qa((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ia.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),e}(),ks=function(){"use strict";function e(){a(this,e)}return u(e,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),e}(),bs=function(){"use strict";function e(t){a(this,e),this.allowedEvents_=t,this.listeners_={},J(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}return u(e,[{key:"trigger",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Array.isArray(this.listeners_[e]))for(var i=k(this.listeners_[e]),o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){J(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),e}(),ws=function(e){"use strict";h(n,e);var t=R(n);function n(){var e;return a(this,n),(e=t.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||fe()||(window.addEventListener("online",(function(){e.online_||(e.online_=!0,e.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){e.online_&&(e.online_=!1,e.trigger("online",!1))}),!1)),e}return u(n,[{key:"getInitialEvent",value:function(e){return J("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new n}}]),n}(bs),Is=function(){"use strict";function e(t,n){if(a(this,e),void 0===n){this.pieces_=t.split("/");for(var r=0,i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}return u(e,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),e}();function Cs(){return new Is("")}function Ts(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Es(e){return e.pieces_.length-e.pieceNum_}function Ss(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new Is(e.pieces_,t)}function Ps(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ns(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function Rs(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Is(t,0)}function Os(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Is)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var o=t.split("/"),a=0;a<o.length;a++)o[a].length>0&&n.push(o[a]);return new Is(n,0)}function As(e){return e.pieceNum_>=e.pieces_.length}function Ds(e,t){var n=Ts(e),r=Ts(t);if(null===n)return t;if(n===r)return Ds(Ss(e),Ss(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function xs(e,t){if(Es(e)!==Es(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ls(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(Es(e)>Es(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var Ms=function e(t,n){"use strict";a(this,e),this.errorPrefix_=n,this.parts_=Ns(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(var r=0;r<this.parts_.length;r++)this.byteLength_+=qe(this.parts_[r]);Fs(this)};function Fs(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Us(e))}function Us(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qs=function(e){"use strict";h(n,e);var t=R(n);function n(){var e,r,i;return a(this,n),e=t.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(i="visibilitychange",r="hidden"):void 0!==document.mozHidden?(i="mozvisibilitychange",r="mozHidden"):void 0!==document.msHidden?(i="msvisibilitychange",r="msHidden"):void 0!==document.webkitHidden&&(i="webkitvisibilitychange",r="webkitHidden")),e.visible_=!0,i&&document.addEventListener(i,(function(){var t=!document[r];t!==e.visible_&&(e.visible_=t,e.trigger("visible",t))}),!1),e}return u(n,[{key:"getInitialEvent",value:function(e){return J("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new n}}]),n}(bs),js=1e3,Ws=function(e){"use strict";h(r,e);var t=R(r);function r(e,n,i,s,u,c,l,h){var d;if(a(this,r),(d=t.call(this)).repoInfo_=e,d.applicationId_=n,d.onDataUpdate_=i,d.onConnectStatus_=s,d.onServerInfoUpdate_=u,d.authTokenProvider_=c,d.appCheckTokenProvider_=l,d.authOverride_=h,d.id=r.nextPersistentConnectionId_++,d.log_=Da("p:"+d.id+":"),d.interruptReasons_={},d.listens=new Map,d.outstandingPuts_=[],d.outstandingGets_=[],d.outstandingPutCount_=0,d.outstandingGetCount_=0,d.onDisconnectRequestQueue_=[],d.connected_=!1,d.reconnectDelay_=js,d.maxReconnectDelay_=3e5,d.securityDebugCallback_=null,d.lastSessionId=null,d.establishConnectionTimer_=null,d.visible_=!1,d.requestCBHash_={},d.requestNumber_=0,d.realtime_=null,d.authToken_=null,d.appCheckToken_=null,d.forceTokenRefresh_=!1,d.invalidAuthTokenCount_=0,d.invalidAppCheckTokenCount_=0,d.firstConnection_=!0,d.lastConnectionAttemptTime_=null,d.lastConnectionEstablishedTime_=null,h&&!pe())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return qs.getInstance().on("visible",d.onVisible_,o(d)),-1===e.host.indexOf("fblocal")&&ws.getInstance().on("online",d.onOnline_,o(d)),d}return u(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(we(i)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new le,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");var a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);var a={p:i};e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest("q",a,(function(a){var s=a.d,u=a.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(o))===e&&(t.log_("listen response",a),"ok"!==u&&t.removeListen_(i,o),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=Ie(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){var e=this;if(this.connected_&&this.authToken_){var t=this.authToken_,n=Ce(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;var a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){var t=this;if(this.connected_){var n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+we(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):xa("Unrecognized action received from server: "+we(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=js),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var e=this;return n((function(){var t,n,o,a,s,u,c,l,h,d,f,v,p,y;return i(this,(function(i){switch(i.label){case 0:if(!e.shouldReconnect_())return[3,4];e.log_("Making a connection attempt"),e.lastConnectionAttemptTime_=(new Date).getTime(),e.lastConnectionEstablishedTime_=null,t=e.onDataMessage_.bind(e),n=e.onReady_.bind(e),o=e.onRealtimeDisconnect_.bind(e),a=e.id+":"+r.nextConnectionId_++,s=e.lastSessionId,u=!1,c=null,l=function(){c?c.close():(u=!0,o())},h=function(e){J(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(e)},e.realtime_={close:l,sendRequest:h},d=e.forceTokenRefresh_,e.forceTokenRefresh_=!1,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,Promise.all([e.authTokenProvider_.getToken(d),e.appCheckTokenProvider_.getToken(d)])];case 2:return f=_.apply(void 0,[i.sent(),2]),v=f[0],p=f[1],u?Aa("getToken() completed but was canceled"):(Aa("getToken() completed. Creating connection."),e.authToken_=v&&v.accessToken,e.appCheckToken_=p&&p.token,c=new ms(a,e.repoInfo_,e.applicationId_,e.appCheckToken_,e.authToken_,t,n,o,(function(t){Ma(t+" ("+e.repoInfo_.toString()+")"),e.interrupt("server_kill")}),s)),[3,4];case 3:return y=i.sent(),e.log_("Failed to get token: "+y),u||(e.repoInfo_.nodeAdmin&&Ma(y),l()),[3,4];case 4:return[2]}}))}))()}},{key:"interrupt",value:function(e){Aa("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){Aa("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Se(this.interruptReasons_)&&(this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return Ha(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new Is(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){Aa("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){Aa("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,o=void 0;try{for(var a,s=this.listens.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}for(var d=0;d<this.outstandingPuts_.length;d++)this.outstandingPuts_[d]&&this.sendPut_(d);for(;this.onDisconnectRequestQueue_.length;){var f=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(f.action,f.pathString,f.data,f.onComplete)}for(var v=0;v<this.outstandingGets_.length;v++)this.outstandingGets_[v]&&this.sendGet_(v)}},{key:"sendConnectStats_",value:function(){var e={},t="js";pe()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ga.replace(/\./g,"-")]=1,fe()?e["framework.cordova"]=1:ve()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=ws.getInstance().currentlyOnline();return Se(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&Te(e,"w")){var n=Ee(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Ma("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(ks);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ws.nextPersistentConnectionId_=0,Ws.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bs,Hs=function(){"use strict";function e(t,n){a(this,e),this.name=t,this.node=n}return u(e,null,[{key:"Wrap",value:function(t,n){return new e(t,n)}}]),e}(),Vs=function(){"use strict";function e(){a(this,e)}return u(e,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new Hs(Ua,e),r=new Hs(Ua,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return Hs.MIN}}]),e}(),zs=function(e){"use strict";h(n,e);var t=R(n);function n(){return a(this,n),t.apply(this,arguments)}return u(n,[{key:"compare",value:function(e,t){return ja(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw Q("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return Hs.MIN}},{key:"maxPost",value:function(){return new Hs(qa,Bs)}},{key:"makePost",value:function(e,t){return J("string"==typeof e,"KeyIndex indexValue must always be a string."),new Hs(e,Bs)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return Bs},set:function(e){Bs=e}}]),n}(Vs),Ks=new zs,Gs=function(){"use strict";function e(t,n,r,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;a(this,e),this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];for(var s=1;!t.isEmpty();)if(s=n?r(t.key,n):1,i&&(s*=-1),s<0)t=this.isReverse_?t.left:t.right;else{if(0===s){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}return u(e,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),e}(),Ys=function(){"use strict";function e(t,n,r,i,o){a(this,e),this.key=t,this.value=n,this.color=null!=r?r:e.RED,this.left=null!=i?i:$s.EMPTY_NODE,this.right=null!=o?o:$s.EMPTY_NODE}return u(e,[{key:"copy",value:function(t,n,r,i,o){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return $s.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return $s.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight_",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ys.RED=!0,Ys.BLACK=!1;var Js,Qs=function(){"use strict";function e(){a(this,e)}return u(e,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Ys(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),e}(),$s=function(){"use strict";function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.EMPTY_NODE;a(this,e),this.comparator_=t,this.root_=n}return u(e,[{key:"insert",value:function(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ys.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ys.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new Gs(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new Gs(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new Gs(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new Gs(this.root_,null,this.comparator_,!0,e)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xs(e,t){return ja(e.name,t.name)}function Zs(e,t){return ja(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$s.EMPTY_NODE=new Qs;var eu,tu,nu,ru=function(e){return"number"==typeof e?"number:"+Ka(e):"string:"+e},iu=function(e){if(e.isLeafNode()){var t=e.val();J("string"==typeof t||"number"==typeof t||"object"==typeof t&&Te(t,".sv"),"Priority must be a string or number.")}else J(e===Js||e.isEmpty(),"priority of unexpected type.");J(e===Js||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},ou=function(){"use strict";function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.__childrenNodeConstructor.EMPTY_NODE;a(this,e),this.value_=t,this.priorityNode_=n,this.lazyHash_=null,J(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),iu(this.priorityNode_)}return u(e,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(t){return new e(this.value_,t)}},{key:"getImmediateChild",value:function(t){return".priority"===t?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(t){return As(t)?this:".priority"===Ts(t)?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(t,n){return".priority"===t?this.updatePriority(n):n.isEmpty()&&".priority"!==t?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(t,n){var r=Ts(t);return null===r?n:n.isEmpty()&&".priority"!==r?this:(J(".priority"!==r||1===Es(t),".priority must be the last token in a path"),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ss(t),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.priorityNode_.isEmpty()||(e+="priority:"+ru(this.priorityNode_.val())+":");var t=P(this.value_);e+=t+":",e+="number"===t?Ka(this.value_):this.value_,this.lazyHash_=Sa(e)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(J(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}},{key:"compareToLeafNode_",value:function(t){var n=P(t.value_),r=P(this.value_),i=e.VALUE_TYPE_ORDER.indexOf(n),o=e.VALUE_TYPE_ORDER.indexOf(r);return J(i>=0,"Unknown leaf type: "+n),J(o>=0,"Unknown leaf type: "+r),i===o?"object"===r?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return eu},set:function(e){eu=e}}]),e}();ou.VALUE_TYPE_ORDER=["object","boolean","number","string"];var au,su,uu=function(e){"use strict";h(n,e);var t=R(n);function n(){return a(this,n),t.apply(this,arguments)}return u(n,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?ja(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return Hs.MIN}},{key:"maxPost",value:function(){return new Hs(qa,new ou("[PRIORITY-POST]",nu))}},{key:"makePost",value:function(e,t){var n=tu(e);return new Hs(t,new ou("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),n}(Vs),cu=new uu,lu=Math.log(2),hu=function(){"use strict";function e(t){a(this,e);var n;this.count=(n=t+1,parseInt(Math.log(n)/lu,10)),this.current_=this.count-1;var r,i=(r=this.count,parseInt(Array(r+1).join("1"),2));this.bits_=t+1&i}return u(e,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),e}(),du=function(e,t,n,r){e.sort(t);var i=function(t,r){var o,a,s=r-t;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ys(a,o.node,Ys.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return o=e[u],a=n?n(o):o,new Ys(a,o.node,Ys.BLACK,c,l)},o=function(t){for(var r=null,o=null,a=e.length,s=function(t,r){var o=a-t,s=a;a-=t;var c=i(o+1,s),l=e[o],h=n?n(l):l;u(new Ys(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(o=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,Ys.BLACK):(s(h,Ys.BLACK),s(h,Ys.RED))}return o}(new hu(e.length));return new $s(r||t,o)},fu={},vu=function(){"use strict";function e(t,n){a(this,e),this.indexes_=t,this.indexSet_=n}return u(e,[{key:"get",value:function(e){var t=Ee(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $s?t:null}},{key:"hasIndex",value:function(e){return Te(this.indexSet_,e.toString())}},{key:"addIndex",value:function(t,n){J(t!==Ks,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],o=!1,a=n.getIterator(Hs.Wrap),s=a.getNext();s;)o=o||t.isDefinedOn(s.node),i.push(s),s=a.getNext();r=o?du(i,t.getCompare()):fu;var u=t.toString(),c=Object.assign({},this.indexSet_);c[u]=t;var l=Object.assign({},this.indexes_);return l[u]=r,new e(l,c)}},{key:"addToIndexes",value:function(t,n){var r=this;return new e(Pe(this.indexes_,(function(e,i){var o=Ee(r.indexSet_,i);if(J(o,"Missing index implementation for "+i),e===fu){if(o.isDefinedOn(t.node)){for(var a=[],s=n.getIterator(Hs.Wrap),u=s.getNext();u;)u.name!==t.name&&a.push(u),u=s.getNext();return a.push(t),du(a,o.getCompare())}return fu}var c=n.get(t.name),l=e;return c&&(l=l.remove(new Hs(t.name,c))),l.insert(t,t.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(t,n){return new e(Pe(this.indexes_,(function(e){if(e===fu)return e;var r=n.get(t.name);return r?e.remove(new Hs(t.name,r)):e})),this.indexSet_)}}],[{key:"Default",get:function(){return J(fu&&cu,"ChildrenNode.ts has not been loaded"),au=au||new e({".priority":fu},{".priority":cu})}}]),e}(),pu=function(){"use strict";function e(t,n,r){a(this,e),this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&iu(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return u(e,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||su}},{key:"updatePriority",value:function(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?su:t}},{key:"getChild",value:function(e){var t=Ts(e);return null===t?this:this.getImmediateChild(t).getChild(Ss(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(t,n){if(J(n,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(n);var r,i,o=new Hs(t,n);n.isEmpty()?(r=this.children_.remove(t),i=this.indexMap_.removeFromIndexes(o,this.children_)):(r=this.children_.insert(t,n),i=this.indexMap_.addToIndexes(o,this.children_));var a=r.isEmpty()?su:this.priorityNode_;return new e(r,a,i)}},{key:"updateChild",value:function(e,t){var n=Ts(e);if(null===n)return t;J(".priority"!==Ts(e)||1===Es(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(Ss(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(t){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(cu,(function(a,s){n[a]=s.val(t),r++,o&&e.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):o=!1})),!t&&o&&i<2*r){var a=[];for(var s in n)a[s]=n[s];return a}return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+ru(this.getPriority().val())+":"),this.forEachChild(cu,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Sa(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Hs(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new Hs(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new Hs(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,Hs.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,Hs.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yu?-1:0}},{key:"withIndex",value:function(t){if(t===Ks||this.indexMap_.hasIndex(t))return this;var n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===Ks||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(cu),r=t.getIterator(cu),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===Ks?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return su||(su=new e(new $s(Zs),null,vu.Default))}}]),e}();pu.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var yu=new(function(e){"use strict";h(n,e);var t=R(n);function n(){return a(this,n),t.call(this,new $s(Zs),pu.EMPTY_NODE,vu.Default)}return u(n,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return pu.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),n}(pu));Object.defineProperties(Hs,{MIN:{value:new Hs(Ua,pu.EMPTY_NODE)},MAX:{value:new Hs(qa,yu)}}),zs.__EMPTY_NODE=pu.EMPTY_NODE,ou.__childrenNodeConstructor=pu,Js=yu,function(e){nu=e}(yu);function _u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===e)return pu.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),J(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+(void 0===t?"undefined":P(t))),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){var n=e;return new ou(n,_u(t))}if(e instanceof Array){var r=pu.EMPTY_NODE;return za(e,(function(t,n){if(Te(e,t)&&"."!==t.substring(0,1)){var i=_u(n);!i.isLeafNode()&&i.isEmpty()||(r=r.updateImmediateChild(t,i))}})),r.updatePriority(_u(t))}var i=[],o=!1,a=e;if(za(a,(function(e,t){if("."!==e.substring(0,1)){var n=_u(t);n.isEmpty()||(o=o||!n.getPriority().isEmpty(),i.push(new Hs(e,n)))}})),0===i.length)return pu.EMPTY_NODE;var s=du(i,Xs,(function(e){return e.name}),Zs);if(o){var u=du(i,cu.getCompare());return new pu(s,_u(t),new vu({".priority":u},{".priority":cu}))}return new pu(s,_u(t),vu.Default)}!function(e){tu=e}(_u);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gu=function(e){"use strict";h(n,e);var t=R(n);function n(e){var r;return a(this,n),(r=t.call(this)).indexPath_=e,J(!As(e)&&".priority"!==Ts(e),"Can't create PathIndex with empty path or .priority key"),r}return u(n,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?ja(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=_u(e),r=pu.EMPTY_NODE.updateChild(this.indexPath_,n);return new Hs(t,r)}},{key:"maxPost",value:function(){var e=pu.EMPTY_NODE.updateChild(this.indexPath_,yu);return new Hs(qa,e)}},{key:"toString",value:function(){return Ns(this.indexPath_,0).join("/")}}]),n}(Vs),mu=function(e){"use strict";h(n,e);var t=R(n);function n(){return a(this,n),t.apply(this,arguments)}return u(n,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?ja(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return Hs.MIN}},{key:"maxPost",value:function(){return Hs.MAX}},{key:"makePost",value:function(e,t){var n=_u(e);return new Hs(t,n)}},{key:"toString",value:function(){return".value"}}]),n}(Vs),ku=new mu;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bu(e){return{type:"value",snapshotNode:e}}function wu(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Iu(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Cu(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Tu=function(){"use strict";function e(t){a(this,e),this.index_=t}return u(e,[{key:"updateChild",value:function(e,t,n,r,i,o){J(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Iu(t,a)):J(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(wu(t,n)):o.trackChildChange(Cu(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}},{key:"updateFullNode",value:function(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(cu,(function(e,r){t.hasChild(e)||n.trackChildChange(Iu(e,r))})),t.isLeafNode()||t.forEachChild(cu,(function(t,r){if(e.hasChild(t)){var i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Cu(t,r,i))}else n.trackChildChange(wu(t,r))}))),t.withIndex(this.index_)}},{key:"updatePriority",value:function(e,t){return e.isEmpty()?pu.EMPTY_NODE:e.updatePriority(t)}},{key:"filtersNodes",value:function(){return!1}},{key:"getIndexedFilter",value:function(){return this}},{key:"getIndex",value:function(){return this.index_}}]),e}(),Eu=function(){"use strict";function e(t){a(this,e),this.indexedFilter_=new Tu(t.getIndex()),this.index_=t.getIndex(),this.startPost_=e.getStartPost_(t),this.endPost_=e.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}return u(e,[{key:"getStartPost",value:function(){return this.startPost_}},{key:"getEndPost",value:function(){return this.endPost_}},{key:"matches",value:function(e){var t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}},{key:"updateChild",value:function(e,t,n,r,i,o){return this.matches(new Hs(t,n))||(n=pu.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}},{key:"updateFullNode",value:function(e,t,n){t.isLeafNode()&&(t=pu.EMPTY_NODE);var r=t.withIndex(this.index_);r=r.updatePriority(pu.EMPTY_NODE);var i=this;return t.forEachChild(cu,(function(e,t){i.matches(new Hs(e,t))||(r=r.updateImmediateChild(e,pu.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.indexedFilter_}},{key:"getIndex",value:function(){return this.index_}}],[{key:"getStartPost_",value:function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}},{key:"getEndPost_",value:function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}]),e}(),Su=function(){"use strict";function e(t){var n=this;a(this,e),this.withinDirectionalStart=function(e){return n.reverse_?n.withinEndPost(e):n.withinStartPost(e)},this.withinDirectionalEnd=function(e){return n.reverse_?n.withinStartPost(e):n.withinEndPost(e)},this.withinStartPost=function(e){var t=n.index_.compare(n.rangedFilter_.getStartPost(),e);return n.startIsInclusive_?t<=0:t<0},this.withinEndPost=function(e){var t=n.index_.compare(e,n.rangedFilter_.getEndPost());return n.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Eu(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}return u(e,[{key:"updateChild",value:function(e,t,n,r,i,o){return this.rangedFilter_.matches(new Hs(t,n))||(n=pu.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}},{key:"updateFullNode",value:function(e,t,n){var r;if(t.isLeafNode()||t.isEmpty())r=pu.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){var i;r=pu.EMPTY_NODE.withIndex(this.index_),i=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var o=0;i.hasNext()&&o<this.limit_;){var a=i.getNext();if(this.withinDirectionalStart(a)){if(!this.withinDirectionalEnd(a))break;r=r.updateImmediateChild(a.name,a.node),o++}}}else{var s;r=(r=t.withIndex(this.index_)).updatePriority(pu.EMPTY_NODE),s=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);for(var u=0;s.hasNext();){var c=s.getNext();u<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?u++:r=r.updateImmediateChild(c.name,pu.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.rangedFilter_.getIndexedFilter()}},{key:"getIndex",value:function(){return this.index_}},{key:"fullLimitUpdateChild_",value:function(e,t,n,r,i){var o;if(this.reverse_){var a=this.index_.getCompare();o=function(e,t){return a(t,e)}}else o=this.index_.getCompare();var s=e;J(s.numChildren()===this.limit_,"");var u=new Hs(t,n),c=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),l=this.rangedFilter_.matches(u);if(s.hasChild(t)){for(var h=s.getImmediateChild(t),d=r.getChildAfterChild(this.index_,c,this.reverse_);null!=d&&(d.name===t||s.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);var f=null==d?1:o(d,u);if(l&&!n.isEmpty()&&f>=0)return null!=i&&i.trackChildChange(Cu(t,n,h)),s.updateImmediateChild(t,n);null!=i&&i.trackChildChange(Iu(t,h));var v=s.updateImmediateChild(t,pu.EMPTY_NODE);return null!=d&&this.rangedFilter_.matches(d)?(null!=i&&i.trackChildChange(wu(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}return n.isEmpty()?e:l&&o(c,u)>=0?(null!=i&&(i.trackChildChange(Iu(c.name,c.node)),i.trackChildChange(wu(t,n))),s.updateImmediateChild(t,n).updateImmediateChild(c.name,pu.EMPTY_NODE)):e}}]),e}(),Pu=function(){"use strict";function e(){a(this,e),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cu}return u(e,[{key:"hasStart",value:function(){return this.startSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ua}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qa}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===cu}},{key:"copy",value:function(){var t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(e){var t,n={};if(e.isDefault())return n;if(e.index_===cu?t="$priority":e.index_===ku?t="$value":e.index_===Ks?t="$key":(J(e.index_ instanceof gu,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=we(t),e.startSet_){var r=e.startAfterSet_?"startAfter":"startAt";n[r]=we(e.indexStartValue_),e.startNameSet_&&(n[r]+=","+we(e.indexStartName_))}if(e.endSet_){var i=e.endBeforeSet_?"endBefore":"endAt";n[i]=we(e.indexEndValue_),e.endNameSet_&&(n[i]+=","+we(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function Ru(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==cu&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ou=function(e){"use strict";h(n,e);var t=R(n);function n(e,r,i,o){var s;return a(this,n),(s=t.call(this)).repoInfo_=e,s.onDataUpdate_=r,s.authTokenProvider_=i,s.appCheckTokenProvider_=o,s.log_=Da("p:rest:"),s.listens_={},s}return u(n,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,r,i){var o=this,a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);var s=n.getListenId_(e,r),u={};this.listens_[s]=u;var c=Nu(e._queryParams);this.restRequest_(a+".json",c,(function(e,t){var n=t;(404===e&&(n=null,e=null),null===e&&o.onDataUpdate_(a,n,!1,r),Ee(o.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var r=n.getListenId_(e,t);delete this.listens_[r]}},{key:"get",value:function(e){var t=this,n=Nu(e._queryParams),r=e._path.toString(),i=new le;return this.restRequest_(r+".json",n,(function(e,n){var o=n;404===e&&(o=null,e=null),null===e?(t.onDataUpdate_(r,o,!1,null),i.resolve(o)):i.reject(new Error(o))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=this;return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(i){var o=_(i,2),a=o[0],s=o[1];a&&a.accessToken&&(t.auth=a.accessToken),s&&s.token&&(t.ac=s.token);var u=(r.repoInfo_.secure?"https://":"http://")+r.repoInfo_.host+e+"?ns="+r.repoInfo_.namespace+Oe(t);r.log_("Sending REST request for "+u);var c=new XMLHttpRequest;c.onreadystatechange=function(){if(n&&4===c.readyState){r.log_("REST Response for "+u+" received. status:",c.status,"response:",c.responseText);var e=null;if(c.status>=200&&c.status<300){try{e=be(c.responseText)}catch(e){Ma("Failed to parse JSON response for "+u+": "+c.responseText)}n(null,e)}else 401!==c.status&&404!==c.status&&Ma("Got unsuccessful REST response for "+u+" Status: "+c.status),n(c.status);n=null}},c.open("GET",u,!0),c.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),n}(ks),Au=function(){"use strict";function e(){a(this,e),this.rootNode_=pu.EMPTY_NODE}return u(e,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Du(){return{value:null,children:new Map}}function xu(e,t,n){if(As(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=Ts(t);e.children.has(r)||e.children.set(r,Du()),xu(e.children.get(r),t=Ss(t),n)}}function Lu(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,(function(e,r){Lu(r,new Is(t.toString()+"/"+e),n)}))}var Mu,Fu,Uu=function(){"use strict";function e(t){a(this,e),this.collection_=t,this.last_=null}return u(e,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&za(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),e}(),qu=function(){"use strict";function e(t,n){a(this,e),this.server_=n,this.statsToReport_={},this.statsListener_=new Uu(t);var r=1e4+2e4*Math.random();Qa(this.reportStats_.bind(this),Math.floor(r))}return u(e,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;za(t,(function(t,i){i>0&&Te(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),Qa(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Fu=Mu||(Mu={}))[Fu.OVERWRITE=0]="OVERWRITE",Fu[Fu.MERGE=1]="MERGE",Fu[Fu.ACK_USER_WRITE=2]="ACK_USER_WRITE",Fu[Fu.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var Wu,Bu=function(){"use strict";function e(t,n,r){a(this,e),this.path=t,this.affectedTree=n,this.revert=r,this.type=Mu.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return u(e,[{key:"operationForChild",value:function(t){if(As(this.path)){if(null!=this.affectedTree.value)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new Is(t));return new e(Cs(),n,this.revert)}return J(Ts(this.path)===t,"operationForChild called for unrelated child."),new e(Ss(this.path),this.affectedTree,this.revert)}}]),e}(),Hu=function(){"use strict";function e(t,n){a(this,e),this.source=t,this.path=n,this.type=Mu.LISTEN_COMPLETE}return u(e,[{key:"operationForChild",value:function(t){return As(this.path)?new e(this.source,Cs()):new e(this.source,Ss(this.path))}}]),e}(),Vu=function(){"use strict";function e(t,n,r){a(this,e),this.source=t,this.path=n,this.snap=r,this.type=Mu.OVERWRITE}return u(e,[{key:"operationForChild",value:function(t){return As(this.path)?new e(this.source,Cs(),this.snap.getImmediateChild(t)):new e(this.source,Ss(this.path),this.snap)}}]),e}(),zu=function(){"use strict";function e(t,n,r){a(this,e),this.source=t,this.path=n,this.children=r,this.type=Mu.MERGE}return u(e,[{key:"operationForChild",value:function(t){if(As(this.path)){var n=this.children.subtree(new Is(t));return n.isEmpty()?null:n.value?new Vu(this.source,Cs(),n.value):new e(this.source,Cs(),n)}return J(Ts(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new e(this.source,Ss(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),e}(),Ku=function(){"use strict";function e(t,n,r){a(this,e),this.node_=t,this.fullyInitialized_=n,this.filtered_=r}return u(e,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(As(e))return this.isFullyInitialized()&&!this.filtered_;var t=Ts(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),e}(),Gu=function e(t){"use strict";a(this,e),this.query_=t,this.index_=this.query_._queryParams.getIndex()};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(e,t,n,r,i,o){var a=r.filter((function(e){return e.type===n}));a.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw Q("Should only compare child_ events.");var r=new Hs(t.childName,t.snapshotNode),i=new Hs(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n)})),a.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Ju(e,t){return{eventCache:e,serverCache:t}}function Qu(e,t,n,r){return Ju(new Ku(t,n,r),e.serverCache)}function $u(e,t,n,r){return Ju(e.eventCache,new Ku(t,n,r))}function Xu(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Zu(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ec=function(){return Wu||(Wu=new $s(Wa)),Wu},tc=function(){"use strict";function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ec();a(this,e),this.value=t,this.children=n}return u(e,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:Cs(),value:this.value};if(As(e))return null;var n=Ts(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(Ss(e),t);return null!=i?{path:Os(new Is(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(t){if(As(t))return this;var n=Ts(t),r=this.children.get(n);return null!==r?r.subtree(Ss(t)):new e(null)}},{key:"set",value:function(t,n){if(As(t))return new e(n,this.children);var r=Ts(t),i=(this.children.get(r)||new e(null)).set(Ss(t),n),o=this.children.insert(r,i);return new e(this.value,o)}},{key:"remove",value:function(t){if(As(t))return this.children.isEmpty()?new e(null):new e(null,this.children);var n=Ts(t),r=this.children.get(n);if(r){var i,o=r.remove(Ss(t));return i=o.isEmpty()?this.children.remove(n):this.children.insert(n,o),null===this.value&&i.isEmpty()?new e(null):new e(this.value,i)}return this}},{key:"get",value:function(e){if(As(e))return this.value;var t=Ts(e),n=this.children.get(t);return n?n.get(Ss(e)):null}},{key:"setTree",value:function(t,n){if(As(t))return n;var r,i=Ts(t),o=(this.children.get(i)||new e(null)).setTree(Ss(t),n);return r=o.isEmpty()?this.children.remove(i):this.children.insert(i,o),new e(this.value,r)}},{key:"fold",value:function(e){return this.fold_(Cs(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(Os(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,Cs(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(As(e))return null;var i=Ts(e),o=this.children.get(i);return o?o.findOnPath_(Ss(e),Os(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,Cs(),t)}},{key:"foreachOnPath_",value:function(t,n,r){if(As(t))return this;this.value&&r(n,this.value);var i=Ts(t),o=this.children.get(i);return o?o.foreachOnPath_(Ss(t),Os(n,i),r):new e(null)}},{key:"foreach",value:function(e){this.foreach_(Cs(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(Os(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(t){var n=new e(null);return za(t,(function(e,t){n=n.set(new Is(e),t)})),n}}]),e}(),nc=function(){"use strict";function e(t){a(this,e),this.writeTree_=t}return u(e,null,[{key:"empty",value:function(){return new e(new tc(null))}}]),e}();function rc(e,t,n){if(As(t))return new nc(new tc(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,o=r.value,a=Ds(i,t);return o=o.updateChild(a,n),new nc(e.writeTree_.set(i,o))}var s=new tc(n),u=e.writeTree_.setTree(t,s);return new nc(u)}function ic(e,t,n){var r=e;return za(n,(function(e,n){r=rc(r,Os(t,e),n)})),r}function oc(e,t){if(As(t))return nc.empty();var n=e.writeTree_.setTree(t,new tc(null));return new nc(n)}function ac(e,t){return null!=sc(e,t)}function sc(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ds(n.path,t)):null}function uc(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cu,(function(e,n){t.push(new Hs(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new Hs(e,n.value))})),t}function cc(e,t){if(As(t))return e;var n=sc(e,t);return new nc(null!=n?new tc(n):e.writeTree_.subtree(t))}function lc(e){return e.writeTree_.isEmpty()}function hc(e,t){return dc(Cs(),e.writeTree_,t)}function dc(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(J(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=dc(Os(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Os(e,".priority"),r)),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(e,t){return Sc(t,e)}function vc(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function pc(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));J(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,o=!1,a=e.allWrites.length-1;i&&a>=0;){var s=e.allWrites[a];s.visible&&(a>=n&&yc(s,r.path)?i=!1:Ls(r.path,s.path)&&(o=!0)),a--}if(i){if(o)return function(e){e.visibleWrites=gc(e.allWrites,_c,Cs()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=oc(e.visibleWrites,r.path):za(r.children,(function(t){e.visibleWrites=oc(e.visibleWrites,Os(r.path,t))}));return!0}return!1}function yc(e,t){if(e.snap)return Ls(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&Ls(Os(e.path,n),t))return!0;return!1}function _c(e){return e.visible}function gc(e,t,n){for(var r=nc.empty(),i=0;i<e.length;++i){var o=e[i];if(t(o)){var a=o.path,s=void 0;if(o.snap)Ls(n,a)?r=rc(r,s=Ds(n,a),o.snap):Ls(a,n)&&(s=Ds(a,n),r=rc(r,Cs(),o.snap.getChild(s)));else{if(!o.children)throw Q("WriteRecord should have .snap or .children");if(Ls(n,a))r=ic(r,s=Ds(n,a),o.children);else if(Ls(a,n))if(As(s=Ds(a,n)))r=ic(r,Cs(),o.children);else{var u=Ee(o.children,Ts(s));if(u){var c=u.getChild(Ss(s));r=rc(r,Cs(),c)}}}}}return r}function mc(e,t,n,r,i){if(r||i){var o=cc(e.visibleWrites,t);if(!i&&lc(o))return n;if(i||null!=n||ac(o,Cs())){return hc(gc(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ls(e.path,t)||Ls(t,e.path))}),t),n||pu.EMPTY_NODE)}return null}var a=sc(e.visibleWrites,t);if(null!=a)return a;var s=cc(e.visibleWrites,t);return lc(s)?n:null!=n||ac(s,Cs())?hc(s,n||pu.EMPTY_NODE):null}function kc(e,t,n,r){return mc(e.writeTree,e.treePath,t,n,r)}function bc(e,t){return function(e,t,n){var r=pu.EMPTY_NODE,i=sc(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(cu,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var o=cc(e.visibleWrites,t);return n.forEachChild(cu,(function(e,t){var n=hc(cc(o,new Is(e)),t);r=r.updateImmediateChild(e,n)})),uc(o).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return uc(cc(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function wc(e,t,n,r){return function(e,t,n,r,i){J(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=Os(t,n);if(ac(e.visibleWrites,o))return null;var a=cc(e.visibleWrites,o);return lc(a)?i.getChild(n):hc(a,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function Ic(e,t){return function(e,t){return sc(e.visibleWrites,t)}(e.writeTree,Os(e.treePath,t))}function Cc(e,t,n,r,i,o){return function(e,t,n,r,i,o,a){var s,u=cc(e.visibleWrites,t),c=sc(u,Cs());if(null!=c)s=c;else{if(null==n)return[];s=hc(u,n)}if((s=s.withIndex(a)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=a.getCompare(),d=o?s.getReverseIteratorFrom(r,a):s.getIteratorFrom(r,a),f=d.getNext();f&&l.length<i;)0!==h(f,r)&&l.push(f),f=d.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,o)}function Tc(e,t,n){return function(e,t,n,r){var i=Os(t,n),o=sc(e.visibleWrites,i);return null!=o?o:r.isCompleteForChild(n)?hc(cc(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function Ec(e,t){return Sc(Os(e.treePath,t),e.writeTree)}function Sc(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pc=function(){"use strict";function e(){a(this,e),this.changeMap=new Map}return u(e,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;J("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),J(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Cu(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Iu(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,wu(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Q("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Cu(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),e}(),Nc=new(function(){"use strict";function e(){a(this,e)}return u(e,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),e}()),Rc=function(){"use strict";function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;a(this,e),this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}return u(e,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new Ku(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tc(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Zu(this.viewCache_),i=Cc(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(e,t,n,r,i){var o,a,s=new Pc;if(n.type===Mu.OVERWRITE){var u=n;u.source.fromUser?o=xc(e,t,u.path,u.snap,r,i,s):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!As(u.path),o=Dc(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===Mu.MERGE){var c=n;c.source.fromUser?o=function(e,t,n,r,i,o,a){var s=t;return r.foreach((function(r,u){var c=Os(n,r);Lc(t,Ts(c))&&(s=xc(e,s,c,u,i,o,a))})),r.foreach((function(r,u){var c=Os(n,r);Lc(t,Ts(c))||(s=xc(e,s,c,u,i,o,a))})),s}(e,t,c.path,c.children,r,i,s):(J(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Fc(e,t,c.path,c.children,r,i,a,s))}else if(n.type===Mu.ACK_USER_WRITE){var l=n;o=l.revert?function(e,t,n,r,i,o){var a;if(null!=Ic(r,n))return t;var s,u=new Rc(r,t,i),c=t.eventCache.getNode();if(As(n)||".priority"===Ts(n)){var l;if(t.serverCache.isFullyInitialized())l=kc(r,Zu(t));else{var h=t.serverCache.getNode();J(h instanceof pu,"serverChildren would be complete if leaf node"),l=bc(r,h)}s=e.filter.updateFullNode(c,l,o)}else{var d=Ts(n),f=Tc(r,d,t.serverCache);null==f&&t.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),(s=null!=f?e.filter.updateChild(c,d,f,Ss(n),u,o):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(c,d,pu.EMPTY_NODE,Ss(n),u,o):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(a=kc(r,Zu(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,a,o))}return a=t.serverCache.isFullyInitialized()||null!=Ic(r,Cs()),Qu(t,s,a,e.filter.filtersNodes())}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,o,a){if(null!=Ic(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(As(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Dc(e,t,n,u.getNode().getChild(n),i,o,s,a);if(As(n)){var c=new tc(null);return u.getNode().forEachChild(Ks,(function(e,t){c=c.set(new Is(e),t)})),Fc(e,t,n,c,i,o,s,a)}return t}var l=new tc(null);return r.foreach((function(e,t){var r=Os(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),Fc(e,t,n,l,i,o,s,a)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==Mu.LISTEN_COMPLETE)throw Q("Unknown operation type: "+n.type);o=function(e,t,n,r,i){var o=t.serverCache,a=$u(t,o.getNode(),o.isFullyInitialized()||As(n),o.isFiltered());return Ac(e,a,n,r,Nc,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Xu(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(bu(Xu(t)))}}(t,o,h),{viewCache:o,changes:h}}function Ac(e,t,n,r,i,o){var a,s,u=t.eventCache;if(null!=Ic(r,n))return t;if(As(n))if(J(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=Zu(t),l=bc(r,c instanceof pu?c:pu.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),l,o)}else{var h=kc(r,Zu(t));a=e.filter.updateFullNode(t.eventCache.getNode(),h,o)}else{var d=Ts(n);if(".priority"===d){J(1===Es(n),"Can't have a priority with additional path components");var f=u.getNode(),v=wc(r,n,f,s=t.serverCache.getNode());a=null!=v?e.filter.updatePriority(f,v):u.getNode()}else{var p,y=Ss(n);if(u.isCompleteForChild(d)){s=t.serverCache.getNode();var _=wc(r,n,u.getNode(),s);p=null!=_?u.getNode().getImmediateChild(d).updateChild(y,_):u.getNode().getImmediateChild(d)}else p=Tc(r,d,t.serverCache);a=null!=p?e.filter.updateChild(u.getNode(),d,p,y,i,o):u.getNode()}}return Qu(t,a,u.isFullyInitialized()||As(n),e.filter.filtersNodes())}function Dc(e,t,n,r,i,o,a,s){var u,c=t.serverCache,l=a?e.filter:e.filter.getIndexedFilter();if(As(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var d=Ts(n);if(!c.isCompleteForPath(n)&&Es(n)>1)return t;var f=Ss(n),v=c.getNode().getImmediateChild(d).updateChild(f,r);u=".priority"===d?l.updatePriority(c.getNode(),v):l.updateChild(c.getNode(),d,v,f,Nc,null)}var p=$u(t,u,c.isFullyInitialized()||As(n),l.filtersNodes());return Ac(e,p,n,i,new Rc(i,p,o),s)}function xc(e,t,n,r,i,o,a){var s,u,c=t.eventCache,l=new Rc(i,t,o);if(As(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,a),s=Qu(t,u,!0,e.filter.filtersNodes());else{var h=Ts(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=Qu(t,u,c.isFullyInitialized(),c.isFiltered());else{var d,f=Ss(n),v=c.getNode().getImmediateChild(h);if(As(f))d=r;else{var p=l.getCompleteChild(h);d=null!=p?".priority"===Ps(f)&&p.getChild(Rs(f)).isEmpty()?p:p.updateChild(f,r):pu.EMPTY_NODE}if(v.equals(d))s=t;else s=Qu(t,e.filter.updateChild(c.getNode(),h,d,f,l,a),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function Lc(e,t){return e.eventCache.isCompleteForChild(t)}function Mc(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function Fc(e,t,n,r,i,o,a,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=As(n)?r:new tc(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=Mc(0,t.serverCache.getNode().getImmediateChild(n),r);c=Dc(e,c,new Is(n),u,i,o,a,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var h=Mc(0,t.serverCache.getNode().getImmediateChild(n),r);c=Dc(e,c,new Is(n),h,i,o,a,s)}})),c}var Uc,qc=function(){"use strict";function e(t,n){a(this,e),this.query_=t,this.eventRegistrations_=[];var r,i=this.query_._queryParams,o=new Tu(i.getIndex()),s=(r=i).loadsAllData()?new Tu(r.getIndex()):r.hasLimit()?new Su(r):new Eu(r);this.processor_=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return{filter:e}}(s);var u=n.serverCache,c=n.eventCache,l=o.updateFullNode(pu.EMPTY_NODE,u.getNode(),null),h=s.updateFullNode(pu.EMPTY_NODE,c.getNode(),null),d=new Ku(l,u.isFullyInitialized(),o.filtersNodes()),f=new Ku(h,c.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ju(f,d),this.eventGenerator_=new Gu(this.query_)}return u(e,[{key:"query",get:function(){return this.query_}}]),e}();function jc(e,t){var n=Zu(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!As(t)&&!n.getImmediateChild(Ts(t)).isEmpty())?n.getChild(t):null}function Wc(e){return 0===e.eventRegistrations_.length}function Bc(e,t,n){var r=[];if(n){J(null==t,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach((function(e){var t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){for(var o=[],a=0;a<e.eventRegistrations_.length;++a){var s=e.eventRegistrations_[a];if(s.matches(t)){if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(a+1));break}}else o.push(s)}e.eventRegistrations_=o}else e.eventRegistrations_=[];return r}function Hc(e,t,n,r){t.type===Mu.MERGE&&null!==t.source.queryId&&(J(Zu(e.viewCache_),"We should always have a full cache before handling merges"),J(Xu(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,o,a=e.viewCache_,s=Oc(e.processor_,a,t,n,r);return i=e.processor_,o=s.viewCache,J(o.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),J(o.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),J(s.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Vc(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Vc(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],o=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Yu(e,i,"child_removed",t,r,n),Yu(e,i,"child_added",t,r,n),Yu(e,i,"child_moved",o,r,n),Yu(e,i,"child_changed",t,r,n),Yu(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zc,Kc=function e(){"use strict";a(this,e),this.views=new Map};function Gc(e){return 0===e.views.size}function Yc(e,t,n,r){var i=t.source.queryId;if(null!==i){var o=e.views.get(i);return J(null!=o,"SyncTree gave us an op for an invalid query."),Hc(o,t,n,r)}var a=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var d=l.value;a=a.concat(Hc(d,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return a}function Jc(e,t,n,r,i){var o=t._queryIdentifier,a=e.views.get(o);if(!a){var s=kc(n,i?r:null),u=!1;s?u=!0:r instanceof pu?(s=bc(n,r),u=!1):(s=pu.EMPTY_NODE,u=!1);var c=Ju(new Ku(s,u,!1),new Ku(r,i,!1));return new qc(t,c)}return a}function Qc(e,t,n,r,i,o){var a=Jc(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,a),function(e,t){e.eventRegistrations_.push(t)}(a,n),function(e,t){var n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(cu,(function(e,t){r.push(wu(e,t))})),n.isFullyInitialized()&&r.push(bu(n.getNode())),Vc(e,r,n.getNode(),t)}(a,n)}function $c(e,t,n,r){var i=t._queryIdentifier,o=[],a=[],s=nl(e),u=!0,c=!1,l=void 0;if("default"===i)try{for(var h,d=e.views.entries()[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=_(h.value,2),v=f[0],p=f[1];a=a.concat(Bc(p,n,r)),Wc(p)&&(e.views.delete(v),p.query._queryParams.loadsAllData()||o.push(p.query))}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}else{var y=e.views.get(i);y&&(a=a.concat(Bc(y,n,r)),Wc(y)&&(e.views.delete(i),y.query._queryParams.loadsAllData()||o.push(y.query)))}return s&&!nl(e)&&o.push(new(J(Uc,"Reference.ts has not been loaded"),Uc)(t._repo,t._path)),{removed:o,events:a}}function Xc(e){var t=[],n=!0,r=!1,i=void 0;try{for(var o,a=e.views.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;s.query._queryParams.loadsAllData()||t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}function Zc(e,t){var n=null,r=!0,i=!1,o=void 0;try{for(var a,s=e.views.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;n=n||jc(u,t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}function el(e,t){if(t._queryParams.loadsAllData())return rl(e);var n=t._queryIdentifier;return e.views.get(n)}function tl(e,t){return null!=el(e,t)}function nl(e){return null!=rl(e)}function rl(e){var t=!0,n=!1,r=void 0;try{for(var i,o=e.views.values()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;if(a.query._queryParams.loadsAllData())return a}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var il=1,ol=function e(t){"use strict";a(this,e),this.listenProvider_=t,this.syncPointTree_=new tc(null),this.pendingWriteTree_={visibleWrites:nc.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function al(e,t,n,r,i){return function(e,t,n,r,i){J(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=rc(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?vl(e,new Vu({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function sl(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=vc(e.pendingWriteTree_,t),i=pc(e.pendingWriteTree_,t);if(i){var o=new tc(null);return null!=r.snap?o=o.set(Cs(),!0):za(r.children,(function(e){o=o.set(new Is(e),!0)})),vl(e,new Bu(r.path,o,n))}return[]}function ul(e,t,n){return vl(e,new Vu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function cl(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=t._path,a=e.syncPointTree_.get(o),s=[];if(a&&("default"===t._queryIdentifier||tl(a,t))){var u=$c(a,t,n,r);Gc(a)&&(e.syncPointTree_=e.syncPointTree_.remove(o));var c=u.removed;if(s=u.events,!i){var l=-1!==c.findIndex((function(e){return e._queryParams.loadsAllData()})),h=e.syncPointTree_.findOnPath(o,(function(e,t){return nl(t)}));if(l&&!h){var d=e.syncPointTree_.subtree(o);if(!d.isEmpty())for(var f=Il(d),v=0;v<f.length;++v){var p=f[v],y=p.query,_=_l(e,p);e.listenProvider_.startListening(Cl(y),gl(e,y),_.hashFn,_.onComplete)}}if(!h&&c.length>0&&!r)if(l){var g=null;e.listenProvider_.stopListening(Cl(t),g)}else c.forEach((function(t){var n=e.queryToTagMap.get(ml(t));e.listenProvider_.stopListening(Cl(t),n)}))}Tl(e,c)}return s}function ll(e,t,n,r){var i=kl(e,r);if(null!=i){var o=bl(i),a=o.path,s=o.queryId,u=Ds(a,t);return wl(e,a,new Vu(ju(s),u,n))}return[]}function hl(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t._path,o=null,a=!1;e.syncPointTree_.foreachOnPath(i,(function(e,t){var n=Ds(e,i);o=o||Zc(t,n),a=a||nl(t)}));var s,u=e.syncPointTree_.get(i);if(u?(a=a||nl(u),o=o||Zc(u,Cs())):(u=new Kc,e.syncPointTree_=e.syncPointTree_.set(i,u)),null!=o)s=!0;else{s=!1,o=pu.EMPTY_NODE;var c=e.syncPointTree_.subtree(i);c.foreachChild((function(e,t){var n=Zc(t,Cs());n&&(o=o.updateImmediateChild(e,n))}))}var l=tl(u,t);if(!l&&!t._queryParams.loadsAllData()){var h=ml(t);J(!e.queryToTagMap.has(h),"View does not exist, but we have a tag");var d=El();e.queryToTagMap.set(h,d),e.tagToQueryMap.set(d,h)}var f=fc(e.pendingWriteTree_,i),v=Qc(u,t,n,f,o,s);if(!l&&!a&&!r){var p=el(u,t);v=v.concat(Sl(e,t,p))}return v}function dl(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=Zc(n,Ds(e,t));if(r)return r}));return mc(r,t,i,n,!0)}function fl(e,t){var n=t._path,r=null;e.syncPointTree_.foreachOnPath(n,(function(e,t){var i=Ds(e,n);r=r||Zc(t,i)}));var i=e.syncPointTree_.get(n);i?r=r||Zc(i,Cs()):(i=new Kc,e.syncPointTree_=e.syncPointTree_.set(n,i));var o=null!=r,a=o?new Ku(r,!0,!1):null;return function(e){return Xu(e.viewCache_)}(Jc(i,t,fc(e.pendingWriteTree_,t._path),o?a.getNode():pu.EMPTY_NODE,o))}function vl(e,t){return pl(t,e.syncPointTree_,null,fc(e.pendingWriteTree_,Cs()))}function pl(e,t,n,r){if(As(e.path))return yl(e,t,n,r);var i=t.get(Cs());null==n&&null!=i&&(n=Zc(i,Cs()));var o=[],a=Ts(e.path),s=e.operationForChild(a),u=t.children.get(a);if(u&&s){var c=n?n.getImmediateChild(a):null,l=Ec(r,a);o=o.concat(pl(s,u,c,l))}return i&&(o=o.concat(Yc(i,e,r,n))),o}function yl(e,t,n,r){var i=t.get(Cs());null==n&&null!=i&&(n=Zc(i,Cs()));var o=[];return t.children.inorderTraversal((function(t,i){var a=n?n.getImmediateChild(t):null,s=Ec(r,t),u=e.operationForChild(t);u&&(o=o.concat(yl(u,i,a,s)))})),i&&(o=o.concat(Yc(i,e,r,n))),o}function _l(e,t){var n=t.query,r=gl(e,n);return{hashFn:function(){var e=function(e){return e.viewCache_.serverCache.getNode()}(t)||pu.EMPTY_NODE;return e.hash()},onComplete:function(t){if("ok"===t)return r?function(e,t,n){var r=kl(e,n);if(r){var i=bl(r),o=i.path,a=i.queryId,s=Ds(o,t);return wl(e,o,new Hu(ju(a),s))}return[]}(e,n._path,r):function(e,t){return vl(e,new Hu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);var i=function(e,t){var n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");var r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return cl(e,n,null,i)}}}function gl(e,t){var n=ml(t);return e.queryToTagMap.get(n)}function ml(e){return e._path.toString()+"$"+e._queryIdentifier}function kl(e,t){return e.tagToQueryMap.get(t)}function bl(e){var t=e.indexOf("$");return J(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Is(e.substr(0,t))}}function wl(e,t,n){var r=e.syncPointTree_.get(t);return J(r,"Missing sync point for query tag that we're tracking"),Yc(r,n,fc(e.pendingWriteTree_,t),null)}function Il(e){return e.fold((function(e,t,n){if(t&&nl(t))return[rl(t)];var r=[];return t&&(r=Xc(t)),za(n,(function(e,t){r=r.concat(t)})),r}))}function Cl(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(J(zc,"Reference.ts has not been loaded"),zc)(e._repo,e._path):e}function Tl(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=ml(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}function El(){return il++}function Sl(e,t,n){var r=t._path,i=gl(e,t),o=_l(e,n),a=e.listenProvider_.startListening(Cl(t),i,o.hashFn,o.onComplete),s=e.syncPointTree_.subtree(r);if(i)J(!nl(s.value),"If we're adding a query, it shouldn't be shadowed");else for(var u=s.fold((function(e,t,n){if(!As(e)&&t&&nl(t))return[rl(t).query];var r=[];return t&&(r=r.concat(Xc(t).map((function(e){return e.query})))),za(n,(function(e,t){r=r.concat(t)})),r})),c=0;c<u.length;++c){var l=u[c];e.listenProvider_.stopListening(Cl(l),gl(e,l))}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pl=function(){"use strict";function e(t){a(this,e),this.node_=t}return u(e,[{key:"getImmediateChild",value:function(t){return new e(this.node_.getImmediateChild(t))}},{key:"node",value:function(){return this.node_}}]),e}(),Nl=function(){"use strict";function e(t,n){a(this,e),this.syncTree_=t,this.path_=n}return u(e,[{key:"getImmediateChild",value:function(t){var n=Os(this.path_,t);return new e(this.syncTree_,n)}},{key:"node",value:function(){return dl(this.syncTree_,this.path_)}}]),e}(),Rl=function(e,t,n){return e&&"object"==typeof e?(J(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ol(e[".sv"],t,n):"object"==typeof e[".sv"]?Al(e[".sv"],t):void J(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ol=function(e,t,n){if("timestamp"===e)return n.timestamp;J(!1,"Unexpected server value: "+e)},Al=function(e,t,n){e.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&J(!1,"Unexpected increment value: "+r);var i=t.node();if(J(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i.getValue();return"number"!=typeof o?r:o+r},Dl=function(e,t,n,r){return Ll(t,new Nl(n,e),r)},xl=function(e,t,n){return Ll(e,new Pl(t),n)};function Ll(e,t,n){var r,i=e.getPriority().val(),o=Rl(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var a=e,s=Rl(a.getValue(),t,n);return s!==a.getValue()||o!==a.getPriority().val()?new ou(s,_u(o)):e}var u=e;return r=u,o!==u.getPriority().val()&&(r=r.updatePriority(new ou(o))),u.forEachChild(cu,(function(e,i){var o=Ll(i,t.getImmediateChild(e),n);o!==i&&(r=r.updateImmediateChild(e,o))})),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ml=function e(){"use strict";var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};a(this,e),this.name=t,this.parent=n,this.node=r};function Fl(e,t){for(var n=t instanceof Is?t:new Is(t),r=e,i=Ts(n);null!==i;){var o=Ee(r.node.children,i)||{children:{},childCount:0};r=new Ml(i,r,o),i=Ts(n=Ss(n))}return r}function Ul(e){return e.node.value}function ql(e,t){e.node.value=t,Vl(e)}function jl(e){return e.node.childCount>0}function Wl(e,t){za(e.node.children,(function(n,r){t(new Ml(n,e,r))}))}function Bl(e,t,n,r){n&&!r&&t(e),Wl(e,(function(e){Bl(e,t,!0,r)})),n&&r&&t(e)}function Hl(e){return new Is(null===e.parent?e.name:Hl(e.parent)+"/"+e.name)}function Vl(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===Ul(e)&&!jl(e)}(n),i=Te(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Vl(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Vl(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}var zl=/[\[\].#$\/\u0000-\u001F\u007F]/,Kl=/[\[\].#$\u0000-\u001F\u007F]/,Gl=10485760,Yl=function(e){return"string"==typeof e&&0!==e.length&&!zl.test(e)},Jl=function(e){return"string"==typeof e&&0!==e.length&&!Kl.test(e)},Ql=function(e,t,n,r){r&&void 0===t||$l(Fe(e,"value"),t,n)},$l=function(e,t,n){var r=n instanceof Is?new Ms(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Us(r));if("function"==typeof t)throw new Error(e+"contains a function "+Us(r)+" with contents = "+t.toString());if(Fa(t))throw new Error(e+"contains "+t.toString()+" "+Us(r));if("string"==typeof t&&t.length>3495253.3333333335&&qe(t)>Gl)throw new Error(e+"contains a string greater than "+Gl+" utf8 bytes "+Us(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,o=!1;if(za(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(o=!0,!Yl(t)))throw new Error(e+" contains an invalid key ("+t+") "+Us(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,s;s=t,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(s),a.byteLength_+=qe(s),Fs(a),$l(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=qe(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&o)throw new Error(e+' contains ".value" child '+Us(r)+" in addition to actual children.")}},Xl=function(e,t,n,r){if(!(r&&void 0===n||Jl(n)))throw new Error(Fe(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Zl=function(e,t){if(".info"===Ts(t))throw new Error(e+" failed = Can't modify data under /.info/")},eh=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Yl(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Jl(e)}(n))throw new Error(Fe(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},th=function e(){"use strict";a(this,e),this.eventLists_=[],this.recursionDepth_=0};function nh(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],o=i.getPath();null===n||xs(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function rh(e,t,n){nh(e,n),ih(e,(function(e){return Ls(e,t)||Ls(t,e)}))}function ih(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(oh(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function oh(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();Na&&Aa("event: "+n.toString()),Ja(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ah="repo_interrupt",sh=function(){"use strict";function e(t,n,r,i){a(this,e),this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new th,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Du(),this.transactionQueueTree_=new Ml,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return u(e,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),e}();function uh(e,t,n){if(e.stats_=ls(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ou(e.repoInfo_,(function(t,n,r,i){hh(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return dh(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ws(e.repoInfo_,t,(function(t,n,r,i){hh(e,t,n,r,i)}),(function(t){dh(e,t)}),(function(t){!function(e,t){za(t,(function(t,n){fh(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,o;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new qu(e.stats_,e.server_)},o=r.toString(),cs[o]||(cs[o]=i()),cs[o]),e.infoData_=new Au,e.infoSyncTree_=new ol({startListening:function(t,n,r,i){var o=[],a=e.infoData_.getNode(t._path);return a.isEmpty()||(o=ul(e.infoSyncTree_,t._path,a),setTimeout((function(){i("ok")}),0)),o},stopListening:function(){}}),fh(e,"connected",!1),e.serverSyncTree_=new ol({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var o=i(n,r);rh(e.eventQueue_,t._path,o)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function ch(e){var t=e.infoData_.getNode(new Is(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function lh(e){return(t=(t={timestamp:ch(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function hh(e,t,n,r,i){e.dataUpdateCount++;var o=new Is(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var a=[];if(i)if(r){var s=Pe(n,(function(e){return _u(e)}));a=function(e,t,n,r){var i=kl(e,r);if(i){var o=bl(i),a=o.path,s=o.queryId,u=Ds(a,t),c=tc.fromObject(n);return wl(e,a,new zu(ju(s),u,c))}return[]}(e.serverSyncTree_,o,s,i)}else{var u=_u(n);a=ll(e.serverSyncTree_,o,u,i)}else if(r){var c=Pe(n,(function(e){return _u(e)}));a=function(e,t,n){var r=tc.fromObject(n);return vl(e,new zu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,c)}else{var l=_u(n);a=ul(e.serverSyncTree_,o,l)}var h=o;a.length>0&&(h=wh(e,o)),rh(e.eventQueue_,h,a)}function dh(e,t){fh(e,"connected",t),!1===t&&function(e){_h(e,"onDisconnectEvents");var t=lh(e),n=Du();Lu(e.onDisconnect_,Cs(),(function(r,i){var o=Dl(r,i,e.serverSyncTree_,t);xu(n,r,o)}));var r=[];Lu(n,Cs(),(function(t,n){r=r.concat(ul(e.serverSyncTree_,t,n));var i=Sh(e,t);wh(e,i)})),e.onDisconnect_=Du(),rh(e.eventQueue_,Cs(),r)}(e)}function fh(e,t,n){var r=new Is("/.info/"+t),i=_u(n);e.infoData_.updateSnapshot(r,i);var o=ul(e.infoSyncTree_,r,i);rh(e.eventQueue_,r,o)}function vh(e){return e.nextWriteId_++}function ph(e,t,n,r,i){_h(e,"set",{path:t.toString(),value:n,priority:r});var o=lh(e),a=_u(n,r),s=dl(e.serverSyncTree_,t),u=xl(a,s,o),c=vh(e),l=al(e.serverSyncTree_,t,u,c,!0);nh(e.eventQueue_,l),e.server_.put(t.toString(),a.val(!0),(function(n,r){var o="ok"===n;o||Ma("set at "+t+" failed: "+n);var a=sl(e.serverSyncTree_,c,!o);rh(e.eventQueue_,t,a),gh(e,i,n,r)}));var h=Sh(e,t);wh(e,h),rh(e.eventQueue_,h,[])}function yh(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ah)}function _h(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i="";e.persistentConnection_&&(i=e.persistentConnection_.id+":"),Aa.apply(void 0,[i].concat(k(n)))}function gh(e,t,n,r){t&&Ja((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);var o=new Error(i);o.code=e,t(o)}}))}function mh(e,t,n){return dl(e.serverSyncTree_,t,n)||pu.EMPTY_NODE}function kh(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Eh(e,t),Ul(t)){var n=Ch(e,t);J(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&bh(e,Hl(t),n)}else jl(t)&&Wl(t,(function(t){kh(e,t)}))}function bh(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=mh(e,t,r),o=i,a=i.hash(),s=0;s<n.length;s++){var u=n[s];J(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=Ds(t,u.path);o=o.updateChild(c,u.currentOutputSnapshotRaw)}var l=o.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){_h(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var o=function(t){n[t].status=2,i=i.concat(sl(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&a.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},a=[],s=0;s<n.length;s++)o(s);Eh(e,Fl(e.transactionQueueTree_,t)),kh(e,e.transactionQueueTree_),rh(e.eventQueue_,t,i);for(var u=0;u<a.length;u++)Ja(a[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{Ma("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}wh(e,t)}}),a)}function wh(e,t){var n=Ih(e,t),r=Hl(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=Ds(n,u.path),l=!1,h=void 0;if(J(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,o=o.concat(sl(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",o=o.concat(sl(e.serverSyncTree_,u.currentWriteId,!0));else{var d=mh(e,u.path,a);u.currentInputSnapshot=d;var f=t[r].update(d.val());if(void 0!==f){$l("transaction failed: Data returned ",f,u.path);var v=_u(f);"object"==typeof f&&null!=f&&Te(f,".priority")||(v=v.updatePriority(d.getPriority()));var p=u.currentWriteId,y=lh(e),_=xl(v,d,y);u.currentOutputSnapshotRaw=v,u.currentOutputSnapshotResolved=_,u.currentWriteId=vh(e),a.splice(a.indexOf(p),1),o=(o=o.concat(al(e.serverSyncTree_,u.path,_,u.currentWriteId,u.applyLocally))).concat(sl(e.serverSyncTree_,p,!0))}else l=!0,h="nodata",o=o.concat(sl(e.serverSyncTree_,u.currentWriteId,!0))}rh(e.eventQueue_,n,o),o=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],o=[],a=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Eh(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Ja(i[u]);kh(e,e.transactionQueueTree_)}(e,Ch(e,n),r),r}function Ih(e,t){var n,r=e.transactionQueueTree_;for(n=Ts(t);null!==n&&void 0===Ul(r);)r=Fl(r,n),n=Ts(t=Ss(t));return r}function Ch(e,t){var n=[];return Th(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Th(e,t,n){var r=Ul(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Wl(t,(function(t){Th(e,t,n)}))}function Eh(e,t){var n=Ul(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,ql(t,n.length>0?n:void 0)}Wl(t,(function(t){Eh(e,t)}))}function Sh(e,t){var n=Hl(Ih(e,t)),r=Fl(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){Ph(e,t)})),Ph(e,r),Bl(r,(function(t){Ph(e,t)})),n}function Ph(e,t){var n=Ul(t);if(n){for(var r=[],i=[],o=-1,a=0;a<n.length;a++)3===n[a].status||(1===n[a].status?(J(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=3,n[a].abortReason="set"):(J(0===n[a].status,"Unexpected transaction status in abort"),n[a].unwatcher(),i=i.concat(sl(e.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));-1===o?ql(t,void 0):n.length=o+1,rh(e.eventQueue_,Hl(t),i);for(var s=0;s<r.length;s++)Ja(r[s])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nh,Rh,Oh=function(e,t){var n=Ah(e),r=n.namespace;"firebase.com"===n.domain&&La(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||La("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ma("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new os(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Is(n.pathString)}},Ah=function(e){var t="",n="",r="",i="",o="",a=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var d=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var o,a=e.split("&")[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):Ma("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(a="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{var v=t.indexOf(".");r=t.substring(0,v).toLowerCase(),n=t.substring(v+1),o=r}"ns"in d&&(o=d.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:a,scheme:s,pathString:i,namespace:o}},Dh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",xh=(Nh=0,Rh=[],function(){"use strict";function e(t,n,r,i){a(this,e),this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}return u(e,[{key:"getPath",value:function(){var e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}},{key:"getEventType",value:function(){return this.eventType}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}]),e}()),Lh=function(){"use strict";function e(t,n,r){a(this,e),this.eventRegistration=t,this.error=n,this.path=r}return u(e,[{key:"getPath",value:function(){return this.path}},{key:"getEventType",value:function(){return"cancel"}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.path.toString()+":cancel"}}]),e}(),Mh=function(){"use strict";function e(t,n){a(this,e),this.snapshotCallback=t,this.cancelCallback=n}return u(e,[{key:"onValue",value:function(e,t){this.snapshotCallback.call(null,e,t)}},{key:"onCancel",value:function(e){return J(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}},{key:"hasCancelCallback",get:function(){return!!this.cancelCallback}},{key:"matches",value:function(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}]),e}(),Fh=function(){"use strict";function e(t,n,r,i){a(this,e),this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}return u(e,[{key:"key",get:function(){return As(this._path)?null:Ps(this._path)}},{key:"ref",get:function(){return new Uh(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=Ru(this._queryParams),t=Ha(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return Ru(this._queryParams)}},{key:"isEqual",value:function(t){if(!((t=je(t))instanceof e))return!1;var n=this._repo===t._repo,r=xs(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),e}();var Uh=function(e){"use strict";h(n,e);var t=R(n);function n(e,r){return a(this,n),t.call(this,e,r,new Pu,!1)}return u(n,[{key:"parent",get:function(){var e=Rs(this._path);return null===e?null:new n(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),n}(Fh),qh=function(){"use strict";function e(t,n,r){a(this,e),this._node=t,this.ref=n,this._index=r}return u(e,[{key:"priority",get:function(){return this._node.getPriority().val()}},{key:"key",get:function(){return this.ref.key}},{key:"size",get:function(){return this._node.numChildren()}},{key:"child",value:function(t){var n=new Is(t),r=Wh(this.ref,t);return new e(this._node.getChild(n),r,cu)}},{key:"exists",value:function(){return!this._node.isEmpty()}},{key:"exportVal",value:function(){return this._node.val(!0)}},{key:"forEach",value:function(t){var n=this;return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(function(r,i){return t(new e(i,Wh(n.ref,r),cu))}))}},{key:"hasChild",value:function(e){var t=new Is(e);return!this._node.getChild(t).isEmpty()}},{key:"hasChildren",value:function(){return!this._node.isLeafNode()&&!this._node.isEmpty()}},{key:"toJSON",value:function(){return this.exportVal()}},{key:"val",value:function(){return this._node.val()}}]),e}();function jh(e,t){return(e=je(e))._checkNotDeleted("ref"),void 0!==t?Wh(e._root,t):e._root}function Wh(e,t){var n,r,i,o;return null===Ts((e=je(e))._path)?(n="child",r="path",o=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Xl(n,r,i,o)):Xl("child","path",t,!1),new Uh(e._repo,Os(e._path,t))}function Bh(e,t){e=je(e),Zl("set",e._path),Ql("set",t,e._path,!1);var n=new le;return ph(e._repo,e._path,t,null,n.wrapCallback((function(){}))),n.promise}function Hh(e){e=je(e);var t=new Mh((function(){})),n=new Vh(t);return function(e,t,n){var r=fl(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((function(r){var i,o=_u(r).withIndex(t._queryParams.getIndex());if(hl(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())i=ul(e.serverSyncTree_,t._path,o);else{var a=gl(e.serverSyncTree_,t);i=ll(e.serverSyncTree_,t._path,o,a)}return rh(e.eventQueue_,t._path,i),cl(e.serverSyncTree_,t,n,null,!0),o}),(function(n){return _h(e,"get for query "+we(t)+" failed: "+n),Promise.reject(new Error(n))}))}(e._repo,e,n).then((function(t){return new qh(t,new Uh(e._repo,e._path),e._queryParams.getIndex())}))}var Vh=function(){"use strict";function e(t){a(this,e),this.callbackContext=t}return u(e,[{key:"respondsTo",value:function(e){return"value"===e}},{key:"createEvent",value:function(e,t){var n=t._queryParams.getIndex();return new xh("value",this,new qh(e.snapshotNode,new Uh(t._repo,t._path),n))}},{key:"getEventRunner",value:function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,null)}}},{key:"createCancelEvent",value:function(e,t){return this.callbackContext.hasCancelCallback?new Lh(this,e,t):null}},{key:"matches",value:function(t){return t instanceof e&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}},{key:"hasAnyCallback",value:function(){return null!==this.callbackContext}}]),e}();!function(e){J(!Uc,"__referenceConstructor has already been defined"),Uc=e}(Uh),function(e){J(!zc,"__referenceConstructor has already been defined"),zc=e}(Uh);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zh={},Kh=!1;function Gh(e,t,n,r){e.repoInfo_=new os("".concat(t,":").concat(n),!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function Yh(e,t,n,r,i){var o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||La("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Aa("Using default host for project ",e.options.projectId),o="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var a,s=Oh(o,i),u=s.repoInfo,c=void 0;void 0!==O&&O.env&&(c=O.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(a=!0,o="http://".concat(c,"?ns=").concat(u.namespace),u=(s=Oh(o,i)).repoInfo):a=!s.repoInfo.secure;var l=i&&a?new Za(Za.OWNER):new Xa(e.name,e.options,t);eh("Invalid Firebase Database URL",s),As(s.path)||La("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=zh[t.name];i||(i={},zh[t.name]=i);var o=i[e.toURLString()];o&&La("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new sh(e,Kh,n,r),i[e.toURLString()]=o,o}(u,e,l,new $a(e.name,n));return new Jh(h,e)}var Jh=function(){"use strict";function e(t,n){a(this,e),this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}return u(e,[{key:"_repo",get:function(){return this._instanceStarted||(uh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Uh(this._repo,Cs())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=zh[t])&&n[e.key]===e||La("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),yh(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&La("Cannot call "+e+" on a deleted database.")}}]),e}();function Qh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt(),t=arguments.length>1?arguments[1]:void 0,n=Lt(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){var r=se("database");r&&$h.apply(void 0,[n].concat(k(r)))}return n}function $h(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(e=je(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&La("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,o=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&La('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Za(Za.OWNER);else if(r.mockUserToken){var a="string"==typeof r.mockUserToken?r.mockUserToken:he(r.mockUserToken,e.app.options.projectId);o=new Za(a)}Gh(i,t,n,o)}Ws.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ws.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){ga=qt,xt(new ze("database",(function(e,t){var n=t.instanceIdentifier;return Yh(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),Bt(ya,_a,e),Bt(ya,_a,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();var Xh=new(function(){"use strict";function e(){a(this,e),this.state={email:"",password:"",isOnline:!1,user:{},hasAccount:!1,firebaseConfig:{apiKey:"AIzaSyDeT-dGvxxhBoToHkpCqsX7i-ne2DJAg_c",authDomain:"filmo-8db62.firebaseapp.com",databaseURL:"https://filmo-8db62-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmo-8db62",storageBucket:"filmo-8db62.appspot.com",messagingSenderId:"149168873978",appId:"1:149168873978:web:0a78e8fdaccd0ecfa7c443"}}}return u(e,[{key:"setEmailAndPassword",value:function(e,t){this.state.email=e,this.state.password=t}},{key:"online",value:function(e){this.state.isOnline=e}},{key:"userName",value:function(){var e=this.state.email.split(""),t=e.indexOf("@");return e.slice(0,t).join("")}},{key:"hasAccountTrueOrFalse",value:function(e){this.state.hasAccount=e}},{key:"auth",value:function(){return pa(jt(this.state.firebaseConfig))}},{key:"db",value:function(){return Qh(jt(this.state.firebaseConfig))}},{key:"createUser",value:function(){var e=this;return n((function(){var t,n,r;return i(this,(function(i){switch(i.label){case 0:return t=e.state,n=t.email,r=t.password,[4,bi(e.auth(),n,r)];case 1:return[2,i.sent()]}}))}))()}},{key:"login",value:function(){var e=this;return n((function(){var t,n,r;return i(this,(function(i){switch(i.label){case 0:return t=e.state,n=t.email,r=t.password,[4,Ii(e.auth(),n,r)];case 1:return[2,i.sent()]}}))}))()}},{key:"logOut",value:function(){return je(this.auth()).signOut()}},{key:"deleteAccount",value:function(){var e=this;return n((function(){return i(this,(function(t){switch(t.label){case 0:return[4,Ei(e.state.user)];case 1:return[2,t.sent()]}}))}))()}},{key:"readDataBas",value:function(){var e=this;return n((function(){var t,n,r;return i(this,(function(i){return t=jh(Qh()),n=e.userName(),r=e.state.user,Hh(Wh(t,"".concat(n).concat(r.uid))).then((function(e){e.exists()?console.log(e.val()):console.log("No data available")})).catch((function(e){console.error(e)})),[2]}))}))()}},{key:"writeToDataBase",value:function(){var e=Qh(),t=this.userName(),n=this.state,r=n.email,i=n.isOnline,o=n.hasAccount;Bh(jh(e,t+n.user.uid),{username:r,isOnline:i,hasAccount:o})}},{key:"checkStatusAcc",value:function(){var e,t,n,r=pa(),i={profile:document.querySelector(".profile"),buttonBox:document.querySelector(".btnBox")};return e=function(e){e?i.profile.classList.remove("visually-hidden"):i.buttonBox.classList.remove("visually-hidden")},je(r).onAuthStateChanged(e,t,n)}},{key:"loginWithGoogle",value:function(){return n((function(){var e;return i(this,(function(t){switch(t.label){case 0:return e=new ii,[4,go(pa(),e)];case 1:return[2,t.sent()]}}))}))()}},{key:"loginWithFacebook",value:function(){return n((function(){var e;return i(this,(function(t){switch(t.label){case 0:return e=new ri,[4,go(pa(),e)];case 1:return[2,t.sent()]}}))}))()}},{key:"loginWithGitHub",value:function(){return n((function(){var e;return i(this,(function(t){switch(t.label){case 0:return e=new oi,[4,go(pa(),e)];case 1:return[2,t.sent()]}}))}))()}}]),e}()),Zh={profile:document.querySelector(".profile"),buttonBox:document.querySelector(".btnBox"),buttonSignIn:document.querySelector(".signInButton"),buttonSignUp:document.querySelector(".signUpButton"),formSignUp:document.querySelector(".formSignUp"),formSignIn:document.querySelector(".formSignIn"),boxSignIn:document.querySelector(".boxSignIn"),boxSignUp:document.querySelector(".boxSignUp"),signOut:document.querySelector(".signOut"),removeAccount:document.querySelector(".removeAccount")};function ed(e){e.preventDefault(),Xh.logOut(),Xh.online(!1),Zh.buttonBox.classList.remove("visually-hidden"),Zh.profile.classList.add("visually-hidden"),Zh.signOut.removeEventListener("click",ed),Zh.removeAccount.removeEventListener("click",td),Xh.writeToDataBase()}function td(e){e.preventDefault();var t,r=(t=n((function(){var e,t;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,Xh.deleteAccount()];case 1:return e=n.sent(),Zh.buttonBox.classList.remove("visually-hidden"),Zh.profile.classList.add("visually-hidden"),[2,e];case 2:return t=n.sent(),console.log(t.code),console.log(t.message),[3,3];case 3:return[2]}}))})),function(){return t.apply(this,arguments)});Xh.hasAccountTrueOrFalse(!1),Xh.online(!1),Xh.writeToDataBase(),r(),Zh.signOut.removeEventListener("click",ed),Zh.removeAccount.removeEventListener("click",td)}function nd(){return(nd=n((function(){var e,t;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,Xh.createUser()];case 1:return e=n.sent(),console.log(e.user),Xh.state.user=e.user,Xh.online(!0),Xh.hasAccountTrueOrFalse(!0),Xh.writeToDataBase(),Zh.profile.classList.remove("visually-hidden"),Zh.buttonSignUp.classList.remove("signActive"),Zh.buttonBox.classList.add("visually-hidden"),Zh.boxSignUp.classList.add("visually-hidden"),Zh.signOut.addEventListener("click",ed),Zh.removeAccount.addEventListener("click",td),[2,e];case 2:return t=n.sent(),console.log(t.code),console.log(t.message),[3,3];case 3:return[2]}}))}))).apply(this,arguments)}function rd(){return(rd=n((function(){var e,t;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,Xh.login()];case 1:return e=n.sent(),Xh.state.user=e.user,Xh.online(!0),Xh.hasAccountTrueOrFalse(!0),Xh.writeToDataBase(),Zh.profile.classList.remove("visually-hidden"),Zh.buttonSignIn.classList.remove("signActive"),Zh.buttonBox.classList.add("visually-hidden"),Zh.boxSignIn.classList.add("visually-hidden"),Zh.signOut.addEventListener("click",ed),Zh.removeAccount.addEventListener("click",td),[2,e];case 2:return t=n.sent(),console.log(t.code),console.log(t.message),[3,3];case 3:return[2]}}))}))).apply(this,arguments)}function id(){return od.apply(this,arguments)}function od(){return(od=n((function(){var e,t;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,Xh.loginWithGoogle()];case 1:return e=n.sent(),Xh.state.user=e.user,ud(),[2,e];case 2:return t=n.sent(),console.log(t),[3,3];case 3:return[2]}}))}))).apply(this,arguments)}function ad(){return(ad=n((function(){var e,t;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,Xh.loginWithFacebook()];case 1:return e=n.sent(),Xh.state.user=e.user,ud(),[2,signWithGoogle];case 2:return t=n.sent(),console.log(t),[3,3];case 3:return[2]}}))}))).apply(this,arguments)}function sd(){return(sd=n((function(){var e,t;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,Xh.loginWithGitHub()];case 1:return e=n.sent(),Xh.state.user=e.user,ud(),[2,signWithGoogle];case 2:return t=n.sent(),console.log(t),[3,3];case 3:return[2]}}))}))).apply(this,arguments)}function ud(){Xh.online(!0),Xh.hasAccountTrueOrFalse(!0),Xh.writeToDataBase(),Zh.profile.classList.remove("visually-hidden"),Zh.buttonSignIn.classList.remove("signActive"),Zh.buttonSignUp.classList.remove("signActive"),Zh.buttonBox.classList.add("visually-hidden"),Zh.boxSignIn.classList.value.includes("visually-hidden")?Zh.boxSignUp.classList.add("visually-hidden"):Zh.boxSignIn.classList.add("visually-hidden"),Zh.signOut.addEventListener("click",ed),Zh.removeAccount.addEventListener("click",td)}Zh.buttonSignIn.addEventListener("click",(function(e){e.preventDefault(),Zh.boxSignUp.classList.value.includes("visually-hidden")||(Zh.boxSignUp.classList.add("visually-hidden"),Zh.buttonSignUp.classList.remove("signActive"));Zh.boxSignIn.classList.remove("visually-hidden"),Zh.buttonSignIn.classList.add("signActive")})),Zh.buttonSignUp.addEventListener("click",(function(e){e.preventDefault(),Zh.boxSignIn.classList.value.includes("visually-hidden")||(Zh.boxSignIn.classList.add("visually-hidden"),Zh.buttonSignIn.classList.remove("signActive"));Zh.boxSignUp.classList.remove("visually-hidden"),Zh.buttonSignUp.classList.add("signActive")})),Zh.formSignUp.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.password,i=t.google,o=t.facebook,a=t.gitHub;if(Xh.setEmailAndPassword(n.value,r.value),e.submitter===i)return id();if(e.submitter===o)return function(){return ad.apply(this,arguments)}();if(e.submitter===a)return function(){return sd.apply(this,arguments)}();!function(){nd.apply(this,arguments)}()})),Zh.formSignIn.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.password,i=t.google;t.facebook,t.gitHub;if(Xh.setEmailAndPassword(n.value,r.value),e.submitter===i)return id();!function(){rd.apply(this,arguments)}()})),Zh.signOut.addEventListener("click",ed),Zh.removeAccount.addEventListener("click",td),Xh.auth(),Xh.db(),Xh.checkStatusAcc()}();
//# sourceMappingURL=index.ecd9867f.js.map
