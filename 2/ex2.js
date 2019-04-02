function isWeekend(){
  const todayDate = new Date();
  const day = todayDate.getDay();

  let daysText = ['weekend','weekday','weekday','weekday','weekday','weekday','weekend'];
  
  return daysText[day]; 		
	
}