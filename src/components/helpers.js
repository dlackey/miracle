function countDays() {
  // Set date
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  
  // Return days
  return date.getDate();
}

function countSundays(day) {
  const lastDay = day || countDays();
  let sundays = 0;
  let date = new Date();
  
  // Count sundays
  for (let i = 1; i <= lastDay; i++) {
    date.setDate(i)
    if (date.getDay() === 0)
      ++sundays;
  }

  // Return count
  return sundays;
}

function getDate() {
  return (new Date()).getDate();
}

function calculatePage(pages) {
  const days = countDays() - countSundays();
  const day = getDate() - countSundays(getDate());
  return Math.floor(pages * day / days) + 1;
}

export { calculatePage };
