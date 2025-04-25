import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY
const baseUrl = "https://api.themoviedb.org/3"

  
// const url = `${baseUrl}/discover/movie?${params.toString()}`;

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
    return res?.data
}

export async function fetchVideos(type, id, signal){
    const res = await axios.get(`${baseUrl}/${type}/${id}/videos?api_key=${apiKey}`, signal)
    return res?.data
}

export async function fetchDiscover(type, ){
    const params = new URLSearchParams({
        api_key: apiKey,
        sort_by,
        page
    });
    const res = await axios.get(`${baseUrl}/discover/${type}?api_key=${apiKey}`)
    return res?.data
}



  