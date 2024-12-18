// Fungsi untuk menambahkan nilai ke display
function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
}

// Fungsi untuk menghitung hasil
function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Fungsi untuk menghapus display
function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

// Fungsi untuk menghapus karakter terakhir
function backspace() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
