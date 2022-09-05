import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

export const useFetch = (url) => {
    const [data,setData] = useState();
    const [loading,setLoading] = useState();
    const [error,setError] = useState();

    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:8080${url}`).then((res)=>{
                setData(res.data)
            }    
        ).catch(err=>{
            setError(err)
        }).finally(
            setLoading(false)
        )
    },[url])
    return [data,loading,error] 
}

