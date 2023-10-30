import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
  })
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ko: {
        translation: {
          navigationBar: {
            prompt: '프롬프트 페이지로 이동',
            myPage: '마이 페이지로 이동',
            home: '메인 페이지로 이동',
            search: '검색 페이지로 이동',
            darkMode: '다크 모드로 전환',
            lightMode: '라이트 모드로 전환',
          },
          input: {
            search: '검색하기',
          },
          landingPage: {
            d1: '다른 나라의 음식점에서도 쉽게 주문하고 싶으신가요?',
            d2: '가 도와드릴게요',
            languageSelect: '언어 선택',
            language: '한국어',
            start: '시작하기',
            save: '저장',
          },
          userPage: {
            pageTitle: '마이 페이지',
            userImage: '유저 대표 이미지',
            userName: '유저 닉네임',
            configProfile: '프로필 수정',
            likedRestaurant: '좋아요 한 맛집',
            recentlyViewedRestaurant: '최근 본 맛집',
            writtenReview: '작성 한 리뷰',
            likedReview: '좋아요 한 리뷰',
            coinRechargeHistory: '코인 충전 내역',
            coinUsageHistory: '코인 사용 내역',
            language: '언어',
            logout: '로그 아웃',
          },
          loginModal: {
            closeIcon: '로그인 모달창을 닫습니다.',
            requestLogin: '로그인이 필요합니다.',
            googleLogo: '구글 소셜 로그인 로고',
            kakaoLogo: '카카오 소셜 로그인 로고',
            loginGoogle: 'Google 계정으로 로그인',
            loginKakao: '카카오 로그인',
          },
          menuTag: {
            modify: '수정',
            add: '추가',
            cancel: '취소',
            prompt: '프롬프트에 추가 하시겠습니까?',
            delete: '메뉴 태그 삭제',
            noname: '메뉴 이름을 입력해주세요.',
            like: '좋아요',
            soso: '평범해요',
            dislike: '싫어요',
          },
          reviewCard: {
            linkToReview: '의 선택된 리뷰 페이지로 이동',
            storeImage: '식당 이미지',
            userImage: '유저 이미지',
            ratingIcon: '리뷰 평점',
            memberNumIcon: '방문 인원',
          },
          storeCard: {
            moveDetail: '상세 페이지로 이동',
            rating: '별점',
            review: '리뷰',
          },
          pageTitle: {
            back: '이전 페이지로 이동',
          },
          searchBar: {
            cancelSearch: '검색 취소',
            popularStore: '인기 음식점',
            recentReviewed: '최근 리뷰가 달린 음식점',
            similar: '나와 비슷한 사용자에게 인기 있는 음식점',
          },
          marker: {
            storeImage: '가게 이미지',
            storeDetail: '가게 상세 페이지로 이동',
          },
          deleteReviewModal: {
            deleteTitle: '정말로 삭제하시겠습니까?',
            notRecovredTitle: '삭제된 리뷰는 복구할 수 없습니다.',
            cancel: '취소',
          },
          storeDetail: {
            overview: '개요',
            review: '리뷰',
            pageTitle: '음식점 상세 페이지',
            image: '이미지',
            addLikedStore: '좋아요 한 음식점에 추가',
            rating: '별점',
            writeReview: '리뷰 작성',
          },
          likedStorePage: {
            pageTitle: '좋아요 한 맛집',
            heartButton: '맛집 좋아요 버튼',
          },
          coinRecharging: {
            pageTitle: '코인 충전 내역',
            date: '충전 날짜',
            reChargeCoin: '충전 코인',
            totalCoin: '코인 합계',
          },
          coinUsage: {
            pageTitle: '코인 사용 내역',
            date: '사용 날짜',
            reChargeCoin: '사용 코인',
            totalCoin: '코인 합계',
          },
          page: {
            firstPage: '첫번째 페이지 입니다.',
            lastPage: '마지막 페이지 입니다.',
            previousPage: '이전 페이지로',
            nextPage: '다음 페이지로',
          },
          writtenReviewPage: {
            pageTitle: '작성 한 리뷰',
          },
          recentlyViewdStorePage: {
            pageTitle: '최근 본 맛집',
          },
          userEditProfilePage: {
            nickName: '닉네임',
            language: '언어',
            gender: '성별',
            profileImageAdd: '프로필 이미지 추가',
            error: '오류가 발생했습니다. 다시 시도해 주세요.',
            success: '요청이 성공적이네요!',
            nickNameLengthError: '닉네임은 2자 이상이여야 합니다.',
            korean: '한국어',
            english: '영어',
            men: '남자',
            woman: '여자',
            change: '변경',
            cancel: '취소',
            notSelected: '설정 안됨',
            fileIsNotUpload: '파일이 업로드 되지 않았습니다.',
          },
          likedReviewPage: {
            pageTitle: '좋아요 한 리뷰',
          },
          writeReviewPage: {
            success: '리뷰가 등록되었습니다.',
            failure: '오류가 발생했습니다.\n잠시 후 다시 시도해 주세요.',
            wrongId: '잘못된 접근입니다.',
            d1: '가게에 대한 평점을 남겨주세요.',
            d2: '가게에 대한 리뷰를 남겨주세요.',
            d3: '몇 분이서 오셨나요?',
            d4: '얼마나 지불하셨나요?',
            people: '명',
            won: '원',
            cancel: '작성 취소하기',
            finish: '작성 완료하기',
            addImage: '사진 추가하기',
            noImage: '선택된 사진 없음',
            cropImage: '사진 자르기',
            cancelCrop: '취소',
            addCrop: '추가',
            addTag: '메뉴 태그 추가',
            tagPosition: '메뉴 태그를 추가할 위치를 클릭하세요.',
            rating: '평점',
            selected: '선택됨',
            title: '리뷰 작성',
            deleteImage: '사진 삭제',
            image: '리뷰 이미지',
          },
          errorPage: {
            fail: '페이지를 가져오지 못했습니다.',
            mainPage: '메인 페이지로',
          },
          notFoundPage: {
            notFound: '없는 페이지입니다.',
            mainPage: '메인 페이지로',
          },
          loader: {
            loading: '불러오는 중...',
          },
        },
      },
      en: {
        translation: {
          navigationBar: {
            prompt: 'Move to prompt page',
            myPage: 'Move to my page',
            home: 'Move to main page',
            search: 'Move to search page',
            darkMode: 'Switch to dark mode',
            lightMode: 'Switch to light mode',
          },
          input: {
            search: 'Search',
          },
          landingPage: {
            d1: 'Do you want to order easily from restaurants in other countries?',
            d2: ' will help you',
            languageSelect: 'language select',
            language: 'English',
            start: 'Start',
            save: 'Save',
          },
          userPage: {
            pageTitle: 'My Page',
            userImage: 'User Image',
            userName: 'User Name',
            configProfile: 'Edit Profile',
            likedRestaurant: 'Liked Restaurant',
            recentlyViewedRestaurant: 'Recently Viewed Restaurant',
            writtenReview: 'Written Review',
            likedReview: 'Liked Review',
            coinRechargeHistory: 'Coin Recharge History',
            coinUsageHistory: 'Coin Usage History',
            language: 'Language',
            logout: 'Log Out',
          },
          loginModal: {
            closeIcon: 'Close the Login Modal',
            requestLogin: 'Login is required.',
            googleLogo: 'Google Logo',
            kakaoLogo: 'Kakao Logo',
            loginGoogle: 'Sign in with Google',
            loginKakao: 'Login with Kakao',
          },
          menuTag: {
            modify: 'Modify',
            add: 'Add',
            cancel: 'Cancel',
            prompt: 'Would you like to add it to the prompt?',
            delete: 'Delete menu tag',
            noname: 'Please enter a menu name.',
            like: 'Like',
            soso: 'So-so',
            dislike: 'Don\'t like',
          },
          reviewCard: {
            linkToReview: 'Selected Review Page',
            storeImage: 'Store Image',
            userImage: 'User Image',
            ratingIcon: 'Review Rating',
            memberNumIcon: 'The number of people visiting the store',
          },
          storeCard: {
            moveDetail: 'Move to the detail page',
            rating: 'Rating',
            review: 'Review',
          },
          pageTitle: {
            back: 'Go to previous page',
          },
          searchBar: {
            cancelSearch: 'Cancel search',
            popularStore: 'Popular restaurant',
            recentReviewed: 'Recently reviewed restaurant',
            similar: 'Popular restaurant for users similar to me',
          },
          marker: {
            storeImage: 'Store image',
            storeDetail: 'Go to the store details page',
          },
          deleteReviewModal: {
            deleteTitle: 'Are you sure you want to delete it?',
            notRecovredTitle: 'Deleted reviews cannot be recovered.',
            cancel: 'Cancel',
          },
          storeDetail: {
            overview: 'Overview',
            review: 'Review',
            pageTitle: 'Store detail page',
            image: 'image',
            addLikedStore: 'Add to the store you liked',
            rating: 'Rating',
            writeReview: 'Write review',
          },
          likedStorePage: {
            pageTitle: 'A Restaurant with Likes',
            heartButton: 'Like Restaurant Button',
          },
          coinRecharging: {
            pageTitle: 'Coin Recharge History',
            date: 'Recharge Date',
            reChargeCoin: 'Recharge Coins',
            totalCoin: 'Coin Total',
          },
          coinUsage: {
            pageTitle: 'Coin Usage History',
            date: 'Usage Date',
            reChargeCoin: 'Usage Coin',
            totalCoin: 'Coin Total',
          },
          page: {
            lastPage: 'This is the last page.',
            firstPage: 'This is the first page.',
            previousPage: 'Go to the previous page',
            nextPage: 'Go to the next page',
          },
          writtenReviewPage: {
            pageTitle: 'Written Review',
          },
          recentlyViewdStorePage: {
            pageTitle: 'Recently Viewd Restaurant',
          },
          userEditProfilePage: {
            nickName: 'nickname',
            language: 'language',
            gender: 'gender',
            profileImageAdd: 'Add ProfileImage',
            error: 'An error has occurred. Please try again.',
            success: 'Your request was successful!',
            nickNameLengthError: 'Nickname must be at least 2 characters long.',
            korean: 'korean',
            english: 'English',
            men: 'Men',
            woman: 'Woman',
            change: 'Change',
            cancel: 'Cancel',
            notSelected: 'not Selected',
            fileIsNotUpload: 'The file was not uploaded.',
          },
          likedReviewPage: {
            pageTitle: 'Liked review',
          },
          writeReviewPage: {
            success: 'Your review has been registered.',
            failure: 'An error has occurred.\nPlease try again in a momentarily.',
            wrongId: 'Wrong approach.',
            d1: 'Please leave a rating on the store.',
            d2: 'Please leave a review of the store.',
            d3: 'How many people did you visit?',
            d4: 'How much did you pay?',
            people: 'people',
            won: 'KRW',
            cancel: 'Cancel write',
            finish: 'Finish write',
            addImage: 'Add image',
            noImage: 'No images selected',
            cropImage: 'Crop image',
            cancelCrop: 'Cancel',
            addCrop: 'Add',
            addTag: 'Add menu tag',
            tagPosition: 'Click where you want to add the menu tag.',
            rating: 'Rating',
            selected: 'selected',
            title: 'Create a review',
            deleteImage: 'Delete image',
            image: 'Review image',
          },
          errorPage: {
            fail: 'Failed to fetch page.',
            mainPage: 'Go to main page',
          },
          notFoundPage: {
            notFound: 'The page does not exist.',
            mainPage: 'Go to main page',
          },
          loader: {
            loading: 'Loading...',
          },
        },
      },
    },
  });

export default i18n;
