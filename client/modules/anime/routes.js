import React from 'react';
import {mount} from 'react-mounter';

import {
  AuthCheck,
  LayoutDefault,
  LayoutHome,
  Simplest,
  NotFound,
} from '/client/configs/components.js';

import MainLayout from './components/main_layout';
import PostList from './containers/postlist';
import Post from './containers/post';
import NewPost from './containers/newpost';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const LayoutDefaultCtx = injectDeps(LayoutDefault);
  const LayoutHomeCtx = injectDeps(LayoutHome);

  FlowRouter.route('/', {
    name: 'anime.list',
    action() {
      mount(LayoutHomeCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(LayoutDefaultCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<NewPost/>)
      });
    }
  });
}
