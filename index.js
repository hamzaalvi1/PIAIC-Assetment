// Task 1
let username = "Hamza Alvi";
console.log(`Hello ${username}, would you like to learn some Python today?`);

// Task 2
let username2 = "Hamza alvi";
console.log(username2.toUpperCase());
console.log(username2.toLowerCase());
const titleCase = (str) => {
  let toTitleCase = str
    .split(" ")
    .map((letter) => {
      return `${letter.charAt(0).toUpperCase()}${letter.slice(1)}`;
    })
    .join(" ");
  return toTitleCase;
};
const checkTitleCase = titleCase(username2);
console.log(checkTitleCase);

// Task 3
let favouriteQuote =
  "You only live once, but if you do it right, once is enough.";
console.log(`Mae West once said,"${favouriteQuote}" `);

// Task 4
let famous_person = "Mae West";
console.log(`${famous_person} once said,"${favouriteQuote}" `);

// Task 5
const name = "\t \t Hamza Alvi  \n";
const trimmedname = name.trim();
console.log(`name with spaces: ${name}`);
console.log(`name without spaces: ${trimmedname}`);

// Task 6
let addition = 5 + 3;
let subtraction = 10 - 2;
let multiply = 4 * 2;
let division = 64 / 8;

console.log(`Addition ${addition}`);
console.log(`Subtraction ${subtraction}`);
console.log(`Multiply ${multiply}`);
console.log(`Division ${division}`);

// Task 7
const output = `----------
console.log("5 + 3")
----------`;

for (let i = 0; i < 4; i++) {
  console.log(output);
}

// Task 8
let favouriteNumber = 7;
console.log(`My favorite number is: ${favouriteNumber}`);

// Task 9
let addition1 = 5 + 3;
let subtraction1 = 10 - 2;
let multiply1 = 4 * 2;
let division1 = 64 / 8;

console.log(`Addition ${addition1}`);
console.log(`Subtraction ${subtraction1}`);
console.log(`Multiply ${multiply1}`);
console.log(`Division ${division1}`);

// Task 10
const friendsList = ["Fawwad", "Nabeel", "Omer", "Hassaan", "Haya"];

console.log(friendsList[0]);
console.log(friendsList[1]);
console.log(friendsList[2]);
console.log(friendsList[3]);
console.log(friendsList[4]);

// Task 11
friendsList.forEach((friend) => console.log(`Hey ${friend} what's up! `));

// Task 12
const vehicles = ["bike", "car", "ship", "airplane"];

console.log(`Always use helmet when riding a ${vehicles[0]}`);
console.log(`${vehicles[1]}s are comfortable but consume more fuel`);
console.log(
  `Cargos and shipments worldwide are carried by ${vehicles[2]} at large scale`
);
console.log(
  `6.84 of every 100,000 flight hours yields an ${vehicles[3]} crash`
);

// Task 13
const invitationList = ["Hassan", "Haya", "Omer", "Fawwad", "Nabeel"];

invitationList.forEach((invitee) =>
  console.log(`Hey ${invitee} I have organized dinner be on time`)
);

// Task 14
console.log(
  `Friends that are not comming for dinner is ${invitationList[3]} & ${invitationList[4]}`
);
invitationList.splice(3, 4, "Hammad", "Huzaifa");
invitationList.forEach((invite) =>
  console.log(`Hey ${invite} I have organized dinner be on time`)
);

// Task 15

invitationList.forEach((Invite) => {
  console.log(
    `Hey ${Invite}, I'm organizing a dinner party tonight at my place, you are invited. It'll start sharp at 9. Please be on time.`
  );
});
console.log(
  `Hey guys, I've found a bigger table. Thinking if we can add few more people.`
);

invitationList.push("Tehreem", "Mujhtaba", "Noor");

invitationList.forEach((Invite) => {
  console.log(
    `Hey ${Invite}, I'm organizing a dinner party tonight at my place, you are invited. It'll start sharp at 9. Please be on time.`
  );
});
// Task 16
console.log(
  `Hey guys, I just came to know that your the new dinner table I was talking about won't arrive in time for the dinner. I can only have 2 people for tonight`
);
invitationList.length = 2;
invitationList.forEach((invite) =>
  console.log(`Hey ${invite} see you at dinner`)
);

// Task 17
const places = ["Venice", "Istanbul", "Paris", "San Francisco", "Rome"];

console.log("Array in original Form", places);

console.log("In alphabetic order (without mutating)", [...places].sort());

console.log("reverse order (without mutating)", [...places].reverse());

console.log("Array in original Form", places);

console.log("Array mutated to reverse", places.reverse());

console.log("Array back to original", places.reverse());

console.log("Array mutated to alphabetic order", places.sort());

// Task 19
const items = ["K2", "Jhelum", "Indonesia", "Estonian", "Toronto"];

