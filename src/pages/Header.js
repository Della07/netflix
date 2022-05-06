import React from "react";

const Header = () => (
  <>
    <div className="">
      {/* <img
        alt=""
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/684806ba-f8d5-4005-a73c-3c30975fb763/PH-en-20220502-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      /> */}
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <h5>
        Ready to watch? Enter your email to create or restart your membership.
      </h5>
      <div>
        <input type="email" />
        <button>Get Started</button>
      </div>
    </div>
  </>
);

export default Header;
