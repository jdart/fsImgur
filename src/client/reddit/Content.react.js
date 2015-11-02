
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Imgur from './Imgur.react';
import FsImg from './FsImg.react';
import FsIframe from './FsIframe.react';
import Gfycat from './Gfycat.react';
import { parseUrl } from '../utils';

export default class Content extends Component {

  renderContent(entry) {
    const url = entry.get('url');
    const host = parseUrl(url).host;
    console.log(url)
    if (url.match(/\.(jpg|jpeg|png|gif)$/))
      return (<FsImg url={url} />);
    if (host.match(/^.*(\.?)gfycat.com$/))
      return (<Gfycat url={url} />);
    if (host.match(/^.*(\.?)reddit\.com$/))
      return (<div>Content from reddit</div>);
    else if (host.match(/^.*(\.?)imgur\.com$/))
      return (<Imgur { ... this.props } url={url} />);
    return (<FsIframe url={url} />);
  }

  render() {
    const { entry } = this.props;
    return (
      <div className="entries-content">
        {this.renderContent.bind(this)(entry)}
      </div>
    );
  }
}
