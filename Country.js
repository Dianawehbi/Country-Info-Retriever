const api = "https://restcountries.com/v3.1/all"

async function getData() {
    try {
        const response = await fetch(api)
        const data = await response.json();
        printData(data);
    } catch (e) {
        console.log(e.message);
    }
}

function printData(data) {
    let Data = data;
    document.querySelector(".head").innerHTML +=
        `
      <select class="select" onchange="countryData(this.value)">
            <option>Please Select</option>
            ${Data.map(country =>
            `<option> ${country.name.common}</option>`
        )}
      </select>
    `
}

async function countryData(name) {
    if (name != "Please Select") {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        const data = await response.json();
        console.log(data);
        let content = document.querySelector(".content");
        content.innerHTML =
            `
    <br>
    <h4>${data[0].name.common}</h4>
    <img src ='${data[0].flags.png}'>
    <div>Population : ${data[0].population}</div>
    <div> Area : ${data[0].area} Km^2</div>
    `
    }
}

getData();
