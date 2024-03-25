// Write your solution here!
const cats=["Milo","Otis","Garfield"]

function destructivelyAppendCat(name="Arnold"){
    cats.push(name)
}
function destructivelyPrependCat(name="Justin"){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name="Patrick"){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name="Lucy"){
    cats.shift(name)
}
function appendCat(name){
    return [...cats, name]
}
function prependCat(name){
    return [name,...cats]
}
function removeLastCat () {
    return cats.slice(0,2);
}
function removeFirstCat(name){
    return cats.slice(1)
}
