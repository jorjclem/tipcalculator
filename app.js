let bill= Number (prompt ("What is your bill?"))
total_bill = (bill * 0.07) + bill
tip = (total_bill * 0.05)
final_bill = (total_bill + tip)
document.body.innerHTML= final_bill