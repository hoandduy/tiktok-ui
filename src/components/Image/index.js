import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import Styles from './Image.module.scss';
import { PropTypes } from 'prop-types';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
  const [fallback, setfallback] = useState('');

  const handleError = () => {
    setfallback(customFallback);
  };

  return (
    <img
      className={classNames(className, Styles.wrapper)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  customFallback: PropTypes.string,
};

export default forwardRef(Image);
