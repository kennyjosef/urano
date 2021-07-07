import classes from './footer.module.css';
import Urano from '../../assets/logo-white.png';
import Social from '../../assets/Social.png';
const Footer = () => {
    return (  
        <div className= {classes.footer}>
            <div className= {classes.footer_1}>
                <div>
                    <h3>Features</h3>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    

                </div>
                <div>
                    <h3>Solution</h3>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                </div>
                <div>
                    <h3>Resources</h3>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                </div>

            </div>
            <div className= {classes.footer_2}>
                <div className={classes.foot}>
                <img src={Urano} className={classes.myfooter} alt="myumg" />
          
                    <p>Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed,
                         malesuada id metus.</p>
                <img src={Social} className={classes.myfootr} alt="myumg" />
          

                </div>
                <div className={classes.feet}>
                    <div className={classes.feety}>
                        <h2>Company</h2>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className={classes.feety}>
                        <h2>Information</h2>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className={classes.feety}>
                        <h2>Patner</h2>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>

                </div>

            </div> 
            
        </div>
    );
}
 
export default Footer;