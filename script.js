// 预设中文句子数组
const chineseSentences = [
    "八神子星落从小就希望自己以后会变成一只向日海星，留在她出生成长的霖兰海湾，日日躺在礁石上沐浴阳光。",
    "按照成为神子时候的年龄算星落是最小的一个，才刚刚成年。其次是唐隐，比星落略大个两岁。俩人青梅竹马小情侣，其他年龄大的神子非常热衷于在闲暇时间一脸姨母笑地嗑cp",
    "仰之和白玛闹掰后一直不敢踏入白玛的五色塔，因此星落有时候会在被催报告的时候去白玛的塔里躲仰之，卓有成效，屡试不爽",
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
