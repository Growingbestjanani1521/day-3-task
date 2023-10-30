
//  q1. compare two JSON have the same properties without order
/*let obj1 = {name: "person1"; age: 3};
let obj2 = {age: 5; name: "person1"};
// convert the object to json
let json1 =JSON.stringify (obj1);
console.log (json1);
let json2 = JSON.stringify (obj2);
console.log(json2);*/

// q2. use the rest of countries API URL and display all the countries flags


/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    console.log(data);
    var result = JSON.parse(data);
    //console.log(result);
    //console.log(result[0].name.common);
    //console.log(result[0].area);
    //for accessing multiple values use looping
    for(var i=0;i<result.length;i++){
        console.log(result[i].flag);
    }
}*/

// print the region and subregions of country

/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    console.log(data);
    var result = JSON.parse(data);
    //console.log(result);
    //console.log(result[0].name.common);
    //console.log(result[0].region);
    //for accessing multiple values use looping
    for(var i=0;i<result.length;i++){
    console.log(result[i].region);
    }*/