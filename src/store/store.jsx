import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './features/tasks'

export default configureStore({
  reducer: {
    task: taskReducer
  },
})