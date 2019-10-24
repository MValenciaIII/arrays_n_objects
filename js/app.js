/*
    Arrays and Objects
*/
//Arrays pg 70
var arr0 = new Array('Hello', 'World', '!'); // array constructor
var arr1 = ['Hello', 'World', '!']; // array literal
var arr3 = [ ['Hello','World', '!'],['Hola','Mundo', '!'], ['Hallo','Welt', '!']];


// var data = [
// 'Lorem',
// 'ipsum',
// 'dolor',
// 'sit',
// 'amet',
// 'consectetur',
// 'adipisicing',
// 'elit',
// 'Possimus',
// ]

// console.log(arr3[1,1]);
// console.log(arr1[1]); //World


// for loop you can break out

// for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i];
//     console.log(element);
//     if (element == 'dolor') {
//         i = data.length
//     }
// }


// cannot break out
// data.forEach(function (element) {
//     console.log(element);
// });


var arr4 = [10,10,9,8,10,1,2];

//output a random element from an array

var data = [
    'Lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipisicing',
    'elit',
    'Possimus',
    ]

    console.log(data[Math.floor(Math.random() * Math.floor(data.length))])


    var arr3 = [ ['Hello','World', '!'],['Hola','Mundo', '!'], ['Hallo','Welt', '!']];

    // NOT DYNAMICconsole.log(arr3[Math.floor(Math.random() * Math.floor(arr3.length))][Math.floor(Math.random() * Math.floor(arr3.length))])

    //randomly kchoose a  child array
    //randomly choose an index from the child to display word

    var child = arr3[Math.floor(Math.random() * Math.floor(arr3.length))];
    var word = child[Math.floor(Math.random() * Math.floor(child.length))]

    console.log(word);

    // let change = document.getElementById('change');

    // change.outerHTML = yoMommaJokes[Math.floor(Math.random() * Math.floor(yoMommaJokes.length))];

    // var yoMommaJokes = ["Yo momma's so fat she needs cheat codes for Wii Fit.","Yo momma's so fat thanos snapped twice.", "Yo momma is so fat she sat on the rainbow and Skittles came out.", "Yo momma is so stupid she took a ruler to bed to see how long she slept." , "Yo momma's so fat, she got baptized at Sea World." ] 

    // console.log(yoMommaJokes[Math.floor(Math.random() * Math.floor(yoMommaJokes.length))])
    // document.write(yoMommaJokes[Math.floor(Math.random() * Math.floor(yoMommaJokes.length))]);


var arr5 = ['string' , 1, [1,2,3], 'string 2'];
console.log('first', arr5)
//add to exsting array
//arr5.length // 4 index:3

arr5[arr5.length] = 'string3';
arr5[2][arr5[2].length] = 'string3';

console.log('second', arr5)


// Random Hero Generator 3 arrays Names, Powers, adjective

var names = ["Elastic Man", "Spiderman", "Cat Woman", "SuperMan", "DeadPool"];
var powers = [" can stretch", " can shoot webs", " has cat-like powers", " is super strong", " can regenerate super fast"];
var adjective = ["Super ", "Holy ", "Immortal ", "Strong ", "Deadly "];
var sound1 = new Audio('spiderpigall.mp3');
 var name = names[Math.floor(Math.random() * Math.floor(names.length))];
document.write(
    adjective[Math.floor(Math.random() * Math.floor(adjective.length))], 
    name, 
    powers[Math.floor(Math.random() * Math.floor(powers.length))]);

if (name == "Spiderman") {
    var button = document.createElement('button');
    button.innerText = 'Play';
    document.getElementById('button').appendChild(button);

    document.querySelector('button').addEventListener('click', function() {
        sound1.play();
    });
}


//MDN map, reduce, filter

var obj = new Object(); // Called an object constuctor only make new objects
var obj1 = {}

obj.fname = 'Herbert';
obj.lname = 'Brown';

console.log(obj.fname);

var obj2 = {
    fname: 'Michael',
    lname: 'Valencia'
}
console.log(obj2.fname);



//array of objects the ideal of 
var people = [
    {
        fname: 'Bryce',
        lname: 'Mullican'
    },
    {
        fname: 'Herbert',
        lname: 'Brown'
    }
];

people.forEach(function(person) {
    person.address = '123 Sesame Street';
    console.log(person.fname);

});

