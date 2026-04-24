import type { Album } from "../types"

const KEY_DATA = "album"
const KEY_TIME = "time"
const CACHE_DURATION: number = 1000 * 60 * 60 // 1 heure


export function getCache(): Album[] | null {
    let data = localStorage.getItem(KEY_DATA);
    let time = localStorage.getItem(KEY_TIME);

    if (!data || !time)
        return null
    
    if (Date.now() - parseInt(time) > CACHE_DURATION)
        return null

    return JSON.parse(data)
}

export function setCache(albums: Album[]) {
    localStorage.setItem(KEY_DATA, JSON.stringify(albums))
    localStorage.setItem(KEY_TIME, Date.now().toString())
}