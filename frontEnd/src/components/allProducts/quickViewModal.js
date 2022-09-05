import { QuickView, QuickViewOuter, Product, QuickViewDiv } from "../../styles/constantLayout";
import ProductLayout from "../product/productLayout";
import { useDispatch,useSelector } from "react-redux";
import { changeQuickView } from "../../features/productFeatures/extras";

const QuickViewModal = () => {
    const dispatch = useDispatch();
    const { quickView } = useSelector((store) => store.dropDown)

    return (
        <>
            <QuickViewOuter className="material-symbols-outlined" onClick={() => {
                dispatch(changeQuickView())
            }}>
                close
            </QuickViewOuter>
            <QuickView isQuickView={quickView} top={window.pageYOffset}>
                <QuickViewDiv>
                    <Product>
                        <ProductLayout />
                    </Product>
                </QuickViewDiv>
            </QuickView>
        </>
    )
}

export default QuickViewModal;