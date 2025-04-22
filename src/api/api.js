import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY
const baseUrl = "https://api.themoviedb.org/3"
export const imagePath = "https://image.tmdb.org/t/p/w500"
export const imagePathOriginal = "https://image.tmdb.org/t/p/original"

export async function fetchTrending(timeWindow = "day"){
    const {data} = await axios.get(`${baseUrl}/trending/all/${timeWindow}?api_key=${apiKey}`)
    return data?.results
}

export const fetchDetails = async (type, id, signal) => {
    const res = await axios.get(`${baseUrl}/${type}/${id}?api_key=${apiKey}`, {signal})
    return res?.data
}

export async function fetchCredits(type, id, signal) {
    const res = await axios.get(`${baseUrl}/${type}/${id}/credits?api_key=${apiKey}`, {signal})
    // console.log(res)
    return res?.data
}