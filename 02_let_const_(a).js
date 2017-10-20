"use strict"

var a = 'Test1';

function testVar(){
  var a = 30;
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

testvar(); # calling it!!!

<!--
  Output:
  50
  50
    -->


function testLet(){
  let a = 30;  # used let
  if(true){
    let a = 50;  # used let
    console.log(a); #50
  }
  console.log(a);  #30
}

testLet();

<!--
  Output:
  50
  30
    -->


const colors = [];

colors.push('red');
colors.push('blue');

colors = 'Green'; # throws error..

console.log(colors)
