import { HeroWrapper, Image, ImageText, ItemLabel, ItemList, Label, TextWrapper, Button, InformWrapper, Inform, InformLabel, AllInform } from "./Homestyle";
import Plane1 from "../../image/Antonov_140.jpg";
import Plane3 from "../../image/Antonov-148.jpg";
import Plane4 from "../../image/Cossack.jpg";
import Main from "../../image/header.jpg";
import { Item } from "../Item/Item";
import { PlaneItems } from "../Planes/PlaneItems";

export const Home = () => {
    return (
        <div>
            <HeroWrapper>
                <TextWrapper>
                    <Label>Plane of your dreams </Label>
                    <ImageText>Your plane for adventure. <br/> Fly with us to different countries</ImageText>
                </TextWrapper>
                <Image src={Main} alt="main foto"></Image>
            </HeroWrapper>

            <ItemLabel>Planes for you</ItemLabel>
            <ItemList>
                <Item model={Plane1} name={"Antonov-128"}/>
                <Item model={Plane3} name={"Antonov-140"}/>
                <Item model={Plane4} name={"Cossack"}/>
            </ItemList>
            
            <Button>View more</Button>

            <InformWrapper>
                <ItemLabel>Services provided by our company</ItemLabel>
                <AllInform>
                    <Inform>
                        <InformLabel>Skydiving</InformLabel>
                    </Inform>
                    <Inform>
                        <InformLabel>Кound the world journey</InformLabel>
                    </Inform>
                    <Inform>
                        <InformLabel>Holiday tours</InformLabel>
                    </Inform>
                </AllInform>
            </InformWrapper>

            <ItemLabel style={{marginTop:'200px'}}>Your trip</ItemLabel>
            <PlaneItems/>
        </div>
    );
}