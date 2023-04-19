import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#393E46", color: "white", paddingTop : "40px"}} className="md:px-4 px-2">
      <div className="flex flex-wrap flex-row">
        <div className="flex gap-5 flex-col p-6 justify-between" style={{flex : "1 0 45%"}}>
          <p className="text-2xl ">Iduino</p>
          Iduino is an intresting platform that will teach
          <br />
          you in more an interactive way
          <ul className="flex flex-row">
            <li className="pr-2 cursor-pointer">
              <div
                className="p-1 rounded-md"
                style={{ border: "1.5px solid white" }}
              >
                <img src={facebook} alt="facebook.." className="h-4 w-4" />
              </div>
            </li>
            <li className="px-2 cursor-pointer">
              <div
                className="p-1 rounded-md"
                style={{ border: "1.5px solid white" }}
              >
                <img src={instagram} alt="instagram" className="h-4 w-4" />
              </div>
            </li>
            <li className="px-2 cursor-pointer">
              <div
                className="p-1 rounded-md"
                style={{ border: "1.5px solid white" }}
              >
                <img src={youtube} alt="youtube.." className="h-4 w-4" />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap flex-row justify-between p-4" style={{flex : "1 0 45%"}}>
        <div className="m-3" style={{flex : "1 0 20%"}}>
        <h3 className="font-semibold text-lg mb-2">Home</h3>
          <ul>
            <li className="mt-2">
              Careers
            </li>
            <li className="mt-2">
              About Us
            </li>
            <li className="mt-2">
              Login
            </li>
          </ul>
        </div>
        <div className="m-3" style={{flex : "1 0 20%"}}>
        <h3 className="font-semibold text-lg mb-2">Courses</h3>
          <ul>
          <li className="mt-2">
              Robotics
            </li>
            <li className="mt-2">
              Artificial Intelligence
            </li>
            <li className="mt-2">
              Machine Learning
            </li>
          </ul>
        </div>
        <div className="m-3" style={{flex : "1 0 20%"}}>
        <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <ul>
          <li className="mt-2">
              example@gmail.com
            </li>
          </ul>
        </div>
        </div>
      </div>
      <p className="text-md py-4 font-extralight text-center">&#169;All rights reserved.</p>
    </div>
  );
}
