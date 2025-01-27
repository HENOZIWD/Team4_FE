import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import { ReviewCardInfo } from '../../types/review';
import ReviewCard from '../molecules/reviewCard';
import Page from '../molecules/page';

interface WritedReviewProps {
  wrtiedReview: ReviewCardInfo[],
  page: number,
  onChangePage: (type: 'left' | 'right') => void,
}
function WritedReviewTemplate({ wrtiedReview, page, onChangePage }: WritedReviewProps) {
  const { t } = useTranslation();
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (wrtiedReview.length < 8) {
      return () => {
        setIsLastPage(true);
      };
    }
    return () => {
      setIsLastPage(false);
    };
  }, [wrtiedReview]);
  return (
    <div className="relative">
      <div className="sticky top-0">
        <PageTitleCard pageTitle={t('writtenReviewPage.pageTitle')} />
      </div>
      <nav>
        <Page page={page} isLastPage={isLastPage} onChangePage={onChangePage} />
      </nav>
      <main>
        <ul className="flex flex-col gap-2 pb-[3.7rem] pt-2">
          {wrtiedReview.map(({
            storeId, reviewId, storeImage,
            storeName, profileImage, reviewerName,
            reviewRating, visitedCount, createdAt,
          }) => (
            <li key={storeId}>
              <ReviewCard
                storeId={storeId}
                reviewId={reviewId}
                storeImage={storeImage}
                storeName={storeName}
                profileImage={profileImage}
                reviewerName={reviewerName}
                reviewRating={reviewRating}
                visitedCount={visitedCount}
                createdAt={createdAt}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default WritedReviewTemplate;
