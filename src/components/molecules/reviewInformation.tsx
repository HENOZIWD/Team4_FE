import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import { comma } from '../../utils/convert';
import { toggleReviewLike } from '../../apis/review';
import DeleteReviewModal from '../modals/deleteReviewModal';
import { fetchWithHandler } from '../../utils/fetchWithHandler';

interface ReviewInformationProps {
  rating: number,
  createdAt: string,
  reviewerName: string,
  reviewerImage: string,
  peopleCount: number,
  totalPrice: number,
  isOwn: boolean,
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

function ReviewInformation({
  rating, createdAt, reviewerName, reviewerImage, peopleCount, totalPrice, isOwn, setIsEdit,
}: ReviewInformationProps) {
  const { t } = useTranslation();
  const { reviewId } = useParams();
  const [isLikeReview, setIsLikeReview] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const navigate = useNavigate();

  const handleToggleReviewLike = async () => {
    const token = localStorage.getItem('accessToken');

    if (token === null) {
      navigate('/login', {
        replace: true,
      });
    }

    await fetchWithHandler(async () => toggleReviewLike(token, Number(reviewId)), {
      onSuccess: () => {
        setIsLikeReview((prev) => !prev);
      },
      onError: () => {
        alert('오류가 발생했습니다.\n잠시 후 다시 시도해주세요.');
      },
    });
  };

  return (
    <div className="my-4 flex items-center justify-between pl-2 pr-3">
      <div className="flex flex-col">
        <div className="flex items-center pl-1">
          <button type="button" onClick={handleToggleReviewLike}>
            <Icon name={`${isLikeReview ? 'FillHeart' : 'OutlineHeart'}`} ariaLabel={t('reviewDetailPage.likeReviewButton')} size="2rem" />
          </button>
          <span className="pl-[0.5rem] text-2xl">{rating}</span>
        </div>
        <div className="mt-3 flex items-center">
          <div className="h-12 w-12">
            <Image imageSrc={reviewerImage} alt={t('reviewDetailPage.reviewerProfileImage')} />
          </div>
          <span className="pl-[0.5rem]">{reviewerName}</span>
          {isOwn ? (
            <div>
              <button type="button" onClick={() => { setIsEdit((prev) => !prev); }}>
                <span className="mx-2 text-sm text-matgpt-gray">
                  {t('reviewDetailPage.edit')}
                </span>
              </button>
              <button type="button" onClick={() => { setIsOpenDeleteModal(true); }}>
                <span className="text-sm text-matgpt-gray">
                  {t('reviewDetailPage.delete')}
                </span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div>
        <span>{createdAt}</span>
        <div className="my-3 flex items-center justify-end">
          <Icon name="UserGroup" ariaLabel={t('reviewDetailPage.peopleCount')} size="1rem" />
          <span className="pl-2">{peopleCount}</span>
        </div>
        <span>{comma(totalPrice)}</span>
      </div>
      {isOpenDeleteModal ? (
        <DeleteReviewModal
          modalOpen={isOpenDeleteModal}
          setModalOpen={setIsOpenDeleteModal}
        />
      ) : null}
    </div>
  );
}

export default ReviewInformation;
