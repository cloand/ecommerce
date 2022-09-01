import React, { useEffect } from "react";
import { products } from "../constants/DisplayTexts";
import { OuterLayout } from "../styles/constantLayout";
import { OuterDiv } from "../styles/topProductsStyle";
import DisplayProduct from "./displayProduct";
import { getSaleProducts } from "../features/productFeatures/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../customHooks/useFetch";
import { getLatest, getProductsUrl, getFeatured, getBestWeek } from "../constants/url";

const TopProducts = () => {
    const [featured] = useFetch(`${getProductsUrl}${getFeatured}`)
    const [latest] = useFetch(`${getProductsUrl}${getLatest}`)
    const [weekBest] = useFetch(`${getProductsUrl}${getBestWeek}`)

    return (
        <OuterLayout>
            <OuterDiv>
                <DisplayProduct arr={[]} heading={"Sale Products"} />
                {latest && <DisplayProduct arr={latest} heading={"Latest Products"} />}
                {weekBest && <DisplayProduct arr={weekBest} heading={"Best of the week"} />}
                {featured && <DisplayProduct arr={featured} heading={"Popular"} />}
            </OuterDiv>
        </OuterLayout>

    )
}

export default TopProducts;