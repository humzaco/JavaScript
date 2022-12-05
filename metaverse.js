//TASK 2: Personal Message

console.log("*************TASK 2: Personal Message*************");
let Name = "Hamza Tayyab";

console.log(Name);
console.log(`Hello ${Name}, would you like to learn some Python today?`);

//TASK 3: Name Cases

console.log("*************TASK 3: Name Cases*************");
function titleCase(string) {
    var sentence = string.toLowerCase().split(' ');
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 return sentence;
 }
 console.log(titleCase(`${Name}`));

 //TASK 4: Famous Quote

 console.log("*************TASK 4: Famous Quote*************");
let author_qoute=`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`
console.log(author_qoute)

//TASK 5: Famous Quote2
console.log("*************TASK 5: Famous Quote2*************");

let famous_person="Albert Einstein"

let msg=`"A person who never made a mistake never tried anything new."`;

console.log(`${famous_person} once said, ${msg}`);

//TASK 6: Stripping Names
console.log("*************TASK 6: Stripping Names*************");

let Name2= " Abu \n Owais "
console.log(Name2)

let Name3=" Abu \t Owais ";
console.log(Name3);

//TASK 7: Number Eight
console.log("*************TASK 7: Number Eight*************");

let add=6+2;
let sub=10-2;
let mul=2*4;
let division=16/2;

console.log(`Add ${add} || Sub ${sub} || Mul ${mul} || division ${division}`);

//TASK 8: Four Line
console.log("*************TASK 8: Four Line*************");
console.log("\n\n"+(5+3)+"\n\n");

//TASK 9: Favorite Number
console.log("*************TASK 9: Favorite Number*************");

let fav_num=96;
let message2=`My favourite is ${fav_num}`;

console.log(message2);

//TASK 10: Adding Comments
console.log("*************TASK 10: Adding Comments*************");

//Printing Name
console.log(`${Name}`);

//Printing current Date and Time
var currentdate = new Date(); 
console.log(`Current Date/Time: ${currentdate}`);

//TASK 11: Names
console.log("*************TASK 11: Names*************");

let friends_name=["Ali","Ahmed","Usman"];
console.log(friends_name[0]);
console.log(friends_name[1]);
console.log(friends_name[2]);

//TASK 12: Greetings
console.log("*************TASK 12: Greetings*************");

console.log(`Hi ${friends_name[0]}, \nHow are you?`);
console.log(`Hi ${friends_name[1]}, \nHow are you?`);
console.log(`Hi ${friends_name[2]}, \nHow are you?`);

//TASK 13: Your Own Array
console.log("*************TASK 13: Your Own Array*************");

let transportation=["I would like to ride my cycle", "Traveling from Bus, is too funny" , "I would like to own a car"];
console.log(transportation[0]);
console.log(transportation[1]);
console.log(transportation[2]);

//TASK 14: Guest List
console.log("*************TASK 14: Guest List*************");

let guests = ['Ali', 'Ahmed', 'Waqar'];

console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);
console.log(`${guests[2]} please come to dinner`);

//TASK 15: Changing Guest List
console.log("*************TASK 15: Changing Guest List*************");

console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);
console.log(`${guests[2]} please come to dinner`);

console.log(`${guests[0]} will unable to come for dinner`);

guests[0]="Usman";

console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);
console.log(`${guests[2]} please come to dinner`);

//TASK 16: More Guests
console.log("*************16: More Guests*************");

console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);
console.log(`${guests[2]} please come to dinner`);

console.log(`${guests[0]} will unable to come for dinner`);

guests[0]="Faraz";

console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);
console.log(`${guests[2]} please come to dinner`);

console.log("We found a bigger dinner table, so now more space is available");

guests.splice(0, 0, "Maaz");
guests.splice(2, 0, "Tariq");
guests.push("Umair");

console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);
console.log(`${guests[2]} please come to dinner`);
console.log(`${guests[3]} please come to dinner`);
console.log(`${guests[4]} please come to dinner`);
console.log(`${guests[5]} please come to dinner`);

//TASK 17: Shrinking Guest List
console.log("*************17: Shrinking Guest List*************");

let guests2 = ['Ali', 'Ahmed', 'Waqar'];
for (let i = 0; i < guests2.length; i++) {
    console.log(`${guests2[i]} please come to dinner`); // here i represents index
  }

console.log(`${guests[0]} will unable to come for dinner`);

guests2[0]="Faraz";

for (let i = 0; i < guests2.length; i++) {
    console.log(`${guests2[i]} please come to dinner`); // here i represents index
  }

console.log("We found a bigger dinner table, so now more space is available");

