import { OuterDiv,InnerDiv,Image,Text } from "../styles/brand/tilesDisplay";
import top from '../assets/top.webp'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkCategory, changeTagChecks, changeBrandChecker } from "../features/productFeatures/productSlice";
import { getBrands } from "../constants/url";

const TilesDisplay = ({data,type}) => {
    return (
        <>
            <OuterDiv>
                {data?.map((item,index)=> {
                    if(type === "categories"){
                        return item.type === "product" && <SingleTile key = {index} item = {item} current={type}/>
                    }
                    return <SingleTile key = {index} item = {item} current={type} index = {index}/>
                })}
            </OuterDiv>
        </>
    )
}

export default TilesDisplay;

const SingleTile = ({item,current,index}) => {
    const dispatch = useDispatch()

    console.log(current,'currentig')

    return(
        <>
            <Link to={`${item.slug}`} >
                <InnerDiv onClick={()=> {
                    
                    if(current===getBrands){
                        dispatch(changeBrandChecker(index))
                        dispatch(changeTagChecks(null))
                    }else{
                        dispatch(checkCategory([item._id,item.name,current]));
                    }
                    }}>
                    <Image src={top} alt="category" />
                    <Text>
                        {item.name}
                    </Text>
                </InnerDiv> 
            </Link>
        </>
    )
}

// onClick={() => dispatch(changeCurrentCategory({item:item}))}