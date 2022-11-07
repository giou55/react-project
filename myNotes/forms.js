import {useRef, useState} from "react";
 
 export function Form() {  
    const inputRef = useRef();
    const emailRef = useRef();

    const [darkMode, setDarkMode] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        const value = inputRef.current.value;
        console.log(value);
    }

    function onChange(e) {
        const value = e.target.value;
        console.log(value);
    }

    return (
        <>
            <div style={{ background: darkMode ? "#333" : "#fff"}}>   
                <form onSubmit={onSubmit}>
                    <label htmlFor="email">Email</label>
                    <input 
                        ref={emailRef} 
                        value={data.email}
                        type="email" 
                        id="email" />
                    
                    Dark Mode:{" "}
                    <input 
                        value={darkMode}
                        type="checkbox" 
                        onChange={e => setDarkMode(e.target.checked)} />

                    <input 
                        ref={inputRef} 
                        onChange={onChange} 
                        type="text" />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
