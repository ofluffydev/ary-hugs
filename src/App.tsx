import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [text, setText] = useState('hug');

    useEffect(() => {
        const interval = setInterval(() => {
            setText(prevText => prevText + ' hug');
        }, 0);

        return () => clearInterval(interval);
    }, []);

    return <>
        <h1>For ary :3</h1>
        {text}
    </>;
}

export default App;