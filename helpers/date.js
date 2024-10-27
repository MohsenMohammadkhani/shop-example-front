import jalaliMoment from "jalali-moment";

const weekdayDayNamePersian = [
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه",
  "شنبه",
];

function getCurrentDayName() {
  const date = new Date();
  return weekdayDayNamePersian[date.getDay()];
}

function getDayNameAfterDay(afterDayNumber) {
  const date = new Date();
  let currentDayName = weekdayDayNamePersian[date.getDay()];
  let indexAfterDayNumber =
    weekdayDayNamePersian.indexOf(currentDayName) + afterDayNumber;
  console.log(indexAfterDayNumber);
  if (indexAfterDayNumber > 6) {
    indexAfterDayNumber = indexAfterDayNumber - 7;
  }
  return weekdayDayNamePersian[indexAfterDayNumber];
}

function getDateAfterJalali(afterDayNumber) {
  const jalaliMomentInstance = jalaliMoment();
  return jalaliMomentInstance
    .add(afterDayNumber, "day")
    .locale("fa")
    .format("YYYY/MM/DD");
}

export default {
  getCurrentDayName,
  getDayNameAfterDay,
  getDateAfterJalali,
};
