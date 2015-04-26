var myArray = 
    db.people.find(
    {
      "friends.2.name":{$gte:"T"}
    },
    {name:1}).toArray() 