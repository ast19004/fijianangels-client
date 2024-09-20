export const toggleStateByInterval = (interval, setFunc) => {
  return setInterval(() => {
    setFunc((prevState) => !prevState);
  }, interval); // Change state by interval
};
