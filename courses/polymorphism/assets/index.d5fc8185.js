import{$ as he,M as pe,R as ve,a as ge}from"./vendor.9460ab77.js";const se={},ye=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const k of u)if(k.type==="childList")for(const F of k.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&e(F)}).observe(document,{childList:!0,subtree:!0});function S(u){const k={};return u.integrity&&(k.integrity=u.integrity),u.referrerpolicy&&(k.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?k.credentials="include":u.crossorigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function e(u){if(u.ep)return;u.ep=!0;const k=S(u);fetch(u.href,k)}};ye();const be=()=>{const E=function(){let t=/(msie) ([\w.]+)/.exec(window.navigator.userAgent.toLowerCase());return t&&t[1]==="msie"?parseFloat(t[2]):null}();var c,S,e,u=!1;function k(){var t;if(document.querySelector('script[src$="menu.js"]')){var n=document.querySelector('script[src$="menu.js"]');n&&(t=n.src.slice(0,-7))}else t=se.url.slice(0,se.url.lastIndexOf("/")+1);return t}function F(t){e=t.menu||{},e.path=e.path||k()||"plugin/menu/",e.path.endsWith("/")||(e.path+="/"),e.side===void 0&&(e.side="left"),e.numbers===void 0&&(e.numbers=!1),typeof e.titleSelector!="string"&&(e.titleSelector="h1, h2, h3, h4, h5"),e.hideMissingTitles===void 0&&(e.hideMissingTitles=!1),e.useTextContentForMissingTitles===void 0&&(e.useTextContentForMissingTitles=!1),e.markers===void 0&&(e.markers=!0),typeof e.themesPath!="string"&&(e.themesPath="dist/theme/"),e.themesPath.endsWith("/")||(e.themesPath+="/"),a("link#theme")||(e.themes=!1),e.themes===!0?e.themes=[{name:"Dark",theme:e.themesPath+"dark.css"},{name:"Black",theme:e.themesPath+"black.css"},{name:"White",theme:e.themesPath+"white.css"},{name:"League",theme:e.themesPath+"league.css"},{name:"Sky",theme:e.themesPath+"sky.css"},{name:"Beige",theme:e.themesPath+"beige.css"},{name:"Simple",theme:e.themesPath+"simple.css"},{name:"Serif",theme:e.themesPath+"serif.css"},{name:"Blood",theme:e.themesPath+"blood.css"},{name:"Night",theme:e.themesPath+"night.css"},{name:"Moon",theme:e.themesPath+"moon.css"},{name:"Solarized",theme:e.themesPath+"solarized.css"}]:Array.isArray(e.themes)||(e.themes=!1),e.transitions===void 0&&(e.transitions=!1),e.transitions===!0?e.transitions=["None","Fade","Slide","Convex","Concave","Zoom"]:e.transitions!==!1&&(!Array.isArray(e.transitions)||!e.transitions.every(function(i){return typeof i=="string"}))&&(console.error("reveal.js-menu error: transitions config value must be 'true' or an array of strings, eg ['None', 'Fade', 'Slide')"),e.transitions=!1),E&&E<=9&&(e.transitions=!1),typeof e.openButton=="undefined"&&(e.openButton=!0),typeof e.openSlideNumber=="undefined"&&(e.openSlideNumber=!1),typeof e.keyboard=="undefined"&&(e.keyboard=!0),typeof e.sticky=="undefined"&&(e.sticky=!1),typeof e.autoOpen=="undefined"&&(e.autoOpen=!0),typeof e.delayInit=="undefined"&&(e.delayInit=!1),typeof e.openOnInit=="undefined"&&(e.openOnInit=!1)}var D=!0;function K(){D=!1}function $(){a("nav.slide-menu").addEventListener("mousemove",function t(i){a("nav.slide-menu").removeEventListener("mousemove",t),D=!0})}function re(t){for(var i=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)i+=t.offsetLeft-t.scrollLeft,n+=t.offsetTop-t.scrollTop,t=t.offsetParent;return{top:n,left:i}}function N(t){var i=re(t).top-t.offsetParent.offsetTop;if(i<0)return-i;var n=t.offsetParent.offsetHeight-(t.offsetTop-t.offsetParent.scrollTop+t.offsetHeight);return n<0?n:0}function W(t){var i=N(t);i&&(K(),t.scrollIntoView(i>0),$())}function U(t){K(),t.offsetParent.scrollTop=t.offsetTop,$()}function Z(t){K(),t.offsetParent.scrollTop=t.offsetTop-t.offsetParent.offsetHeight+t.offsetHeight,$()}function H(t){t.classList.add("selected"),W(t),e.sticky&&e.autoOpen&&z(t)}function G(t){if(j())switch(t.stopImmediatePropagation(),t.keyCode){case 72:case 37:oe();break;case 76:case 39:le();break;case 75:case 38:var M=a(".active-menu-panel .slide-menu-items li.selected")||a(".active-menu-panel .slide-menu-items li.active");if(M){o(".active-menu-panel .slide-menu-items li").forEach(function(f){f.classList.remove("selected")});var i=a('.active-menu-panel .slide-menu-items li[data-item="'+(parseInt(M.getAttribute("data-item"))-1)+'"]')||M;H(i)}else{var d=a(".active-menu-panel .slide-menu-items li.slide-menu-item");d&&H(d)}break;case 74:case 40:var M=a(".active-menu-panel .slide-menu-items li.selected")||a(".active-menu-panel .slide-menu-items li.active");if(M){o(".active-menu-panel .slide-menu-items li").forEach(function(J){J.classList.remove("selected")});var i=a('.active-menu-panel .slide-menu-items li[data-item="'+(parseInt(M.getAttribute("data-item"))+1)+'"]')||M;H(i)}else{var d=a(".active-menu-panel .slide-menu-items li.slide-menu-item");d&&H(d)}break;case 33:case 85:var n=o(".active-menu-panel .slide-menu-items li").filter(function(f){return N(f)>0}),s=o(".active-menu-panel .slide-menu-items li").filter(function(f){return N(f)==0}),h=n.length>0&&Math.abs(N(n[n.length-1]))<n[n.length-1].clientHeight?n[n.length-1]:s[0];h&&(h.classList.contains("selected")&&n.length>0&&(Z(h),s=o(".active-menu-panel .slide-menu-items li").filter(function(f){return N(f)==0}),s[0]==h?h=n[n.length-1]:h=s[0]),o(".active-menu-panel .slide-menu-items li").forEach(function(f){f.classList.remove("selected")}),H(h),U(h));break;case 34:case 68:var s=o(".active-menu-panel .slide-menu-items li").filter(function(f){return N(f)==0}),L=o(".active-menu-panel .slide-menu-items li").filter(function(f){return N(f)<0}),T=L.length>0&&Math.abs(N(L[0]))<L[0].clientHeight?L[0]:s[s.length-1];T&&(T.classList.contains("selected")&&L.length>0&&(U(T),s=o(".active-menu-panel .slide-menu-items li").filter(function(f){return N(f)==0}),s[s.length-1]==T?T=L[0]:T=s[s.length-1]),o(".active-menu-panel .slide-menu-items li").forEach(function(f){f.classList.remove("selected")}),H(T),Z(T));break;case 36:o(".active-menu-panel .slide-menu-items li").forEach(function(f){f.classList.remove("selected")});var d=a(".active-menu-panel .slide-menu-items li:first-of-type");d&&(d.classList.add("selected"),W(d));break;case 35:o(".active-menu-panel .slide-menu-items li").forEach(function(f){f.classList.remove("selected")});var d=a(".active-menu-panel .slide-menu-items:last-of-type li:last-of-type");d&&(d.classList.add("selected"),W(d));break;case 32:case 13:var M=a(".active-menu-panel .slide-menu-items li.selected");M&&z(M,!0);break;case 27:q(null,!0);break}}function I(t){if(t&&t.preventDefault(),!j()){a("body").classList.add("slide-menu-active"),a(".reveal").classList.add("has-"+e.effect+"-"+e.side),a(".slide-menu").classList.add("active"),a(".slide-menu-overlay").classList.add("active"),e.themes&&(o('div[data-panel="Themes"] li').forEach(function(n){n.classList.remove("active")}),o('li[data-theme="'+a("link#theme").getAttribute("href")+'"]').forEach(function(n){n.classList.add("active")})),e.transitions&&(o('div[data-panel="Transitions"] li').forEach(function(n){n.classList.remove("active")}),o('li[data-transition="'+S.transition+'"]').forEach(function(n){n.classList.add("active")}));var i=o(".slide-menu-panel li.active");i.forEach(function(n){n.classList.add("selected"),W(n)})}}function q(t,i){t&&t.preventDefault(),(!e.sticky||i)&&(a("body").classList.remove("slide-menu-active"),a(".reveal").classList.remove("has-"+e.effect+"-"+e.side),a(".slide-menu").classList.remove("active"),a(".slide-menu-overlay").classList.remove("active"),o(".slide-menu-panel li.selected").forEach(function(n){n.classList.remove("selected")}))}function Q(t){j()?q(t,!0):I(t)}function j(){return a("body").classList.contains("slide-menu-active")}function A(t,i){I(t);var n=i;typeof i!="string"&&(n=t.currentTarget.getAttribute("data-panel")),a(".slide-menu-toolbar > li.active-toolbar-button").classList.remove("active-toolbar-button"),a('li[data-panel="'+n+'"]').classList.add("active-toolbar-button"),a(".slide-menu-panel.active-menu-panel").classList.remove("active-menu-panel"),a('div[data-panel="'+n+'"]').classList.add("active-menu-panel")}function le(){var t=(parseInt(a(".active-toolbar-button").getAttribute("data-button"))+1)%_;A(null,a('.toolbar-panel-button[data-button="'+t+'"]').getAttribute("data-panel"))}function oe(){var t=parseInt(a(".active-toolbar-button").getAttribute("data-button"))-1;t<0&&(t=_-1),A(null,a('.toolbar-panel-button[data-button="'+t+'"]').getAttribute("data-panel"))}function z(t,i){var n=parseInt(t.getAttribute("data-slide-h")),h=parseInt(t.getAttribute("data-slide-v")),s=t.getAttribute("data-theme"),L=t.getAttribute("data-highlight-theme"),T=t.getAttribute("data-transition");!isNaN(n)&&!isNaN(h)&&c.slide(n,h),s&&ee("theme",s),L&&ee("highlight-theme",L),T&&c.configure({transition:T});var d=a("a",t);d&&(i||!e.sticky||e.autoOpen&&d.href.startsWith("#")||d.href.startsWith(window.location.origin+window.location.pathname+"#"))&&d.click(),q()}function B(t){t.target.nodeName!=="A"&&t.preventDefault(),z(t.currentTarget)}function Y(){var t=c.getState();o("li.slide-menu-item, li.slide-menu-item-vertical").forEach(function(i){i.classList.remove("past"),i.classList.remove("active"),i.classList.remove("future");var n=parseInt(i.getAttribute("data-slide-h")),h=parseInt(i.getAttribute("data-slide-v"));n<t.indexh||n===t.indexh&&h<t.indexv?i.classList.add("past"):n===t.indexh&&h===t.indexv?i.classList.add("active"):i.classList.add("future")})}function ce(){var t=window.getComputedStyle(a(".reveal")),i=a(".slide-menu");i.style.fontFamily=t.fontFamily}var _=0;function V(){if(!u){let P=function(v,y,p,C,b,g){var m={"data-button":""+_++,class:"toolbar-panel-button"+(g?" active-toolbar-button":"")};y&&(m["data-panel"]=y);var l=r("li",m);return p.startsWith("fa-")?l.appendChild(r("i",{class:C+" "+p})):l.innerHTML=p+"</i>",l.appendChild(r("br"),a("i",l)),l.appendChild(r("span",{class:"slide-menu-toolbar-label"},v),a("i",l)),l.onclick=b,s.appendChild(l),l},O=function(v,y,p,C,b){function g(x,me){if(x==="")return null;var ae=me?a(x,y):a(x);return ae?ae.textContent:null}var m=y.getAttribute("data-menu-title")||g(".menu-title",y)||g(e.titleSelector,y);if(!m&&e.useTextContentForMissingTitles&&(m=y.textContent.trim(),m&&(m=m.split(`
`).map(function(x){return x.trim()}).join(" ").trim().replace(/^(.{16}[^\s]*).*/,"$1").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")+"...")),!m){if(e.hideMissingTitles)return"";v+=" no-title",m="Slide "+(p+1)}var l=r("li",{class:v,"data-item":p,"data-slide-h":C,"data-slide-v":b===void 0?0:b});if(e.markers&&(l.appendChild(r("i",{class:"fas fa-check-circle fa-fw past"})),l.appendChild(r("i",{class:"fas fa-arrow-alt-circle-right fa-fw active"})),l.appendChild(r("i",{class:"far fa-circle fa-fw future"}))),e.numbers){var w=[],R="h.v";switch(typeof e.numbers=="string"?R=e.numbers:typeof S.slideNumber=="string"&&(R=S.slideNumber),R){case"c":w.push(p+1);break;case"c/t":w.push(p+1,"/",c.getTotalSlides());break;case"h/v":w.push(C+1),typeof b=="number"&&!isNaN(b)&&w.push("/",b+1);break;default:w.push(C+1),typeof b=="number"&&!isNaN(b)&&w.push(".",b+1)}l.appendChild(r("span",{class:"slide-menu-item-number"},w.join("")+". "))}return l.appendChild(r("span",{class:"slide-menu-item-title"},m)),l},X=function(){if(document.querySelector("section[data-markdown]:not([data-markdown-parsed])"))setTimeout(X,100);else{var v=r("div",{"data-panel":"Slides",class:"slide-menu-panel active-menu-panel"});v.appendChild(r("ul",{class:"slide-menu-items"})),n.appendChild(v);var y=a('.slide-menu-panel[data-panel="Slides"] > .slide-menu-items'),p=0;o(".slides > section").forEach(function(C,b){var g=o("section",C);if(g.length>0)g.forEach(function(l,w){var R=w===0?"slide-menu-item":"slide-menu-item-vertical",x=O(R,l,p,b,w);x&&y.appendChild(x),p++});else{var m=O("slide-menu-item",C,p,b);m&&y.appendChild(m),p++}}),o(".slide-menu-item, .slide-menu-item-vertical").forEach(function(C){C.onclick=B}),Y()}},ie=function(v){D&&(o(".active-menu-panel .slide-menu-items li.selected").forEach(function(y){y.classList.remove("selected")}),v.currentTarget.classList.add("selected"))};var t=a(".reveal").parentElement,i=r("div",{class:"slide-menu-wrapper"});t.appendChild(i);var n=r("nav",{class:"slide-menu slide-menu--"+e.side});typeof e.width=="string"&&(["normal","wide","third","half","full"].indexOf(e.width)!=-1?n.classList.add("slide-menu--"+e.width):(n.classList.add("slide-menu--custom"),n.style.width=e.width)),i.appendChild(n),ce();var h=r("div",{class:"slide-menu-overlay"});i.appendChild(h),h.onclick=function(){q(null,!0)};var s=r("ol",{class:"slide-menu-toolbar"});a(".slide-menu").appendChild(s),P("Slides","Slides","fa-images","fas",A,!0),e.custom&&e.custom.forEach(function(v,y,p){P(v.title,"Custom"+y,v.icon,null,A)}),e.themes&&P("Themes","Themes","fa-adjust","fas",A),e.transitions&&P("Transitions","Transitions","fa-sticky-note","fas",A);var L=r("li",{id:"close",class:"toolbar-panel-button"});if(L.appendChild(r("i",{class:"fas fa-times"})),L.appendChild(r("br")),L.appendChild(r("span",{class:"slide-menu-toolbar-label"},"Close")),L.onclick=function(){q(null,!0)},s.appendChild(L),X(),c.addEventListener("slidechanged",Y),e.custom){let v=function(){this.status>=200&&this.status<300?(this.panel.innerHTML=this.responseText,C(this.panel)):b(this)},y=function(){b(this)},p=function(g,m){var l=new XMLHttpRequest;l.panel=g,l.arguments=Array.prototype.slice.call(arguments,2),l.onload=v,l.onerror=y,l.open("get",m,!0),l.send(null)},C=function(g){o("ul.slide-menu-items li.slide-menu-item",g).forEach(function(m,l){m.setAttribute("data-item",l+1),m.onclick=B,m.addEventListener("mouseenter",ie)})},b=function(g){var m="<p>ERROR: The attempt to fetch "+g.responseURL+" failed with HTTP status "+g.status+" ("+g.statusText+").</p><p>Remember that you need to serve the presentation HTML from a HTTP server.</p>";g.panel.innerHTML=m};e.custom.forEach(function(g,m,l){var w=r("div",{"data-panel":"Custom"+m,class:"slide-menu-panel slide-menu-custom-panel"});g.content?(w.innerHTML=g.content,C(w)):g.src&&p(w,g.src),n.appendChild(w)})}if(e.themes){var T=r("div",{class:"slide-menu-panel","data-panel":"Themes"});n.appendChild(T);var d=r("ul",{class:"slide-menu-items"});T.appendChild(d),e.themes.forEach(function(v,y){var p={class:"slide-menu-item","data-item":""+(y+1)};v.theme&&(p["data-theme"]=v.theme),v.highlightTheme&&(p["data-highlight-theme"]=v.highlightTheme);var C=r("li",p,v.name);d.appendChild(C),C.onclick=B})}if(e.transitions){var T=r("div",{class:"slide-menu-panel","data-panel":"Transitions"});n.appendChild(T);var d=r("ul",{class:"slide-menu-items"});T.appendChild(d),e.transitions.forEach(function(p,C){var b=r("li",{class:"slide-menu-item","data-transition":p.toLowerCase(),"data-item":""+(C+1)},p);d.appendChild(b),b.onclick=B})}if(e.openButton){var M=r("div",{class:"slide-menu-button"}),f=r("a",{href:"#"});f.appendChild(r("i",{class:"fas fa-bars"})),M.appendChild(f),a(".reveal").appendChild(M),M.onclick=I}if(e.openSlideNumber){var J=a("div.slide-number");J.onclick=I}o(".slide-menu-panel .slide-menu-items li").forEach(function(v){v.addEventListener("mouseenter",ie)})}if(e.keyboard){if(document.addEventListener("keydown",G,!1),window.addEventListener("message",function(P){var O;try{O=JSON.parse(P.data)}catch{}O&&O.method==="triggerKey"&&G({keyCode:O.args[0],stopImmediatePropagation:function(){}})}),S.keyboardCondition&&typeof S.keyboardCondition=="function"){var fe=S.keyboardCondition;S.keyboardCondition=function(P){return fe(P)&&(!j()||P.keyCode==77)}}else S.keyboardCondition=function(P){return!j()||P.keyCode==77};c.addKeyBinding({keyCode:77,key:"M",description:"Toggle menu"},Q)}e.openOnInit&&I(),u=!0}function ue(t,i){for(var n in i)t[n]=i[n]}function de(t,i){var n=document.createEvent("HTMLEvents",1,2);n.initEvent(t,!0,!0),ue(n,i),document.querySelector(".reveal").dispatchEvent(n),S.postMessageEvents&&window.parent!==window.self&&window.parent.postMessage(JSON.stringify({namespace:"reveal",eventName:t,state:c.getState()}),"*")}function a(t,i){return i||(i=document),i.querySelector(t)}function o(t,i){return i||(i=document),Array.prototype.slice.call(i.querySelectorAll(t))}function r(t,i,n){var h=document.createElement(t);return i&&Object.getOwnPropertyNames(i).forEach(function(s){h.setAttribute(s,i[s])}),n&&(h.innerHTML=n),h}function ee(t,i){var n=a("link#"+t);n.setAttribute("href",i),n.parentElement,n.nextElementSibling}function te(t,i,n){var h=document.querySelector("head"),s;i==="script"?(s=document.createElement("script"),s.type="text/javascript",s.src=t):i==="stylesheet"&&(s=document.createElement("link"),s.rel="stylesheet",s.href=t);var L=function(){typeof n=="function"&&(n.call(),n=null)};s.onload=L,s.onreadystatechange=function(){this.readyState==="loaded"&&L()},h.appendChild(s)}function ne(){var t=!E||E>=9;c.isSpeakerNotes()&&window.location.search.endsWith("controls=false")&&(t=!1),t&&(e.delayInit||V(),de("menu-ready"))}return{id:"menu",init:t=>{c=t,S=c.getConfig(),F(S),te(e.path+"menu.css","stylesheet",function(){e.loadIcons===void 0||e.loadIcons?te(e.path+"font-awesome/css/all.css","stylesheet",ne):ne()})},toggle:Q,openMenu:I,closeMenu:q,openPanel:A,isOpen:j,initialiseMenu:V,isMenuInitialised:function(){return u}}};String.prototype.startsWith||(String.prototype.startsWith=function(E,c){return this.substr(c||0,E.length)===E});String.prototype.endsWith||(String.prototype.endsWith=function(E,c){return(c===void 0||c>this.length)&&(c=this.length),this.substring(c-E.length,c)===E});function ke(E){return E=="/MAP579/courses/polymorphism/theme/dark.css"?"dark":"light"}function Le(){var E=document.getElementById("theme"),c=E.getAttribute("href"),S=ke(c),e=document.querySelectorAll("#adapt");console.log(e);for(var u=0;u<e.length;u++){var k=e[u].getAttribute("src").split("/");console.log(k),console.log(k.slice(0,4).join("/")),e[u].setAttribute("src",k.slice(0,4).join("/")+"/"+S+"/"+k.slice(5).join("/"))}}var Ce=new MutationObserver(function(E){Le()}),Te=document.querySelector("#theme");Ce.observe(Te,{attributes:!0,attributeFilter:["href"]});const Ee=new he({plugins:[pe,ve,ge.KaTeX,be]});Ee.initialize({center:!0,hash:!0,menu:{themes:!0,themes:[{name:"dark",theme:"/MAP579/courses/polymorphism/theme/dark.css"},{name:"light",theme:"/MAP579/courses/polymorphism/theme/light.css"}],path:"node_modules/reveal.js-menu/"}});
