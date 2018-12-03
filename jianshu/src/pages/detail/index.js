import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}



const mapState = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
    }
}

const mapDispath = (dispath) => ({
    getDetail(id) {
        dispath(actionCreators.getDetail(id));
    }
})

export default connect(mapState, mapDispath)(withRouter(Detail));