import React from "react";
import styled from "styled-components";

const Bar = styled.div`
	width: 100%;
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	background-color: gray;
`;

const Navbar = () => {
	return (
		<Bar>
			<div>Logo</div>
			<div>Home</div>
		</Bar>
	);
};

export default Navbar;
