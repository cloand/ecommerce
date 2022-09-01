import TilesDisplay from "../tilesDisply";
import { OuterLayout } from "../../styles/constantLayout";
import { getBrands } from "../../constants/url";
import {useFetch} from '../../customHooks/useFetch'


const Index = () => {
    const [brands] = useFetch(`${getBrands}`)
    

    return(
        <>
        <OuterLayout>
            { brands && <TilesDisplay data = {brands} type={getBrands}/>}
            </OuterLayout>
        </>
    )
}

export default Index;