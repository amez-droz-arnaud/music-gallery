import { supabase } from "./supabase"
import { Album } from "../models/Album"
import { Track } from "../models/Track"

export async function getAlbum(): Promise<Album[]> {
    const { data } = await supabase.rpc('get_album')
    const albums = data.map((d: Record<string, any>) => new Album(d))
    console.log("Albums récupérés")
    return albums
}


export async function getTrack(album_uuid: string): Promise<Track[]> {
    const { data } = await supabase.rpc('get_track_from_album', {"p_album_uuid" : album_uuid})
    const tracks = data.map((d:Record<string, any>) => new Track(d))
    return tracks
}