console.log(people);


//parsing data


// var clientData = [
//     {
//         fname:'Sianna',
//         lname:'Fantini',
//         email:'sfantini0@jalbum.net',
//         gender:'Female',
//         ipaddress:'17.187.75.7'
//     },
//     {
//         fname:'Ami',
//         lname:'Siggin',
//         email:'asiggin1@auda.org.au',
//         gender:'Female',
//         ipaddress:'92.136.232.25'

//     },
//     {
//         fname:'Kandy',
//         lname:'Bernardoni',
//         email:'kbernardoni2@infoseek.co.jp',
//         gender:'Female',
//         ipaddress:'108.122.66.8'

//     },
//     {
//         fname:'Gus',
//         lname:'Oswal',
//         email:'goswal3@ucoz.ru',
//         gender:'Female',
//         ipaddress:'101.216.78.8'

//     },
//     {
//         fname:'Laurie',
//         lname:'Upward',
//         email:'lupward4@issuu.com',
//         gender:'Male',
//         ipaddress:'92.123.107.'


//     },
//     {
//         fname:'Melitta',
//         lname:'Vallery',
//         email:'mvallery5@nydailynews.com',
//         gender:'Female',
//         ipaddress:'255.228.200.8'


//     },
//     {
//         fname:'Francesco',
//         lname:'Danielczyk',
//         email:'fdanielczyk6@yelp.com',
//         gender:'Male',
//         ipaddress:'253.12.207.4'

//     },
//     {
//         fname:'Tedmund',
//         lname:'Misken',
//         email:'tmisken7@imgur.com',
//         gender:'Male',
//         ipaddress:'216.241.133.'

//     },
//     {
//         fname:'Koralle',
//         lname:'Griffithe',
//         email:'kgriffithe8@simplemachines.org',
//         gender:'Female',
//         ipaddress:'108.21.21.11'
//     },
//     {
//         fname:'Major',
//         lname:'Yewman',
//         email:'myewman9@prnewswire.com',
//         gender:'Male',
//         ipaddress:'142.167.101.22'

//     },
//     {
//         fname:'Dell',
//         lname:'Hutcheon',
//         email:'dhutcheona@forbes.com',
//         gender:'Male',
//         ipaddress:'97.208.109.17'


//     },
//     {
//         fname:'Halley',
//         lname:'Doward',
//         email:'hdowardb@redcross.org',
//         gender:'Female',
//         ipaddress:'58.97.154.14'


//     },
//     {
//         fname:'Kati',
//         lname:'Yakushkev',
//         email:'kyakushkevc@washington.edu',
//         gender:'Female',
//         ipaddress:'34.166.161.14'


//     },
//     {
//         fname:'Sargent',
//         lname:'Hulatt',
//         email:'shulattd@w3.org',
//         gender:'Male',
//         ipaddress:'99.235.176.11'


//     },
//     {
//         fname:'Aleta',
//         lname:'Tenny',
//         email:'atennye@rediff.com',
//         gender:'Female',
//         ipaddress:'224.48.225.77' 

//     }

// ]


// var data = [
//     'Sianna','Fantini','sfantini0@jalbum.net','Female','17.187.75.7',
//     'Ami','Siggin','asiggin1@auda.org.au','Female','92.136.232.25',
//     'Kandy','Bernardoni','kbernardoni2@infoseek.co.jp','Female','108.122.66.8',
//     'Gus','Oswal','goswal3@ucoz.ru','Female','101.216.78.8',
//     'Laurie','Upward','lupward4@issuu.com','Male','92.123.107.',
//     'Melitta','Vallery','mvallery5@nydailynews.com','Female','255.228.200.8',
//     'Francesco','Danielczyk','fdanielczyk6@yelp.com','Male','253.12.207.4',
//     'Tedmund','Misken','tmisken7@imgur.com','Male','216.241.133.',
//     'Koralle','Griffithe','kgriffithe8@simplemachines.org','Female','108.21.21.11',
//     'Major','Yewman','myewman9@prnewswire.com','Male','142.167.101.22',
//     'Dell','Hutcheon','dhutcheona@forbes.com','Male','97.208.109.17',
//     'Halley','Doward','hdowardb@redcross.org','Female','58.97.154.14',
//     'Kati','Yakushkev','kyakushkevc@washington.edu','Female','34.166.161.14',
//     'Sargent','Hulatt','shulattd@w3.org','Male','99.235.176.11',
//     'Aleta','Tenny','atennye@rediff.com','Female','224.48.225.77' 
//     ];


    // var people = [
    //     {
    //         fname: 'Bryce',
    //         lname: 'Mullican'
    //     }
    //     {
    //         fname: 'Herbert',
    //         lname: 'Brown'
    //     }
    // ];
    
    // people.forEach(function(person) {
    //     person.address = '123 Sesame Street';
    //     console.log(person.fname);
    
    // });

    // data.forEach(function(fname){
    //     if(data) {
    //         console.log('Hey');
    //     }
    // });



