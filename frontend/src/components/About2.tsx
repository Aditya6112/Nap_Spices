const About2 = () => {
    return (
        <div className="flex flex-col md:flex-row">
            {/* Left Section: Image */}
            <div className="w-full md:w-1/2 lg:w-1/3">
                <img
                    src="/images/background1.jpg"
                    alt="Spices"
                    className="w-full h-64 md:h-full object-cover "
                />
            </div>
            {/* Right Section: Content */}
            <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col justify-center items-center bg-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
                {/* Logo */}
                <div className="mb-4 sm:mb-6 md:mb-8">
                    <img
                        src="/images/logo.jpg"
                        alt="NAP Spices Logo"
                        className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64"
                    />
                </div>

                {/* Headers */}
                <div className="text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light text-black pb-2 sm:pb-4">
                        HERO OF THE KITCHEN WITH..
                    </h3>
                    <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-bold text-black font-serif pt-2 sm:pt-4">
                            NAP
                        </h1>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-bold text-black font-serif pb-2 sm:pb-4">
                            SPICES
                        </h1>
                    </div>
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-3xl font-mono text-black pt-2">
                        Spicing Up Your Life
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default About2;
