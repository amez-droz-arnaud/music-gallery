import { get_album } from "../ressource/fetch";
import type { Album } from "../types";


function renderAlbum(data: any[]){
    const album_HTML =  data.map(album =>
        `<div class="album">
            <h2 class="album-name">${album.album_name}</h2>
            <div class="album-content">
                <img class="album-cover" src="${album.cover_url}" loading="lazy" alt="">
                <div class="info">
                    <p class="artist-name">de : ${album.artist_name}</p>
                    <p class="track-count">nombre de titre : ${album.track_count}</p>
                    <p class="duration">durée : ${album.duration_m_s}</p>
                    <a href="./album.html?ID=${album.id}">lien</a>
                </div>
            </div>
            <p class="comment">${album.comment}</p>
            
        </div>`
    ).join('');


    let container = document.getElementById("album-container")
    if (container)
        container.insertAdjacentHTML("beforeend", album_HTML);
    else 
        console.log("l'id album-container est introuvable")

}

const CACHE_DURATION: number = 1000 * 60 * 60 // 1 heure

let storedData = localStorage.getItem("albumJSON");
let storedTime = localStorage.getItem("albumJSONTime")


let data: Album[] = storedData ? JSON.parse(storedData) : null
let cachedTime = storedTime ? parseInt(storedTime) : null
let isExpired = !cachedTime || Date.now() - cachedTime > CACHE_DURATION


if (!data || isExpired){
    data = await get_album()
    localStorage.setItem("albumJSON", JSON.stringify(data))
    localStorage.setItem("albumJSONTime", Date.now().toString())
}

renderAlbum(data)