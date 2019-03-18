console.log("hello")



const parkList = (parkData) => {
   
    return ` <article class="parks">
            <h3>${parkData.name}</h3>
            <p>${parkData.state}</p>
        </article>
    `
}

console.table(getParks())

const addParksToDom = (parkData) => {
    document.querySelector(".parks").innerHTML += parkdata
}

const parkContainer = document.querySelector("#display-container");



