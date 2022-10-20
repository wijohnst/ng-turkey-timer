import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numToArray",
})
export class NumToArrayPipe implements PipeTransform {
  transform(value: number): string {
    console.log(value);
    // short-circuit on negative numbers
    if (value < 0) {
      console.log("Negative number...");
      return "00";
    }

    if (value >= 0 && value <= 9) {
      console.log("Less than 10...");
      return `0${value}`;
    }

    console.log("Double digits...");
    return String(value);
  }
}
