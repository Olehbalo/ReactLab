import { StyleHeader, Wrapper, Nav, NavItem, Logo, Links, Search, NavWrapper  } from "./Headerstyle";
import {
    InstagramOutlined,
    YoutubeOutlined,
    FacebookOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import SearchIcon from "../../image/search.png";
export const Header = (props) => {
    return (
        <StyleHeader>
        <Wrapper>
            <Logo>Plane travel</Logo>
            <Nav>
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                <Link to="/catalog plane" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog plane</NavItem></Link>
                <Link to="/communication" style={{textDecoration: 'none', color: 'black'}}><NavItem>Сommunication</NavItem></Link>
            </Nav>
            <NavWrapper>
                {check(props.isHomePage)}
            </NavWrapper>
        </Wrapper>
    </StyleHeader>
    );
};
const check = (isHomePage) => {
    if (isHomePage) {
        return <Links>
            <InstagramOutlined style={{margin: '10px'}}/>
            <YoutubeOutlined style={{margin: '10px'}}/>
            <FacebookOutlined style={{margin: '10px'}}/>
        </Links>
    }
    return <div style={{display: 'flex', alignItems: 'center'}}>
        <Search id={"search_button"}/>
        <img src={SearchIcon} alt={"search"} style={{width: '20px', height: '20px', padding:'5px'}}/>
    </div>
}
