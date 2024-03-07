// Formatting options
const options = {
  maximumFractionDigits: 3, // Maximum number of fraction digits
};

export const formatPrice = (price) => {
  // Format the number using Intl.NumberFormat
  const formattedNumber = new Intl.NumberFormat("en-US", options).format(price);
  return formattedNumber;
};
