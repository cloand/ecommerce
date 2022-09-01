import axios from "axios";
import { useEffect, useState } from "react";
import { getCategories, getProductsUrl } from "../constants/url";
import { useFetch } from "./useFetch";

export const useFilterProduct = (brand,type) => {
    const [data,setData] = useState();
    const [category] = useFetch('$(getCategories)')

    useEffect(()=>{
        axios.get(`http://localhost:8080${getProductsUrl}`).then((res)=>{
            const check = res.data;
            // brand ? setData(check.filter((item) => item.brand === brand)) : setData(check)
            if(brand){
                if(type.indexOf("get-categories") >= 0){
                    const result = []
                    check.forEach((item)=>{
                        item.category.forEach((category) => {
                                if(brand === category){
                                    result.push(item)
                                }
                           
                        })
                    })
                    setData(result)
                }else{
                    setData(check.filter((item) => item.brand === brand))
                }
            }else{
                setData(check)
            }
        }).catch((e)=> console.log(e))
    },[brand,type,category])

    return [data]
}
