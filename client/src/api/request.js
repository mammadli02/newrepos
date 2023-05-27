import { BASE_URL } from "./base_url";
import axios from 'axios'
export const GETAll=async(name)=>{
let globaldata;
let URL;
if(!name){
    URL=BASE_URL+'/cards'
}else{
    URL=BASE_URL+'/cards'+`?name=${name}`
}
await axios.get(URL).then((res)=>{
    globaldata=res.data.data
})
return globaldata
}


export const GetById=async(ID)=>{
let global;
await axios.get(`${BASE_URL}/cards/${ID}`).then((res)=>{
    global=res.data.data
})
return global;
}



export const Deleted=async(ID)=>{
    let deleted;
    await axios.delete(`${BASE_URL}/cards/${ID}`)
    .then((res)=>{
        deleted=res.data.data
    })
    return deleted
}

export const Post=(payload)=>{
     axios.post(`${BASE_URL}/cards`, payload)
}

export const Putt=(id,payload)=>{
axios.put(`${BASE_URL}/cards+${id}`, payload)
}






