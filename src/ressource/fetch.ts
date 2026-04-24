import { supabase } from "./supabase"
import type { Album, Track } from "../types"

export async function getAlbum(): Promise<Album[]> {
    const { data } = await supabase.rpc('get_album')
    console.log("Albums récupérés")
    return data
}

export async function getTrack(album_uuid: string): Promise<Track[]> {
    const { data } = await supabase.rpc('get_track_from_album', {"p_album_uuid" : album_uuid})
    return data
}