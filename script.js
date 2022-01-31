function showVerticalMessage(str) {
    const sliceStr = str.slice(0, 10)
    const registerConversion = (sliceStr[0] === 'м') ? sliceStr[0].toUpperCase() + sliceStr.slice(1) : sliceStr

    for (let char of registerConversion) {
        console.log(char)
    }
}

showVerticalMessage('марафон')