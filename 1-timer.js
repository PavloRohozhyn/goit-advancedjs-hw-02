import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as l,f as v}from"./assets/vendor-BbbuE1sJ.js";let c=null,o=0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){c=e[0],r(b(c))}},r=(e=!0)=>{const t=document.querySelector("button[data-start]");e?t.setAttribute("disabled","disabled"):t.removeAttribute("disabled")};r(!0);const u=e=>Math.floor(Date.parse(e))-Math.floor(Date.now()),b=e=>u(e)<0?(l.error({title:"Error.",message:"Please choose a date in the future.",position:"topRight",timeout:5e3}),!0):!1;function g(e){const i=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:m,minutes:f,seconds:h}}const n=e=>e.toString().padStart(2,"0"),p=(e="00",t="00",s="00",a="00")=>`<div class="field">
        <span class="value" data-days>${n(e)}</span>
        <span class="label">Days</span>
    </div>
    <div class="field">
        <span class="value" data-hours>${n(t)}</span>
        <span class="label">Hours</span>
    </div>
    <div class="field">
        <span class="value" data-minutes>${n(s)}</span>
        <span class="label">Minutes</span>
    </div>
    <div class="field">
        <span class="value" data-seconds>${n(a)}</span>
        <span class="label">Seconds</span>
    </div>`;document.querySelector("button[data-start]").addEventListener("click",e=>{r(!0),l.success({title:"Attention.",message:'Press "Esc" button for reset countdown.',position:"topRight",timeout:5e3}),o=setInterval(()=>{let t=u(c);t===0&&clearInterval(o);const{days:s,hours:a,minutes:d,seconds:i}=g(t);document.querySelector(".timer").innerHTML=p(s,a,d,i)},1e3)});document.addEventListener("keydown",e=>{o&&e.key==="Escape"&&(clearInterval(o),document.querySelector(".timer").innerHTML=p(),r(!1),l.success({title:"Done.",message:"Countdown was reseted.",position:"topRight",timeout:5e3}))});try{v("#datetime-picker",y)}catch(e){console.log(e)}
//# sourceMappingURL=1-timer.js.map
