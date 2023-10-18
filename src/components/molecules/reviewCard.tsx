import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import { ReviewCardInfo } from '../../types/review';

function ReviewCard({
  storeId, reviewId, storeImage,
  storeName, profileImage, reviewerName, reviewRating, visitedCount, createdAt,
}: ReviewCardInfo) {
  const { t } = useTranslation();
  return (
    <Link
      to={`/stores/${storeId}/reviews/${reviewId}`}
      className="flex w-full items-center gap-4 p-2"
      aria-label={`${storeName} ${t('reviewCard.linkToReview')}`}
    >
      <div className="flex">
        <div className="h-34 w-26 mr-2">
          <Image imageSrc={storeImage} alt={t('reviewCard.storeImage')} threshold={{ smallToMedium: '0', mediumToLarge: '0' }} />
        </div>
        <div className="w-[20rem]">
          <div>
            <span className="h-[0.1rem] overflow-hidden text-ellipsis font-bold">{storeName}</span>
          </div>
          <div className="flex items-center py-2">
            <div className="h-[31.901px] w-[2.5rem] ">
              <Image imageSrc={profileImage} alt={t('reviewCard.userImage')} threshold={{ smallToMedium: '0', mediumToLarge: '0' }} className="pr-2" />
            </div>
            <span className="h-[1.5rem] overflow-hidden text-ellipsis">{reviewerName}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <Icon name="OutlineStar" size="1.5rem" ariaLabel={t('reviewCard.ratingIcon')} />
              <span className="pl-1 pr-3">{reviewRating}</span>
              <Icon name="UserGroup" size="1.2rem" ariaLabel={t('reviewCard.memberNumIcon')} />
              <span className="pl-1">
                {visitedCount}
                명
              </span>
            </div>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ReviewCard;
