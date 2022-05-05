const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const $tipButtons = $$('.card__tip-button')
const $tipAmount = $('#tipAmount')
const $totalPerPerson = $('#totalPerPerson')
const $billAmount = $('#billAmount')
const $numberOfPeople = $('#numberOfPeople')
const $calculateBtn = $('#calc')

console.log($tipButtons)
console.log(Array.from($tipButtons))

$tipButtons.forEach((button, index, buttons) => {
  button.addEventListener('click', function () {
    // console.log(this.classList.value)
    this.classList.toggle('active')

    // make it so just one button have the class 'active' at any time
    switch (index) {
      case 0:
        for (let j = index + 1; j < buttons.length; j++) {
          buttons[j].classList.remove('active')
        }
        break
      case 1:
        buttons[0].classList.remove('active')
        for (let j = index + 1; j < buttons.length; j++) {
          buttons[j].classList.remove('active')
        }
        break
      case 2:
        buttons[3].classList.remove('active')
        for (let j = index - 1; j >= 0; j--) {
          buttons[j].classList.remove('active')
        }
        break
      case 3:
        for (let j = index - 1; j >= 0; j--) {
          buttons[j].classList.remove('active')
          console.log('lol')
        }
        break
    }
  })
})

$calculateBtn.addEventListener('click', () => {
  // console.log($tipAmount)
  // console.log($totalPerPerson)
  // console.log($billAmount.value)
  // console.log($numberOfPeople.value)
  if ($billAmount.value === '' || $numberOfPeople.value === '') {
    alert('please introduce values')
    return
  }

  const billAmount = Number($billAmount.value)
  const numberOfPeople = Number($numberOfPeople.value)
  const $activeTipBtn = $('.active')
  const tipPercentage = Number($activeTipBtn.id.match(/\d/g).join('')) / 100
  if (!$activeTipBtn) {
    console.log('no btn')
    return
  }

  let tip
  let totalPerPerson

  // console.log($activeTipBtn.id)
  // console.log($activeTipBtn.id.match(/\d/g).join(''))
  console.log(tipPercentage)

  //~ set the $tipAmount text content to the multiplication of the bill amount and the tip percentage [CHECK]
  tip = (billAmount * tipPercentage).toFixed(2)

  $tipAmount.textContent = tip

  //~ set the $totalPerPerson text content to the following operation:
  //~ SUM of bill amount and the MULTIPLICATION of the bill amount and the tip percentage, all of that divided by the number of people [CHECK]
  totalPerPerson = (
    (billAmount + billAmount * tipPercentage) /
    numberOfPeople
  ).toFixed(2)
  $totalPerPerson.textContent = totalPerPerson
  console.log(billAmount)
  console.log(tip)
  console.log(numberOfPeople)
})

// function switchActiveClass (e){
//   e.target.classList.toggle('active')
// }
