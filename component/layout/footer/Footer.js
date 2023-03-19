import React, { useContext, useEffect, useState } from 'react';
import styles from '@/styles/component/Footer.module.scss';
import { Store } from '@/utils/Store';
import LinkSection from './LinkSection';
import ContactUsSection from './ContactusSection';
import FeaturesSection from './FeatureSection';
import CopyrightSection from './CopyrightSection';

function Footer() {
  const [language, setLanguage] = useState('');
  const { state } = useContext(Store);

  useEffect(() => {
    setLanguage(state.language);
  }, []);

  return (
    <footer className={styles.footer}>
      <div
        className={'row' + ' ' + styles.mainFooter}
        style={language !== 'English' ? { direction: 'rtl' } : {}}
      >
        <LinkSection />
        <ContactUsSection />
        <FeaturesSection />
      </div>
      <CopyrightSection />
    </footer>
  );
}

export default Footer;
