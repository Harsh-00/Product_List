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
	flex-grow: 1;

	.footer {
		position: absolute;
		bottom: 2.5rem;
		left: 38%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.nbtn {
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

	.pbtn {
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

	.hid {
		opacity: 0;
		z-index: -1;
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

	@media (min-width: 840px) and (max-width: 1180px) {
		grid-template-columns: repeat(2, 1fr);
		padding: 2rem 1rem;
		padding-bottom: 10rem;
	}

	@media (max-width: 840px) {
		grid-template-columns: repeat(1, 1fr);
		padding: 2rem 1rem;
		padding-bottom: 10rem;
		.footer {
			left: 16%;
		}
	}
	@media (max-width: 440px) {
		.footer {
			left: 40%;
			flex-direction: column;
			gap: 0;
		}
		padding-bottom: 15rem;
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
				<div
					className={currPage > 0 ? "pbtn" : "pbtn hid"}
					onClick={PrevHandler}
				>
					Previous
				</div>

				<p className="page">
					Page: {currPage + 1}/{pageCount + 1}
				</p>

				<div
					className={currPage < pageCount ? "nbtn" : "nbtn hid"}
					onClick={NextHandler}
				>
					Next
				</div>
			</div>
		</Items>
	);
};

export default List;
