const dataArr = [
  ["Lab 1", "Mon", "10:00", "Room 100", "Charles"],
  ["Lab 2", "Tue", "11:00", "Room 105", "Erik"],
];
const headArr = ["Activity", "Day", "Time", "Location", "Tutor"];
const tabParent = document.querySelector("body");

createTable(dataArr, headArr, tabParent);

function createTable(dataArr, headArr, tabParent) {
  const table = document.createElement("table");
  addTableStyling(table);
  const tabHead = createTabHead(headArr);
  table.appendChild(tabHead);
  const tabBody = document.createElement("tbody");
  populateTabBody(tabBody, dataArr);
  table.appendChild(tabBody);
  tabParent.appendChild(table);
}

function addTableStyling(table) {
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";
  table.style.fontFamily = "Arial, Helvetica, sans-serif";
  table.style.color = "white";
}

function createTabHead(headArr) {
  const tabHead = document.createElement("thead");
  tabHead.style.backgroundColor = "#321959";
  const row = document.createElement("tr");

  headArr.forEach((item) => {
    const cell = document.createElement("th");
    addCellStyling(cell);
    cell.textContent = item;
    row.appendChild(cell);
  });

  tabHead.appendChild(row);

  return tabHead;
}

function addCellStyling(cell) {
  cell.style.border = "1px solid";
  cell.style.textAlign = "center";
  cell.style.padding = "1rem";
}

function populateTabBody(tabBody, dataArr) {
  let isEven = false;

  dataArr.forEach((lab) => {
    const row = document.createElement("tr");
    addRowStyling(row, isEven);
    isEven = !isEven;

    lab.forEach((item) => {
      const cell = document.createElement("td");
      addCellStyling(cell);
      cell.textContent = item;
      row.appendChild(cell);
    });

    tabBody.appendChild(row);
  });
}

function addRowStyling(row, isEven) {
  if (isEven) {
    row.style.backgroundColor = "#1a191c";
  } else {
    row.style.backgroundColor = "#323036";
  }
}
