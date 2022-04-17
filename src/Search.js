import React, { useState } from "react";
import styled from "styled-components";
const Search = ({ setSearchRes }) => {
	const [searchInput, setSearchInput] = useState("");
	const [valid, setValidUrl] = useState(true);

	async function postUrl(url) {
		const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
			method: "POST",
			headers: {
				Authorization:
					"Bearer b3881155d2530fb1b9c0084991e5f2b560646fd6",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				long_url: `${url}`,
			}),
		});

		return res.json();
	}

	function validURL(str) {
		var pattern = new RegExp(
			"^(https?:\\/\\/)?" + // protocol
				"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
				"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
				"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
				"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
				"(\\#[-a-z\\d_]*)?$",
			"i"
		); // fragment locator
		return !!pattern.test(str);
	}

	function handleInput(e) {
		setSearchInput(e.target.value);
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		if (validURL(searchInput)) {
			postUrl(searchInput).then((data) => {
				console.log(data);
				setSearchRes(data);
			});
		} else {
			setValidUrl(!valid);
			setTimeout(() => {
				setValidUrl(true);
			}, 2000);
		}
	}

	return (
		<>
			<StyledForm onSubmit={handleFormSubmit}>
				<input
					value={searchInput}
					onChange={handleInput}
					placeholder="enter url..."
				/>

				<button>Shorten</button>
			</StyledForm>
			{valid ? "" : <StyledP>Please input a valid URL!!!!</StyledP>}
		</>
	);
};

export default Search;

const StyledForm = styled.form`
	margin-top: 48px;
	display: flex;
	justify-content: center;
	align-items: center;

	gap: 16px;
	input {
		padding: 8px;
		outline: 0;
		font-size: 1.2rem;
		max-width: 60%;
	}
	button {
		padding: 8px;
		font-size: 1.2rem;
		cursor: pointer;
		border: 0;
		border-radius: 8px;
		background-color: #0578e2;
		color: white;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	}
`;

const StyledP = styled.p`
	color: red;
	text-align: center;
	margin-top: 16px;
`;
