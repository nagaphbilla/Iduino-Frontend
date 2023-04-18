import React from "react";
// import logo1 from '../assets/16.svg'

export default function Slide2() {
  return (
    <div className="flex py-10">
      <div className="flex flex-col px-14 w-1/3 gap-5">
        <span className="text-clr-primary">WHAT WE GIVE</span>
        <span className="text-3xl font-semibold">What Do You Get From Us</span>
        <p className="text-clr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores hic,
          facilis, dolor eaque libero ex nostrum magnam molestiae quis sed
          provident voluptatibus distinctio laudantium ea dolorum ratione nisi.
        </p>
      </div>
      <div className="flex gap-10 px-5 w-2/3">
        <div className="flex flex-col gap-2 button-clr-primary px-4 py-4 rounded-xl justify-center h-72">
          <span className="w-9 h-9 rounded-full bg-white background_img_card1" />
          <h4 className="text-white font-bold">Professional Teacher</h4>
          <p className="text-white font-thin text-sm">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis laborum obcaecati doloribus minus eaque minima magnam
            iusto, illum omnis sapiente accusamus?
          </p>
        </div>
        <div className="flex flex-col gap-2 button-clr-primary px-4 py-4 rounded-xl justify-center h-72">
          <span className="w-9 h-9 rounded-full bg-white background_img_card2" />
          <h4 className="text-white font-bold">Course Certificate </h4>
          <p className="text-white font-thin text-sm">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis laborum obcaecati doloribus minus eaque minima magnam
            iusto, illum omnis sapiente accusamus?
          </p>
        </div>
        <div className="flex flex-col gap-2 button-clr-primary px-4 py-4 rounded-xl justify-center h-72 ">
          <span className="w-9 h-9 rounded-full bg-white background_img_card3" />
          <h4 className="text-white font-bold">Intresting Learning</h4>
          <p className="text-white font-thin text-sm">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis laborum obcaecati doloribus minus eaque minima magnam
            iusto, illum omnis sapiente accusamus?
          </p>
        </div>
      </div>
    </div>
  );
}
