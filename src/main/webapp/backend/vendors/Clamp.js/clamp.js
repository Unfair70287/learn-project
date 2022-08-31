/*
* Clamp.js 0.5.2
*
* Copyright 2011-2013, Joseph Schmitt http://joe.sh
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*/
(function(){function a(g,q){q=q||{};var s=this,z=window,p={clamp:q.clamp||2,useNativeClamp:typeof(q.useNativeClamp)!="undefined"?q.useNativeClamp:true,splitOnChars:q.splitOnChars||[".","-","–","—"," "],animate:q.animate||false,truncationChar:q.truncationChar||"…",truncationHTML:q.truncationHTML},v=g.style,r=g.innerHTML,w=typeof(g.style.webkitLineClamp)!="undefined",e=p.clamp,n=e.indexOf&&(e.indexOf("px")>-1||e.indexOf("em")>-1),y;if(p.truncationHTML){y=document.createElement("span");y.innerHTML=p.truncationHTML}function f(A,B){if(!z.getComputedStyle){z.getComputedStyle=function(C,D){this.el=C;this.getPropertyValue=function(E){var F=/(\-([a-z]){1})/g;if(E=="float"){E="styleFloat"}if(F.test(E)){E=E.replace(F,function(){return arguments[2].toUpperCase()})}return C.currentStyle&&C.currentStyle[E]?C.currentStyle[E]:null};return this}}return z.getComputedStyle(A,null).getPropertyValue(B)}function l(B){var A=B||h(g),C=j(g);return Math.max(Math.floor(A/C),0)}function k(A){var B=j(g);return B*A}function j(A){var B=f(A,"line-height");if(B=="normal"){B=parseInt(f(A,"font-size"))*1.2}return parseInt(B)}function h(A){return Math.max(A.scrollHeight,A.offsetHeight,A.clientHeight)}var u=p.splitOnChars.slice(0),t=u[0],c,o;function i(A){if(A.lastChild.children&&A.lastChild.children.length>0){return i(Array.prototype.slice.call(A.children).pop())}else{if(!A.lastChild||!A.lastChild.nodeValue||A.lastChild.nodeValue==""||A.lastChild.nodeValue==p.truncationChar){A.lastChild.parentNode.removeChild(A.lastChild);return i(g)}else{return A.lastChild}}}function x(D,A){if(!A){return}function C(){u=p.splitOnChars.slice(0);t=u[0];c=null;o=null}var B=D.nodeValue.replace(p.truncationChar,"");if(!c){if(u.length>0){t=u.shift()}else{t=""}c=B.split(t)}if(c.length>1){o=c.pop();b(D,c.join(t))}else{c=null}if(y){D.nodeValue=D.nodeValue.replace(p.truncationChar,"");g.innerHTML=D.nodeValue+" "+y.innerHTML+p.truncationChar}if(c){if(h(g)<=A){if(u.length>=0&&t!=""){b(D,c.join(t)+t+o);c=null}else{return g.innerHTML}}}else{if(t==""){b(D,"");D=i(g);C()}}if(p.animate){setTimeout(function(){x(D,A)},p.animate===true?10:p.animate)}else{return x(D,A)}}function b(A,B){A.nodeValue=B+p.truncationChar}if(e=="auto"){e=l()}else{if(n){e=l(parseInt(e))}}var d;if(w&&p.useNativeClamp){v.overflow="hidden";v.textOverflow="ellipsis";v.webkitBoxOrient="vertical";v.display="-webkit-box";v.webkitLineClamp=e;if(n){v.height=p.clamp}}else{var m=k(e);if(m<=h(g)){d=x(i(g),m)}}return{original:r,clamped:d}}window.$clamp=a})();