// for loop you can break out

// for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i];
//     console.log(element);
//     if (element == 'dolor') {
//         i = data.length
//     }
// }


    //need to loop til i get ip at index 4
    //seperate 0 = fname,1 = lname , 2 = email, 3 = gender, 4 = ipaddress.
    //every 4th index it will start over organizing.


    // console.log(data[0],data[1],data[2],data[3],data[4]);
    // console.log(data[5],data[6],data[7],data[8],data[9]);
    // console.log(data[10],data[11],data[12],data[13],data[14]);
    // console.log(data[15],data[16],data[17],data[18],data[19]);
    // console.log(data[20],data[21],data[22],data[23],data[24]);
    // console.log(data[25],data[26],data[27],data[28],data[29]);
    // console.log(data[30],data[31],data[32],data[33],data[34]);
    // console.log(data[35],data[36],data[37],data[38],data[39]);
    // console.log(data[40],data[41],data[42],data[43],data[44]);
    // console.log(data[45],data[46],data[47],data[48],data[49]);
    // console.log(data[50],data[51],data[52],data[53],data[54]);
    // console.log(data[55],data[56],data[57],data[58],data[59]);
    // console.log(data[60],data[61],data[62],data[63],data[64]);
    // console.log(data[65],data[66],data[67],data[68],data[69]);
    // console.log(data[70],data[71],data[72],data[73],data[74]);
    // var client = [

    // ]
    
    // for (let i = 0; i < data.length; i++) {
    //     data.push(
    //         {
    //             fname: data[i],
    //             lname: data[i + 1],
    //             email: data[i + 2],
    //             gender: data[i + 3],
    //             ipaddress: data[i + 4]
    //         }
    //     )
    //     i += 3; 
    // }
    // console.log(data);


//theres a difference between obj2['fname'] && obj2[fname] <== targets a variable
//but var fname = 'fname' <== still gives us Michael.
// but obj2.fname will not work comes out undefined. it cannot transport variable through dot notation.


// console.log(obj2['fname']);

// Method - a function that is attached to something.

// var obj3 = {
//     arr: [1,2,3],
//     name: 'Michael Valencia',
//     sum: function (num1,num2) {
//         return num1 + num2;
//     },
//     bool: true,
//     num:42,
//     obj: {
//         num1:40,
//         num2:2
//     }
// };

// console.log(obj3.arr[1]);
// console.log(obj['arr'][1]);

// if (obj3.bool) {
//     console.log('Yo!');
// }

// var sum = obj3.sum;
// var total = sum(obj3.obj.num1,obj3.obj.num2);
// console.log(total);

// Need to loop all the records 
// for each 5 records add to object
// push into new array

// var peopleData = [];

// for (let i = 0; i < data.length; i++) {
//     peopleData.push({
//         fname: data[i],
//         lname: data[i + 1],
//         email: data[i + 2],
//         sex: data[i + 3],
//         ip: data[i + 4]
//     });
//     i += 4;
// }

// console.log(peopleData);

// var peopleData = [];

// for (let i = 0; i < data.length; i += 5) {
//     peopleData.push({
//         fname: data[i],
//         lname: data[i + 1],
//         email: data[i + 2],
//         sex: data[i + 3],
//         ip: data[i + 4]
//     });
// }

// console.log(peopleData);

// var peopleData = [];

// for (let i = 0; i < data.length; i++) {
//     if (i % 5 == 0) {        
//         peopleData.push({
//             fname: data[i],
//             lname: data[i + 1],
//             email: data[i + 2],
//             sex: data[i + 3],
//             ip: data[i + 4]
//         });
//     }
// }

