import React, { useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import data from "../ApiData";

const Items = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 2rem 4rem;
	padding-bottom: 8rem;
	gap: 2rem;
	background-color: yellow;
	flex-grow: 6;

	.footer {
		position: absolute;
		bottom: 2rem;
		left: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.fbtn {
		background-color: orange;
		padding: 0.3rem 0.7rem;
		border-radius: 15px;
	}
`;
const List = () => {
	const perPage = 6;

	const [currPage, setCurrPage] = useState(0);

	const offset = currPage * perPage;

	const currPageData = data.slice(offset, offset + perPage);

	const pageCount = Math.ceil(data.length / perPage) - 1;

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
				{currPage >= 0 && (
					<div className="fbtn" onClick={PrevHandler}>
						Previous
					</div>
				)}

				<p>
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
