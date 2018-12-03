import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    NavSearch,
    Addition,
    Button

} from './style';


class Header extends Component {
    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMousEnter, handleMousLeave, handleChangePage } = this.props;
        const newList = list.toJS();//immutable转普通JS类型
        const pageList = [];

        if (newList.length) {
            for (let i = (page - 1) * 6; i < page * 6; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                );
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMousEnter}
                    onMouseLeave={handleMousLeave}>
                    <SearchInfoTitle>
                        热门搜索
                            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)} >
                            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
                            换一批
                            </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else return null
    }
    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login,logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {login ?
                        <NavItem onClick={logout} className='right'>退出</NavItem> :
                        <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>}
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to = '/write'>
                        <Button className='writting'>
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )

    }
}
// const Header = (props) => {
// }


const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMousEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMousLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }

        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);