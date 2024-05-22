const text = "hello hello"

const symbols = [
{
    value: "a",
    cryptedValue: "8961"
},
{
    value: "b",
    cryptedValue: "1091"
},
{
    value: "c",
    cryptedValue: "2386"
},
{
    value: "d",
    cryptedValue: "4322"
},
{
    value: "f",
    cryptedValue: "9892"
}
{
    value: "g",
    cryptedValue: "1214"
},
{
    value: "i",
    cryptedValue: "4643"
},
{
    value: "j",
    cryptedValue: "9753"
},
{
    value: "k",
    cryptedValue: "1092"
},
{
    value: "m",
    cryptedValue: "5673",
},
{
    value: "n",
    cryptedValue: "8882"
},
{
    value: "p",
    cryptedValue: "8223"
},
{
    value: "q",
    cryptedValue: "8557"
},
{
    value: "r",
    cryptedValue: "5832"
},
{
    value: "s",
    cryptedValue: "2275"
},
{
    value: "t",
    cryptedValue: "1003"
},
{
    value: "u",
    cryptedValue: "2594"
},
{
    value: "v",
    cryptedValue: "2344"
},
{
    value: "h",
    cryptedValue: "2344"
},
{
    value: "e",
    cryptedValue: "9283"
}, 
{
    value: "l",
    cryptedValue: "0934"
},
{
    value: "o",
    cryptedValue: "8272"
},
{
    value: " ",
    cryptedValue: "3433"
}
]
const cryptedText = []
const destroyedText = text.split("")
 const crypt = (destroyedText) => {
     destroyedText.forEach((symbol) => {
         symbols.forEach((cryptedSymbol) => {
        if (symbol === cryptedSymbol.value) {
            let crypted = cryptedSymbol.cryptedValue;
            cryptedText.push(crypted);
        }
    })
     })
}

crypt(destroyedText);
console.log(cryptedText);
