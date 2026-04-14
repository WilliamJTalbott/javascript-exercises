const findTheOldest = function(people) {

    let ages = []

    for (i = 0; i < people.length; i++) {

        let age = 0
        let person = people[i]

        if (person.yearOfDeath) {
            age = (person.yearOfDeath - person.yearOfBirth)
        } else {
            age = (new Date().getFullYear() - person.yearOfBirth)
        }

        ages[i] = age
    }

    return people[ages.indexOf(Math.max(...ages))]

};

// Create 2 new arrays with just the ages.
// If a person doesn't have a death use "new Date(year)"

// Get the index using maxIndex = nums.indexOf(Math.max(...nums));

//Return the person with the same index

// Do not edit below this line
module.exports = findTheOldest;
