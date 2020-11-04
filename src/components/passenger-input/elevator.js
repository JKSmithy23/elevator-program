class Elevator {
    constructor(inputList, currentElevatorFloor) {
        this.passengers = [];
        this.passengerInput = inputList;
        this.currentFloor = currentElevatorFloor;
    }

    check() {
        // pick people up
        for (let i = 0; i < this.passengerInput.length; i++) {
            if (this.currentFloor === this.passengerInput[i].currentFloor) {
                console.log(`Picked up passenger at floor ${this.currentFloor}`)
                this.passengers.push(this.passengerInput[i])
                this.passengerInput.splice(i, 1)
            }
        }

        // drop people off
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.currentFloor === this.passengers[i].destination) {
                console.log(`Dropped off passenger at floor ${this.currentFloor}`)
                this.passengers.splice(i, 1)
            }
        }
    }

    move(destination) {
        console.log(`Heading to floor ${destination}`)
        let direction = destination > this.currentFloor ? 1 : -1
        while (this.currentFloor !== destination) {
            this.currentFloor += direction
            this.check()
        }
    }

    process() {
        if (!this.passengers.length) {
            if (!this.passengerInput.length) {
                console.log("Finished")
                return
            }

            console.log(`Elevator empty`)
            if (this.currentFloor === this.passengerInput[0].currentFloor) {
                this.check()
            } else {
                this.move(this.passengerInput[0].currentFloor)
            }
        }

        while (this.passengers.length) {
            this.move(this.passengers[0].destination)
        }

        if (this.passengerInput.length) {
            this.process()
        }
        return this.currentFloor;
    }
}

export default Elevator;