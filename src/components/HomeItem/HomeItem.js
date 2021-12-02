import {
    Image,
    Text, 
    Wrapper
} from "./HomeItemstyle";

export const HomeItem = ({name, image}) => {
    return (
        <Wrapper>
            <Image src={image}/>
            <Text>{name}</Text>
        </Wrapper>
    );
}