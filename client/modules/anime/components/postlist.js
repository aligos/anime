import React from 'react';

const PostList = ({posts}) => (
  <div>
    <div className='row'>
      {posts.map(post => (
        <div className="col-md-3" key={post._id}>
          <div className="site-preview">
            <div className="site-thumbnail">
              <img src="https://static.pexels.com/photos/7025/summer-darling-thatsdarling.jpg" alt="thumbnail" />
              <a href={`/post/${post._id}`} className="hover-button">
                <span className="icon-lined-play"></span>
              </a>
              <div className="meta-info">
                <div className="site-excerpt">
                  <h2 className="site-title"><a href={`/post/${post._id}`}>{post.title}</a></h2>
                </div>

                <div className="love-block">
                  <div className="total-love">
                    <span className="icon-line-heart"></span>
                    <span className="count">20</span>
                  </div>
                  <div className="total-view">
                    <span className="icon-line-eye"></span>
                    <span className="count">100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PostList;
