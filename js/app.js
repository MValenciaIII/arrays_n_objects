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
