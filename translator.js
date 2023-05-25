
const textarea = document.getElementById('translated-word');
const englishWord = document.getElementById('english-word');
const englishTopic = document.getElementById('english-topic');

const AI = `Artificial Intelligence.
Artificial Intelligence  refers to the simulation of human intelligence in machines that are programmed to 
perform tasks that would typically require human intelligence. It involves the development of computer systems capable 
of executing tasks that typically require human intelligence, such as visual perception, speech recognition, 
decision-making, problem-solving, and language translation.`;

const Overview = `Overview of Artificial Intelligence.
AI encompasses various subfields, including machine learning, natural language processing, computer vision, expert systems, and robotics. Machine learning, a prominent aspect of AI, enables systems to learn from data and improve their performance over time without explicit programming. AI systems can analyze and interpret large amounts of data, identify patterns, make predictions, and adapt to changing circumstances.
The ultimate goal of AI is to create machines that can perform tasks autonomously, exhibit intelligent behavior, and adapt to different situations, emulating human cognitive abilities. While some AI applications are focused on specific tasks, such as voice assistants or image recognition, others strive to develop general artificial intelligence (AGI) capable of performing any intellectual task that a human being can do.
AI has found applications in numerous fields, including healthcare, finance, transportation, manufacturing, customer service, and entertainment. Its potential impact on society is significant, with both benefits and concerns regarding ethics, privacy, and job displacement.`;

const application = `Application of Artificial Intelligence.
1. Healthcare: 
Artificial Intelligence is used for medical image analysis, assisting in the diagnosis of diseases like cancer and detecting abnormalities in medical scans. It also powers predictive analytics for early detection of diseases, personalized medicine, drug discovery, and robot-assisted surgeries.

2 Finance: 
Artificial Intelligence is employed for fraud detection, algorithmic trading, risk assessment, credit scoring, and customer service chatbots. It can analyze vast amounts of financial data and provide insights for investment decisions and portfolio management.

3. Transportation: 
Artificial Intelligence is utilized in autonomous vehicles for perception, decision-making, and control systems. It optimizes traffic flow, predicts maintenance needs, and enables smart transportation systems. AI-powered ride-sharing platforms and navigation apps provide efficient routes and personalized recommendations.

4. Manufacturing: 
Artificial Intelligence enhances manufacturing processes through predictive maintenance, quality control, and supply chain optimization. It enables robotics automation, smart factories, and adaptive production systems that can adjust to changing demands and optimize efficiency.

5. Customer Service: 
Artificial Intelligence-powered chatbots and virtual assistants provide personalized customer support, handle inquiries, and assist with troubleshooting. Natural language processing (NLP) enables intelligent conversation and understanding of customer queries.

6. Retail: 
Artificial Intelligence is employed for demand forecasting, inventory management, and personalized recommendations. It analyzes customer behavior and preferences to provide targeted marketing campaigns and optimize pricing strategies.

7. Natural Language Processing: 
Artificial Intelligence techniques are used in language translation, sentiment analysis, voice recognition, and chatbots. Virtual assistants like Siri, Alexa, and Google Assistant rely on AI for speech recognition and understanding natural language queries.

8. Education: 
Artificial Intelligence is applied in adaptive learning platforms, intelligent tutoring systems, and personalized education. It enables personalized learning paths, tracks student progress, and provides tailored feedback and recommendations.

9. Cybersecurity: 
Artificial Intelligence is utilized for threat detection, anomaly detection, and fraud prevention. It analyzes patterns and behaviors to identify potential security breaches and protect sensitive data.

10. Entertainment: 
Artificial Intelligence powers recommendation systems for personalized content streaming services, such as Netflix and Spotify. It is used in gaming for character behavior and intelligent opponents, as well as in virtual reality (VR) and augmented reality (AR) applications.`;

const ML = `Machine Learning.
Machine learning is a subset of artificial intelligence that focuses on the development of algorithms and models that enable computer systems to automatically learn and improve from experience or data without being explicitly programmed. It involves the creation of mathematical models and algorithms that allow machines to analyze and interpret data, identify patterns, make predictions, or take actions based on the information provided.
There are various types of machine learning techniques, including supervised learning, unsupervised learning, and reinforcement learning:

a: Supervised Learning: 
In supervised learning, the machine learning algorithm is trained on a labeled dataset. The dataset consists of input data (features) and corresponding output labels or target values. The algorithm learns the mapping between the input and output by finding patterns and relationships in the labeled data. Once trained, the model can make predictions or classifications on new, unseen data.

b: Unsupervised Learning: 
Unsupervised learning involves training algorithms on unlabeled data, where the input data does not have corresponding output labels. The goal is to discover inherent patterns, structures, or relationships in the data. Unsupervised learning algorithms can perform tasks like clustering (grouping similar data points together) or dimensionality reduction (finding a lower-dimensional representation of the data).

c: Reinforcement Learning: 
Reinforcement learning involves an agent interacting with an environment and learning to make decisions or take actions based on feedback in the form of rewards or punishments. The algorithm learns through trial and error, exploring different actions and optimizing its behavior over time to maximize cumulative rewards.`;

const deepL = `Deep Learning.
Deep learning is a subfield of machine learning that focuses on the development and application of artificial neural networks, known as deep neural networks or deep learning models. Deep learning models are inspired by the structure and function of the human brain, specifically the interconnected network of neurons.

The key components of deep learning are:
1. Neural Networks
2. Deep Neural Networks
3. Feature Learning
4. Training with Backpropagation
`;

const benefits = `Benefits of Artificial INtelligence.
- Automation and Efficiency.
- Decision Support.
- Improved Accuracy and Precision.
- Personalization and Recommendation.
- Enhanced Customer Service.
- Advanced Data Analysis.
- Improved Healthcare.
- Enhanced Safety and Security.
- Exploration and Innovation. `;


const handleChange = () => {
    let select = document.getElementById('language');
    let selectValue = select.value;
    if (selectValue == 'zh') {
        translate('en', 'zh');
    } else {
        translate('zh', 'en');
    }
}

const translate = async (from, to) => {
    let newString = '';
    if (englishTopic.value == 'Artificial Intelligence') {
        newString = AI;
    }
    else if (englishTopic.value == 'Overview of Artificial Intelligence') {
        newString = Overview;
    }
    else if (englishTopic.value == 'Aplication of AI') {
        newString = application;
    }
    else if (englishTopic.value == 'Machine Learning') {
        newString = ML;
    }
    else if (englishTopic.value == 'Deep Learning') {
        newString = deepL;
    }
    else if (englishTopic.value == 'Benefits of AI') {
        newString = benefits;
    }
    else {
        newString = '';
    }
    let from_text = newString;
    const apiUrl = `https://api.mymemory.translated.net/get?q=${from_text}&langpair=${from}|${to}`;
    const res = await fetch(apiUrl);
    let data = await res.json();
    data = data.responseData.translatedText;
    textarea.value = data;
}



