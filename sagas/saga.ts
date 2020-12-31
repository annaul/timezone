import { call, put, takeLeading } from 'redux-saga/effects';
import axios from 'axios'
import  timeChange from '../actions/timeAction'
import { API_KEY, API_URL } from '@env'

const getTime = (action: any) => {
	const params = {
		key: API_KEY,
		format: 'json',
		by: 'position',
		...action
	}

	return axios.request({
		method: 'get',
		url: API_URL,
		params
	});
}

function* timeSaga(action: { payload: any; }) {
  try {
    let { data } = yield call(getTime, action.payload);
	const result = data.formatted
	 yield put({ type: 'TIME_CHANGE', result })

  } catch (e) {
	  console.warn(e)
  }
}

export default function* rootSaga() {
  yield takeLeading(timeChange, timeSaga)
}
