import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;

export const HomeLeft = styled.div`
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left;
    .banner-img{
        width:625px;
        hight:270px;
    }
`;

export const HomeRight = styled.div`
    width:240px;
    float:right;
    // margin:0 auto;
    // height:300px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
 
`;

export const TopicItem = styled.div`
    float:left;
    height:32px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    line-height:32px;
    background:#f7f7f7;
    font-size:14px;
    coloar:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;
