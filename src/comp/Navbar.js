import React from "react";
import styled from "styled-components";

const Bar = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	background-color: gray;
`;

const Navbar = () => {
	return (
		<div>
			<Bar>
				<div>Logo</div>
				<div>Home</div>
			</Bar>
		</div>
	);
};

export default Navbar;
