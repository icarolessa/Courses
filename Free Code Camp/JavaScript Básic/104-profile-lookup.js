// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function veriName(){
  for(let i = 0; i < contacts.length; i++){
    contacts[i].firstName;
  }
}

function nameExist(name){
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName == name){
      return true;
    }
  }

  return false;
}

function propExist(prop){
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i].hasOwnProperty(prop)){
      return true;
    }
  }

  return false;
}

function lookUpProfile(name, prop) {
  // Only change code below this line
  if(!nameExist(name)){
    return 'No such contact';
  } else if(!propExist(prop)){
    return 'No such property';
  }
  
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)){
      return contacts[i][prop];
    }
  }
}
  // Only change code above this line

lookUpProfile("Akira", "likes");