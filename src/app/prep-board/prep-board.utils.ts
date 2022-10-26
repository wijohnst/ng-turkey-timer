import { Duration } from "date-fns";

export const convertDurationToMinutes = (duration: Duration): number => {
  const durationUnitToMinutesMap = {
    years: 0,
    months: 0,
    weeks: 10080,
    days: 1440,
    hours: 60,
    minutes: 1,
    seconds: 0,
  };

  return Object.entries(duration).reduce<number>(
    (totalMinutes, currentEntry) => {
      const [durationType, value] = currentEntry;
      return totalMinutes + durationUnitToMinutesMap[durationType] * value;
    },
    0
  );
};
