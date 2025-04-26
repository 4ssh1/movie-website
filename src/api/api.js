import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY
const baseUrl = "https://api.themoviedb.org/3"

export const imagePath = "https://image.tmdb.org/t/p/w500"
export const imagePathOriginal = "https://image.tmdb.org/t/p/original"

export async function fetchTrending(timeWindow = "day", page = 1){
    const {data} = await axios.get(`${baseUrl}/trending/all/${timeWindow}?api_key=${apiKey}&page=${page}`)
    return data?.results
} 

export const fetchDetails = async (type, id, signal) => {
    const res = await axios.get(`${baseUrl}/${type}/${id}?api_key=${apiKey}`, {signal})
    return res?.data
}

export async function fetchCredits(type, id, signal) {
    const res = await axios.get(`${baseUrl}/${type}/${id}/credits?api_key=${apiKey}`, {signal})
    return res?.data
}

export async function fetchVideos(type, id, signal){
    const res = await axios.get(`${baseUrl}/${type}/${id}/videos?api_key=${apiKey}`, signal)
    return res?.data
}

export async function fetchDiscover(type, {page = 1, sort_by = 'popularity.desc'}={}){
    const params = new URLSearchParams({
        api_key: apiKey,
        sort_by,
        page
    });
    const res = await axios.get(`${baseUrl}/discover/${type}?${params.toString()}`)
    return res?.data
}

export async function fetchSearch({query, page = 1}= {}){
    const params = new URLSearchParams({
       query,
       api_key: apiKey,
       page
    })
    const res = await axios.get(`${baseUrl}/search/multi?${params.toString()}`)
    return res?.data
}



  