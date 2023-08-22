import { takeLatest, all } from 'redux-saga/effects'
import { handleGetExam } from './handlers/exam'
import { getExam } from '../ducks/examSlice'

function* getExamWatcher() {
  yield takeLatest(getExam.type, handleGetExam)
}

export function* watcherSaga() {
  yield all([getExamWatcher()])
}
