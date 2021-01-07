import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";
const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};


const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = {}

    switch (action.type) {

        case RECEIVE_TODOS:
            action.todos.forEach(todo => {
                nextState[todo.id] = todo; // question?
            });
            return nextState;
        case RECEIVE_TODO:
            const updatedTodo = {[action.todo.id]: action.todo};
            let obj3 = Object.assign({}, state, updatedTodo);
            return obj3
        default:
            return state;
    }
};

export default todosReducer;
