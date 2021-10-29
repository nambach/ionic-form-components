const aMinute = 60; // in seconds
const anHour = aMinute * 60; // in seconds
const aDay = anHour * 24; // in seconds
const aMonth = aDay * 30; // in seconds
const sixMonth = aMonth * 6; // in seconds
const aYear = aDay * 365; // in seconds

const timeGates = [
  [sixMonth, '', '', true],
  // [aYear, 'year', 's'],
  [aMonth, 'month', 's'],
  [aDay, 'day', 's'],
  [anHour, 'hour', 's'],
  [aMinute, 'min', 's']
];

export const timeAgo = (date: number) => {
  const seconds = (new Date().getTime() - date) / 1000;

  for (const gate of timeGates) {
    const [interval, unit, plural, skip] = gate;
    if (seconds > interval) {
      if (skip) {
        return new Date(date).toLocaleDateString();
      }

      const value = Math.floor(seconds / (interval as number));

      if (unit === 'day' && value === 1) {
        const d = new Date(date);
        return `Yesterday ${d.toTimeString().substr(0, 5)}`;
      }

      return `${value} ${unit}${value > 1 ? plural : ''}`;
    }
  }

  return 'Just now';
};
