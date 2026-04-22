import { get_track_from_album } from "../ressource/fetch"
import type { Track } from "../types"

import { createElement } from "../utils/dom"

function renderTrack(tracks: Track[]) {
    let container = document.getElementById("track-container")
    if (!container) {
        console.log("l'id album-container est introuvable")
        return
    }  
    
    for (const track of tracks) {
        const div = createElement("div", {className: ["track"]})

        const title = createElement("h2", {
            className: ["track-name"],
            textContent: `${track.track_index} - ${track.track_name}`
        })

        const div_info = createElement("div", {className: ["info"]})

        const duration = createElement("p", {
            className : ["duration"],
            textContent : `durée : ${track.duration_m_s}`
        })

        const lyrics = createElement("p", {
            className : ["lyrics"],
            textContent : `parole : ${track.lyrics}`
        })

        const rating = createElement("p", {
            className : ["rating"],
            textContent : `note : ${track.rating}/10`
        })

        const comment = createElement("p", {
            className : ["comment"],
            textContent : track.comment
        })

        div_info.append(duration, lyrics, rating)
        div.append(title, div_info, comment)
        container.insertAdjacentElement("beforeend", div)
    }
}


async function initPage() {
    const params = new URL(window.location.href).searchParams
    const album_uuid = params.get("ID")

    if (!album_uuid) {
        console.log("UUID manquant dans l'url")
        return
    }
        
    const data: Track[] = await get_track_from_album(album_uuid)
    const cover_url = `https://fidfksvexbwqhbotefji.supabase.co/storage/v1/object/public/albumCover/${album_uuid}.webp`

    let album_cover = document.getElementById("album-cover")
    if (album_cover)
        album_cover.setAttribute("src", cover_url)

    renderTrack(data)
}

initPage()