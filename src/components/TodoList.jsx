import { TodoItem } from "./TodoItems"

const TodoList = () => {
    
    let defaultTodos = [
        {
          name: 'Task 1',
          status: true,
          id: 1
        },
        {
          name: 'Task 2',
          status: false,
          id: 2
        },
        {
          name: 'Task 3',
          status: true,
          id: 3
        }
      ]    
    
    return (
        <div>
            <h1>TodoList</h1>
            <ul>
            {
                defaultTodos.map((taskItem) => (
                    <TodoItem key={taskItem.id} name={taskItem.name} status={taskItem.status}/>
                ))
            }
            </ul>
        </div>
    )
}

export { TodoList }