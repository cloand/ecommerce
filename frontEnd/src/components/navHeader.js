import {OuterDiv,Section,Icon,Label,Button,MainLabel} from '../styles/product/headerStyle'
import { useSelector } from "react-redux";

const Header = ({type}) => {
    const {item} = useSelector((store) => store.selectedProduct)
    return (
        <>
            <OuterDiv>
                <Section>
                    <Icon className = "material-symbols-outlined">
                        home
                    </Icon>
                    <Icon className = "material-symbols-outlined">
                        navigate_next
                    </Icon>
                    <Label>
                        3 Columns Mode
                    </Label>
                    <Icon className = "material-symbols-outlined">
                        navigate_next
                    </Icon>
                    <MainLabel>
                        {type ? type : item.name}
                    </MainLabel>
                </Section>
                <Section>
                    <Button>
                        <Icon className="material-symbols-outlined">
                            arrow_back
                        </Icon>
                        <Label>
                            Prev
                        </Label>
                    </Button>
                    <Button>
                        <Label>
                            Next
                        </Label>
                        <Icon className="material-symbols-outlined">
                            arrow_right_alt
                        </Icon>
                    </Button>
                </Section>
            </OuterDiv>
        </>
    );
}

export default Header;