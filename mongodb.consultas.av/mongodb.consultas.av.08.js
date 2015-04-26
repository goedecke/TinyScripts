db.people.find( 
  { $or: 
     [ 
       {gender:"female"}, 
       {age:{$gt:20}} 
     ] 
  }, 
  {
    name:1,
    gender:1,
    age:1
  }
);