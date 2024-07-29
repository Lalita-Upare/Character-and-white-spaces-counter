var print = function (lengthWithoutSpaces, whiteSpaceCount) {
    document.getElementById("output").innerHTML = "Length of the string " + lengthWithoutSpaces + "<br>" +
                                                  "Number of white spaces: " + whiteSpaceCount;
}

document.getElementById("btn").onclick = function (event) {
    var inputString = document.getElementById('str').value;
    var lengthWithoutSpaces = inputString.replace(/\s+/g, '').length;
    var whiteSpaceCount = inputString.length - lengthWithoutSpaces;
    print(lengthWithoutSpaces, whiteSpaceCount);
}