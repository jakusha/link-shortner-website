import React, { useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import Result from "./Result";

function App() {
	const [searchRes, setSearchRes] = useState("");

	return (
		<StyledDiv>
			<Search searchRes={searchRes} setSearchRes={setSearchRes} />
			<Result searchRes={searchRes} />
		</StyledDiv>
	);
}

export default App;

const StyledDiv = styled.div`
	border-radius: 8px;
	box-shadow: 0px 0px 11px 7px rgba(0, 0, 0, 0.36);
	padding: 16px;
	width: 100%;
	height: 20rem;
	max-width: 400px;
	margin: 16px;

	@media only screen and (min-width: 728px) {
		margin: 0 auto;
	}
`;
