import Hero from "./components/home/Hero";
import Navbar from "./components/home/Navbar";
import PricingSection from "./components/home/Pricing";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <PricingSection></PricingSection>
        </div>
    );
}
