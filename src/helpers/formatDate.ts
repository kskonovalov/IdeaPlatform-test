const formatDate = (inputDate: string): string => {
  // Parse the input date in DD.MM.YY format
  const [day, month, year] = inputDate.split(".");
  const date = new Date(`20${year}-${month}-${day}`); // Assuming 21st century

  // Format individual parts
  const formatterDay = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
  }).format(date);
  const formatterMonth = new Intl.DateTimeFormat("ru-RU", {
    month: "short",
  }).format(date);
  const formatterYear = new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
  }).format(date);
  const formatterWeekday = new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
  }).format(date);
  const capitalizedWeekday =
    formatterWeekday.charAt(0).toUpperCase() +
    formatterWeekday.slice(1).toLowerCase();

  // Combine parts manually and remove 'г.'
  return `${formatterDay} ${formatterMonth} ${formatterYear}, ${capitalizedWeekday}`;
};

export default formatDate;
