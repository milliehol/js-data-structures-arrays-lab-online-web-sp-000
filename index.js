// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push(name);
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
  drivers.pop(name);
}
function destructivelyRemoveFirstDriver(){
  drivers.shift(name);
}
function appendDriver(name){
  const nDriver = [...drivers, name];
}
function prependDriver(name){
  const nDriver = [name, ...drivers];
}
function removeLastDriver(){
  drivers.push(name);
}
function removeFirstDriver(){
  drivers.push();
}
