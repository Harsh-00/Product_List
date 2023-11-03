import Filterbar from "./comp/Filterbar";
import Navbar from "./comp/Navbar";
import List from "./comp/List";
import styled from "styled-components";
import data from "./ApiData";
import { useEffect, useState } from "react";

const Body = styled.div`
	height: 100vh;
	width: 100vw;
`;
const Container = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
	min-height: 100vh;
`;
function App() {
	const [sort, setSort] = useState({ order: "asc", attri: "" });
	const [Data, setData] = useState(data);
	const [filter, setFilter] = useState({ rating: "0", category: [] });
	console.log(filter);
	// console.log(sort)

	useEffect(() => {
		// if (!sort.attri) return;

		//FOR Sort
		const newData = [...data].sort((a, b) => {
			//Conditions due to attributes present at different location inside Data file
			if (sort.attri == "price")
				return sort.order === "asc"
					? a[sort.attri] - b[sort.attri]
					: b[sort.attri] - a[sort.attri];
			else if (sort.attri !== null)
				return sort.order === "asc"
					? a.rating[sort.attri] - b.rating[sort.attri]
					: b.rating[sort.attri] - a.rating[sort.attri];
		});

		//For Filter (taking Sorted data if sorting happened)
		const Filtered = [...newData].filter((ele) => {
			var a = ele.rating.rate > Number(filter.rating);
			var b = true;
			if (filter.category.length != 0) {
				b = filter.category.includes(ele.category);
			}
			return a && b;
		});

		setData(Filtered);
	}, [sort, filter]);

	return (
		<Body
			style={{
				height: "auto",
				position: "relative",
				width: "100%",
			}}
		>
			<Navbar />
			<Container>
				<Filterbar
					sort={sort}
					setSort={setSort}
					filter={filter}
					setFilter={setFilter}
				/>
				<List Data={Data} setData={setData} />
			</Container>
		</Body>
	);
}

export default App;
