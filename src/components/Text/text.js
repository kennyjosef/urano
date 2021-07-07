import classes from "./text.module.css";
import Shape from '../../assets/more-about.png';
const Text = () => {
    return ( 
        <div className={classes.text}>
            <h2>Urano .sketch Template For Free</h2>
            <div className={classes.rev}>
            <p>Relovutionalizing web design experience with 
            simple to use Ui Kit filled with many features.</p> 
            <p>It is your Ui designer wherever you need him.
            </p>
        
            {/* <div className={classes.started}> */}
            <button className={classes.started}>Get Started</button>
            </div>
            <div className={classes.urano}>
            <img src={Shape} className={classes.myshape} alt="myumg" />
            </div>
        </div>

 
     );
}
 
export default Text;