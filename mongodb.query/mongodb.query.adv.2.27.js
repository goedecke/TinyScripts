db.people.find(
{
    "friends.2.name":{$gte:"T"}
},
{name:1}).skip(10).limit(5) 