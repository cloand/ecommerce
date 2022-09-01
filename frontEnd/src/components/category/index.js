import TilesDisplay from "../tilesDisply";
import { OuterLayout } from "../../styles/constantLayout";
import {useFetch} from '../../customHooks/useFetch'
import { getCategories } from "../../constants/url";

const Index = () => {
    const [categories] = useFetch(`${getCategories}`)

    return (
        <>
        <OuterLayout>
           {categories && <TilesDisplay data = {categories} type={"categories"}/>}
        </OuterLayout>
        </>
    );
}

export default Index;