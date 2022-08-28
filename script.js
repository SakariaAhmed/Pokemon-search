let img = document.getElementById("img");

document.getElementById("btn").onclick = function () {
  let input = document.getElementById("t").value;
  hent(`https://pokeapi.co/api/v2/pokemon/${input}`);
};

function hent(link) {
  fetch(link)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users.sprites.front_default);
      img.src = users.sprites.front_default;
    });
}
