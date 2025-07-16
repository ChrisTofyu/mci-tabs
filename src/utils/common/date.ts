const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const formatDate = (dateString: string | undefined | null): string => {
  const dateInput = dateString?.trim();
  if (!dateInput) return '';

  try {
    const dateAndTime =
      /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.\d{0,3}Z)?$/;
    const patterns = [
      { regex: /^(\d{4})-(\d{2})-(\d{2})$/, order: ['year', 'month', 'day'] }, // YYYY-MM-DD
      { regex: /^(\d{2})-(\d{2})-(\d{4})$/, order: ['day', 'month', 'year'] }, // DD-MM-YYYY
      { regex: /^(\d{2})\/(\d{2})\/(\d{4})$/, order: ['day', 'month', 'year'] }, // DD/MM/YYYY
      { regex: /^(\d{4})\/(\d{2})\/(\d{2})$/, order: ['year', 'month', 'day'] }, // YYYY/MM/DD
      {
        regex: dateAndTime,
        order: [
          'year',
          'month',
          'day',
          'hour',
          'minute',
          'second',
          'milliseconds',
        ],
      }, // YYYY-MM-DDT00:00:00 or YYYY-MM-DDT00:00:00.0Z or YYYY-MM-DDT00:00:00.000Z
    ];

    const matchedPattern = patterns.find(({ regex }) => regex.test(dateInput));
    if (!matchedPattern) return '';

    const match = matchedPattern.regex.exec(dateInput);
    if (!match) return '';

    const [, first, second, third] = match;
    const parts: Record<string, number> = {
      [matchedPattern.order[0]]: parseInt(first, 10),
      [matchedPattern.order[1]]: parseInt(second, 10),
      [matchedPattern.order[2]]: parseInt(third, 10),
    };

    const year = parts.year;
    const month = parts.month;
    const day = parts.day;

    const date = new Date(year, month - 1, day);

    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return '';
    }

    const formattedMonth = monthNames[date.getMonth()];
    const formattedDay = String(date.getDate()).padStart(2, '0');
    const formattedYear = date.getFullYear();

    return `${formattedMonth} ${formattedDay}, ${formattedYear}`;
  } catch (error) {
    console.error('Error formatting date:', { dateString, error });
    return '';
  }
};

export default formatDate;