// Task 20

const objList = {
  mountain: "K2",
  river: "Jhelum",
  country: "Indonesia",
  language: "Estonian",
  city: "Toronto",
};
// Task 21
const inviteList = ["Aiman", "Fawwad", "Sehrish", "Haya"];

console.log(
  `Hey ${inviteList[0]}, I'm organizing a dinner party tonight at my place, you are invited. It'll start sharp at 9. Please be on time.`
);
console.log(
  `Hey ${inviteList[1]}, I'm organizing a dinner party tonight at my place, you are invited. It'll start sharp at 9. Please be on time.`
);
console.log(
  `Hey ${inviteList[2]}, I'm organizing a dinner party tonight at my place, you are invited. It'll start sharp at 9. Please be on time.`
);
console.log(
  `Hey ${inviteList[3]}, I'm organizing a dinner party tonight at my place, you are invited. It'll start sharp at 9. Please be on time.`
);

// Creating Index error
console.log(
  `Hey ${inviteList[64]}, I'm organizing a dinner party tonight at my place, you are invited. It'll start sharp at 9. Please be on time.`
);

// Solving the problem
console.log(
  `Hey ${inviteList[2]}, I'm organizing a dinner party tonight at my place, you are invited. It'll start sharp at 9. Please be on time.`
);

// Task 22

const car = "Toyota";
const country = "Pakistan";
const langauge = "Urdu";
const bike = "Honda";
const mobile = "Samsung";
const laptop = "Dell";
const date = 29;
const day = "Thursday";
const course = "Panaverse";
const teacher = ["Sir Zia", "Sir Daniyal"];

// the falsy comparision that would result in false
console.log(car === "KIA");
console.log(country === "India");
console.log(langauge === "English");
console.log(course === "Blockchain");
console.log(teacher.length === 1);

// the truthy comparision that would result in true

console.log(bike === "Honda");
console.log(mobile === "Samsung");
console.log(laptop === "Dell");
console.log(date === 29);
console.log(day === "Thursday");

// Task 23

const stringTest = "Hamza";
const numberTest = 10;
const arrayTest = ["Q24", "Hamza Alvi", "Panaverse"];

// String Tests
console.log(stringTest === "Hamza");
console.log(stringTest !== "Hamza");

console.log(stringTest.toLowerCase() === "hamza");
console.log(stringTest.toLowerCase() !== "hamza");

// Number tests
console.log(numberTest === 10);
console.log(numberTest !== 10);

console.log(numberTest > 9);
console.log(numberTest < 9);

console.log(numberTest === 10 && stringTest === "Hamza");
console.log((numberTest === 10) | (stringTest === "Hamza"));

// Array tests
console.log(arrayTest.includes("Q24"));
console.log(!arrayTest.includes("Q24"));

// Task 24
const colors = ["green", "blue", "red"];
let points = 0;

const alienColor = colors[Math.floor(Math.random() * 3)];

if (alienColor === "green") {
  points += 5;
  console.log("You've earned 5 points");
}

// Task 25
if (alienColor === "green") {
  points += 5;
  console.log("You've earned 5 points");
} else {
  points += 10;
  console.log("You've earned 10 points");
}

// Task 26
if (alienColor === "green") {
  points += 5;
  console.log("You've earned 5 juicy points");
} else if (alienColor === "yellow") {
  points += 10;
  console.log("You've earned 10 juicy points");
} else if (alienColor === "red") {
  points += 15;
  console.log("You've earned 15 juicy points.");
}

// Task 27
const age = Math.floor(Math.random() * 65); // random number generate between 0 to 65;

if (age < 2) {
  console.log("This person is a baby and the age is", age);
} else if (age >= 2 && age < 4) {
  console.log("This person is a toddler and the age is", age);
} else if (age >= 4 && age < 13) {
  console.log("This person is a kid and the age is", age);
} else if (age >= 13 && age < 20) {
  console.log("This person is a teenager and the age is", age);
} else if (age >= 20 && age < 65) {
  console.log("This person is a elder and the age is", age);
}

// Task 28

const favorite_fruits = ["apple", "banana", "grape"];

if (favorite_fruits.includes("banana")) {
  console.log("You really liked banana");
}

if (favorite_fruits.includes("apple")) {
  console.log("You really liked apple");
}

if (favorite_fruits.includes("grape")) {
  console.log("You really liked grape");
}

if (favorite_fruits.includes("mango")) {
  console.log("You really liked mango");
}
if (favorite_fruits.includes("pineapple")) {
  console.log("You really liked pineapple");
}

// Task 29

const usernames = ["Haya", "Fawwad", "Tooba", "Admin", "Omer"];

