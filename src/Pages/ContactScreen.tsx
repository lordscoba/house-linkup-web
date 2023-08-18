import ContactHero from "../component/Contact/ContactHero";
import Search from "../component/reusableComponents/Search";

type Props = {};

const ContactScreen = (props: Props) => {
  return (
    <div>
      <ContactHero />
      <Search />
    </div>
  );
};

export default ContactScreen;
