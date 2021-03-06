import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos, * as todosSelectors from './todos'
import todosFromServer, * as todosFromServerSelectors from './todosFromServer'
import { ACTIONS, VisibilityFilters } from '../actions/constants'

export const getVisibleTodos = (state, filter) => {
  return todosSelectors.getVisibleTodos(state.todos, filter)
}

export const getVisibleServerTodos = (state, filter) => {
  return todosFromServerSelectors.getVisibleServerTodos(state.todosFromServer, filter)
}

export const getIsFetching = (state, filter) => {
  return todosFromServerSelectors.getIsFetching(state.todosFromServer, filter)
}

export const getFetchError = (state, filter) => {
  return todosFromServerSelectors.getFetchError(state.todosFromServer, filter)
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  todosFromServer
})

export default todoApp
