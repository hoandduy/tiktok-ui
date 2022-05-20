import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import Styles from './Image.module.scss';

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

export default forwardRef(Image);
