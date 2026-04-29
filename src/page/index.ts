import { getAlbum } from "../ressource/fetch";
import { getCache, setCache } from "../utils/albumCache";
import { createElement } from "../utils/dom";
import { Album } from "../models/Album";



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
            textContent : album.name
        })

        const div_content = createElement("div", {className : ["album-content"]})
        const img = createElement("img", {
            className : ["album-cover"],
            attributes : [
                ["src", album.getCoverUrl()],
                ["alt", "cover"],
                ["width", "140"],
                ["height", "140"]
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
            textContent : `de : ${album.artist}`
        })

        const accessibility = createElement("p", {
            className : ["accessibility"],
            textContent : `accessibilité : ${album.accessibility}`
        })

        const track_count = createElement("p", {
            className : ["track-count"],
            textContent : `nbr de titres : ${album.track_count}`
        })

        const duration = createElement("p", {
            className : ["duration"],
            textContent : `durée : ${album.formatDuration()}`
        })

        const a = createElement("a", {
            className : ["link"],
            textContent : "aperçu",
            attributes : [["href", album.getAlbumUrl()]]
        })

        const comment = createElement("p", {
            className : ["comment"],
            textContent : album.comment
        })

        div_info.append(artist_name, accessibility, track_count, duration)
        div_content.append(img, div_info)
        div.append(title, div_content, comment, a)   
        container.insertAdjacentElement("beforeend", div)

        index += 1
    }
}

let data = getCache()

if (!data)
    data = await getAlbum()

setCache(data)
renderAlbum(data)