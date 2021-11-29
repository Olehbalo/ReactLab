import {
    Wrapper,
    TextWrapper,
    Image,
    Label,
    Text,
    Button,

} from "./CatalogItemstyle";

export const CatalogItem = (props) => {
    return (
        <Wrapper>
            <Image src={props.image}></Image>
            <TextWrapper>
                <Label>{props.name}</Label>
                <Text>{props.country}</Text>
                <Text>Price: {props.price}$</Text>
            </TextWrapper>
            <Button>View more</Button>
        </Wrapper>
    );
}