import { httpManager } from './../../../../core/http_manager';

const fetchData = (state: any, payload: any) => {
    const { request = {}, dispatch = null } = { ...payload };
    const loading = true;
    httpManager
        .requestHandler({ payload })
        .then(response =>
            dispatch({ type: request.success, payload: response })
        )
        .catch(err => dispatch({ type: request.failure, payload: err }));
    return { ...state, loading };
};

const loginSuccess = (state: any, payload: any) => {
    return { ...state, loading: false, user: payload };
};

const loginFailure = (state: any, payload: any) => {
    const error = payload;
    const loading = false;
    return { ...state, error, loading };
};

export { fetchData, loginSuccess, loginFailure };
