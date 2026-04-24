const container = document.getElementById("plantContainer");
const search = document.getElementById("search");
const seasonFilter = document.getElementById("seasonFilter");
const typeFilter = document.getElementById("typeFilter");
const areaFilter = document.getElementById("areaFilter");

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

const plantName = document.getElementById("plantName");
const scientific = document.getElementById("scientific");
const type = document.getElementById("type");
const area = document.getElementById("area");
const season = document.getElementById("season");
const sun = document.getElementById("sun");
const water = document.getElementById("water");
const grow = document.getElementById("grow");
const maturity = document.getElementById("maturity");
const organic = document.getElementById("organic");
const inorganic = document.getElementById("inorganic");
const problems = document.getElementById("problems");
const steps = document.getElementById("steps");
const reminderBtn = document.getElementById("reminderBtn");

let currentPlant = "";

/* ---------------- DISPLAY PLANTS ---------------- */
function displayPlants(data) {
  container.innerHTML = "";

  data.forEach((plant) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${plant.name}</h3>
      <div class="badge">${plant.type}</div>
      <div class="badge">${plant.area}</div>
      <div class="badge">${plant.season}</div>
    `;

    card.addEventListener("click", () => openPlant(plant));

    container.appendChild(card);
  });
}

/* ---------------- OPEN MODAL ---------------- */
function openPlant(plant) {
  currentPlant = plant.name;

  plantName.innerText = plant.name;
  scientific.innerText = plant.scientific;
  type.innerText = plant.type;
  area.innerText = plant.area;
  season.innerText = plant.season;
  sun.innerText = plant.sun;
  water.innerText = plant.water;
  grow.innerText = plant.grow;
  maturity.innerText = plant.maturity;
  organic.innerText = plant.organic;
  inorganic.innerText = plant.inorganic;
  problems.innerText = plant.problems;

  steps.innerHTML = "";
  plant.steps.forEach(step => {
    const li = document.createElement("li");
    li.innerText = step;
    steps.appendChild(li);
  });

  modal.classList.add("show");
}

/* ---------------- CLOSE MODAL ---------------- */
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

/* ---------------- FILTER FUNCTION ---------------- */
function filterPlants() {
  const text = search.value.toLowerCase();
  const seasonVal = seasonFilter.value;
  const typeVal = typeFilter.value;
  const areaVal = areaFilter.value;

  const filtered = plants.filter(p => {
    return (
      p.name.toLowerCase().includes(text) &&
      (!seasonVal || p.season.includes(seasonVal)) &&
      (!typeVal || p.type === typeVal) &&
      (!areaVal || p.area === areaVal)
    );
  });

  displayPlants(filtered);
}

/* ---------------- EVENTS (MOBILE OPTIMIZED) ---------------- */
search.addEventListener("input", filterPlants);
seasonFilter.addEventListener("change", filterPlants);
typeFilter.addEventListener("change", filterPlants);
areaFilter.addEventListener("change", filterPlants);

/* ---------------- REMINDER SYSTEM ---------------- */
reminderBtn.onclick = () => {
  let minutes = prompt("Water after how many minutes?");
  if (!minutes) return;

  const reminder = {
    plant: currentPlant,
    time: Date.now() + minutes * 60000
  };

  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
  reminders.push(reminder);

  localStorage.setItem("reminders", JSON.stringify(reminders));

  alert("Reminder saved for " + currentPlant);
};

/* ---------------- CHECK REMINDERS ---------------- */
setInterval(() => {
  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
  let now = Date.now();

  reminders = reminders.filter(r => {
    if (now >= r.time) {
      alert("💧 Time to water " + r.plant);
      return false;
    }
    return true;
  });

  localStorage.setItem("reminders", JSON.stringify(reminders));
}, 5000);

/* ---------------- INITIAL LOAD ---------------- */
displayPlants(plants);