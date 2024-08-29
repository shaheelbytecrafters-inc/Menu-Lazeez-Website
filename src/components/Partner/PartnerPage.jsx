
import AccordionPartner from "./AccordionPartner";
import LazeezPartner from "./LazeezPartner";
import PartnerCard from "./PartnerCard";
import PartnerHomePage from "./PartnerHomePage";
import PartnerSlider from "./PartnerSlider";
import SignUpPartner from "./SignUpPartner";

const PartnerPage = () => {
  return (
    <>
      <PartnerHomePage />
      <LazeezPartner />
      <PartnerCard/>
      <PartnerSlider /> 
      <SignUpPartner />
      <AccordionPartner />
    </>
  );
};

export default PartnerPage;
