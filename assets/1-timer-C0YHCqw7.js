import{i as d,f as y}from"./vendor-BbSUbo7J.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();let u=null,c=0;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){u=e[0],l(g(u))}},l=(e=!0)=>{const o=document.querySelector("button[data-start]");e?o.setAttribute("disabled","disabled"):o.removeAttribute("disabled")};l(!0);const f=e=>Math.floor(Date.parse(e))-Math.floor(Date.now()),g=e=>f(e)<0?(d.error({title:"Error.",message:"Please choose a date in the future.",position:"topRight",timeout:5e3}),!0):!1;function b(e){const s=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:m,seconds:h}}const i=e=>e.toString().padStart(2,"0"),p=(e="00",o="00",n="00",r="00")=>`<div class="field">
        <span class="value" data-days>${i(e)}</span>
        <span class="label">Days</span>
    </div>
    <div class="field">
        <span class="value" data-hours>${i(o)}</span>
        <span class="label">Hours</span>
    </div>
    <div class="field">
        <span class="value" data-minutes>${i(n)}</span>
        <span class="label">Minutes</span>
    </div>
    <div class="field">
        <span class="value" data-seconds>${i(r)}</span>
        <span class="label">Seconds</span>
    </div>`;document.querySelector("button[data-start]").addEventListener("click",e=>{l(!0),d.success({title:"Attention.",message:'Press "Esc" button for reset countdown.',position:"topRight",timeout:5e3}),c=setInterval(()=>{let o=f(u);o===0&&clearInterval(c);const{days:n,hours:r,minutes:t,seconds:s}=b(o);document.querySelector(".timer").innerHTML=p(n,r,t,s)},1e3)});document.addEventListener("keydown",e=>{c&&e.key==="Escape"&&(clearInterval(c),document.querySelector(".timer").innerHTML=p(),l(!1),d.success({title:"Done.",message:"Countdown was reseted.",position:"topRight",timeout:5e3}))});try{y("#datetime-picker",v)}catch(e){console.log(e)}
//# sourceMappingURL=1-timer-C0YHCqw7.js.map
