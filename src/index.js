// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };

    var output = {};
    if (currency <= 0) {
        return output;
    }
    else if (currency > 10000) {
        output.error = "You are rich, my friend! We don't have so much coins for exchange";
        return output;
    }
    else {
        var amount = currency;
        for (var key in coins) {
            var div_result = Math.floor(amount / coins[key]);
            if (div_result > 0) {
                amount = amount - coins[key] * div_result;
                output[key] = div_result;
            }
        }
        return output;
    }
}
