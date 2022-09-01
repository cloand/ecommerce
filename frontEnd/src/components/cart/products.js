import { OuterLayout } from "../../styles/constantLayout";
import NavHeader from "../navHeader";
import EmptyCart from "./emptyCart";
import NonEmptyCart from "./nonEmptyCart";
import { useSelector } from "react-redux";

const Products = () => {
    const {count} = useSelector((store) => store.cart);

    return (
        <>
            <OuterLayout>
                <NavHeader type = {"Cart"}/>
                {count === 0 ? <EmptyCart /> : <NonEmptyCart/>}
            </OuterLayout>
        </>
    );
}

export default Products;