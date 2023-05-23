
const textarea = document.querySelector('textarea');

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
    let from_text = textarea.value
    const apiUrl = `https://api.mymemory.translated.net/get?q=${from_text}&langpair=${from}|${to}`;
    const res = await fetch(apiUrl);
    let data = await res.json();
    data = data.responseData.translatedText;
    textarea.value = data;
}


