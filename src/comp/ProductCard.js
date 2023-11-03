import React from "react";

import styled from "styled-components";

const Card = styled.div`
	position: relative;
	background-color: #f5f5f5;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 30px;
	padding: 0px 4px;
	width: 90%;
	margin: auto;

	transition: all;
	transition-timing-function: ease-in-out;
	transition-duration: 250ms;

	&:hover {
		box-shadow: 0 0 10px 8px #f99417;
		transform: scale(1.05);
	}

	img {
		max-width: 100%;
		height: 180px;

		object-fit: fit;
	}

	.har {
		color: #4fa095;
		font-size: 1.5rem;
		font-weight: bold;
		margin: 0px;
		padding: 8px 0;
	}
	.foot {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 3.5rem;
		padding: 15px 5px;
	}

	.cat {
		position: absolute;
		top: -25px;
		right: 0px;
		font-size: 16px;
		background-color: #19a7ce;
		border-radius: 10px;
		padding: 5px 10px;
	}
	.title {
		padding-top: 20px;
		text-align: center;
		height: 1.2rem;
		padding-bottom: 8px;
	}
	.desc {
		padding: 0 5px;
		text-align: center;
		height: 3.5rem;
		font-size: 18px;
		opacity: 70%;
	}

	.rating-cont {
		text-align: center;
	}
	.rating {
		font-size: 20px;
		font-weight: bold;
	}

	.buy {
		background-color: #19a7ce;
		border-radius: 10px;
		padding: 5px 10px;
		cursor: pointer;
		transition: all;
		transition-timing-function: ease-in-out;
		transition-duration: 150ms;
		&:hover {
			transform: scale(1.2);
		}
	}
	@media (min-width: 768px) and (max-width: 1024px) {
		.desc {
			height: 5rem;
		}
		.foot {
			gap: 0;
		}
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
				<div className="buy">Buy Now</div>
			</div>
		</Card>
	);
};

export default ProductCard;
