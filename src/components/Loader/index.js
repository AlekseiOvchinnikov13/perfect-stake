import ReactLoading from 'react-loading';
import {loader} from '../../styles/Components/Loader.module.scss';
import {accentOrangeColor} from '../../styles/variables.module.scss';

const Loader = () => (
  <div className={loader}>
    <ReactLoading type="spin" color={accentOrangeColor}/>
  </div>
);

export default Loader;