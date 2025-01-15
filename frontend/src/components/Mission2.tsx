const Mission2 = () => {
    return (
        <section
            id="mission"
            className="py-12 px-6 md:px-12 lg:px-48 bg-cover bg-center"
        >
            <div className="relative container mx-auto p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg">
                <div
                    className="absolute inset-0 -z-10 border-8 rounded-lg"
                    style={{
                        borderImageSource: "url('/images/borderstripe.jpg')",
                        borderImageSlice: 20,
                        borderImageRepeat: "repeat",
                        margin: "-1rem",
                    }}
                ></div>

                {/* Mission Content */}
                <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-none tracking-tight text-gray-900">
                    Mission Statement of NAP Spices
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-500 leading-relaxed">
                    At NAP Spices, our mission is to cater to individuals who treasure both the
                    essence of taste and unwavering quality in every culinary endeavor. Whether
                    proficient or novice in the kitchen, we simplify the art of cooking by offering
                    processed spices that encapsulate all the essential ingredients required to elevate
                    every dish to greatness.

                    We achieve this by meticulously curating the finest quality spices available in the
                    market. From handpicking to thorough cleaning, precise grinding, intricate
                    processing, and custom mixing tailored to the composition of each spice formula,
                    we ensure an exceptional blend that embodies perfection.

                    Our commitment to excellence doesn't end there. We conduct rigorous testing at
                    every stage, ensuring that each blend surpasses not just the standard but also
                    exceeds expectations. Our goal is to evoke a sense of addiction to the unparalleled
                    taste, creating an experience that resonates with every palate.

                    Through our relentless dedication to quality and flavor, we aim to transform the
                    act of cooking into an effortless art, encouraging a passion for exceptional tastes
                    and culinary creativity. At NAP Spices, we don't just provide seasonings; we craft
                    a journey of taste that inspires and satisfies.
                </p>
            </div>
        </section>
    );
};

export default Mission2;
