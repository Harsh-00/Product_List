import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import data from "../ApiData";

const Items = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem 2rem;
	gap: 1rem;
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
