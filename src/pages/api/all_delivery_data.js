export default async function PageWithJSbasedForm(data) {
    const JSONdata = JSON.stringify(data);
    const endpoint = 'http://127.0.0.1:3000/api/v1/user/delivery-data'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSONdata,
    }
    const response = await fetch(endpoint, options);
    const result = await response.json();
    // console.log(result.data);
    return result.data;
}