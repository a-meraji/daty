import axios from 'axios'

export function fetchExam(_id) {
  return axios.get(`/api/exams?_id=${_id}`)
}
