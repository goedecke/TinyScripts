db.people.find(
{"friends.2.name":{$gte:"T"}
}).count(); 