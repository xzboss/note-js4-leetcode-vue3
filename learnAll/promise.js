const FULFILL = 'fulfill'
const PENDING = 'pending'
const REJECTED = 'rejected'
let j = 0
class MyPromise {
  i = j++
  status = PENDING
  value = null
  reason = null
  resolveCallback = []
  rejectCallback = []

  constructor(executor) {
    executor(this.resolve, this.reject)
  }
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILL
      this.value = value
      while (this.resolveCallback.length > 0) {
        this.resolveCallback.shift()(value)
      }
    }
  }
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      while (this.rejectCallback.length > 0) {
        this.rejectCallback.shift()(reason)
      }
    }
  }
  then = (onResolved, onRejected) => {
    const innerP = new MyPromise((resolve, reject) => {
      if (this.status === FULFILL) {
        queueMicrotask(() => {
          this.resolvePromise(onResolved(this.value), resolve, reject)
        })
      }
      if (this.status === REJECTED) {
        onRejected(this.reason)
      }
      if (this.status === PENDING) {
        this.resolveCallback.push(onResolved)
        this.rejectCallback.push(onRejected)
      }
    })
    return innerP
  }

  resolvePromise = (returnValue, resolve, reject) => {
    if (returnValue instanceof MyPromise) {
      returnValue.then(resolve, reject)
    } else {
      resolve(returnValue)
    }
  }
}

const p = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  //   console.log('response-down')
  //   resolve('success-value')
  // }, 2000)
  console.log('response-down')
  resolve('success-value')
})
p.then((value) => {
  console.log('then-1', value)
})
