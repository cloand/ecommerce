import { OuterDiv,InnerDiv,Image,Text } from "../styles/brand/tilesDisplay";
import top from '../assets/top.webp'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkCategory, changeTagChecks } from "../features/productFeatures/productSlice";

const TilesDisplay = ({data,type}) => {
    return (
        <>
            <OuterDiv>
                {data?.map((item,index)=> {
                    if(type === "categories"){
                        return item.type === "product" && <SingleTile key = {index} item = {item} current={type}/>
                    }
                    return <SingleTile key = {index} item = {item} current={type}/>
                })}
            </OuterDiv>
        </>
    )
}

export default TilesDisplay;

const SingleTile = ({item,current}) => {
    const dispatch = useDispatch()

    return(
        <>
            <Link to={`${item.slug}`} >
                <InnerDiv onClick={()=> {
                        dispatch(checkCategory([item._id,item.name,current]));
                        // dispatch(changeTagChecks([,item,current,]))
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