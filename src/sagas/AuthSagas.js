import { call, put } from 'redux-saga/effects';
import AuthActions from '../redux/AuthRedux';
import { isEmpty, isNil, map } from 'ramda';	

export function* getAuth(api, action) {
	const { data } = action;
    const response = yield call(api.userAuth, data);

	if (typeof atob !== 'undefined') {
		console.log('===> ', response);
		console.log('^^^ GET AUTH ^^^');
    }
    
	if (response.ok && response.data && !isEmpty(response.data.token)) {
        const response_detail = yield call(api.getUserDetail, response.data.token);
        let payload = {
            ...response.data,
            ...response_detail.data
		}
		console.info(payload);
        yield put(AuthActions.authSuccess(payload));
	} else {
		if (response.data && response.data.status == 500) {
			return yield put(AuthActions.authFailure({
				path: 'Sign In',
				message: response.data.message, response
			}));
		}
		yield put(AuthActions.authFailure('Username atau Password Salah !'));
	}
}