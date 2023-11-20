import axios from "axios";

const Base='https://youtube-v31.p.rapidapi.com'
const API_Key='f1501236damshfb7c485967d33d0p182210jsn24719c7f0952'
const options = {
   
    params: {
      maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key':API_Key,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchData=async(url)=>{
    const {data}=await axios.get(`${Base}/${url}`,options);
    
    return data
}
