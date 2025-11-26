import AdoptBanner from "@/components/AdopBanner";
import Banner from "@/components/Banner";
import FeaturesTicker from "@/components/FeaturesTicker";
import Hero from "@/components/Hero";
import Items from "@/components/Items";
import Section from "@/components/Section";
import WhyAdopt from "@/components/WhyAdopt";


export default function Home() {
  return (
    <div >
     <div className="container mx-auto">
      <Banner/>
     <Hero/>
     
     </div>
     <FeaturesTicker/>
     <div className="container mx-auto"><AdoptBanner/>
     <Items/>
     <Section/>
     <WhyAdopt/> </div>
    </div>
  );
}
