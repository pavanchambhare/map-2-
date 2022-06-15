// let resultData = new Map();

// resultData.set('pavan', 23);
// resultData.set('mahesh' , 25)

// const  surat = {name:'gujarat', population : 5000000};


// resultData.set(surat , 0.50)

// for( const el of resultData){
// console.log(el);
// }

// console.log(resultData.has('pavan'))
// console.log(resultData.has('mahesh'))

// resultData.delete('pavan')
// console.log(resultData);


// let pav = new Map();

// pav.set('mayur' , 15)
// pav.set('harise' , 75) 

// for(let  [k , v] of pav){
//     console.log(pav);
// }
// console.log(pav)

// pav.delete('harise')
// console.log(pav.has('mayur'))


let maza = new Map();
maza.set('naruto' , 32)
maza.set('boruto', 25)

for(let [k,v] of maza){
    console.log(maza)
 
}
// Copy the first two array elements to the last two array elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0); 
console.log(fruits)