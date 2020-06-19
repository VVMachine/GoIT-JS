// const findBestEmployee = function (employees) {
//   const keys = Object.keys(employees);
//   let bestEmployee;
//   let maxTasks = 0;

//   for (const key of keys) {
//     if (employees[key] > maxTasks) {
//       maxTasks = employees[key];
//       bestEmployee = key;
//     }
//   }

//   return `${bestEmployee} : ${maxTasks}`;
// };




const findBestEmployee = function(employees) {

  const deals = Object.keys (employees); 

  let bestEmployee = 0;
  
for( const deal of deals){
  
  if (employees[deal] > bestEmployee){
    
    bestEmployee = employees[deal]; 
  
  }
  
}

for( const deal of deals){

  if (employees[deal] === bestEmployee){
   
   return deal;
  }

}
}





console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
