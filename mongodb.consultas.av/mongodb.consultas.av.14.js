db.people.find(
  {
    $nor:
      [
        {age:{$gt:30}},
        {isActive:true}
      ]
  },
  {age:1,isActive:1}
);