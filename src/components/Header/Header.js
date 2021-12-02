import { StyleHeader, Wrapper, Nav, NavItem, Logo, Links, Search, NavWrapper  } from "./Headerstyle";
import {
    InstagramOutlined,
    YoutubeOutlined,
    FacebookOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <Wrapper>
            <Logo>Plane travel</Logo>
            <Nav>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                <Link to="/catalog plane" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog plane</NavItem></Link>
                <Link to="/communication" style={{textDecoration: 'none', color: 'black'}}><NavItem>Сommunication</NavItem></Link>
            </Nav>
            <NavWrapper>
            <Links>
            <InstagramOutlined style={{margin: '10px'}}/>
            <YoutubeOutlined style={{margin: '10px'}}/>
            <FacebookOutlined style={{margin: '10px'}}/>
        </Links>
        </NavWrapper>
        </Wrapper>
    );
};