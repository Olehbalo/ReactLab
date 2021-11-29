import { FooterWrapper, HorizontalLine, Links, StyledText, WrapperLogo } from "./Footerstyle";
import {InstagramOutlined, YoutubeOutlined, FacebookOutlined} from '@ant-design/icons'
import Logo from "../../image/logo.png"

export const Footer = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <HorizontalLine/>
            <FooterWrapper>
                <WrapperLogo src={Logo} alt="logo"></WrapperLogo>
                <Links>
                    <InstagramOutlined style={{margin: '20px'}}/>
                    <YoutubeOutlined style={{margin: '20px'}}/>
                    <FacebookOutlined style={{margin: '20px'}}/>
                </Links>
            </FooterWrapper>
            <HorizontalLine style={{marginTop: 'px', width: '90vw'}}/>
            <StyledText>2021 IoT @ Copyright all rights reserved</StyledText>
        </div>
    );
}