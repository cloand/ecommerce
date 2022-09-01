import React from "react";
import SingleCategory from "./singleCategory";
import { allSize,availability } from "../../constants/DisplayTexts";
import { CategorySection,OuterDiv,Category,Heading,Label,Icon,Slider,PriceRange,Text,Range,Button,Caption,ColorPallet,DropDownSection,DropButton,AllProducts} from "../../styles/allProducts/categoryFiltersStyle";
import { DivSeperation } from "../../styles/constantLayout";
import { checkValue } from "../../features/productFeatures/allProducts/categoryDropdownSlice";
import { useSelector,useDispatch } from "react-redux";
import { getCategories } from "../../constants/url";
import {useFetch} from '../../customHooks/useFetch';
import { checkCategory, getAllProducts } from "../../features/productFeatures/productSlice";
import { useEffect } from "react";


const CategoryFilter = () => {
    const {categories,availabilities,price,color,size} = useSelector((store) => store.dropper);
    const dispatch = useDispatch();
    const {currentTags} = useSelector((store) => store.products)
    const [allCategories] = useFetch(`${getCategories}`)
    // console.log(categories,"checkk")

    useEffect(() => {

    },[currentTags])

    return (
        <>
            <OuterDiv>
            <DivSeperation width={'3.6px'}/>
                <Category>
                    <Heading>
                        <Label>
                            Categories
                        </Label>
                        <DropButton onClick = {() => dispatch(checkValue("categories"))}>
                        <Icon className = "material-symbols-outlined" >
                            add
                        </Icon>
                        </DropButton>
                    </Heading>
                   <DropDownSection isDrop = {categories}>
                     <AllProducts onClick={()=>{
                        dispatch(getAllProducts());
                        dispatch(checkCategory("Products"));
                    }}>
                        All Products
                    </AllProducts>
                    {allCategories?.map((category,index)=>{
                        return (
                            <SingleCategory key={index} category = {category} type ={"product"} index={index} allCategories = {allCategories}/>
                        );
                    })}
                    </DropDownSection>
                </Category>
                <DivSeperation width={'3.6px'}/>
                <Category>
                    <Heading>
                        <Label>
                            Availability
                        </Label>
                        <DropButton onClick = {() => dispatch(checkValue("availabilities"))}>
                    <Icon className = "material-symbols-outlined">
                        add
                    </Icon>
                    </ DropButton>
                    </Heading>
                    <DropDownSection isDrop = {availabilities}>
                    {availability.map((category,index)=>{
                        return (
                            <>
                                <SingleCategory key={index} category = {category} type ={"availabilities"} index={index} allCategories = {allCategories}/>
                            </>
                        );
                    })}
                   </DropDownSection>
                </Category>
                <DivSeperation width={'3.6px'}/>
                <Category>
                    <Heading>
                        <Label>
                            Price
                        </Label>
                        <DropButton onClick = {() => dispatch(checkValue("price"))}>
                            <Icon className = "material-symbols-outlined">
                                add
                            </Icon>
                        </DropButton>
                    </Heading>
                    <DropDownSection isDrop = {price}>
                    <Slider>

                    </Slider>
                    <PriceRange>
                        <Text>
                            Range
                        </Text>
                        <Range>
                            $0 - $1320
                        </Range>
                    </PriceRange>
                    <Button>
                        <Caption>
                            Filter
                        </Caption>
                    </Button>
                    </DropDownSection>
                </Category>
                <DivSeperation width={'3.6px'}/>
                <Category>
                    <Heading>
                        <Label>
                            Color
                        </Label>
                        <DropButton onClick = {() => dispatch(checkValue("color"))}>
                        <Icon className = "material-symbols-outlined">
                            add
                        </Icon>
                        </DropButton>
                    </Heading>
                    <DropDownSection isDrop = {color}>
                    <ColorPallet>

                    </ColorPallet>
                    </DropDownSection>
                </Category>
                <DivSeperation width={'3.6px'}/>
                <Category>
                    <Heading>
                        <Label>
                            Size
                        </Label>
                        <DropButton onClick = {() => dispatch(checkValue("size"))}>
                        <Icon className = "material-symbols-outlined">
                            add
                        </Icon>
                        </DropButton>
                    </Heading>
                    <DropDownSection isDrop = {size}>
                    <CategorySection>
                    {
                        allSize.map((size,index)=>{
                            return (
                                <SingleCategory key={index} category = {size} type ={"size"} index={index} allCategories = {allCategories}/>
                            )
                        })
                    }
                    </CategorySection>
                    </DropDownSection>
                </Category>
                <DivSeperation width={'3.6px'}/>
            </OuterDiv>
        </>
    );

}

export default CategoryFilter;

