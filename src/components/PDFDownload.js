import { Link } from "react-router-dom";
import style from "./PDFDownload.module.css";
import timesOfIndiaImg from "../asset/timesOfIndia.jpg";

const downloadContent = [
  {
    id: "n1",
    title: "Time of India",
    content: {
      heading: "Times of India epaper PDF Free Download Daily After 07:00 AM",
      instructions: {
        heading: "How To Download Times of India epaper ?",
        steps: [
          "First Scroll Down the Post",
          "Find Month which you want",
          "Choose Date and Click on Download Now",
          "Wait 5 Second Download Will be start automatic",
        ],
        explanation:
          "Please Scroll down For download today Times of India epaper and Find out Latest month which you want. then next you can choose required date and then click on download now button. after clicking please wait 5 seconds, download will be start automatically.",
        image: timesOfIndiaImg,
      },
      socialMedia: {
        heading: "Join us Also on Social Media",
        description:
          "Please follow our Facebook and Telegram page also, there we share daily e-papers as well as important updates. You can go to our official social media pages by clicking on the bellow icon. From where you can follow our social media account.",
      },
      aboutTimesOfIndia: {
        heading: "About Times of India epaper & Company",
        descriptionTable: [
          { title: "Type", description: "Daily ePaper (Newspaper)" },
          { title: "Formate", description: "Broadsheet, PDF" },
          { title: "Owner", description: "Times Group" },
          { title: "Founder", description: "Coleman family" },
          { title: "Publisher", description: "Bennett, Coleman & Co. Ltd." },
          {
            title: "Editor",
            description: "Jaideep Bose (Print) | Rajesh Kalra (Online)",
          },
          { title: "Founded", description: "3 November 1838, 181 years ago" },
          { title: "Language", description: "English" },
          { title: "HeadQuarters", description: "Mumbai, Maharashtra, India" },
          {
            title: "Circulation",
            description: "Daily 2,640,770 unit (as of January–June 2019)",
          },
          { title: "ISSN", description: "0971-8257" },
          { title: "OCLC", description: "23379369" },
          {
            title: "Website",
            description: "https://timesofindia.indiatimes.com",
          },
        ],
      },
      notice: {
        heading: "Important Notice:",
        description:
          "We are not the Publisher or Owner of this ePaper. We are only share downloadable link only for Students, which is already available on the Social Media & other internet Platform. This ePaper shared only for educational purposes. If it violates any policy in any way or if anyone has a complaint about it, please contact us Below",
      },
      downloadLinks: {
        heading: "Times of India epaper- Download Links In PDF",
        description:
          "Here we have shared the download link of Times of India epaper pdf Today in PDF format. We update the page daily after 06:30 am. If you have any problems related to downloading, please comment us below",
        subHeading: "Times of India ePaper – July 2023",
        links: [
          { date: "16 July 2023", path: "#" },
          { date: "15 July 2023", path: "#" },
          { date: "14 July 2023", path: "#" },
          { date: "13 July 2023", path: "#" },
          { date: "12 July 2023", path: "#" },
          { date: "11 July 2023", path: "#" },
          { date: "10 July 2023", path: "#" },
          { date: "09 July 2023", path: "#" },
          { date: "08 July 2023", path: "#" },
          { date: "07 July 2023", path: "#" },
          { date: "06 July 2023", path: "#" },
          { date: "05 July 2023", path: "#" },
          { date: "04 July 2023", path: "#" },
          { date: "03 July 2023", path: "#" },
          { date: "02 July 2023", path: "#" },
          { date: "01 July 2023", path: "#" },
        ],
      },
      other: {
        heading: "Other Newspaper’s",
        newsPaperLinks: [
          { title: "Times of India", path: "/downloads" },
          { title: "Financial Express", path: "/downloads" },
          { title: "Economic Times", path: "/downloads" },
          { title: "The Telegraph", path: "/downloads" },
          { title: "The Pioneer", path: "/downloads" },
          { title: "Statesman", path: "/downloads" },
          { title: "Asian Age", path: "/downloads" },
          { title: "The Tribune", path: "/downloads" },
          { title: "Deccan Chronicle", path: "/downloads" },
          { title: "Free Press Journal", path: "/downloads" },
        ],
      },
    },
  },
];

const PDFDownload = ({ downloadId }) => {
  const content = downloadContent.filter(
    (content) => content.id === downloadId
  )[0].content;

  return (
    <div className={style.downloadContent}>
      <div>
        <h1>{content.heading}</h1>
      </div>
      <div className={style.instructionsSection}>
        <h2>{content.instructions.heading}</h2>
        <ol>
          {content.instructions.steps.map((step) => (
            <li key={Math.random()}>{step}s</li>
          ))}
        </ol>
        <p>{content.instructions.explanation}</p>
        <div className={style.newsPaperImg}>
          <img
            src={content.instructions.image}
            alt="The Times India News Paper"
          ></img>
        </div>
      </div>
      <div>
        <h2>{content.socialMedia.heading}</h2>
        <p>{content.socialMedia.description}</p>
      </div>
      <div className={style.downloadTable}>
        <h2>{content.aboutTimesOfIndia.heading}</h2>
        <table>
          {content.aboutTimesOfIndia.descriptionTable.map((description) => (
            <tr key={Math.random()}>
              <td>{description.title}</td>
              <td>{description.description}</td>
            </tr>
          ))}
        </table>
      </div>
      <div>
        <h2>{content.notice.heading}</h2>
        <p>{content.notice.description}</p>
      </div>
      <div>
        <h2>{content.downloadLinks.heading}</h2>
        <p>{content.downloadLinks.description}</p>
        <h2 style={{ textAlign: "center" }}>
          {content.downloadLinks.subHeading}
        </h2>
        <ul className={style.downloadLinks}>
          {content.downloadLinks.links.map((link) => (
            <li key={Math.random()}>
              <h3>{link.date}:</h3>
              <a href={link.path}>Download Now</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.othersTable}>
        <h2>{content.other.heading}</h2>
        <table>
          {content.other.newsPaperLinks.map((link) => (
            <tr key={Math.random()}>
              <td>{link.title}</td>
              <td>
                <Link to={link.path}>Click Here</Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PDFDownload;
