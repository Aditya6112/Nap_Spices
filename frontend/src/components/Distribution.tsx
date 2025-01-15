const Distribution = () => {
    return (
        <section
            id="distribution"
            className="py-12 px-6 md:px-12 lg:px-48 bg-cover bg-center"
        >
            <div className="relative container mx-auto p-6 md:p-12 lg:p-16 bg-white bg-opacity-0 rounded-lg">
                <div
                    className="absolute inset-0 -z-10 border-8 rounded-lg"
                    style={{
                        borderImageSource: "url('/images/borderstripe.jpg')",
                        borderImageSlice: 20,
                        borderImageRepeat: "repeat",
                    }}
                ></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800">
                        Become a Distributor or Stockist
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-center text-gray-600">
                        Join hands with NAP Spices and be part of our growing network. Watch the video below and reach out to us for more information.
                    </p>

                    {/* YouTube Video */}
                    <div className="mt-8 flex justify-center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/QbUEl_D169w?si=FAPY5SVX269LrGNB"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full max-w-xl sm:max-w-2xl lg:max-w-4xl aspect-video rounded-lg shadow-lg"
                        ></iframe>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-12 text-center">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                            Contact Us
                        </h3>
                        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600">
                            A-7/29, First Floor, Sector-16, Rohini, Delhi 110089
                        </p>
                        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600">
                            Customer Care:{" "}
                            <a href="tel:+919212986744" className="text-black font-medium">
                                +91 92129 86744
                            </a>
                        </p>
                        <p className="mt-2 text-lg sm:text-xl lg:text-2xl text-gray-600">
                            {/* Email:{" "} */}
                            <a href="mailto:contact@napspices.com" className="text-black font-medium">
                                contact@napspices.com
                            </a>
                            <br></br>
                            <a href="mailto:exportnap@gmail.com" className="text-black font-medium">
                                exportnap@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Distribution;
