import { getBlogs, getCategories } from "../../constants/url";
import { OuterDiv } from "../../styles/blogs";
import Tiles from "./tiles";
import {useFetch} from '../../customHooks/useFetch'
import Categories from './categories'
import { OuterLayout } from "../../styles/constantLayout";

const Index = () => {
    const [blogs] = useFetch(getBlogs)
    const [categories] = useFetch(getCategories)

    return (
        <>
            <OuterLayout>
                <OuterDiv>
                    {categories && <Categories items = {categories}/>}
                    {blogs && <Tiles blogs = {blogs}/>}
                </OuterDiv>
            </OuterLayout>
        </>
    )
}

export default Index;