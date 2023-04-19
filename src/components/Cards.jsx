import React from "react";
// import logo1 from '../assets/16.svg'

export default function Slide2() {
  return (
    <div className="flex-direction py-10 md:flex md:py-20">
      <div className="flex flex-col md:px-14 md:w-1/3 gap-5 px-7">
        <span className="text-clr-primary">WHAT WE GIVE</span>
        <span className="text-3xl font-semibold">What Do You Get From Us</span>
        <p className="text-clr">
        This platform offers well-designed robotics courses that cater to learners of all levels. From basic concepts to advanced programming, our courses provide hands-on experience to master robotics.
        </p>
      </div>
      <div className="flex-direction py-10 md:flex gap-10 px-5 md:w-2/3">
        <div className="flex flex-col gap-2 button-clr-primary px-4 py-7 rounded-xl justify-center min-h-fit">
          <span className="w-9 h-9 rounded-full bg-white background_img_card1" />
          <h4 className="text-white font-bold">Professional Teacher</h4>
          <p className="text-white font-thin text-sm">
            {" "}
            We take pride in our team of teachers who are subject matter experts and have extensive teaching experience. Our teachers are dedicated to delivering high-quality education and ensuring student success.
          </p>
        </div>
        <div className="flex flex-col gap-2 button-clr-primary px-4 py-7 rounded-xl justify-center min-h-fit">
          <span className="w-9 h-9 rounded-full bg-white background_img_card2" />
          <h4 className="text-white font-bold">Course Certificate </h4>
          <p className="text-white font-thin text-sm">
            {" "}
            Upon completing a course on our online education website, students will receive a certificate of completion to showcase their new skills and knowledge. Our certificates are recognized by industry professionals.
          </p>
        </div>
        <div className="flex flex-col gap-2 button-clr-primary px-4 py-7 rounded-xl justify-center min-h-fit ">
          <span className="w-9 h-9 rounded-full bg-white background_img_card3" />
          <h4 className="text-white font-bold">Interesting Learning</h4>
          <p className="text-white font-thin text-sm">
            {" "}
            Our courses are designed to engage learners and make the learning experience enjoyable. We use interactive tools and multimedia to create an immersive and stimulating learning environment.
          </p>
        </div>
      </div>
    </div>
  );
}
