import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import data from "../ApiData";

const Items = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 2rem 4rem;
	gap: 2rem;
	background-color: yellow;
	flex-grow: 8;
`;
const List = () => {
	return (
		<Items>
			{data.map((item) => (
				<ProductCard info={item} key={item.id} />
			))}
		</Items>
	);
};

export default List;
