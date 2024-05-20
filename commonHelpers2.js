import{i as c,S as f}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p=t=>t.reduce((s,{tags:a,webformatURL:o,largeImageURL:e,likes:r,views:n,comments:d,downloads:u})=>s+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${o}" alt="${a}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${r}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${n}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${d}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${u}</span>
        </div>
    </div>
</li>
    `,""),m="43940404-366b9d94bf735917b74c3de1b",h=t=>(new URLSearchParams({key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:21}),fetch("${BASE_URL}/?${params}").then(s=>{if(!s.ok)throw new Error("Sorry, there are no image matching your search query. Please try again!");return s.json()})),i=document.querySelector(".gallery"),y=document.querySelector(".search-form"),l=document.querySelector(".loader");function g(t){t.preventDefault();const s=t.target.elements.searchKeyword.value.trim();if(i.innerHTML="",s==="")return c.error({message:"Sorry, there are no images matching your search query. Please try again!"});i.innerHTML="",l.classList.remove("is-hidden"),h(s).then(a=>{a.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML=p(a.hits),new f(".gallery a",{captionsData:"alt",captionsDelay:250})}).catch(a=>console.log(a)).finally(()=>{t.target.reset(),l.classList.add("is-hidden")})}y.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers2.js.map
