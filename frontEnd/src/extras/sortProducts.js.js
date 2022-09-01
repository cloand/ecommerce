import axios from "axios"
import { getCategories, getProductsUrl } from "../constants/url";

export const getData = (url) => {
    let data;
    axios.get(`http://localhost:8000${url}`).then((res)=> data = res.data).catch((e) => console.log(e))
    return data;
}

export const sortProducts = async(products,current,state) => {
    const data = await getData(`${getProductsUrl}`)
    if(current.indexOf("get-brands") !== -1){
       
        const result = products.filter((item) => item.brand === state.state.name)
        
        return result;
    }else if(current.indexOf("get-categories") !== -1){
        // console.log(products.filter((item) => item.categories.filter((item)=> current.item.name === getData(`${getCategories}/${item}`).name)))
    }else{
        return products;
    }
}

export const getParticularData = (data,name) => {
    const result = data?.filter((item) => item.slug === name)
    return result;
}
