import React, { useState } from "react";
import SingleCategory from "./singleCategory";
import { allSize, availability, colorFilters } from "../../constants/DisplayTexts";
import { CategorySection, OuterDiv, Category, Heading, Label, Icon, PriceRange, Text, Range, Button, Caption, ColorPallet, DropDownSection, DropButton, AllProducts, SingleColor, ColorSection, Selected, MinMax, SmallText,BrandOuter,BrandInner,Name,BrandName} from "../../styles/allProducts/categoryFiltersStyle";
import { DivSeperation } from "../../styles/constantLayout";
import { checkValue } from "../../features/productFeatures/allProducts/categoryDropdownSlice";
import { useSelector, useDispatch } from "react-redux";
import { getBrands, getCategories } from "../../constants/url";
import { useFetch } from '../../customHooks/useFetch';
import { changeTagChecks, checkCategory, getAllProducts, sortByPrice,getBrandList, changeBrandChecker, deleteTags} from "../../features/productFeatures/productSlice";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import MultiRangeSlider from "multi-range-slider-react";
import '../../styles/css/priceSlider.css'
import {useParams} from 'react-router-dom'
import { changeFilters } from "../../features/productFeatures/allProducts/categoryFilters";



const CategoryFilter = () => {
    const {category,brand} = useSelector((store) => store.categoryFilters)
    const { categories, availabilities, price, color, size } = useSelector((store) => store.dropper);
    const dispatch = useDispatch();
    const location = useParams();
    const { currentTags, brandChecker ,brandList} = useSelector((store) => store.products)
    const [allCategories] = useFetch(`${getCategories}`)
    const [brands] = useFetch(`${getBrands}`)

    const [min, setMin] = useState(1000);
    const [max, setMax] = useState(8000);
    // console.log(categories,"checkk")

    // const checkUI = () => {
    //     if(window.location.pathname.split('/')[1])
    // }


    useEffect(() => {
        // console.log(location,"locationing")
        // checkUI();
        if(window.location.pathname.split('/')[1] === "get-categories"){
            dispatch(changeFilters(['brand',true]));
            dispatch(changeFilters(['category',false]));
        }
        if(window.location.pathname.split('/')[1] === "get-brands"){
            dispatch(changeFilters(['brand',false]));
            dispatch(changeFilters(['category',true]));
        }
        if(window.location.pathname.split('/')[1] === "get-products"){
            dispatch(changeFilters(['brand',true]));
            dispatch(changeFilters(['category',true]));
        }
    }, [currentTags])

    return (
        <>
            <OuterDiv>
                <DivSeperation width={'3.6px'} />
                {category && <Category>
                    <Heading>
                        <Label>
                            Categories
                        </Label>
                        <DropButton onClick={() => dispatch(checkValue("categories"))}>
                            <Icon className="material-symbols-outlined" >
                                add
                            </Icon>
                        </DropButton>
                    </Heading>
                    <DropDownSection isDrop={categories}>
                        { (brand && category) && <AllProducts onClick = {() => {
                            dispatch(getAllProducts());
                            dispatch(checkCategory("Products"));
                        }}>
                            All Products
                        </AllProducts>}
                        {allCategories?.map((category, index) => {
                            return (
                                <SingleCategory key={index} category={category} type={"product"} index={index} allCategories={allCategories} />
                            );
                        })}
                    </DropDownSection>
                </Category>}
                <DivSeperation width={'3.6px'} />
                <Category>
                    <Heading>
                        <Label>
                            Availability
                        </Label>
                        <DropButton onClick={() => dispatch(checkValue("availabilities"))}>
                            <Icon className="material-symbols-outlined">
                                add
                            </Icon>
                        </ DropButton>
                    </Heading>
                    <DropDownSection isDrop={availabilities}>
                        {availability.map((category, index) => {
                            return (
                                <>
                                    <SingleCategory key={index} category={category} type={"availabilities"} index={index} allCategories={allCategories} />
                                </>
                            );
                        })}
                    </DropDownSection>
                </Category>
                <DivSeperation width={'3.6px'} />
                <Category>
                    <Heading>
                        <Label>
                            Price
                        </Label>
                        <DropButton onClick={() => dispatch(checkValue("price"))}>
                            <Icon className="material-symbols-outlined">
                                add
                            </Icon>
                        </DropButton>
                    </Heading>
                    <DropDownSection isDrop={price}>

                        <PriceRange>

                            <MultiRangeSlider
                                min={0}
                                max={30000}
                                step={10}
                                ruler={false}
                                label={true}
                                preventWheel={false}
                                minValue={min}
                                maxValue={max}
                                onInput={(e) => {
                                    setMin(e.minValue),
                                    setMax(e.maxValue)
                                }}
                                
                            />

                        </PriceRange>
                        <Range>
                            <SmallText>
                                Range:
                            </SmallText>
                            <MinMax>
                                {`$${min} - $${max}`}
                            </MinMax>
                        </Range>
                        <Button onClick={() =>{
                            dispatch(sortByPrice([min,max]))
                        }}>
                            <Caption>
                                Filter
                            </Caption>
                        </Button>
                    </DropDownSection>
                </Category>
                <DivSeperation width={'3.6px'} />
                <Category>
                    <Heading>
                        <Label>
                            Color
                        </Label>
                        <DropButton onClick={() => dispatch(checkValue("color"))}>
                            <Icon className="material-symbols-outlined">
                                add
                            </Icon>
                        </DropButton>
                    </Heading>
                    <DropDownSection isDrop={color}>
                        <ColorSection >
                            {colorFilters.map((item, index) => {
                                return (<SingleColor color={item} onClick={() => dispatch(changeTagChecks(["color", item]))}>
                                    {currentTags["color"][item] && <Selected className="material-symbols-outlined">done</Selected>}
                                </SingleColor>);
                            })}
                        </ColorSection>
                    </DropDownSection>
                    <DropDownSection isDrop={color}>
                        <ColorPallet>

                        </ColorPallet>
                    </DropDownSection>
                </Category>
                <DivSeperation width={'3.6px'} />
                <Category>
                    <Heading>
                        <Label>
                            Size
                        </Label>
                        <DropButton onClick={() => dispatch(checkValue("size"))}>
                            <Icon className="material-symbols-outlined">
                                add
                            </Icon>
                        </DropButton>
                    </Heading>
                    <DropDownSection isDrop={size}>
                        <CategorySection>
                            {
                                allSize.map((size, index) => {
                                    return (
                                        <SingleCategory key={index} category={size} type={"size"} index={index} allCategories={allCategories} />
                                    )
                                })
                            }
                        </CategorySection>
                    </DropDownSection>
                </Category>
                <DivSeperation width={'3.6px'} />
                { brand && <Category>
                    <Heading>
                        <Label>
                            Brands
                        </Label>
                        <DropButton onClick = {() => dispatch(checkValue("availabilities"))}>
                    <Icon className = "material-symbols-outlined">
                        add
                    </Icon>
                    </ DropButton>
                    </Heading>
                    <DropDownSection isDrop = {availabilities}>
                    {brands?.map((brands,index)=>{
                        return (
                            <>
                                <BrandCategory key={index} category = {brands} type ={"brands"} index={index} allCategories = {allCategories}/>
                            </>
                        );
                    })}
                   </DropDownSection>
                </Category>}

            </OuterDiv>
        </>
    );

}

export default CategoryFilter;

const BrandCategory = ({category,index}) => {
    const dispatch = useDispatch();
    const {brandChecker} = useSelector((store) => store.products)

    return (
        <>
            <BrandOuter onClick={()=>{
                    // console.log('check', category, index)
                    dispatch(changeBrandChecker(index))
                    dispatch(changeTagChecks())
                    // dispatch(deleteTags(category.name))
                }}>
                <BrandInner >
                    <Name type="checkbox" checked={brandChecker[index]} onChange={()=> console.log('changes')}/>
                       <BrandName >{category.name}</BrandName>
                </BrandInner>
            </BrandOuter>
        </>
    )
}
