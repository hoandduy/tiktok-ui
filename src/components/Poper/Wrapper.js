import classNames from 'classnames/bind';
import Styles from './Poper.module.scss';

const cx = classNames.bind(Styles);

function Wrapper({ children }) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
