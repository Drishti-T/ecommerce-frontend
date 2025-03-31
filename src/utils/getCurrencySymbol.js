export const getCurrencySymbol = (currency) => {
    const symbols = {
        USD: "$",
        INR: "Rs",
        EUR: "€",
        GBP: "£",
        JPY: "¥",
        AUD: "A$",
        CAD: "C$",
    }
    return symbols[currency] || "$" //  to avoid undefined we use fallback value USD : "$" 
}

// example:
// currency = "USD"
// console.log(symbols[currency]); //output: $
// console.log(symbols["USD"]);  // Output: $
// console.log(symbols["INR"]);  // Output: ₹
// console.log(symbols.USD);  // Output: $
// console.log(symbols.INR);  // Output: ₹

// const currency = "INR";
// console.log(symbols[currency]);  // Output: ₹
// console.log(symbols.currency);   // Output: undefined ❌


