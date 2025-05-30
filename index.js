document.getElementById("submit").onclick = function() {
    const days = Number(document.getElementById("days").value);
    const rate = Number(document.getElementById("Rate").value);
    let total = days * rate;
    document.getElementById("result").innerHTML = `Tổng số lương của bạn là ${total}vnđ.`;
}

document.getElementById("submit2").onclick = function() {
    const mot = Number(document.getElementById("1").value);
    const hai = Number(document.getElementById("2").value);
    const ba = Number(document.getElementById("3").value);
    const bon = Number(document.getElementById("4").value);
    const nam = Number(document.getElementById("5").value);
    let total = (mot + hai + ba + bon + nam) / 5;
    document.getElementById("result2").innerHTML = `Số trung bình là ${total}.`;
}

document.getElementById("bt3_button").onclick = function () {
    const userInput = Number(document.getElementById("bt3").value);
    document.getElementById("result3").innerHTML = `Số tiền Việt là ${new Intl.NumberFormat('vn-VN').format(userInput)}vnd.`
}