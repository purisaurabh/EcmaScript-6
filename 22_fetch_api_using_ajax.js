/*

    The Fetch API
    he Fetch API provides a fetch() methos defined on the window objects which you can
    use to perform requests

    This methos returns a promise that you can use to retrieve 
    the response of the request

*/


fetch('https://api.covid19api.com/summary').then((apidata) =>{
    // console.log(apidata);
    // converted into js object
    return apidata.json();
}).then((actual_data) => {
    const mydata = actual_data.Countries[101];
    document.getElementById('apiindia').innerHTML = `The name of the country is ${mydata.Country}
    . The total confirmed cases here us ${mydata.TotalConfirmed} ans the Total death cases here is
    ${mydata.TotalDeaths} and finally the Total recoveres cases are ${mydata.TotalRecovered}`;
    // console.log(actual_data);
}).catch((error) =>{
    console.log(`The Error : ${error}`);
})


// this is in the form of json we have to convert it into object format
