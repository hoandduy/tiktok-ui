import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';

const cx = classNames.bind(Styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9366bed55819a1889d53ff3a508c766b~c5_300x300.webp?x-expires=1652536800&x-signature=OaHWFq4GAScVfiGmVVVrXhUHxt4%3D"
        alt="Hoa"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
