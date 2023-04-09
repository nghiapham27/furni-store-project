import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const SearchSpin = () => {
  const spinIcon = (
    <LoadingOutlined
      style={{
        fontSize: 20,
        color: 'orange',
      }}
      spin
    />
  );

  return <Spin indicator={spinIcon} tip="Searching..." />;
};
export default SearchSpin;
