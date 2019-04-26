//https://api.darksky.net/forecast/41a1128648549ffc3dbd383b9f821df6/37.8267,-122.4233



function domBuilder(parkOBJ) {

    /* {for reference
    "name": "Yellowstone National Park",
    "state": "WY",
    "latitude": 44.427895,
    "longitude": -110.588379,
    "visited": true
    }*/

    let list = document.querySelector(".parkList")

    let articleWrap = document.createElement("article")
    //create the name and state elements
    let parkName = document.createElement("h3")
    let parkState = document.createElement("p")
    parkName.innerHTML = parkOBJ.name;
    parkState.innerHTML = parkOBJ.state;
    //add name and state to article container
    articleWrap.appendChild(parkName)
    articleWrap.appendChild(parkState)
    //Styling
    if (parkOBJ.visited) {
        articleWrap.style.border = ".1em dashed red"
    }
    else {
        articleWrap.style.border = ".1em solid green"
    }
    //GET THE WEATHER
    //let weatherOBJ = weatherFetcher(parkOBJ.latitude, parkOBJ.longitude);
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/41a1128648549ffc3dbd383b9f821df6/${parkOBJ.latitude},${parkOBJ.longitude}`)
        .then(result => result.json())
        .then(obj => {
            //initiate the list and its item elements
            let weatherList = document.createElement("ul")
            let current = document.createElement("li")
            let hourly = document.createElement("li")
            let daily = document.createElement("li")

            //TEXT ASSIGNING
            //add weather text to list items
            current.innerText = `Currently: ${obj.currently.summary}`;
            hourly.innerText = `Today: ${obj.hourly.summary}`;
            daily.innerText = `Week: ${obj.daily.summary}`;
            //DOM APPENDING
            //add list items to list
            weatherList.appendChild(current)
            weatherList.appendChild(hourly)
            weatherList.appendChild(daily)
            //add list to article
            articleWrap.appendChild(weatherList)
            list.appendChild(articleWrap)
        })
    }
