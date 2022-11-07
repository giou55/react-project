import {useEffect, useState} from "react";

export function Counter() {
    const [items, setItems] = useState(["car", "ball", "toy"]);
    const [count, setCount] = useState(0);

    // κάθε φορά που αλλάζει το count γίνεται το console.log
    useEffect(() => {
        console.log(count);
    }, [count]);

    function increaseCount(amount) {
        // το παρακάτω είναι λάθος
        setCount(count + amount);

        // αυτό είναι το σωστό
        setCount(currentCount => {
            return currentCount + amount;
        });

        // η τιμή του count δεν γίνεται update κάθε φορά που γίνεται το 
        // click γιατί το setCount λειτουργεί asynchronously
        console.log(count);
    }

    return (
        <>
            <h3>Items:</h3>
            {items.map(item => (
                <div>{item}</div>
            ))}

            <button onClick={() => increaseCount(1)}>
                +
            </button>

            <div>{count}</div>
        </>
    )
}