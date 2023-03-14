import React, {useState, useEffect, useRef} from 'react';


function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => { 
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

  return (
    <div>
        <form className='todo-form' onSubmit={handleSubmit}> 
            {props.edit ? ( 
            <>
            <input 
                type='text' 
                placeholder='Enter text' 
                value={input}
                name='text'
                className='todo-input edit'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button edit' onClick={handleSubmit}>Update you note</button>
            </>
            ) : (
            <>
            <input 
                type='text' 
                placeholder='Enter text ' 
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>Add new note</button>
            </>
            )}
        </form>
    </div>
  );
}

export default TodoForm;