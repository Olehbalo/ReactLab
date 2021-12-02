import { useState } from "react";
import { Logo, Nav, Search, NavItem, NavWrapper, Wrapper } from "../Header/Headerstyle";
import { 
    ApplyButton, 
    FilterSelector, 
    FilterWrapper, 
    HorLine, 
    LabelText, 
    OuterWrapper
} from "./Filterstyle";
import SearchIcon from "../../image/search.png";
import { Link } from "react-router-dom";

export const Filter = (props) => {
    const [name, changeName] = useState("null");
    const [order, changeOrder] = useState("0");
    const [price, changePrice] = useState("0");

    function handleName(nameSelector) {
        changeName(nameSelector.target.value);
    }

    function handleOrder(orderSelector) {
        changeOrder(orderSelector.target.value);
    }

    function handlePrice(priceSelector) {
        changePrice(priceSelector.target.value);
    }

    function updateItem() {
        const input = document.getElementById("search_input");
        props.function(name, order, price, input);
    }
    return (
        <>
            <Wrapper>
                <Logo>Plane</Logo>
                <Nav>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                    <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog plane</NavItem></Link>
                    <Link to="/communication" style={{textDecoration: 'none', color: 'black'}}><NavItem>Communication</NavItem></Link>
                </Nav>
                <NavWrapper>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Search id={"search_input"} placeholder={""}/>
                        <img src={SearchIcon} alt={"search"} style={{width: '20px', height: '20px', padding:'5px'}}/>
                    </div>
                </NavWrapper>
            </Wrapper>
            <HorLine/>
            <OuterWrapper>
                <FilterWrapper>
                    <LabelText>Sort by:</LabelText>
                    <FilterSelector id="name" onChange={handleName}>
                        <option value="null">Choose filter:</option>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </FilterSelector>
                    <LabelText>Order by:</LabelText>
                    <FilterSelector id="order" onChange={handleOrder}>
                        <option value="null">Choose order:</option>
                        <option value="1">Ascending</option>
                        <option value="2">Descending</option>
                    </FilterSelector>
                    <LabelText>Price:</LabelText>
                    <FilterSelector id="price" onChange={handlePrice}>
                        <option value="null">Choose price:</option>
                        <option value="1">&lt;300000</option>
                        <option value="2">&gt;150000</option>
                    </FilterSelector>
                    </FilterWrapper>
                <ApplyButton onClick={updateItem}>Apply</ApplyButton>
            </OuterWrapper>
            <HorLine style={{marginTop: '10px'}}/>
        </>
    );
}