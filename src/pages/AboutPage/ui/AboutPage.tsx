import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <Page>
      <h1>{t('О проекте')}</h1>
    </Page>
  );
};

export default AboutPage;
