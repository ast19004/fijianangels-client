export const getTodaysDate = () => {
  //Return current date in ISO format
  const date = new Date();
  let year = date.getFullYear();
  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  return `${year}-${month}-${day}`;
};
