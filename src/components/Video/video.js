import classes from './video.module.css';
import Vid from '../../assets/Vid.png';

const Video =()=>{
    return(
        <div className={classes.video}>
            <div className={classes.item}>
                <h2>Video review block</h2>
                <p>Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel, 
                    efficitur nec elit.</p>

                    <button className={classes.button}>Get Started</button>

            </div>

            <div>
            <img src={Vid} className={classes.myvid} alt="myumg" />
          
            </div>
            

        </div>

    );
}
export default Video