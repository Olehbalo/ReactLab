import { 
    ApplyButton, 
    FilterSelector, 
    FilterWrapper, 
    HorLine, 
    LabelText, 
    Wrapper 
} from "./Filterstyle";


export const Filter = () => {
    return (
        <div>
            <HorLine/>
            <Wrapper>
                <FilterWrapper>
                    <LabelText>Sort by:</LabelText>
                    <FilterSelector>
                        <option selected>Choose filter:</option>
                        <option value="Somethong">Price</option>
                        <option value="Something">Country</option>
                    </FilterSelector>
                    <LabelText>Order by:</LabelText>
                    <FilterSelector>
                        <option selected>Choose order:</option>
                        <option value="Something">Ascending</option>
                        <option value="Something">Descending</option>
                    </FilterSelector>
                    <LabelText>Price:</LabelText>
                    <FilterSelector>
                        <option selected>Choose price:</option>
                        <option value="Something">&lt;500000</option>
                        <option value="Something">500000-3000000</option>
                        <option value="Something">&gt;3000000</option>
                    </FilterSelector>
                </FilterWrapper>
                <ApplyButton>Apply</ApplyButton>
            </Wrapper>
            <HorLine style={{marginTop: '10px'}}/>
        </div>
    );
}