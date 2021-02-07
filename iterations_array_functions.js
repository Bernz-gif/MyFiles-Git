let personData = [
        { "Name": "Tamma Deroche", "Age": 19, "Gender": "Female", "Contact": "+212-180-179-4181", "Adress": "4 Quincy Road", "Email": "tderoche0@nsw.gov.au" },
        { "Name": "Raphaela MacDearmid", "Age": 17, "Gender": "Male", "Contact": "+504-254-840-0527", "Adress": "32087 Oneill Center", "Email": "rmacdearmid1@dot.gov" },
        { "Name": "Giacobo Clabburn", "Age": 82, "Gender": "Agender", "Contact": "+63-486-773-3175", "Adress": "5 Redwing Hill", "Email": "gclabburn2@discovery.com" }


    ]
    //FOR LOOP
for (let x = 0; x < personData.length; x++) {
    console.log(personData[x]);
}

//WHILE
let x = 0;
while (x < personData.length) {
    console.log(personData[x]);
    ++x;

}
//FOR OF
for (let x of personData) {
    console.log(x);
}
//FOR IN
for (let x in personData) {
    console.log(x);
}
personData.forEach(function(val) {
    console.log(val);
})

var filter = personData.filter(function(data) {
    return data.age < 30;
});

console.log(filter);
var map = personData.filter(function(data) {
    return data.age;
});

console.log(map);
var reduce = personData.reduce(function(acc, data) {
    return acc + data.age;
}, 0);
console.log(reduce);