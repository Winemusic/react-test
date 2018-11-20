import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style'
class Topic extends PureComponent {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item) => (
                        <TopicItem key={item.get('id')}>
                            <img
                                className='topic-pic'
                                src={item.get('imgUrl')}
                                alt='64'
                            />
                            {item.get('title')}
                        </TopicItem>
                    )
                    )
                }
            </TopicWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'topicList'])
    }
}

// const mapDispath=(dispath)=>{


// }

export default connect(mapState, null)(Topic);