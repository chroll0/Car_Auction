const AuctionDataConverter = (dateString: string) => {
  // Split the date and time
  const [datePart, timePart] = dateString.split(" ");

  // Split the date
  const [day, month, year] = datePart.split("/").map(Number);

  // Split the time and period (AM/PM)
  const [time, period] = timePart.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  // Convert hours based on AM/PM
  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }

  // Return a new Date object
  return new Date(year, month - 1, day, hours, minutes);
};
export default AuctionDataConverter;
