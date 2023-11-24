import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { AddTaskButton } from "./AddTaskButton"

const Header = () => {
    return (
        <div>
            <h1 className="text-4xl text-blue-500">Taskup! ⚔️</h1>
            <TodoCounter completed={5} total={10} />
            <div className="flex">
                <TodoSearch />
                <AddTaskButton />
            </div>
        </div>
    )
}

export { Header }