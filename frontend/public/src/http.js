const URL = "http://localhost:8080";

const sendHTTPPost = (path, data, successCallback, failureCallback) =>{
    fetch(URL+path,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(successCallback)
    .catch(failureCallback);
}
