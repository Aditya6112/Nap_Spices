const About = () => {
    return (
        <section
            className="py-12 px-6 md:px-12 lg:px-48 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/bg3.jpg')" }}
        >
            <div className="flex justify-center items-center">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image Section */}
                    <div className="flex justify-center order-2 md:order-1">
                        <img
                            src="/images/NAP POSTER.png"
                            alt="About NAP Spices"
                            className="w-48 md:w-72 rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="order-1 md:order-2 text-center">
                        <h3
                            className="text-2xl md:text-3xl lg:text-4xl font-light text-white pb-4"
                            style={{ backgroundColor: "rgba(255, 0, 0, 0.45)" }}
                        >
                            HERO OF THE KITCHEN WITH..
                        </h3>
                        <div>
                            <h1
                                className="text-5xl md:text-6xl lg:text-8xl font-bold text-white font-serif pt-4"
                                style={{ backgroundColor: "rgba(255, 0, 0, 0.45)" }}
                            >
                                NAP
                            </h1>
                            <h1
                                className="text-5xl md:text-6xl lg:text-8xl font-bold text-white font-serif pb-4"
                                style={{ backgroundColor: "rgba(255, 0, 0, 0.45)" }}
                            >
                                SPICES
                            </h1>
                        </div>
                        <h2
                            className="text-xl md:text-2xl lg:text-4xl font-mono text-white pt-2"
                            style={{ backgroundColor: "rgba(255, 0, 0, 0.45)" }}
                        >
                            Spicing Up Your Life
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
