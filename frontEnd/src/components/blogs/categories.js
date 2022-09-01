import { useDispatch } from 'react-redux';
import {OuterDiv,InnerDiv,Name,Heading,CategorySection,ShowAll} from '../../styles/blogs/categories'
import { DivSeperation } from '../../styles/constantLayout';
import { getCurrentCategoryBlogs,getAllBlogs} from '../../features/blogs/currentcategory';
import { changeCurrentBlog } from '../../features/blogs/currentBlog';

const Categories = ({items}) => {
    const dispatch= useDispatch()

    return (
        <>
            <OuterDiv>
                <Heading>
                    Categories
                </Heading>
                <DivSeperation width={.4}/>
                <ShowAll onClick={()=> {dispatch(getAllBlogs());dispatch(changeCurrentBlog("Blogs"))}}>
                    All Blogs
                </ShowAll>
                <DivSeperation width={.05}/>
                <CategorySection>
                {items?.map((item) => {
                    return (
                        <>
                            <SingleCategory item = {item}/>
                            
                        </>
                    )
                })}
                </CategorySection>
            </OuterDiv>
        </>
    );
}

export default Categories;

const SingleCategory = ({item}) =>{
    const dispatch = useDispatch()

    return (
        <>
            <InnerDiv onClick={()=>{
                    dispatch(getCurrentCategoryBlogs(item._id));
                    dispatch(changeCurrentBlog(item.name))
                }}>
                    {item.type === "blog" &&<> <Name>{item.name} </ Name><DivSeperation width={.05}/></> }
            </InnerDiv>
        </>
    )
}