import{n as e}from"./fetch-CSejaYTS.js";async function t(){let t=new URL(window.location.href).searchParams.get(`ID`);if(!t){console.log(`UUID manquant dans l'url`);return}let n=await e(t),r=`https://fidfksvexbwqhbotefji.supabase.co/storage/v1/object/public/albumCover/${t}.jpg`,i=n.map(e=>`
        <div class="track">
            <h2 class="track_name">${e.track_index} - ${e.track_name}</h2>
            <div class="info">
                <p class="duration">durée : ${e.duration_m_s}</p>
                <p class="lyrics">parole : ${e.lyrics}</p>
                <p class="rating">note : ${e.rating}/10</p>
            </div>
            <p class="comment">${e.comment}</p>
        </div>`).join(``),a=document.getElementById(`album-cover`),o=document.getElementById(`track-container`);a.setAttribute(`src`,r),o.innerHTML=i}t();