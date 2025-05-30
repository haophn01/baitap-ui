document.getElementById("submit").onclick = function() {
    const days = Number(document.getElementById("days").value);
    const rate = Number(document.getElementById("Rate").value);
    let total = days * rate;
    document.getElementById("result").innerHTML = `Tổng số lương của bạn là ${total}vnđ.`;
}