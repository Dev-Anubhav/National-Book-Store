import logo from "../assets/image/image 2.png";


const Footer = () => {
    return (
        <>
            <div className="bg-primary-0">
                <div className="footer max-w-[1280px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
                    <div className="footer-inside flex flex-col sm:flex-row justify-between gap-14 sm:gap-3">
                        <div className="left text-white gap-7 flex flex-col w-full sm:w-3/12 mb-8 sm:mb-0">
                            <img width="300" src={logo} alt="NBT" />
                            <p className="font-poppin font-normal text-[13px]">The National Book Trust, India is an apex body, established by the Government of India in the year 1957 to develop reading.</p>
                            <span className="block">Newsletter</span>
                            <div className="input flex flex-col sm:flex-row gap-2">
                                <input type="text" placeholder="Enter Your Email Address" className="flex-1 p-2 border-b-2 bg-transparent placeholder-white text-[12px] outline-none" />
                                <button className="p-2 bg-gray-800 text-white border-b-2 bg-transparent text-[14px]">SUBSCRIBE</button>
                            </div>
                        </div>
                        <div className="middle font-poppin font-medium flex flex-col text-white gap-5 flex-1 mb-8 sm:mb-0 ml-0 sm:ml-[60px]">
                            <a href="#" className="mb-6 hover:text-gray-900">My Account</a>
                            <a href="#" className="hover:text-gray-900">Login</a>
                            <a href="#" className="hover:text-gray-900">Signup</a>
                            <a href="#" className="hover:text-gray-900">Change Password</a>
                            <a href="#" className="hover:text-gray-900">My Orders</a>
                        </div>
                        <div className="middleSeco font-poppin font-medium flex flex-col text-white gap-5 flex-1 mb-8 sm:mb-0">
                            <a href="#" className="mb-6 hover:text-gray-900">Information</a>
                            <a href="#" className="hover:text-gray-900">Sitemap</a>
                            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                            <a href="#" className="hover:text-gray-900">Disclaimer</a>
                            <a href="#" className="hover:text-gray-900">Contact US/Feedback</a>
                            <a href="#" className="hover:text-gray-900">NBT Facebook</a>
                        </div>
                        <div className="last font-poppin font-medium flex flex-col text-white gap-5 flex-1">
                            <a href="#" className="mb-6 hover:text-gray-900">Contact Info</a>
                            <p>NATIONAL BOOK TRUST, INDIA Nehru Bhawan, 5 Institutional Area, Phase-II Va</p>
                            <a href="#" className="hover:text-gray-900">+91-11-26707700</a>
                            <a href="#" className="hover:text-gray-900">office.nbt@nic.in</a>
                        </div>
                    </div>
                    <hr className="border-white mt-10"/>
                    <p className="text-white mt-9 font-poppin font-normal">Copyright © 2011-2021, National Book Trust, India</p>
                </div>
            </div>
        </>
    )
}

export default Footer;
