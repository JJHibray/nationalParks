const getParks = () => {
    return fetch("http://localhost:9099/parks")
    .then(response => response.json())
    .then(parsedParks => {
        parsedParks.forEach(parks => {
            const parksAsHTML = parkList(parks)
            addParksToDom(parksAsHTML)

        })

    })
}