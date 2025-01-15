const Mission = () => {
    return (
        <section
            id="mission"
            className="py-12 px-6 md:px-12 lg:px-48 bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/bg3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Section */}
                <div className="text-center md:text-left">
                    <h2
                        className="text-2xl md:text-3xl lg:text-4xl underline font-bold font-serif text-white mb-6"
                        style={{ backgroundColor: "rgba(245, 0, 0, 0.75)" }}
                    >
                        Mission Statement of NAP Spices
                    </h2>
                    <p
                        className="text-base md:text-lg lg:text-xl text-white leading-relaxed"
                        style={{ backgroundColor: "rgba(255, 0, 0, 0.45)" }}
                    >
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                At NAP Spices, our mission is to cater to individuals who treasure both the
                                essence of taste and unwavering quality in every culinary endeavor. Whether
                                proficient or novice in the kitchen, we simplify the art of cooking by offering
                                processed spices that encapsulate all the essential ingredients required to elevate
                                every dish to greatness.
                            </li>
                            <li>
                                We achieve this by meticulously curating the finest quality spices available in the
                                market. From handpicking to thorough cleaning, precise grinding, intricate
                                processing, and custom mixing tailored to the composition of each spice formula,
                                we ensure an exceptional blend that embodies perfection.
                            </li>
                            <li>
                                Our commitment to excellence doesn't end there. We conduct rigorous testing at
                                every stage, ensuring that each blend surpasses not just the standard but also
                                exceeds expectations. Our goal is to evoke a sense of addiction to the unparalleled
                                taste, creating an experience that resonates with every palate.
                            </li>
                            <li>
                                Through our relentless dedication to quality and flavor, we aim to transform the
                                act of cooking into an effortless art, encouraging a passion for exceptional tastes
                                and culinary creativity. At NAP Spices, we don't just provide seasonings; we craft
                                a journey of taste that inspires and satisfies.
                            </li>
                        </ol>
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src="/images/NAP POSTER 2.png"
                        alt="Our Mission"
                        className="w-48 md:w-72 lg:w-96 rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Mission;
