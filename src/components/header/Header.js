import "./style.css";

const Header = () => {
    return ( 
        <header className="header">
        <div className="container">

        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Nika</em></strong><br />
                novice frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="http://drive.google.com/uc?export=view&id=1k5LyFp0gATuHWw_wSSVHBt__H72aJ1Ky" className="btn">View CV</a>
           
            <div className="stack">
            <h2>Tech Stack:</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" />
                <img src="https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" />
                <img src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />

            </div>
        </div>
        
        </div>
    </header>
     );
}
 
export default Header;