(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();const E=({src:t,alt:r="",className:e=""})=>{const a=document.createElement("img");return a.src=t,a.alt=r,a.className=e,a},v=({userName:t,className:r=""})=>{const e=document.createElement("h1"),a="Report for",n=document.createElement("span");return n.textContent=a,e.insertAdjacentElement("afterbegin",n),e.insertAdjacentText("beforeend",t),e.className=r,e},d=({buttonText:t,className:r=""})=>{const e=document.createElement("a");return e.textContent=t,e.className=r,e},b=({userName:t,src:r})=>{const e=document.createElement("div");return e.className="UserInfoGroup",e.insertAdjacentElement("afterbegin",E({src:r,className:"UserAvatar",alt:""})),e.insertAdjacentElement("beforeend",v({userName:t,className:"ReportFor"})),e},l=document.createElement("div");l.className="ButtonContainer";l.insertAdjacentElement("afterbegin",d({buttonText:"Daily",className:"StatSwitch"}));l.insertAdjacentElement("beforeend",d({buttonText:"Weekly",className:"StatSwitch active"}));l.insertAdjacentElement("beforeend",d({buttonText:"Monthly",className:"StatSwitch"}));const w=({userName:t,src:r})=>{const e=document.createElement("article");return e.className="StatControlContainer",e.insertAdjacentElement("afterbegin",b({userName:t,src:r})),e.insertAdjacentElement("beforeend",l),e},y=({cardText:t,className:r,secondChild:e})=>{const a=document.createElement("div"),n=document.createElement("h2");return n.textContent=t,a.className=r,a.insertAdjacentElement("afterbegin",n),a.insertAdjacentElement("beforeend",e),a},C=({className:t,currentTimeStat:r,previousTimeStat:e})=>{const a=document.createElement("div");a.className=t;const n=document.createElement("h3");n.className="TimeStatHeading",n.textContent=r;const o=document.createElement("span");return o.className="TimeStatHeadingSpan",o.textContent=e,n.insertAdjacentElement("beforeend",o),a.insertAdjacentElement("beforeend",n),a},A="data:image/svg+xml,%3csvg%20width='21'%20height='5'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.5%200a2.5%202.5%200%201%201%200%205%202.5%202.5%200%200%201%200-5Zm8%200a2.5%202.5%200%201%201%200%205%202.5%202.5%200%200%201%200-5Zm8%200a2.5%202.5%200%201%201%200%205%202.5%202.5%200%200%201%200-5Z'%20fill='%23BBC0FF'%20fill-rule='evenodd'/%3e%3c/svg%3e",N=({className:t,statData:r,statType:e})=>{const a=e==="Daily"?r.timeframes.daily:e==="Weekly"?r.timeframes.weekly:r.timeframes.monthly,n=document.createElement("article");n.style.backgroundImage=`url("${r.icon}")`,n.style.backgroundRepeat="no-repeat",n.style.backgroundSize="4.25rem",n.className=`${t}`;const o=document.createElement("img");o.src=A,o.alt="",o.className="ThreeDots";const s=document.createElement("div");return s.className="StatInnerContainer",s.insertAdjacentElement("beforeend",y({cardText:r.title,className:"WorkWithUtility",secondChild:o})),s.insertAdjacentElement("beforeend",C({className:"TimeStat",currentTimeStat:`${a.current}hrs`,previousTimeStat:`Last Week - ${a.previous}hrs`})),n.insertAdjacentElement("beforeend",s),n},S="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M19.924%2010.383c.155-.374.069-.804-.217-1.09l-5-5-1.414%201.414L16.586%209H4v2h15C19.404%2011%2019.77%2010.756%2019.924%2010.383zM4.076%2013.617c-.155.374-.069.804.217%201.09l5%205%201.414-1.414L7.414%2015H20v-2H5C4.596%2013%204.23%2013.243%204.076%2013.617z'/%3e%3c/svg%3e",j=""+new URL("aakash-dashboard-avatar-CQ7qhRPd.png",import.meta.url).href,x=""+new URL("image-jeremy-CA1woC3-.png",import.meta.url).href,L="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='currentColor'%20class='bi%20bi-lightning-charge-fill'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M11.251.068a.5.5%200%200%201%20.227.58L9.677%206.5H13a.5.5%200%200%201%20.364.843l-8%208.5a.5.5%200%200%201-.842-.49L6.323%209.5H3a.5.5%200%200%201-.364-.843l8-8.5a.5.5%200%200%201%20.615-.09z'/%3e%3c/svg%3e",h="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='currentColor'%20class='bi%20bi-lightning-charge'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M11.251.068a.5.5%200%200%201%20.227.58L9.677%206.5H13a.5.5%200%200%201%20.364.843l-8%208.5a.5.5%200%200%201-.842-.49L6.323%209.5H3a.5.5%200%200%201-.364-.843l8-8.5a.5.5%200%200%201%20.615-.09zM4.157%208.5H7a.5.5%200%200%201%20.478.647L6.11%2013.59l5.732-6.09H9a.5.5%200%200%201-.478-.647L9.89%202.41%204.157%208.5z'/%3e%3c/svg%3e",k=()=>`
        <footer class="footer">
            <p>Challenge by
                <a class="hover:text-[#ff74ca]" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Made with ❤️ by <a class="hover:text-[#ff74ca] hover:underline" href="https://linkedin.com/in/skyv2022" target="_blank">Aakash Verma</a>
            </p>
        </footer>
    `;let c=null,p="Weekly",i=!1;document.addEventListener("DOMContentLoaded",async()=>{try{const t=await fetch("data.json");if(!t.ok)throw new Error(`Failed to fetch data: ${t.statusText}`);c=await t.json(),c?u():console.error("No data available")}catch(t){console.error("Error fetching data:",t)}});function u(){var f;const t=document.querySelector("#app");if(!t){console.error("#app container not found");return}t.textContent="";const r=document.createElement("main"),e=document.createElement("div"),a=T(),n=B();e.className="SectionContainer",e.insertAdjacentElement("beforeend",w({userName:i?"Aakash Verma":"Jeremy Robson",src:i?j:x}));const o=document.createElement("div");o.className="StatContainer";const s=i?c==null?void 0:c.aakash.data:c==null?void 0:c.jeremy.data;s==null||s.forEach(g=>{o.insertAdjacentElement("beforeend",N({className:`Stat ${g.title.split(" ").join("-")}`,statData:g,statType:p}))}),e.insertAdjacentElement("beforeend",o),r.insertAdjacentElement("beforeend",e),r.insertAdjacentHTML("beforeend",k()),t.insertAdjacentElement("afterbegin",r);const m=document.createElement("div");m.className="UtilityWrapper",m.append(a,n),(f=document.querySelector(".UserInfoGroup"))==null||f.insertAdjacentElement("afterbegin",m),M()}function T(){const t=document.createElement("button"),r=document.createElement("img");let e=!1;return r.src=h,r.className="LightModeIcon",t.className="theme-toggle",t.append(r),t.addEventListener("click",()=>{e=!e,document.documentElement.classList.toggle("dark"),r.src=e?L:h}),t}function B(){const t=document.createElement("img");return t.src=S,t.className="ChangeDetailIcon",t.addEventListener("click",()=>{i=!i,u()}),t}function M(){const t=document.querySelector(".ButtonContainer");if(!t){console.error("ButtonContainer not found in the DOM.");return}t.addEventListener("click",r=>{const e=r.target;if(e.nodeName==="DIV")return;const a=e.textContent;a&&(Array.from(t.children).forEach(n=>n.classList.remove("active")),p=a,e.classList.add("active"),u())})}
