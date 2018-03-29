import s from './watchVideo.scss';

export default (props) => {
  const classes = props.className;

  return (
    <a className={ `watch-video ${classes}` } href="javascript:void(0)">
      <span className="watch-icon"></span>
      Watch video
      <style jsx>{s}</style>
    </a>
  )
}
