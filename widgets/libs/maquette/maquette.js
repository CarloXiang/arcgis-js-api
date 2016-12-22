// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

!function(e,t){"function"==typeof define&&define.amd?define(["exports"],t):t("object"==typeof exports&&"string"!=typeof exports.nodeName?exports:e.maquette={})}(this,function(e){"use strict";var t,r,o="http://www.w3.org/",n=o+"2000/svg",i=o+"1999/xlink",s=[],a=function(e,t){var r={};return Object.keys(e).forEach(function(t){r[t]=e[t]}),t&&Object.keys(t).forEach(function(e){r[e]=t[e]}),r},d=function(e,t){return e.vnodeSelector!==t.vnodeSelector?!1:e.properties&&t.properties?e.properties.key!==t.properties.key?!1:e.properties.bind===t.properties.bind:!e.properties&&!t.properties},p=function(e){return{vnodeSelector:"",properties:void 0,children:void 0,text:e.toString(),domNode:null}},u=function(e,t,r){for(var o=0,n=t.length;n>o;o++){var i=t[o];Array.isArray(i)?u(e,i,r):null!==i&&void 0!==i&&(i.hasOwnProperty("vnodeSelector")||(i=p(i)),r.push(i))}},c=function(){throw new Error("Provide a transitions object to the projectionOptions to do animations")},f={namespace:void 0,eventHandlerInterceptor:void 0,styleApplyer:function(e,t,r){e.style[t]=r},transitions:{enter:c,exit:c}},l=function(e){return a(f,e)},v=function(e){if("string"!=typeof e)throw new Error("Style values must be strings")},h=function(e,t,r){if(t)for(var o=r.eventHandlerInterceptor,s=Object.keys(t),a=s.length,d=0;a>d;d++){var p=s[d],u=t[p];if("className"===p)throw new Error('Property "className" is not supported, use "class".');if("class"===p)u.split(/\s+/).forEach(function(t){return e.classList.add(t)});else if("classes"===p)for(var c=Object.keys(u),f=c.length,l=0;f>l;l++){var h=c[l];u[h]&&e.classList.add(h)}else if("styles"===p)for(var m=Object.keys(u),y=m.length,l=0;y>l;l++){var g=m[l],N=u[g];N&&(v(N),r.styleApplyer(e,g,N))}else{if("key"===p)continue;if(null===u||void 0===u)continue;var b=typeof u;"function"===b?0===p.lastIndexOf("on",0)&&(o&&(u=o(p,u,e,t)),"oninput"===p&&!function(){var e=u;u=function(t){t.target["oninput-value"]=t.target.value,e.apply(this,[t])}}(),e[p]=u):"string"===b&&"value"!==p&&"innerHTML"!==p?r.namespace===n&&"href"===p?e.setAttributeNS(i,p,u):e.setAttribute(p,u):e[p]=u}}},m=function(e,t,r,o){if(r){for(var s=!1,a=Object.keys(r),d=a.length,p=0;d>p;p++){var u=a[p],c=r[u],f=t[u];if("class"===u){if(f!==c)throw new Error('"class" property may not be updated. Use the "classes" property for conditional css classes.')}else if("classes"===u)for(var l=e.classList,h=Object.keys(c),m=h.length,y=0;m>y;y++){var g=h[y],N=!!c[g],b=!!f[g];N!==b&&(s=!0,N?l.add(g):l.remove(g))}else if("styles"===u)for(var w=Object.keys(c),x=w.length,y=0;x>y;y++){var S=w[y],A=c[S],k=f[S];A!==k&&(s=!0,A?(v(A),o.styleApplyer(e,S,A)):o.styleApplyer(e,S,""))}else if(c||"string"!=typeof f||(c=""),"value"===u)e[u]!==c&&e["oninput-value"]!==c&&(e[u]=c,e["oninput-value"]=void 0),c!==f&&(s=!0);else if(c!==f){var E=typeof c;if("function"===E)throw new Error("Functions may not be updated on subsequent renders (property: "+u+"). Hint: declare event handler functions outside the render() function.");"string"===E&&"innerHTML"!==u?o.namespace===n&&"href"===u?e.setAttributeNS(i,u,c):e.setAttribute(u,c):e[u]!==c&&(e[u]=c),s=!0}}return s}},y=function(e,t,r){if(""!==t.vnodeSelector)for(var o=r;o<e.length;o++)if(d(e[o],t))return o;return-1},g=function(e,t){if(e.properties){var r=e.properties.enterAnimation;r&&("function"==typeof r?r(e.domNode,e.properties):t.enter(e.domNode,e.properties,r))}},N=function(e,t){var r=e.domNode;if(e.properties){var o=e.properties.exitAnimation;if(o){r.style.pointerEvents="none";var n=function(){r.parentNode&&r.parentNode.removeChild(r)};return"function"==typeof o?void o(r,n,e.properties):void t.exit(e.domNode,e.properties,o,n)}}r.parentNode&&r.parentNode.removeChild(r)},b=function(e,t,r,o){var n=e[t];if(""!==n.vnodeSelector){var i=n.properties,s=i?void 0===i.key?i.bind:i.key:void 0;if(!s)for(var a=0;a<e.length;a++)if(a!==t){var p=e[a];if(d(p,n))throw"added"===o?new Error(r.vnodeSelector+" had a "+n.vnodeSelector+" child added, but there is now more than one. You must add unique key properties to make them distinguishable."):new Error(r.vnodeSelector+" had a "+n.vnodeSelector+" child removed, but there were more than one. You must add unique key properties to make them distinguishable.")}}},w=function(e,o,n,i,a){if(n===i)return!1;n=n||s,i=i||s;for(var p,u=n.length,c=i.length,f=a.transitions,l=0,v=0,h=!1;c>v;){var m=u>l?n[l]:void 0,w=i[v];if(void 0!==m&&d(m,w))h=r(m,w,a)||h,l++;else{var x=y(n,w,l+1);if(x>=0){for(p=l;x>p;p++)N(n[p],f),b(n,p,e,"removed");h=r(n[x],w,a)||h,l=x+1}else t(w,o,u>l?n[l].domNode:void 0,a),g(w,f),b(i,v,e,"added")}v++}if(u>l)for(p=l;u>p;p++)N(n[p],f),b(n,p,e,"removed");return h},x=function(e,r,o){if(r)for(var n=0;n<r.length;n++)t(r[n],e,void 0,o)},S=function(e,t,r){x(e,t.children,r),t.text&&(e.textContent=t.text),h(e,t.properties,r),t.properties&&t.properties.afterCreate&&t.properties.afterCreate.apply(t.properties.bind||t.properties,[e,r,t.vnodeSelector,t.properties,t.children])};t=function(e,t,r,o){var i,s,d,p,u,c=0,f=e.vnodeSelector;if(""===f)i=e.domNode=document.createTextNode(e.text),void 0!==r?t.insertBefore(i,r):t.appendChild(i);else{for(s=0;s<=f.length;++s)d=f.charAt(s),(s===f.length||"."===d||"#"===d)&&(p=f.charAt(c-1),u=f.slice(c,s),"."===p?i.classList.add(u):"#"===p?i.id=u:("svg"===u&&(o=a(o,{namespace:n})),void 0!==o.namespace?i=e.domNode=document.createElementNS(o.namespace,u):(i=e.domNode=document.createElement(u),"input"===u&&e.properties&&void 0!==e.properties.type&&i.setAttribute("type",e.properties.type)),void 0!==r?t.insertBefore(i,r):t.appendChild(i)),c=s+1);S(i,e,o)}},r=function(e,t,r){var o=e.domNode,i=!1;if(e===t)return!1;var s=!1;if(""===t.vnodeSelector){if(t.text!==e.text){var d=document.createTextNode(t.text);return o.parentNode.replaceChild(d,o),t.domNode=d,i=!0}}else 0===t.vnodeSelector.lastIndexOf("svg",0)&&(r=a(r,{namespace:n})),e.text!==t.text&&(s=!0,void 0===t.text?o.removeChild(o.firstChild):o.textContent=t.text),s=w(t,o,e.children,t.children,r)||s,s=m(o,e.properties,t.properties,r)||s,t.properties&&t.properties.afterUpdate&&t.properties.afterUpdate.apply(t.properties.bind||t.properties,[o,r,t.vnodeSelector,t.properties,t.children]);return s&&t.properties&&t.properties.updateAnimation&&t.properties.updateAnimation(o,t.properties,e.properties),t.domNode=e.domNode,i};var A=function(e,t){return{update:function(o){if(e.vnodeSelector!==o.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");r(e,o,t),e=o},domNode:e.domNode}};e.h=function(e){var t=arguments[1];if("string"!=typeof e)throw new Error;var r=1;!t||t.hasOwnProperty("vnodeSelector")||Array.isArray(t)||"object"!=typeof t?t=void 0:r=2;var o=void 0,n=void 0,i=arguments.length;if(i===r+1){var s=arguments[r];"string"==typeof s?o=s:void 0!==s&&null!==s&&1===s.length&&"string"==typeof s[0]&&(o=s[0])}if(void 0===o)for(n=[];i>r;r++){var a=arguments[r];null!==a&&void 0!==a&&(Array.isArray(a)?u(e,a,n):a.hasOwnProperty("vnodeSelector")?n.push(a):n.push(p(a)))}return{vnodeSelector:e,properties:t,children:n,text:""===o?void 0:o,domNode:null}},e.dom={create:function(e,r){return r=l(r),t(e,document.createElement("div"),void 0,r),A(e,r)},append:function(e,r,o){return o=l(o),t(r,e,void 0,o),A(r,o)},insertBefore:function(e,r,o){return o=l(o),t(r,e.parentNode,e,o),A(r,o)},merge:function(e,t,r){return r=l(r),t.domNode=e,S(e,t,r),A(t,r)}},e.createCache=function(){var e=void 0,t=void 0,r={invalidate:function(){t=void 0,e=void 0},result:function(r,o){if(e)for(var n=0;n<r.length;n++)e[n]!==r[n]&&(t=void 0);return t||(t=o(),e=r),t}};return r},e.createMapping=function(e,t,r){var o=[],n=[];return{results:n,map:function(i){for(var s=i.map(e),a=n.slice(),d=0,p=0;p<i.length;p++){var u=i[p],c=s[p];if(c===o[d])n[p]=a[d],r(u,a[d],p),d++;else{for(var f=!1,l=1;l<o.length+1;l++){var v=(d+l)%o.length;if(o[v]===c){n[p]=a[v],r(i[p],a[v],p),d=v+1,f=!0;break}}f||(n[p]=t(u,p))}}n.length=i.length,o=s}}},e.createProjector=function(r){var o,n=l(r);n.eventHandlerInterceptor=function(e,t,r,n){return function(){return o.scheduleRender(),t.apply(n.bind||this,arguments)}};var i,s=!0,a=!1,d=[],p=[],u=function(){if(i=void 0,s){s=!1;for(var e=0;e<d.length;e++){var t=p[e]();d[e].update(t)}s=!0}};return o={renderNow:u,scheduleRender:function(){i||a||(i=requestAnimationFrame(u))},stop:function(){i&&(cancelAnimationFrame(i),i=void 0),a=!0},resume:function(){a=!1,s=!0,o.scheduleRender()},append:function(t,r){d.push(e.dom.append(t,r(),n)),p.push(r)},insertBefore:function(t,r){d.push(e.dom.insertBefore(t,r(),n)),p.push(r)},merge:function(t,r){d.push(e.dom.merge(t,r(),n)),p.push(r)},replace:function(e,r){var o=r();t(o,e.parentNode,e,n),e.parentNode.removeChild(e),d.push(A(o,n)),p.push(r)},detach:function(e){for(var t=0;t<p.length;t++)if(p[t]===e)return p.splice(t,1),d.splice(t,1)[0];throw new Error("renderMaquetteFunction was not found")}}}});