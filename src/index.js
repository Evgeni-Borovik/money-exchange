// PLEASE DON'T change function name
// module.exports = function makeExchange(currency) {
    var exchange = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var coins = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    var amount = currency;
    var output = {};
    for (var key in coins) {
        // этот код будет вызван для каждого свойства объекта
        var div_result = Math.floor(amount / coins[key]);
        if (div_result > 0) {
            amount = amount - coins[key] * div_result;
            output[key] = div_result;
            console.log(output);
        }
    }
}

exchange(100);
