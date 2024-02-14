// 3. Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были
// доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам

const Person01 = {
  name: "Andrew",
  age: 19,
};

const Person02 = new Object({
  name: "Andrew",
  age: 19,
});

const Person2 = {};

Person2.__proto__ = Person01;

console.log(Person2.name);

Object.prototype.logInfo = "logInfo";

console.log(Person2.logInfo);

// 4. Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class PersonThree extends Person {
  constructor(name, age) {
    super(name, age);
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }
}

// Бонусное задание:

// 1. Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;

const firstSum = (arr, total) => {
  for (let i = 0; i < arr.length; i++) {
    for (let m = 0; m < arr.length; m++) {
      if (arr[i] + arr[m] === total) {
        return [arr[i], arr[m]];
      }
    }
  }
};

console.log(firstSum(arr, total));

// 2. Какая сложность у вашего алгоритма?

// Т.к. в алгоритме содержится вложенный цикл, его сложность будет O(n^2)
