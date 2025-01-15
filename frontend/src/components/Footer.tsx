const Footer = () => {
    return (
        <>
            <footer className="bg-white">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="images/logo.jpg" className="h-20" alt="Flowbite Logo" />
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                            <li>
                                <a href="#mission" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#processed" className="hover:underline me-4 md:me-6">Processed Spices</a>
                            </li>
                            <li>
                                <a href="#plain" className="hover:underline me-4 md:me-6">Plain Spices</a>
                            </li>
                            <li>
                                <a href="#smaller" className="hover:underline">Small Packaging</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <span className="block text-xl text-gray-500 sm:text-center ">© 2025 <a href="#" className="hover:underline">NAP Spices</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    )
}
export default Footer;