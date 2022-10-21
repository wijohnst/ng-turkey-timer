import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numToArray",
})
export class NumToArrayPipe implements PipeTransform {
  transform(value: number): string {
    // short-circuit on negative numbers
    if (value < 0) {
      return "00";
    }

    if (value >= 0 && value <= 9) {
      return `0${value}`;
    }

    console.log("Double digits...");
    return String(value);
  }
}
