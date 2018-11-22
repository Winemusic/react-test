import axios from 'axios';
import * as constans from './constants'
import { fromJS } from 'immutable';

const changeDetail = (title, content)=>({
    type:constans.CHANGE_DETAIL,
    title,
    content

})

export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then(
            (res) => {
                console.log(res.data.data);
                const result = res.data.data;
                dispatch(changeDetail(result.title, result.content))
            }
        )
    }
}