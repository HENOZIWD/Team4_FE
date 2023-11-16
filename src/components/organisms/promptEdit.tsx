import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import Icon from '../atoms/icon';
import PromptList from '../molecules/promptList';
import Button from '../atoms/button';

interface PromptEditProps {
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>,
}

function PromptEdit({ setIsClick }: PromptEditProps) {
  const { t } = useTranslation();
  const prompts = useSelector((state: RootState) => state.promptMenu);
  const navigate = useNavigate();

  const onHandleCreatePrompt = () => {
    if (Object.keys(prompts).length < 1) {
      alert(t('reviewDetailPage.noMenuToCreate'));
      return;
    }

    navigate('/prompt');
  };

  return (
    <div>
      <div className="my-6 flex items-center justify-between">
        <h1 className="ml-4 text-3xl">{t('reviewDetailPage.orderPrompt')}</h1>
        <div>
          <span className="text-2xl">
            {t('reviewDetailPage.sum')}
            {Object.keys(prompts).length}
            {t('reviewDetailPage.num')}
          </span>
        </div>
        <button type="button" className="mr-2" onClick={() => { setIsClick(false); }}>
          <Icon name="OutlineClose" ariaLabel={t('reviewDetailPage.closePrompt')} size="2rem" />
        </button>
      </div>
      <div className="mb-36">
        {
          Object.keys(prompts).map((key) => (
            <div key={key}>
              <PromptList
                menu={key}
              />
            </div>
          ))
        }
      </div>
      <Button onClick={() => { onHandleCreatePrompt(); }} size="medium" extraStyle="w-full max-w-[500px] fixed bottom-20">
        {t('reviewDetailPage.createPrompt')}
      </Button>
    </div>
  );
}

export default PromptEdit;
