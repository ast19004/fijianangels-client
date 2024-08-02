import Carousel from "react-bootstrap/Carousel";
import Picture from "../component/UI/Picture/Picture";

import MediaQuery from "react-responsive";

import serviceMobilitySrc from "../assests/images/services/service-mobility350px.jpg";
import serviceCompanionSrc from "../assests/images/services/service-companion350px.jpg";
import servicePersonalSrc from "../assests/images/services/service-personal350px.jpg";
import serviceCookingSrc from "../assests/images/services/service-cooking350px.jpg";
import serviceHospiceSrc from "../assests/images/services/service-hospice350px.jpg";
import serviceCleaningSrc from "../assests/images/services/service-housecleaning.jpg";
import { useState } from "react";
import { Box } from "@mui/material";

function Services() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const services = [
    {
      src: serviceMobilitySrc,
      alt: "mobility assistance",
      overlayText: {
        header: "Mobility Assist",
        body: "Our clients benefit from regular movement which results in improvements physically and mentally. This movement helps with digestion and circulation, and stimulates the mind with new sights and sounds of different rooms or the fresh air of outdoors. Our caregivers carefully consider the physical limitations and comfort of each individual's ability to walk, climb stairs, get in and out of vehicles, chairs, beds, bathrooms and other routine movements. We also make sure each client maintains proper posture for eating or while sitting and reading or watching television.",
      },
    },
    {
      src: servicePersonalSrc,
      alt: "personal service",
      overlayText: {
        header: "Personal Care",
        body: "The next level of service which includes all Compnanion Care has to offer, while also attending to the physical needs of your loved one. The care is fitting of those who require a higher degree of assistance due to injury, disability, or aging. It's no surprise that good personal hygiene is very important to physical and mental well-being of all of us. Our caregivers are specially trained in personal hygiene and other personal care services, and always focus on preserving the dignity, comfort, and health of each client.",
      },
    },
    {
      src: serviceCompanionSrc,
      alt: "companion care",
      overlayText: {
        header: "Companion Care",
        body: "A less-intensive, non-medical form of home care. Allow your loved ones to live an independent life with fulfillment and joy; while having peace-of-mind when you cannot be there.",
      },
    },
    {
      src: serviceCleaningSrc,
      alt: "house cleaning",
      overlayText: {
        header: "Light Housekeeping",
        body: "Leave the cleaning to us! Safety and cleanliness in the home are very important, and our caregivers provide services including vaccuming, dusting, trash removal, organizing and tidying, and the caregivers thoroughly do the cleaning of kitchens and bathrooms. We cannot do such tasks as lifting or moving furniture, or washing windows, but we are happy to provide quality referals when asked.",
      },
    },
    {
      src: serviceHospiceSrc,
      alt: "In Home Hospice",
      overlayText: {
        header: "In Home Hospice",
        body: "When your loved one needs hospice care assistance, you need to know they will be safe. And what better way to provide peace of mind, than knowing your loved one is at home? Our Caregivers, helps to maintain a safe environment for your loved one in the comfort of their own home. We understand that this is a difficult time for your entire family. With our compassionate care, you can count on the companionship and support your loved one needs to be as comfortable as possible.",
      },
    },
    {
      src: serviceCookingSrc,
      alt: "Special Diets, Meal Preperation & Eating Assistance",
      overlayText: {
        header: "Special Diets, Prep, Eating",
        body: "Cooking and cleaning up is our job. Our caregivers can prepare regular meals focused on maintaining a healthy diet and sufficient nutrition. We are happy to do the shopping and prepare meals per the client's specific direction or meal plan, or we can get creative with other healthy options.",
      },
    },
  ];

  return (
    <>
      <MediaQuery maxWidth={649}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={3000}
          fade={true}
        >
          {services.map((service, index) => (
            <Carousel.Item key={index}>
              <Picture
                src={service.src}
                alt={service.alt}
                overlayText={service.overlayText}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </MediaQuery>
      <MediaQuery minWidth={650} maxWidth={1019}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={5000}
          fade={true}
        >
          <Carousel.Item>
            <Box
              sx={{ display: "flex", gap: "15px", justifyContent: "center" }}
            >
              {services.slice(0, 2).map((service, index) => (
                <Picture
                  key={index}
                  src={service.src}
                  alt={service.alt}
                  overlayText={service.overlayText}
                />
              ))}
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box
              sx={{ display: "flex", gap: "15px", justifyContent: "center" }}
            >
              {services.slice(2, 4).map((service, index) => (
                <Picture
                  key={index}
                  src={service.src}
                  alt={service.alt}
                  overlayText={service.overlayText}
                />
              ))}
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box
              sx={{ display: "flex", gap: "15px", justifyContent: "center" }}
            >
              {services.slice(4).map((service, index) => (
                <Picture
                  key={index}
                  src={service.src}
                  alt={service.alt}
                  overlayText={service.overlayText}
                />
              ))}
            </Box>
          </Carousel.Item>
        </Carousel>
      </MediaQuery>
      <MediaQuery minWidth={1020}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={5000}
          fade={true}
        >
          <Carousel.Item>
            <Box
              sx={{ display: "flex", gap: "15px", justifyContent: "center" }}
            >
              {services.slice(0, 3).map((service, index) => (
                <Picture
                  key={index}
                  src={service.src}
                  alt={service.alt}
                  overlayText={service.overlayText}
                />
              ))}
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box
              sx={{ display: "flex", gap: "15px", justifyContent: "center" }}
            >
              {services.slice(3).map((service, index) => (
                <Picture
                  key={index}
                  src={service.src}
                  alt={service.alt}
                  overlayText={service.overlayText}
                />
              ))}
            </Box>
          </Carousel.Item>
        </Carousel>
      </MediaQuery>
    </>

    // <Article header="Services" id="services">
    //   <Section
    //     id="section-services_companion"
    //     header="Companion Care"
    //     paragraph="A less-intensive, non-medical form of home care. Allow your loved ones to live an independent life with fulfillment and joy; while having peace-of-mind when you cannot be there."
    //   />
    //   <br />
    //   <Section
    //     id="section-services_personal"
    //     header="Personal Care"
    //     paragraph="The next level of service which includes all Compnanion Care has to offer, while also attending to the physical needs of your loved one. The care is fitting of those who require a higher degree of assistance due to injury, disability, or aging. It's no surprise that good personal hygiene is very important to physical and mental well-being of all of us. Our caregivers are specially trained in personal hygiene and other personal care services, and always focus on preserving the dignity, comfort, and health of each client."
    //   />
    //   <br />
    //   <Section
    //     id="section-services_reminders"
    //     header="Medication Reminders"
    //     paragraph="Our caregivers cannot administer medications, but they can provide regular reminders for oral medications or injections and the monitoring of side effects or other medical issues. The only time they can give medication is if it is approved by a family member."
    //   />
    //   <br />
    //   <Section
    //     id="section-services_stroke"
    //     header="Stroke Care"
    //     paragraph="When someone has a stroke, they need time to readjust to a new normal with new abilities. Our CareGivers provide relief for caregivers who understand the chronic care needs of those who have experienced a stroke. Our compassionate caregivers patiently work through your loved ones comunication difficulties to promote their dignity, preferences, and lifestyle choices."
    //   />
    //   <br />
    //   <Section
    //     id="section-services_mobility"
    //     header="Walking Assistance, Mobility, and Posture Positioning"
    //     paragraph="Our clients benefit from regular movement which results in improvements physically and mentally. This movement helps with digestion and circulation, and stimulates the mind with new sights and sounds of different rooms or the fresh air of outdoors. Our caregivers carefully consider the physical limitations and comfort of each individual's ability to walk, climb stairs, get in and out of vehicles, chairs, beds, bathrooms and other routine movements. We also make sure each client maintains proper posture for eating or while sitting and reading or watching television."
    //   />
    //   <br />
    //   <Section
    //     id="section-services_hospice"
    //     header="In Home Hospice"
    //     paragraph="When your loved one needs hospice care assistance, you need to know they will be safe. And what better way to provide peace of mind, than knowing your loved one is at home? Our Caregivers, helps to maintain a safe environment for your loved one in the comfort of their own home. We understand that this is a difficult time for your entire family. With our compassionate care, you can count on the companionship and support your loved one needs to be as comfortable as possible."
    //   />
    //   <br />
    //   <Section
    //     id="section-services_housekeeping"
    //     header="Light Housekeeping"
    //     paragraph="Leave the cleaning to us! Safety and cleanliness in the home are very important, and our caregivers provide services including vaccuming, dusting, trash removal, organizing and tidying, and the caregivers thoroughly do the cleaning of kitchens and bathrooms. We cannot do such tasks as lifting or moving furniture, or washing windows, but we are happy to provide quality referals when asked."
    //   />
    //   <br />
    //   <Section
    //     id="section-services_diet"
    //     header="Special Diets, Meal Preparation, Eating Assistance"
    //     paragraph="Cooking and cleaning up is our job. Our caregivers can prepare regular meals focused on maintaining a healthy diet and sufficient nutrition. We are happy to do the shopping and prepare meals per the client's specific direction or meal plan, or we can get creative with other healthy options."
    //   />
    //   <br />
    //   <Section
    //     id="section-services_respite"
    //     header="Respite Care"
    //     paragraph="Families need a break to maintain their own health. This is critical as caregiving can be immensely stressful. We can help relieve this stress of caring for a loved one by providing a much-needed break to primary caregiver."
    //   />
    //   <br />
    // </Article>
  );
}

export default Services;
