import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Toast = () => {
  return (
    <ToastContainer
      style={{fontSize: '16px'}}
      autoClose={3000}
      position="top-right"
      hideProgressBar
      theme="dark"
    />
  );
};

export default Toast;