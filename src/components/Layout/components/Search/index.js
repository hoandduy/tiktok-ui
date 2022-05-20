import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Poper';
import Styles from './Search.module.scss';

const cx = classNames.bind(Styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (!searchValue) {
      setSearchResult([]);
      return;
    } else {
      setLoading(true);

      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
        .then((res) => res.json())
        .then((res) => {
          setSearchResult(res.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleSearchValue = (e) => {
    if (e.target.value === ' ') {
      setSearchValue('');
    } else {
      setSearchValue(e.target.value);
    }
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleShowResult = () => {
    setShowResult(true);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          placeholder="Search accounts and videos"
          spellCheck={false}
          value={searchValue}
          onChange={(e) => handleSearchValue(e)}
          onFocus={handleShowResult}
        />
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
