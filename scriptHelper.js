// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = 
        `<h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name} </li>
                <li>Diameter:${diameter} </li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
            <img src=${imageUrl}>`

   
    // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) 
{
   if (testInput== "")
   {
       return "Empty";
   }
   else if (isNaN(testInput)) 
   {
        return "Not a Number";
   }
   else 
   {
       return "Is a Number";
   }  
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//    let itemToCheck = document.getElementbyId(faultyItems)
  //need to add pilot & copilot with template literals
    if(validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || 
        validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "Empty"){
            alert("Please enter all required values");
        }

   else{
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for Launch`;
    document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot} is ready for Launch`;

    fuelLevel = Number(fuelLevel);
    cargoLevel = Number(cargoLevel);

    if(validateInput(fuelLevel) == "Is a Number" && validateInput(cargoLevel) == "Is a Number"){
        if(fuelLevel >= 10000 && cargoLevel <= 10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        }
        else{
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("faultyItems").style.visibility = "visible";
            if(fuelLevel < 10000){
                document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";    
            }
            if(cargoLevel > 10000){
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";    
            }
        } 
    }

    else{
        alert("Please enter numbers for fuel and cargo");
    }
   }
}

async function myFetch() {
    let planetsReturned;

    // //planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {response.json()});
    // console.log(planetsReturned)
    // return planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    return planetsReturned.json();
}

function pickPlanet(planets) {
    //Select an index of planets at Random using Math.Random()
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
    //Return that index

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
