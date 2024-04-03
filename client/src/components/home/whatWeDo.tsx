import whatWe from "../../assets/whatWe.png";

export default function WhatWeDo() {
  return (
    <div className="flex gap-10 items-center py-10 px-32">
      <img src={whatWe} className="w-[50rem] rounded-3xl"></img>
      <div className="">
        <h1>What We do </h1>
        <p>
          Founded in 2010, we do provide basic care and counseling training to
          equip civil society leaders, with preference to rural areas. This is
          done in three phase of 4 days each over a time period of one year and
          there is also a retreat as an integral part of the training.
        </p>
      </div>
    </div>
  );
}
