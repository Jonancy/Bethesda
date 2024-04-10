import ContactCard from "@/components/home/contactCard";
import ContactUsForm from "@/components/home/contactUsForm";

function ContactUs() {
  //TODO: When i add the team members then i will add the contact us
  return (
    <div className="flex flex-col min-h-screen mx-20 mt-16">
      <div className="flex gap-x-16">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d878.8751513371392!2d83.9880829!3d28.2224815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399594441b5094e5%3A0xe5c46bb3b2c2c339!2sBethesda%20Language%20School!5e0!3m2!1sen!2snp!4v1712216384084!5m2!1sen!2snp"
            width="700"
            height="500"
            loading="lazy"
            className="rounded-3xl"
          ></iframe>
        </div>
        <div>
          <p className="text-primaryColor text-3xl font-medium tracking-wide ">
            <span className="underline underline-offset-[15px] "> Our </span>{" "}
            Contact Address
          </p>
          <p className="text-primaryColor text-3xl font-medium mt-8 text-wrap w-2/3 tracking-wide ">
            Bethesda International Language and Leadership Development Centre
            Pvt. Ltd.
          </p>
          <div className="text-primaryColor text-xl font-medium mt-6 text-wrap w-2/3 tracking-wide space-y-5">
            <p>
              Address:{" "}
              <span className=" font-light">
                {" "}
                2nd Floor, Bishalnagar, Kathmandu, Nepal
              </span>
            </p>
            <p>
              Tel: <span className=" font-light"> +977 9876000000</span>
            </p>
            <p>
              Email: <span className="font-light">info@billdc.edu.np</span>
            </p>
          </div>
          <div className="flex w-full justify-between mt-5">
            <ContactCard />
            <ContactCard />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <ContactUsForm />
      </div>
    </div>
  );
}
export default ContactUs;
