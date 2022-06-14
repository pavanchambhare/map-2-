let resultData = new Map();

resultData.set('pavan', 23);
resultData.set('mahesh' , 25)

const  surat = {name:'gujarat', population : 5000000};

resultData.set(surat , 0.50)

for( const el of resultData){
console.log(el);
}

console.log(resultData.has('pavan'))
console.log(resultData.has('mahesh'))

resultData.delete('pavan')
console.log(resultData);


let pav = new Map();

pav.set('mayur' , 15)
pav.set('harise' , 75) 

for(const el of pav){
    console.log(el);
}
console.log(pav)

pav.delete('harise')
console.log(pav.has('mayur'))
