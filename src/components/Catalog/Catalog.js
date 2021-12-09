import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Wrapper } from "./Catalogstyle";
import Antonov148 from "../../image/Antonov-148.jpg";
import Antonov140 from "../../image/Antonov_140.jpg";
import Cossack from "../../image/Cossack.jpg";
import {  useEffect, useState  } from "react";
import { Filter } from "../Filter/Filter";
import axios from 'axios';
import BarWave from 'react-cssfx-loading/lib/BarWave';
import { Header } from "../Header/Header";
import { ItemPage } from "../Items/ItemPage";

export const Catalog = () => {
    const [items, update] = useState(null);
    const [view, setView] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8080/plane`).then((response) => {
                update(response.data)});
    }, []);

    function updateItems(name, order, price, input) {
        console.log(name, order, price)
        axios.get(`http://localhost:8080/plane/params`, {
            params:
                {
                    name: name,
                    order: order,
                    price: price
                }
        }).then((response) => {
            console.log(response.data)
            filterInput(response.data, input)
        });
    }

    function filterInput(array, input) {
        update(array.filter(item  => item.name.search(input.value) !== -1));
    }

    function toggleView(props) {
        setView(props);
    }

    function returnItems(items) {
        function createImage(name) {
            if (name == "Antonov148") 
                return Antonov148;
            if (name == "Antonov140")
                return Antonov140;
            if (name == "Cossack")
                return Cossack;
        }

        if (items)
            return <>
                <Filter function={updateItems}/>
                <Wrapper>
                    {items.map(item => (
                        <CatalogItem key={item.name} image={createImage(item.name)} name={item.name}  price={item.price} 
                                    function={toggleView}/>))}
                </Wrapper>
            </>
        return <>
            <Filter function={updateItems}/>
            <Wrapper style={{padding: "200px"}}>
                <BarWave color="#000" width="100px" height="100px" duration="3s"/>
            </Wrapper>
        </>
    }

    if (view == null)
        return (returnItems(items))
    return (
        <>
            <Header/>
            <ItemPage item={view}/>
        </>
    )
}