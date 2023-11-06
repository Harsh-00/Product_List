import React from "react";
import styled from "styled-components";

const Filter = styled.div`
	background-color: #f99417;
	display: flex;
	flex-direction: column;
	gap: 4rem;
	border-right: 4px solid black;

	padding: 1.5rem;
	padding-top: 4rem;
	width: 260px;
	min-width: 190px;

	.heading1 {
		margin: 0;
		margin-left: 3rem;
		width: 100%;
		font-size: 2rem;
		letter-spacing: 3px;
		font-weight: bold;
		margin-bottom: 15px;
	}

	.s {
		margin-right: 12px;
	}

	label {
		font-size: 20px;
	}
	input {
		margin-top: 12px;
	}
	@media (max-width: 560px) {
		position: absolute;
		opacity: 0;
	}
`;
const Filterbar = ({ sort, setSort, filter, setFilter }) => {
	console.log(sort);

	function OrderHandler(e) {
		setSort((prev) => ({
			...prev,
			order: e.target.value,
		}));
	}

	function AttriHandler(e) {
		setSort((prev) => ({
			...prev,
			attri: e.target.value,
		}));
	}

	function RatingHandler(e) {
		setFilter((prev) => ({
			...prev,
			rating: e.target.value,
		}));
	}

	function CatHandler(e) {
		console.log(filter);
		//Adding category if it is checked
		if (e.target.checked)
			setFilter((prev) => ({
				...prev,
				category: [...prev.category, e.target.value],
			}));
		// removing category if it is unchecked but present in category array
		// done by filtering category array
		else
			setFilter((prev) => ({
				...prev,
				category: prev.category.filter((ele) => ele !== e.target.value),
			}));
	}
	return (
		<Filter>
			<div>
				<p className="heading1">Sort</p>
				<label for="order" className="s">
					Sort By:
				</label>
				<select id="order" name="order" onChange={OrderHandler}>
					<option value="asc">Low to High</option>
					<option value="desc">High to Low</option>
				</select>
				<br />
				<input
					type="radio"
					value="price"
					name="sort"
					id="price"
					onChange={AttriHandler}
				/>
				<label for="price"> Price</label>
				<br />
				<input
					type="radio"
					value="rate"
					name="sort"
					id="rating"
					onChange={AttriHandler}
				/>{" "}
				<label for="rating"> Rating</label>
				<br />
				<input
					type="radio"
					value="count"
					name="sort"
					id="cust"
					onChange={AttriHandler}
				/>{" "}
				<label for="cust"> Number of Purchase</label>
			</div>
			<div>
				<p className="heading1">Filter</p>
				<input
					type="radio"
					id="filter1"
					name="filter"
					value="4"
					onChange={RatingHandler}
				/>
				<label for="filter1"> Rating Above 4</label>
				<br />

				<input
					type="radio"
					id="filter2"
					name="filter"
					value="3"
					onChange={RatingHandler}
				/>
				<label for="filter2"> Rating Above 3</label>
				<br />
				<input
					type="radio"
					id="filtera"
					name="filter"
					value="2"
					onChange={RatingHandler}
				/>
				<label for="filtera"> Rating Above 2</label>

				<br />
				<input
					type="radio"
					id="filterc"
					name="filter"
					value="0"
					onChange={RatingHandler}
				/>
				<label for="filterc"> All Products</label>
				<br />
				<br />
				<br />

				<input
					type="checkbox"
					id="filter3"
					name="filter3"
					value="men's clothing"
					onChange={CatHandler}
				/>
				<label for="filter3"> Men's Clothing</label>
				<br />

				<input
					type="checkbox"
					id="filter4"
					name="filter4"
					value="jewelery"
					onChange={CatHandler}
				/>
				<label for="filter4"> Jewelery</label>
				<br />

				<input
					type="checkbox"
					id="filter5"
					name="filter5"
					value="electronics"
					onChange={CatHandler}
				/>
				<label for="filter5"> Electronic</label>
				<br />

				<input
					type="checkbox"
					id="filter6"
					name="filter6"
					value="women's clothing"
					onChange={CatHandler}
				/>
				<label for="filter6"> Women's Clothing</label>
				<br />

				<br />
			</div>
		</Filter>
	);
};

export default Filterbar;
