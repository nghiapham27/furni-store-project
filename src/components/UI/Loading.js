import { Spin } from 'antd';

const Loading = ({ text }) => {
  return (
    <div className="text-2xl text-center">
      <Spin size="large" />
      <p className="text-amber-600">{text}</p>
    </div>
  );
};
export default Loading;
