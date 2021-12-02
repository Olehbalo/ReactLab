import { Image, Wrapper, Text } from "./Itemstyle";

export const Item = (props) => {
    return (
        <Wrapper>
            <Image src={props.model}></Image>
            <Text>{props.name}</Text>
            <Text>{props.country}</Text>
            <Text>{props.price}</Text>
        </Wrapper>
    );
}
