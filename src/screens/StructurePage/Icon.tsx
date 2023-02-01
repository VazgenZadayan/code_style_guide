import { IIcon } from './interfaces';
import './styles.scss';

const Icon = ({ src, alt, tabIcon }: IIcon) =>
  tabIcon ? (
    <img src={src} alt={alt} className="tab_icon" />
  ) : (
    <img src={src} alt={alt} />
  );

export default Icon;
