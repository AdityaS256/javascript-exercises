const findTheOldest = function(people) {
    let oldest = {
        name: "",
        yearsLived: 0,
    };

    people.forEach(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = (new Date()).getFullYear();
        }
        let yearsLived = person.yearOfDeath - person.yearOfBirth;
        if (yearsLived > oldest.yearsLived) {
            oldest.name = person.name;
            oldest.yearsLived = yearsLived;
        }
    })

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
