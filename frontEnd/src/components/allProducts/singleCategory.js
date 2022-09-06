import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OuterDiv, Heading } from "../../styles/allProducts/singleCategoryStyle";
import { DivSeperation } from "../../styles/constantLayout";
import { checkCategory } from "../../features/productFeatures/productSlice";
import StockFilters from "./StockFilters";
import { changeTagChecks } from "../../features/productFeatures/productSlice";
import { useEffect } from "react";

const SingleCategory = ({ category, type, index ,allCategories}) => {
    return (
        <>
            <OuterDiv >
                {(type === "availabilities" || type === "size" || type === "brands") && <StockFilters category={category} type={type} index={index} />}
                {type === "product" && <CategoryFilter category={category} type = {type}/>}
                {category.name !== "Women's Collection" && category.name !== "Out Of Stock" && category.name !== "42mm" && <DivSeperation width={'1px'} />}
            </OuterDiv>
        </>
    );
}

export default SingleCategory;

const CategoryFilter = ({ category,type }) => {
    const dispatch = useDispatch();
    const { currentCategory } = useSelector((store) => store.products)

    console.log(currentCategory,"current category")
    return (
        <>
            {category.type === "product" && 
            <Heading
                current={currentCategory[1]} 
                name={category.name} 
                onClick={() => {
                    dispatch(checkCategory([category._id, category.name]));
                    dispatch(changeTagChecks([type,category.name,category.id]))
                }}
            >
                {category.name}
            </Heading>}

        </>
    )
}