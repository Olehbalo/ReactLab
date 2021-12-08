import {
    Wrapper,
    Button,
    ItemsWrapper,
    Label,
    ButtonWrapper} from "./Cartstyle";
import { useSelector } from 'react-redux';
import { CartItem } from "../CartItem/CartItem";


export function Cart() {
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
                <Button>Back to Catalog</Button>
                <Button>Continue</Button>
            </ButtonWrapper>
        </Wrapper>
    );
}