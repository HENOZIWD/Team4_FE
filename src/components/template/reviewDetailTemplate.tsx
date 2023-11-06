import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReviewImageCarousel from '../organisms/reviewImageCarousel';
import ReviewInformation from '../molecules/reviewInformation';
import PageTitleCard from '../molecules/pageTitleCard';
import { ReviewDetailInfo } from '../../types/review';
import Icon from '../atoms/icon';
import PromptEdit from '../organisms/promptEdit';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { translateContent } from '../../apis/translate';
import Button from '../atoms/button';

interface ReviewDetailTemplateProps {
  data: ReviewDetailInfo,
}

function ReviewDetailTemplate({ data }: ReviewDetailTemplateProps) {
  const { t, i18n } = useTranslation();
  const [prompts, setPrompts] = useState({}); // 프롬프트 데이터를 저장할 상태 값
  const [isClick, setIsClick] = useState(false); // 프롬프트 창을 열었는지 확인하는 상태 값
  const [content, setContent] = useState(data.content);

  const translate = async () => {
    fetchWithHandler(() => translateContent(data.content, i18n.language), {
      onSuccess: (response) => {
        console.log(response);
        const translatedText = response?.data.message.result.translatedText;

        setContent(translatedText);
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <main>
      <PageTitleCard pageTitle={t('reviewDetailPage.pageTitle')} />
      <ReviewImageCarousel
        reviewImages={data.reviewImages}
        prompts={prompts}
        setPrompts={setPrompts}
      />
      <ReviewInformation
        rating={data.rating}
        createdAt={data.createdAt}
        reviewerName={data.reviewer.userName}
        reviewerImage={data.reviewer.profileImage}
        peopleCount={data.peopleCount}
        totalPrice={data.totalPrice}
      />
      {isClick ? (
        <PromptEdit
          prompts={prompts}
          setIsClick={setIsClick}
          setPrompts={setPrompts}
        />
      ) : (
        <div className="relative">
          <section className="mb-20 px-2">
            {content}
          </section>
          <Button onClick={translate}>리뷰 번역하기 Powered by NAVER OpenAPI</Button>
          <div className="absolute right-12">
            <div className="fixed bottom-16 z-10 mb-10 ml-5 h-5 w-5 rounded-3xl bg-matgpt-red text-center leading-4">
              <span className="text-[0.75rem] font-bold">{Object.keys(prompts).length}</span>
            </div>
            <div>
              <button type="button" onClick={() => { setIsClick((prev) => !prev); }} className="fixed bottom-8 mb-11 rounded-3xl border-8 border-matgpt-blue bg-matgpt-blue">
                <Icon name="JournalBookmarkFill" ariaLabel={t('reviewDetailPage.openPrompEditPage')} size="1.5rem" />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default ReviewDetailTemplate;
