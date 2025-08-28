let total_wish = 0;
function handle_wish() {
    total_wish++;
    document.getElementById("wish").innerText = total_wish;
}
function handle_call(btn) {
    const number = btn.parentElement.previousElementSibling.previousElementSibling.textContent;
    const service_name = btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    let coins = parseInt(document.getElementById('coins').innerText);
    if (coins >= 20) {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        const timeString = hours.toString().padStart(2, "0") + ":" + minutes + ":" + seconds + " " + ampm;

        coins -= 20;
        document.getElementById('coins').innerText = coins;
        const div = `<div class="bg-gray-100 rounded-md flex justify-between p-4 my-4"><div><p>${service_name}</p><p>${number}</p></div><p class="py-4">${timeString}</p></div>`;
        document.getElementById('history').innerHTML += div;
        window.alert("Service Name : " + service_name + "\nNumber : " + number);
    } else {
        alert("Insufficient Coins..")
    }
}

function clear_history() {
    document.getElementById('history').innerHTML ='';
}

function handle_copy(btn) {
    const number = btn.parentElement.previousElementSibling.previousElementSibling.textContent;
    document.getElementById('copy_count').innerText = parseInt(document.getElementById('copy_count').innerText)+1;
    navigator.clipboard.writeText(number);
    alert("Copied Successfully : "+number);
}