guests2.splice(0, 0, "Maaz");
guests2.splice(2, 0, "Tariq");
guests2.push("Umair");

for (let i = 0; i < guests2.length; i++) {
    console.log(`${guests2[i]} please come to dinner`); // here i represents index
  }

console.log("Sorry, we can invite only two people for dinner.");

for (let i = 5; i >= 2; i--) {
    console.log(`${guests2[i]}, sorry we can't you right now due to limited space for dinner`); // here i represents index
  }

  for (let i = 0; i < 2; i++) {
    console.log(`${guests2[i]} please come to dinner`); // here i represents index
  }

  while(guests2.length > 0) {
    guests2.pop();
}

console.log(`${guests2}`);

//TASK 18: Seeing the World
console.log("*************18: Seeing the World*************");

locations = ['Lahore', 'Karachi', 'Islamabad', 'Quetta', 'Hyderabad'];

console.log("Original order:");
console.log(`${locations}`);

console.log("Alphabetical:")
console.log(`${locations.slice().sort()}`);

console.log("\nOriginal order:")
console.log(`${locations}`);

console.log("\nReverse alphabetical:")
console.log(`${locations.slice().sort().reverse()}`);



console.log("\nOriginal order:")
console.log(`${locations}`);



console.log("\nReversed:")
console.log(`${locations.reverse()}`);

console.log("\nOriginal order:")
console.log(`${locations.reverse()}`);

console.log("\nAlphabatical:")
console.log(`${locations.sort()}`);

console.log("\nReverse Alphabatical:")
console.log(`${locations.sort().reverse()}`);

//TASK 19: Dinner Guests
console.log("*************19: Dinner Guests*************");

guests2 = ['Ali', 'Ahmed', 'Waqar'];
for (let i = 0; i < guests2.length; i++) {
    console.log(`${guests2[i]} please come to dinner`); // here i represents index
  }

console.log(`${guests[0]} will unable to come for dinner`);

guests2[0]="Faraz";

for (let i = 0; i < guests2.length; i++) {
    console.log(`${guests2[i]} please come to dinner`); // here i represents index
  }

console.log("We found a bigger dinner table, so now more space is available");

guests2.splice(0, 0, "Maaz");
guests2.splice(2, 0, "Tariq");
guests2.push("Umair");

for (let i = 0; i < guests2.length; i++) {
    console.log(`${guests2[i]} please come to dinner`); // here i represents index
  }

console.log("Sorry, we can invite only two people for dinner.");

for (let i = 5; i >= 2; i--) {
    console.log(`${guests2[i]}, sorry we can't you right now due to limited space for dinner`);
    guests2.pop();
  }

  for (let i = 0; i < 2; i++) {
    console.log(`${guests2[i]} please come to dinner`);
  }

console.log(`${guests2.length} guests are invited`);

//TASK 20: Store in an Array
console.log("*************20: Store in an Array*************");

let mountains=["Himalya","K2"];
let countries=["Pakistan","India","Sri lanka"];
let cities=["Karachi","Mumbai","Colombo"];
let lists=mountains.concat(countries,cities);
console.log(lists);

//TASK 21: Create Object
console.log("*************21: Create Object*************");

const Subjects = [
  { name: "Chemistry" },
  { name: "Physics" },
  { name: "Maths" }
];


//TASK 22: Intentional Error
console.log("*************22: Intentional Error*************");

var Subjects2 = [];

Subjects2[0] = "Chemistry";
Subjects2[1] = "Urdu";
Subjects2[2] = "Maths";

console.log(Subjects2[3]);
Subjects2[3] = "Physics";
console.log(Subjects2[3]);

//TASK 23: Conditional Tests
console.log("*************23: Conditional Tests*************");

var sport = "cricket";
var score = 250;
var out = 8;
console.log(sport === "football" );
console.log(sport === "cricket" ); 
console.log(score > 300 ); 
console.log(score < 100 ); 
console.log(score >= 205 ); 
console.log(score > 250 ); 
console.log(out !== 10);
console.log(out !== 8); 
console.log(out === 9); 
console.log(out === out);
//TASK 24: More Conditional Tests
console.log("*************24: More Conditional Tests*************");

var nationality = "Pakistani";
var age = 28;
var names = ["Owais","Nasar"];

// string
console.log(nationality === "Indian"); // false
console.log(nationality === "Pakistani"); // true
console.log(nationality === "pakistani"); // false
console.log(nationality.toLowerCase() === "pakistani"); // true

// number
console.log(age === 28); // true
console.log(age === 40); // false
console.log(age > 30); // false
console.log(age < 40); // true
console.log(age >= 28); // true
console.log(age <= 28); // true

