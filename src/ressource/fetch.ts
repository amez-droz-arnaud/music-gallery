import { supabase } from "./supabase"

export async function get_album(): Promise<any[]> {
    const { data } = await supabase.rpc('get_album')
    console.log("Albums récupérés")
    return data
}

export async function get_track_from_album(album_uuid: string): Promise<any[]> {
    const { data } = await supabase.rpc('get_track_from_album', {"p_album_uuid" : album_uuid})
    return data
}