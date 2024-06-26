

let jokeText = document.querySelector("#con");
let jokeCate = document.querySelector("#type");
let lang = document.querySelector("#lang");
let jokesCon = document.querySelector(".jokesCon");

let getJokeBtn = document.getElementById("getJoke");

getJokeBtn.addEventListener("click", () => {
  var selectedValue = lang.value;
  let jokeAPI = `https://v2.jokeapi.dev/joke/${jokeCate.value}?lang=${selectedValue}&contains=${jokeText.value}&amount=10`;

  console.log("API : ", jokeAPI);
  fetch(jokeAPI)
    .then(x => x.json())
    .then(y => {
      if (y.error) {
        alert(`${y.causedBy[0]}
        ${y.additionalInfo}
        `)
      }
      else {
        let jokeHTML = ``;

        y.jokes.map((elem, i) => {
          jokeHTML += `<div class="joke mb-2 relative w-full h-[15vh] bg-[#f7f7f7] p-[10px]">
        <div class="flex items-center justify-between">
          <p class="text-[gray] text-[14px]">category : <b class="text-black">${y.jokes[i].category}</b> | Type <b class="text-black">${y.jokes[i].type}</b> | Language : <b class="text-black">${y.jokes[i].lang}</b> </p>
          <p class="text-[gray] text-[14px]">ID : <b class="text-black">${y.jokes[i].id}</b></p>
        </div>
         <p>${y.jokes[i].joke ? y.jokes[i].joke : y.jokes[i].setup + " " + y.jokes[i].delivery}</p>
      </div>`;
        });

        jokesCon.innerHTML = jokeHTML;

      }
    });
});


let randomJokeBtn = document.getElementById("randomJoke");


randomJokeBtn.addEventListener("click", () => {
  JokeAPI.getJokes({
    amount: 10
  })
    .then((res) => res.json())
    .then((y) => {
      console.log(y)
      let jokeHTML = ``;

      y.jokes.map((elem, i) => {
        jokeHTML += `<div class="joke mb-2 relative w-full h-[15vh] bg-[#f7f7f7] p-[10px]">
      <div class="flex items-center justify-between">
        <p class="text-[gray] text-[14px]">category : <b class="text-black">${y.jokes[i].category}</b> | Type <b class="text-black">${y.jokes[i].type}</b> | Language : <b class="text-black">${y.jokes[i].lang}</b> </p>
        <p class="text-[gray] text-[14px]">ID : <b class="text-black">${y.jokes[i].id}</b></p>
      </div>
       <p>${y.jokes[i].joke ? y.jokes[i].joke : y.jokes[i].setup + " " + y.jokes[i].delivery}</p>
    </div>`;
      });

      jokesCon.innerHTML = jokeHTML;
    });
});

