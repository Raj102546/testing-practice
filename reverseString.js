function reverseStr(string) {

    //Spliting every character of a string into multiple string, then reverse it and joined them together
    return string.split("").reverse().join("");
}

module.exports = reverseStr;