function countDays() {
  // Set date
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  
  // Return days
  return date.getDate();
}

function countSundays(day) {
  let before = day || countDays();
  let date = new Date();
  let sundays = 0;
  
  for (let i = 1; i < before; i++) {
    date.setDate(i)
    if (date.getDay() === 0)
      ++sundays;
  }

  return sundays;
}

function getDate() {
  return (new Date()).getDate();
}

function calculatePage(pages) {
  const days = countDays() - countSundays();
  const day = getDate() - countSundays(getDate() + 1);
  return Math.floor(pages * day / days) + 1;
}

export { calculatePage };
