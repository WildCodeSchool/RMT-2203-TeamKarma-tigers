import CardReviewCarousel from "../components/CardReviewCarousel";
import CardCastingCarousel from "../components/Casting/CardCastingCarousel";

export default function Home() {
  return (
    <header className="App-header">
      <CardReviewCarousel movie={550} />
      <CardCastingCarousel movie={550} />
    </header>
  );
}
