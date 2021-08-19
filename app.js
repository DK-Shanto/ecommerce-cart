
function updateNumber(product, price, isAdd) {
    const phoneNumber = document.getElementById(product + '-number');
    let phoneNumberCurrent = phoneNumber.value;
    const phonePrice = document.getElementById(product + '-price');
    if (isAdd) {
        phoneNumberCurrent = parseInt(phoneNumberCurrent) + 1;
    }
    else {
        if (phoneNumberCurrent > 0)
            phoneNumberCurrent = parseInt(phoneNumberCurrent) - 1;
    }
    phoneNumber.value = phoneNumberCurrent;
    phonePrice.innerText = phoneNumberCurrent * price;
    totalPriceUpdate();
}

function givePrice(product) {
    const getPrice = document.getElementById(product + '-price');
    const getPriceInt = parseInt(getPrice.innerText);
    return getPriceInt;
}

function totalPriceUpdate() {
    const phonePriceTotal = givePrice('phone');
    const casePriceTotal = givePrice('case');
    const subTotal = phonePriceTotal + casePriceTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

document.getElementById('plus-number').addEventListener('click', function () {
    updateNumber('phone', 1219, true);
})

document.getElementById('minus-number').addEventListener('click', function () {
    updateNumber('phone', 1219, false);
})

document.getElementById('plus-case-number').addEventListener('click', function () {
    updateNumber('case', 59, true);
})

document.getElementById('minus-case-number').addEventListener('click', function () {
    updateNumber('case', 59, false);
})

