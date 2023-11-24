const TodoItem = ( {name, status, id} ) => {
    return (
        <li className="flex">
            <button>
            ✅
            </button>
            
            <p className={`${status === true ? "" : "line-through"}`}>
                {name}
            </p>

            <button>
            ❌
            </button>
        </li>
    )
}

export { TodoItem }