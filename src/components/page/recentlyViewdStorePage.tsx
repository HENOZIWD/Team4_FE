import { useState } from 'react';
import { useQuery } from 'react-query';
import RecentlyViewdStoreTemplate from '../template/recentlyViewdStoreTemplate';
import { getRecentlyViewdStore } from '../../apis/getRecentlyViewdStore';

function RecentlyViewdStorePage() {
  const [page, setPage] = useState(1);
  const limits = 6;
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [`getRecentlyViewdStore?cursor=${1 + 6 * (page - 1)}&limits=${limits}`],
    queryFn: () => getRecentlyViewdStore(1 + 6 * (page - 1), limits),
  });

  const onHandleChangePage = (type: 'right' | 'left') => {
    if (type === 'right') {
      setPage(() => page + 1);
    } else if (type === 'left') {
      setPage(() => page - 1);
    }
  };

  if (data && !isLoading && !isFetching) {
    return (
      <RecentlyViewdStoreTemplate
        recentlyViewdStore={data}
        page={page}
        onChangePage={onHandleChangePage}
      />
    );
  }
  return (
    <div>Loading..</div>
  );
}

export default RecentlyViewdStorePage;
