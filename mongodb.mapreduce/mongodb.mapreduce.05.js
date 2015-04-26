var map = function()
{
    var key=this.gender;
    var value = { "totalPeople":1, "totalAge":this.age};
    emit(key,value);   
};