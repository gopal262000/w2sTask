import { format, parseISO } from 'date-fns';

/**
 * A Date Time formatter component
 * @param {string|date} dateTime - the date value which is to be formatted
 * @param {dateFormat?} [dateFormat] - the date format to be returned after formatting
 * @returns a formatted data in a span element
 */
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
