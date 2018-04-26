import React, { Component } from 'react';
import s from './video.scss';

const Video = () => {
  return (
    <div className="video">
      <iframe src="https://www.youtube.com/embed/o6oaaeHvUhw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <style jsx>{s}</style>
    </div>
  );
};

export default Video;
