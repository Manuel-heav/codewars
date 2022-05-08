function groupByCommas(n) {
    const commas = (number) => (
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  )
    return commas(n)
}