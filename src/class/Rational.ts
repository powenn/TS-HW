import { gcd } from '@algorithm.ts/gcd'
type char = string

export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    getNumerator(): number {
        return this.numerator;
    }

    getDenominator(): number {
        return this.denominator;
    }

    normalize(): Rational {
        const n = this.getNumerator();
        const d = this.getDenominator();
        const _gcd = gcd(n, d);
        return new Rational(n / _gcd, d / _gcd);
    }

    isWhole(): boolean {
        const n = this.getNumerator();
        const d = this.getDenominator();
        return Math.floor(n / d) == n / d;
    }

    isDecimal(): boolean {
        return !this.isWhole();
    }

    equals(r: Rational): boolean {
        const this_r = this.normalize();
        const _r = r.normalize();

        const this_n = this_r.getNumerator();
        const this_d = this_r.getDenominator();

        const _r_n = _r.getNumerator();
        const _r_d = _r.getDenominator();
        return this_n == _r_n && this_d == _r_d;
    }

    static _parseRational(n_arr: Array<char>, d_arr: Array<char>): Rational {
        const n = n_arr.join("");
        const d = d_arr.join("");
        const str = `${n}/${d}`;
        return Rational.parseRational(str);
    }

    static parseRational(s: string): Rational {
        const s_arr: Array<string> = s.split("/");
        const n: number = parseInt(s_arr[0]);
        const d: number = parseInt(s_arr[1]);

        return new Rational(n, d);
    }

    toString(): string {
        return `${this.getNumerator()}/${this.getDenominator()}`;
    }
}