import React from "react";
import ContactCard from "../card/ContactCard";

const ContactDetails = () => {
  return (
    <div className="pt-20 justify-center my-3">
      <div className="container px-auto text-center overflow-hidden mx-auto flex flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
          <ContactCard
            icon="fa-light fa-map"
            title="My Address"
            address="Vettersstraße 70, Chemnitz 09126 Deutschland"
          />
          <ContactCard
            icon="fa-light fa-calendar"
            title="My Availability"
            hoverDisabled
            address="Monday - Friday: 9am to 6pm Saturday - Sunday: Closed."
          />
          <ContactCard
            icon="fa-light fa-phone"
            title="Let's Talk"
            numbers
            number1="+49 176 7125 9396"
            number2="+91 94350 05619"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
