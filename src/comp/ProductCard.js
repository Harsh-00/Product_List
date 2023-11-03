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
	padding: 0px 10px;
	width: 90%;
	margin: auto;

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
		font-size: 15px;
		background-color: green;
		border-radius: 10px;
		padding: 5px 10px;
	}
	.title {
		padding-top: 20px;
		text-align: center;
	}
	.desc {
		padding: 0 15px;
		text-align: center;
	}
	.rating-cont {
		text-align: center;
	}
	.rating {
		font-size: 20px;
		font-weight: bold;
	}
`;

const ProductCard = ({ info }) => {
	console.log(info.title);
	return (
		<Card>
			<p className="cat">{info.category}</p>
			<h2 className="title">
				{info.title.slice(0, 20) +
					(info.title.length > 20 ? "..." : "")}
			</h2>

			<p className="desc">
				{info.description.slice(0, 60) +
					(info.description.length > 60 ? "...." : "")}
			</p>
			<p className="rating-cont">
				<div className="rating">
					Rating:{" " + info.rating.rate}/5 <br />
				</div>
				(Based on {info.rating.count} customers)
			</p>
			<img src={info.image}></img>
			<div className="foot">
				<p className="har">${info.price}</p>
				<button className="btn">Buy Now</button>
			</div>
		</Card>
	);
};

export default ProductCard;
