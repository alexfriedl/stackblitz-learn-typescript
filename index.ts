// Import stylesheets
import "./style.css";

// Write TypeScript code!
class Addition {
  private summand1: number = 5;
  private summand2: number = 19;

  constructor(summand3?: number) {
    this.initialSum(summand3);
  }

  public initialSum(summand3): any {
    return console.log(this.summand1 + this.summand2 + summand3);
  }

  public sum(x, y) {
    return console.log(x + y);
  }
}

let foo = new Addition(34);
//foo.sum(5, 3);
foo.initialSum(1);
