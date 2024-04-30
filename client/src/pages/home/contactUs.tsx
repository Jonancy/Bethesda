import ContactCard from "@/components/home/contactCard";
import ContactUsForm from "@/components/home/contactUsForm";

function ContactUs() {
  //TODO: When i add the team members then i will add the contact us
  return (
    <div className="flex flex-col min-h-screen mx-4 md:mx-20 mt-8 md:mt-16">
      {" "}
      {/* Adjusted horizontal and vertical margin for different screen sizes */}
      <div className="flex flex-col md:flex-row gap-8">
        {" "}
        {/* Adjusted layout for different screen sizes */}
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d878.8751513371392!2d83.9880829!3d28.2224815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399594441b5094e5%3A0xe5c46bb3b2c2c339!2sBethesda%20Language%20School!5e0!3m2!1sen!2snp!4v1712216384084!5m2!1sen!2snp"
            width="100%"
            height="500"
            loading="lazy"
            className="rounded-3xl"
          ></iframe>
        </div>
        <div className="flex-1">
          <p className="text-primaryColor text-3xl font-medium tracking-wide mb-4">
            <span className="underline underline-offset-[15px] "> Our </span>{" "}
            Contact Address
          </p>
          <p className="text-primaryColor text-xl font-medium mb-4 md:w-2/3 tracking-wide ">
            Bethesda International Language and Leadership Development Centre
            Pvt. Ltd.
          </p>
          <div className="text-primaryColor text-lg font-medium md:w-2/3 tracking-wide space-y-4">
            <p>
              Address:{" "}
              <span className="font-light">
                {" "}
                2nd Floor, Bishalnagar, Kathmandu, Nepal
              </span>
            </p>
            <p>
              Tel: <span className="font-light"> +977 9876000000</span>
            </p>
            <p>
              Email: <span className="font-light">info@billdc.edu.np</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between mt-5 gap-4">
            {" "}
            {/* Adjusted layout for different screen sizes */}
            <ContactCard />
            <ContactCard />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-8 md:mt-12">
        {" "}
        {/* Adjusted top margin for different screen sizes */}
        <ContactUsForm />
      </div>
    </div>
  );
}

export default ContactUs;
