// from data.js
var tableData = data;

var tbody = d3.select("tbody");

//print the data ato the console
console.log(data);

//insert the JSON objects into the table tbody
function insertData(data){
  var row =tbody.append("tr");
  Object.entries(data).forEach(([key,value])=>{
    var cell = tbody.append("td");
    cell.text(value.toString());
  })
};

tableData.forEach(insertData);

function clearData(filterData){
  d3.select("tbody").html("");
  filterData.forEach(insertData);
};

var button = d3.select("#filter-btn")
var inputBar = d3.select("form-control")

function handleClick(){
  console.log("Date filter was selected");
  console.log("d3.event.target");
};

button.on("click",function(){
d3.event.preventDefault();
var inputValue = inputBar.property("datetime");
console.log(inputValue);
var filterData = tableData.filter(data => data.datetime == inputValue);

clearData(filterdata);
})

function show_more(element_to_show){
  var element_to_show = document.getElementById("more");
}

console.log(inputBar)
