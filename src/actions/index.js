// @flow
import * as types from '../constants/ActionTypes';

export const addTodo = (text: string) => ({ type: types.ADD_TODO, text });
