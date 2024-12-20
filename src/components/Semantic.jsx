import React from 'react'

const Semantic = () => {
    return (
        <div id="semantic" className="w-full max-w-5xl mx-auto px-4 py-10">
            <div className="md:w-full w-full md:pl-10">
                <h2 className="text-5xl font-bold mb-4 text-gray-800">Quantifying Semantic Changes</h2>
                <h3 className="text-4xl font-bold mb-4 text-gray-700">Asymmetric measure inferring semantic distances
                    between concepts
                </h3>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    The semantic distance proposed in [3] leverages an information-theoretic approach to quantify the
                    relationship between concepts on Wikipedia, drawing on human gameplay data. At its core, this
                    measure utilizes click probabilities—calculated from the frequency of human choices during
                    navigation—to determine the likelihood of transitioning from one article to another, given a
                    specific goal. This reflects how humans intuitively associate concepts, embedding common sense into
                    the distance metric.
                    <br/><br/>
                    Its human-centric design ensures that the measure aligns with the goal of understanding emotional
                    responses, which are inherently subjective and tied to human perception. The method’s sensitivity to
                    context, achieved through gameplay data, makes it ideal for analyzing transitions between articles
                    where the context and direction of the shift significantly influence user experience.
                    <br/><br/>
                    <img
                        src="img/image.png"
                        alt="image 0"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    Imagine a map centered around the article “Radio,” where neighboring articles are arranged based on
                    their semantic closeness. Each article’s distance from “Radio” is visually represented, with
                    numerical values displayed in front of them. Some articles, outlined in red, reveal the dynamic
                    nature of the map—their distances change after we remove the influence of the *get away to hub*
                    phase. Green markers highlight these articles’ shifted positions, now labeled with “_CUT” to
                    distinguish their updated states. Notice how this adjustment brings <span
                    className="font-bold">Telephone</span>, a concept closely
                    tied to “Radio,” even closer on the map, reinforcing their semantic connection. Meanwhile, unrelated
                    topics like <span className="font-bold">Volleyball</span> remain unmoved, their semantic irrelevance
                    unaffected by the
                    recalibration. This transformation showcases the refined accuracy of the relationships when
                    unnecessary semantic noise is filtered out.
                    <br/><br/>
                    <img
                        src="img/image 1.png"
                        alt="image 1"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    To ensure our semantic distance implementation is accurate, we took a hands-on approach, acting as
                    human annotators and using visualizations to guide our judgment. Imagine a map with the article
                    “Italy” at its center, surrounded by a scattering of random articles. Each article’s name is paired
                    with its calculated distance from “Italy,” and the edges connecting them vary in length to reflect
                    this distance.
                    <br/><br/>
                    This visualization serves as a sanity check, allowing us to intuitively assess whether the distances
                    align with our expectations. For example, it’s immediately clear that closely related topics, like
                    Italian cities, cluster near “Italy,” while unrelated topics, such as “Bean,” sit much farther away.
                    This simple yet effective visual cue validates the reliability of our distance calculations.


                </p>
                <h3 className="text-4xl font-bold mb-4 text-gray-700">Custom-designed symmetric semantic distances</h3>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    To emphasize mutual relatedness without prioritizing one direction over another, we customized a
                    symmetric semantic measure that offers a balanced and bidirectional approach to assessing the
                    similarity between concepts. Unlike asymmetric measures that focus on directionality and
                    correspondence with emotional asymmetries, symmetric distances are ideal for tasks requiring a
                    neutral perspective, such as evaluating the coherence of conceptual groupings. By capturing a
                    holistic view of semantic proximity, this measure ensures equal weighting of indirect associations
                    and shared contextual features, providing a consistent and fair framework for analysis.
                    <br/><br/>
                    To implement this measure, we leveraged embeddings from two sentence-transformer models,
                    All-MiniLM-L6-v2 and All-MPNET-Base-v2, which were refined using PCA to reduce dimensionality while
                    preserving at least 70% of the cumulative explained variance. We then use traditional distance
                    measure, including Manhattan distance and Cosine similarity, to measure the distance between the
                    embeddings of the articles.
                    <br/><br/>
                    <img
                        src="img/image 2.png"
                        alt="image 2"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    The 2D projection offers an insightful glimpse into the clustering results, revealing a degree of
                    overlap and shared boundaries between clusters. While these boundaries might seem less distinct at
                    first glance, this is a natural consequence of dimensionality reduction. Mapping high-dimensional
                    data onto a 2D space inherently involves compressing complex relationships, which can lead to some
                    apparent overlap. Importantly, the clustering result demonstrates that semantically related concepts
                    are grouped closely, reflecting the robustness of the method in capturing semantic relationships.
                    Overlaps in the 2D space may also suggest nuanced interconnections between clusters, which can be
                    valuable for understanding the broader context of semantic relationships. Furthermore, the quality
                    of clustering in higher dimensions is likely preserved, as the reduction process retains the most
                    critical features, ensuring that the grouping remains meaningful despite the constraints of the
                    visualization.
                    <br/><br/>
                    <img
                        src="img/output_(4).png"
                        alt="output_(4).png"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    This shows a central tendency with variability that supports the clustering argument. The evident
                    spread of the distribution indicates diversity in semantic relationships while maintaining a central
                    structure. This aligns with the idea that semantically related concepts are grouped closely in
                    high-dimensional space, and the 2D projection retains meaningful clustering patterns. Overlaps in
                    the distribution can be interpreted as nuanced interconnections between clusters, emphasizing the
                    robustness of the method in capturing the complexity of semantic relationships.
                    <br/><br/>
                    <img
                        src="img/image 3.png"
                        alt="image 3"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    For our analysis, we selected the semantic distance metric that demonstrated the best clustering
                    performance: <span className="font-bold">mpnet embeddings combined with cosine similarity</span>. This choice was based on its
                    ability to effectively capture nuanced semantic relationships between articles, ensuring
                    high-quality grouping of conceptually related navigation paths. By utilizing this robust metric, we
                    aim to achieve greater precision in measuring semantic transitions and their relationship with
                    emotional responses. The resulting distribution of mean semantic distances across navigation paths
                    reflects this approach, providing a foundation for understanding the variability and patterns in
                    user navigation behaviors.
                    <br/><br/>
                    <img
                        src="img/output_(8).png"
                        alt="output_(8).png"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    The visualisation of the semantic changes across the sampled paths reveals intriguing patterns:
                    shorter paths (length 5 and 7) exhibit relatively smoother transitions in semantic distances, while
                    longer paths (length 10 and 15) show more pronounced variability. **This suggests that as navigation
                    paths grow in length, users may encounter more diverse and complex semantic shifts.** These findings
                    point to the possibility that longer paths are more exploratory in nature, navigating through
                    broader or less cohesive semantic spaces, while shorter paths are more focused and consistent in
                    their semantic transitions.
                    <br/><br/>
                    The presence of high-variance paths also suggests potential "pivot points" in the navigation
                    process, where significant conceptual jumps occur, reflecting a shift in user behavior or intent.
                    These insights could inform the design of navigation systems by emphasizing coherence for shorter
                    paths while accommodating exploration for longer ones.

                </p>

                <h3 className="text-4xl font-bold mb-4 text-gray-700">Semantic Jump
                </h3>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    A <span className="font-bold">semantic jump</span> is defined as the absolute difference between the
                    semantic distances of two consecutive steps in a navigation path. Large jumps indicate significant
                    shifts in semantic relationships, while small jumps suggest smooth and consistent transitions. A
                    threshold (e.g., 90th percentile) is used to classify particularly large jumps.
                    <br/><br/>
                    <div className="w-full flex justify-center gap-4">
                        <img
                            src="img/output_(10).png"
                            alt="output_(10).png"
                            className="w-1/3 h-auto rounded-lg shadow-lg mx-auto"
                        />
                        <img
                            src="img/output_(11).png"
                            alt="output_(11).png"
                            className="w-2/3 h-auto rounded-lg shadow-lg mx-auto"
                        />
                    </div>
                    <br/><br/>
                    Interestingly, as the path length increases, the threshold for significant jumps also slightly
                    rises, reflecting greater variability in longer paths. This suggests that longer paths allow for
                    more exploration and diversity in semantic transitions, likely due to the cumulative effect of
                    traversing through a broader conceptual space. The small proportion of jumps exceeding the
                    threshold
                    highlights moments of substantial conceptual shifts, which may represent critical decision
                    points or
                    changes in user intent during navigation.
                </p>
            </div>
        </div>
)
}
export default Semantic
