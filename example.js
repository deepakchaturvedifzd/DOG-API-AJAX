const DOG_URL = "https://dog.ceo/api/breeds/image/random/3";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(respons) {
      const processingPromise = respons.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message[0];
      img.alt = "Cute doggo";
      doggos.appendChild(img);
      img.style.border = '5px solid #39cccc'
    img.style.margin='2px';
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);