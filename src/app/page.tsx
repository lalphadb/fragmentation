import { testimonials } from "@/data/testimonials";
import HomeClient from "./HomeClient";

export default function HomePage() {
  return <HomeClient testimonials={testimonials} />;
}
