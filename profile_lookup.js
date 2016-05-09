/*Here is an array of objects representing different people in our contacts lists.
A lookUp function takes firstName and a property (prop) as arguments.
- The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact, f both are true, then return the "value" of that property.
- If firstName does not correspond to any contacts then return "No such contact"
- If prop does not correspond to any valid properties then return "No such property"*/

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Iterate over the array
  for (var i = 0; i < contacts.length; i++){
    // Checks if firstName is an actual contact's firstName
    if (contacts[i][firstName] == firstName){
      // Checks if given property (prop) is a property of that contact
      if (contacts[i][prop] == prop){
        // If both are true then return the "value" of that 'prop'erty
            return contacts[i][prop] == prop;
     }
    //  If firstName does not correspond to any contacts then return "No such contact"
      else {
        return "No such property";
      }

    }

  }
  //If prop does not correspond to any valid properties then return "No such property"
  return "No such contact";
}
// Change these values to test your function
lookUpProfile("Akira", "likes");
