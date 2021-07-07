import classes from "./flex.module.css";
import Logo2 from '../../assets/Logo2.png';
import Logo3 from '../../assets/Logo3.png'
const Flex=() =>{
    return(
        <div className ={classes.flex}>
            <div className={classes.item}>
                <img src={Logo2} className={classes.Mypng}  alt="Picture"/>
                <h2>Lorem ipsum</h2>
                <p>Nunc porta erat ut lectus posuere molestie. 
                    Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel, efficitur nec elit. </p>

            </div>

            <div className={classes.item}>
                <img src={Logo3} classesName={classes.Mypng} alt="Picture"/>
                <h2>Lorem ipsum</h2>
                <p>Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel,
                     efficitur nec elit. </p>

            </div>

        </div>

    );
}

export default Flex;