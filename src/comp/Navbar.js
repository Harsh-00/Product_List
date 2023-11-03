import React from "react";
import styled from "styled-components";

const Bar = styled.div`
	box-sizing: border-box;
	width: 100%;
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	align-items: center;
	background-color: #363062;
	color: white;
	border-bottom: 4px solid black;

	.logo {
		font-size: 1.6rem;
		font-weight: bold;
		letter-spacing: 4px;
	}
	.link {
		margin-right: 10rem;
		font-size: 1.3rem;
		text-decoration: underline;
		font-weight: bold;
		cursor: pointer;
	}
	@media (max-width: 850px) {
		.link {
			margin-right: 1rem;
		}
	}
`;

const Navbar = () => {
	return (
		<Bar>
			<div className="logo">Logo</div>
			<div className="link">Home</div>
		</Bar>
	);
};

export default Navbar;
