import axios from 'axios';
import * as constans from './constants'

const changeLogin = () => ({
    type: constans.CHANGE_LOGIN,
    value: true
})

export const logout = ()=>({
    type: constans.CHANGE_LOGOUT,
    value: false
})
export const login = (account, passward) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + passward).then((res) => {
            console.log(res)
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin())
            } else {

            }
        })
    }
}