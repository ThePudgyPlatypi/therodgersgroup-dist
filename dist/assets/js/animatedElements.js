!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){t.exports=jQuery},,,,,function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t,e,n,r){function a(){var t=(new Date).getTime(),e=Math.max((f-t)/r,0),a=Math.round(n-e*i);o.innerHTML=a,a==n&&clearInterval(s)}var o=document.getElementById(t),i=n-e,u=50,l=Math.abs(Math.floor(r/i));l=Math.max(l,u);var s,c=(new Date).getTime(),f=c+r;s=setInterval(a,l),a()}function o(){var t=s.height(),e=s.scrollTop(),n=e+t;u["default"].each(l,function(){var r=(0,u["default"])(this),o=r.outerHeight(),i=r.offset().top,l=i+o;i+=t/8,l-=t/8,c>430?l>=e&&i<=n&&(!r.hasClass("in-view")&&r.hasClass("animated-text")&&a(r.attr("id"),0,r.html(),2e3),r.addClass("in-view")):r.addClass("in-view")})}var i=n(0),u=r(i),l=(0,u["default"])(".animation-element"),s=(0,u["default"])(window),c=s.width();s.width()>430?(s.on("scroll resize",o),s.trigger("scroll")):o()}]);