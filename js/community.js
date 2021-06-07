import People from "./people.js";

export default class Community {
    persons;
    nearPeople;

    constructor () {
        this.persons = [];
        this.nearPeople = [];
    }

    add(person) {
        if (person instanceof People) {
            this.persons.push(person);
        }
    }

    show() {
        console.log( this.persons);
    }

    search (tel) {
        //tim index cua nguoi co tel 
        let index = this.persons.findIndex((person)=>{
            return person.tel == tel;
        })

        if (index >= 0) {
            let infectedPerson = this.persons[index];
            
            for (let i = 0; i<this.persons.length; ++i) {
                if (i !== index) {
                    //check distance
                    let x = Math.abs(infectedPerson.locationX - this.persons[i].locationX); 
                    let y = Math.abs(infectedPerson.locationY - this.persons[i].locationY); 
                    let distance = Math.sqrt(x*x + y*y);
                    if (distance < 2) {
                        this.nearPeople.push(this.persons[i]);
                    }
                }
            }
            let list = "";
            for (let i = 0; i<this.nearPeople.length; ++i) {list += `${this.nearPeople[i].name}, `}
            alert(`Những người có tiếp xúc gần với ${infectedPerson.name} lầ : ${list}`)
        }        
    }

}