const Plain = () => {
  const spices100g = [
      { name: 'Haldi', weight: '100g', image: '/images/pro15.jpg' },
      { name: 'Mirchi Powder', weight: '100g', image: '/images/pro21.jpg' },
      { name: 'Dhaniya', weight: '100g', image: '/images/pro11.jpg' },
      { name: 'Pure Garam Masala', weight: '100g', image: '/images/pro14.jpg' },
      { name: 'Jeera', weight: '100g', image: '/images/pro16.jpg' },
  ];

  const smallSpices = [
      { name: 'Kaali Mirch Powder', weight: '15g', image: '/images/pro18.jpg' },
      { name: 'Elaichi Powder', weight: '10g', image: '/images/pro13.jpg' },
  ];

  return (
      <section
          className="py-12"
          style={{
              backgroundImage: "url('/images/bg5.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
          }}
      >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="plain" className="text-3xl font-bold text-center text-white bg-red-500 py-2 rounded-md">
                  Plain Spices 100g
              </h2>

              {/* 100gms Packing Section */}
              <div className="mt-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                      {spices100g.map((spice, index) => (
                          <div
                              key={index}
                              className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                          >
                              <div
                                  className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-md border"
                                  style={{
                                      backgroundImage: "url('/images/background1.jpg')",
                                      backgroundSize: "cover",
                                      backgroundPosition: "center",
                                  }}
                              >
                                  <img
                                      src={spice.image}
                                      alt={spice.name}
                                      className="max-w-full max-h-full object-contain border-2 border-white"
                                  />
                              </div>
                              <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center">
                                  {spice.name}
                              </h3>
                              <p className="text-gray-500 text-center">{spice.weight}</p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Smaller Packing Section */}
              <div className="mt-10">
              <h2 id="smaller" className="text-3xl font-bold text-center text-white bg-red-500 py-2 rounded-md">
                  Plain Spices 10-15g
              </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                      {smallSpices.map((spice, index) => (
                          <div
                              key={index}
                              className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                          >
                              <div
                                  className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-md border"
                                  style={{
                                      backgroundImage: "url('/images/background1.jpg')",
                                      backgroundSize: "cover",
                                      backgroundPosition: "center",
                                  }}
                              >
                                  <img
                                      src={spice.image}
                                      alt={spice.name}
                                      className="max-w-full max-h-full object-contain border-2 border-white"
                                  />
                              </div>
                              <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center">
                                  {spice.name}
                              </h3>
                              <p className="text-gray-500 text-center">{spice.weight}</p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Footer Text */}
              <p className="mt-8 text-center text-black text-sm sm:text-base">
                  Available in 10-15g and 100g packs.
              </p>
          </div>
      </section>
  );
};

export default Plain;
