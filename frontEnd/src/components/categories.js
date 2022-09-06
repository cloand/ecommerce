
import React from "react";
import { OuterLayout } from "../styles/constantLayout";
import {OuterDiv,TopSection,Heading,BottomSection,Categories,Caption} from "../styles/categoriesStyles";
import { getCategories } from "../constants/url";
import { Link ,NavLink} from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkCategory } from "../features/productFeatures/productSlice";



const CategoriesSection = ({categoryName,categories,images}) => {
    const dispatch = useDispatch()

    return (
        <OuterLayout>
            <OuterDiv>
                <TopSection>
                    <Heading >
                        {categoryName}
                    </Heading>
                </TopSection>
                <BottomSection>
                    <NavLink to={`${getCategories}/${categories[0].slug}`} state={categories[0]} style={{textDecoration:"none",color:"black"}} className = {({isActive}) => isActive ? 'active' :'inactive'}>
                        <Categories image = {images[0]} onClick={() => {
                        dispatch(checkCategory([categories[0]._id,categories[0].name]));
                    }
                    }>
                            <Caption>
                            {categories[0].name}
                            </Caption>
                        </Categories>
                    </NavLink>
                    <Link to={`${getCategories}/${categories[1].slug}`} state={categories[1]} style={{textDecoration:"none",color:"black"}} >
                    <Categories image={images[1]}  onClick={() => {
                        dispatch(checkCategory([categories[1]._id,categories[1].name]));
                    }
                    }>
                        <Caption>
                        {categories[1].name}
                        </Caption>
                    </Categories>
                    </Link>
                    <Link to={`${getCategories}/${categories[2].slug}`} state={categories[2]} style={{textDecoration:"none",color:"black"}} >
                    <Categories image = {images[2]} onClick={() => {
                        dispatch(checkCategory([categories[2]._id,categories[2].name]));
                    }
                    }>
                        <Caption>
                        {categories[2].name}
                        </Caption>
                    </Categories>
                    </Link>
                    <Link to={`${getCategories}/${categories[3].slug}`} state={categories[3]} style={{textDecoration:"none",color:"black"}} >
                        <Categories image={images[3]} onClick={() => {
                        dispatch(checkCategory([categories[3]._id,categories[3].name]));
                    }
                    }>
                        <Caption>
                        {categories[3].name}
                        </Caption>
                    </Categories>
                    </Link>
                </BottomSection>
            </OuterDiv>
        </OuterLayout>
    )
}

export default CategoriesSection;