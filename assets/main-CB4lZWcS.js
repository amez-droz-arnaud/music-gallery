import{t as e}from"./fetch-CSejaYTS.js";function t(e){let t=e.map(e=>`<div class="album">
            <h2 class="album-name">${e.album_name}</h2>
            <div class="album-content">
                <img class="album-cover" src="${e.cover_url}" loading="lazy" alt="">
                <div class="info">
                    <p class="artist-name">de : ${e.artist_name}</p>
                    <p class="track-count">nombre de titre : ${e.track_count}</p>
                    <p class="duration">durée : ${e.duration_m_s}</p>
                    <a href="./album.html?ID=${e.id}">lien</a>
                </div>
            </div>
            <p class="comment">${e.comment}</p>
            
        </div>`).join(``),n=document.getElementById(`album-container`);n?n.insertAdjacentHTML(`beforeend`,t):console.log(`l'id album-container est introuvable`)}var n=1e3*60*60,r=localStorage.getItem(`albumJSON`),i=localStorage.getItem(`albumJSONTime`),a=r?JSON.parse(r):null,o=i?parseInt(i):null,s=!o||Date.now()-o>n;(!a||s)&&(a=await e(),localStorage.setItem(`albumJSON`,JSON.stringify(a)),localStorage.setItem(`albumJSONTime`,Date.now().toString())),t(a);