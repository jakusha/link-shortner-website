import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ClipboardJS from "clipboard";

const Result = ({ searchRes }) => {
	const [copied, setCopied] = useState(false);
	useEffect(() => {
		var clipboard = new ClipboardJS(".btn");
		clipboard.on("success", function (e) {
			setCopied(!copied);
			e.clearSelection();
			setTimeout(() => {
				setCopied(copied);
			}, 2000);
		});
	}, [copied]);
	return (
		<>
			<StyledDiv>
				<div id="url-result">{searchRes.id}</div>
				<button className="btn" data-clipboard-target="#url-result">
					Copy
				</button>
			</StyledDiv>
			{copied ? <Success>COPIED!!!</Success> : ""}
		</>
	);
};

export default Result;

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	gap: 16px;
	margin 40px 0;
	div {
		flex-basis: 120px;
		padding: 16px;
		border: 2px solid background: #00f260;
		background: white;
	}

	button {
		padding: 8px;
		font-size: 1.2rem;
		cursor: pointer;
		border: 0;
		border-radius: 8px;
		background-color: #0578E2;
		color: white;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

	}
`;

const Success = styled.p`
	color: green;
	font-size: 1.3rem;
	font-weight: 800;
	text-align: center;
`;
