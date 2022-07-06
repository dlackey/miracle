function countDays() {
  // Set date
  const date = new Date();
  date.setDate(0);
  
  // Return days
  return date.getDate();
}

function isSunday(day) {
  // Set date
  const date = new Date();
  date.setDate(day);

  // Check day
  return date.getDay() === 0;
}

function countSundays(day) {
  const lastDay = day || countDays();
  let sundays = 0;
  
  // Count sundays
  for (let i = 1; i <= lastDay; i++) {
    if (isSunday(i))
      ++sundays;
  }

  return sundays;
}

function getDate() {
  return (new Date()).getDate();
}

function calculatePage(to, from) {
  // Calculate pages
  const pages = to - from;

  // Calculate days
  const days = countDays() - countSundays();
  const day = getDate() - countSundays(getDate());

  // Calculate page
  return Math.floor(pages * day / days) + from + 1;
}

export { calculatePage };
