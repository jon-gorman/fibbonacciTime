firstHourArray= []
function getHourArray(){
  let now = new Date();
  let hour = now.getHours()
  console.log(hour, 'this is the getHours time')
  if((hour-12 === 0)||(hour-24===0)){
    firstHourArray=[5,3,2,1,1]
    console.log(firstHourArray)
  }
  if((hour-11===0) || (hour-23===0)){
    firstHourArray=[5,3,2,1,'']
    console.log(firstHourArray)

  }
  if((hour-10===0) || (hour-22===0)){
    firstHourArray=[5,3,2,'','']
    console.log(firstHourArray)
    return firstHourArray
  }
  if((hour-9===0) || (hour-21===0)){
    firstHourArray=[5,3, '', 1, '']
    console.log(firstHourArray)
    return firstHourArray
  }
  if((hour-8===0) || (hour-20===0)){
    firstHourArray=[5,3,'','','']
    console.log(firstHourArray)
    return firstHourArray
  }
  if((hour-7===0) || (hour-19===0)){
    let firstHourArray=[5,2,'','','']
    console.log(firstHourArray)
    return firstHourArray
  }
  if((hour-6===0) || (hour-18===0)){
    firstHourArray=[5, '', '', 1, '']
    console.log(firstHourArray)
    return firstHourArray
  }
  if((hour-5===0) || (hour-17===0)){
    firstHourArray=[5,'','','','']
    console.log(firstHourArray )
    return firstHourArray
  }
  else if((hour-4===0) || (hour-16===0)){
    firstHourArray=[3,'', '', 1, '']
    console.log(firstHourArray)
    return firstHourArray
  }
  if((hour-3===0) || (hour-15===0)){
    firstHourArray=[3,'','','','']
    console.log(firstHourArray)
    return firstHourArray
  }
  if((hour-2===0) || (hour-14===0)){
    firstHourArray=[2,'','','','']
    console.log(firstHourArray)
    return firstHourArray
  }
  if((hour-1===0) || (hour-13===0)){
    firstHourArrayy=['', '', '', 1, '']
    console.log(firstHourArray)
    return firstHourArray
  }
}

firstMinuteArray = []

function getMinuteArray(){
  let now = new Date()
  let minute = Math.floor(now.getMinutes()/5)
  console.log(minute, 'this is the getMinutes time')
  if(minute===0){
    firstMinuteArray=[]
    consolel.log(firstMinuteArray)
  }
  if(minute===1){
    firstMinuteArray = ['', '', '', 1,'']
    console.log(firstMinuteArray)
  }
  if(minute===2){
    firstMinuteArray = [2,'','','','']
    console.log(firstMinuteArray)
  }
  if(minute===3){
    firstMinuteArray = [3,'','','','']
    console.log(firstMinuteArray)
  }
  if(minute===4){
    firstMinuteArray = [3, '', '', 1, '']
    console.log(firstMinuteArray)
  }
  if(minute===5){
    firstMinuteArray = [5,'','','','']
    console.log(firstMinuteArray)
  }
  if(minute===6){
    firstMinuteArray = [5, '', '', 1, '']
    console.log(firstMinuteArray)
  }
  if(minute===7){
    firstMinuteArray = [5,2,'','','']
    console.log(firstMinuteArray)
  }
  if(minute===8){
    firstMinuteArray = [5,3,'','','']
    console.log(firstMinuteArray)
  }
  if(minute===9){
    firstMinuteArray = [5,3, '', 1, '']
    console.log(firstMinuteArray)
  }
  if(minute===10){
    firstMinuteArray = [5,3,2,'','']
    console.log(firstMinuteArray)
  }
  if(minute===11){
    firstMinuteArray = [5,3,2,1,'']
    console.log(firstMinuteArray)
  }

}







