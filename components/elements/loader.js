import styles from './loader.scss';

const loader = ({ className }) => (
  <div className={`loaderContainer ${className}`}>
    <div className="loader">
      Loading...
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default loader;
