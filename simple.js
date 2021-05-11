// console.log(9-"5");

// var a = "a" - "b";
// console.log(a);

// console.log(NaN==NaN);
// console.log(Number.NaN==NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

// var a = 5;
// var b = 5;
// console.log(a==b);
// console.log("ab",a==b);

// var ab,cd;
// console.log(ab==cd);

// console.log(3**3);
// console.log(10**-2);


// console.log(2+"a");

// var a = 2;
// var b = 3;
// a,b = b,a;
// console.log("a:",a);
// console.log("b:",b);

// var a = 5;
// var b = '5';
// console.log(a==b);
// console.log(a===b);

// var age = 18;
// var vote = (age>=18)?"vote":"No";
// console.log(vote);
// console.log((age>=18)?"vote":"No");




/*


ES6



*/




/* 

 function


 */

// var sums = function(a,b)
// {
//     return (a+b);
// }
// var ans1 = sums(10,20); //when function assign to variable called function expression
// var ans2 = sums(5,10);
// console.log(ans1>ans2);

// {
//     var a = 10;
//     let a = 10;
// }
// console.log(a);


/* 

template literal or template string


 */
// for(let num=1;num<=10;num++)
// {
//     let tableof = 5;
//     console.log(`${tableof} * ${num} = ${tableof*num}`);
// }


/* 

fat arrow function


 */

// const sum = (a,b) =>{
//     return `sum : ${a+b}`;
// }

// var ans = sum(5,10);
// console.log(`ans is ${ans}`);  

// console.log(ans());
// function ans()
// {
//     console.log("ok");
//     console.log("answer called");
// }

// const sum = () => `sum is ${(a=3)+(b=5)}`;
// console.log(sum());

/* 

Array


 */

// let abc = [13,'abc',true];
// console.log(abc[2]);

// let abc = new Array(3);
// console.log(abc.length);
// abc[0] = 13;
// abc[1] = 'abc';
// abc[2] = true;
// abc[3] = false;
// console.log(abc);


// let a = [12,23,'abc',true];
// for (temp in a)
// {
//     console.log(a[temp]);
// }

// let a = [12,23,'abc',true];
// for(temp of a){console.log(temp);}

// var a = [12,23,'abc',true];
// a.forEach(function(elements){
//     console.log(elements);
// });
// console.log("fat fun");
// a.forEach((element,index,array) => {
//     console.log(`${element} is at ${index} in ${array}`);
// });

/* 
methods  of Array (searching and filter)
*/

/*  indexof   */

// var names = [1,99,5.4,'abc','def',true,'abc'];
// console.log(names.indexOf('abc'));


/* lastindexof */

// var names = [1,99,5.4,'abc','def',true,'abc'];
// console.log(names.lastIndexOf('abc'));


/* includes */

// var names = [1,99,5.4,'abc','def',false,'abc'];
// console.log(names.includes(false));

// var names = [1,99,5.4,'abc','def',true,'abc'];
// console.log(names.includes(1,4));


/* find */

// var names = [100,420,500,1000,600,300,1100,1200];
// console.log(names.find((currentval) => currentval<600));

/* findindex  */

// var names = [100,420,500,1000,600,300,1100,1200];
// console.log(names.findIndex((currentval) => currentval>1500));


/* filter */

// var names = [0,100,420,500,1000,600,300,1100,1200];
// console.log(names.filter( (val,index) => val<600 ));

/* sort  */

// var names = [1,99,5.4,'abc','def',true,'abc',NaN,undefined];
// var names = [100,420,500,1000,600,300,1100,1200];
// var val = [ 'March', 'Jan', 'Feb', 'Dec'];
// console.log(names.sort());
// console.log(names.sort( (a,b) => b-a ));
// console.log(names.sort( (a,b) => {
//     if(a>b){return 1;}
//     else if(b>a){return -1;}
//     else{return 0;}
// }  ));
// console.log(val.sort());

/* push */

// var names = [100,200];
// console.log(names.push(300));


/* unshift */

// var names = [100,420];
// console.log(names.unshift(200,300));
// console.log(names);


/* pop */

// var names = [100,420,22,900,22];
// console.log(names.pop());
// console.log(names);


/* shift */

// var names = [100,420,22,900,22];
// console.log(names.shift());
// console.log(names);


/* splice */

// const month = ['jan','march','april','june','july'];

// // at the end 
// month.splice(month.length,0,"Dec");
// console.log(month);

// // return value of splice
// console.log(month.splice(month.length,0,"Dec"));


// // update 
// const updateMonth = month.splice(1,1,"March");
// console.log(month,updateMonth);

// delete value 
// const updateMonth = month.splice(1,1);
// console.log(month,updateMonth);



/* map */

// const arr1 = [1,4,9,16,25];
// let newarr1 = arr1.map((ce,ind,arr) => ce>9) ;
// console.log("arr1: ",arr1);
// console.log("newarr1: ",newarr1);

// let arr = [25,36,49,64,81];
// let arr1 = arr.map((ele) => Math.sqrt(ele));
// console.log(arr1);

// let arr = [2,3,4,6,8];
// let arr1 = arr.map((ele) => ele*2 ).filter((ele)=> ele>10);
// console.log(arr1);




/* reduce */



