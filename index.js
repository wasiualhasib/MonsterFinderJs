import { monsters } from "./monsters.js";

const input = document.querySelector("#search-monster");

input.addEventListener("keyup", InputSearch);
function InputSearch(e) {
  let keyword = e.target.value;
  const data = document.querySelectorAll(".monster");
  let NotFound = true;
  for (let x of data) {
    let name = x.querySelector(".name").innerText.toLowerCase();
    let email = x.querySelector(".email").innerText.toLowerCase();
    if (name.includes(keyword) || email.includes(keyword)) {
      x.style.display = "block";
      NotFound = false;
    } else {
      x.style.display = "none";
    }
    if (NotFound) {
      document.querySelector(".not-found").style.display = "block";
    } else {
      document.querySelector(".not-found").style.display = "none";
    }
  }
}

for (const mon of monsters) {
  showMonster(mon);
}
NotFound();

function showMonster(mon) {
  const monsterDiv = document.createElement("div");
  monsterDiv.className = "monster";
  const img = document.createElement("img");
  img.src = `https://robohash.org/${mon.id}?set=set2`;
  img.alt = mon.name;
  const p1 = document.createElement("p");
  p1.className = "name";
  p1.innerText = mon.name;
  const p2 = document.createElement("p");
  p2.className = "email";
  p2.innerText = mon.email;
  monsterDiv.append(img, p1, p2);
  document.querySelector(".monsters").append(monsterDiv);
}

function NotFound(display) {
  const divEl = document.createElement("div");
  divEl.className = "p-5 not-found";
  divEl.style.display = "none";
  const span = document.createElement("span");
  span.innerText = "404";
  const h1 = document.createElement("h1");
  h1.innerText = "🧟‍♂️ No Monster Found 🧟‍♂️";
  divEl.append(span, h1);
  console.log(divEl);
  document.querySelector(".monsters").append(divEl);
}
