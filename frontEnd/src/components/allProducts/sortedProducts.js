import {useSelector,useDispatch} from 'react-redux';
import { OuterDiv,SortingBar,LeftTags,TagLabel,FilterBox,Label,Icon,RightTags,ChangeView,SingleView,GridIcon1,GridIcon2,Products,TagsBar,SingleTag,Before,SingleOuter} from "../../styles/allProducts/sortedProductsStyle";
import GridView from './gridView';
import ListView from "./listView";
import { changeView } from "../../features/productFeatures/allProducts/simpleSortsSlice";
import { Link } from "react-router-dom";
import { changeProduct ,changeDropDown} from "../../features/productFeatures/product/selectedProduct";
import { getProductsUrl } from '../../constants/url';
import { useEffect } from 'react';
import { changeTagChecks, deleteTags } from '../../features/productFeatures/productSlice';

const SortedProducts = () => {
    const {view} = useSelector((store) => store.simpleSort);
    const dispatch = useDispatch();
    const {categoriesSort,tagsList} = useSelector((store)=> store.products)

  useEffect(() => {

  },[tagsList,categoriesSort])

    return (
        <OuterDiv>
            <SortingBar>
                <LeftTags>
                    <TagLabel>
                        SORT BY:
                    </TagLabel>
                        <FilterBox>
                            <Label>
                                Alphabetically,A-Z
                            </Label>
                            <Icon className = "material-symbols-outlined">
                                expand_more
                            </Icon>
                        </FilterBox>
                </LeftTags>
                <RightTags>
                    <TagLabel>
                        SHOW:
                    </TagLabel>
                    <FilterBox>
                        <Label>
                            50
                        </Label>
                        <Icon className = "material-symbols-outlined">
                            expand_more
                        </Icon>
                    </FilterBox>
                    <ChangeView>
                        <SingleView onClick={() => dispatch(changeView("list"))}>
                            <GridIcon1 view = {view} className = "material-symbols-outlined" >
                                view_list
                            </GridIcon1>
                        </SingleView>
                        <SingleView onClick={() => dispatch(changeView("grid"))}>
                            <GridIcon2 view = {view} className="material-symbols-outlined">
                                grid_view
                            </GridIcon2>
                        </SingleView>
                    </ChangeView>   
                </RightTags>
            </SortingBar>
            <TagsBar length={tagsList.length}>
                {tagsList?.map((item,index)=>{
                    return <SingleOuter><Before className='material-symbols-outlined' onClick={()=>{
                        dispatch(deleteTags(item));
                        dispatch(changeTagChecks());
                    }}>close</Before><SingleTag key={index}>{item}</SingleTag></SingleOuter>
                })}
            </TagsBar>
            {categoriesSort && <Products>
                {
                    categoriesSort?.map((item,index) => (
                        <div key = {index} >
                            <Link to = {`${getProductsUrl}/${item.slug}`} style = {{textDecoration:"none"}} onClick={() => {
                                // console.log({item},'test')
                                dispatch(changeProduct(item));
                                dispatch(changeDropDown(null));
                                // debugger;
                            }}>
                                {view === "grid" ?  <GridView key = {index} items = {item}/> : <ListView key = {index} items = {item} />}
                            </Link>
                       </div> ?? "#"
                    ))
                }
                
            </Products>}
            
        </OuterDiv>
    );
}

export default SortedProducts;