//crie um programa para realizar operações bancárias na conta do usuário
//comece criando um objeto com o nome do usuário, suas transações e saldo
//as transações (transactions) devem iniciar com um array vazio [] e o saldo (balance) em 0 (zero)
const user = {
    name: 'Morena',
    transactions: [],
    balance: 0
}

//add transactions
function createTransaction(transaction) {
    user.transactions.push(transaction)

    if( transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

//Reports
function getHigherTransactionByType(type) {
    let higherTransaction 
    let higherValue = 0

    for ( let transaction of user.transactions) {
        if ( transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAvarageTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            count.credit++
        } else {
            count.debit++
        }
    }

    return count
}

createTransaction({type: 'credit', value: 50})
createTransaction({type: 'credit', value: 120})
createTransaction({type: 'debit', value: 80})
createTransaction({type: 'debit', value: 30})

console.log(user.balance) //60

console.log(getHigherTransactionByType('credit')) // {type: 'credit', value: 120}
console.log(getHigherTransactionByType('debit')) // {type: 'debit', value: 80}

console.log(getAvarageTransactionValue()) //70

console.log(getTransactionsCount()) //{credit: 2, debit: 2}
