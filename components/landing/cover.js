import s from './cover.scss';

const coverSection = (props) => {
  const bgImg = props.backgroundImage,
        text = props.text,
        color = props.color,
        align = props.align;

  return (
    <div className="section--cover" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className={`section--cover__title float-${align}`}>
        <h1 
          className="font-size-72"
          style={{ color: color }}
          dangerouslySetInnerHTML={{__html: text}} />
        <a href="javascript:void(0)"><span className="watch-icon"></span>Watch video</a>
      </div>
      <style jsx>{s}</style>
    </div>
  )
}

export default coverSection;
