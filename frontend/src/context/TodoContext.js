import { createContext, useReducer } from 'react'
export const TodosContext = createContext()
export const todosReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        todos: action.payload
      }

    case 'CREATE_TODO':
      return {
        todos: [action.payload, ...state.todos]
      }

    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload._id)
      }

    case 'EDIT_TODO':
      return {
        todos: state.todos.map((todo) => {
          if (todo._id === action.payload._id) {
            return action.payload;
          } else {
            return todo;
          }
        })
      }

    case 'SET_TODO':
      return {
        todos: state.todos.map((todo) => {
          if (todo._id === action.payload._id) {
            return {
              ...todo,
              ...action.payload
            };
          } else {
            return todo;
          }
        })
      }

    default:
      return state
  }
}
export const TodosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, {
    todos: null
  })
  return (
    <TodosContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodosContext.Provider>
  )
}