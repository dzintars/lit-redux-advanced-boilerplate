// CORS temporary enabled
const URL = `http://localhost:8082/v1/signin`;

// https://youtu.be/LZAbMCpyg0k?t=232
const fetchSignin = async (action) => {
	// const response = await fetch(`${URL}`);
	// console.log("Api", action)
	const response = await fetch(URL, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-type': 'text/plain',
		},
		body: JSON.stringify({
			email: action.payload.email,
			password: action.payload.password,
		}),
	});
	const data = await response.json();
	if (response.status >= 400) {
		throw new Error(data);
	}
	return data;
};

export { fetchSignin };
