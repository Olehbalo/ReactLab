import { Wrapper, Image, TextWrapper } from "./Planestyle";
import Plane5 from "../../image/helicopter.jpg";
import Plane4 from "../../image/aeroplan.jpg";
import Plane2 from "../../image/planefotyou.jpg";
import { Label } from "../Home/Homestyle";

export const PlaneItems = () => {
    return (
        <div>
            <Wrapper>
                <Image src={Plane5}></Image>
                <TextWrapper>
                    <Label>Helicoptes</Label>
                </TextWrapper>
            </Wrapper>
            <Wrapper>
                <Image src={Plane4} style={{width: '600px'}}></Image>
                <TextWrapper style={{textAlign: 'right'}}>
                    <Label>Airplanes</Label>
                </TextWrapper>
            </Wrapper>
            <Wrapper>
                <Image src={Plane2}></Image>
                <TextWrapper  style={{textAlign: 'right'}}>
                    <Label>Planes</Label>
                </TextWrapper>
            </Wrapper>
        </div>
    );
}