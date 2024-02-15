// 3. Напишите функцию, которая будет проходить через массив целых чисел и выводить
// индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

const indexDelay = (arr) => {
  let i = 0;
  const interval = setInterval(() => {
    console.log(arr[i], i);
    i++;
    if (i === arr.length) {
      clearInterval(interval);
    }
  }, 3000);
};

indexDelay([10, 12, 15, 21]);

// Бонусное задание:
// Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
// Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
// Promise с содержимым страницы или вызывает reject

const fetchUrl = async (url) => {
  for (let i = 0; i < 6; i++) {
    try {
      const res = await fetch(url);
      return res;
    } catch (err) {
      if (i === 5) {
        return Promise.reject(err);
      }
    }
  }
};

fetchUrl("https://google/com&#39")
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); // сatch должен сработать только после 5 неудачных попыток
// получить содержимое страницы внутри fetchUrl
