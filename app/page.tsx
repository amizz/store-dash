import Hero from "./components/hero";
import Navbar from "./components/navbar";
import PricingSection from "./components/pricing";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <PricingSection></PricingSection>
        </div>
    );
}
