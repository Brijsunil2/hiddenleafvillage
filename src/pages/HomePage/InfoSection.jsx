import InfoCard from "./InfoCard";
import NinjaNewsImg from "../../assets/ninja-news.webp";
import NinjaAcademyImg from "../../assets/ninja-academy.webp";
import NinjaEventsImg from "../../assets/ninja-events.webp";

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="infocards">
        <InfoCard
          image={NinjaNewsImg}
          imageAlt="Ninja News Illustration"
          title="News"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci eget turpis facilisis sollicitudin."
        />

        <InfoCard
          image={NinjaAcademyImg}
          imageAlt="Ninja Academy Illustration"
          title="Ninja Academy"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci eget turpis facilisis sollicitudin."
        />

        <InfoCard
          image={NinjaEventsImg}
          imageAlt="Ninja Events Illustration"
          title="Upcoming Events"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci eget turpis facilisis sollicitudin."
        />
      </div>
    </section>
  );
};

export default InfoSection;
