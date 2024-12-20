import React from 'react'

const Emotion = () => {
    return (
        <div id="emotion" className="w-full max-w-7xl mx-auto px-4 py-10">
            <div className="md:w-full w-full md:pl-10">
                <h2 className="text-5xl font-bold mb-4 text-gray-800">Emotion</h2>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu mauris leo. Morbi vel risus at odio
                </p>

                <a
                    href="https://google.com"
                    className="text-2xl text-[#5D9CEC] hover:underline font-medium"
                    target="_blank"
                >
                    Link
                </a>

                <img
                    src="/img/ada.svg"
                    alt="placeholder"
                    className="w-1/3 h-auto rounded-lg shadow-lg mx-auto"
                />
            </div>
        </div>
    )
}
export default Emotion
