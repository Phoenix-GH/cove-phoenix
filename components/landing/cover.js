import WatchVideo from './watchVideo';
import ArrowDown from './arrowDown';
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
        <WatchVideo className="mt-60" />
      </div>
      <ArrowDown />
      <style jsx>{s}</style>
    </div>
  )
}

export default coverSection;
