import Counter from "./Counter";
import JoinMillion from "./JoinMillion";
import KnowAudience from "./KnowAudience";
import Review from "./Review";
import TopBanner from "./TopBanner";

export default function FrontPage() {
  return (
    <>
      <TopBanner />
      <KnowAudience />
      <Counter />
      <Review />
        
    <JoinMillion/>
    </>
  );
}
