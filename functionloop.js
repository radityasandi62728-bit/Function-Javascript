function hitungNilaiRata(nilai) {
    let total = 0;

    for (let i = 0; i < nilai.length; i++) {
        total += nilai[i];
    }
    return total / nilai.length;
}

console.log(hitungNilaiRata([80, 90, 79, 85]));

let a = 10;
let b = a;

b = 20;

console.log(a = b);