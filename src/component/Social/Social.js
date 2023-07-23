import './Social.scss'
import React from 'react'
import { Link} from 'react-router-dom';


const Social = () => {
    return (  
        
<div class="social-icons">

  <div>
  <Link to="https://twitter.com/" title="Twitter" className="twit-icon"  target="_blank">
  <img src="./image/icon_twitter.svg" alt="twitter"></img>
            </Link>
  </div>
  <div>
  <Link to="https://www.facebook.com/FightBag.ua/" title="Facebook"  target="_blank" className="fb-icon">
  <img src="./image/icon_fb.svg" alt="facebook"></img>
            </Link>
  </div>
  <div>
  <Link to="https://www.instagram.com/fightbag_ua/?hl=ru" title="Instagram"  target="_blank" className="insta-icon">
  <img src="./image/icon_instagram.svg" alt="instagram"></img>
            </Link>
  </div>
</div>

    );
}
 
export default Social;