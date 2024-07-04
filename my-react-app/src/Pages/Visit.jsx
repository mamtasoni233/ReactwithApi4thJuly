import React from 'react'

export default function Visit() {
    return (
        <>
            {/* <!-- Visit Us Section --> */}
            <section className="bg-gray-100 py-10" id="contactUs">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Visit Us</h2>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 px-4 md:mb-0">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                                <p><strong>Address:</strong> Shop no 3, 1/1/109 1/1/110 1/1/111 1/1/112 Plot no 8, Risaldar Galli, Raviwar Peth, Belgaum, Karnataka 590001, India</p>
                                <p><strong>Phone:</strong> +1234567890</p>
                                <p><strong>Email:</strong> info@example.com</p>
                                <p><strong>Hours of Operation:</strong> Mon-Sat: 8am - 8pm</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Location</h3>
                                <iframe
                                    title='map'
                                    className="rounded-lg"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.17616598273467!2d74.50661394965108!3d15.85726302158667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf6583ab13d7ef%3A0x98c336f1e6ff4169!2sRisaldar%20Galli%2C%20Raviwar%20Peth%2C%20Belgaum%2C%20Karnataka%20590001!5e0!3m2!1sen!2sin!4v1689429498825!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
