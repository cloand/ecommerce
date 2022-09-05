import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OuterLayout } from "../styles/constantLayout";
import {OuterDiv,Card,TopImage,BottomSection,Heading,Disc,Button,Label,Icon,TopSection,CardBottom,CardHeading,Date,DateSection,Month} from '../styles/featuredArticlesStyles'
import { getBlogs,getLatestThreeBlogs} from "../constants/url";
import { useFetch } from "../customHooks/useFetch";
import { Link } from "react-router-dom";
import {changeCurrentDisc} from '../features/blogs/currentBlog'
import { useDispatch } from "react-redux";
import {months} from '../constants/DisplayTexts'

const FeaturedArticles = () => {
   const [blog] = useFetch(`${getBlogs}${getLatestThreeBlogs}`)
    return(
        <OuterLayout>
            <OuterDiv>
            <TopSection>
                <CardHeading>
                    Featured Articles
                </CardHeading>
            </TopSection>
            <CardBottom>
                {blog?.map((item,index)=>{
                    return(
                        index < 3 && <Cards blog={item}/>
                    )
                })}
            </CardBottom>
        </OuterDiv>

        </OuterLayout>
    );
}

export default FeaturedArticles;

const Cards = ({blog}) =>{
    const dispatch = useDispatch()
    // console.log(blog.date,"blog")
    return (
        <>
            
            <Card onClick={()=>dispatch(changeCurrentDisc([blog.title,blog._id]))}>
            <Link to={`${getBlogs}/${blog.slug}`} style={{textDecoration:"none",color:"inherit"}}>
                <TopImage image={blog?.image[0]}>
                    <DateSection>
                        <Date>
                            {months[blog.date.split("-")[1]]}
                        </Date>
                        <Month>
                            {blog.date.split("-")[2].split("T")[0]}
                        </Month>
                    </DateSection>
                       
                </TopImage>
                <BottomSection>
                    <Heading>
                        {blog.title}
                    </Heading>
                    <Disc>
                        {blog.content}
                    </Disc>
                    <Button>
                        <Label>
                            Read More
                        </Label>
                        <Icon>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                        </Icon>
                    </Button>
                </BottomSection>
            </Link>
            </Card>
        </>
    )
}