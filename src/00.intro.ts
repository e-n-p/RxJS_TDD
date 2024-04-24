import { resourceUsage } from 'process';
import {Observable, of, range} from 'rxjs';
import {filter, map, mergeMap, switchMap, toArray} from 'rxjs/operators';

/*
    DO NOT TOUCH CONST NAMES (Otherwise, tests won't work)
 */

// Just an observable which should send "Hello World"
export const helloWorldObservable = of('Hello World');

// This one must trigger numbers from 0 to 10
// Pro tip: You can also use `range` from RxJS
export const zeroToTenObservable = range(0,11);

// Use map operator to pick the first letter au each word
export const firstLetterObservable = of('Wild', 'Code', 'School').pipe(
    map(term => term[0])
);

// Use filter operator to allow only positive numbers
export const positiveNumbersObservable = of(-23, 543, 7, 6, 3, -234, 43).pipe(
    filter(num => num >= 0)
)

// Write a function that produce the first 15th fibonnaci numbers
// In mathematics, the Fibonacci numbers, commonly denoted Fn form a sequence,
// called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
// It starts with number 0 and 1. Example:
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// ect ...
//
// NOTE: Do not use `scan` operator
export const fibonacciObservable = new Observable(function (observer) {
    let end = 14;
    const result:number[] = [1];
    observer.next(result[0]);
    for(let i=1;i<=end;i++) {
        if (i === 1){
            result.push(result[0] + result[0]);
            observer.next(result[i]);
            continue
        }
        result.push(result[i-2] + result[i-1]);
        observer.next(result[i]);
    }
    observer.complete();
});
