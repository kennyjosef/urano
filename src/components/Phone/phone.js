import classes from "./phone.module.css";
import pencil from "../../assets/pencil.png";
import contrast from "../../assets/contrast.png";
import Bitmap from "../../assets/Bitmap.jpg";
import palette from "../../assets/palette.png";
import drag from "../../assets/drag.png";
const Phone = () => {
  return (
    <div className={classes.overall}>
      <div className={classes.part}>
        <div className={classes.part_1a}>
          <img src={pencil} className={classes.mypen} alt="myumg" />
          <h2>Lorem ipsum</h2>
          <p>
            Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula,
            rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh,
            varius fermentum viverra vel, efficitur nec elit.
          </p>
        </div>
        <div className={classes.part_1a}>
          <img src={contrast} className={classes.mypen} alt="myumg" />
          <h2>Lorem ipsum</h2>
          <p>
            Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula,
            rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh,
            varius fermentum viverra vel, efficitur nec elit.
          </p>
        </div>
      </div>
      <div className={classes.part_2}>
          <img src={Bitmap} alt="myumg" />
          
      </div>
      <div className={classes.part}>
        <div className={classes.part_1a}>
          <img src={palette} className={classes.mypen} alt="myumg" />
          <h2>Lorem ipsum</h2>
          <p>
            Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula,
            rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh,
            varius fermentum viverra vel, efficitur nec elit.
          </p>
        </div>
        <div className={classes.part_1a}>
          <img src={drag} className={classes.mypen} alt="myumg" />
          <h2>Lorem ipsum</h2>
          <p>
            Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula,
            rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh,
            varius fermentum viverra vel, efficitur nec elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Phone;
