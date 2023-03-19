import React, { useContext, useState, useEffect } from 'react';
import styles from '@/styles/component/Footer.module.scss';
import { useRouter } from 'next/router';
import { Store } from '@/utils/Store';
import {
  api,
  home,
  loginUrl,
  productsUrl,
  profileUrl,
  registerUrl,
} from '@/utils/values';

const LinkSection = () => {
  const router = useRouter();
  const { state } = useContext(Store);
  const [language, setLanguage] = useState('');
  const [userTruthy, setUserTruthy] = useState(false);

  useEffect(() => {
    setLanguage(state.language);
    state.userInfo ? setUserTruthy(true) : setUserTruthy(false);
  }, []);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={'row col-md-4 col-sm-12 col-xs-12' + ' ' + styles.column}>
      <div
        className={`'col-md-12 col-sm-12 col-xs-12 ' ${
          language === 'English'
            ? styles.columnListItemsContainerEnglish
            : styles.columnListItemsContainerPersian
        } `}
      >
        {language === 'English' ? 'Links :' : ' لینک ها :'}
      </div>
      <div
        className={`'col-md-12 col-sm-12 col-xs-12 pr-2' ${
          language === 'English'
            ? styles.columnListItemsContainerEnglish
            : styles.columnListItemsContainerPersian
        } `}
      >
        <span
          onClick={
            router.pathname === `${home}`
              ? scrollToTop
              : () => router.push(home)
          }
          style={{ cursor: 'pointer' }}
        >
          {language === 'English' ? 'Home' : 'صفحه اصلی '}
        </span>
      </div>
      <div
        className={`'col-md-12 col-sm-12 col-xs-12 pr-2' ${
          language === 'English'
            ? styles.columnListItemsContainerEnglish
            : styles.columnListItemsContainerPersian
        } `}
      >
        <span
          onClick={
            router.pathname === `${productsUrl}`
              ? scrollToTop
              : () => router.push(productsUrl)
          }
          style={{ cursor: 'pointer' }}
        >
          {language === 'English' ? 'Products' : 'محصولات'}
        </span>
      </div>
      {!userTruthy && (
        <div
          className={`'col-md-12 col-sm-12 col-xs-12 pr-2' ${
            language === 'English'
              ? styles.columnListItemsContainerEnglish
              : styles.columnListItemsContainerPersian
          } `}
        >
          <a
            href={`${registerUrl}`}
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            {language === 'English' ? 'ًRegister' : 'ثبت نام'}
          </a>
          {' - '}
          <a
            href={`${loginUrl}`}
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            {language === 'English' ? 'Login' : 'ورود به سایت'}
          </a>
        </div>
      )}
      {userTruthy && (
        <div
          className={`'col-md-12 col-sm-12 col-xs-12 pr-2' ${
            language === 'English'
              ? styles.columnListItemsContainerEnglish
              : styles.columnListItemsContainerPersian
          } `}
        >
          <span
            onClick={
              router.pathname === `${profileUrl}`
                ? scrollToTop
                : () => router.push(profileUrl)
            }
            style={{ cursor: 'pointer' }}
          >
            {language === 'English' ? 'Profile' : 'پروفایل'}
          </span>
        </div>
      )}
    </div>
  );
};

export default LinkSection;
