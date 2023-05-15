export default async function PageWithJSbasedForm(data) {
    const JSONdata = JSON.stringify(data);
    const endpoint = `${process.env.URL}/api/v1/user/delivery-data`
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