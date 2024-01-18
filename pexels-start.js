//Esercizio 1
const myKey = "PAWsjRH6cDnYghotMfJJ5zHLZPStdBjlPUUbAuVsoomqRTxio6GTN5U0";

document.addEventListener("DOMContentLoaded", function() {
    const loadImages = document.getElementsByClassName("btn btn-primary my-2")[0];
    
    loadImages.addEventListener("click", () => {
        fetch("https://api.pexels.com/v1/search?query=[your-query]", {
            headers: {
                Authorization: myKey
            }
        })
            .then((response) => {
                console.log(response, "response")
                if(response.ok){
                    return response.json()
                } else {
                    throw new Error("error")
                }
            })
            .then((data) => {
                data.photos.forEach((photo) => {
                    const imgElement = document.createElement("img");
                    imgElement.src = photo.src.large;
                    document.body.appendChild(imgElement);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    });




    //Esercizio 2

    const loadSecondImages = document.getElementsByClassName("btn btn-secondary my-2")[0];

    loadSecondImages.addEventListener("click", () => {
        fetch("https://api.pexels.com/v1/search?query=[your-secondary-query]", {
            headers: {
                Authorization: myKey
            }
        })
            .then((response) => {
                console.log(response, "response")
                if(response.ok){
                    return response.json()
                } else {
                    throw new Error("error")
                }
            })
            .then((data) => {
                data.photos.forEach((photo) => {
                    const imgElement = document.createElement("img");
                    imgElement.src = photo.src.large;
                    document.body.appendChild(imgElement);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    });
});

//Esercizio 3 e 4

const editButtons = document.querySelectorAll(".btn.btn-sm.btn-outline-secondary");

editButtons.forEach((editButton) => {
    editButton.addEventListener('click', function() {
        this.textContent = 'Hide';
        
        const card = this.closest('.card');
        card.style.display = 'none';
    });
});

//Esercizio 5

data.photos.forEach((photo) => {
    const imgElement = document.createElement("img");
    imgElement.src = photo.src.large;

    
    const card = document.createElement("div");
    card.className = "card";

    
    const timeElement = card.querySelector(".text-muted"); 
    timeElement.textContent = photo.id;

    card.appendChild(imgElement);
    document.body.appendChild(card);
});