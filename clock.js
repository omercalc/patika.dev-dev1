function askName() {
    var name = prompt("Adınız nedir?");
    document.getElementById("myName").innerText = name;
}

function showTime() {
    var date = new Date();
    var saat = date.getHours();
    var dakika = date.getMinutes();
    var saniye = date.getSeconds();
    var weekdayNumber = date.getDay();

    var arrayOfWeekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    var weekdayName = arrayOfWeekdays[weekdayNumber]

    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;

    var time = saat + ":" + dakika + ":" + saniye + " " + weekdayName;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);
}

askName();
showTime();