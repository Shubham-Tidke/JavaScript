
//----Sets----
/*const ids = new Set(['abc',2,3,4]);

//ids.entries gives value twice
for(const entry of ids.entries())
{
  console.log(entry);
}
//ids.values gives value once
for(const entry of ids.values())
{
  console.log(entry);
}

//methods
ids.add(5);
ids.has(3);
ids.delete('abc');
console.log(ids);
*/
//----Maps----
const person1 ={name :'Shubham'};
const person2 ={name :'Raghav'};
const person3 ={name:'Akshay'}
const personData = new Map([[person1,[{value:10,date:'today'}]],
                          [person2,[{value:20,date:'yesterday'}]]]);
personData.set(person3,[{value:30,date:'tomorrow'}]);
console.log(personData);
//console.log(personData.get(person2));
console.log(personData.has(person1));
//personData.entries gives 'key' as first element and 'Value' as second element.
for(const entry of personData.entries()){
  console.log(entry);
}
//personData.values gives only keys
for(const entry of personData.keys()){
  console.log(entry);
}
//personData.values gives only values
for(const entry of personData.values()){
  console.log(entry);
}
