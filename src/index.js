class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.isActive = false
        
        this.timerEl = document.querySelector(selector),
        this.daysTimerEl = this.timerEl.querySelector("[data-value='days']"),
        this.hoursTimerEl = this.timerEl.querySelector("[data-value='hours']"),
        this.minsTimerEl = this.timerEl.querySelector("[data-value='mins']"),
        this.secsTimerEl = this.timerEl.querySelector("[data-value='secs']")

        this.targetDate = targetDate
    }


    start() {
        if (this.isActive === true) {
            return
        }

        this.isActive = true
        this.timerId = setInterval(() => {
        const remainTime = this.targetDate.getTime() - Date.now()

        const days = Math.floor(remainTime / (1000 * 60 * 60 * 24))
        const hours = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const mins = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((remainTime % (1000 * 60)) / 1000);

        this.daysTimerEl.textContent = `${days}`
        this.hoursTimerEl.textContent = `${hours}`
        this.minsTimerEl.textContent = `${mins}`
        this.secsTimerEl.textContent = `${secs}`

        }, 1000)
        
    }

    stop() {
        this.isActive = false

        clearInterval(this.timerId)
    }
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
})


timer.start()
// timer.stop()

