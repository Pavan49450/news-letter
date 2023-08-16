// import style from "./PDFDownloadPage.module.css";
import { useParams } from "react-router-dom";
import PDFDownload from "../components/PDFDownload";

const DownloadsPage = () => {
  // const { id } = useRouteLoaderData("downloads-details");
  const params = useParams();
  const id = params.downloadId;
  console.log(id);

  return (
    <>
      <PDFDownload downloadId={id}></PDFDownload>
    </>
  );
};

export default DownloadsPage;

// export async function loaderFunction({ params }) {
//   const id = params.downloadId;
//   console.log(id);
//   return id;
// }

// <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
//   <Await resolve={id}>{(id) => <h2 id={id}></h2>}</Await>
// </Suspense>
