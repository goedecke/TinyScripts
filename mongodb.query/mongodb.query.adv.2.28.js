db.people.find(
{
  "friends.2.name":{$gte:"T"}},
{name:1}).sort({name:1}).limit(1)