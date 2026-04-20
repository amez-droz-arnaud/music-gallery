export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]


export type Album = {
    id: string,
    album_name: string,
    published_date: Date,
    label: string,
    comment: string,
    accessibility: number,
    artist_name: string,
    sub_artist_name: string,
    track_count: number,
    duration_m_s: string,
    cover_url: string,
}

export type Track = {
    album_id: string,
    track_name: string,
    track_index: number,
    rating: number,
    lyrics: string,
    id: string,
    comment: string,
    duration_m_s: string,
}
