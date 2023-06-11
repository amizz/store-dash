import Hero from "./components/home/hero";
import Navbar from "./components/home/navbar";
import PricingSection from "./components/home/pricing";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <PricingSection></PricingSection>
        </div>
    );
}
