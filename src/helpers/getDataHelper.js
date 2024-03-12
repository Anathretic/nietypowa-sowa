export const DataHandler = async () => {
	// eslint-disable-next-line no-async-promise-executor
	return new Promise(async (res, rej) => {
		const response = await fetch(`http://localhost:5173/data.json`, {
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(),
		}).catch(err => console.log('Server is probably down!', err.message));

		if (response) {
			const jsonResponse = await response.json();

			if (response.status === 200) {
				res(jsonResponse);
			} else {
				rej(jsonResponse);
			}
		}
	});
};
