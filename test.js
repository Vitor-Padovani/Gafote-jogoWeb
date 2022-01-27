function binaryToInt(n) {

    var result = 0

    var base = 1
    var invertedN = n.toString().split('').reverse().join('')

    console.log(invertedN)

    for (var char in invertedN) {
        if (char == '1') {
            result += base
        }
        base = base * 2
    }

    return result
}

console.log(binaryToInt(11101))