usernames.forEach((user) => {
  if (user === "Admin") {
    console.log(`Hello ${user}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
});

// Task 30
// adding No user check
usernames.splice(0, usernames.length);
// removing all the users

if (usernames.length <= 0) {
  console.log("We need to find some users!");
}

// Task 31

const currentUsers = ["Haya", "Fawwad", "Tooba", "Admin", "Omer"];
const newUsers = ["Haya", "Malhia", "Nabeel", "Tooba", "Noor"];

newUsers.forEach((user) => {
  if (
    currentUsers.some(
      (currentUser) => currentUser.toLowerCase() === user.toLowerCase()
    )
  ) {
    console.log(`Username ${user} already exists. Please try different.`);
  } else {
    console.log(`Username ${user} is available.`);
  }
});

// Task 32

const numbers = [...Array(10 + 1).keys()].slice(1);

numbers.forEach((number) => {
  if (number === 1) {
    console.log(`${number}st`);
  } else if (number === 2) {
    console.log(`${number}nd`);
  } else if (number === 3) {
    console.log(`${number}rd`);
  } else {
    console.log(`${number}th`);
  }
});
// Task 33

const pizzaList = ["fajita", "tikka", "italian", "supreme", "bihari"];

pizzaList.forEach((pizzaName) => console.log(`I like ${pizzaName} pizza`));

console.log(
  "My love for pizza runs deep. I like pizza in any form. From gourmet to frozen and deep dish to thin & crispy, I love it ALL. I really enjoy making my own pizza."
);
// Task 34

const animalList = ["Dogs", "Rabbits", "Cats"];

animalList.forEach((animal) => {
  if (animal === "Dogs") {
    console.log("ogs can run very fast");
  } else if (animal === "Rabbits") {
    console.log("Rabbits love to eat carrots");
  } else if (animal === "Cats") {
    console.log("Cats are friendly and loves their owner");
  }
});

// Task 35

const makeTshirts = (size, text) => {
  return `the size of the shirt should be ${size} and the text message printed on it must be ${text}`;
};

console.log(makeTshirts("L", "Barcelona"));

// Task 36

const TshirtsRevamp = (size = "L", text = "I love JavaScript") => {
  return `the size of the shirt should be ${size} and the text message printed on it must be ${text}`;
};

console.log(TshirtsRevamp("L"));
console.log(TshirtsRevamp("M"));
console.log(TshirtsRevamp("S", "Barcelona"));

// Task 37

const describeCity = (city, country = "Pakistan") => {
  console.log(`${city} is in ${country}`);
};

describeCity("Mumbai", "India");
describeCity("Islamabad");
describeCity("Karachi");

// Task 38
const cityCountry = (city, country) => {
  console.log(`${city}, ${country}`);
};

cityCountry("Karachi", "Pakistan");
cityCountry("Tokyo", "Japan");
cityCountry("Sydney", "Australia");

// Task 39

const makeAlbum = (artist, album) => ({ artist, album });

console.log(makeAlbum("Dharia", "Incredible"));
console.log(makeAlbum("David Guetta", "Say My Name"));
console.log(makeAlbum("Coldplay", "Hymm for the weekend"));

// Task 40

const magicians = ["David Copperfield", "Penn and Teller"];

const showMagician = (magiciansList) => {
  if (
    magiciansList &&
    typeof magiciansList === "object" &&
    magiciansList.length >= 1
  ) {
    magiciansList.forEach((name) => console.log(name));
  } else {
    console.error("Only arrays with magician names are allowed");
  }
};

showMagician(magicians);
showMagician(12);

// Task 41
const showMagicianRevamp = (magiciansList) => {
  if (
    magiciansList &&
    typeof magiciansList === "object" &&
    magiciansList.length >= 1
  ) {
    magiciansList.forEach((name) => console.log(name));
  } else {
    console.error("Only arrays with magician names are allowed");
  }
};

const makeGreat = (magiciansList) => {
  const greatMagicians = [];
  for (let i = 0; i < magiciansList.length; i++) {
    const phrase = `The great ${magiciansList[i]}`;
    greatMagicians.push(phrase);
  }
};

makeGreat(magicians);

console.log(magicians);

// Task 42

const sandwichMaker = (...args) => {
  console.log(`The summary of the sandwich that is ordered is,`);
  args.forEach((item) => console.log(`${item}, `));
};

sandwichMaker("Cheese", "Crust", "Chicken", "Peproni");
sandwichMaker("Crust", "Peproni");
sandwichMaker("Cheese", "Chicken", "Peproni");

// Task 42

const carMaker = (manufacturer, model, ...args) => {
  const carSpecs = {
    manufacturer,
    model,
  };

  for (const [key, value] of Object.entries(...args)) {
    carSpecs[key] = value;
  }

  return carSpecs;
};

console.log(carMaker("Honda", "City 2020", { color: "red", "roof-top": true }));
