import { Link } from 'react-router-dom';
import { getProductsUrl } from '../../constants/url';
import {OuterDiv,Disc,CartIcon,EmptyDisc,Button,Label,CartDisc} from '../../styles/cart/emptyCartStyle'

const EmptyCart = () => {
    return (
            <>
                <OuterDiv>
                   <Disc>
                        <CartIcon className="material-symbols-outlined">
                            production_quantity_limits
                        </CartIcon>
                        <EmptyDisc>
                            Your Cart is Currently Empty.
                        </EmptyDisc>
                        <CartDisc>
                            Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.
                        </CartDisc>
                        <Link to={`${getProductsUrl}`} style = {{textDecoration:"none"}}>
                            <Button>
                                <Label>
                                    Continue Shopping
                                </Label>
                            </Button>
                        </Link>
                   </Disc>
                </OuterDiv>
            </>
    );
}

export default EmptyCart