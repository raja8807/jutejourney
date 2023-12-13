import GalleryAdminScreen from "@/components/pages/admin/gallery_admin/gallery_admin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const GalleryAdmin = ({images}) => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (!session.data) {
      router.push("/admin");
    }
  }, [session]);

  if (session.data) {
    return <GalleryAdminScreen images={images}/>;
  }

  return <p>unauthorised</p>;
};

export default GalleryAdmin;

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
