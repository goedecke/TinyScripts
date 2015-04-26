db.people.find(
  {
    age:{$gt:30},
    age:{$lt:40}
  }, 
  {name:1,gender:1,age:1} 
);

db.people.find(
  {
    age:{$lt:40},
    age:{$gt:30}
  }, 
  {name:1,gender:1,age:1}
);