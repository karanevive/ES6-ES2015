"use strict"

#In JavaScript, parameters of functions default to undefined

# 1st thing
function greet($greeting = 'Hello World'){
  console.log($greeting);
}

greet();


# More example of default params
# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
function test(num = 1) {
  console.log(typeof num);
}

test();          // 'number' (num is set to 1)
test(undefined); // 'number' (num is set to 1 too)

// test with other falsy values:
test('');        // 'string' (num is set to '')
test(null);      // 'object' (num is set to null)



let args1 = [1,2,3];
let args2 = [4,5,6];

function test(){
  console.log(args1+','+args2);
}

//test.apply(null, args);
test(...args1,...args2);
