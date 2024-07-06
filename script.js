// 预设中文句子数组
const chineseSentences = [
    "这是第一条预设中文句子。",
    "这是第二条预设中文句子。",
    "这是第三条预设中文句子。",
    // 添加更多句子...
];

// 获取DOM元素
const randomSentenceElement = document.getElementById('random-sentence');

// 随机选择一个句子并显示
function generateRandomSentence() {
    const randomIndex = Math.floor(Math.random() * chineseSentences.length);
    const randomSentence = chineseSentences[randomIndex];
    randomSentenceElement.textContent = randomSentence;
}

// 页面加载时显示初始句子
document.addEventListener('DOMContentLoaded', function() {
    generateRandomSentence();
});
