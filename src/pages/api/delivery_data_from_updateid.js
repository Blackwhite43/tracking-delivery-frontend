export default async function PageWithJSbasedForm(data) {
    const endpoint = `http://127.0.0.1:3000/api/v1/user/delivery-data/${data}`
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const response = await fetch(endpoint, options);
    const result = await response.json();
    // console.log(result.data);
    return result.data;
}