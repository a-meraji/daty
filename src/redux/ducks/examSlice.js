import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  isStarted: false,
  questionIndex: 0,
  _id: '',
  name: '',
  startDate: '',
  endDate: '',
  isTimeRestricted: false,
  timePerTest: 0,
  isEditable: true,
  isShuffle: true,
  exam: [{}],
  answers: [],
  examSubmited: false,
  result: '',
  wrongAnswerds: [],
}

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setIsStarted: (state, action) => {
      state.isStarted = action.payload
    },
    toggleQuestionIndex: (state, action) => {
      const index = action.payload === 'inc' ? 1 : -1
      state.questionIndex += index
    },
    setQuestionIndex: (state, action) => {
      state.questionIndex = action.payload
    },
    getExam: () => {},
    setExam: (state, action) => {
      const {
        _id,
        name,
        startDate,
        endDate,
        isTimeRestricted,
        isEditable,
        isShuffle,
        timePerTest,
        exam,
      } = action.payload

      return {
        ...state,
        _id,
        name,
        startDate,
        endDate,
        isTimeRestricted,
        isEditable,
        isShuffle,
        timePerTest,
        exam,
      }
    },
    setAnswers: (state, action) => {
      const { qID, aID } = action.payload
      let newAnswers = []
      if (state.answers.length === 0) {
        newAnswers = [{ qID, aID }]
      } else {
        const isIncluded =
          state.answers.filter((answer) => answer.qID === qID).length === 1
        if (isIncluded) {
          newAnswers = state.answers.map((answer) =>
            answer.qID === qID ? { qID, aID } : answer
          )
        } else {
          newAnswers = [...state.answers, { qID, aID }]
        }
      }
      state.answers = newAnswers
    },
    sendAnswers: () => {},
    setResult: (state, action) => {
      const { result, wrongAnswerds } = action.payload
      return { ...state, examSubmited: true, result, wrongAnswerds }
    },
    resetExam: () => {
      return { ...initialState }
    },
  },
})

export const {
  setIsStarted,
  toggleQuestionIndex,
  setQuestionIndex,
  getExam,
  setExam,
  setAnswers,
  sendAnswers,
  setResult,
  resetExam,
} = examSlice.actions

export default examSlice.reducer
