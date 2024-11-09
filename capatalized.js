function lowerToCapatalized(lowerCase){

    //Converting the first character to uppercase and adding rest of the characters afterward.
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}
module.exports = lowerToCapatalized;