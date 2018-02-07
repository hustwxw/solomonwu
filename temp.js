getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }



