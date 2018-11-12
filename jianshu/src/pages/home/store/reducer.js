import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "社会热点",
        imgUrl: "//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
        id: 2,
        title: "摄影",
        imgUrl: "//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
        id:3,
        title:"简书电影",
        imgUrl:"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
        id:4,
        title:"旅行在路上",
        imgUrl:"//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
        id:5,
        title:"@IT·互联网",
        imgUrl:"//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
        id:6,
        title:"手绘",
        imgUrl:"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }

    ]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}