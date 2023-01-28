!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(i,o){var a=e.apply(n,r);function s(e){t(a,i,o,s,u,"next",e)}function u(e){t(a,i,o,s,u,"throw",e)}s(void 0)}))}}function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function i(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}Object.create;Object.create;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){if(Array.isArray(e))return c(e)}function h(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function v(e){return l(e)||h(e)||d(e)||f()}function p(e){if(Array.isArray(e))return e}function y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(e,t){return p(e)||h(e)||d(e,t)||y()}
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
 */function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function b(e,t){return k(e,t)}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function I(e,t,n){return I=w()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&b(i,n.prototype),i},I.apply(null,arguments)}function T(e,t,n){return I.apply(null,arguments)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function S(e){return E(e)}function R(e){var t="function"==typeof Map?new Map:void 0;return R=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return T(e,arguments,S(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),b(r,e)},R(e)}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function A(e){return e&&e.constructor===Symbol?"symbol":typeof e}function C(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?m(e):t}function P(e){var t=O();return function(){var n,r=S(e);if(t){var i=S(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return C(this,n)}}var N,D,L,M=N={};function U(){throw new Error("setTimeout has not been defined")}function x(){throw new Error("clearTimeout has not been defined")}function F(e){if(D===setTimeout)return setTimeout(e,0);if((D===U||!D)&&setTimeout)return D=setTimeout,setTimeout(e,0);try{return D(e,0)}catch(t){try{return D.call(null,e,0)}catch(t){return D.call(this,e,0)}}}!function(){try{D="function"==typeof setTimeout?setTimeout:U}catch(e){D=U}try{L="function"==typeof clearTimeout?clearTimeout:x}catch(e){L=x}}();var j,B=[],z=!1,V=-1;function H(){z&&j&&(z=!1,j.length?B=j.concat(B):V=-1,B.length&&W())}function W(){if(!z){var e=F(H);z=!0;for(var t=B.length;t;){for(j=B,B=[];++V<t;)j&&j[V].run();V=-1,t=B.length}j=null,z=!1,function(e){if(L===clearTimeout)return clearTimeout(e);if((L===x||!L)&&clearTimeout)return L=clearTimeout,clearTimeout(e);try{L(e)}catch(t){try{return L.call(null,e)}catch(t){return L.call(this,e)}}}(e)}}function K(e,t){this.fun=e,this.array=t}function q(){}M.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];B.push(new K(e,t)),1!==B.length||z||F(W)},K.prototype.run=function(){this.fun.apply(null,this.array)},M.title="browser",M.browser=!0,M.env={},M.argv=[],M.version="",M.versions={},M.on=q,M.addListener=q,M.once=q,M.off=q,M.removeListener=q,M.removeAllListeners=q,M.emit=q,M.prependListener=q,M.prependOnceListener=q,M.listeners=function(e){return[]},M.binding=function(e){throw new Error("process.binding is not supported")},M.cwd=function(){return"/"},M.chdir=function(e){throw new Error("process.chdir is not supported")},M.umask=function(){return 0};var G=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},J={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=o>>2,h=(3&o)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,a||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(G(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw Error();var c=o<<2|a>>4;if(r.push(c),64!==s){var l=a<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Y=function(e){return function(e){var t=G(e);return J.encodeByteArray(t,!0)}(e).replace(/\./g,"")},X=function(e){try{return J.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
var $=function(){
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
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},Q=function(){try{return $()||function(){if(void 0!==N&&void 0!==N.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&X(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},Z=function(e){var t,n;return null===(n=null===(t=Q())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ee=function(e){var t=Z(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},te=function(){var e;return null===(e=Q())||void 0===e?void 0:e.config},ne=function(e){var t;return null===(t=Q())||void 0===t?void 0:t["_".concat(e)]},re=function(){"use strict";function e(){var t=this;o(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return s(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
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
function ie(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var o=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Y(JSON.stringify({alg:"none",type:"JWT"})),Y(JSON.stringify(o)),""].join(".")}
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
 */function oe(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ae(){try{return"object"==typeof indexedDB}catch(e){return!1}}
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
var se=function(e){"use strict";_(n,e);var t=P(n);function n(e,r,i){var a;return o(this,n),(a=t.call(this,r)).code=e,a.customData=i,a.name="FirebaseError",Object.setPrototypeOf(m(a),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(m(a),ue.prototype.create),a}return n}(R(Error)),ue=function(){"use strict";function e(t,n,r){o(this,e),this.service=t,this.serviceName=n,this.errors=r}return s(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?ce(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new se(o,u,i);return c}}]),e}();function ce(e,t){return e.replace(le,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var le=/\{\$([^}]+)}/g;
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
 */function he(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function fe(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(de(l)&&de(h)){if(!fe(l,h))return!1}else if(l!==h)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var f=!0,d=!1,v=void 0;try{for(var p,y=r[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){var g=p.value;if(!n.includes(g))return!1}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}return!0}function de(e){return null!==e&&"object"==typeof e}
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
function ve(e){var t=[],n=!0,r=!1,i=void 0;try{for(var o,a=function(){var e=g(o.value,2),n=e[0],r=e[1];Array.isArray(r)?r.forEach((function(e){t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))},s=Object.entries(e)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)a()}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t.length?"&"+t.join("&"):""}function pe(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=g(e.split("="),2),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function ye(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var ge=function(){"use strict";function e(t,n){var r=this;o(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){t(r)})).catch((function(e){r.error(e)}))}return s(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=me),void 0===r.error&&(r.error=me),void 0===r.complete&&(r.complete=me);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function me(){}
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
function ke(e){return e&&e._delegate?e._delegate:e}var be=function(){"use strict";function e(t,n,r){o(this,e),this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return s(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),_e="[DEFAULT]",we=function(){"use strict";function e(t,n){o(this,e),this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return s(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new re;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:_e})}catch(e){}var t=!0,n=!1,r=void 0;try{for(var i,o=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=g(i.value,2),s=a[0],u=a[1],c=this.normalizeInstanceIdentifier(s);try{var l=this.getOrInitializeService({instanceIdentifier:c});u.resolve(l)}catch(e){}}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return t=Array.from(e.instances.values()),[4,Promise.all(v(t.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(v(t.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return n.sent(),[2]}}))}))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,n=void 0===t?{}:t,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:r,options:n}),o=!0,a=!1,s=void 0;try{for(var u,c=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=g(u.value,2),h=l[0],f=l[1],d=this.normalizeInstanceIdentifier(h);r===d&&f.resolve(i)}}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}return i}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===_e?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e;return this.component?this.component.multipleInstances?e:_e:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
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
 */var Ie,Te,Ee=function(){"use strict";function e(t){o(this,e),this.name=t,this.providers=new Map}return s(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new we(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),Se=[];
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
 */(Te=Ie||(Ie={}))[Te.DEBUG=0]="DEBUG",Te[Te.VERBOSE=1]="VERBOSE",Te[Te.INFO=2]="INFO",Te[Te.WARN=3]="WARN",Te[Te.ERROR=4]="ERROR",Te[Te.SILENT=5]="SILENT";var Re,Oe={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},Ae=Ie.INFO,Ce=(u(Re={},Ie.DEBUG,"log"),u(Re,Ie.VERBOSE,"log"),u(Re,Ie.INFO,"info"),u(Re,Ie.WARN,"warn"),u(Re,Ie.ERROR,"error"),Re),Pe=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o;if(!(t<e.logLevel)){var a=(new Date).toISOString(),s=Ce[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(o=console)[s].apply(o,["[".concat(a,"]  ").concat(e.name,":")].concat(v(r)))}},Ne=function(){"use strict";function e(t){o(this,e),this.name=t,this._logLevel=Ae,this._logHandler=Pe,this._userLogHandler=null,Se.push(this)}return s(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Ie))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Oe[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ie.DEBUG].concat(v(t))),this._logHandler.apply(this,[this,Ie.DEBUG].concat(v(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ie.VERBOSE].concat(v(t))),this._logHandler.apply(this,[this,Ie.VERBOSE].concat(v(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ie.INFO].concat(v(t))),this._logHandler.apply(this,[this,Ie.INFO].concat(v(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ie.WARN].concat(v(t))),this._logHandler.apply(this,[this,Ie.WARN].concat(v(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ie.ERROR].concat(v(t))),this._logHandler.apply(this,[this,Ie.ERROR].concat(v(t)))}}]),e}();function De(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var Le,Me;var Ue=new WeakMap,xe=new WeakMap,Fe=new WeakMap,je=new WeakMap,Be=new WeakMap;var ze={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return xe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Fe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return We(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ve(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Me||(Me=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(Ke(this),n),We(Ue.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return We(e.apply(Ke(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o,a=(o=e).call.apply(o,[Ke(this),t].concat(v(r)));return Fe.set(a,t.sort?t.sort():[t]),We(a)}}function He(e){return"function"==typeof e?Ve(e):(e instanceof IDBTransaction&&function(e){if(!xe.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),r()},o=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));xe.set(e,t)}}(e),t=e,(Le||(Le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,ze):e);var t}function We(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(We(t.result)),r()},o=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&Ue.set(e,t)})).catch((function(){})),Be.set(n,t),n;var t,n;if(je.has(e))return je.get(e);var r=He(e);return r!==e&&(je.set(e,r),Be.set(r,e)),r}var Ke=function(e){return Be.get(e)};function qe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,o=n.blocking,a=n.terminated,s=indexedDB.open(e,t),u=We(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(We(s.result),e.oldVersion,e.newVersion,We(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),u}var Ge,Je=["get","getKey","getAll","getAllKeys","count"],Ye=["put","add","delete","clear"],Xe=new Map;function $e(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(Xe.get(t))return Xe.get(t);var r=t.replace(/FromIndex$/,""),o=t!==r,a=Ye.includes(r);if(r in(o?IDBIndex:IDBObjectStore).prototype&&(a||Je.includes(r))){var s,u=(s=n((function(e){var t,n,s,u,c,l,h=arguments;return i(this,(function(i){switch(i.label){case 0:for(t=h.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=h[s];return c=this.transaction(e,a?"readwrite":"readonly"),l=c.store,o&&(l=l.index(n.shift())),[4,Promise.all([(u=l)[r].apply(u,v(n)),a&&c.done])];case 1:return[2,i.sent()[0]]}}))})),function(e){return s.apply(this,arguments)});return Xe.set(t,u),u}}}Ge=function(e){return De(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},e),{get:function(t,n,r){return $e(t,n)||e.get(t,n,r)},has:function(t,n){return!!$e(t,n)||e.has(t,n)}})},ze=Ge(ze);
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
var Qe=function(){"use strict";function e(t){o(this,e),this.container=t}return s(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var Ze,et,tt="@firebase/app",nt="0.9.1",rt=new Ne("@firebase/app"),it="[DEFAULT]",ot=(u(Ze={},tt,"fire-core"),u(Ze,"@firebase/app-compat","fire-core-compat"),u(Ze,"@firebase/analytics","fire-analytics"),u(Ze,"@firebase/analytics-compat","fire-analytics-compat"),u(Ze,"@firebase/app-check","fire-app-check"),u(Ze,"@firebase/app-check-compat","fire-app-check-compat"),u(Ze,"@firebase/auth","fire-auth"),u(Ze,"@firebase/auth-compat","fire-auth-compat"),u(Ze,"@firebase/database","fire-rtdb"),u(Ze,"@firebase/database-compat","fire-rtdb-compat"),u(Ze,"@firebase/functions","fire-fn"),u(Ze,"@firebase/functions-compat","fire-fn-compat"),u(Ze,"@firebase/installations","fire-iid"),u(Ze,"@firebase/installations-compat","fire-iid-compat"),u(Ze,"@firebase/messaging","fire-fcm"),u(Ze,"@firebase/messaging-compat","fire-fcm-compat"),u(Ze,"@firebase/performance","fire-perf"),u(Ze,"@firebase/performance-compat","fire-perf-compat"),u(Ze,"@firebase/remote-config","fire-rc"),u(Ze,"@firebase/remote-config-compat","fire-rc-compat"),u(Ze,"@firebase/storage","fire-gcs"),u(Ze,"@firebase/storage-compat","fire-gcs-compat"),u(Ze,"@firebase/firestore","fire-fst"),u(Ze,"@firebase/firestore-compat","fire-fst-compat"),u(Ze,"fire-js","fire-js"),u(Ze,"firebase","fire-js-all"),Ze),at=new Map,st=new Map;function ut(e,t){try{e.container.addComponent(t)}catch(n){rt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function ct(e){var t=e.name;if(st.has(t))return rt.debug("There were multiple attempts to register component ".concat(t,".")),!1;st.set(t,e);var n=!0,r=!1,i=void 0;try{for(var o,a=at.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){ut(o.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}function lt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var ht=(u(et={},"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),u(et,"bad-app-name","Illegal App name: '{$appName}"),u(et,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),u(et,"app-deleted","Firebase App named '{$appName}' already deleted"),u(et,"no-options","Need to provide options, when not being deployed to hosting via source."),u(et,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),u(et,"invalid-log-argument","First argument to `onLog` must be null or a function."),u(et,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),u(et,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),u(et,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),u(et,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),et),ft=new ue("app","Firebase",ht),dt=function(){"use strict";function e(t,n,r){var i=this;o(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new be("app",(function(){return i}),"PUBLIC"))}return s(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}]),e}(),vt="9.16.0";function pt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:it,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw ft.create("bad-app-name",{appName:String(o)});if(n||(n=te()),!n)throw ft.create("no-options");var a=at.get(o);if(a){if(fe(n,a.options)&&fe(i,a.config))return a;throw ft.create("duplicate-app",{appName:o})}var s=new Ee(o),u=!0,c=!1,l=void 0;try{for(var h,f=st.values()[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;s.addComponent(d)}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}var v=new dt(n,i,s);return at.set(o,v),v}function yt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=at.get(e);if(!t&&e===it)return pt();if(!t)throw ft.create("no-app",{appName:e});return t}function gt(e,t,n){var r,i=null!==(r=ot[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void rt.warn(s.join(" "))}ct(new be("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var mt="firebase-heartbeat-store",kt=null;function bt(){return kt||(kt=qe("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(mt)}}).catch((function(e){throw ft.create("idb-open",{originalErrorMessage:e.message})}))),kt}function _t(e){return wt.apply(this,arguments)}function wt(){return(wt=n((function(e){var t,n;return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,bt()];case 1:return[2,r.sent().transaction(mt).objectStore(mt).get(Et(e))];case 2:return(t=r.sent())instanceof se?rt.warn(t.message):(n=ft.create("idb-get",{originalErrorMessage:null==t?void 0:t.message}),rt.warn(n.message)),[3,3];case 3:return[2]}}))}))).apply(this,arguments)}function It(e,t){return Tt.apply(this,arguments)}function Tt(){return(Tt=n((function(e,t){var n,r,o,a;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,bt()];case 1:return n=i.sent(),r=n.transaction(mt,"readwrite"),[4,r.objectStore(mt).put(t,Et(e))];case 2:return i.sent(),[2,r.done];case 3:return(o=i.sent())instanceof se?rt.warn(o.message):(a=ft.create("idb-set",{originalErrorMessage:null==o?void 0:o.message}),rt.warn(a.message)),[3,4];case 4:return[2]}}))}))).apply(this,arguments)}function Et(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var St=1024,Rt=function(){"use strict";function e(t){var n=this;o(this,e),this.container=t,this._heartbeatsCache=null;var r=this.container.getProvider("app").getImmediate();this._storage=new Ct(r),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return s(e,[{key:"triggerHeartbeat",value:function(){var e=this;return n((function(){var t,n,r;return i(this,(function(i){switch(i.label){case 0:return t=e.container.getProvider("platform-logger").getImmediate(),n=t.getPlatformInfoString(),r=Ot(),null!==e._heartbeatsCache?[3,2]:[4,e._heartbeatsCachePromise];case 1:e._heartbeatsCache=i.sent(),i.label=2;case 2:return e._heartbeatsCache.lastSentHeartbeatDate===r||e._heartbeatsCache.heartbeats.some((function(e){return e.date===r}))?[2]:(e._heartbeatsCache.heartbeats.push({date:r,agent:n}),e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),[2,e._storage.overwrite(e._heartbeatsCache)])}}))}))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return n((function(){var t,n,r,o,a;return i(this,(function(i){switch(i.label){case 0:return null!==e._heartbeatsCache?[3,2]:[4,e._heartbeatsCachePromise];case 1:i.sent(),i.label=2;case 2:return null===e._heartbeatsCache||0===e._heartbeatsCache.heartbeats.length?[2,""]:(t=Ot(),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:St,n=[],r=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(){var e=s.value,i=n.find((function(t){return t.agent===e.agent}));if(i){if(i.dates.push(e.date),Pt(n)>t)return i.dates.pop(),"break"}else if(n.push({agent:e.agent,dates:[e.date]}),Pt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){if("break"===u())break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:n,unsentEntries:r}}(e._heartbeatsCache.heartbeats),r=n.heartbeatsToSend,o=n.unsentEntries,a=Y(JSON.stringify({version:2,heartbeats:r})),e._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(e._heartbeatsCache.heartbeats=o,[4,e._storage.overwrite(e._heartbeatsCache)]):[3,4]);case 3:return i.sent(),[3,5];case 4:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache),i.label=5;case 5:return[2,a]}}))}))()}}]),e}();function Ot(){return(new Date).toISOString().substring(0,10)}var At,Ct=function(){"use strict";function e(t){o(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return s(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return n((function(){return i(this,(function(e){return ae()?[2,new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1}))]:[2,!1]}))}))()}},{key:"read",value:function(){var e=this;return n((function(){return i(this,(function(t){switch(t.label){case 0:return[4,e._canUseIndexedDBPromise];case 1:return t.sent()?[3,2]:[2,{heartbeats:[]}];case 2:return[4,_t(e.app)];case 3:return[2,t.sent()||{heartbeats:[]}];case 4:return[2]}}))}))()}},{key:"overwrite",value:function(e){var t=this;return n((function(){var n,r;return i(this,(function(i){switch(i.label){case 0:return[4,t._canUseIndexedDBPromise];case 1:return i.sent()?[3,2]:[2];case 2:return[4,t.read()];case 3:return r=i.sent(),[2,It(t.app,{lastSentHeartbeatDate:null!==(n=e.lastSentHeartbeatDate)&&void 0!==n?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})];case 4:return[2]}}))}))()}},{key:"add",value:function(e){var t=this;return n((function(){var n,r;return i(this,(function(i){switch(i.label){case 0:return[4,t._canUseIndexedDBPromise];case 1:return i.sent()?[3,2]:[2];case 2:return[4,t.read()];case 3:return r=i.sent(),[2,It(t.app,{lastSentHeartbeatDate:null!==(n=e.lastSentHeartbeatDate)&&void 0!==n?n:r.lastSentHeartbeatDate,heartbeats:v(r.heartbeats).concat(v(e.heartbeats))})];case 4:return[2]}}))}))()}}]),e}();function Pt(e){return Y(JSON.stringify({version:2,heartbeats:e})).length}
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
 */At="",ct(new be("platform-logger",(function(e){return new Qe(e)}),"PRIVATE")),ct(new be("heartbeat",(function(e){return new Rt(e)}),"PRIVATE")),gt(tt,nt,At),gt(tt,nt,"esm2017"),gt("fire-js","");function Nt(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function Dt(e,t,n){return Dt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Nt(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}},Dt(e,t,n)}function Lt(e,t,n){return Dt(e,t,n)}
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
gt("firebase","9.16.0","app");var Mt=function(){"use strict";function e(t){o(this,e),this.uid=t}return s(e,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),e}();Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");
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
var Ut="9.16.0",xt=new Ne("@firebase/firestore");
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
 */function Ft(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(xt.logLevel<=Ie.DEBUG){var i,o=n.map(zt);(i=xt).debug.apply(i,["Firestore (".concat(Ut,"): ").concat(e)].concat(v(o)))}}function jt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(xt.logLevel<=Ie.ERROR){var i,o=n.map(zt);(i=xt).error.apply(i,["Firestore (".concat(Ut,"): ").concat(e)].concat(v(o)))}}function Bt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(xt.logLevel<=Ie.WARN){var i,o=n.map(zt);(i=xt).warn.apply(i,["Firestore (".concat(Ut,"): ").concat(e)].concat(v(o)))}}function zt(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function Vt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(Ut,") INTERNAL ASSERTION FAILED: ")+e;throw jt(t),new Error(t)}function Ht(e,t){e||Vt()}
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
var Wt="invalid-argument",Kt="failed-precondition",qt=function(e){"use strict";_(n,e);var t=P(n);function n(e,r){var i;return o(this,n),(i=t.call(this,e,r)).code=e,i.message=r,i.toString=function(){return"".concat(i.name,": [code=").concat(i.code,"]: ").concat(i.message)},C(i)}return n}(se),Gt=function e(t,n){"use strict";o(this,e),this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(t))},Jt=function(){"use strict";function e(){o(this,e)}return s(e,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Mt.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),e}(),Yt=function(){"use strict";function e(t){o(this,e),this.token=t,this.changeListener=null}return s(e,[{key:"getToken",value:function(){return Promise.resolve(this.token)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){var n=this;this.changeListener=t,e.enqueueRetryable((function(){return t(n.token.user)}))}},{key:"shutdown",value:function(){this.changeListener=null}}]),e}(),Xt=function(){"use strict";function e(t){var n=this;o(this,e),this.auth=null,t.onInit((function(e){n.auth=e}))}return s(e,[{key:"getToken",value:function(){var e=this;return this.auth?this.auth.getToken().then((function(t){return t?(Ht("string"==typeof t.accessToken),new Gt(t.accessToken,new Mt(e.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),e}(),$t=function(){"use strict";function e(t,n,r,i){o(this,e),this.t=t,this.i=n,this.o=r,this.u=i,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.h=new Map}return s(e,[{key:"l",value:function(){return this.u?this.u():(Ht(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}},{key:"headers",get:function(){this.h.set("X-Goog-AuthUser",this.i);var e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}]),e}(),Qt=function(){"use strict";function e(t,n,r,i){o(this,e),this.t=t,this.i=n,this.o=r,this.u=i}return s(e,[{key:"getToken",value:function(){return Promise.resolve(new $t(this.t,this.i,this.o,this.u))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Mt.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),e}(),Zt=function e(t){"use strict";o(this,e),this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)},en=function(){"use strict";function e(t){var n=this;o(this,e),this.m=t,this.appCheck=null,t.onInit((function(e){n.appCheck=e}))}return s(e,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(e){return e?(Ht("string"==typeof e.token),new Zt(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),e}(),tn=function(){"use strict";function e(t,n){o(this,e),this.projectId=t,this.database=n||"(default)"}return s(e,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}}],[{key:"empty",value:function(){return new e("","")}}]),e}();function nn(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=function(e){return e.constructor?e.constructor.name:null}(e);return t?"a custom ".concat(t," object"):"an object"}return"function"==typeof e?"a function":Vt()}function rn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new qt(Wt,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=nn(e);throw new qt(Wt,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
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
var on,an;
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
(an=on||(on={}))[an.OK=0]="OK",an[an.CANCELLED=1]="CANCELLED",an[an.UNKNOWN=2]="UNKNOWN",an[an.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",an[an.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",an[an.NOT_FOUND=5]="NOT_FOUND",an[an.ALREADY_EXISTS=6]="ALREADY_EXISTS",an[an.PERMISSION_DENIED=7]="PERMISSION_DENIED",an[an.UNAUTHENTICATED=16]="UNAUTHENTICATED",an[an.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",an[an.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",an[an.ABORTED=10]="ABORTED",an[an.OUT_OF_RANGE=11]="OUT_OF_RANGE",an[an.UNIMPLEMENTED=12]="UNIMPLEMENTED",an[an.INTERNAL=13]="INTERNAL",an[an.UNAVAILABLE=14]="UNAVAILABLE",an[an.DATA_LOSS=15]="DATA_LOSS";function sn(e,t){return e<t?-1:e>t?1:0}
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
var un=function(){"use strict";function e(t){o(this,e),this.binaryString=t}return s(e,[{key:Symbol.iterator,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return sn(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(t){return new e(atob(t))}},{key:"fromUint8Array",value:function(t){var n=function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(t);return new e(n)}}]),e}();un.EMPTY_BYTE_STRING=new un("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
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
var cn=function(){"use strict";function e(t,n,r,i,a){o(this,e),this.key=t,this.value=n,this.color=null!=r?r:e.RED,this.left=null!=i?i:e.EMPTY,this.right=null!=a?a:e.EMPTY,this.size=this.left.size+1+this.right.size}return s(e,[{key:"copy",value:function(t,n,r,i,o){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return e.EMPTY;var t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(t,n){var r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw Vt();if(this.right.isRed())throw Vt();var e=this.left.check();if(e!==this.right.check())throw Vt();return e+(this.isRed()?0:1)}}]),e}();
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
 */cn.EMPTY=null,cn.RED=!0,cn.BLACK=!1,cn.EMPTY=new(function(){"use strict";function e(){o(this,e),this.size=0}return s(e,[{key:"key",get:function(){throw Vt()}},{key:"value",get:function(){throw Vt()}},{key:"color",get:function(){throw Vt()}},{key:"left",get:function(){throw Vt()}},{key:"right",get:function(){throw Vt()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new cn(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),e}());
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
var ln=new Map;var hn=function(){"use strict";function e(t){var n;if(o(this,e),void 0===t.host){if(void 0!==t.ssl)throw new qt(Wt,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(n=t.ssl)||void 0===n||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new qt(Wt,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new qt(Wt,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}return s(e,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),e}(),fn=function(){"use strict";function e(t,n,r,i){o(this,e),this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hn({}),this._settingsFrozen=!1}return s(e,[{key:"app",get:function(){if(!this._app)throw new qt(Kt,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new qt(Kt,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hn(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Jt;switch(e.type){case"gapi":var t=e.client;return new Qt(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new qt(Wt,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=ln.get(e))&&(Ft("ComponentProvider","Removing Datastore"),ln.delete(e),t.terminate()),Promise.resolve();var e,t}}]),e}();
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
 */function dn(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=(e=rn(e,fn))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==t&&Bt("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:"".concat(t,":").concat(n),ssl:!1})),i.mockUserToken){var a,s;if("string"==typeof i.mockUserToken)a=i.mockUserToken,s=Mt.MOCK_USER;else{a=ie(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);var u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new qt(Wt,"mockUserToken must contain 'sub' or 'user_id' field!");s=new Mt(u)}e._authCredentials=new Yt(new Gt(a,s))}}new RegExp("[~\\*/\\[\\]]");
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
var vn;
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
 */vn="".concat(vt,"_lite"),Ut=vn,ct(new be("firestore/lite",(function(e,t){var n=t.instanceIdentifier,r=t.options,i=e.getProvider("app").getImmediate(),o=new fn(new Xt(e.getProvider("auth-internal")),new en(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new qt(Wt,'"projectId" not provided in firebase.initializeApp.');return new tn(e.options.projectId,t)}(i,n),i);return r&&o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),gt("firestore-lite","3.8.1",""),gt("firestore-lite","3.8.1","esm2017");function pn(){return u({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var yn=pn,gn=new ue("auth","Firebase",pn()),mn=new Ne("@firebase/auth");function kn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i;mn.logLevel<=Ie.ERROR&&(i=mn).error.apply(i,["Auth (".concat(vt,"): ").concat(e)].concat(v(n)))}
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
 */function bn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw In.apply(void 0,[e].concat(v(n)))}function _n(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return In.apply(void 0,[e].concat(v(n)))}function wn(e,t,n){var r=Object.assign(Object.assign({},yn()),u({},t,n));return new ue("auth","Firebase",r).create(t,{appName:e.name})}function In(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i;if("string"!=typeof e){var o,a=n[0],s=v(n.slice(1));return s[0]&&(s[0].appName=e.name),(o=e._errorFactory).create.apply(o,[a].concat(v(s)))}return(i=gn).create.apply(i,[e].concat(v(n)))}function Tn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(!e)throw In.apply(void 0,[t].concat(v(r)))}function En(e){var t="INTERNAL ASSERTION FAILED: "+e;throw kn(t),new Error(t)}function Sn(e,t){e||En(t)}
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
 */var Rn=new Map;function On(e){Sn(e instanceof Function,"Expected a class definition");var t=Rn.get(e);return t?(Sn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Rn.set(e,t),t)}
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
 */function An(e,t){var n=lt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(fe(n.getOptions(),null!=t?t:{}))return r;bn(r,"already-initialized")}return n.initialize({options:t})}
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
function Cn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Pn(){return"http:"===Nn()||"https:"===Nn()}function Nn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Dn(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Pn()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
var Ln=function(){"use strict";function e(t,n){o(this,e),this.shortDelay=t,this.longDelay=n,Sn(n>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())||"object"==typeof navigator&&"ReactNative"===navigator.product}return s(e,[{key:"get",value:function(){return Dn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
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
 */function Mn(e,t){Sn(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var Un,xn=function(){"use strict";function e(){o(this,e)}return s(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),Fn=(u(Un={},"CREDENTIAL_MISMATCH","custom-token-mismatch"),u(Un,"MISSING_CUSTOM_TOKEN","internal-error"),u(Un,"INVALID_IDENTIFIER","invalid-email"),u(Un,"MISSING_CONTINUE_URI","internal-error"),u(Un,"INVALID_PASSWORD","wrong-password"),u(Un,"MISSING_PASSWORD","internal-error"),u(Un,"EMAIL_EXISTS","email-already-in-use"),u(Un,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),u(Un,"INVALID_IDP_RESPONSE","invalid-credential"),u(Un,"INVALID_PENDING_TOKEN","invalid-credential"),u(Un,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),u(Un,"MISSING_REQ_TYPE","internal-error"),u(Un,"EMAIL_NOT_FOUND","user-not-found"),u(Un,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),u(Un,"EXPIRED_OOB_CODE","expired-action-code"),u(Un,"INVALID_OOB_CODE","invalid-action-code"),u(Un,"MISSING_OOB_CODE","internal-error"),u(Un,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),u(Un,"INVALID_ID_TOKEN","invalid-user-token"),u(Un,"TOKEN_EXPIRED","user-token-expired"),u(Un,"USER_NOT_FOUND","user-token-expired"),u(Un,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),u(Un,"INVALID_CODE","invalid-verification-code"),u(Un,"INVALID_SESSION_INFO","invalid-verification-id"),u(Un,"INVALID_TEMPORARY_PROOF","invalid-credential"),u(Un,"MISSING_SESSION_INFO","missing-verification-id"),u(Un,"SESSION_EXPIRED","code-expired"),u(Un,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),u(Un,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),u(Un,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),u(Un,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),u(Un,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),u(Un,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),u(Un,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),u(Un,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),u(Un,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),u(Un,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),u(Un,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Un),jn=new Ln(3e4,6e4);function Bn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function zn(e,t,n,r){return Vn.apply(this,arguments)}function Vn(){return Vn=n((function(e,t,r,o){var a,s=arguments;return i(this,(function(u){return a=s.length>4&&void 0!==s[4]?s[4]:{},[2,Hn(e,a,n((function(){var n,a,s,u;return i(this,(function(i){switch(i.label){case 0:return n={},a={},o&&("GET"===t?a=o:n={body:JSON.stringify(o)}),s=ve(Object.assign({key:e.config.apiKey},a)).slice(1),[4,e._getAdditionalHeaders()];case 1:return(u=i.sent())["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),[2,xn.fetch()(Gn(e,e.config.apiHost,r,s),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},n))]}}))})))]}))})),Vn.apply(this,arguments)}function Hn(e,t,n){return Wn.apply(this,arguments)}function Wn(){return(Wn=n((function(e,t,n){var r,o,a,s,u,c,l,h,f,d;return i(this,(function(i){switch(i.label){case 0:e._canInitEmulator=!1,r=Object.assign(Object.assign({},Fn),t),i.label=1;case 1:return i.trys.push([1,4,,5]),o=new Jn(e),[4,Promise.race([n(),o.promise])];case 2:return a=i.sent(),o.clearNetworkTimeout(),[4,a.json()];case 3:if("needConfirmation"in(s=i.sent()))throw Yn(e,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return[2,s];if(u=a.ok?s.errorMessage:s.error.message,c=g(u.split(" : "),2),l=c[0],h=c[1],"FEDERATED_USER_ID_ALREADY_LINKED"===l)throw Yn(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===l)throw Yn(e,"email-already-in-use",s);if("USER_DISABLED"===l)throw Yn(e,"user-disabled",s);if(f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-"),h)throw wn(e,f,h);return bn(e,f),[3,5];case 4:if((d=i.sent())instanceof se)throw d;return bn(e,"network-request-failed"),[3,5];case 5:return[2]}}))}))).apply(this,arguments)}function Kn(e,t,n,r){return qn.apply(this,arguments)}function qn(){return qn=n((function(e,t,n,r){var o,a,s=arguments;return i(this,(function(i){switch(i.label){case 0:return o=s.length>4&&void 0!==s[4]?s[4]:{},[4,zn(e,t,n,r,o)];case 1:return"mfaPendingCredential"in(a=i.sent())&&bn(e,"multi-factor-auth-required",{_serverResponse:a}),[2,a]}}))})),qn.apply(this,arguments)}function Gn(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Mn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Jn=function(){"use strict";function e(t){var n=this;o(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){n.timer=setTimeout((function(){return t(_n(n.auth,"network-request-failed"))}),jn.get())}))}return s(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function Yn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=_n(e,t,r);return i.customData._tokenResponse=n,i}function Xn(e,t){return $n.apply(this,arguments)}function $n(){return($n=
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
n((function(e,t){return i(this,(function(n){return[2,zn(e,"POST","/v1/accounts:delete",t)]}))}))).apply(this,arguments)}function Qn(e,t){return Zn.apply(this,arguments)}function Zn(){return(Zn=n((function(e,t){return i(this,(function(n){return[2,zn(e,"POST","/v1/accounts:lookup",t)]}))}))).apply(this,arguments)}
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
 */function er(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function tr(){return tr=n((function(e){var t,n,r,o,a,s,u=arguments;return i(this,(function(i){switch(i.label){case 0:return t=u.length>1&&void 0!==u[1]&&u[1],[4,(n=ke(e)).getIdToken(t)];case 1:return r=i.sent(),Tn((o=rr(r))&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error"),a="object"==typeof o.firebase?o.firebase:void 0,s=null==a?void 0:a.sign_in_provider,[2,{claims:o,token:r,authTime:er(nr(o.auth_time)),issuedAtTime:er(nr(o.iat)),expirationTime:er(nr(o.exp)),signInProvider:s||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}]}}))})),tr.apply(this,arguments)}function nr(e){return 1e3*Number(e)}function rr(e){var t=g(e.split("."),3),n=t[0],r=t[1],i=t[2];if(void 0===n||void 0===r||void 0===i)return kn("JWT malformed, contained fewer than 3 sections"),null;try{var o=X(r);return o?JSON.parse(o):(kn("Failed to decode base64 JWT payload"),null)}catch(e){return kn("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function ir(e,t){return or.apply(this,arguments)}function or(){return or=
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
n((function(e,t){var n,r=arguments;return i(this,(function(i){switch(i.label){case 0:if(r.length>2&&void 0!==r[2]&&r[2])return[2,t];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,t];case 2:return[2,i.sent()];case 3:return(n=i.sent())instanceof se&&ar(n)?e.auth.currentUser!==e?[3,5]:[4,e.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw n;case 6:return[2]}}))})),or.apply(this,arguments)}function ar(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var sr=function(){"use strict";function e(t){o(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return s(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),r=this;this.timerId=setTimeout(n((function(){return i(this,(function(e){switch(e.label){case 0:return[4,r.iteration()];case 1:return e.sent(),[2]}}))})),t)}}},{key:"iteration",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,e.user.getIdToken(!0)];case 1:return n.sent(),[3,3];case 2:return"auth/network-request-failed"===(null==(t=n.sent())?void 0:t.code)&&e.schedule(!0),[2];case 3:return e.schedule(),[2]}}))}))()}}]),e}(),ur=function(){"use strict";function e(t,n){o(this,e),this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}return s(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=er(this.lastLoginAt),this.creationTime=er(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
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
 */function cr(e){return lr.apply(this,arguments)}function lr(){return(lr=
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
n((function(e){var t,n,r,o,a,s,u,c,l,h,f;return i(this,(function(i){switch(i.label){case 0:return n=e.auth,[4,e.getIdToken()];case 1:return r=i.sent(),[4,ir(e,Qn(n,{idToken:r}))];case 2:return Tn(null==(o=i.sent())?void 0:o.users.length,n,"internal-error"),a=o.users[0],e._notifyReloadListener(a),s=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?dr(a.providerUserInfo):[],u=fr(e.providerData,s),c=e.isAnonymous,l=!(e.email&&a.passwordHash||(null==u?void 0:u.length)),h=!!c&&l,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new ur(a.createdAt,a.lastLoginAt),isAnonymous:h},Object.assign(e,f),[2]}}))}))).apply(this,arguments)}function hr(){return(hr=n((function(e){var t;return i(this,(function(n){switch(n.label){case 0:return[4,cr(t=ke(e))];case 1:return n.sent(),[4,t.auth._persistUserIfCurrent(t)];case 2:return n.sent(),t.auth._notifyListenersIfCurrent(t),[2]}}))}))).apply(this,arguments)}function fr(e,t){return v(e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}))).concat(v(t))}function dr(e){return e.map((function(e){var t=e.providerId,n=r(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function vr(e,t){return pr.apply(this,arguments)}function pr(){return(pr=
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
n((function(e,t){var r;return i(this,(function(o){switch(o.label){case 0:return[4,Hn(e,{},n((function(){var n,r,o,a,s,u;return i(this,(function(i){switch(i.label){case 0:return n=ve({grant_type:"refresh_token",refresh_token:t}).slice(1),r=e.config,o=r.tokenApiHost,a=r.apiKey,s=Gn(e,o,"/v1/token","key=".concat(a)),[4,e._getAdditionalHeaders()];case 1:return(u=i.sent())["Content-Type"]="application/x-www-form-urlencoded",[2,xn.fetch()(s,{method:"POST",headers:u,body:n})]}}))})))];case 1:return[2,{accessToken:(r=o.sent()).access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}]}}))}))).apply(this,arguments)}
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
 */var yr=function(){"use strict";function e(){o(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return s(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){Tn(e.idToken,"internal-error"),Tn(void 0!==e.idToken,"internal-error"),Tn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,Tn(n=rr(t),"internal-error"),Tn(void 0!==n.exp,"internal-error"),Tn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:return Tn(!r.accessToken||r.refreshToken,e,"user-token-expired"),t||!r.accessToken||r.isExpired?r.refreshToken?[4,r.refresh(e,r.refreshToken)]:[3,2]:[2,r.accessToken];case 1:return n.sent(),[2,r.accessToken];case 2:return[2,null]}}))}))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var r=this;return n((function(){var n,o,a,s;return i(this,(function(i){switch(i.label){case 0:return[4,vr(e,t)];case 1:return n=i.sent(),o=n.accessToken,a=n.refreshToken,s=n.expiresIn,r.updateTokensAndExpiration(o,a,Number(s)),[2]}}))}))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return En("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,a=new e;return r&&(Tn("string"==typeof r,"internal-error",{appName:t}),a.refreshToken=r),i&&(Tn("string"==typeof i,"internal-error",{appName:t}),a.accessToken=i),o&&(Tn("number"==typeof o,"internal-error",{appName:t}),a.expirationTime=o),a}}]),e}();
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
 */function gr(e,t){Tn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var mr=function(){"use strict";function e(t){o(this,e);var n=t.uid,i=t.auth,a=t.stsTokenManager,s=r(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?v(s.providerData):[],this.metadata=new ur(s.createdAt||void 0,s.lastLoginAt||void 0)}return s(e,[{key:"getIdToken",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,ir(t,t.stsTokenManager.getToken(t.auth,e))];case 1:return Tn(n=r.sent(),t.auth,"internal-error"),t.accessToken===n?[3,3]:(t.accessToken=n,[4,t.auth._persistUserIfCurrent(t)]);case 2:r.sent(),t.auth._notifyListenersIfCurrent(t),r.label=3;case 3:return[2,n]}}))}))()}},{key:"getIdTokenResult",value:function(e){return function(e){return tr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return hr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(Tn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){Tn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n((function(){var n;return i(this,(function(i){switch(i.label){case 0:return n=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),n=!0),t?[4,cr(r)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,r.auth._persistUserIfCurrent(r)];case 3:return i.sent(),n&&r.auth._notifyListenersIfCurrent(r),[2]}}))}))()}},{key:"delete",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,e.getIdToken()];case 1:return t=n.sent(),[4,ir(e,Xn(e.auth,{idToken:t}))];case 2:return n.sent(),e.stsTokenManager.clearRefreshToken(),[2,e.auth.signOut()]}}))}))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,o,a,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(o=n.phoneNumber)&&void 0!==o?o:void 0,v=null!==(a=n.photoURL)&&void 0!==a?a:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,m=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,b=n.emailVerified,_=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;Tn(k&&I,t,"internal-error");var T=yr.fromJSON(this.name,I);Tn("string"==typeof k,t,"internal-error"),gr(h,t.name),gr(f,t.name),Tn("boolean"==typeof b,t,"internal-error"),Tn("boolean"==typeof _,t,"internal-error"),gr(d,t.name),gr(v,t.name),gr(p,t.name),gr(y,t.name),gr(g,t.name),gr(m,t.name);var E=new e({uid:k,auth:t,email:f,emailVerified:b,displayName:h,isAnonymous:_,photoURL:v,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:m});return w&&Array.isArray(w)&&(E.providerData=w.map((function(e){return Object.assign({},e)}))),y&&(E._redirectEventId=y),E}},{key:"_fromIdTokenResponse",value:function(t,r){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n((function(){var n,a;return i(this,(function(i){switch(i.label){case 0:return(n=new yr).updateFromServerResponse(r),[4,cr(a=new e({uid:r.localId,auth:t,stsTokenManager:n,isAnonymous:o}))];case 1:return i.sent(),[2,a]}}))}))()}}]),e}(),kr=function(){"use strict";function e(){o(this,e),this.type="NONE",this.storage={}}return s(e,[{key:"_isAvailable",value:function(){return n((function(){return i(this,(function(e){return[2,!0]}))}))()}},{key:"_set",value:function(e,t){var r=this;return n((function(){return i(this,(function(n){return r.storage[e]=t,[2]}))}))()}},{key:"_get",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){return[2,void 0===(n=t.storage[e])?null:n]}))}))()}},{key:"_remove",value:function(e){var t=this;return n((function(){return i(this,(function(n){return delete t.storage[e],[2]}))}))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
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
 */kr.type="NONE";var br=kr;
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
 */function _r(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var wr=function(){"use strict";function e(t,n,r){o(this,e),this.persistence=t,this.auth=n,this.userKey=r;var i=this.auth,a=i.config,s=i.name;this.fullUserKey=_r(this.userKey,a.apiKey,s),this.fullPersistenceKey=_r("persistence",a.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return s(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,e.persistence._get(e.fullUserKey)];case 1:return[2,(t=n.sent())?mr._fromJSON(e.auth,t):null]}}))}))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){switch(r.label){case 0:return t.persistence===e?[2]:[4,t.getCurrentUser()];case 1:return n=r.sent(),[4,t.removeCurrentUser()];case 2:return r.sent(),t.persistence=e,n?[2,t.setCurrentUser(n)]:[2]}}))}))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return n((function(){var a,s,u,c,l,h,f,d,v,p,y,g,m,k;return i(this,(function(b){switch(b.label){case 0:return r.length?[4,Promise.all(r.map((_=n((function(e){return i(this,(function(t){switch(t.label){case 0:return[4,e._isAvailable()];case 1:return t.sent()?[2,e]:[2,void 0]}}))})),function(e){return _.apply(this,arguments)})))]:[2,new e(On(br),t,o)];case 1:a=b.sent().filter((function(e){return e})),s=a[0]||On(br),u=_r(o,t.config.apiKey,t.name),c=null,l=!0,h=!1,f=void 0,b.label=2;case 2:b.trys.push([2,9,10,11]),d=r[Symbol.iterator](),b.label=3;case 3:if(l=(v=d.next()).done)return[3,8];p=v.value,b.label=4;case 4:return b.trys.push([4,6,,7]),[4,p._get(u)];case 5:return(y=b.sent())?(g=mr._fromJSON(t,y),p!==s&&(c=g),s=p,[3,8]):[3,7];case 6:return b.sent(),[3,7];case 7:return l=!0,[3,3];case 8:return[3,11];case 9:return m=b.sent(),h=!0,f=m,[3,11];case 10:try{l||null==d.return||d.return()}finally{if(h)throw f}return[7];case 11:return k=a.filter((function(e){return e._shouldAllowMigration})),s._shouldAllowMigration&&k.length?(s=k[0],c?[4,s._set(u,c.toJSON())]:[3,13]):[2,new e(s,t,o)];case 12:b.sent(),b.label=13;case 13:return[4,Promise.all(r.map(function(){var e=n((function(e){return i(this,(function(t){switch(t.label){case 0:if(e===s)return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,e._remove(u)];case 2:return t.sent(),[3,4];case 3:return t.sent(),[3,4];case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}()))];case 14:return b.sent(),[2,new e(s,t,o)]}var _}))}))()}}]),e}();
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
 */function Ir(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Rr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Tr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ar(t))return"Blackberry";if(Cr(t))return"Webos";if(Er(t))return"Safari";if((t.includes("chrome/")||Sr(t))&&!t.includes("edge/"))return"Chrome";if(Or(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Tr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe();return/firefox\//i.test(e)}function Er(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Sr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe();return/crios\//i.test(e)}function Rr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe();return/iemobile/i.test(e)}function Or(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe();return/android/i.test(e)}function Ar(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe();return/blackberry/i.test(e)}function Cr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe();return/webos/i.test(e)}function Pr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Nr(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe();return Pr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Dr(){return((e=oe()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Lr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe();return Pr(e)||Or(e)||Cr(e)||Ar(e)||/windows phone/i.test(e)||Rr(e)}
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
function Mr(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ir(oe());break;case"Worker":t="".concat(Ir(oe()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(vt,"/").concat(r)}
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
 */var Ur=function(){"use strict";function e(t){o(this,e),this.auth=t,this.queue=[]}return s(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return n((function(){var n,r,o,a,s,u,c,l,h,f,d,v,p,y,g;return i(this,(function(i){switch(i.label){case 0:if(t.auth.currentUser===e)return[2];n=[],i.label=1;case 1:i.trys.push([1,10,,11]),r=!0,o=!1,a=void 0,i.label=2;case 2:i.trys.push([2,7,8,9]),s=t.queue[Symbol.iterator](),i.label=3;case 3:return(r=(u=s.next()).done)?[3,6]:[4,(c=u.value)(e)];case 4:i.sent(),c.onAbort&&n.push(c.onAbort),i.label=5;case 5:return r=!0,[3,3];case 6:return[3,9];case 7:return l=i.sent(),o=!0,a=l,[3,9];case 8:try{r||null==s.return||s.return()}finally{if(o)throw a}return[7];case 9:return[3,11];case 10:h=i.sent(),n.reverse(),f=!0,d=!1,v=void 0;try{for(p=n[Symbol.iterator]();!(f=(y=p.next()).done);f=!0){g=y.value;try{g()}catch(e){}}}catch(e){d=!0,v=e}finally{try{f||null==p.return||p.return()}finally{if(d)throw v}}throw t.auth._errorFactory.create("login-blocked",{originalMessage:null==h?void 0:h.message});case 11:return[2]}}))}))()}}]),e}(),xr=function(){"use strict";function e(t,n,r){o(this,e),this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jr(this),this.idTokenSubscription=new jr(this),this.beforeStateQueue=new Ur(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}return s(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=On(t));var r=this;return this._initializationPromise=this.queue(n((function(){var n,o;return i(this,(function(i){switch(i.label){case 0:return r._deleted?[2]:[4,wr.create(r,e)];case 1:if(r.persistenceManager=i.sent(),r._deleted)return[2];if(!(null===(n=r._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively))return[3,5];i.label=2;case 2:return i.trys.push([2,4,,5]),[4,r._popupRedirectResolver._initialize(r)];case 3:return i.sent(),[3,5];case 4:return i.sent(),[3,5];case 5:return[4,r.initializeCurrentUser(t)];case 6:return i.sent(),r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,r._deleted?[2]:(r._isInitialized=!0,[2])}}))}))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return e._deleted?[2]:[4,e.assertedPersistence.getCurrentUser()];case 1:return t=n.sent(),e.currentUser||t?e.currentUser&&t&&e.currentUser.uid===t.uid?(e._currentUser._assign(t),[4,e.currentUser.getIdToken()]):[3,3]:[2];case 2:case 4:return n.sent(),[2];case 3:return[4,e._updateCurrentUser(t,!0)]}}))}))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return n((function(){var n,r,o,a,s,u,c,l;return i(this,(function(i){switch(i.label){case 0:return[4,t.assertedPersistence.getCurrentUser()];case 1:return r=i.sent(),o=r,a=!1,e&&t.config.authDomain?[4,t.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return i.sent(),s=null===(n=t.redirectUser)||void 0===n?void 0:n._redirectEventId,u=null==o?void 0:o._redirectEventId,[4,t.tryRedirectSignIn(e)];case 3:c=i.sent(),s&&s!==u||!(null==c?void 0:c.user)||(o=c.user,a=!0),i.label=4;case 4:if(!o)return[2,t.directlySetCurrentUser(null)];if(o._redirectEventId)return[3,9];if(!a)return[3,8];i.label=5;case 5:return i.trys.push([5,7,,8]),[4,t.beforeStateQueue.runMiddleware(o)];case 6:return i.sent(),[3,8];case 7:return l=i.sent(),o=r,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(l)})),[3,8];case 8:return o?[2,t.reloadAndSetCurrentUserOrClear(o)]:[2,t.directlySetCurrentUser(null)];case 9:return Tn(t._popupRedirectResolver,t,"argument-error"),[4,t.getOrInitRedirectPersistenceManager()];case 10:return i.sent(),t.redirectUser&&t.redirectUser._redirectEventId===o._redirectEventId?[2,t.directlySetCurrentUser(o)]:[2,t.reloadAndSetCurrentUserOrClear(o)]}}))}))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){switch(r.label){case 0:n=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,t._popupRedirectResolver._completeRedirectFn(t,e,!0)];case 2:return n=r.sent(),[3,5];case 3:return r.sent(),[4,t._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,n]}}))}))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,cr(e)];case 1:return r.sent(),[3,3];case 2:return"auth/network-request-failed"!==(null==(n=r.sent())?void 0:n.code)?[2,t.directlySetCurrentUser(null)]:[3,3];case 3:return[2,t.directlySetCurrentUser(e)]}}))}))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return n((function(){return i(this,(function(t){return e._deleted=!0,[2]}))}))()}},{key:"updateCurrentUser",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){return(n=e?ke(e):null)&&Tn(n.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),[2,t._updateCurrentUser(n&&n._clone(t))]}))}))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n((function(){return i(this,(function(o){switch(o.label){case 0:return r._deleted?[2]:(e&&Tn(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),t?[3,2]:[4,r.beforeStateQueue.runMiddleware(e)]);case 1:o.sent(),o.label=2;case 2:return[2,r.queue(n((function(){return i(this,(function(t){switch(t.label){case 0:return[4,r.directlySetCurrentUser(e)];case 1:return t.sent(),r.notifyAuthListeners(),[2]}}))})))]}}))}))()}},{key:"signOut",value:function(){var e=this;return n((function(){return i(this,(function(t){switch(t.label){case 0:return[4,e.beforeStateQueue.runMiddleware(null)];case 1:return t.sent(),e.redirectPersistenceManager||e._popupRedirectResolver?[4,e._setRedirectUser(null)]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2,e._updateCurrentUser(null,!0)]}}))}))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue(n((function(){return i(this,(function(n){switch(n.label){case 0:return[4,t.assertedPersistence.setPersistence(On(e))];case 1:return n.sent(),[2]}}))})))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new ue("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var r=this;return n((function(){var n;return i(this,(function(i){switch(i.label){case 0:return[4,r.getOrInitRedirectPersistenceManager(t)];case 1:return n=i.sent(),[2,null===e?n.removeCurrentUser():n.setCurrentUser(e)]}}))}))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){switch(r.label){case 0:return t.redirectPersistenceManager?[3,3]:(Tn(n=e&&On(e)||t._popupRedirectResolver,t,"argument-error"),[4,wr.create(t,[On(n._redirectPersistence)],"redirectUser")]);case 1:return t.redirectPersistenceManager=r.sent(),[4,t.redirectPersistenceManager.getCurrentUser()];case 2:t.redirectUser=r.sent(),r.label=3;case 3:return[2,t.redirectPersistenceManager]}}))}))()}},{key:"_redirectUserForId",value:function(e){var t=this;return n((function(){var r,o;return i(this,(function(a){switch(a.label){case 0:return t._isInitialized?[4,t.queue(n((function(){return i(this,(function(e){return[2]}))})))]:[3,2];case 1:a.sent(),a.label=2;case 2:return(null===(r=t._currentUser)||void 0===r?void 0:r._redirectEventId)===e?[2,t._currentUser]:(null===(o=t.redirectUser)||void 0===o?void 0:o._redirectEventId)===e?[2,t.redirectUser]:[2,null]}}))}))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return n((function(){return i(this,(function(r){return e===t.currentUser?[2,t.queue(n((function(){return i(this,(function(n){return[2,t.directlySetCurrentUser(e)]}))})))]:[2]}))}))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return Tn(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:return t.currentUser&&t.currentUser!==e&&t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh(),t.currentUser=e,e?[4,t.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,t.assertedPersistence.removeCurrentUser()];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return Tn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mr(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return n((function(){var t,n,r;return i(this,(function(i){switch(i.label){case 0:return n=u({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(n["X-Firebase-gmpid"]=e.app.options.appId),[4,null===(t=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader()];case 1:return(r=i.sent())&&(n["X-Firebase-Client"]=r),[2,n]}}))}))()}}]),e}();
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
 */function Fr(e){return ke(e)}var jr=function(){"use strict";function e(t){var n,r,i=this;o(this,e),this.auth=t,this.observer=null,this.addObserver=(r=new ge((function(e){return i.observer=e}),n)).subscribe.bind(r)}return s(e,[{key:"next",get:function(){return Tn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function Br(e,t,n){var r=Fr(e);Tn(r._canInitEmulator,r,"emulator-config-failed"),Tn(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");var i=!!(null==n?void 0:n.disableWarnings),o=zr(t),a=function(e){var t=zr(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};var r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){var o=i[1];return{host:o,port:Vr(r.substr(o.length+1))}}var a=g(r.split(":"),2);return{host:a[0],port:Vr(a[1])}}(t),s=a.host,u=a.port,c=null===u?"":":".concat(u);r.config.emulator={url:"".concat(o,"//").concat(s).concat(c,"/")},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function zr(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Vr(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Hr=function(){"use strict";function e(t,n){o(this,e),this.providerId=t,this.signInMethod=n}return s(e,[{key:"toJSON",value:function(){return En("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return En("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return En("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return En("not implemented")}}]),e}();function Wr(e,t){return Kr.apply(this,arguments)}function Kr(){return(Kr=n((function(e,t){return i(this,(function(n){return[2,zn(e,"POST","/v1/accounts:update",t)]}))}))).apply(this,arguments)}function qr(e,t){return Gr.apply(this,arguments)}function Gr(){return(Gr=
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
n((function(e,t){return i(this,(function(n){return[2,Kn(e,"POST","/v1/accounts:signInWithPassword",Bn(e,t))]}))}))).apply(this,arguments)}function Jr(e,t){return Yr.apply(this,arguments)}function Yr(){return(Yr=
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
n((function(e,t){return i(this,(function(n){return[2,Kn(e,"POST","/v1/accounts:signInWithEmailLink",Bn(e,t))]}))}))).apply(this,arguments)}function Xr(e,t){return $r.apply(this,arguments)}function $r(){return($r=n((function(e,t){return i(this,(function(n){return[2,Kn(e,"POST","/v1/accounts:signInWithEmailLink",Bn(e,t))]}))}))).apply(this,arguments)}
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
 */var Qr=function(e){"use strict";_(r,e);var t=P(r);function r(e,n,i){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return o(this,r),(a=t.call(this,"password",i))._email=e,a._password=n,a._tenantId=s,a}return s(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return n((function(){return i(this,(function(n){switch(t.signInMethod){case"password":return[2,qr(e,{returnSecureToken:!0,email:t._email,password:t._password})];case"emailLink":return[2,Jr(e,{email:t._email,oobCode:t._password})];default:bn(e,"internal-error")}return[2]}))}))()}},{key:"_linkToIdToken",value:function(e,t){var r=this;return n((function(){return i(this,(function(n){switch(r.signInMethod){case"password":return[2,Wr(e,{idToken:t,returnSecureToken:!0,email:r._email,password:r._password})];case"emailLink":return[2,Xr(e,{idToken:t,email:r._email,oobCode:r._password})];default:bn(e,"internal-error")}return[2]}))}))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Hr);function Zr(e,t){return ei.apply(this,arguments)}function ei(){return(ei=
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
n((function(e,t){return i(this,(function(n){return[2,Kn(e,"POST","/v1/accounts:signInWithIdp",Bn(e,t))]}))}))).apply(this,arguments)}
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
 */var ti=function(e){"use strict";_(n,e);var t=P(n);function n(){var e;return o(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return s(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Zr(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Zr(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Zr(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ve(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):bn("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,i=t.providerId,o=t.signInMethod,a=r(t,["providerId","signInMethod"]);if(!i||!o)return null;var s=new n(i,o);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}}]),n}(Hr);function ni(e,t){return ri.apply(this,arguments)}function ri(){return(ri=
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
n((function(e,t){return i(this,(function(n){return[2,zn(e,"POST","/v1/accounts:sendVerificationCode",Bn(e,t))]}))}))).apply(this,arguments)}function ii(){return(ii=n((function(e,t){return i(this,(function(n){return[2,Kn(e,"POST","/v1/accounts:signInWithPhoneNumber",Bn(e,t))]}))}))).apply(this,arguments)}function oi(){return(oi=n((function(e,t){var n;return i(this,(function(r){switch(r.label){case 0:return[4,Kn(e,"POST","/v1/accounts:signInWithPhoneNumber",Bn(e,t))];case 1:if((n=r.sent()).temporaryProof)throw Yn(e,"account-exists-with-different-credential",n);return[2,n]}}))}))).apply(this,arguments)}var ai=u({},"USER_NOT_FOUND","user-not-found");function si(){return(si=n((function(e,t){var n;return i(this,(function(r){return n=Object.assign(Object.assign({},t),{operation:"REAUTH"}),[2,Kn(e,"POST","/v1/accounts:signInWithPhoneNumber",Bn(e,n),ai)]}))}))).apply(this,arguments)}
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
 */var ui=function(e){"use strict";_(n,e);var t=P(n);function n(e){var r;return o(this,n),(r=t.call(this,"phone","phone")).params=e,r}return s(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return ii.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return oi.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return si.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return r||t||i||o?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o}):null}}]),n}(Hr);
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
 */var ci=function(){"use strict";function e(t){var n,r,i,a,s,u;o(this,e);var c=pe(ye(t)),l=null!==(n=c.apiKey)&&void 0!==n?n:null,h=null!==(r=c.oobCode)&&void 0!==r?r:null,f=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);Tn(l&&h&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=h,this.continueUrl=null!==(a=c.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return s(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=pe(ye(e)).link,n=t?pe(ye(t)).deep_link_id:null,r=pe(ye(e)).deep_link_id;return(r?pe(ye(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
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
var li=function(){"use strict";function e(){o(this,e),this.providerId=e.PROVIDER_ID}return s(e,null,[{key:"credential",value:function(e,t){return Qr._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=ci.parseLink(t);return Tn(n,"argument-error"),Qr._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();li.PROVIDER_ID="password",li.EMAIL_PASSWORD_SIGN_IN_METHOD="password",li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var hi=function(){"use strict";function e(t){o(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return s(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),fi=function(e){"use strict";_(n,e);var t=P(n);function n(){var e;return o(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return s(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return v(this.scopes)}}]),n}(hi),di=function(e){"use strict";_(n,e);var t=P(n);function n(){return o(this,n),t.call(this,"facebook.com")}return s(n,null,[{key:"credential",value:function(e){return ti._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(fi);
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
 */di.FACEBOOK_SIGN_IN_METHOD="facebook.com",di.PROVIDER_ID="facebook.com";
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
var vi=function(e){"use strict";_(n,e);var t=P(n);function n(){var e;return o(this,n),(e=t.call(this,"google.com")).addScope("profile"),e}return s(n,null,[{key:"credential",value:function(e,t){return ti._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(fi);vi.GOOGLE_SIGN_IN_METHOD="google.com",vi.PROVIDER_ID="google.com";
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
var pi=function(e){"use strict";_(n,e);var t=P(n);function n(){return o(this,n),t.call(this,"github.com")}return s(n,null,[{key:"credential",value:function(e){return ti._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(fi);pi.GITHUB_SIGN_IN_METHOD="github.com",pi.PROVIDER_ID="github.com";
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
var yi=function(e){"use strict";_(n,e);var t=P(n);function n(){return o(this,n),t.call(this,"twitter.com")}return s(n,null,[{key:"credential",value:function(e,t){return ti._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(fi);yi.TWITTER_SIGN_IN_METHOD="twitter.com",yi.PROVIDER_ID="twitter.com";
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
var gi=function(){"use strict";function e(t){o(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return s(e,null,[{key:"_fromIdTokenResponse",value:function(t,r,o){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n((function(){var n,s;return i(this,(function(i){switch(i.label){case 0:return[4,mr._fromIdTokenResponse(t,o,a)];case 1:return n=i.sent(),s=mi(o),[2,new e({user:n,providerId:s,_tokenResponse:o,operationType:r})]}}))}))()}},{key:"_forOperation",value:function(t,r,o){return n((function(){var n;return i(this,(function(i){switch(i.label){case 0:return[4,t._updateTokensIfNecessary(o,!0)];case 1:return i.sent(),n=mi(o),[2,new e({user:t,providerId:n,_tokenResponse:o,operationType:r})]}}))}))()}}]),e}();function mi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var ki=function(e){"use strict";_(n,e);var t=P(n);function n(e,r,i,a){var s,u;return o(this,n),(s=t.call(this,r.code,r.message)).operationType=i,s.user=a,Object.setPrototypeOf(m(s),n.prototype),s.customData={appName:e.name,tenantId:null!==(u=e.tenantId)&&void 0!==u?u:void 0,_serverResponse:r.customData._serverResponse,operationType:i},s}return s(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(se);function bi(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw ki._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function _i(e,t){return wi.apply(this,arguments)}function wi(){return wi=n((function(e,t){var n,r,o,a,s,u=arguments;return i(this,(function(i){switch(i.label){case 0:return n=u.length>2&&void 0!==u[2]&&u[2],o=[e],a=t._linkToIdToken,s=[e.auth],[4,e.getIdToken()];case 1:return[4,ir.apply(void 0,o.concat([a.apply(t,s.concat([i.sent()])),n]))];case 2:return r=i.sent(),[2,gi._forOperation(e,"link",r)]}}))})),wi.apply(this,arguments)}function Ii(e,t){return Ti.apply(this,arguments)}function Ti(){return Ti=
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
n((function(e,t){var n,r,o,a,s,u,c,l=arguments;return i(this,(function(i){switch(i.label){case 0:n=l.length>2&&void 0!==l[2]&&l[2],r=e.auth,o="reauthenticate",i.label=1;case 1:return i.trys.push([1,3,,4]),[4,ir(e,bi(r,o,t,e),n)];case 2:return Tn((a=i.sent()).idToken,r,"internal-error"),Tn(s=rr(a.idToken),r,"internal-error"),u=s.sub,Tn(e.uid===u,r,"user-mismatch"),[2,gi._forOperation(e,o,a)];case 3:throw"auth/user-not-found"===(null==(c=i.sent())?void 0:c.code)&&bn(r,"user-mismatch"),c;case 4:return[2]}}))})),Ti.apply(this,arguments)}function Ei(e,t){return Si.apply(this,arguments)}function Si(){return Si=
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
n((function(e,t){var n,r,o,a,s=arguments;return i(this,(function(i){switch(i.label){case 0:return n=s.length>2&&void 0!==s[2]&&s[2],[4,bi(e,r="signIn",t)];case 1:return o=i.sent(),[4,gi._fromIdTokenResponse(e,r,o)];case 2:return a=i.sent(),n?[3,4]:[4,e._updateCurrentUser(a.user)];case 3:i.sent(),i.label=4;case 4:return[2,a]}}))})),Si.apply(this,arguments)}function Ri(e,t,n,r){return ke(e).onIdTokenChanged(t,n,r)}function Oi(e,t,n){return ke(e).beforeAuthStateChanged(t,n)}
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
function Ai(e,t){return zn(e,"POST","/v2/accounts/mfaEnrollment:start",Bn(e,t))}new WeakMap;var Ci="__sak",Pi=function(){"use strict";function e(t,n){o(this,e),this.storageRetriever=t,this.type=n}return s(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Ci,"1"),this.storage.removeItem(Ci),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
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
 */var Ni=function(e){"use strict";_(r,e);var t=P(r);function r(){var e,n;return o(this,r),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Er(n=oe())||Pr(n))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Lr(),e._shouldAllowMigration=!0,e}return s(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var o=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},a=this.storage.getItem(r);Dr()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else this.forAllChangedKeys((function(e,t,r){n.notifyListeners(e,r)}))}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){e.forAllChangedKeys((function(t,n,r){e.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var o=this,a=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:return[4,Lt(S(r.prototype),"_set",o).call(a,e,t)];case 1:return n.sent(),a.localCache[e]=JSON.stringify(t),[2]}}))}))()}},{key:"_get",value:function(e){var t=this,o=this;return n((function(){var n;return i(this,(function(i){switch(i.label){case 0:return[4,Lt(S(r.prototype),"_get",t).call(o,e)];case 1:return n=i.sent(),o.localCache[e]=JSON.stringify(n),[2,n]}}))}))()}},{key:"_remove",value:function(e){var t=this,o=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:return[4,Lt(S(r.prototype),"_remove",t).call(o,e)];case 1:return n.sent(),delete o.localCache[e],[2]}}))}))()}}]),r}(Pi);Ni.type="LOCAL";var Di=Ni,Li=function(e){"use strict";_(n,e);var t=P(n);function n(){return o(this,n),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return s(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(Pi);
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
 */Li.type="SESSION";var Mi=Li;
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
 */function Ui(e){return Promise.all(e.map((t=n((function(e){return i(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,e];case 1:return[2,{fulfilled:!0,value:t.sent()}];case 2:return[2,{fulfilled:!1,reason:t.sent()}];case 3:return[2]}}))})),function(e){return t.apply(this,arguments)})));var t}
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
 */var xi=function(){"use strict";function e(t){o(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return s(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return n((function(){var r,o,a,s,u,c,l,h;return i(this,(function(f){switch(f.label){case 0:return o=(r=e).data,a=o.eventId,s=o.eventType,u=o.data,(null==(c=t.handlersMap[s])?void 0:c.size)?(r.ports[0].postMessage({status:"ack",eventId:a,eventType:s}),l=Array.from(c).map((d=n((function(e){return i(this,(function(t){return[2,e(r.origin,u)]}))})),function(e){return d.apply(this,arguments)})),[4,Ui(l)]):[2];case 1:return h=f.sent(),r.ports[0].postMessage({status:"done",eventId:a,eventType:s,response:h}),[2]}var d}))}))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
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
 */xi.receivers=[];var ji=function(){"use strict";function e(t){o(this,e),this.target=t,this.handlers=new Set}return s(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,o=this;return n((function(){var n,a,s;return i(this,(function(i){if(!(n="undefined"!=typeof MessageChannel?new MessageChannel:null))throw new Error("connection_unavailable");return[2,new Promise((function(i,u){var c=Fi("",20);n.port1.start();var l=setTimeout((function(){u(new Error("unsupported_event"))}),r);s={messageChannel:n,onMessage:function(e){var t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),a=setTimeout((function(){u(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),i(t.data.response);break;default:clearTimeout(l),clearTimeout(a),u(new Error("invalid_response"))}}},o.handlers.add(s),n.port1.addEventListener("message",s.onMessage),o.target.postMessage({eventType:e,eventId:c,data:t},[n.port2])})).finally((function(){s&&o.removeMessageHandler(s)}))]}))}))()}}]),e}();
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
 */function Bi(){return window}
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
function zi(){return void 0!==Bi().WorkerGlobalScope&&"function"==typeof Bi().importScripts}function Vi(){return Hi.apply(this,arguments)}function Hi(){return(Hi=n((function(){return i(this,(function(e){switch(e.label){case 0:if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return[2,null];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,navigator.serviceWorker.ready];case 2:return[2,e.sent().active];case 3:return e.sent(),[2,null];case 4:return[2]}}))}))).apply(this,arguments)}
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
var Wi="firebaseLocalStorageDb",Ki="firebaseLocalStorage",qi="fbase_key",Gi=function(){"use strict";function e(t){o(this,e),this.request=t}return s(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.request.addEventListener("success",(function(){t(e.request.result)})),e.request.addEventListener("error",(function(){n(e.request.error)}))}))}}]),e}();function Ji(e,t){return e.transaction([Ki],t?"readwrite":"readonly").objectStore(Ki)}function Yi(){var e=indexedDB.deleteDatabase(Wi);return new Gi(e).toPromise()}function Xi(){var e=indexedDB.open(Wi,1);return new Promise((function(t,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Ki,{keyPath:qi})}catch(e){r(e)}})),e.addEventListener("success",n((function(){var n;return i(this,(function(r){switch(r.label){case 0:return(n=e.result).objectStoreNames.contains(Ki)?[3,3]:(n.close(),[4,Yi()]);case 1:return r.sent(),[4,Xi()];case 2:return t.apply(void 0,[r.sent()]),[3,4];case 3:t(n),r.label=4;case 4:return[2]}}))})))}))}function $i(e,t,n){return Qi.apply(this,arguments)}function Qi(){return(Qi=n((function(e,t,n){var r,o;return i(this,(function(i){return o=Ji(e,!0).put((u(r={},qi,t),u(r,"value",n),r)),[2,new Gi(o).toPromise()]}))}))).apply(this,arguments)}function Zi(){return(Zi=n((function(e,t){var n,r;return i(this,(function(i){switch(i.label){case 0:return n=Ji(e,!1).get(t),[4,new Gi(n).toPromise()];case 1:return[2,void 0===(r=i.sent())?null:r.value]}}))}))).apply(this,arguments)}function eo(e,t){var n=Ji(e,!0).delete(t);return new Gi(n).toPromise()}var to=function(){"use strict";function e(){o(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return s(e,[{key:"_openDb",value:function(){var e=this;return n((function(){return i(this,(function(t){switch(t.label){case 0:return e.db?[2,e.db]:[4,Xi()];case 1:return e.db=t.sent(),[2,e.db]}}))}))()}},{key:"_withRetries",value:function(e){var t=this;return n((function(){var n,r,o;return i(this,(function(i){switch(i.label){case 0:n=0,i.label=1;case 1:0,i.label=2;case 2:return i.trys.push([2,5,,6]),[4,t._openDb()];case 3:return r=i.sent(),[4,e(r)];case 4:return[2,i.sent()];case 5:if(o=i.sent(),n++>3)throw o;return t.db&&(t.db.close(),t.db=void 0),[3,6];case 6:return[3,1];case 7:return[2]}}))}))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return n((function(){return i(this,(function(t){return[2,zi()?e.initializeReceiver():e.initializeSender()]}))}))()}},{key:"initializeReceiver",value:function(){var e=this;return n((function(){return i(this,(function(t){var r;return e.receiver=xi._getInstance(zi()?self:null),e.receiver._subscribe("keyChanged",(r=n((function(t,n){return i(this,(function(t){switch(t.label){case 0:return[4,e._poll()];case 1:return[2,{keyProcessed:t.sent().includes(n.key)}]}}))})),function(e,t){return r.apply(this,arguments)})),e.receiver._subscribe("ping",function(){var e=n((function(e,t){return i(this,(function(e){return[2,["keyChanged"]]}))}));return function(t,n){return e.apply(this,arguments)}}()),[2]}))}))()}},{key:"initializeSender",value:function(){var e=this;return n((function(){var t,n,r;return i(this,(function(i){switch(i.label){case 0:return[4,Vi()];case 1:return e.activeServiceWorker=i.sent(),e.activeServiceWorker?(e.sender=new ji(e.activeServiceWorker),[4,e.sender._send("ping",{},800)]):[2];case 2:return(r=i.sent())?((null===(t=r[0])||void 0===t?void 0:t.fulfilled)&&(null===(n=r[0])||void 0===n?void 0:n.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0),[2]):[2]}}))}))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:if(!t.sender||!t.activeServiceWorker||function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()!==t.activeServiceWorker)return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50)];case 2:return n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:return[2]}}))}))()}},{key:"_isAvailable",value:function(){return n((function(){var e;return i(this,(function(t){switch(t.label){case 0:return t.trys.push([0,4,,5]),indexedDB?[4,Xi()]:[2,!1];case 1:return[4,$i(e=t.sent(),Ci,"1")];case 2:return t.sent(),[4,eo(e,Ci)];case 3:return t.sent(),[2,!0];case 4:return t.sent(),[3,5];case 5:return[2,!1]}}))}))()}},{key:"_withPendingWrite",value:function(e){var t=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:t.pendingWrites++,n.label=1;case 1:return n.trys.push([1,,3,4]),[4,e()];case 2:return n.sent(),[3,4];case 3:return t.pendingWrites--,[7];case 4:return[2]}}))}))()}},{key:"_set",value:function(e,t){var r=this;return n((function(){return i(this,(function(o){return[2,r._withPendingWrite(n((function(){return i(this,(function(n){switch(n.label){case 0:return[4,r._withRetries((function(n){return $i(n,e,t)}))];case 1:return n.sent(),r.localCache[e]=t,[2,r.notifyServiceWorker(e)]}}))})))]}))}))()}},{key:"_get",value:function(e){var t=this;return n((function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,t._withRetries((function(t){return function(e,t){return Zi.apply(this,arguments)}(t,e)}))];case 1:return n=r.sent(),t.localCache[e]=n,[2,n]}}))}))()}},{key:"_remove",value:function(e){var t=this;return n((function(){return i(this,(function(r){return[2,t._withPendingWrite(n((function(){return i(this,(function(n){switch(n.label){case 0:return[4,t._withRetries((function(t){return eo(t,e)}))];case 1:return n.sent(),delete t.localCache[e],[2,t.notifyServiceWorker(e)]}}))})))]}))}))()}},{key:"_poll",value:function(){var e=this;return n((function(){var t,n,r,o,a,s,u,c,l,h,f,d,v,p,y,g,m;return i(this,(function(i){switch(i.label){case 0:return[4,e._withRetries((function(e){var t=Ji(e,!1).getAll();return new Gi(t).toPromise()}))];case 1:if(!(t=i.sent()))return[2,[]];if(0!==e.pendingWrites)return[2,[]];n=[],r=new Set,o=!0,a=!1,s=void 0;try{for(u=t[Symbol.iterator]();!(o=(c=u.next()).done);o=!0)l=c.value,h=l.fbase_key,f=l.value,r.add(h),JSON.stringify(e.localCache[h])!==JSON.stringify(f)&&(e.notifyListeners(h,f),n.push(h))}catch(e){a=!0,s=e}finally{try{o||null==u.return||u.return()}finally{if(a)throw s}}d=!0,v=!1,p=void 0;try{for(y=Object.keys(e.localCache)[Symbol.iterator]();!(d=(g=y.next()).done);d=!0)m=g.value,e.localCache[m]&&!r.has(m)&&(e.notifyListeners(m,null),n.push(m))}catch(e){v=!0,p=e}finally{try{d||null==y.return||y.return()}finally{if(v)throw p}}return[2,n]}}))}))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(n((function(){return i(this,(function(t){return[2,e._poll()]}))})),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();to.type="LOCAL";var no=to;
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
 */function ro(e,t){return zn(e,"POST","/v2/accounts/mfaSignIn:start",Bn(e,t))}function io(e){return new Promise((function(t,n){var r,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=_n("internal-error");t.customData=e,n(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(o)}))}function oo(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
oo("rcb"),new Ln(3e4,6e4);var ao="recaptcha";
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
 */function so(e,t,n){return uo.apply(this,arguments)}function uo(){return(uo=n((function(e,t,n){var r,o,a,s,u;return i(this,(function(i){switch(i.label){case 0:return[4,n.verify()];case 1:o=i.sent(),i.label=2;case 2:return i.trys.push([2,,10,11]),Tn("string"==typeof o,e,"argument-error"),Tn(n.type===ao,e,"argument-error"),"session"in(a="string"==typeof t?{phoneNumber:t}:t)?(s=a.session,"phoneNumber"in a?(Tn("enroll"===s.type,e,"internal-error"),[4,Ai(e,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}})]):[3,4]):[3,7];case 3:return[2,i.sent().phoneSessionInfo.sessionInfo];case 4:return Tn("signin"===s.type,e,"internal-error"),Tn(u=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid,e,"missing-multi-factor-info"),[4,ro(e,{mfaPendingCredential:s.credential,mfaEnrollmentId:u,phoneSignInInfo:{recaptchaToken:o}})];case 5:return[2,i.sent().phoneResponseInfo.sessionInfo];case 6:return[3,9];case 7:return[4,ni(e,{phoneNumber:a.phoneNumber,recaptchaToken:o})];case 8:return[2,i.sent().sessionInfo];case 9:return[3,11];case 10:return n._reset(),[7];case 11:return[2]}}))}))).apply(this,arguments)}
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
var co=function(){"use strict";function e(t){o(this,e),this.providerId=e.PROVIDER_ID,this.auth=Fr(t)}return s(e,[{key:"verifyPhoneNumber",value:function(e,t){return so(this.auth,e,ke(t))}}],[{key:"credential",value:function(e,t){return ui._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?ui._fromTokenResponse(n,r):null}}]),e}();
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
function lo(e,t){return t?On(t):(Tn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */co.PROVIDER_ID="phone",co.PHONE_SIGN_IN_METHOD="phone";var ho=function(e){"use strict";_(n,e);var t=P(n);function n(e){var r;return o(this,n),(r=t.call(this,"custom","custom")).params=e,r}return s(n,[{key:"_getIdTokenResponse",value:function(e){return Zr(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Zr(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Zr(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(Hr);function fo(e){return Ei(e.auth,new ho(e),e.bypassAuthState)}function vo(e){var t=e.auth,n=e.user;return Tn(n,t,"internal-error"),Ii(n,new ho(e),e.bypassAuthState)}function po(e){return yo.apply(this,arguments)}function yo(){return(yo=n((function(e){var t,n;return i(this,(function(r){return t=e.auth,Tn(n=e.user,t,"internal-error"),[2,_i(n,new ho(e),e.bypassAuthState)]}))}))).apply(this,arguments)}
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
 */var go=function(){"use strict";function e(t,n,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];o(this,e),this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return s(e,[{key:"execute",value:function(){var e,t=this;return new Promise((e=n((function(e,n){var r;return i(this,(function(i){switch(i.label){case 0:t.pendingPromise={resolve:e,reject:n},i.label=1;case 1:return i.trys.push([1,4,,5]),[4,t.resolver._initialize(t.auth)];case 2:return t.eventManager=i.sent(),[4,t.onExecution()];case 3:return i.sent(),t.eventManager.registerConsumer(t),[3,5];case 4:return r=i.sent(),t.reject(r),[3,5];case 5:return[2]}}))})),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var t=this;return n((function(){var n,r,o,a,s,u,c,l,h;return i(this,(function(i){switch(i.label){case 0:if(n=e.urlResponse,r=e.sessionId,o=e.postBody,a=e.tenantId,s=e.error,u=e.type,s)return t.reject(s),[2];c={auth:t.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:t.user,bypassAuthState:t.bypassAuthState},i.label=1;case 1:return i.trys.push([1,3,,4]),l=t.resolve,[4,t.getIdpTask(u)(c)];case 2:return l.apply(t,[i.sent()]),[3,4];case 3:return h=i.sent(),t.reject(h),[3,4];case 4:return[2]}}))}))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fo;case"linkViaPopup":case"linkViaRedirect":return po;case"reauthViaPopup":case"reauthViaRedirect":return vo;default:bn(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),mo=new Ln(2e3,1e4);
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
 */var ko=function(e){"use strict";_(r,e);var t=P(r);function r(e,n,i,a,s){var u;return o(this,r),(u=t.call(this,e,n,a,s)).provider=i,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=m(u),u}return s(r,[{key:"executeNotNull",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,e.execute()];case 1:return Tn(t=n.sent(),e.auth,"internal-error"),[2,t]}}))}))()}},{key:"onExecution",value:function(){var e=this;return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return Sn(1===e.filter.length,"Popup operations only handle one event"),t=Fi(),[4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],t)];case 1:return e.authWindow=n.sent(),e.authWindow.associatedEvent=t,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(_n(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation(),[2]}}))}))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(_n(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed)?e.pollId=window.setTimeout((function(){e.pollId=null,e.reject(_n(e.auth,"popup-closed-by-user"))}),2e3):e.pollId=window.setTimeout(t,mo.get())};t()}}]),r}(go);ko.currentPopupAction=null;
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
var bo=new Map,_o=function(e){"use strict";_(r,e);var t=P(r);function r(e,n){var i,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return o(this,r),(i=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,a)).eventId=null,i}return s(r,[{key:"execute",value:function(){var e=this,t=this;return n((function(){var n,o,a,s;return i(this,(function(i){switch(i.label){case 0:if(n=bo.get(t.auth._key()))return[3,8];i.label=1;case 1:return i.trys.push([1,6,,7]),[4,wo(t.resolver,t.auth)];case 2:return i.sent()?[4,Lt(S(r.prototype),"execute",e).call(t)]:[3,4];case 3:return a=i.sent(),[3,5];case 4:a=null,i.label=5;case 5:return o=a,n=function(){return Promise.resolve(o)},[3,7];case 6:return s=i.sent(),n=function(){return Promise.reject(s)},[3,7];case 7:bo.set(t.auth._key(),n),i.label=8;case 8:return t.bypassAuthState||bo.set(t.auth._key(),(function(){return Promise.resolve(null)})),[2,n()]}}))}))()}},{key:"onAuthEvent",value:function(e){var t=this,o=this,a=function(){return Lt(S(r.prototype),"onAuthEvent",t)};return n((function(){var t;return i(this,(function(n){switch(n.label){case 0:return"signInViaRedirect"===e.type?[2,a().call(o,e)]:"unknown"===e.type?(o.resolve(null),[2]):e.eventId?[4,o.auth._redirectUserForId(e.eventId)]:[3,2];case 1:if(t=n.sent())return o.user=t,[2,a().call(o,e)];o.resolve(null),n.label=2;case 2:return[2]}}))}))()}},{key:"onExecution",value:function(){return n((function(){return i(this,(function(e){return[2]}))}))()}},{key:"cleanUp",value:function(){}}]),r}(go);function wo(e,t){return Io.apply(this,arguments)}function Io(){return(Io=n((function(e,t){var n,r,o;return i(this,(function(i){switch(i.label){case 0:return n=So(t),[4,(r=Eo(e))._isAvailable()];case 1:return i.sent()?[4,r._get(n)]:[2,!1];case 2:return o="true"===i.sent(),[4,r._remove(n)];case 3:return i.sent(),[2,o]}}))}))).apply(this,arguments)}function To(e,t){bo.set(e._key(),t)}function Eo(e){return On(e._redirectPersistence)}function So(e){return _r("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Ro(e,t){return Oo.apply(this,arguments)}function Oo(){return Oo=n((function(e,t){var n,r,o,a,s=arguments;return i(this,(function(i){switch(i.label){case 0:return n=s.length>2&&void 0!==s[2]&&s[2],r=Fr(e),o=lo(r,t),[4,new _o(r,o,n).execute()];case 1:return!(a=i.sent())||n?[3,4]:(delete a.user._redirectEventId,[4,r._persistUserIfCurrent(a.user)]);case 2:return i.sent(),[4,r._setRedirectUser(null,t)];case 3:i.sent(),i.label=4;case 4:return[2,a]}}))})),Oo.apply(this,arguments)}
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
var Ao=function(){"use strict";function e(t){o(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return s(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Po(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Po(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(_n(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Co(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Co(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Co(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Po(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function No(e){return Do.apply(this,arguments)}function Do(){return Do=
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
n((function(e){var t,n=arguments;return i(this,(function(r){return t=n.length>1&&void 0!==n[1]?n[1]:{},[2,zn(e,"GET","/v1/projects",t)]}))})),Do.apply(this,arguments)}
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
 */var Lo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mo=/^https?/;function Uo(){return(Uo=n((function(e){var t,n,r,o,a,s,u;return i(this,(function(i){switch(i.label){case 0:return e.config.emulator?[2]:[4,No(e)];case 1:t=i.sent().authorizedDomains,n=!0,r=!1,o=void 0;try{for(a=t[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){u=s.value;try{if(xo(u))return[2]}catch(e){}}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return bn(e,"unauthorized-domain"),[2]}}))}))).apply(this,arguments)}function xo(e){var t=Cn(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===i}if(!Mo.test(r))return!1;if(Lo.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
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
 */var Fo=new Ln(3e4,6e4);function jo(){var e=Bi().___jsl,t=!0,n=!1,r=void 0;if(null==e?void 0:e.H)try{for(var i,o=Object.keys(e.H)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;if(e.H[a].r=e.H[a].r||[],e.H[a].L=e.H[a].L||[],e.H[a].r=v(e.H[a].L),e.CP)for(var s=0;s<e.CP.length;s++)e.CP[s]=null}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}var Bo=null;function zo(e){return Bo=Bo||function(e){return new Promise((function(t,n){var r,i,o;function a(){jo(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){jo(),n(_n(e,"network-request-failed"))},timeout:Fo.get()})}if(null===(i=null===(r=Bi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Bi().gapi)||void 0===o?void 0:o.load)){var s=oo("iframefcb");return Bi()[s]=function(){gapi.load?a():n(_n(e,"network-request-failed"))},io("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}a()}})).catch((function(e){throw Bo=null,e}))}(e),Bo}
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
 */var Vo=new Ln(5e3,15e3),Ho={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ko(e){var t=e.config;Tn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Mn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:vt},i=Wo.get(e.config.apiHost);i&&(r.eid=i);var o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),"".concat(n,"?").concat(ve(r).slice(1))}function qo(e){return Go.apply(this,arguments)}function Go(){return Go=n((function(e){var t,r;return i(this,(function(o){switch(o.label){case 0:return[4,zo(e)];case 1:return t=o.sent(),Tn(r=Bi().gapi,e,"internal-error"),[2,t.open({where:document.body,url:Ko(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ho,dontclear:!0},(function(t){return new Promise((r=n((function(n,r){var o,a;function s(){Bi().clearTimeout(a),n(t)}return i(this,(function(n){switch(n.label){case 0:return[4,t.restyle({setHideOnLeave:!1})];case 1:return n.sent(),o=_n(e,"network-request-failed"),a=Bi().setTimeout((function(){r(o)}),Vo.get()),t.ping(s).then(s,(function(){r(o)})),[2]}}))})),function(e,t){return r.apply(this,arguments)}));var r}))]}}))})),Go.apply(this,arguments)}
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
 */var Jo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yo="_blank",Xo="http://localhost",$o=function(){"use strict";function e(t){o(this,e),this.window=t,this.associatedEvent=null}return s(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Qo(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),s="",u=Object.assign(Object.assign({},Jo),{width:r.toString(),height:i.toString(),top:o,left:a}),c=oe().toLowerCase();n&&(s=Sr(c)?Yo:n),Tr(c)&&(t=t||Xo,u.scrollbars="yes");var l=Object.entries(u).reduce((function(e,t){var n=g(t,2),r=n[0],i=n[1];return"".concat(e).concat(r,"=").concat(i,",")}),"");if(Nr(c)&&"_self"!==s)return Zo(t||"",s),new $o(null);var h=window.open(t||"",s,l);Tn(h,e,"popup-blocked");try{h.focus()}catch(e){}return new $o(h)}function Zo(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var ea="__/auth/handler",ta="emulator/auth/handler";function na(e,t,n,r,i,o){Tn(e.config.authDomain,e,"auth-domain-config-required"),Tn(e.config.apiKey,e,"invalid-api-key");var a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:vt,eventId:i};if(t instanceof hi){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",he(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));var s=!0,u=!1,c=void 0;try{for(var l,h=Object.entries(o||{})[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=g(l.value,2),d=f[0],v=f[1];a[d]=v}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}}if(t instanceof fi){var p=t.getScopes().filter((function(e){return""!==e}));p.length>0&&(a.scopes=p.join(","))}e.tenantId&&(a.tid=e.tenantId);var y,m,k=a,b=!0,_=!1,w=void 0;try{for(var I,T=Object.keys(k)[Symbol.iterator]();!(b=(I=T.next()).done);b=!0){var E=I.value;void 0===k[E]&&delete k[E]}}catch(e){_=!0,w=e}finally{try{b||null==T.return||T.return()}finally{if(_)throw w}}return"".concat((y=e,m=y.config,m.emulator?Mn(m,ta):"https://".concat(m.authDomain,"/").concat(ea)),"?").concat(ve(k).slice(1))}
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
var ra="webStorageSupport",ia=function(){"use strict";function e(){o(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mi,this._completeRedirectFn=Ro,this._overrideRedirectResult=To}return s(e,[{key:"_openPopup",value:function(e,t,r,o){var a=this;return n((function(){var n,s;return i(this,(function(i){return Sn(null===(n=a.eventManagers[e._key()])||void 0===n?void 0:n.manager,"_initialize() not called before _openPopup()"),s=na(e,t,r,Cn(),o),[2,Qo(e,s,Fi())]}))}))()}},{key:"_openRedirect",value:function(e,t,r,o){var a=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:return[4,a._originValidation(e)];case 1:return n.sent(),i=na(e,t,r,Cn(),o),Bi().location.href=i,[2,new Promise((function(){}))]}var i}))}))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,o=r.promise;return i?Promise.resolve(i):(Sn(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch((function(){delete t.eventManagers[n]})),a}},{key:"initAndGetManager",value:function(e){var t=this;return n((function(){var n,r;return i(this,(function(i){switch(i.label){case 0:return[4,qo(e)];case 1:return n=i.sent(),r=new Ao(e),n.register("authEvent",(function(t){return Tn(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:r},t.iframes[e._key()]=n,[2,r]}}))}))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(ra,{type:ra},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[ra];void 0!==i&&t(!!i),bn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Uo.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Lr()||Er()||Pr()}}]),e}(),oa=ia,aa=function(e){"use strict";_(n,e);var t=P(n);function n(e){var r;return o(this,n),(r=t.call(this,"phone")).credential=e,r}return s(n,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return zn(e,"POST","/v2/accounts/mfaEnrollment:finalize",Bn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return zn(e,"POST","/v2/accounts/mfaSignIn:finalize",Bn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function e(t){o(this,e),this.factorId=t}return s(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return En("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){o(this,e)}return s(e,null,[{key:"assertion",value:function(e){return aa._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var sa="@firebase/auth",ua="0.21.1",ca=function(){"use strict";function e(t){o(this,e),this.auth=t,this.internalListeners=new Map}return s(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return n((function(){return i(this,(function(n){switch(n.label){case 0:return t.assertAuthConfigured(),[4,t.auth._initializationPromise];case 1:return n.sent(),t.auth.currentUser?[4,t.auth.currentUser.getIdToken(e)]:[2,null];case 2:return[2,{accessToken:n.sent()}]}}))}))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){Tn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
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
var la,ha=ne("authIdTokenMaxAge")||300,fa=null,da=function(e){return t=n((function(t){var n,r,o,a;return i(this,(function(i){switch(i.label){case 0:return(r=t)?[4,t.getIdTokenResult()]:[3,2];case 1:r=i.sent(),i.label=2;case 2:return(o=(n=r)&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3)&&o>ha?[2]:(a=null==n?void 0:n.token,fa===a?[2]:(fa=a,[4,fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:"Bearer ".concat(a)}:{}})]));case 3:return i.sent(),[2]}}))})),function(e){return t.apply(this,arguments)};var t};la="Browser",ct(new be("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=r.options,a=o.apiKey,s=o.authDomain;return function(e,t){Tn(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),Tn(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:a,authDomain:s,clientPlatform:la,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mr(la)},i=new xr(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),ct(new be("auth-internal",(function(e){return function(e){return new ca(e)}(Fr(e.getProvider("auth").getImmediate()))}),"PRIVATE").setInstantiationMode("EXPLICIT")),gt(sa,ua,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(la)),gt(sa,ua,"esm2017");var va=pt({apiKey:"AIzaSyDeT-dGvxxhBoToHkpCqsX7i-ne2DJAg_c",authDomain:"filmo-8db62.firebaseapp.com",projectId:"filmo-8db62",storageBucket:"filmo-8db62.appspot.com",messagingSenderId:"149168873978"}),pa=function(e,t){var n="string"==typeof e?e:t||"(default)",r=lt("object"==typeof e?e:yt(),"firestore/lite").getImmediate({identifier:n});if(!r._initialized){var i=ee("firestore");i&&dn.apply(void 0,[r].concat(v(i)))}return r}(va);!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt(),t=lt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=An(e,{popupRedirectResolver:oa,persistence:[no,Di,Mi]}),r=ne("authTokenSyncURL");if(r){var i=da(r);Oi(n,i,(function(){return i(n.currentUser)})),Ri(n,(function(e){return i(e)}))}var o=Z("auth");o&&Br(n,"http://".concat(o))}();console.log(va),console.log(pa)}();
//# sourceMappingURL=index.151e47c3.js.map
