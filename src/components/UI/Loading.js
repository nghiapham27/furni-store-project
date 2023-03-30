import { Spin } from 'antd';

const Loading = () => {
  return (
    <div className="text-2xl text-center">
      <Spin size="large" />
      <p className="text-amber-600">Loading...</p>
    </div>
  );
};
export default Loading;
