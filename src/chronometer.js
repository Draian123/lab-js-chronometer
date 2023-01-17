class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime++;   
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
      let minutes = 0
      if(this.currentTime >= 60){
        minutes = Math.trunc(this.currentTime/ 60)
        
      }
      return minutes
    
  }

  getSeconds() {
    // ... your code goes here
    if(this.currentTime <=0){
      return 0
    }else if (this.currentTime <60){
      return this.currentTime
    }else {
      let cutSeconds= this.currentTime % 60
      return cutSeconds
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringNumberArr = [value.toString()];
    let stringNumber = "";
    // console.log(stringNumberArr)
    if(stringNumberArr[0].length === 1){
      stringNumberArr.unshift("0")
      stringNumber = stringNumberArr[0]+ stringNumberArr[1]
      return stringNumber
    }else{
      stringNumber = stringNumberArr[0]
      return stringNumber
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    let minutesString = this.computeTwoDigitNumber(this.getMinutes())
    let secondsString = this.computeTwoDigitNumber(this.getSeconds())
    let finishedString= minutesString + ":" + secondsString
    return finishedString

  }
}
