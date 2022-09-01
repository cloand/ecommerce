import { useEffect } from "react"
import { getBrands } from "../constants/url"
import { useFetch } from "../customHooks/useFetch"

const GetBrands = ({data}) => { 
    const [brand] = useFetch(`${getBrands}/${data.brand}`)
    useEffect(()=>{

    },[brand])
    return (
        <>
            {brand?.brand}
        </>
    )
}

export default GetBrands;