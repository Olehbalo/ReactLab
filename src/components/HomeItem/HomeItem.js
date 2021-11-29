import {
    Image,
    Text, 
    Wrapper
} from "./HomeItemstyle";

export const HomeItem = ({name, country}) => {
    return (
        <Wrapper>
            <Image src={country}/>
            <Text>{name}</Text>
        </Wrapper>
    );
}