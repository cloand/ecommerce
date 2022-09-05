import RelatedProduct from "./relatedProduct";
import ProductDisc from "./productDisc";
import ProductLayout from "./productLayout";
import Header from "../navHeader";
import {OuterLayout} from "../../styles/constantLayout"
import { DivSeperation } from "../../styles/constantLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { changeDropDown } from "../../features/productFeatures/product/selectedProduct";

const ProductSection = () => {
    const {item} = useSelector((store) => store.selectedProduct)

    useEffect(()=>{
        return () => {
            changeDropDown(null)
            console.log("changed")
        }
    },[])

    return (
        <>
            <div style={{margin:".7em 0"}}>
                <DivSeperation width={.05}/>
            </div>
                <OuterLayout>
                    <Header/>
                    <ProductLayout />
                    <ProductDisc />
                    <RelatedProduct />
                </OuterLayout>
        </>
    )
}

export default ProductSection;