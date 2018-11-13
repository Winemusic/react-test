import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';
class Recommend extends Component {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper >
                {list.map((item) => {
                    return <RecommendItem key = {item.get('id')} imgUrl={item.get('imgUrl')} />
                })}
            </RecommendWrapper>)
    }
}


const mapState = (state) => {
    return {
        list: state.getIn(['home', 'recommendList'])
    }
}

// const mapDispath=(dispath)=>{


// }

export default connect(mapState, null)(Recommend);