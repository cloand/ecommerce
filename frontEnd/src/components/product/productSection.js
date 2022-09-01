import RelatedProduct from "./relatedProduct";
import ProductDisc from "./productDisc";
import ProductLayout from "./productLayout";
import Header from "../navHeader";
import {OuterLayout} from "../../styles/constantLayout"
import { DivSeperation } from "../../styles/constantLayout";
import { useSelector } from "react-redux";

const ProductSection = () => {
    const {item} = useSelector((store) => store.selectedProduct)

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