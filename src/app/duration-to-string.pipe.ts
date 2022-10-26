import { Pipe, PipeTransform } from "@angular/core";
import { Duration } from "date-fns";

@Pipe({
  name: "durationToString",
})
export class DurationToStringPipe implements PipeTransform {
  transform(duration: Duration, ...args: any[]): string {
    /*
			!WHAT DO YOU NEED TO DO?

			- Convert duration values into strings
			- Parse duration -> Does it have days? hours? If so, use those. If not, use "00"
		*/

    const durationEntries = Object.entries(duration).reduce<Duration>(
      (duration, currentDurationTuple) => {
        const [key, value] = currentDurationTuple;
        duration[key] = value;
        return duration;
      },
      {
        days: 0,
        hours: 0,
        minutes: 0,
      }
    );

    const durationString = Object.values(durationEntries).reduce<string>(
      (concatendatedString, durationValue) => {
        const stringifiedValue = String(durationValue);

        if (stringifiedValue.split("").length === 1) {
          const leadZeroAddedString = `0${stringifiedValue}`;
          if (concatendatedString === "") {
            return leadZeroAddedString;
          }
          return `${concatendatedString}:${leadZeroAddedString}`;
        } else {
          if (concatendatedString === "") {
            return stringifiedValue;
          }
          return `${concatendatedString}:${stringifiedValue}`;
        }
      },
      ""
    );
    return durationString;
  }
}
