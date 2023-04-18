import userImage from "../assets/user.png";
import star from "../assets/star.svg"

export default function Testimonials() {
    return (
        <div style={{backgroundColor : "#F4F4F4"}}>
            <h1 className="text-3xl font-bold text-center pt-10">Testimonials</h1>
            <div className="flex flex-wrap flex-row w-full justify-between p-10">
                <div className="shadow-lg m-7 w-full" style={{flex: "1 0 40%"}}>
                    <div className="flex flex-row w-full justify-between">
                        <div className="flex flex-row p-6">
                            <img src={userImage} className="h-10 w-10"/>
                            <div className="pl-6">
                                <h3 className="text-xl font-bold">Name</h3>
                                <h3 className="text-base" style={{color : "#969696"}}>Student</h3>
                            </div>
                        </div>
                        <div className="h-14 w-14" style={{background : "linear-gradient(to top right, #fff 0%, #fff 50%, #F4F4F4 50%, #F4F4F4 100%)"}}></div>
                    </div>
                    <div className="flex flex-row p-6 w-1/3 justify-between">
                        <img src={star} className="h-5 w-5 m-1"/>
                        <img src={star} className="h-5 w-5 m-1"/>
                        <img src={star} className="h-5 w-5 m-1"/>
                        <img src={star} className="h-5 w-5 m-1"/>
                        <img src={star} className="h-5 w-5 m-1"/>
                    </div>
                    <p className="p-6 text-base h-32" style={{backgroundColor : "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus.</p>
                </div>
                <div className="shadow-lg m-7 w-full" style={{flex: "1 0 40%"}}>
                    <div className="flex flex-row w-full justify-between">
                        <div className="flex flex-row p-6">
                            <img src={userImage} className="h-10 w-10"/>
                            <div className="pl-6">
                                <h3 className="text-xl font-bold">Name</h3>
                                <h3 className="text-base" style={{color : "#969696"}}>Student</h3>
                            </div>
                        </div>
                        <div className="h-14 w-14" style={{background : "linear-gradient(to top right, #fff 0%, #fff 50%, #F4F4F4 50%, #F4F4F4 100%)"}}></div>
                    </div>
                    <div className="flex flex-row p-6 w-1/3 justify-between">
                        <img src={star} className="h-5 w-5 m-1"/>
                        <img src={star} className="h-5 w-5 m-1"/>
                        <img src={star} className="h-5 w-5 m-1"/>
                        <img src={star} className="h-5 w-5 m-1"/>
                        <img src={star} className="h-5 w-5 m-1"/>
                    </div>
                    <p className="p-6 text-base h-32" style={{backgroundColor : "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus.</p>
                </div>
            </div>
        </div>
    )
}