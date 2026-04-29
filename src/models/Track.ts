import { Music } from "./Music"

export class Track extends Music {
    album_id: string
    name: string
    index: number
    rating: number
    lyrics: string
    id: string
    comment: string


    constructor(data: Record<string, any>) {

        super(data.duration_s)

        this.album_id = data.album_id
        this.name = data.track_name
        this.index = data.track_index
        this.rating = data.rating
        this.lyrics = data.lyrics
        this.id = data.id
        this.comment = data.comment
    }
}
