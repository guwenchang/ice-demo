import React, { Component } from 'react';
import DownloadCard from './components/DownloadCard';

export default class Page17 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page17-page">
        {/* 下载型信息卡片 */}
        <DownloadCard />
      </div>
    );
  }
}
