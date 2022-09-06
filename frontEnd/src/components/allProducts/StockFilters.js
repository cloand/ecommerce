import { OuterDiv,HeadingInput,Label } from "../../styles/allProducts/stockFilterStyle";
import { changeByFilter, changeTagChecks } from "../../features/productFeatures/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const StockFilters = ({category,type,index}) => {
    const dispatch = useDispatch()
    // dispatch(sortByTags([type,category]));
    
    const {currentTags} = useSelector((store) => store.products)

    return (
    
        <OuterDiv >
             
                <div>
            <HeadingInput type = "checkbox" id={category} name = {category} checked={currentTags[type][category]} onChange = {() => {
                dispatch(changeTagChecks([type,category.name ?? category,category._id ?? null]))
                
        }}/>
            <Label  for ={category} >{category}</Label>
        </div>
        </OuterDiv>
    );
}

export default StockFilters;

// onClick={() => {
//     dispatch(changeTagChecks([type,category.name ?? category,category._id ?? null]))
//     // dispatch(changeByFilter())
// }}