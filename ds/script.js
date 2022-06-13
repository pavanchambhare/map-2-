
let i = 1;

while( i <= 10){
    console.log("the Numbar is" , + i)
    i++
}

console.log("")

let num = [ 2 , 5 , 8, 4, 6];
num.splice( 1 ,2 )
console.log(num)


let nam = ['pavan', 'mmahesh', 'durga']
nam.splice(2)
console.log(nam)


// Use .shift to remove the first item of an array.

let array = [ 1 , 5, 6, 8, 7]
array.shift()
console.log(array)

// Further .pop is used to remove the last item from an array.
var namb = [1, 2, 3];
namb.pop()
console.log(namb)

var mh = [1, 2, 3];
mh.push(4, 5, 6);
console.log(mh)



let names = ['pavan' , 'dar' ,'pikachu', 'pavan']
console.log(names[3]);
console.log(names.length);

for (let el of names) {
    console.log(el)

}
names.push('Hello');
console.log(names)

const darIndex = names.findIndex(el => el ==  'dar');
console.log(names);
names.splice(1)
console.log(names)



let  node = new Set();

node.add(5)
node.add('mahesh')
node.add('mahesh')
node.add('pavan')
console.log(node.has())

node.delete('pavan')
console.log(node)

let person = {
    firstName : 'Pavan',
    lastName : 'chambhare',
    age : 23,
    bloodGroup : 'A+',
    greet(){
        console.log('HI , I AM '  + this.firstName);
    },
}
 console.log(person)
delete person.age
console.log(person);
person.greet();


const map1 = new Map();

map1.set('pav'  , 'an');
map1.set(1 , 'chambhare');

// map1.clear();
console.log(map1)