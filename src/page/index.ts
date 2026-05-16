import { getAlbum } from "../ressource/fetch";
import { getCache, setCache } from "../utils/albumCache";
import { createElement } from "../utils/dom";
import { Album } from "../models/Album";


function renderAccessibilityBar(value: number) : HTMLElement { 

    const div = createElement("div", {className : ["accessibility-bar"]})
    for (let i = 0; i < 10; i++) {
        let className = i < value ? "full" : "empty"
        const img = createElement("span", {
            className: ["material-symbols-outlined", className],
            textContent : "square",
        })
        div.append(img)
    }

    return div 
}


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
                ["src", album.getCoverUrl()],
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

        const div_description = createElement("div", {className : ["description"]})

        const div_info = createElement("div", {className : ["info"]})

        const artist_name = createElement("p", {
            className : ["artist-name"],
            textContent : album.artist
        })

        const div_accessibility = createElement("div", {className : ["accessibility"]})

        const accessibility = createElement("p", {
            className : ["accessibility"],
            textContent : "Accessibilité :"
        })

        const accessibilityBar = renderAccessibilityBar(album.accessibility)

        const div_track_count = createElement("div", {className : ["track-count"]})

        const track_count_svg = createElement("span", {
            className: ["material-symbols-outlined"],
            textContent : "music_note",
        })

        const track_count = createElement("p", {
            className : ["track-count"],
            textContent : album.track_count.toString()
        })

        const div_duration = createElement("div", {className : ["duration"]})

        const duration_svg = createElement("span", {
            className: ["material-symbols-outlined"],
            textContent : "timer",
        })

        const duration = createElement("p", {
            className : ["duration"],
            textContent : album.formatDuration()
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

        div_track_count.append(track_count_svg, track_count)
        div_duration.append(duration_svg, duration)

        div_info.append(div_track_count, div_duration)

        div_accessibility.append(accessibility, accessibilityBar)
        div_description.append(div_info, div_accessibility, comment)
        div_content.append(img, div_description)
        div.append(title, artist_name, div_content, a)   
        container.insertAdjacentElement("beforeend", div)

        index += 1
    }
}

let data = getCache()

console.log(data)

if (!data) {
    console.log("Fetch des albums")
    console.log(data)
    data = await getAlbum()
}


setCache(data)
renderAlbum(data)