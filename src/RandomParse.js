



random = (min, max) => {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}


movieParse = (outputData, outputDataLength) => {
        let sortedMemes = [];
        let genNumbers = [];

        let randNum = undefined;






function sortMemes() {



    if (outputDataLength < 6 && outputDataLength != 0) {

        for (i = 0; i < outputDataLength; i++) {
            sortedMemes.push(outputData.results[i]);
        }

        memeAppend(sortedMemes);
    } else if (outputDataLength === 0) {

        <MemeBridge title={template.name} imgUrl={template.url} />
        
    } else {
        let randNum = random(0, outputDataLength);
        if (genNumbers.includes(randNum)) {
            sortMemes();
        } else if (sortedMemes.length === 6) {
            memeAppend(sortedMemes);
            return
        } else {
            genNumbers.push(randNum)
            sortedMemes.push(outputData.results[randNum]);
            sortMemes();
        }
    }
}
}