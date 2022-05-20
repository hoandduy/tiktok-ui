import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);

function AccountItem({ data }) {
  return (
    <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>{data.full_name}</span>
          {data.stick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </p>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