// console.log(peopleData);

// var peopleData = [];
// for (let i = 0; i < data.length; i++) {
//     peopleData.push({
//         fname: data[i],
//         lname: data[i + 1],
//         email: data[i + 2],
//         sex: data[i + 3],
//         ip: data[i + 4]
//     });
//     data = data.slice(4, data.length);
// }
// console.log(peopleData);

// var peopleData = [];
// var counter = 0;
// var arrCounter = 0;
// data.forEach(element => {
//     let val = counter % 5;
//     if (val == 0) {
//         peopleData.push({ fname: element });
//     } 
//     else if (val == 1) {
//         // peopleData.push({ lname: element });
//         peopleData[arrCounter].lname = element;
//     } 
//     else if (val == 2) {
//         peopleData[arrCounter].email = element;
//     } else if (val == 3) {
//         peopleData[arrCounter].sex = element;
//     } else if (val == 4) {
//         peopleData[arrCounter].ip = element;
//     }

//     counter++;
//     if (counter % 5 == 0) {
//         arrCounter++;
//     } 
// });
// console.log(peopleData);

// var peopleData = [];
// var arrCounter = 0;
// data.forEach(function (element, idx) {
//     let val = idx % 5;
//     if (val == 0) {
//         peopleData.push({ fname: element });
//     } 
//     else if (val == 1) {
//         peopleData[arrCounter].lname = element;
//     } else if (val == 2) {
//         peopleData[arrCounter].email = element;
//     } else if (val == 3) {
//         peopleData[arrCounter].sex = element;
//     } else if (val == 4) {
//         peopleData[arrCounter].ip = element;
//     }

//     if (idx != 0 && idx % 5 == 0) {
//         arrCounter++;
//     } 
// });
// console.log(peopleData);

// var newData = ['Bryce','Mullican','42','Herbert','Brown','39','Javier','Peraza','35']

// var arrPeople = [];
// open loop
// for (let i = 0; i < newData.length; i++) {
    // ? i == 3
    // i = i + 2;
    // }
    // close the loop
    
// arrPeople.push({
//     fname: newData[i], // to change these numbers?
//     lname: newData[i + 1],
//     age: newData[i + 2]
// });
// arrPeople.push({
//     fname: newData[3],
//     lname: newData[4],
//     age: newData[5]
// });
// arrPeople.push({
//     fname: newData[6],
//     lname: newData[7],
//     age: newData[8]
// });
// console.log(arrPeople);


var challengeData = [
    'Sianna','Fantini','sfantini0@jalbum.net','Female','17.187.75.7',
    'Ami','Siggin','Female','92.136.232.25',
    'Kandy','Bernardoni','kbernardoni2@infoseek.co.jp','Female','108.122.66.8',
    'Gus','Oswal','goswal3@ucoz.ru','Female','101.216.78.8',
    'Laurie','Upward','lupward4@issuu.com','92.123.107.',
    'Melitta','Vallery','mvallery5@nydailynews.com','Female','255.228.200.8',
    'Francesco','Danielczyk','Male','253.12.207.4',
    'Tedmund','Misken','216.241.133.',
    'Koralle','Griffithe','kgriffithe8@simplemachines.org','108.21.21.11',
    'Major','Yewman','myewman9@prnewswire.com','Male','142.167.101.22',
    'Dell','Hutcheon','dhutcheona@forbes.com','Male','97.208.109.17',
    'Halley','Doward','Female','58.97.154.14',
    'Kati','Yakushkev','kyakushkevc@washington.edu','34.166.161.14',
    'Sargent','Hulatt','shulattd@w3.org','Male',
    'Aleta','Tenny','Female','224.48.225.77' 
];

var peopleData2 = [];

    for (let i = 0; i < challengeData.length; i++) {
        if (peopleData2.sex == 'Male' || peopleData2.sex == 'Female') {
            peopleData2.push({ip: challengeData[i + 4]});
        }
    peopleData2.push({
        fname: challengeData[i],
        lname: challengeData[i + 1],
        email: challengeData[i + 2],
        sex: challengeData[i + 3],
        ip: challengeData[i + 4]
    });
    i += 4;

}

console.log(peopleData2);


//regex


