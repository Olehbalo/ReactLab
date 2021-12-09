import { useState } from "react";
import {
    Wrapper,
    Text,
    Price, 
    Image,
    CounterWrapper,
    Counter,
    ButtonWrapper,
    Button
} from "./CartItemstyle";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/Actions";
import { CloseOutlined } from '@ant-design/icons'
import Antonov148 from "../../image/Antonov-148.jpg";
import Antonov140 from "../../image/Antonov_140.jpg";
import Cossack from "../../image/Cossack.jpg";

export function CartItem(item) {
    const [planeAmount, updateAmount] = useState(1);
    const dispatch = useDispatch();

    function decreaseAmount() {
        if (planeAmount > 1) {
            updateAmount(planeAmount - 1);
        }
    }

    function increaseAmount() {
        updateAmount(planeAmount + 1);
    }

    
    function returnImage(name) {
            if (name == "Antonov148") 
                    return Antonov148;
            if (name == "Antonov140")
                    return Antonov140;
            if (name == "Cossack")
                    return Cossack;
            }
    

    function removeItem(name) {
        dispatch(deleteItem({name}))
    }

    return (
        <>
            <Wrapper>
                <Image src={returnImage(item.name)}/>
                <Text>{item.name}</Text>
                <CounterWrapper>
                    <ButtonWrapper>
                        <Button onClick={decreaseAmount}>-</Button>
                        <Counter>{planeAmount}</Counter>
                        <Button onClick={increaseAmount}>+</Button>
                    </ButtonWrapper>
                </CounterWrapper>
                <Price>Price: {item.price * planeAmount}</Price>
                <CloseOutlined style={{alignSelf: "flex-start"}} onClick={() => removeItem(item.name)}/>
            </Wrapper>
        </>
    );
}
