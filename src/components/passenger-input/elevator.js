class Elevator {
    constructor(inputList, currentElevatorFloor) {
        this.passengers = [];
        this.passengerInput = inputList;
        this.currentElevatorFloor = currentElevatorFloor;
    }

    check() {
        // pick people up
        for (let i = 0; i < this.passengerInput.length; i++) {
            if (this.currentElevatorFloor === this.passengerInput[i].currentFloor) {
                console.log(`Picked up passenger at floor ${this.currentElevatorFloor}`);
                this.passengers.push(this.passengerInput[i]);
                this.passengerInput.splice(i, 1);
            }
        }

        // drop people off
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.currentElevatorFloor === this.passengers[i].destination) {
                console.log(`Dropped off passenger at floor ${this.currentElevatorFloor}`);
                this.passengers.splice(i, 1);
            }
        }
    }

    move(destination) {
        if (this.currentElevatorFloor === destination) {
            this.check();
        } else {
            console.log(`Heading to floor ${destination}`);
            let direction = destination > this.currentElevatorFloor ? 1 : -1;
            while (this.currentElevatorFloor !== destination) {
                this.currentElevatorFloor += direction;
                this.check();
            }
        }
    }

    process() {
        if (!this.passengers.length) {
            if (!this.passengerInput.length) {
                console.log("Finished");
                return this.currentElevatorFloor;
            }

            console.log("Elevator empty");
            this.move(this.passengerInput[0].currentFloor);
        }

        while (this.passengers.length) {
            this.move(this.passengers[0].destination);
        }
        return this.process();
    }
}

export default Elevator;