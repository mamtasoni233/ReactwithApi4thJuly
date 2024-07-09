import React from 'react';
import { services } from '../Data/services';

export default function Service() {
    let ALLservices = services.map((service, index) => {
        return (
            <div
                className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
                {/* <div className="text-center text-white font-medium">Special product</div> */}
                <img src={service.image} alt="Coffee"
                    className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-700 text-base">
                        {service.description}
                        {service.readMoreDesc.length > 0 ? <details>
                            <summary>Read More</summary>
                            <p>Our jowar flour is also
                                a good source of protein and fiber, making it a healthy choice for your family.</p>
                        </details> : ''}
                    </p>
                </div>
            </div>
        );
    });
    return (
        <>
            {/* <!-- our services section --> */}
            <section className="py-10" id="services">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ALLservices}
                    </div>
                </div>
            </section>
        </>
    )
}
