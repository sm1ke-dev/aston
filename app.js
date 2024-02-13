// 2. Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

const bindLogger = logger.bind(obj);
bindLogger();

logger.call(obj);

logger.apply(obj);

// 3.1 Массивы:

// - Создайте массив чисел и найдите его сумму.

const numArr = [1, 5, 3, 8, 2];
console.log(numArr.reduce((prev, curr) => prev + curr));

// - Создайте массив строк и объедините их в одну строку.

const strArr = ["Somebody", "once", "told", "me"];
console.log(strArr.join(" "));

// - Найдите максимальный и минимальный элементы в массиве чисел.

console.log(Math.max(...numArr)); // Максимальных элемент
console.log(Math.min(...numArr)); // Минимальный элемент

// 3.2 Stack (стек):

// - Реализуйте стек с использованием массива.

const stack = [];

const stackIn = (i) => {
  stack.push(i);
  return stack;
};

const stackOut = () => stack.pop();

console.log(stackIn(3));
console.log(stackIn(8));
console.log(stackIn(5));
console.log(stackIn(2));

console.log(stackOut());
console.log(stackOut());

// 3.3 Queue (очередь):

// - Реализуйте очередь с использованием массива.

const queue = [];

const queueIn = (i) => {
  queue.unshift(i);
  return queue;
};

const queueOut = () => queue.pop();

console.log(queueIn(3));
console.log(queueIn(6));
console.log(queueIn(9));

console.log(queueOut());
console.log(queueOut());
