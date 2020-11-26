function changeDate(date) {
  let dateFormated = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return dateFormated;
}

module.exports = changeDate;
