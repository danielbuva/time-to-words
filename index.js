// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!

  const hour = time[0];
  const tens = time[time.length - 2];
  const ones = time[time.length - 1];

  const timeArray = time.split(":");

  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  if (tens === "0" && ones === "0") {
    return `${toWords(parseInt(hour))} o'clock`;
  }

  if (tens === "1" && ones === "5") {
    return `quarter past ${toWords(parseInt(hour))}`;
  }

  if (tens === "3" && ones === "0") {
    return `half past ${toWords(parseInt(hour))}`;
  }

  if (tens === "4" && ones === "5") {
    return `quarter to ${toWords(parseInt(hour) + 1)}`;
  }

  if (parseInt(timeArray[1]) < 15) {
    return `${toWords(ones)} past ${toWords(parseInt(hour))}`;
  }

  if (parseInt(timeArray[1]) > 45) {
    return `${toWords(60 - timeArray[1])} to ${toWords(
      parseInt(hour) + 1
    )}`;
  }

  return `${toWords(60 - parseInt(timeArray[1]))} to ${toWords(
    timeArray[0]
  )}`;
}

function toWords(number) {
  const words = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
  ];

  return words[number - 1];
}

module.exports = { convertTimeToWords };
