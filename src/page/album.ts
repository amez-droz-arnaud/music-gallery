import { get_track_from_album } from "../ressource/fetch"
import type { Track } from "../types"

async function renderPage() {
    const params = new URL(window.location.href).searchParams
    const album_uuid = params.get("ID")

    if (!album_uuid) {
        console.log("UUID manquant dans l'url")
        return
    }
        
    const data: Track[] = await get_track_from_album(album_uuid)
    const cover_url = `https://fidfksvexbwqhbotefji.supabase.co/storage/v1/object/public/albumCover/${album_uuid}.jpg`
    let track_HTML =  data.map(track =>
        `
        <div class="track">
            <h2 class="track_name">${track.track_index} - ${track.track_name}</h2>
            <div class="info">
                <p class="duration">durée : ${track.duration_m_s}</p>
                <p class="lyrics">parole : ${track.lyrics}</p>
                <p class="rating">note : ${track.rating}/10</p>
            </div>
            <p class="comment">${track.comment}</p>
        </div>`
    ).join('');

    let album_cover = document.getElementById("album-cover") as HTMLElement
    let track_container = document.getElementById("track-container") as HTMLElement

    album_cover.setAttribute("src", cover_url)
    track_container.innerHTML = track_HTML;
}

renderPage()




