// @flow
import {
  ADD_TODO
} from '../constants/ActionTypes';

type Todo = {
  text: string,
  completed: boolean,
  id: number
}

const initialTodo: Todo = {
  text: 'Use Redux',
  completed: false,
  id: 0
}

const initialState = [
  initialTodo
];

export default function todos(
  state: Array<Todo> = initialState, 
  action: {type: string, ...any}
): Array<Todo> {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ]

    default:
      return state
  }
};
