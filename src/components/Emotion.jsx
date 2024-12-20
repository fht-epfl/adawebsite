import React from 'react'

const Emotion = () => {
    return (
        <div id="emotion" className="w-full max-w-5xl mx-auto px-4 py-10">
            <div className="md:w-full w-full md:pl-10">
                <h2 className="text-5xl font-bold mb-4 text-gray-800">Capturing Emotional Fluctuations</h2>
                <h3 className="text-4xl font-bold mb-4 text-gray-700">Attention Oriented Emotion Labeling
                </h3>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    Understanding how human emotion navigates semantic networks requires modeling how attention is
                    distributed during navigation. We hypothesize that users naturally focus on links or titles that are
                    most relevant to their target article. By analyzing real user behavior, we can create a dictionary
                    that tracks how often specific articles appear in paths leading to particular target articles. This
                    dictionary acts as a map of user preferences, showing which intermediate links are more likely to
                    guide users toward their goals. Articles that appear frequently in these paths are assumed to hold
                    higher relevance, while unclicked links are treated with a baseline level of presumed importance.
                    <br/><br/>
                    <img
                        src="img/image 4.png"
                        alt="image 4"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    Our analysis reveals an intuitive pattern: a small number of links are used frequently to navigate
                    to a target article, while most links are rarely used. This reflects a natural tendency for users to
                    rely on a few well-defined paths that feel most relevant to their goal. Such behavior suggests that
                    human attention is not spread evenly but instead gravitates toward links perceived as the most
                    useful or intuitive.
                    <br/><br/>
                    <span className="font-bold">Assigning Sentence Weights to Model Attention</span>
                    <br/><br/>
                    To better capture how users allocate attention, we assign a weight to each sentence based on its
                    content. Sentences that contain links are treated as more important since links represent potential
                    pathways to reach the target article. The more frequently a link is clicked, the higher the weight
                    assigned to the sentence it appears in, reflecting the idea that users pay more attention to
                    information they find relevant or engaging.
                    <br/><br/>
                    <span className="font-bold">Intuitive Explanation of the Weighting System</span>
                    <br/><br/>
                    1. <span className="font-bold">Baseline Weight for All Sentences</span>: Every sentence is given a
                    basic level of importance, even
                    if it doesn’t contain any links. This ensures that even general content contributes to the overall
                    navigation experience. The base weight is from a pretrained model: <a
                    href="https://huggingface.co/SamLowe/roberta-base-go_emotions"
                    className="text-2xl text-[#5D9CEC] hover:underline font-medium"
                    target="_blank"
                >
                    roberta base-go_emotions
                </a>.
                    <br/>
                    2. <span className="font-bold">Higher Weights for Sentences with Links</span>: Sentences with links
                    are given more weight because
                    links act as signposts guiding users toward their target. Links that are clicked more
                    often—indicating they are more relevant—further increase the weight of the sentence they are in.
                    <br/>
                    3. <span className="font-bold">Balancing Across All Links</span>: To ensure fairness, the importance
                    of a link is compared to the
                    overall navigation activity for its target article. This avoids overemphasizing popular links while
                    still recognizing their role in guiding user attention.
                    <br/><br/>
                    This approach provides a way to model how users naturally distribute their attention when navigating
                    complex networks. By emphasizing sentences with relevant links, the system mirrors the human
                    tendency to focus on elements that are perceived as most helpful or interesting.
                    <br/><br/>
                    <div className="w-full flex justify-center gap-4">
                        <img
                            src="img/output.png"
                            alt="output.png"
                            className="w-1/2 h-auto rounded-lg shadow-lg mx-auto"
                        />
                        <img
                            src="img/output_(1).png"
                            alt="output_(1).png"
                            className="w-1/2 h-auto rounded-lg shadow-lg mx-auto"
                        />
                    </div>
                    <br/><br/>
                    The striking pattern shown in the graph highlights the polarization in how surprise and curiosity
                    relate to the underlying semantic structure. For instance, strong positive correlations indicate
                    that some paths align well with the semantic model's predictions of surprise or curiosity, while
                    strong negative correlations suggest paths that behave oppositely. The consistency of this bimodal
                    trend across both models (`mpnet` and `paper`) and both metrics (surprise and curiosity) emphasizes
                    the robustness of this phenomenon.
                    <br/><br/>
                    Furthermore, the distributions show slightly denser regions near -0.25 and 0.75, which may reflect
                    nuanced relationships where semantic and emotional metrics partially align or diverge. This
                    bimodality and secondary clustering could suggest the existence of distinct behavioral patterns or
                    navigation strategies that users employ when engaging with semantic information. Apart from that,
                    the high variability and stronger correlations observed in shorter paths (0–5) suggest that these
                    are more predictable and better captured by the models. Conversely, the diminishing correlations and
                    increased presence of outliers in longer paths indicate that user behavior becomes more exploratory
                    and less aligned with semantic predictions as paths grow in length. This underscores the challenge
                    of modeling extended navigation paths and highlights the potential need for adaptive models that
                    better accommodate complex and nuanced user intent in longer journeys.

                </p>
                <h3 className="text-4xl font-bold mb-4 text-gray-700">Emotion Jumps
                </h3>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    This part we are trying to analyze big emotional fluctuations across steps in a dataset by
                    calculating the relative numerical changes between consecutive values, defined as the relative score
                    (the absolute difference divided by the previous value). These changes are categorized into three
                    types based on thresholds (we manually selected): small jumps (relative change &lt; 0.1 by default),
                    medium jumps (0.1 ≤ change &lt; 0.5), and large jumps (change ≥ 0.5).
                    <br/><br/>
                    <img
                        src="img/output_(12).png"
                        alt="output_(12).png"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    The figure showcases the distributions of jump rates for small, medium, and large jumps across two
                    emotional dimensions: <span className="font-bold">surprise</span> and <span className="font-bold">curiosity</span>. The distributions for small jumps (top left)
                    are highly skewed towards lower jump rates, indicating that the majority of navigation paths exhibit
                    limited small semantic shifts. Medium jumps (top right) demonstrate a more spread-out distribution,
                    with notable peaks around intermediate jump rates, suggesting that medium semantic shifts occur more
                    frequently and consistently. For large jumps (bottom row), the distributions again show a skew
                    towards lower rates but retain occasional higher jump rates, reflecting rare but impactful large
                    transitions.
                    <br/><br/>
                    An interesting pattern emerges when comparing surprise and curiosity. Both exhibit similar trends
                    for large jumps, but the surprise medium jumps (top right) display a slightly broader range,
                    indicating that surprise dynamics may involve a wider variety of transitions compared to curiosity.
                    This could imply that semantic relationships tied to surprise are more flexible and nuanced, while
                    those related to curiosity are relatively focused.
                    <br/><br/>
                    These distributions tell a story about user navigation behavior: small jumps dominate routine
                    exploration, while medium and large jumps introduce moments of novelty and significant semantic or
                    emotional shifts. Understanding these dynamics could help refine predictive models and design
                    interfaces that better respond to varying user engagement levels.
                    <br/><br/>
                    <img
                        src="img/output_(2).png"
                        alt="output_(2).png"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    <img
                        src="img/output_(3).png"
                        alt="output_(3).png"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    The heatmap reveals negative correlations among the different jump types within surprise and
                    curiosity metrics. For example, medium and large surprise jumps exhibit a strong negative
                    correlation (-0.69), indicating that paths dominated by medium jumps are less likely to involve
                    large jumps. A similar pattern is observed within curiosity jump types, particularly between medium
                    and large jumps (-0.70). This suggests a trade-off in navigation styles, where users tend to
                    prioritize either medium or large semantic-emotional transitions, but rarely both within the same
                    path. These negative correlations highlight distinct behavioral patterns in how users engage with
                    information during navigation.
                    <br/><br/>
                    Interestingly, the correlations between surprise and curiosity jump rates are generally weak or
                    neutral, as shown by the low values in the heatmap (e.g., 0.15 for surprise small jumps vs.
                    curiosity small jumps). This suggests that surprise and curiosity capture different aspects of
                    navigation behavior, with each metric providing unique insights into user intent and interaction
                    dynamics.
                    <br/><br/>
                    When considered alongside the boxplots, these findings offer a richer narrative. Shorter paths (0–5)
                    are characterized by high variability and a dominance of small jumps, reflecting exploratory
                    behavior. The strong negative correlations in the heatmap suggest that these short paths alternate
                    between frequent small jumps and occasional larger transitions, rather than incorporating both
                    equally. On the other hand, longer paths (21+) show steadier distributions in the boxplots,
                    indicating more balanced and predictable navigation patterns. The weaker correlations between jump
                    types in longer paths suggest that users engage in a more distributed and consistent exploration of
                    semantic-emotional relationships as their navigation length increases.
                    <br/><br/>
                    Together, we reveal a dual dynamic in user behavior: shorter paths emphasize variability and focused
                    exploration, while longer paths reflect steadier, more systematic navigation. The interplay between
                    surprise and curiosity metrics highlights the complexity of user intent, shaped by the length and
                    context of the navigation journey.
                </p>

            </div>
        </div>
)
}
export default Emotion
