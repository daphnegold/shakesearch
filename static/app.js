const Controller = {
  search: (ev) => {
    ev.preventDefault();
    const form = document.getElementById("form");
    const data = Object.fromEntries(new FormData(form));
    const response = fetch(`/search?q=${data.query}`).then((response) => {
      response.json().then((results) => {
        Controller.updateTable(results);
      });
    });
  },

  updateTable: (results) => {
    const table = document.getElementById("table");
    table.innerHTML = "";

    const header = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headerText = document.createElement("th");
    const tbody = document.createElement("tbody");

    header.className = "bg-pink-800 text-white";
    headerText.className = "p-4 text-2xl";
    headerText.innerText = `${results.length} Search Results`;
    
    headerRow.appendChild(headerText);
    header.appendChild(headerRow);
    table.appendChild(header);

    for (let result of results) {
      const row = document.createElement("tr");
      const tData = document.createElement("td");
      
      tData.className = "border border-gray-200 p-4";
      tData.innerText = result;
  
      row.appendChild(tData);
      tbody.appendChild(row);
    }

    table.appendChild(tbody);
  },
};

const form = document.getElementById("form");
form.addEventListener("submit", Controller.search);
