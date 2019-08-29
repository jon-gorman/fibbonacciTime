 firstHourArray= []
function getHourArray(){
  let now = new Date();
  let hour = now.getHours()
  console.log(hour, 'this is the getHours time')
  if((hour-12 === 0)){
    firstHourArray=[5, 3, 2, 1, 1];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-11===0)){
    firstHourArray=[5, 3, 2, 1, ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-10===0)){
    firstHourArray=[5, 3, 2, '', ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-9===0)){
    firstHourArray=[5, 3, '', 1, ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-8===0)){
    firstHourArray=[5, 3, '', '', ''];
    console.log(firstHourArray)
    return firstHourArray
  }
   if((hour-7===0)){
     firstHourArray=[5, '', 2, '', ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-6===0)){
    firstHourArray=[5, '', '', 1, ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-5===0)){
    firstHourArray=[5, '','','',''];
    console.log(firstHourArray );
    return firstHourArray
  }
   if((hour-4===0)){
    firstHourArray=['', 3, '', 1, ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-3===0)){
    firstHourArray=['', 3, '', '', ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-2===0)){
    firstHourArray=['','',2,'',''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-1===0)){
    firstHourArray=['', '', '', 1, ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-24===0)){
    firstHourArray=[5, 3, 2, 1, 1];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-23===0)){
    firstHourArray=[5, 3, 2, 1, ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-22===0)){
    firstHourArray=[5, 3, 2, '', ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-21===0)){
    firstHourArray=[5, 3, '', 1, ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-20===0)){
    firstHourArray=[5, 3, '', '', ''];
    console.log(firstHourArray)
    return firstHourArray
  }
   if((hour-19===0)){
    firstHourArray=[5, '', 2, '', ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-18===0)){
    firstHourArray=[5, '', '', 1, ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-17===0)){
    firstHourArray=[5, '','','',''];
    console.log(firstHourArray );
    return firstHourArray
  }
   if((hour-16===0)){
    firstHourArray=['', 3, '', 1, ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-15===0)){
    firstHourArray=['', 3, '', '', ''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-14===0)){
    firstHourArray=['','',2,'',''];
    console.log(firstHourArray);
    return firstHourArray
  }
   if((hour-13===0)){
    firstHourArray=['', '', '', 1, ''];
    console.log(firstHourArray);
    return firstHourArray
  }
}

firstMinuteArray = [];
function getMinuteArray(){
  let now = new Date();
  let minute = Math.floor(now.getMinutes()/5);
  console.log(minute, 'this is the getMinutes time');
  if(minute===0){
    firstMinuteArray=['', '', '', '', ''];
    console.log(firstMinuteArray);
    return firstMinuteArray
  }
   if(minute===1){
    firstMinuteArray = ['', '', '', 1,''];
    console.log(firstMinuteArray);
    return firstMinuteArray
  }
   if(minute===2){
    firstMinuteArray = ['','',2,'','']
    console.log(firstMinuteArray);
    return firstMinuteArray
  }
   if(minute===3){
    firstMinuteArray = ['',3,'','','']
    console.log(firstMinuteArray);
    return firstMinuteArray
  }
   if(minute===4){
    firstMinuteArray = ['', 3, '', 1, '']
    console.log(firstMinuteArray);
    return firstMinuteArray
  }
   if(minute===5){
    firstMinuteArray = [5,'','','','']
    console.log(firstMinuteArray);
    return firstMinuteArray
  }
   if(minute===6){
    firstMinuteArray = [5, '', '', 1, '']
    console.log(firstMinuteArray);
    return firstMinuteArray
  }
   if(minute===7){
    firstMinuteArray = [5, 2,'','','']
    console.log(firstMinuteArray);
    return firstMinuteArray
  }
   if(minute===8){
    firstMinuteArray = [5, 3,'','','']
    console.log(firstMinuteArray);
    return firstMinuteArray
  }
   if(minute===9){
    firstMinuteArray = [5, 3, '', 1, '']
    console.log(firstMinuteArray);
    return firstMinuteArray
  }
   if(minute===10){
    firstMinuteArray = [5, 3, 2,'','']
    console.log(firstMinuteArray);
    return firstMinuteArray
  }
   if(minute===11){
    firstMinuteArray = [5, 3, 2, 1,'']
    console.log(firstMinuteArray);
    return firstMinuteArray
  }

}
