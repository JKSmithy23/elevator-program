import React, { useState } from 'react';
import Elevator from './elevator';

export const PassengerInput = () => {
    const [inputList, setInputList] = useState([{ currentFloor: "", destination: "" }]);
    const [currentElevatorFloor, setCurrentElevatorFloor] = useState(1);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = Number(value);
        setInputList(list);
    };
    
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    const handleAddClick = () => {
        setInputList([...inputList, { currentFloor: "", destination: "" }]);
    };

    const runElevator = () => {
        let elevator = new Elevator(inputList, currentElevatorFloor);
        const finalDestination = elevator.process();
        setCurrentElevatorFloor(finalDestination);
    };

    return (
        <div>
            {inputList.map((x, i) => {
                return (
                <div key={i}>
                    Passenger {i + 1}
                    <input
                        name="currentFloor"
                        placeholder="Current Floor"
                        type="number"
                        value={x.currentFloor}
                        onChange={e => handleInputChange(e, i)}
                    />
                    <input
                        name="destination"
                        placeholder="Destination Floor"
                        type="number"
                        value={x.destination}
                        onChange={e => handleInputChange(e, i)}
                    />
                    {inputList.length !== 1 && <button onClick={() => handleRemoveClick(i)}>Remove</button>}
                    {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                </div>
                );
            })}
            <div>Current Floor: {currentElevatorFloor}</div>
            <button onClick={runElevator}>Run elevator</button>
        </div>
    )
}