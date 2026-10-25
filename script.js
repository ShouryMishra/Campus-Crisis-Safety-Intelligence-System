
const incidents = [];
const form = document.getElementById("incidentForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const incident = {
    category: document.getElementById("category").value,
    location: document.getElementById("location").value.trim(),
    severity: document.getElementById("severity").value,
    description: document.getElementById("description").value.trim(),
    status: "Reported"
  };

  incidents.push(incident);
  displayIncidents();
  form.reset();
});

function displayIncidents() {
  const list = document.getElementById("incidentList");
  list.replaceChildren();

  incidents.forEach((incident, index) => {
    const item = document.createElement("li");
    item.textContent =
      `${index + 1}. ${incident.category} | ${incident.location} | ` +
      `${incident.severity} | ${incident.status} | ${incident.description}`;

    list.appendChild(item);
  });

  document.getElementById("total").textContent = incidents.length;
}
