let bill= Number (prompt ("What is your bill?"))
let total_bill = (bill * 0.07) + bill
let tip = (total_bill * 0.05)
let final_bill = (total_bill + tip)
document.body.innerHTML= final_bill