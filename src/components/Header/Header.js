import { StyleHeader, Wrapper, Nav, NavItem, Logo, Links } from "./Headerstyle";
import {
    InstagramOutlined,
    YoutubeOutlined,
    FacebookOutlined,
} from "@ant-design/icons";

export const Header = () => {
    return (
        <StyleHeader>
        <Wrapper>
            <Logo>Plane travel</Logo>
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>Catalog plane</NavItem>
                <NavItem>Travel</NavItem>
            </Nav>
            <Links>
                <InstagramOutlined style={{ margin: " 0 10px" }} />
                <YoutubeOutlined style={{ margin: "0 10px" }} />
                <FacebookOutlined style={{ margin: "0 10px" }} />
            </Links>
        </Wrapper>
    </StyleHeader>
    );
};