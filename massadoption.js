let transactions_number = document.body.querySelector(".transactions div .itemnumbers")
let transactions_value =transactions_number.textContent
transactions_number.textContent = Number(transactions_value) + 1

function counting(){
    console.log( Number(transactions_value) + 1)
}

setInterval(counting , 2000);