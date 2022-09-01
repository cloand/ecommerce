import { Link } from "react-router-dom";
import { getBlogs } from "../../constants/url";
import { OuterDiv,Title,Owner,Name,CreatedAt,Content,Button,Label,Icon } from "../../styles/blogs/disc";
import {DivSeperation, OuterLayout} from '../../styles/constantLayout'

const Disc = ({blog}) => {
    
    return (
        <>
        <OuterLayout>
            <OuterDiv>
                <Title>
                    {blog?.title}
                </Title>
                <Owner>
                    <Name>
                        {blog?.name}
                    </Name>
                    <CreatedAt>
                        {blog?.date}
                    </CreatedAt>
                </Owner>
                <DivSeperation width={.1}/>
                <Content>
                    {blog?.content}
                </Content>
                <DivSeperation width={.1}/>
                <Link to={`${getBlogs}`} style={{textDecoration:"none"}}>
                    <Button>
                        <Label>
                            Explore More
                        </Label>
                        <Icon className="material-symbols-outlined">
                            arrow_right_alt
                        </Icon>
                    </Button>
                </Link>
            </OuterDiv>
            </OuterLayout>
        </>
    );
}

export default Disc;
