let time = "19:09"
const numberToWords = require("number-to-words")

const timeWord = (time) => {
    let hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']
    let ohs = ["o'clock", 'oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine']
    let timeArr = time.split(":")
    let wordTime = []
    if(time === "00:00"){
        return "midnight"
    }else if(time === "12:00"){
        return "noon"
    }else{
        if(timeArr[0] === '00'||timeArr[0]==='12'){
            wordTime.push(hours[0])
        }else if(timeArr[0] === '01'||timeArr[0]==='13'){
            wordTime.push(hours[1])
        }else if(timeArr[0] === '02'||timeArr[0]==='14'){
            wordTime.push(hours[2])
        }else if(timeArr[0] === '03'||timeArr[0]==='15'){
            wordTime.push(hours[3])
        }else if(timeArr[0] === '04'||timeArr[0]==='16'){
            wordTime.push(hours[4])
        }else if(timeArr[0] === '05'||timeArr[0]==='17'){
            wordTime.push(hours[5])
        }else if(timeArr[0] === '06'||timeArr[0]==='18'){
            wordTime.push(hours[6])
        }else if(timeArr[0] === '07'||timeArr[0]==='19'){
            wordTime.push(hours[7])
        }else if(timeArr[0] === '08'||timeArr[0]==='20'){
            wordTime.push(hours[8])
        }else if(timeArr[0] === '09'||timeArr[0]==='21'){
            wordTime.push(hours[9])
        }else if(timeArr[0] === '10'||timeArr[0]==='22'){
            wordTime.push(hours[10])
        }else if(timeArr[0] === '11'||timeArr[0]==='23'){
            wordTime.push(hours[11])
        }
    if(+timeArr[1]<10){
        if(timeArr[1]=== '00'){
            wordTime.push(ohs[0])
        }else if(timeArr[1]=== '00'){
            wordTime.push(ohs[0])
        }else if(timeArr[1]=== '01'){
            wordTime.push(ohs[1])
        }else if(timeArr[1]=== '02'){
            wordTime.push(ohs[2])
        }else if(timeArr[1]=== '03'){
            wordTime.push(ohs[3])
        }else if(timeArr[1]=== '04'){
            wordTime.push(ohs[4])
        }else if(timeArr[1]=== '05'){
            wordTime.push(ohs[5])
        }else if(timeArr[1]=== '06'){
            wordTime.push(ohs[6])
        }else if(timeArr[1]=== '07'){
            wordTime.push(ohs[7])
        }else if(timeArr[1]=== '08'){
            wordTime.push(ohs[8])
        }else if(timeArr[1]=== '09'){
            wordTime.push(ohs[9])
        }
    }else {
        wordTime.push(numberToWords.toWords(timeArr[1]))
    }
    if(+timeArr[0]<12){
        wordTime.push('am')
    }else{
        wordTime.push('pm')
    }
}
    wordTime = wordTime.join(' ')
    return wordTime
}
console.log(timeWord(time))
