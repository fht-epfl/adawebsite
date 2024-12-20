import React from 'react'

const Correlation = () => {
    return (
        <div id="correlation" className="w-full max-w-5xl mx-auto px-4 py-10">
            <div className="md:w-full w-full md:pl-10">
                <h2 className="text-5xl font-bold mb-4 text-gray-800">Correlation Analysis and Case Study</h2>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    We analyze the relationship between semantics and emotions through the lens of <span
                    className="font-bold">emotional jumps</span>
                    and <span className="font-bold">semantic jumps</span>, providing a structured framework to
                    understand how changes in content
                    correspond to shifts in emotional engagement. Focusing on emotional jumps—measured as significant
                    changes in emotional dimensions such as curiosity and surprise—we capture moments where user
                    engagement or cognitive attention is heightened. Similarly, semantic jumps, defined by abrupt
                    changes in conceptual proximity or topic continuity, help us identify pivotal points in content
                    navigation. By mapping these two types of transitions, we explore whether sharp semantic changes are
                    consistently associated with emotional spikes, revealing patterns that reflect the depth of user
                    interaction with content.
                    <br/><br/>
                    <img
                        src="img/output_(15).png"
                        alt="output_(15).png"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    <img
                        src="img/output_(14).png"
                        alt="output_(14).png"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    The figures reveal how semantic and emotional jump rates evolve with path length (1–15). In the
                    first figure, semantic jump rates drop sharply from path length 1 to 2, stabilizing thereafter. This
                    suggests that early navigation steps involve significant semantic shifts, likely reflecting an
                    initial reorientation phase, followed by steadier transitions as paths grow longer. The second
                    figure shows that small surprise and curiosity jumps dominate across all path lengths but decline
                    slightly in longer paths, indicating fewer minor shifts during extended navigation. In contrast,
                    medium jumps decrease gradually, while large jumps increase slightly, reflecting moments of
                    significant reorientation in longer paths.
                    <br/><br/>
                    Together, these patterns highlight a transition from initial exploration to steadier navigation as
                    path length increases, with emotional variability complementing semantic consistency. These insights
                    offer valuable guidance for designing systems that adapt to user behavior across varying navigation
                    stages.
                    <br/><br/>
                    <img
                        src="img/image 5.png"
                        alt="image 5"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    The table highlights correlations between semantic jump rates and emotional jump rates, offering
                    insights into how navigation behavior and emotional dynamics interact. By examining the Pearson,
                    Spearman, and mutual information scores, clear patterns emerge.
                    <br/><br/>
                    Small emotional jumps for both surprise and curiosity show moderate positive correlations with
                    semantic jump rates (e.g., <span className="font-bold">surprise_small_jumps_rate</span>, Pearson:
                    0.522;
                    <span className="font-bold">curiosity_small_jumps_rate</span>, Pearson: 0.574). This suggests that
                    steady and incremental semantic
                    transitions align with small emotional adjustments, reflecting consistent and exploratory navigation
                    patterns where users refine or build understanding step by step.
                    <br/><br/>
                    In contrast, medium and large emotional jumps are negatively correlated with semantic jump rates,
                    particularly medium surprise jumps (e.g., <span
                    className="font-bold">surprise_medium_jumps_rate</span>, Pearson: -0.572; Spearman:
                    -0.632). This indicates that paths with frequent medium or large emotional transitions tend to
                    involve fewer semantic shifts. Such moments likely reflect pivotal points in navigation where users
                    shift focus or engage deeply with specific content.
                    <br/><br/>
                    Curiosity-driven jumps exhibit slightly stronger positive correlations for small jumps and weaker
                    negative correlations for medium and large jumps compared to surprise. This suggests that curiosity
                    fosters continuous exploration and alignment with semantic transitions, while surprise captures more
                    disruptive, attention-grabbing shifts. Mutual information scores (~0.6–0.8) further underscore the
                    dependency between semantic and emotional dynamics, highlighting the interplay of small jumps as
                    moments of shared continuity and medium/large jumps as instances of divergence.
                    <br/><br/>
                    Overall, these patterns reveal how users balance steady exploration with moments of significant
                    emotional or conceptual shifts, transitioning between incremental progress and deeper engagement.
                    <br/><br/>
                    <img
                        src="img/output_(16).png"
                        alt="output_(16).png"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    The joint distributions of semantic jump rates and emotional jump rates (small, medium, and large)
                    for both surprise and curiosity using density plots. The clusters in each plot highlight the most
                    common combinations of semantic and emotional transitions. For small jumps, there is a strong
                    overlap between semantic and emotional rates, as seen in the concentrated density areas, suggesting
                    a close alignment between steady semantic transitions and minor emotional shifts.
                    <br/><br/>
                    For medium and large jumps, the distributions shift, with emotional jump rates exhibiting more
                    spread and weaker overlap with semantic rates. This indicates that medium and large emotional
                    transitions occur more independently of semantic shifts, reflecting moments of heightened emotional
                    engagement or focus, even when semantic transitions remain steady. The subtle differences between
                    surprise and curiosity highlight the unique role each plays: curiosity aligns more with gradual
                    semantic exploration, while surprise introduces more pronounced deviations, capturing shifts in
                    attention or novelty. These patterns reveal how user navigation dynamically balances semantic
                    stability with emotional variability.
                    <br/><br/>
                    <img
                        src="img/output_(17).png"
                        alt="output_(17).png"
                        className="w-full h-auto rounded-lg shadow-lg mx-auto"
                    />
                    <br/><br/>
                    The cross-correlation between semantic and emotional jump rates across various lag values, capturing
                    how semantic and emotional dynamics influence each other over time. Positive lags indicate that
                    emotional jumps follow semantic shifts, while negative lags suggest the reverse. The curves reveal
                    clear peaks around positive lags, particularly for medium and large jumps, indicating that emotional
                    transitions often lag behind semantic shifts. This suggests that significant semantic changes prompt
                    emotional responses, reflecting moments of discovery or engagement. Conversely, smaller peaks at
                    negative lags imply that emotional states occasionally drive subsequent semantic transitions,
                    hinting at emotionally guided navigation. The interplay between semantic and emotional lags
                    underscores a dynamic feedback loop, where exploration and engagement continuously influence one
                    another.
                </p>
                <h3 className="text-4xl font-bold mb-4 text-gray-700">Case Study
                </h3>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    <br/><br/>

                    <div className="w-full grid grid-cols-2 gap-4">
                        <img
                            src="img/image 6.png"
                            alt="image 6"
                            className="w-full h-auto rounded-lg shadow-lg mx-auto"
                        />
                        <img
                            src="img/image 7.png"
                            alt="image 7"
                            className="w-full h-auto rounded-lg shadow-lg mx-auto"
                        />
                        <img
                            src="img/image 8.png"
                            alt="image 8"
                            className="w-full h-auto rounded-lg shadow-lg mx-auto"
                        />
                        <img
                            src="img/image 9.png"
                            alt="image 9"
                            className="w-full h-auto rounded-lg shadow-lg mx-auto"
                        />
                    </div>
                    <br/><br/>
                    The figure illustrates the scaled scores for four case study paths navigating from "Bird" to
                    "Hitler," comparing emotional metrics (curiosity and surprise) with semantic metrics (mpnet and
                    paper) across four steps. Each subplot corresponds to a specific metric, highlighting how scores
                    evolve along the path for different rows. Emotional metrics display a diverse range of dynamics,
                    with curiosity peaking at intermediate steps (e.g., Row 2212 at Step 3) and surprise showing sharp
                    contrasts, such as dramatic drops or recoveries (e.g., Row 2173). Semantic metrics exhibit steadier
                    declines, reflecting a consistent progression toward the target concept.
                    <br/><br/>
                    This case study reveals distinct behaviors in semantic and emotional dimensions. Semantic scores
                    indicate a systematic narrowing of conceptual distance, while emotional scores highlight moments of
                    heightened engagement or attention shifts, particularly when unexpected or controversial topics
                    arise. For example, paths with curiosity or surprise spikes likely correspond to transitions through
                    conceptually or emotionally provocative intermediate nodes. By combining these metrics, we
                    understand better how users experience navigation both rationally (semantic proximity) and
                    emotionally (curiosity or surprise), underscoring the importance of integrating multiple dimensions
                    to capture the full complexity of user journeys.
                    <br/><br/>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <img
                            src="img/image 10.png"
                            alt="image 10"
                            className="w-full h-auto rounded-lg shadow-lg mx-auto"
                        />
                        <img
                            src="img/image 11.png"
                            alt="image 11"
                            className="w-full h-auto rounded-lg shadow-lg mx-auto"
                        />
                        <img
                            src="img/image 12.png"
                            alt="image 12"
                            className="w-full h-auto rounded-lg shadow-lg mx-auto"
                        />
                        <img
                            src="img/image 13.png"
                            alt="image 13"
                            className="w-full h-auto rounded-lg shadow-lg mx-auto"
                        />
                    </div>
                    <br/><br/>
                    Here are four specific navigation paths ("Bird to Hitler") by comparing scaled scores for emotion
                    metrics (curiosity and surprise) and semantic metrics (mpnet and paper) across four steps. Each
                    subplot corresponds to a single path, allowing us to observe how the semantic and emotional dynamics
                    evolve.
                    <br/><br/>
                    Across all paths, semantic metrics (mpnet and paper) generally follow a consistent declining trend,
                    reflecting a systematic narrowing of semantic distances as users progress toward the target concept.
                    In contrast, emotional metrics (curiosity and surprise) show greater variability, with spikes and
                    troughs highlighting moments of heightened user engagement or shifts in emotional intensity. For
                    example, in Row 2212, curiosity peaks sharply at Step 3 before dropping to zero at the final step,
                    suggesting a critical juncture where the user transitions to a conceptually engaging node.
                    <br/><br/>
                    Interestingly, the contrast between emotional and semantic metrics suggests distinct roles in
                    navigation. While semantic scores steadily guide the user toward the target, emotional scores
                    capture key moments of cognitive engagement or unexpected transitions. These fluctuations,
                    particularly in surprise, may indicate nodes that disrupt expectations or introduce novel elements.
                    By analyzing these patterns, this case study reveals how emotional and semantic dimensions interplay
                    to shape user experiences, offering valuable insights into the drivers of engagement and attention
                    during navigation.
                </p>
                <h2 className="text-5xl font-bold mb-4 text-gray-800">Conclusion</h2>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    In this study, we explored the intricate relationship between semantic and emotional transitions
                    during navigation paths, particularly through the lens of jump rates, correlations, and case
                    studies. By analyzing semantic and emotional jumps (curiosity and surprise) in various contexts and
                    path lengths, several key insights emerged.
                    <br/><br/>
                    Firstly, we observed that <span className="font-bold">semantic jumps tend to stabilize over longer navigation paths</span>, while
                    emotional jumps, particularly small ones, remain prevalent across all lengths. However, medium and
                    large emotional jumps revealed a nuanced dynamic: they became more prominent during pivotal
                    navigation moments, reflecting shifts in attention or engagement. These findings highlight a balance
                    between steady semantic progression and variable emotional engagement, shaped by navigation
                    complexity and user intent.
                    <br/><br/>
                    Secondly, the correlation analyses between semantic and emotional jump rates showed clear patterns.
                    Small jumps in both dimensions are positively correlated, emphasizing alignment during steady
                    exploration. Conversely, medium and large emotional jumps exhibited negative correlations with
                    semantic jumps, suggesting that significant emotional transitions often occur in contexts of
                    semantic stability, likely representing deeper focus or unexpected conceptual shifts. These findings
                    reinforce the interplay between conceptual coherence and emotional arousal during navigation.
                    <br/><br/>
                    The case studies provided a practical view of these dynamics, revealing how emotional spikes often
                    correspond to moments of semantic shifts or continuity, depending on the context. Semantic metrics
                    displayed consistent trends, guiding users toward their target, while emotional metrics captured
                    variability, signaling moments of heightened engagement or novelty.
                    <br/><br/>
                    Overall, these insights contribute to a deeper understanding of user behavior in dynamic information
                    environments. By linking semantic and emotional transitions, this work underscores the importance of
                    integrating both dimensions to capture the full spectrum of user interaction. Such findings have
                    practical implications for designing adaptive systems, personalized content delivery, and improving
                    user engagement strategies in applications like education, content recommendation, and
                    human-computer interaction.
                </p>
                <h2 className="text-5xl font-bold mb-4 text-gray-800">Reference</h2>
                <p className="text-2xl text-gray-600 leading-relaxed mb-4">
                    [1] Wang, X., Kou, L., Sugumaran, V., Luo, X., & Zhang, H. (2020). Emotion correlation mining
                    through deep learning models on natural language text. <i>IEEE transactions on cybernetics,
                    51</i>(9),
                    4400-4413.
                    <br/><br/>
                    [2] Petersen, M. K. (2015). Latent semantics of action verbs reflect phonetic parameters of
                    intensity and emotional content. <i>Plos one, 10</i>(4), e0121575.
                    <br/><br/>
                    [3] West, R., Pineau, J., & Precup, D. (2009, June). Wikispeedia: An online game for inferring
                    semantic distances between concepts. In Twenty-First International Joint Conference on
                    Artificial
                    Intelligence

                </p>
            </div>
        </div>
    )
}
export default Correlation
