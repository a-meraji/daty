import { call, put } from 'redux-saga/effects'
import { setExam } from '../../ducks/examSlice'
import { fetchExam } from '../requests/exam'
import { setLoading, setNotife } from '../../ducks/layoutSlice'

export function* handleGetExam(action) {
  try {
    if (action.payload === undefined) {
      throw new Error('_id is undefined')
    }
    yield put(setLoading(true))
    const { data } = yield call(fetchExam, action.payload)
    yield put(setExam({ ...data }))
    yield put(setLoading(false))
  } catch (error) {
    yield put(setLoading(false))
    yield put(setNotife({ message: "can't find any exam with your given id", color:"warning" }))
  }
}
