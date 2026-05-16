import { Music } from "./Music"
import { SUPABASE_URL } from "../ressource/supabase"

export class Album extends Music {
    id: string
    album_name: string
    published_date: Date
    label: string
    comment: string
    accessibility: number
    artist: string
    sub_artists: string
    track_count: number


    constructor(data: Record<string, any>) {

        super(data.duration_s)

        this.id = data.id
        this.album_name = data.album_name
        this.published_date = data.published_date
        this.label = data.label
        this.comment = data.comment
        this.accessibility = data.accessibility
        this.artist = data.artist
        this.sub_artists = data.sub_artists
        this.track_count = data.track_count
    }

    getAlbumUrl() :string {
        const url = `./album.html?ID=${this.id}&NAME=${this.album_name}`
        return url
    }

    getCoverUrl() :string {
        const url = `${SUPABASE_URL}/storage/v1/object/public/albumCover/${this.id}.webp`
        return url
    }
}
