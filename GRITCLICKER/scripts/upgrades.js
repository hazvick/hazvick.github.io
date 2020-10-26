$(() => {
  console.log('upgrades.js is linked')

  let currentAmount = 0
  let cookiesPerClick = 1
  let cookiesPerSecond = 0
  let cookiesPerSecondUpgradePrice = 10
  let grandmaUpgradePrice = 100
  let getCookiesPerSecondFunction = false

  const $cookie = $('.cookie')

  const $upgradeClickOne = $('.upgrade-click-one')
  const $upgradeClickTwo = $('.upgrade-click-two')
  const $upgradeClickThree = $('.upgrade-click-three')
  const $upgradeClickFour = $('.upgrade-click-four')
  const $upgradeClickFive = $('.upgrade-click-five')

  let upgradeMouseClickOne = false
  let upgradeMouseClickTwo = false
  let upgradeMouseClickThree = false
  let upgradeMouseClickFour = false
  let upgradeMouseClickFive = false

  const updateCookies = () => {
    $('.current-amount').text(currentAmount.toFixed(0))
    $('.amount-per-click').text(cookiesPerClick)
    $('.amount-per-second').text(cookiesPerSecond.toFixed(1))
    $('.upgrade1-price').text('Cost: ' + cookiesPerSecondUpgradePrice.toFixed(1) + ' cookies')
    $('.upgrade2-price').text('Cost: ' + grandmaUpgradePrice.toFixed(1) + ' cookies')
  }

  $cookie.click(() => {
    currentAmount += cookiesPerClick
    updateCookies()
    $cookie.css('transform', 'scale(.99)')
    setTimeout(() => {
      $cookie.css('transform', 'scale(1.00)')
    },100)
  })

  $upgradeClickOne.click(() => {
    if (upgradeMouseClickOne === false) {
      if (currentAmount >= 50) {
        upgradeMouseClickOne = true
        currentAmount -= 50
        cookiesPerClick *= 2
        updateCookies()
        $upgradeClickOne.css('background', 'darkgrey')
      }
    }
  })

  $upgradeClickTwo.click(() => {
    if (upgradeMouseClickTwo === false) {
      if (currentAmount >= 500) {
        upgradeMouseClickTwo = true
        currentAmount -= 500
        cookiesPerClick *= 3
        updateCookies()
        $upgradeClickTwo.css('background', 'darkgrey')
      }
    }
  })

  $upgradeClickThree.click(() => {
    if (upgradeMouseClickThree === false) {
      if (currentAmount >= 4000) {
        upgradeMouseClickThree = true
        currentAmount -= 4000
        cookiesPerClick *= 5
        updateCookies()
        $upgradeClickThree.css('background', 'darkgrey')
      }
    }
  })

  $upgradeClickFour.click(() => {
    if (upgradeMouseClickFour === false) {
      if (currentAmount >= 50000) {
        upgradeMouseClickFour = true
        currentAmount -= 50000
        cookiesPerClick *= 5
        updateCookies()
        $upgradeClickFour.css('background', 'darkgrey')
      }
    }
  })

  $upgradeClickFive.click(() => {
    if (upgradeMouseClickFive === false) {
      if (currentAmount >= 500000) {
        upgradeMouseClickFive = true
        currentAmount -= 500000
        cookiesPerClick *= 10
        updateCookies()
        $upgradeClickFive.css('background', 'darkgrey')
      }
    }
  })

  const getCookiesPerSecond = () => {
    counter = 0
    setInterval(() => {
      counter += cookiesPerSecond
      if (counter >= 1) {
        currentAmount += Math.floor(counter)
        counter = 0
        updateCookies()
      }
    }, 1000)
  }




  $('.upgrade1').click(() => {
    if (currentAmount >= cookiesPerSecondUpgradePrice) {
      currentAmount -= cookiesPerSecondUpgradePrice
      cookiesPerSecondUpgradePrice *= 1.005

      cookiesPerSecond += 0.2

      updateCookies()
      if (getCookiesPerSecondFunction === false) {
        getCookiesPerSecondFunction = true
        getCookiesPerSecond()
      }
    }
  })

  $('.upgrade1').mouseover(() => {
    $('.upgrade1-info').css('display', 'block')
  })
  $('.upgrade1').mouseout(() => {
    $('.upgrade1-info').css('display', 'none')
  })

  $('.upgrade2').mouseover(() => {
    $('.upgrade2-info').css('display', 'block')
  })
  $('.upgrade2').mouseout(() => {
    $('.upgrade2-info').css('display', 'none')
  })


  $('.upgrade-click-one').mouseover(() => {
    $('.upgrade-click-one-info').css('display', 'block')
  })
  $('.upgrade-click-one').mouseout(() => {
    $('.upgrade-click-one-info').css('display', 'none')
  })
  $('.upgrade-click-two').mouseover(() => {
    $('.upgrade-click-two-info').css('display', 'block')
  })
  $('.upgrade-click-two').mouseout(() => {
    $('.upgrade-click-two-info').css('display', 'none')
  })
  $('.upgrade-click-three').mouseover(() => {
    $('.upgrade-click-three-info').css('display', 'block')
  })
  $('.upgrade-click-three').mouseout(() => {
    $('.upgrade-click-three-info').css('display', 'none')
  })
  $('.upgrade-click-four').mouseover(() => {
    $('.upgrade-click-four-info').css('display', 'block')
  })
  $('.upgrade-click-four').mouseout(() => {
    $('.upgrade-click-four-info').css('display', 'none')
  })
  $('.upgrade-click-five').mouseover(() => {
    $('.upgrade-click-five-info').css('display', 'block')
  })
  $('.upgrade-click-five').mouseout(() => {
    $('.upgrade-click-five-info').css('display', 'none')
  })

  $('.upgrade2').click(() => {
    if (currentAmount >= grandmaUpgradePrice) {
      currentAmount -= grandmaUpgradePrice
      grandmaUpgradePrice += 10
      cookiesPerSecond += 1
      updateCookies()
      if (getCookiesPerSecondFunction === false) {
        getCookiesPerSecondFunction = true
        getCookiesPerSecond()
      }
    }
  })





})
