import Filterbar from "./comp/Filterbar";
import Navbar from "./comp/Navbar";
import List from "./comp/List";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;
function App() {
	return (
		<div style={{ height: "auto", margin: "-8px" }}>
			<Navbar />
			<Container>
				<Filterbar />
				<List />
			</Container>
		</div>
	);
}

export default App;
