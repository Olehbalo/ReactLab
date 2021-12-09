import {
    Wrapper,
    Button,
    ItemsWrapper,
    Label,
    ButtonWrapper} from "./Cartstyle";
import { useSelector } from 'react-redux';
import { useHistory  } from "react-router";
import { CartItem } from "../CartItem/CartItem";


export function Cart() {
    let history = useHistory();
    const items = useSelector((state) => state.items);

    return (
        <Wrapper>
            <Label>Shopping Cart</Label>
            <ItemsWrapper>
                {items.map(item => (
                    <CartItem key={item.name} name={item.name} price={item.price} 
                        planeAmount={item.planeAmount}/>))}
            </ItemsWrapper>
            <ButtonWrapper>
                <Button onClick={history.goBack}>Back to Catalog</Button>
                <Button onClick={() => history.push("/checkout")}>Continue</Button>
            </ButtonWrapper>
        </Wrapper>
    );
    }