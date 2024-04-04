function ContactCard() {
  return (
    <div className="border border-black h-fit w-fit rounded-xl p-4">
      <p>Managing Director</p>
      <p className="font-semibold text-lg mb-2">Mr. Ramesh Chandra Bhattarai</p>
      <p>
        <span className="font-semibold text-lg">Phone:</span>{" "}
        <span>+977 9876000000</span>
      </p>
      <p>
        <span className="font-semibold text-lg">Email:</span>{" "}
        <span>Bethesdacounseling.live@gmail.com</span>
      </p>
    </div>
  );
}
export default ContactCard;
