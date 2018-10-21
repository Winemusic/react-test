import React,{Component} from 'react';
import { connect } from 'react-redux'
// import { getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator';


const TodoList = (props) => {
    const { inputValue, changeInputValue, handleClick, handleDelete } = props
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue} />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {/* <li>Dell</li> */
                    props.list.map((item, index) => {
                        return <li onClick={() => handleDelete(index)} key={index}>{item}</li>

                    })

                }
            </ul>
        </div>
    )
}

// class TodoList extends Component {
//     render() {
//         const { inputValue, changeInputValue, handleClick, handleDelete,list } = this.props
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={changeInputValue} />
//                     <button onClick={handleClick}>提交</button>
//                 </div>
//                 <ul>
//                     {/* <li>Dell</li> */
//                         list.map((item, index) => {
//                             return <li onClick={() => handleDelete(index)} key={index}>{item}</li>

//                         })

//                     }
//                 </ul>
//             </div>
//         )
//     }

// }

//组件中的数据和store中的数据关联
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

//让组件props的方法可以调用store 的dispatch()
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        handleDelete(index) {
            const action = {
                type: 'delete_item',
                index

            }
            dispatch(action);
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(TodoList);