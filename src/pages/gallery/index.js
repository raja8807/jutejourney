const {
  default: GalleryScreen,
} = require("@/components/pages/gallery/gallery");

const GalleryPage = ({ images }) => {
  
  return <GalleryScreen allImages={images}/>;
};

export default GalleryPage;

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
