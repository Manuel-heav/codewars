howManyYears = (date1, date2) => {
  const value = parseInt(date2.split("/").shift()) - parseInt(date1.split("/").shift())
  return value < 0 ? -(value) : value
}