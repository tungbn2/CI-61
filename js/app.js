import People from "./people.js"
import Community from "./community.js"

let input = new Community;
let inputForm = document.getElementById("inputForm");

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = inputForm.name.value;
    let sdt = inputForm.sdt.value;
    let locationX = inputForm.locationX.value;
    let locationY = inputForm.locationY.value;

    let person = new People (name,sdt,locationX,locationY);
    console.log(person);

    input.add(person);
    input.show ();

    inputForm.name.value = "";
    inputForm.sdt.value = "";
    inputForm.locationX.value = "";
    inputForm.locationY.value = "";

})

let a = new People("A",123,1,1);
let b = new People("B",234,2,1);
let c = new People("C",345,5,3);
let d = new People("D",456,6,1);
let e = new People("E",678,2,1);

input.add(a);
input.add(b);
input.add(c);
input.add(d);
input.add(e);



let search = document.getElementById("search");

search.addEventListener('click', (event) => {
    event.preventDefault();
    let sdt_infected = prompt("Nhập SĐT người bị nhiễm:");
    input.search(sdt_infected);
})