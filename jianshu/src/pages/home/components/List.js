import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class List extends Component {
    render() {
        const { list, getMoreList,page } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <img className='pic'
                                    src={item.get('imgUrl')}
                                    alt="120"
                                />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )

                    })
                }
                <LoadMore onClick={()=>getMoreList(page)}>加载更多</LoadMore>
            </div>

        )
    }
}

const mapState = (state) => {
    return {
        list: state.get('home').get('articleList'),
        page: state.getIn(['home', 'articlePage'])
    }
}

const mapDispath = (dispath) => ({
    getMoreList(page) {
        dispath(actionCreators.getMoreList(page))
    }

})

export default connect(mapState, mapDispath)(List);