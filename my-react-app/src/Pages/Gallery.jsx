import React from 'react'

export default function Gallery() {
    return (
        <>
            {/* <!-- Gallery Section --> */}
            <section className="py-10" id="gallery">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Gallery</h2>
                    <div class="h-screen w-full flex items-center justify-center overflow-hidden bg-purple-300">
                        <div class="relative lg:w-[290px] lg:h-[290px] md:w-[220px] md:h-[220px] sm:w-[180px] sm:h-[180px] w-[100px] h-[100px] [transform-style:preserve-3d] animate-[rotate_30s_linear_infinite]">
                            <span style={{ "--i": 1 }} class="span-style">
                                <img src="https://images.unsplash.com/photo-1546015720-b8b30df5aa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxiYWJ5fGVufDB8MHx8fDE3MTI5ODgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="img - 1" class="img-style" /></span>
                            <span style={{ "--i": 2 }} class="span-style"><img src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxiYWJ5fGVufDB8MHx8fDE3MTI5ODgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="img - 2" class="img-style" /></span>
                            <span style={{ "--i": 3 }} class="span-style"><img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8YmFieXxlbnwwfDB8fHwxNzEyOTg4MzE5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="img - 3" class="img-style" /></span>
                            <span style={{ "--i": 4 }} class="span-style"><img src="https://images.unsplash.com/photo-1588410670460-cdab54625253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxiYWJ5fGVufDB8MHx8fDE3MTI5ODgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="img - 4" class="img-style" /></span>
                            <span style={{ "--i": 5 }} class="span-style"><img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxiYWJ5fGVufDB8MHx8fDE3MTI5ODgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="img - 5" class="img-style" /></span>
                            <span style={{ "--i": 6 }} class="span-style"><img src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxiYWJ5fGVufDB8MHx8fDE3MTI5ODgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="img - 6" class="img-style" /></span>
                            <span style={{ "--i": 7 }} class="span-style"><img src="https://images.unsplash.com/photo-1505679208891-9ab12ee61dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8YmFieXxlbnwwfDB8fHwxNzEyOTg4MzE5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="img - 7" class="img-style" /></span>
                            <span style={{ "--i": 8 }} class="span-style"><img src="https://images.unsplash.com/photo-1583086762675-5a88bcc72548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxiYWJ5fGVufDB8MHx8fDE3MTI5ODgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="img - 8" class="img-style" /></span>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
