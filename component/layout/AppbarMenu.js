import { Box, Link, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/component/Appbar.module.scss';
import * as Scroll from 'react-scroll';
import { Store } from '@/utils/Store';
import { contactUrl, productsUrl } from '@/utils/values';

function AppbarMenu() {
  let Links = Scroll.Link;
  let Buttons = Scroll.Button;
  let Elements = Scroll.Element;
  let Events = Scroll.Events;
  let scroll = Scroll.animateScroll;
  let scrollSpy = Scroll.scrollSpy;
  const { state } = useContext(Store);
  const [language, setLanguage] = useState('');
  const router = useRouter();
  const menuItems = [
    {
      url: '/',
      pathname: '/',
      titleEnglish: 'Home',
      titlePersian: 'خانه',
      scroll: false,
    },
    {
      url: productsUrl,
      pathname: productsUrl,
      titleEnglish: 'Products',
      titlePersian: 'محصولات',
      scroll: false,
    },
    {
      url: '/',
      pathname: contactUrl,
      titleEnglish: 'Contact',
      titlePersian: 'ارتباط با ما',
      scroll: true,
    },
  ];

  useEffect(() => {
    setLanguage(state.language);

    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }, []);

  const scrollToBtm = () => {
    scroll.scrollToBottom();
  };

  return (
    <>
      <header
        className={styles.secondNavbar}
        dir={language === 'English' ? 'ltr' : 'rtl'}
      >
        {menuItems.map((item) => (
          <NextLink href={item.url} passHref key={item.titleEnglish}>
            <Link
              style={{
                textDecoration: 'none',
              }}
            >
              <div
                className={
                  router.pathname === item.pathname
                    ? styles.activeTab
                    : styles.tab
                }
              >
                <Typography className={styles.menuItemText}>
                  <span onClick={item.scroll ? scrollToBtm : undefined}>
                    {language === 'English'
                      ? item.titleEnglish
                      : item.titlePersian}
                  </span>
                </Typography>
              </div>
            </Link>
          </NextLink>
        ))}
      </header>
    </>
  );
}

export default AppbarMenu;
