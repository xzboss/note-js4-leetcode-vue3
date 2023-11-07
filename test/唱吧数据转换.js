const str = `幽梦仙境	500	3600
魔法书	1000	2960
恋爱星球	5000	2280
猫之守护神	10000	800
冰激凌球	20000	200
奇翼少女	30000	100
星光射手	50000	40
梦幻星使	100000	20`
const objArr = []
str.split('\n').forEach((item) => {
  const obj = {}
  item.split('\t').forEach((value, idx) => {
    switch (idx) {
      case 0:
        obj['name'] = value
        break
      case 1:
        obj['price'] = value / 1
        break
      case 2:
        obj['rate'] = parseFloat(value).toFixed(2)
        break
    }
  })
  objArr.push(obj)
})
console.dir(objArr)
