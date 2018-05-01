import React, { Component } from 'react';
import s from './video.scss';

const Video = () => {
  return (
    <div className="video">
      <iframe src="https://www.youtube.com/embed/o6oaaeHvUhw?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <style jsx>{s}</style>
    </div>
  );
};

export default Video;
