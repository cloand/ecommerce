import React from "react";
import { OuterLayout } from "../../styles/constantLayout";
import CategoryFilter from "./categoryFilters";
import SortedProducts from "./sortedProducts";
import { OuterDiv } from "../../styles/allProducts/prouductSectionStyle";

const ProductSection = () => {
    return (
        <>
            <OuterLayout>
                <OuterDiv>
                    <CategoryFilter />
                    <SortedProducts />
                </OuterDiv>
            </OuterLayout>
        </>
    );
}

export default ProductSection;