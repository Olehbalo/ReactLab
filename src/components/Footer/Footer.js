import { FooterWrapper, HorizontalLine, Links, StyledText, WrapperLogo, Text } from "./Footerstyle";
import {InstagramOutlined, YoutubeOutlined, FacebookOutlined} from '@ant-design/icons'
import Logo from "../../image/logo.png"

export const Footer = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <HorizontalLine/>
            <FooterWrapper>
                <WrapperLogo src={Logo} alt="logo"></WrapperLogo>
                <Text>Email: PlaneUkraine@gmail.com</Text>
                <Text>Phone number: +380505973595
                                    +380990607121
                </Text>
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