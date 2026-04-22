import { get_album } from "../ressource/fetch";
import type { Album } from "../types";

import { createElement } from "../utils/dom";



function renderAlbum(albums: Album[]){
    let container = document.getElementById("album-container")
    if (!container) {
        console.log("l'id album-container est introuvable")
        return
    }

    let index = 0

    for (const album of albums) {
        const div = createElement("div", {className : ["album"]})

        const title = createElement("h2",{
            className : ["album-name"],
            textContent : album.album_name
        })

        const div_content = createElement("div", {className : ["album-content"]})
        const img = createElement("img", {
            className : ["album-cover"],
            attributes : [
                ["src", album.cover_url],
                ["alt", "cover"]
            ]
        }) as HTMLImageElement

        if (index == 0) {
            img.loading = "eager"
            img.fetchPriority = "high"
        } else {
            img.loading = "lazy"
            img.fetchPriority = "low"
        }

        const div_info = createElement("div", {className : ["info"]})

        const artist_name = createElement("p", {
            className : ["artist-name"],
            textContent : `de : ${album.artist_name}`
        })

        const track_count = createElement("p", {
            className : ["track-count"],
            textContent : `durée : ${album.track_count}`
        })

        const duration = createElement("p", {
            className : ["duration"],
            textContent : `durée : ${album.duration_m_s}`
        })

        const a = createElement("a", {
            className : ["link"],
            textContent : "aperçu",
            attributes : [["href", `./album.html?ID=${album.id}`]]
        })

        const comment = createElement("p", {
            className : ["comment"],
            textContent : album.comment
        })

        div_info.append(artist_name, track_count, duration)
        div_content.append(img, div_info)
        div.append(title, div_content, comment, a)   
        container.insertAdjacentElement("beforeend", div)
    }
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