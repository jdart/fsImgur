
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import url from 'url';
import css from './Gfycat.styl';

export default class Gfycat extends Component {

  static propTypes = {
    url: PropTypes.string,
  }

  parseId(input) {
    const parts = url.parse(input);
    const pathParts = parts.pathname.split('/');
    return pathParts.pop();
  }

  render() {
    if (!this.props.url)
      return (<div />);
    const id = this.parseId(this.props.url);
    return (
      <div className="gfycat-aligner">
        <video className="gfycat" autoPlay="true" loop="true" poster={`//thumbs.gfycat.com/${id}-poster.jpg`}>
          <source id="webmsource" src={`//zippy.gfycat.com/${id}.webm`} type="video/webm" />
          <source id="mp4source" src={`//fat.gfycat.com/${id}.mp4`} type="video/mp4" />
        </video>
      </div>
    );
  }

}
