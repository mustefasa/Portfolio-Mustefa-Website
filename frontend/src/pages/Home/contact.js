import React from "react";
import SectionTitle from "../../components/SectionTitle";
import pic from "../../asset/images/contact.jpg"
import { useSelector } from "react-redux";

function Contact() {
  const {portfolioData} = useSelector((state) => state.root);

  const {contact} = portfolioData
  return (
    <div>
      <SectionTitle title="Sey Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col">
        <p className="text-fifth font-semibold">{"{"}</p>
         {Object.keys(contact).map((key) => 
         key !=="_id" &&
         (
          <p className="ml-5">
            <span className="text-fifth font-semibold">{key}:</span>
            <span className="text-fifth font-semibold">{contact[key]}</span>
          </p>
        ))}
        <p className="text-fifth font-semibold">{"}"}</p>
        </div>
        <div>
            <img src={pic} alt="contactImage" className="h-[300px]"/>
        </div>
      </div>
    </div>
  );
}
export default Contact;
