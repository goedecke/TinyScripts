db.people.find(
  {
    gender:"female", 
    age:{$gt:20}
  }, 
  {name:1,gender:1,age:1}
);

db.people.find(
  { 
    $and: 
      [ 
        {gender:"female"}, 
        {age:{$gt:20}} 
      ] 
  }, 
  {name:1,gender:1,age:1} )