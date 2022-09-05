import {useSelector,useDispatch} from 'react-redux';
import { OuterDiv,SortingBar,LeftTags,TagLabel,FilterBox,Label,Icon,RightTags,ChangeView,SingleView,GridIcon1,GridIcon2,Products,TagsBar,SingleTag,Before,SingleOuter,Selector,Dropper} from "../../styles/allProducts/sortedProductsStyle";
import GridView from './gridView';
import ListView from "./listView";
import { changeView } from "../../features/productFeatures/allProducts/simpleSortsSlice";
import { Link } from "react-router-dom";
import { changeProduct ,changeDropDown} from "../../features/productFeatures/product/selectedProduct";
import { getProductsUrl } from '../../constants/url';
import { useEffect } from 'react';
import { changeTagChecks, checkSortBy, deleteTags, sortByTags } from '../../features/productFeatures/productSlice';
import { sortArray } from '../../constants/DisplayTexts';
import { changeSortByDrop } from '../../features/productFeatures/extras';

const SortedProducts = () => {
    const {view} = useSelector((store) => store.simpleSort);
    const {categoriesSort,tagsList,sortBy} = useSelector((store)=> store.products)
    const {sortByDrop} = useSelector((store) => store.dropDown)
    const dispatch = useDispatch();

  useEffect(() => {

  },[tagsList,categoriesSort,sortBy])

    return (
        <OuterDiv>
            <SortingBar>
                <LeftTags>
                    <TagLabel>
                        SORT BY:
                    </TagLabel>
                            <FilterBox onClick={()=>{
                                dispatch(changeSortByDrop())
                            }}>
                                <Label>
                                    {sortBy}
                                </Label>
                                <Icon className = "material-symbols-outlined">
                                    expand_more
                                </Icon>
                            </FilterBox>
                            <Dropper check = {sortByDrop}>
                                {sortArray.map((item,index)=> {
                                    return(
                                        <>
                                            <Selector item = {item} sortBy = {sortBy} onClick={()=>{
                                                    dispatch(checkSortBy(item));
                                                    dispatch(changeSortByDrop());
                                                }}>
                                                <Label >
                                                    {item}
                                                </Label>
                                            </Selector>
                                        </>
                                    )
                                })}
                            </Dropper>
                       
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
            {view === "grid" && <Products>
                {
                    categoriesSort?.map((item,index) => (
                        <div key = {index} >
                                  <GridView key = {index} items = {item}/> 
                       </div> ?? "#"
                    ))
                }
                
            </Products>}

            {view === "list" &&
                
                    categoriesSort?.map((item,index) => (
                        <div key = {index} >
                                  <ListView key = {index} items = {item}/> 
                       </div> ?? "#"
                    ))
                }
                
            
            
        </OuterDiv>
    );
}

export default SortedProducts;