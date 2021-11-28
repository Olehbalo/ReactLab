import { Wrapper, Image, TextWrapper } from "./Planestyle";
import Plane5 from "../../image/Plane5.jpg";
import Plane4 from "../../image/planeex.jpg";
import Plane2 from "../../image/planefotyou.jpg";
import { Label } from "../Home/Homestyle";
import { Button } from "../Home/Homestyle";

export const PlaneItems = () => {
    return (
        <div>
            <Wrapper>
                <Image src={Plane5}></Image>
                <TextWrapper>
                    <Label>Extreme travel in Ukraine</Label>
                </TextWrapper>
            </Wrapper>
            <Wrapper>
                <Image src={Plane4} style={{width: '700px'}}></Image>
                <TextWrapper>
                    <Label>Еravel to exotic countries with comfort</Label>
                </TextWrapper>
            </Wrapper>
            <Wrapper>
                <Image src={Plane2}></Image>
                <TextWrapper>
                    <Label>Business travel</Label>
                    
                </TextWrapper>
            </Wrapper>
            <Button>More information</Button>
        </div>
    );
}