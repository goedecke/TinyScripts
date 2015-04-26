db.people.find(
{
  "name": {$regex:".*r$"}
},
{name:1});