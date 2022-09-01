import { useSelector,useDispatch} from "react-redux";
import {OuterDiv,TextArea,IsOrder,Input,Label} from '../../styles/cart/instructionStyle'

export const Instruction = () => {
    const {inOrder} = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    return (
        <OuterDiv>
            <TextArea placeholder={"Special instruction for Seller"}/>
            <IsOrder>
                <Input type="checkbox" value = {inOrder} />
                <Label>- For $2,00 please wrap the products in this order.</Label>
            </IsOrder>
        </OuterDiv>
    )
}

export default Instruction;