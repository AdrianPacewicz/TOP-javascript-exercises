const findTheOldest = function(people) {
  let oldest = people.reduce(function(oldestPerson, person) 
  {
    if (getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath) < getAge(person.yearOfBirth, person.yearOfDeath))
      return person
    else
      return oldestPerson
  })
  return oldest;
}
  
const getAge = function(birth, death) {
  if(!death)
    death = new Date().getFullYear();
  return death - birth;
};

/*
  people.forEach(person => {
    let age = 0;
    if (person.yearOfDeath)
      age = person.yearOfDeath - person.yearOfBirth;
    else
      age = Date.now() - person.yearOfBirth;
    let oldestAge = 0;
    if (oldest.yearOfDeath)
      oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    else
      oldestAge = Date.now() - oldest.yearOfBirth;
    if (age > oldestAge)
      oldest = person;
  });
  return oldest.name;
  */


module.exports = findTheOldest;
