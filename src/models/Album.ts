import { Music } from "./Music"
import { SUPABASE_URL } from "../ressource/supabase"

export class Album extends Music {
    id: string
    name: string
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
        this.name = data.album_name
        this.published_date = data.published_date
        this.label = data.label
        this.comment = data.comment
        this.accessibility = data.accessibility
        this.artist = data.artist_name
        this.sub_artists = data.sub_artists_name
        this.track_count = data.track_count
    }

    getAlbumUrl() :string {
        const url = `./album.html?ID=${this.id}&NAME=${this.name}`
        return url
    }

    getCoverUrl() :string {
        const url = `${SUPABASE_URL}/storage/v1/object/public/albumCover/${this.id}.webp`
        return url
    }
}