// function setHour(){
//   const now = new Date();
//   let hour = now.getHours();
//   console.log(hour, "hours!");
//   //case for pm times
//   if(hour >= 13){
//       let pmHour = hour-12;
//       console.log(pmHour)
//       return pmHour
//   }
//   //case for 12 am
//   if (hour === 0){
//     hourArray.push([5,3,2,1,1])
//     console.log(hour, "12 o'clock")
//     return hour
//   }
//   return hour
// }setInterval(setHour, 150000);
//
// const onesHourArray = []
// const hourArray = [];
// let firstHourArray = []
// function timeSumHour(fibArray, H) {
//
//   for(let i = 0; i< fibArray.length; i++) {
//     if(H==fibArray[i]){
//       hourArray.push([fibArray[i]])
//     }
//     for(let j = i+1;  j < fibArray.length; j++) {
//       if(H==fibArray[i] + fibArray[j]) {
//         hourArray.push([fibArray[i], fibArray[j]])
//       }
//       for(let k = i+1+1; k < fibArray.length; k++){
//         if (H == fibArray[i] + fibArray[j] + fibArray[k]){
//           hourArray.push([fibArray[i], fibArray[j], fibArray[k]])
//         }
//         for(let l = i+1+1+1; l<fibArray.length; l++){
//           if (H == fibArray[i] + fibArray[j] + fibArray[k] + fibArray[l]){
//             hourArray.push([fibArray[i], fibArray[j], fibArray[k], fibArray[l]])
//           }
//           for(let m = i+1+1+1+1; m<fibArray.length; m++) {
//             if (H == fibArray[i] + fibArray[j] + fibArray[k] + fibArray[l] + fibArray[m]) {
//               hourArray.push([fibArray[i], fibArray[j], fibArray[k], fibArray[l], fibArray[m]])
//               }
//             }
//           }
//         }
//       }
//     }
//   //Checking for the ones
//   for(let i=0; i < hourArray[0].length; i++){
//     if(hourArray[0][i] === 1){
//       onesHourArray.push(hourArray[0][i] = 1)
//     }
//   }console.log(onesHourArray, "ones hours")
//
//     for(let i=0; i < hourArray[0].length; i++){
//       firstHourArray.push(hourArray[0][i])
//     }
//   console.log(firstHourArray, "this is 1st hour Array")
//   return firstHourArray
// }
//
//
// function setMinute(){
//   const now = new Date();
//   const minute = now.getMinutes()
//   console.log(minute, "first console of minute")
//   const seconds = now.getSeconds();
//   console.log(Math.floor(minute/5) + '.' + seconds)
//   let rounded = Math.floor(minute/5);
//   return rounded
// }setInterval(setMinute, 1000);
//
// const onesMinuteArray = []
// const minuteArray = [];
// const firstMinuteArray = [];
// function timeSumMinute(fibArray, M) {
//   for(let i = 0; i< fibArray.length; i++) {
//     if(M==fibArray[i]){
//       minuteArray.push([fibArray[i]])
//     }
//     for(let j = i+1;  j < fibArray.length; j++) {
//       if(M==fibArray[i] + fibArray[j]) {
//         minuteArray.push([fibArray[i], fibArray[j]])
//       }
//       for(let k = i+1+1; k < fibArray.length; k++){
//         if (M == fibArray[i] + fibArray[j] + fibArray[k]){
//           minuteArray.push([fibArray[i], fibArray[j], fibArray[k]])
//         }
//         for(let l = i+1+1+1; l<fibArray.length; l++){
//           if (M == fibArray[i] + fibArray[j] + fibArray[k] + fibArray[l]){
//             minuteArray.push([fibArray[i], fibArray[j], fibArray[k], fibArray[l]])
//           }
//           for(let m = i+1+1+1+1; m<fibArray.length; m++) {
//             if (M == fibArray[i] + fibArray[j] + fibArray[k] + fibArray[l] + fibArray[m]) {
//               minuteArray.push([fibArray[i], fibArray[j], fibArray[k], fibArray[l], fibArray[m]])
//             }
//           }
//         }
//       }
//     }
//   }
//   //Checking for the ones
//   for(let i=0; i < minuteArray[0].length; i++){
//     if(minuteArray[0][i] === 1){
//       onesMinuteArray.push(minuteArray[0][i] = 1)
//     }
//   }console.log(onesMinuteArray, "ones ")
//   for(let i=0; i< minuteArray[0].length; i++){
//     firstMinuteArray.push(minuteArray[0][i])
//   }
//   console.log(firstMinuteArray, "this is 1st minute Array")
//   return firstMinuteArray
// }

