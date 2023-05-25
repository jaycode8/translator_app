
const textarea = document.getElementById('translated-word');
const englishWord = document.getElementById('english-word');
const englishTopic = document.getElementById('english-topic');

const AI = `Artificial Intelligence.
Artificial Intelligence  refers to the simulation of human intelligence in machines that are programmed to 
perform tasks that would typically require human intelligence.`;

const Overview = `Overview of Artificial Intelligence.
AI encompasses various subfields, including machine learning, natural language processing, computer vision, expert systems, and robotics. Machine learning, a prominent aspect of AI, enables systems to learn from data and improve their performance over time without explicit programming. AI systems can analyze and interpret large amounts of data, identify patterns, make predictions, and adapt to changing circumstances.
`;

const application = `Application of Artificial Intelligence.
1. Healthcare.
2 Finance.
3. Transportation.
4. Manufacturing.
5. Customer Service.
6. Retail.
7. Natural Language Processing.
8. Education.
9. Cybersecurity.
10. Entertainment.`;

const ML = `Machine Learning.
Machine learning is a subset of artificial intelligence that focuses on the development of algorithms and models that enable computer systems to automatically learn and improve from experience or data without being explicitly programmed. It involves the creation of mathematical models and algorithms that allow machines to analyze and interpret data, identify patterns, make predictions, or take actions based on the information provided.

a: Supervised Learning.
b: Unsupervised Learning.
c: Reinforcement Learning.`;

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



