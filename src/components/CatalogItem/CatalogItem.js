import {
    Wrapper,
    TextWrapper,
    Image,
    Label,
    SmallText,
    Button,

} from "./CatalogItemstyle";

export function CatalogItem(props) {
    return (
        <Wrapper>
            <Image src={props.image}/>
            <TextWrapper>
                <Label>{props.name}</Label>
                <SmallText>Price: {props.price}$</SmallText>
            </TextWrapper>
            <Button onClick={() => props.function(props)}>View more</Button>
        </Wrapper>
    );
}