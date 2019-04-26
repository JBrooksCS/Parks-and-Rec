console.log("included fetcher.js")


function fetcher() {
    fetch(`https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json`)
        .then(result => result.json())
        .then(obj => {
            obj.parks.forEach(park => {
                //console.log(park)
                /* {for reference
                     "name": "Yellowstone National Park",
                     "state": "WY",
                     "latitude": 44.427895,
                     "longitude": -110.588379,
                     "visited": true
                   }*/
                //Build an inputObject
                INPUT_OBJ = {
                    "name": "",
                    "state": "",
                    "latitude": 0,
                    "longitude": 0,
                    "visited": false
                }
                //Populate the Obj
                INPUT_OBJ.name = park.name;
                INPUT_OBJ.state = park.state;
                INPUT_OBJ.latitude = park.latitude;
                INPUT_OBJ.longitude = park.longitude;
                INPUT_OBJ.visited = park.visited;
                //Send it to DOM the BUILDER
                domBuilder(INPUT_OBJ)
            });
        })
}


function weatherFetcher(latitude, longitude) {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/41a1128648549ffc3dbd383b9f821df6/${latitude},${longitude}`)
        .then(result => result.json())
        .then(obj => {
            WEATHER_OBJ = {
                "currently": "",
                "hourly": "",
                "daily": ""
            }
            //let weatherArray = [];
            WEATHER_OBJ.currently = obj.currently.summary;
            WEATHER_OBJ.hourly = obj.hourly.summary;
            WEATHER_OBJ.daily = obj.daily.summary;

            //weatherArray.push(WEATHER_OBJ)
            console.log('HELLO FROM weatherFetcher')
            return (WEATHER_OBJ)
            /*
            console.log(obj.currently.summary)
            console.log(obj.hourly.summary)
            console.log(obj.daily.summary)
            */
        })
}



fetcher();
//weatherFetcher();

