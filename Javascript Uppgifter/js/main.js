function add(num1, num2) {
    return num1 + num2;
};

function moreThan(arr) {
    return arr >= 20;
} 

function uppgift1() {
    var carType = "Volvo";  // string
    let isOnline = true;    // bool
    const maxSpeed = 100;   // num
    // logga ut all info i console, så lärare kan se utan att behöva kodinspektera
    console.log("-----------------------------------------------------------------")
    console.log("carType = " + carType + "." + " Type = " + typeof carType)
    console.log("isOnline = " + isOnline + "." + " Type = " + typeof isOnline)
    console.log("maxSpeed = " + maxSpeed + "." + " Type = " + typeof maxSpeed)
    console.log("-----------------------------------------------------------------")
};

function uppgift2() {
    let isRunning = true;   // bool
    let numNum = 10;        // num
    let letters = "abcde";  // string
    let mathiasKoerth = {energy:"5%", age:"23", game:"OldSchool Runescape"};    // obj
    let games = ["Runescape", "Diablo3", "World of Warcraft"];                  // array
    // logga ut all info i console, så lärare kan se utan att behöva kodinspektera
    console.log("-----------------------------------------------------------------")
    console.log("isRunning = " + isRunning + "." + " Type = " + typeof isRunning)
    console.log("numNum = " + numNum + "." + " Type = " + typeof numNum)
    console.log("letters = " + letters + "." + " Type = " + typeof letters)
    console.log("mathiasKoerth = " + mathiasKoerth + "." + " Type = " + typeof mathiasKoerth)
    console.log("games = " + games + "." + " Type = " + typeof games)
    console.log("-----------------------------------------------------------------")
};

function uppgift3() {
    // låter användaren skriva in egna värden
    let numeroUno = prompt("Please enter the first number: ", 1); 
    let numeroDos = prompt("Please enter the second number: ", 1);
    // konverterar från str till int
    let numOfUno = parseInt(numeroUno);
    let numOfDos = parseInt(numeroDos);
    // skriver ut i console
    console.log("-----------------------------------------------------------------")
    console.log(add(numOfUno, numOfDos));
    console.log("-----------------------------------------------------------------")
};

function uppgift4() {
    // loggar datum i console
    console.log(Date());
};

function uppgift5() {
    let dog = {
        name: "Gosse",
        age: 9,
        numOfLegs: 4,
    }
    // loggande av ovanstående objekt samt dess värden
    console.log("-----------------------------------------------------------------")
    console.log(dog)
    console.log(dog.name)
    console.log(dog.age)
    console.log(dog.numOfLegs)
    console.log("-----------------------------------------------------------------")
};

function uppgift6() {
    console.log("-----------------------------------------------------------------")
    // array med intergers samt loggande 
    let arr = [4, 8, 15, 16, 23, 42];
    console.log("The array is: " + arr)
    // filtrering av array samt loggande
    let newArr = arr.filter(moreThan)
    console.log("Filtered array, above 20 is: " + newArr)
    // dubbla värden i föregående array samt loggande
    let doubleArr = newArr.map(x => x * 2)
    console.log("Previous array x 2: " + doubleArr)
    // forEach implementation av föregående array samt loggande
    console.log("forEach implementation:")
    let forEachArr = doubleArr.forEach(element => console.log(element))
    console.log("-----------------------------------------------------------------")
};

function uppgift7() {
    console.log("-----------------------------------------------------------------")
    let loopTimes = 1;
    console.log("Looping to 6.")
    while (loopTimes <= 6) {
        console.log("Looped " + loopTimes + " times!");
        loopTimes++;
    }
    console.log("--------------------")
    let loopTimesHalf = 1;
    console.log("Looping to only 3.")
    while (loopTimesHalf <= 3) {
        console.log("Looped " + loopTimesHalf + " times!");
        loopTimesHalf++;
    }
    console.log("--------------------")
    let loopTimesAll = 1;
    console.log("Looping to 3, then two times 'almost done' and lastly 'done'")
    while (loopTimesAll <= 3) {
        console.log("Looped " + loopTimesAll + " times!");
        loopTimesAll++;
    }
    while (loopTimesAll < 6) {
        console.log("Almost done..");
        loopTimesAll++;
    }
    if (loopTimesAll == 6) {
        console.log("Done!");
        loopTimesAll++;
    }
    console.log("-----------------------------------------------------------------")
};