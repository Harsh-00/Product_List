import React from "react";
import styled from "styled-components";

const Filter = styled.div`
	background-color: skyblue;
	flex-grow: 2;
	min-width: 240px;
`;
const Filterbar = () => {
	return (
		<Filter>
			<div>
				<p>Sort</p>
				<label for="order">Sort By:</label>
				<select id="order" name="order">
					<option>High to Low</option>
					<option>Low to High</option>
				</select>
				<br />
				<input type="radio" value="price" name="sort" /> Price
				<br />
				<input type="radio" value="rating" name="sort" /> Rating
				<br />
				<input type="radio" value="customer" name="sort" /> Number of
				Purchase
			</div>
			<div>
				<p>Filter</p>
				<input type="checkbox" id="filter" name="filter" value="Bike" />
				<label for="filter"> Rating Above 4</label>

				<input type="checkbox" id="filter" name="filter" value="Bike" />
				<label for="filter"> Rating Above 3</label>

				<label for="cat">Category:</label>
				<select id="cat" name="cat">
					<option>men's clothing</option>
					<option>jewelery</option>
					<option>electronics</option>
					<option>women's clothing</option>
				</select>
			</div>
		</Filter>
	);
};

export default Filterbar;
