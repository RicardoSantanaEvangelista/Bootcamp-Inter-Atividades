/*const apple = {
    value: 2,
};

const orange = {
    value: 3,
};

function mapComThis(arr, thisArg){
    return arr.map(function (item){
       return item * this.value;
    }, thisArg);
}


const numbers = [1 ,2];

console.log(mapComThis("this -> Apple" + numbers, apple));

console.log(mapComThis("this -> Orange" + numbers, orange));*/


/*function mapSemThis(arr){
   return arr.map(function (item){
        return item * 2;
    });
}


const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));


function filterPares(arr){
    return arr.filter(callBack);
}

function callBack(item){
    return item % 2 === 0;
}

const meuArrey = [1,2,3,4,5,6,7,8,9,10];


console.log(filterPares(meuArrey));





