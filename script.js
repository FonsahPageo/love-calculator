function calculateLove() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    const result = document.getElementById('result');

    const resultMsg = document.createElement('div');

    if (name1 === "" || name2 === "") {
        resultMsg.innerText = "Please enter both names.";
        result.innerHTML = '';
        result.appendChild(resultMsg);
        return;
    } else {
        const loveScore = Math.floor(Math.random() * 101);
        resultMsg.innerText = `The probability of love between ${name1} and ${name2} is ${loveScore}%.`;
        result.innerHTML = '';
        result.appendChild(resultMsg);

        if (loveScore < 10) {
            resultMsg.innerHTML += "<br>No chance of love between you too. Try with other people.";
        } else if (loveScore < 30) {
            resultMsg.innerHTML += "<br>Not a great match, but every relationship is unique!";
        } else if (loveScore >= 30 && loveScore < 50) {
            resultMsg.innerHTML += "<br>There's potential, but it might take some work.";
        } else if (loveScore >= 50 && loveScore < 70) {
            resultMsg.innerHTML += "<br>A decent match with room for growth.";
        } else if (loveScore >= 70 && loveScore < 90) {
            resultMsg.innerHTML += "<br>A strong connection with great potential!";
        } else {
            resultMsg.innerHTML += "<br>A perfect match! Love is in the air!";
        }
    }
}

function resetFields() {
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('result').innerHTML = '';
}