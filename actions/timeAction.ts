import { TIME_CHANGE } from '../constants'

const timeChange = (payload) => ({
  type: TIME_CHANGE,
  payload
})

export default timeChange