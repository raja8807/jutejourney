import ReviewsPage from "@/components/pages/reviews/reviews";

const ReviewsScreen = ({reviews}) => {
  return <ReviewsPage Allreviews={reviews}/>;
};

export default ReviewsScreen;

export async function getServerSideProps(context) {
  try {
    const res = await fetch(`http://${context.req.headers.host}/api/review`);
    const homeData = await res.json();

    return { props: { reviews: homeData } };
  } catch (err) {
    return { props: { reviews: [] } };
  }
}
