import { ThreeCircles } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';
export default function Loader() {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#3f51b5"
      wrapperStyle={{}}
      wrapperClass={css.loaderWrarrer}
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
}
