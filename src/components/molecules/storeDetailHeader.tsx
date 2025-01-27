import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../atoms/button';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import PageTitleCard from './pageTitleCard';

interface StoreDetailHeaderProps {
  storeId: number;
  storeName: string;
  storeImage: string;
  rating: number;
  reviewCount: number;
}

export default function StoreDetailHeader({
  storeId,
  storeName,
  storeImage,
  rating,
  reviewCount,
}: StoreDetailHeaderProps) {
  const { t } = useTranslation();
  return (
    <>
      <PageTitleCard pageTitle={t('storeDetail.pageTitle')} />
      <div className="h-48 w-full">
        <Image
          imageSrc={storeImage}
          alt={`${storeName} ${t('storeDetail.image')}`}
          objectFitMode
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">{storeName}</h2>
          <button type="button">
            <Icon
              name="OutlineHeart"
              size="1.4rem"
              ariaLabel={t('storeDetail.addLikedStore')}
            />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <Icon
                name="OutlineStar"
                size="1.4rem"
                ariaLabel={t('storeDetail.rating')}
              />
              <div>{rating}</div>
            </div>
            <div className="flex items-center gap-1">
              <div>{t('storeDetail.review')}</div>
              <div>{reviewCount}</div>
            </div>
          </div>
          <Link to={`/stores/${storeId}/writeReview`}>
            <Button>{t('storeDetail.writeReview')}</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
