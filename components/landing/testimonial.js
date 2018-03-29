const testimonial = (props) => {
  const text = props.text;
  const author = props.author;
  const classes = props.className;

  return (
    <div className={ `section__testimonial ${classes}` }>
      <div className="mx-256 h-2 bg-primary" />
      <p className="mx-240 text-center text-primary font-size-60 mt-40 mb-20 line-height-60">“{text}”</p>
      <h3 className="text-center text-primary font-size-24 mt-0 mb-72">{author}</h3>
      <div className="mx-256 h-2 bg-primary" />
    </div>
  )
};

export default testimonial;
