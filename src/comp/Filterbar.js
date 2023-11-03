import React from "react";
import styled from "styled-components";

const Filter = styled.div`
	background-color: skyblue;
	flex-grow: 2;
	min-width: 240px;
`;
const Filterbar = ({ sort, setSort }) => {
	console.log(sort);

	return (
		<Filter>
			<div>
				<p>Sort</p>
				<label for="order">Sort By:</label>
				<select id="order" name="order">
					<option
						value="asc"
						onChange={(e) =>
							setSort([...sort, { order: e.target.value }])
						}
					>
						Low to High
					</option>
					<option
						value="desc"
						onChange={(e) =>
							setSort([...sort, { order: e.target.value }])
						}
					>
						High to Low
					</option>
				</select>
				<br />
				<input
					type="radio"
					value="price"
					name="sort"
					onChange={(e) => setSort({ attri: e.target.value })}
				/>{" "}
				Price
				<br />
				<input
					type="radio"
					value="rating"
					name="sort"
					onChange={(e) =>
						setSort([...sort, { attri: e.target.value }])
					}
				/>{" "}
				Rating
				<br />
				<input
					type="radio"
					value="customer"
					name="sort"
					onChange={(e) =>
						setSort([...sort, { attri: e.target.value }])
					}
				/>{" "}
				Number of Purchase
			</div>
			<div>
				<p>Filter</p>
				<input type="checkbox" id="filter" name="filter" value="Bike" />
				<label for="filter"> Rating Above 4</label>
				<br />

				<input type="checkbox" id="filter" name="filter" value="Bike" />
				<label for="filter"> Rating Above 3</label>
				<br />
				<br />

				<input type="checkbox" id="filter" name="filter" value="Bike" />
				<label for="filter"> men's clothing</label>
				<br />

				<input type="checkbox" id="filter" name="filter" value="Bike" />
				<label for="filter"> jewelery</label>
				<br />

				<input type="checkbox" id="filter" name="filter" value="Bike" />
				<label for="filter"> electronics</label>
				<br />

				<input type="checkbox" id="filter" name="filter" value="Bike" />
				<label for="filter"> women's clothing</label>
				<br />

				<input type="checkbox" id="filter" name="filter" value="Bike" />
				<label for="filter"> Rating Above 3</label>
				<br />
			</div>
		</Filter>
	);
};

export default Filterbar;
