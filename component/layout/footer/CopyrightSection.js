import React, { useContext, useState, useEffect } from 'react';
import styles from '@/styles/component/Footer.module.scss';
import { Store } from '@/utils/Store';

const CopyrightSection = () => {
  const { state } = useContext(Store);
  const [language, setLanguage] = useState('');

  useEffect(() => {
    setLanguage(state.language);
  }, []);

  return (
    <div
      className={
        'col-md-12 col-xs-12  center-md center-sm center-xs' +
        ' ' +
        styles.copyrightSection
      }
    >
      {language === 'English'
        ? 'Copyright © 2023 shayanshop. All rights reserved.'
        : '.تمام حقوق مادی و معنوی متعلق به فروشگاه شایان شاپ می باشد'}
    </div>
  );
};

export default CopyrightSection;
