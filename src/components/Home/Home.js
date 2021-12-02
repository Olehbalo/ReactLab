import { 
    HeroWrapper, 
    Image,
    ImageText, 
    ItemLabel, 
    ItemList, 
    Label, 
    TextWrapper, 
    Button, 
    InformWrapper, 
    Inform, 
    InformLabel, 
    AllInform } from "./Homestyle";
import Plane1 from "../../image/Antonov_140.jpg";
import Plane3 from "../../image/Antonov-148.jpg";
import Plane4 from "../../image/Cossack.jpg";
import Main from "../../image/header.jpg";
import { useState } from "react";
import { HomeItem } from "../HomeItem/HomeItem";
import { PlaneItems } from "../Planes/PlaneItems";

export const Home = () => {
    const [viewMorePlanes, toggle] = useState(false);
    const [planes, showAllPlanes] = useState([
        {
            name: "Antonov_140",
            image: Plane1,

        },
        {
            name: "Antonov-148",
            image: Plane3,
        },
        {
            name: "Cossack",
            image: Plane4,
        }
    ]);

    function changePlanes() {
        if (!viewMorePlanes) {
            showAllPlanes(planes.concat(planes));
        } else {
            showAllPlanes(planes.slice(0, 3));
        }
    }

    function toggleView() {
        toggle(!viewMorePlanes);
        changePlanes();
    }
    return (
        <div>
            <HeroWrapper>
                <TextWrapper>
                    <Label>Planes of your dream </Label>
                    <ImageText>Your plane for adventure. <br/> Fly with us to different parts of the world</ImageText>
                    </TextWrapper>
                <Image src={Main} alt="plane image"></Image>
            </HeroWrapper>

            <ItemLabel>Propositions for you</ItemLabel>
            <ItemList>
                {planes.map(plane => (<HomeItem key={plane.name.toString()} name = {plane.name} image={plane.image}/>))}
            </ItemList>
            
            <Button onClick={toggleView}>View more</Button>

            <InformWrapper>
                <ItemLabel>Services provided by our company</ItemLabel>
                <AllInform>
                    <Inform>
                        <InformLabel>Sale of aircraft</InformLabel>
                    </Inform>
                    <Inform>
                        <InformLabel>Aircraft rental</InformLabel>
                    </Inform>
                </AllInform>
            </InformWrapper>

            <ItemLabel style={{marginTop:'200px'}}>Types of aircraft sold by us</ItemLabel>
            <PlaneItems/>
        </div>
    );
}