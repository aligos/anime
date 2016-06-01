import React from 'react';
import CommentList from '../../comments/containers/comment_list';
import Iframe from 'react-iframe';

const Post = ({post}) => (
  <div>
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div className="play-video">
          {post.saving ? <p>Saving...</p> : null}
          <h2>{post.title}</h2>

          <Iframe url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fnaghkanime%2Fvideos%2Fvb.1568775026673366%2F1585331841684351%2F%3Ftype%3D3&show_text=0&width=560" width="100%" height="100%" position="relative" overflow="hidden" border="none" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" />
          <p>
            {post.content}
          </p>
          <div>
            <h4>Comments</h4>
            <CommentList postId={post._id}/>
          </div>
        </div>

        <div className="video-pagi">
            <h5><span className="eps-title">Episode:</span></h5>
            <nav>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                </li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
      </div>
    </div>
  </div>
);

export default Post;
