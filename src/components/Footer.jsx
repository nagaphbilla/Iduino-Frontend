import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#393E46", color: "white" }}>
      <div className="flex flex-wrap flex-row">
        <div className="flex flex-col w-1/2 p-6 justify-between">
          <div></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis,
            justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor
            dolor augue et lectus.{" "}
          </p>
          <ul className="flex flex-row">
            <li className="px-2 cursor-pointer">
              <div
                className="p-1 rounded-md"
                style={{ border: "1.5px solid white" }}
              >
                <img src={facebook} className="h-4 w-4" />
              </div>
            </li>
            <li className="px-2 cursor-pointer">
              <div
                className="p-1 rounded-md"
                style={{ border: "1.5px solid white" }}
              >
                <img src={instagram} className="h-4 w-4" />
              </div>
            </li>
            <li className="px-2 cursor-pointer">
              <div
                className="p-1 rounded-md"
                style={{ border: "1.5px solid white" }}
              >
                <img src={youtube} className="h-4 w-4" />
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3>Home</h3>
          <ul>
            <li>
              
            </li>
          </ul>
        </div>
      </div>
      <p>&#169;All rights reserved.</p>
    </div>
  );
}
