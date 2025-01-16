const Processed = () => {
  const spices = [
    { name: 'Shahi Paneer Masala', weight: '10g', image: '/images/pro2.jpg' },
    { name: 'Matar Paneer Masala', weight: '10g', image: '/images/pro19.jpg' },
    { name: 'Soya Chaap Masala', weight: '10g', image: '/images/pro3.jpg' },
    { name: 'Chai Masala', weight: '10g', image: '/images/pro5.jpg' },
    { name: 'Kadhi Masala', weight: '10g', image: '/images/pro17.jpg' },
    { name: 'Garam Masala', weight: '10g', image: '/images/pro14.jpg' },
    { name: 'Chana Masala', weight: '10g', image: '/images/pro6.jpg' },
    { name: 'Pav Bhaji Masala', weight: '10g', image: '/images/pro25.jpg' },
    { name: 'Daal Makhni/Rajma Masala', weight: '10g', image: '/images/pro24.jpg' },
    { name: 'Chaat Masala', weight: '10g', image: '/images/pro4.jpg' },
    { name: 'Sambhar Masala', weight: '15g', image: '/images/pro1.jpg' },
    { name: 'Chicken Masala', weight: '10g', image: '/images/pro7.jpg' },
    { name: 'Meat Masala', weight: '15g', image: '/images/pro20.jpg' },
    { name: 'Kaccha Paneer Masala', weight: '15g', image: '/images/pro2.jpg' },
    { name: 'Dam Aaloo Masala', weight: '10g', image: '/images/pro10.jpg' },
  ];

  return (
    <section
      id="processed"
      className="py-12"
      style={{
        backgroundImage: "url('/images/bg5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center bg-red-500 py-2 rounded-md">
          Processed Spices
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {spices.map((spice, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div
                className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-md"
                style={{
                  backgroundImage: "url('/images/background1.jpg')",
                  backgroundSize: "cover",
                }}
              >
                <img
                  src={spice.image}
                  alt={spice.name}
                  className="max-w-full max-h-full object-contain border-2 border-white rounded-md"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center">{spice.name}</h3>
              <p className="text-gray-500 text-center">{spice.weight}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-black text-sm sm:text-base">
          Available in 10-15g packs.
        </p>
      </div>
    </section>
  );
};

export default Processed;
