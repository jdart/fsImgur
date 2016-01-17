
import Imgur from './Imgur.react';
import FsImg from './FsImg.react';
import FsIframe from './FsIframe.react';
import Reddit from './reddit/Reddit.react';
import Gfycat from './Gfycat.react';
import Instagram from './Instagram.react';
import Youtube from './Youtube.react';
import Twitter from './Twitter.react';
import Streamable from './Streamable.react';
import Readability from './Readability.react';
import {hostMatch} from '../utils';
import url from 'url';

const matchers = [{
  test: (entryUrl, props) => !!props.comments,
  component: Reddit,
}, {
  host: 'reddit.com',
  component: Reddit,
}, {
  host: 'twitter.com',
  component: Twitter,
}, {
  host: 'imgur.com',
  component: Imgur,
}, {
  test: (entryUrl, props) => entryUrl.match(/\.(jpg|jpeg|png|gif)$/),
  component: FsImg,
}, {
  host: 'streamable.com',
  component: Streamable,
}, {
  host: 'gfycat.com',
  component: Gfycat,
}, {
  host: 'instagram.com',
  component: Instagram,
}, {
  host: ['youtube.com', 'youtu.be'],
  component: Youtube,
}, {
  component: FsIframe,
}, {
  component: Readability,
}];

export default function(entry, props) {
  const entryUrl = entry.get('url');
  const matches = matchers
    .filter(({host}) =>
      !host || [].concat(host).some(host => hostMatch(host, entryUrl))
    )
    .filter(({test}) => !test || test(entryUrl, props));

  return matches.length
    ? matches[0].component
    : false;
}
