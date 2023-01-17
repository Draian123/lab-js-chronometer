class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) 
    {this.intervalId = setInterval(() => {
    this.currentTime++;
    if (printTimeCallback) {printTimeCallback()}
    }, 10)}
  
 

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    // ... your code goes here
    if(this.currentTime <=0){
      return 0
    }else if (this.currentTime <6000){
      return Math.floor(this.currentTime/100)
    }else {
      let cutSeconds= Math.floor(this.currentTime/100 %60)
      // console.log(cutSeconds)
      return cutSeconds
    }
  }

  getCentiseconds() {
    // console.log(this.currentTime % 100)
  return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    // // ... your code goes here
    // let stringNumberArr = [value.toString()];
    // let stringNumber = "";
    // // console.log(stringNumberArr)
    // if(stringNumberArr[0].length === 1){
    //   stringNumberArr.unshift("0")
    //   stringNumber = stringNumberArr[0]+ stringNumberArr[1]
    //   return stringNumber
    // }else{
    //   stringNumber = stringNumberArr[0]
    //   return stringNumber
    // }
    if(value.toString().length === 1){
      return `0${value}`
    }else{
      return value.toString()
    }

  }

  stop() {
    // ... your code goes here#
    clearInterval(this.intervalId)

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minutesString = this.computeTwoDigitNumber(this.getMinutes())
    let secondsString = this.computeTwoDigitNumber(this.getSeconds())
    let centiSecondsString = this.computeTwoDigitNumber(this.getCentiseconds())
    let finishedString= minutesString + ":" + secondsString + "." + centiSecondsString
    console.log( centiSecondsString, minutesString, secondsString)
    
    // return `${minutesString}:${secondsString}..${centiSecondsString}`
    return finishedString
  }
}
