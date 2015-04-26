db.people.find(
{
  "friends.2.name":{$gte:"T"}
},
{friends:{$slice:-1},name:1});