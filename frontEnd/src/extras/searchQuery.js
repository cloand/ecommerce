import { getProductsUrl, getSearch } from "../constants/url"

export const getSearchQuery = (type,query) => {
    let result = null;
    fetch(`http://localhost:8080${getProductsUrl}?${type}=${query}`).then(res => res.json()).then(data =>{ 
    result = data;    
    }).catch(err => console.log(err))
    return result;
}

