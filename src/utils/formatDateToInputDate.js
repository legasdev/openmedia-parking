function formatDateToInputDate(date) {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const day = dateObject.getDate();

  const fullMonth = month < 10 ? `0${month}` : month;
  const fullDay = day < 10 ? `0${day}` : day;

  return `${year}-${fullMonth}-${fullDay}`;
}

export default formatDateToInputDate;
