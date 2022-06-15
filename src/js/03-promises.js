const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  submit: document.querySelector('button[type="submit"]'),
}

refs.submit.addEventListener('click', startCreatePromise)

function startCreatePromise(event) {
  event.preventDefault();
  let delayTotal = parseInt(refs.delay.value);
  for (let i = 0; i < refs.amount.value; i++) {
    createPromise(i, delayTotal)
    delayTotal += parseInt(refs.step.value);
  }
}


function createPromise(position, delay) {
const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
  promise.then(value => console.log(value)).catch(error => console.log(error))
    }, delay)
  })
}