import classes from "./nav.module.css"
const Navbar = () => {
    return (
      <nav className= {classes.nav}>
        <ul>
          <li>
            <a href="/" className= {classes.hidden}>Features </a>
          </li>
          <li>
            <a href="/"className= {classes.hidden}>Pricing </a>
          </li>
          <li>
            <a href="/"className= {classes.hidden} >Login </a>
          </li>
          <button className={classes.button}>Sign Up</button>
        </ul>
        
        
  
        
      </nav>
    );
  };
  
  export default Navbar; 