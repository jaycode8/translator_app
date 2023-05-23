
const textarea = document.getElementById('translated-word');
const englishWord = document.getElementById('english-word');
const englishTopic = document.getElementById('english-topic');

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
    const newString = englishTopic.value + '\n' + englishWord.value;
    let from_text = newString;
    const apiUrl = `https://api.mymemory.translated.net/get?q=${from_text}&langpair=${from}|${to}`;
    const res = await fetch(apiUrl);
    let data = await res.json();
    data = data.responseData.translatedText;
    textarea.value = data;
}

const bee = () => {
    const newString = englishTopic.value + '\n' + englishWord.value;
    textarea.value = newString;
}


