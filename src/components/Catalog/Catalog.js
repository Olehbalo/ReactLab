import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Wrapper } from "./Catalogstyle";
import Antonov148 from "../../image/Antonov-148.jpg";
import Antonov140 from "../../image/Antonov-148.jpg";
import Cossack from "../../image/Cossack.jpg";



let items = [
    {
        name: "Antonov-148",
        price: 1200000,
        country: "Ukraine",
        image: Antonov148
    },
    {
        name: "Cossack",
        price: 7005000,
        country: "Ukraine",
        image: Antonov140
    },
    {
        name: "Uttarakhand",
        price: 890,
        country: "Ukraine",
        image: Cossack
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