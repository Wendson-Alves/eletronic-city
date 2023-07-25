const calcPercent = (minusValue, maxValue, decimals=0) => {
  return Math.abs((minusValue / maxValue) * 100 - 100).toFixed(decimals);
};

export default calcPercent;
