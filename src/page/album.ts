import { getTrack } from "../ressource/fetch"
import type { Track } from "../types"
import { getParam } from "../utils/url"
import { createElement } from "../utils/dom"
import { SUPABASE_URL } from "../ressource/supabase"

function renderTrack(tracks: Track[], container: HTMLElement) {

    const track_container = createElement("div", {attributes : [["id", "track-container"]]}) as HTMLDivElement
    
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
        track_container.appendChild(div)
    }

    container.appendChild(track_container)
}

async function initPage(){

    const uuid = getParam("ID")
    const name = getParam("NAME")

    if (!uuid || !name ) {
        console.log("Paramètre manquant")
        return        
    }

    document.title = name

    const main = document.getElementById("main")

    if (!main) {
        console.log("ID main manquant")
        return
    }

    const tracks = await getTrack(uuid)

    if (!tracks) {
        console.log(`Aucun titre retourné. Album ID : ${uuid}`)
        return
    }

    const img = createElement("img", {
        className: ["album-cover"],
        attributes : [
            ["src", `${SUPABASE_URL}/storage/v1/object/public/albumCover/${uuid}.webp`],
            ["loading", "eager"],
            ["fetchPriority", "high"],
            ["alt", "cover"],
            ["width", "140"],
            ["height", "140"]
        ]
    })

    main.insertAdjacentElement("beforeend", img)
    renderTrack(tracks, main)
}

initPage()