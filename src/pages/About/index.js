import React, { Component } from 'react';
import PlatformToolsIntro from './components/PlatformToolsIntro';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-page">
        {/* 平台工具介绍 */}
        <PlatformToolsIntro />
      </div>
    );
  }
}
