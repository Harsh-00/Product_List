import React, { useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Items = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 2rem 3rem;
	padding-bottom: 12rem;
	gap: 2rem;
	row-gap: 4rem;
	background-color: #7c81ad;
	${"" /* flex-grow: 1; */}

	.footer {
		position: absolute;
		bottom: 2.5rem;
		left: 38%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.fbtn {
		background-color: orange;
		padding: 0.3rem 0.7rem;
		border-radius: 15px;
		cursor: pointer;
		font-size: 1.3rem;

		transition: all;
		transition-timing-function: ease-in-out;
		transition-duration: 150ms;

		&:hover {
			box-shadow: 0 0 5px 5px #f99417;
			transform: scale(1.1);
		}
	}

	.page {
		font-size: 1.4rem;
		color: white;
		font-weight: bold;
	}
	@media (min-width: 800px) and (max-width: 1024px) {
		padding: 2rem 1rem;
		padding-bottom: 10rem;
	}

	@media (min-width: 660px) and (max-width: 850px) {
		grid-template-columns: repeat(2, 1fr);
		padding: 2rem 1rem;
		padding-bottom: 10rem;
		.footer {
			left: 30%;
		}
	}

	@media (max-width: 660px) {
		grid-template-columns: repeat(1, 1fr);
		padding: 2rem 1rem;
		padding-bottom: 10rem;
		.footer {
			left: 16%;
		}
	}
	@media (max-width: 440px) {
		.footer {
			left: 16%;
		}
	}
`;
const List = ({ Data, setData }) => {
	const perPage = 6;
	const [currPage, setCurrPage] = useState(0);

	const offset = currPage * perPage;
	const currPageData = Data.slice(offset, offset + perPage);
	const pageCount = Math.ceil(Data.length / perPage) - 1;

	if (currPage > pageCount) setCurrPage(0);
	function NextHandler() {
		setCurrPage(currPage + 1);
	}

	function PrevHandler() {
		setCurrPage(currPage - 1);
	}

	return (
		<Items>
			{currPageData.map((item) => (
				<ProductCard info={item} key={item.id} />
			))}
			<div className="footer">
				{currPage > 0 && (
					<div className="fbtn" onClick={PrevHandler}>
						Previous
					</div>
				)}

				<p className="page">
					Page: {currPage + 1}/{pageCount + 1}
				</p>

				{currPage < pageCount && (
					<div className="fbtn" onClick={NextHandler}>
						Next
					</div>
				)}
			</div>
		</Items>
	);
};

export default List;
