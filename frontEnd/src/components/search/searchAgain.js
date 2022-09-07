import {OuterDiv,TopNav,Icon,Arrow,Caption,Search,InputArea,SearchIcon,Disc} from '../../styles/search/searchAgain'

const SearchAgain = () => {
    return(
        <OuterDiv>
            <TopNav>
                <Icon className="material-symbols-outlined">
                    home
                </Icon>
                <Arrow className="material-symbols-outlined">
                    chevron_right
                </Arrow>
                <Caption>
                    Search: results found...
                </Caption>
            </TopNav>
            <Search>
                <InputArea />
                <SearchIcon className="material-symbols-outlined">
                    search
                </SearchIcon>
            </Search>
            <Disc>
                Your search for "..." revealed the following:
            </Disc>
        </OuterDiv>
    )
}

export default SearchAgain;