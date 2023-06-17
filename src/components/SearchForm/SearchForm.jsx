import React, { useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import styles from './SearchForm.module.css';

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if ((tempSearchTerm.replace(/[^\w\s]/gi, '')).length === 0) {
      setSearchTerm('the lost world');
      setResultTitle('Please Enter Something ...');
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate('/book');
  };

  return (
    <div className={styles['search-form']}>
      <div className={styles['container']}>
        <div className={styles['search-form-content']}>
          <form className={styles['search-form']} onSubmit={handleSubmit}>
            <div className={`${styles['search-form-elem']} ${styles['flex']} ${styles['flex-sb']} ${styles['bg-white']}`}>
              <input type="text" className={styles['form-control']} placeholder="Title" ref={searchText} />
              <button type="submit" className={`${styles['flex']} ${styles['flex-c']}`} onClick={handleSubmit}>
                <FaSearch className={styles['text-purple']} size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
