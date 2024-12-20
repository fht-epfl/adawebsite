import React from 'react'

const ResearchQuestions = () => {
    return (
        <div id="research-questions" className="w-full max-w-5xl mx-auto px-4 py-10">
            <div className="md:w-full w-full md:pl-10">
                <h2 className="text-5xl font-bold mb-4 text-gray-800">Research Questions</h2>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    1. How do semantic and emotional transitions interact during navigation paths?
                    <br/>
                    2. what patterns emerge in the semantic-emotion mapping alignment or divergence across different
                    path lengths?
                </p>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    To investigate the semantic-emotion mapping, our study is structured into three key components:
                    <br/><br/>
                    1. <span className="font-bold">Quantifying Semantic Changes</span>: Developing a robust metric to effectively measure semantic
                    shifts across Wikipedia articles.
                    <br/>
                    2. <span className="font-bold">Capturing Emotional Fluctuations</span>: Identifying an appropriate measure that comprehensively
                    captures the dimensional space of normative emotional fluctuations observed during Wikipedia
                    browsing, such as in the context of the Wikispeedia game.
                    <br/>
                    3. <span className="font-bold">Correlation Analysis and Case Study</span>: explore the correlational relationships between semantic
                    changes and emotional responses within the context of webpage navigation.
                </p>
            </div>
        </div>
    )
}
export default ResearchQuestions
