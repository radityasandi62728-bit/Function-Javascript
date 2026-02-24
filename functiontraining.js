let nilai = 60;

function cekNilai(nilai) {
    if (nilai >= 75) {
        return "lulus"
    }
    else {
        return "tidak lulus"
    }
}

console.log("Nilai kamu adalah: " + nilai + cekNilai(nilai));
