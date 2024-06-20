import React from "react";
import "./App.css";
import Header from "./header.js";
import Title from "./header-title.js";
import Awards from "./awards.js";
import AboutUs from "./About-us.js";
import Block from "./Block.js";
import CFBlock from "./CFBlock.js";
import Footer from "./footer.js";

// JSON
import header from "./json/header";
import about from "./json/text__about__us";
import awardsData from "./json/awards.json";
import text__clients from "./json/text__clients.json";
import services from "./json/text__block.json";
import recent from "./json/text__recent.json";
import footerData from "./json/footer.json";

const App = () => {
  const blocks = [
    {
      title: services.services.titleArc,
      description: services.services.descriptionArc,
      img: services.services.imageSrcArc,
    },
    {
      title: services.services.titleBuild,
      description: services.services.descriptionBuild,
      img: services.services.imageSrcBuild,
    },
    {
      title: services.services.titleConstruct,
      description: services.services.descriptionConstruct,
      img: services.services.imageSrcConstruct,
    },
  ];
  const awardsList = [
    {
      img: awardsData.awardsSection.imgSrcGerman,
      text: awardsData.awardsSection.textGerman,
    },
    {
      img: awardsData.awardsSection.imgSrcGold,
      text: awardsData.awardsSection.textGold,
    },
    {
      img: awardsData.awardsSection.imgSrcDesign,
      text: awardsData.awardsSection.textDesign,
    },
    {
      img: awardsData.awardsSection.imgSrcGood,
      text: awardsData.awardsSection.textGood,
    },
  ];
  const aboutUsImages = [
    { src: about.aboutUs.aboutus__img, alt: "About Us Image 1" },
    { src: about.aboutUs.aboutus__img1, alt: "About Us Image 2" },
  ];

  const aboutUsStatistics = [
    { value: text__clients.statistics.clientsPercentage.text, text: text__clients.statistics.clientsText.text },
    { value: text__clients.statistics.employeesNumber.text, text: text__clients.statistics.employeesText.text },
    { value: text__clients.statistics.projectsCompleted.text, text: text__clients.statistics.projectsText.text },
  ];
  return (
    <>
      <Header />
      <Title title={header.title} subtitle={header.subtitle} />
      <Awards title={awardsData.awardsSection.title} awards={awardsList} />
      <AboutUs
        aboutUsTitle={about.aboutUs.title}
        aboutUsSubtitle={about.aboutUs.subtitle}
        description={about.aboutUs.description}
        images={aboutUsImages}
        statistics={aboutUsStatistics}
      />
      <Block blocks={blocks} />
      <CFBlock recentWorks={recent.recentWorks} />
      <div class="container_two-line mt-10"></div>
      <Footer
        title={footerData.footer.title}
        sendHi={footerData.footer.sendHi}
        location={footerData.footer.location}
        emailLabel={footerData.footer.emailLabel}
        email={footerData.footer.email}
        phoneLabel={footerData.footer.phoneLabel}
        phone={footerData.footer.phone}
        copyright={footerData.footer.copyright}
        connectLabel={footerData.footer.connectLabel}
        socialIcons={footerData.footer.socialIcons}
      />
    </>
  );
};

export default App;
