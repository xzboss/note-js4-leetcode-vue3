// const { describe } = require('node:test')

const str = `11月21日 亲亲花束(动效)  1
11月22日  你的名字(动效)  1
11月23日  错位时空(动效)  1
11月24日  雨爱(动效)  1
11月25日  黄金恋人(动效)  1
11月26日  蜜月旅行(动效)  1`
const objArr = []
str.split('\n').forEach((item) => {
  const obj = {}
  item.split('  ').forEach((value, idx) => {
    //parseFloat(value).toFixed(2)
    switch (idx) {
      case 0:
        obj['date'] = value
        break
      case 1:
        obj['name'] = value
        break
      case 2:
        obj['num'] = value
        break
    }
  })
  objArr.push(obj)
})
console.dir(objArr)
console.log(describe, 'hhhhh')
