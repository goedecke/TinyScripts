db.people.find(
{
  "friends.2.name":{$gte:"T"}
},
{_id:0,name:1}).sort({name:1});