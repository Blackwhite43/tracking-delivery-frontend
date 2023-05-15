export default async function PageWithJSbasedForm(data) {
    const endpoint = `${process.env.URL}/api/v1/user/delivery-data/${data}`
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