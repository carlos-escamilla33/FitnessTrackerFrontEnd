
const APIURL = `https://young-bastion-77866.herokuapp.com/`

export const callApi = async ({url, method, token, body}) => {
    try {
        const options = {
            method: method ? method.toUpperCase() : "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        };
        if (token) options.headers["Authorization"] = `Bearer ${token}`;

        const response = await fetch(`${APIURL}${url}`, options);
        const result = await response.json();
        if (result.error) {
            throw (result.error);
        }
        return result;
    }
    catch (error) {
        console.log(error);
    }
}