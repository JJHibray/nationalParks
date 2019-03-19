console.log("hello")


const buildParkHTML = (parkData) => {
    
    return `<article> 
    
    <h3>${parkData.name}</h3>
    <p>${parkData.state}</p>
    
    </article>
    `
}

const addParksToDom = (parkData) => {
    document.querySelector("#display-container").innerHTML += parkData
}




// const parkContainer = document.getElementById("#display-container");


// const buildParkHTML = (name, state) => {
//    const buildSection = document.createElement("section");
//    buildSection.id = "build-section";


// const buildArticle = document.createElement("article");
//   buildArticle.id = "park-article";
//   buildSection.appendChild(buildArticle);

//   const parkName = document.createElement("h3");
//   parkName.textContent = `${name}`;
//   buildArticle.appendChild(parkName);

//   const parkState = document.createElement("p");
//   parkState.textContent = `${state}`;
//   buildArticle.appendChild(parkState);

// console.log(buildSection);
// }

// buildParkHTML()
