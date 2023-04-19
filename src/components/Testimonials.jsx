import userImage from "../assets/user.png";
import star from "../assets/star.svg";

export default function Testimonials() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-10">Testimonials</h1>
      <div className="flex flex-wrap flex-row w-full gap-7 justify-between p-10">
        <div className="shadow-lg w-full" style={{ flex: "1 0 40%" }}>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row pt-10 pl-10 z-50">
              <img src={userImage} alt="userimage.." className="h-10 w-10" />
              <div className="pl-6">
                <h3 className="text-xl font-bold">Name</h3>
                <h3 className="text-base" style={{ color: "#969696" }}>
                  Student
                </h3>
              </div>
            </div>
            <div
              className="h-14 w-14"
              style={{
                background:
                  "linear-gradient(to top right, #fff 0%, #fff 50%, #F4F4F4 50%, #F4F4F4 100%)",
              }}
            ></div>
          </div>
          <div className="flex flex-row w-1/3 pl-10 pt-4 justify-between">
            <img src={star} alt="star.." className="h-5 w-5 m-1" />
            <img src={star} alt="star.." className="h-5 w-5 m-1" />
            <img src={star} alt="star.." className="h-5 w-5 m-1" />
            <img src={star} alt="star.." className="h-5 w-5 m-1" />
            <img src={star} alt="star.." className="h-5 w-5 m-1" />
          </div>
          <p className="px-10 py-6 text-base">
          I recently completed a course on this website and I must say it exceeded my expectations. The course was well-structured, the instructor was knowledgeable, and I gained valuable skills. Highly recommend!
          </p>
        </div>
        <div className="shadow-lg w-full" style={{ flex: "1 0 40%" }}>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row pt-10 pl-10 z-50">
              <img src={userImage} alt="userimage..." className="h-10 w-10" />
              <div className="pl-6">
                <h3 className="text-xl font-bold">Name</h3>
                <h3 className="text-base" style={{ color: "#969696" }}>
                  Student
                </h3>
              </div>
            </div>
            <div
              className="h-14 w-14"
              style={{
                background:
                  "linear-gradient(to top right, #fff 0%, #fff 50%, #F4F4F4 50%, #F4F4F4 100%)",
              }}
            ></div>
          </div>
          <div className="flex flex-row w-1/3 pl-10 pt-4 justify-between">
            <img src={star} alt="star.." className="h-5 w-5 m-1" />
            <img src={star} alt="star.." className="h-5 w-5 m-1" />
            <img src={star} alt="star.." className="h-5 w-5 m-1" />
            <img src={star} alt="star.." className="h-5 w-5 m-1" />
            <img src={star} alt="star.." className="h-5 w-5 m-1" />
          </div>
          <p className="px-10 py-6 text-base">
          I'm currently taking a course on this website and I'm impressed with the quality of the content. The learning materials are engaging and easy to follow, and the instructor is responsive and helpful.
          </p>
        </div>
      </div>
    </div>
  );
}
