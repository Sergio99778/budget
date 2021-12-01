export const checkBudget = (budget, leftBudget) => {
  let classText;
  if (budget / 4 > leftBudget) {
    classText = ' alert alert-danger';
  } else if (budget / 2 > leftBudget) {
    classText = 'alert alert-warning';
  } else {
    classText = 'alert alert-success';
  }
  return classText;
};
