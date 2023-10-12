import pkg from "easy-single-promise";
const { singlePromise } = pkg
function getServerData() {
  return new Promise((resolve) => {
    console.log("我被执行啦~");
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

const singleGetServerData = singlePromise(getServerData);

// 立即打印一次“我被执行啦”，并且只会打印一次

const pList = [singleGetServerData(), singleGetServerData(), singleGetServerData()];
setTimeout(() => {
  singleGetServerData().then(console.log);
  // 在1S后打印1，和后面的[1,1,1]一起输出
}, 400);

Promise.all(pList).then((res) => {
  console.log(res);
  // 在1S后打印[1, 1, 1]，和前面的1一起输出
});

setTimeout(() => {
  singleGetServerData().then((res) => {
    console.log(res);
    // 在4S后打印“我被执行啦”
    // 在5S后打印1
  });
}, 4000);