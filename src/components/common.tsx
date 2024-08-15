import { format, parseISO } from 'date-fns';

export const DateTime = ({
  dateTime,
  dateFormat = "dd/MM/yyyy HH:mm",
}: {
  dateTime: Date | string;
  dateFormat?: string;
}) => {
  // Convert dateTime to Date object if it's a string
  const dateObject = typeof dateTime === "string" ? parseISO(dateTime) : dateTime;

  // Format the date object
  const formattedDate = format(dateObject, dateFormat);

  return <span>{formattedDate}</span>;
};
