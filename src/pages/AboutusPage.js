import style from "./AboutusPage.module.css";

const AboutusPage = () => {
  return (
    <div className={style.aboutusSection}>
      <div className={style.ContentHead}>
        <h1>About Us</h1>
      </div>
      <div className={style.Content}>
        <p>
          DailyEpaper.IN is a student helping platform, We provide Here Daily
          Newspaper and study material for Education Purpose…
        </p>
      </div>
      <div className={style.Content}>
        <p>
          If you have any query about Study Material or other thing please
          contact us below
        </p>
      </div>
    </div>
  );
};

export default AboutusPage;
