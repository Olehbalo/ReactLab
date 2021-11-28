import { Image, Wrapper, Text } from "./Itemstyle";

export const Item = (props) => {
    return (
        <Wrapper>
            <Image src={props.model}></Image>
            <Text>{props.name}</Text>
        </Wrapper>
    );
}
