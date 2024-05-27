// function logNextCharacter(str) {
//   let array = str.split("");
//   console.log(array);
  
//   for (let i = 0; i < array.length; i++) {
//     if(array[i] == array[i+1]){
//       console.log("no rw");
//     } else {
//       console.log(" yes nrw");
//     }
//   }
// }

// logNextCharacter("abaa");


//   // if(array[i] == array[i+1]){
//   //   return "this is not a isogram"
//   // } else {
//   //   return "this is a isogram"
//   // }

function flickSwitch(arr){
   let arraz = [];
  let storeindex = 0;
for(let i = 0; i <arr.length; i++){

  if('flick' === arr[i]){
storeindex += i;
break;
  } else {
    arraz.push(arr[i])
  }
arraz[i] = 'true';
}
for(let i = storeindex; i<arraz ){}
return [storeindex,arraz];
}

let storearray = ['codewars','code','flick', 'wars'];
 console.log ( flickSwitch(storearray) )