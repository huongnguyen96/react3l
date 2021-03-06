import nameof from 'ts-nameof.macro';
import {Filter} from '../filters/Filter';

export class NumberFilter extends Filter {

  public static types(): string[] {
    const filter: NumberFilter = new NumberFilter();
    return [
      nameof(filter.equal),
      nameof(filter.notEqual),
      nameof(filter.greater),
      nameof(filter.greaterEqual),
      nameof(filter.less),
      nameof(filter.lessEqual),
      nameof(filter.range),
    ];
  }

  public equal?: number;

  public notEqual?: number;

  public greater?: number;

  public greaterEqual?: number;

  public less?: number;

  public lessEqual?: number;

  public range?: [number | undefined, number | undefined];
}
