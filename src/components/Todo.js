import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { EditOutlined  } from '@ant-design/icons';
import { DeleteOutlined  } from '@ant-design/icons';

function Todo( {todos, completeTodo, removeTodo, updateTodo, raw,} ) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    
    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

  return todos.map((todo, index) => (
    <div 
        className={todo.isComplete ? 'todo-row complete':'todo-row'} 
        key={index}
    >
        <div 
            key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <EditOutlined 
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className='edit-icon'
            />
            <DeleteOutlined
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
            />
        </div>
    </div>
  ))
};

export default Todo