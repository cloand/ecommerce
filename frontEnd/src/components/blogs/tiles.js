import {OuterDiv,InnerDiv,TopImage,BottomDisc,Heading,Disc,Button,Icon,Text,Title,Category} from '../../styles/blogs/tiles'
import { Link } from 'react-router-dom';
import { getBlogs } from '../../constants/url';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentDisc } from '../../features/blogs/currentBlog';

const Tiles = ({blogs}) => {
    const {isLoading,currentBlogs} = useSelector((store) => store.currentBlogCategory)

    return (
        <>
            <OuterDiv>
                {!isLoading && currentBlogs?.map((item,index)=>{
                    return <SingleTile key = {index} item = {item} />
                })}
                {isLoading && blogs.map((item,index)=>{
                    return <SingleTile key = {index} item = {item} />
                })}
            </OuterDiv>
        
        </>
    )
}

export default Tiles;

const SingleTile = ({item}) => {
    const dispatch = useDispatch()
    return (
        <>
        <Link to={`${getBlogs}/${item.slug}`} style={{color:"inherit",textDecoration:"none"}}>
            <InnerDiv onClick = {() => dispatch(changeCurrentDisc([item.title,item._id]))} >
                <TopImage src={item.image[0]} />
                <BottomDisc>
                   <Category>
                   <Title>
                        By :
                    </Title>
                    <Heading>
                        {item.title}
                    </Heading>
                   </Category>
                    <Category>
                    <Title>
                        Title :
                    </Title>
                    <Disc>
                        {item.name}
                    </Disc>
                    </Category>
                    <Button>
                        <Text>
                            Read More
                        </Text>
                        <Icon className="material-symbols-outlined">
                            east
                        </Icon>
                    </Button>
                </BottomDisc>
            </InnerDiv>
            </Link>
        </>
    )
}