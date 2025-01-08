import moment from "moment";

// Format price to include currency and commas (e.g., 1,000.00)
export const formatPrice = (price) => {
  if (typeof price !== "number") price = parseFloat(price);
  if (isNaN(price)) return "Invalid price";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

// Format date to "dd-mm-yyyy"
export const formatDate = (date) => {
  const momentDate = moment(date);
  if (!momentDate.isValid()) return "Invalid date";

  return momentDate.format("DD-MM-YYYY");
};

// Format time to "mm-hh"
export const formatTime = (date) => {
  const momentDate = moment(date);
  if (!momentDate.isValid()) return "Invalid time";

  return momentDate.format("mm-HH"); // Use "mm-HH" to match the required output.
};
