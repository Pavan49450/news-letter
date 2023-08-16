import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={style.Footer}>
        <div className={style.footerSection}>
          <div className={style.ContentHead}>
            <h2>About us</h2>
          </div>
          <div className={style.Content}>
            <p>
              DailyEpaper.IN is a student helping platform, We provide Here
              Daily Newspaper and study material for Education Purpose…
            </p>
          </div>
          <div className={style.Content}>
            <p>
              If you have any query about Study Material or other thing please
              contact us below
            </p>
          </div>
        </div>
        <div className={style.links}>
          <div className={style.footerSection}>
            <div className={style.ContentHead}>
              <h2>Quick Link</h2>
            </div>
            <div className={style.Content}>
              <p>🔘Contact US</p>
            </div>
            <div className={style.Content}>
              <p>🔘About US</p>
            </div>
            <div className={style.Content}>
              <p>🔘DMCA</p>
            </div>
            <div className={style.Content}>
              <p>🔘Privacy Policy</p>
            </div>
          </div>

          <div className={style.footerSection}>
            <div className={style.ContentHead}>
              <h2>Important Link</h2>
            </div>
            <div className={style.Content}>
              <p>🔘NCERT Books</p>
            </div>
            <div className={style.Content}>
              <p>🔘NCERT Solution</p>
            </div>
            <div className={style.Content}>
              <p>🔘State Board Books</p>
            </div>
            <div className={style.Content}>
              <p>🔘UPSC Books</p>
            </div>
          </div>
        </div>
      </footer>
      <div className={style.copyrights}>
        <p className={style.copyrightsContent}>
          All right Reserved. &copy; 2023 |
          <a href="#" rel="nofollow">
            Example.IN
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
