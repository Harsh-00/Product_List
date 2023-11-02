import React from "react";

import styled from "styled-components";

const Card = styled.div`
	background-color: pink;
	max-width: 120px;
`;
const ProductCard = ({ info }) => {
	console.log(info.title);
	return <Card>ProductCard</Card>;
};

export default ProductCard;
