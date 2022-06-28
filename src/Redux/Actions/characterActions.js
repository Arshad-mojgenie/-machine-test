import axios from "../../Axios"


export const GetCharacter = (id) => (dispatch) => {
    dispatch({ type: 'NOC_ALL_REQUEST', })
    axios.get(`/character/${id}`)
        .then(res => {
            if (res.data) {
                dispatch({
                    type: 'CHARACTER_ALL_SUCCESS', payload: {
                        current_character: res.data ? res.data.docs : []
                    }
                })
            } else {
                dispatch({ type: 'CHARACTER_ALL_FAILED' })
            }
        })
        .catch(err => {
            dispatch({ type: 'CHARACTER_ALL_FAILED', });
        })
}

export const GetAllCharacter = () => (dispatch) => {
    dispatch({ type: 'NOC_ALL_REQUEST', })
    axios.get(`/character?limit=5`)
        .then(res => {
            if (res.data) {
                dispatch({
                    type: 'CHARACTER_ALL_SUCCESS', payload: {
                        all_character: res.data ? res.data.docs : []
                    }
                })
            } else {
                dispatch({ type: 'CHARACTER_ALL_FAILED' })
            }
        })
        .catch(err => {
            dispatch({ type: 'CHARACTER_ALL_FAILED', });
        })
}
export const GetFilterCharacterByName = (name) => (dispatch) => {
    dispatch({ type: 'NOC_ALL_REQUEST', })
    axios.get(`/character?name=${name}`)
        .then(res => {
            if (res.data) {
                dispatch({
                    type: 'CHARACTER_ALL_SUCCESS', payload: {
                        all_character: res.data ? res.data.docs : []
                    }
                })
            } else {
                dispatch({ type: 'CHARACTER_ALL_FAILED' })
            }
        })
        .catch(err => {
            dispatch({ type: 'CHARACTER_ALL_FAILED', });
        })
}



export const SubmitSearchCharacter = (limit, gender, race, orderItem) => (dispatch) => {
    dispatch({ type: 'NOC_ALL_REQUEST', })
    axios.get(`/character?limit=${limit}&gender=${gender}&race=${race}&sort=name:${orderItem}`)
        .then(res => {
            if (res.data) {
                dispatch({
                    type: 'CHARACTER_ALL_SUCCESS', payload: {
                        all_character: res.data ? res.data.docs : []
                    }
                })
            } else {
                dispatch({ type: 'CHARACTER_ALL_FAILED' })
            }
        })
        .catch(err => {
            dispatch({ type: 'CHARACTER_ALL_FAILED', });
        })
}