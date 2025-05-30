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