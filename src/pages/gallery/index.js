// const isServerReq = req => !req.url.startsWith('/_next');

const {
  default: GalleryScreen,
} = require("@/components/pages/gallery/gallery");

const GalleryPage = ( {images} ) => {
  
  // const images = []
  return <GalleryScreen allImages={images} />;
};

export default GalleryPage;

// GalleryPage.getInitialProps = async (context) => {
//   try {
//     const res = await fetch(`http://${context.req.headers.host}/api/gallery`);
//     const homeData = await res.json();

//     return { props: { images: homeData } };
//   } catch (err) {
//     return { props: { images: [],err:err.message } };
//   }
// };

export async function getServerSideProps(context) {
  try {
    const q = context.query.category;
    const res = await fetch(`http://${context.req.headers.host}/api/gallery`);
    const homeData = await res.json();

    return { props: { images: homeData } };
  } catch (err) {
    return { props: { images: [] } };
  }
}
