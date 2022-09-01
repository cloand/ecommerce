import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OuterLayout, Seperation } from "../styles/constantLayout";
import {OuterDiv,ShippingReturn,Icon,Disc,Heading,HeadDisc} from '../styles/shippingSupportStyle';

const ShippingSupport = () => {

    return(
        <OuterLayout>
           <OuterDiv>
                <ShippingReturn>
                    <Icon>
                    <FontAwesomeIcon icon="fa-solid fa-truck-fast" />
                    </Icon>
                    <Disc>
                        <Heading>
                            Free Shipping and Return
                        </Heading>
                        <HeadDisc>
                            Free shipping on over $99
                        </HeadDisc>
                    </Disc>
                </ShippingReturn>
                <Seperation />
                <ShippingReturn>
                    <Icon>
                    <FontAwesomeIcon icon="fa-solid fa-phone" />
                    </Icon>
                    <Disc>
                    <Heading>
                            Customer Support 24/7
                        </Heading>
                        <HeadDisc>
                            Instant access to perfect support
                        </HeadDisc>
                    </Disc>
                </ShippingReturn>
                <Seperation />
                <ShippingReturn>
                    <Icon>
                    <FontAwesomeIcon icon="fa-solid fa-wallet" />
                    </Icon>
                    <Disc>
                    <Heading>
                            100% Secure Wallet
                        </Heading>
                        <HeadDisc>
                            We ensure secure payment
                        </HeadDisc>
                    </Disc>
                </ShippingReturn>
            </OuterDiv>
        </OuterLayout>
    );

}


export default ShippingSupport;