// "and" and "or"
console.log(nationality === "Pakistani" && age > 18); // true
console.log(nationality === "Pakistani" && age > 40); // false

console.log(names.includes("Owais")); // true
console.log(names.includes("Nasar")); // false

//TASK 25: Alien Colors #1
console.log("*************25: Alien Colors #1*************");

var alien_color = "green";

if(alien_color === "green") {
    console.log("Player just earned 10 points");
} 

var alien_color = "yellow";

if(alien_color === "green") {
    console.log("Player just earned 10 points");
} 

//TASK 26: Alien Colors #2
console.log("*************26: Alien Colors #2*************");

function awardPoints(alien_color){
  if (alien_color === 'green') {
      console.log("The player just earned 5 points for shooting the alien");
  } else {
      console.log("The player just earned 10 points");
  }
}

var alien_color = 'green';
awardPoints(alien_color);
var alien_color1 = 'red';
awardPoints(alien_color1);

//TASK 27: Alien Colors #3
console.log("*************27: Alien Colors #3*************");

function awardPoints(alien_color){
  if (alien_color === 'green') {
      console.log("The player just earned 5 points for shooting the alien");
  } else if (alien_color === 'yellow') {
      console.log("The player just earned 10 points");
  } else if (alien_color === 'red') {
      console.log("The player just earned 15 points");
  }
}

var alien_color = 'green';
awardPoints(alien_color);
var alien_color1 = 'yellow';
awardPoints(alien_color1);
var alien_color2 = 'red';
awardPoints(alien_color2);

//TASK 28: Stages of Life
console.log("*************28: Stages of Life*************");

function checkingAge(age) {
  if (age < 2) {
      console.log('The Person is a baby');
  } else if (age === 2 || age < 4) {
      console.log('The person is a toddler');
  } else if (age === 4 || age < 13) {
      console.log('The person is a kid');
  } else if (age === 13 || age < 20) {
      console.log('The person is a teenager');
  } else if (age === 20 || age < 65) {
      console.log('The person is a adult');
  } else if (age === 65 || age > 65) {
      console.log('The person is a elder');
  }
}

checkingAge(2);
checkingAge(4);
checkingAge(13);
checkingAge(20);
checkingAge(65);

//TASK 29: Favorite Fruit
console.log("*************29: Favorite Fruit*************");

var favorite_fruits = ['Oranges', 'Mango', 'Banana', 'Apple', 'Cherry'];

if (favorite_fruits.includes('Oranges')) {
    console.log('You really like Oranges!');
}
if (favorite_fruits.includes('Mango')) {
    console.log('You really like Mango!');
}
if (favorite_fruits.includes('Banana')) {
    console.log('You really like Banana!');
}
if (favorite_fruits.includes('Apple')) {
    console.log('You really like Apple!');
}
if (favorite_fruits.includes('Cherry')) {
    console.log('You really like Cherry!');
}

//TASK 30: Hello Admin
console.log("*************30: Hello Admin*************");

var users = ['Admin','Zia','Khan','Ali','Raza'];
users.forEach(element=>{
    if(element === 'Admin'){
        console.log(`Hello ${element}, would you like to see a status report?`);
    }else {
        console.log(`Hello ${element}, thank you for logging in again.`);
    }
})

//TASK 31: No Users
console.log("*************31: No Users*************");
var usernames = [];

if(usernames.length) {
    for(var i = 0; i < usernames.length; i++) {
        if(names[i] === "Admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello Eric, thank you for logging in again.");
        }
    }
} else {
    console.log("We need to find some users!");
}

//TASK 32: Checking Usernames
console.log("*************32: Checking Usernames*************");

var current_users = ["Babar","Rizwan","Asif","Shan","Hasnain"];
var new_users = ["Rauf","Shadab","Nawaz","Waleed","Naseem"];

for(var i = 0; i < new_users.length;i++) {
        if(current_users.includes(new_users[i])) {
            console.log(new_users[i], "this user name is already exist, please try another username")
        } else {
            console.log("This username is available");
        }
}

//TASK 33: Ordinal Numbers
console.log("*************33: Ordinal Numbers*************");

var num = [1,2,3,4,5,6,7,8,9];

for(var i = 0; i < num.length;i++) {
    if(num[i] === 1) {
        console.log("1st");
    } else if(num[i] === 2) {
        console.log("2nd");
    } else if(num[i] === 3) {
        console.log("3rd");
    } else if(num[i] === 4) {
        console.log("4th");
    } else if(num[i] === 5) {
        console.log("5th");
    } else if(num[i] === 6) {
        console.log("6th");
    } else if(num[i] === 7) {
        console.log("7th");
    } else if(num[i] === 8) {
        console.log("8th");
    } else if(num[i] === 9) {
        console.log("9th");
    }
}

