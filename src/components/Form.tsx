import React, { useState, useContext, useRef } from "react";
import { GlobalContext } from './context/GlobalContext'

interface Params {
    handleInputs: any;
    handleSubmit: any;
    handleKeyPress: any;
}

const Form = () => {

    // Context Data
    const [tasks, setTasks] = useContext(GlobalContext)

    // Initial State form
    const [state, setState] = useState({
        name: "",
        sets: 0,
        reps: 0,
        rest: 0,
        isCompleted: false,
    });

    // Element 
    const firstInput = useRef<HTMLInputElement>(null!)

    function handleFocus() {
        firstInput.current.focus()
    }

    function handleInput(event: any) {
        const value = event.target.value;
        setState({ ...state, [event.target.name]: value });
        console.log(state)
    }

    function handleSubmit(event: any) {
        if (event.key === "Enter") {
            addItem();
            setTimeout(() => {
                handleFocus()
            }, 0);
        }
    }

    function addItem() {
        const newItem = [...tasks];
        newItem.push(state);
        setTasks(newItem);
        setState({ name: "", sets: 0, reps: 0, rest: 0, isCompleted: false });
        document.forms[0].reset();
    }



    return (
        <div className="card">
            <form className="form__add">
                <input
                    type="text"
                    name="name"
                    value={state.name || ''}
                    placeholder="Exercice name"
                    onChange={handleInput}
                    ref={firstInput}
                    required
                />
                <input
                    type="number"
                    name="reps"
                    value={state.reps || ''}
                    placeholder="Reps"
                    max="10"
                    onChange={handleInput}
                    required
                />
                <input
                    type="number"
                    name="sets"
                    value={state.sets || ''}
                    placeholder="Sets"
                    max="10"
                    onChange={handleInput}
                    // onKeyDown={handleKeyPress}
                    required
                />
                <input
                    type="number"
                    name="rest"
                    value={state.rest || ''}
                    placeholder="Rest Time"
                    max="100000"
                    onChange={handleInput}
                    onKeyDown={handleSubmit}
                    required
                />
                <button className="btn btn--primary" type="button" onClick={addItem}>Add Exercice</button>
                <p><small>Press <strong> Enter </strong> to add exercice.</small></p>
                <button className="btn btn--secondary" type="button" onClick={() => setTasks([])}>Clear all</button>
            </form>
        </div>
    );
};

export default Form;