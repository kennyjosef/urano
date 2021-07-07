import classes from './hero.module.css';
import Logo1 from '../../assets/logo-white.png';
import Navbar from '../Navbar/nav';
import Text from '../Text/text';
const Hero = () => {
    return (
      <div className={classes.hero}>
        <header className={classes.header}>
          <img src={Logo1} className={classes.mysvg} alt="myumg" />
          <Navbar/>
        </header>
          <Text/>
      </div>
    );
  };
  
  export default Hero;