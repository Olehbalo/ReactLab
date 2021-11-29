import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Wrapper } from "./Catalogstyle";
import GoldCreekPond from "../../image/logo.png";
import AppenzellDistrict from "../../image/Plane5.jpg";
import Uttarakhand from "../../image/planeex.jpg";
import Algeria from "../../image/planefotyou.jpg";


let items = [
    {
        name: "Gold Creek Pond",
        price: 1200,
        country: "USA",
        image: GoldCreekPond
    },
    {
        name: "Appenzell District",
        price: 700,
        country: "Switzerland",
        image: AppenzellDistrict
    },
    {
        name: "Uttarakhand",
        price: 890,
        country: "India",
        image: Uttarakhand
    },
    {
        name: "Algeria",
        price: 2500,
        country: "Algeria",
        image: Algeria
    },
]

export const Catalog = () => {
    return (
        <Wrapper>
            {
                items.map(item => (
                    <CatalogItem name={item.name} country={item.country} price={item.price}  image={item.image}/>))
            }
        </Wrapper>
    );
}