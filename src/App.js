import Filterbar from "./comp/Filterbar";
import Navbar from "./comp/Navbar";
import List from "./comp/List";
import styled from "styled-components";
import data from "./ApiData";
import { useEffect, useState } from "react";

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;
function App() {
	const [sort, setSort] = useState({ order: "asc", attri: "" });
	const [Data, setData] = useState(data);

	// console.log(sort)

	useEffect(() => {
		console.log(sort);
	}, [sort]);

	return (
		<div style={{ height: "auto", margin: "-8px" }}>
			<Navbar />
			<Container>
				<Filterbar sort={sort} setSort={setSort} />
				<List Data={Data} setData={setData} />
			</Container>
		</div>
	);
}

export default App;
