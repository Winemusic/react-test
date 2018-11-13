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
        id: 3,
        title: "简书电影",
        imgUrl: "//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
        id: 4,
        title: "旅行在路上",
        imgUrl: "//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
        id: 5,
        title: "@IT·互联网",
        imgUrl: "//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
        id: 6,
        title: "手绘",
        imgUrl: "//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }],

    articleList: [{
        id: 1,
        title: "当我老了",
        desc: "三原则：图原创，文原创，诗原创。 当我老了 回故乡的村庄生活 村前有四季分明的山 村后有静静流淌的河 时常在太阳底下闲坐 帮老伴梳满头白发 听她...",
        imgUrl: "//upload-images.jianshu.io/upload_images/4810847-9c4e8004c72a1018.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
        id: 2,
        title: "赵丽颖：我要付出多少努力，才有资格和你坐在一起喝咖啡",
        desc: "文 / 奶油蛋糕 这两天整个网络，各大平台，都被赵丽颖和冯绍峰刷屏了。 最近这几个月，社会上“不太平”，大家天天都饱受各种负面消息的影响。终于，...",
        imgUrl: "//upload-images.jianshu.io/upload_images/14160092-65b7fba45c08fadc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
        id: 3,
        title: "婚姻的路上，爱你一生的男人，会心甘情愿对你做这3件事",
        desc: "深深的话我们浅浅地说，长长的路我们慢慢地走。——毕淑敏《 恰到好处的幸福》 每个人都期待幸福，希望遇到一个对的人一直在自己的身边。但我们经常会在...",
        imgUrl: "//upload-images.jianshu.io/upload_images/2771518-65245f5852e8a16b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }],
    recommendList: [{
        id: 1,
        imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
    },
    {
        id: 2,
        imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
    }
    ]

});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}