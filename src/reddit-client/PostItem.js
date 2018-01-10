import React from 'react';
import DateFormat from './DateFormat.js';

class ListLastPosts extends React.Component {

    constructor(props) {
        super(props);
        this.item=props.item;
        this.dateFormat= new DateFormat();
    }    


    render() {
        let post=this.item.data;
        return (
            <a href={post.url} target="postDetail">
                <div className="post">
                    <div className="thumbnail"><img src={post.thumbnail?post.thumbnail:'/img/no-image.png'} alt="thumbnail"/></div>
                    <div className="innerRows">
                        <div className="date">{this.dateFormat.format(post.created_utc)}</div>
                        <div className="title">{post.title}</div>
                        <div className="author">{post.author}</div>
                        <div className="comments"><span>Comments</span><br/>{post.num_comments}</div>
                        <div className="score"><span>Score</span><br/>{post.score}</div>
                    </div>
                </div>
            </a>            
        );
    }
}

export default ListLastPosts;