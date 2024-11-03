//Task 1


 // isArrayLengthOdd(numbers):
function isArrayLengthOdd(numbers) {
    // Your code here
// to do: figure out : even or odd
//use modulos ( % ) if remannant its odd (true) if no remanent its even (false)
    
//receives array `numbers` 
// returns true if ((array)) has an ((odd)$ modulus %=the value of the resuduel number of division) ((number of elements)$.length)
//: to identify it >> const
    const numbersArray = numbers.length;
    if (numbersArray % 2) {
        //like saying if (0) {false}
        return true;
    } else {
        //- returns false otherwise
        return false;
    }

 }
 // state what the function returns with these inputs
 console.log(isArrayLengthOdd([1, 2, 2]));

 //task 2

 function isArrayLengthEven(numbers) {
    const numbersArray = numbers.length;
    if (numbersArray % 2) {
         return false;
    } else {
      return true;
    }
return !isArrayLengthOdd(numbers);
}
console.log(isArrayLengthEven([1, 2]));

//task 3

function addLailaToArray(instructors) {
//copy array instructors
const NewInstructors = instructors;
// add "Laila" to array by using the built it function .push
NewInstructors.push("Laila");
// return new array
return NewInstructors;


}
console.log(addLailaToArray(["mshary", "hasan"]));



//task 4
function eliminateTeam(team) {
    // remove last elemen from teams by using the built it function .pop it removes the last element in the array
    // .pop() removes the last element in an array and keep its value held, and by const ## = @@.pop it will show the value of the element it has removed by const ##
    const lastTeam = team.pop();
    //return teams
    return lastTeam;

}

console.log(eliminateTeam(["brazil", "germany","italy"]));



//challenge 1
function secondHalfOfArrayIfItIsEven(fruits) {
    if (isArrayLengthEven(fruits)) {
        return fruits.slice(fruits.length / 2, fruits.length);
    } else {
        // odd length of array
        return [];
    }
}
console.log(secondHalfOfArrayIfItIsEven(["orange","banana","kiwi","pear"]));


//challenge 2

function youGottaCalmDown(shout) {
    //"Hello" ---> ["h","e","l","l","o"]
    if (shout[shout.length -1] !== "!") {
        return shout;
    }
    const oms = shout.slice(0, shout.indexOf("!") + 1);
    
    return oms;
    //shout.indexOf("!")
}

// ["h","e","l","l","o","!","!","!","!"]
console.log(youGottaCalmDown("hello!!!!"));

// const exampleText = "Hello";
// console.log(exampleText.length);