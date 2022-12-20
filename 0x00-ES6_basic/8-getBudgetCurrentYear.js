function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear.date}`] = income;
  budget[`gdp-${getCurrentYear.date}`] = gdp;
  budget[`capita-${getCurrentYear.date}`] = capita;

  return budget;
}
