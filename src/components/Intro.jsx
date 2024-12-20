import React from 'react'

const Intro = () => {
    return (
        <div id="intro" className="w-full max-w-5xl mx-auto px-4 py-10">
            <div className="md:w-full w-full md:pl-10">
                <h2 className="text-5xl font-bold mb-4 text-gray-800">Introduction</h2>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    In today’s digital age, where vast amounts of textual information are consumed daily, the
                    relationship between semantics and emotions has gained significance. Text serves not only as a tool
                    for communication but also as a medium that influences and evokes emotional experiences. This
                    interplay is critical in diverse fields, including human-computer interaction, mental health
                    monitoring, and content personalization.
                    <br/><br/>
                    Research has consistently shown a deep interconnection between emotions and textual semantics. For
                    example, a study on emotion correlation mining using deep learning models [1] analyzed web content
                    to identify patterns of emotional evolution, highlighting how textual semantics shape emotional
                    perception. Another study [2] demonstrated that the semantics of action verbs align with phonetic
                    indicators of intensity and emotion, revealing a nuanced link between language and emotional
                    arousal. This understanding has practical applications, such as enhancing dialogue systems with
                    empathetic responses by leveraging emotion-semantic correlations.
                    <br/><br/>
                    Building on these insights, our study seeks to explore how users emotionally respond to semantic
                    transitions as they navigate through a series of Wikipedia articles. By calculating semantic
                    distances between consecutive articles using text embeddings and a previously proposed distance
                    measure [3], we aim to quantify the magnitude of content shifts. Employing an attention orietned
                    emotion prediction model, we analyze emotional dimensions and investigate whether significant
                    semantic changes elicit specific emotional reactions. By uncovering patterns in the relationship
                    between semantic shifts and emotional responses, we aim to contribute to a broader understanding of
                    how humans emotionally engage with information in dynamic digital environments.


                </p>
            </div>
        </div>
    )
}
export default Intro
