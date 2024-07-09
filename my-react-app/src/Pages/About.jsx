import React from 'react'

export default function About() {
    return (
        <>
            {/* <!-- About Us Section --> */}
            <section className="bg-gray-100" id="aboutus">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
                            <p className="mt-4 text-gray-600 text-lg">
                                Bappa Flour Mill provides our customers with the highest quality products and services. We offer a wide variety of flours and spices to choose from, and we are always happy to help our customers find the perfect products for their needs. We are committed to providing our customers with the best possible experience. We offer competitive prices, fast shipping, and excellent customer service. We are also happy to answer any questions that our customers may have about our products or services. If you are looking for a flour and spices service business that can provide you with the highest quality products and services, then we are the company for you. We look forward to serving you!
                            </p>
                        </div>
                        <div className="w-full  mx-auto">
                            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us" className="rounded-lg shadow-lg fade-in" />
                        </div>
                    </div>
                </div>
            </section>
            {/*  why us  */}
            <section className="text-gray-700 body-font mt-10">
                <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
                    Why Us?
                </div>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap text-center justify-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" className="w-32 mb-3" alt='' />
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" className="w-32 mb-3" alt='' />
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" className="w-32 mb-3" alt='' />
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" className="w-32 mb-3" alt='' />
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
