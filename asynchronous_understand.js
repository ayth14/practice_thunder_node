let a = 10,
  b = 20;

console.log("this is first...");

const waiting_sum = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1500);
});

waiting_sum.then((data) => {
  console.log("watting sum ===> ", a + data + b);
});

console.log("this is second...");

console.log("this is third...");
