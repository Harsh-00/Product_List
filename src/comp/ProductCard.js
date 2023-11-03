import React from "react";

import styled from "styled-components";

const Card = styled.div`
	position: relative;
	background-color: pink;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 30px;

	flex-basis: 260px;
	img {
		max-width: 100%;
		height: 180px;

		object-fit: fit;
	}

	.har {
		color: green;
		font-size: larger;
		font-weight: bold;
		margin: 0px;
		padding: 8px 0;
	}
	.foot {
		width: 100%;
		display: flex;
		justify-content: space-around;
		gap: 3rem;
		padding: 15px 0;
	}

	.cat {
		position: absolute;
		top: -25px;
		right: 0px;
		font-size: 20px;
		background-color: green;
		border-radius: 10px;
		padding: 5px 10px;
	}
	.title {
		padding-top: 20px;
	}
`;

const ProductCard = ({ info }) => {
	console.log(info.title);
	return (
		<Card>
			<p className="cat">{info.category}</p>
			<h2 className="title">
				{info.title.slice(0, 30) +
					(info.title.length > 30 ? "..." : "")}
			</h2>

			<p>
				{info.description.slice(0, 50) +
					(info.title.length > 30 ? "..." : "")}
			</p>
			<p>Rating:{}</p>
			<img src={info.image}></img>
			<div className="foot">
				<p className="har">${info.price}</p>
				<button className="btn">Buy Now</button>
			</div>
		</Card>
	);
};

export default ProductCard;
