import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store';
import PromptTemplate from '../template/promptTemplate';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { createPrompt } from '../../apis/prompt';

function PromptPage() {
  const navigate = useNavigate();
  const [data, setData] = useState<string | null>(null);
  const prompts = useSelector((state: RootState) => state.promptMenu);
  useEffect(() => {
    // 로그인 상태가 아니면 로그인 레이아웃으로 이동
    if (localStorage.getItem('accessToken') === null) {
      navigate('/login', {
        replace: true,
      });
    } else {
      fetchWithHandler(async () => createPrompt(), {
        onSuccess: (response) => {
          setData(response?.data.data);
        },
        onError: (error) => {
          console.error(error);
        },
      });
    }
  }, []);

  return (
    <PromptTemplate
      prompt={prompts}
      data={data}
    />
  );
}

export default PromptPage;
