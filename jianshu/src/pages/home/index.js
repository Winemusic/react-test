import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
// import actionCreators from './store';
import { actionCreators } from './store';
import { BackTop } from './style'


import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4514/a9212731b77ad524cb832c35d314348ec0b66235.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnMount() {
        window.EventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },

    changeScrollTopShow(e) {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});

export default connect(mapState, mapDispatch)(Home);