//TASK 34: Pizzas
console.log("*************34: Pizzas*************");

var pizza_types = ['Tika Pizza','Pepperoni Pizza','Cheese Pizza'];
pizza_types.forEach(pizzaName=>{
    console.log(pizzaName);
})
pizza_types.forEach(pizzaName=>{
    console.log(`I like ${pizzaName} Pizza`);
})
console.log('I like to eat\nI Love Pizza\nI Cheese Pizza is so fantastic\nI really love pizza!');

//TASK 35: Animals
console.log("*************35: Animals*************");

var animals = ['Parrot','dog','cat'];
animals.forEach(animal=>{
    console.log(animal);
})
animals.forEach(animal=>{
    console.log(`A ${animal} would make a great Pet.`);
})
console.log('cat and dog have sharp and powerful legs');

//TASK 36: T-Shirt
console.log("*************36: T-Shirt*************");

function make_shirt(size,message){
  console.log(`The size of the shirt is ${size} and ${message}`);
}
make_shirt('30','I am Owais');

//TASK 37: Large Shirts
console.log("*************37: Large Shirts*************");

function make_shirt(size,message){
  if(size === 'large'){
      console.log(message);
  }
  else if(size === 'mdium'){
      console.log(message);
  } else {
      console.log(message);
  }
}
make_shirt('large','I Love JavaScript');
make_shirt('mdium','I Love JavaScript');
make_shirt('small','Me! Owais Nasar');

//TASK 38: Cities
console.log("*************38: Cities*************");
function describe_city(name,country='Pakistan') {
  console.log(`${name} is in ${country}`);
}
describe_city('Karachi');
describe_city('Islamabad');
describe_city('Tehran','Iran');

//TASK 39: City Names
console.log("*************39: City Names*************");

function city_country(name,country){
  console.log(`"${name}, ${country}"`);
}
city_country('Karachi','Pakistan');
city_country('Tehran','Iran');
city_country('Mumbai','India');

//TASK 40: Album
console.log("*************40: Album*************");

function make_album(artistName,albumTitle,tracks) {
  this.artistName = artistName;
  this.albumTitle = albumTitle;
  if(tracks) {
     this.tracks = tracks; 
  }
}

console.log(new make_album("Faakhir","Aatish"))
console.log(new make_album("Rahim Shah","Channa"))
console.log(new make_album("Junoon","Azadi",10))

//TASK 41: Magicians
console.log("*************41: Magicians*************");

var magicians = ["Ali","Ahmed","Waqar"];

function show_magicians(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

show_magicians(magicians);
//TASK 42: Great Magicians
console.log("*************42: Great Magicians*************");

var magicians = ["Ali","Ahmed","Waqar"];

function make_great(arr) {
        for(var i = 0; i < arr.length; i++) {
        magicians[i] = `Great ${arr[i]}`;
    }
    return magicians;
}


function show_magicians(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

show_magicians(make_great(magicians));

//TASK 43: Unchanged Magicians
console.log("*************43: Unchanged Magicians*************");

var magicians_names = ['Babar', 'Sharma', 'Karry'];
var magicians_great = [];
function show_magicians2(magicians_names) {
  for (var i = 0; i < magicians_names.length; i++) {
    console.log(`${magicians_names[i]}`);
}
}


function make_great2(magicians_names) {
    for (var i = 0; i < magicians_names.length; i++) {
      console.log(`The Great ${magicians_names[i]}`);
    }
}


show_magicians2(magicians_names);
magicians_great = magicians_names;
make_great2(magicians_names);

//TASK 44: Sandwiches
console.log("*************44: Sandwiches*************");

function sandwich(arr) {
  console.log(`Items on sandwich ${arr}`);
}

var sandwich1 = ["Sandwich 1","Sandwich 2","Sandwich 3"];
var sandwich2 = ["Sandwich 4","Sandwich 5","Sandwich 6"];
var sandwich3 = ["Sandwich 7","Sandwich 8","Sandwich 9"];

sandwich(sandwich1);
sandwich(sandwich2);
sandwich(sandwich3);

//TASK 45: Cars
console.log("*************45: Cars*************");

function car(manufacturer,modelName) {
  return {
      manufacturer,
      modelName,
      AC: "Yes",
      Engine: "660cc",
      color:"White",
  }
}

console.log(car("Mehran","VX"))


