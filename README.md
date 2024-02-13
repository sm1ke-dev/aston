# Теоретические задания

### 1. Создать объект counter всеми возможными способами

let counter1 = {};

let counter2 = new Object();

function createObject() {};
let counter3 = new createObject();

let counter4 = Object.create(null);

class Counter {};
let counter5 = new Counter();

### 2. Скопировать объект counter всеми возможными способами

let objCopy1 = {...counter};

let objCopy2 = Object.assign({}, counter);

let objCopy3 = JSON.parse(JSON.stringify(counter));

#### С помощью библиотеки Lodash:

let objCopy4 = \_.cloneDeep(counter);

### 3. Создать функцию makeCounter всеми описанными и возможными способами

function makeCounter1() {};

const makeCounter2 = function() {};

const makeCounter3 = () => {};

const makeCounter4 = new Function();

const obj = {
makeCounter: function() {},
};

### 4. Прочитать и описать работу глобальной функции structuredClone()

Глобальная функция structuredClone() используется для создания глубокой копии объекта, включая все его вложенные объекты и массивы.

В процессе работы функции все свойства объекта копируются, включая их значения и типы данных. Если свойство объекта является другим объектом или массивом, оно также копируется. Кроме того, рекурсивно копируются все вложенные объекты и массивы, чтобы создать полную глубокую копию исходного объекта.

#### Бонусные задания находятся в файле app.js
