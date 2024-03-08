// 1 Реализовать методы массива customFilter и customReduce,
// для примера добавлена реализация функции customMap
interface Array<T> {
  customFilter(predicateFn: (elem: T, idx: number, arr: T[]) => boolean): T[];
  customMap(callbackfn: (elem: T, idx: number, arr: T[]) => unknown): unknown[];
  customReduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue: T
  ): T[];
}

Array.prototype.customMap = function (callbackfn) {
  const result: unknown[] = [];
  for (let idx = 0; idx < this.length; idx++) {
    result.push(callbackfn(this[idx], idx, this));
  }
  return result;
};

Array.prototype.customFilter = function (predicateFn) {};

Array.prototype.customReduce = function (callbackfn, initialValue) {};

// 2 Реализовать функцию compose, аргументами которой является произвольное количество
// функций, на выходе дающей результат, эквивалентный выражению:
// compose(a, b, c, d)(x) = a(b(c(d(x))))
// (для перебора аргументов функции можно использовать rest-оператор или свойство arguments объекта функции)
function compose(): Function {
  // console.log(arguments)
}
