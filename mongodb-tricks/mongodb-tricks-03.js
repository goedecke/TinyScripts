db.posts.insert(
   {
     _id: nextVal("posts"),
     title: "Tutorial de MongoDB. Operaciones de consulta" ,
     content: " En nuestra anterior entrada del tutorial de  MongoDB ...",
     status: "published"
   }
);

db.posts.insert(
   {
     _id: nextVal("posts"),
     name: "Tutorial de MongoDB y C#. Conexión a la base de datos",
     content: "Cuando queremos usar MongoDB desde C#, tenemos que crear una conexión ...",
     status: "draft"
   }
);