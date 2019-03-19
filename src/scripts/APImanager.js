console.log("api")

// const getParks = () => {
//     return 
fetch("http://localhost:9099/parks")
    .then(r => r.json())
    .then(parsedParks => {
        parsedParks.forEach(parks => {
        const parksAsHTML = buildParkHTML(parks)
        addParksToDom(parksAsHTML)
        })
    })



// getParks()

