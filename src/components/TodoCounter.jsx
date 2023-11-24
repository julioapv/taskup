const TodoCounter = ( {total, completed} ) => {
    return (
        <div>
            You have completed {completed} tasks of {total}
        </div>
    )
}

export { TodoCounter }