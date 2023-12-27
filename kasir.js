let daftarBarang = [];

function tambahBarang() {
    
    let namaBarang = document.getElementById('namaBarang').value;
    let hargaBarang = parseFloat(document.getElementById('hargaBarang').value);

    
    if (namaBarang === '' || isNaN(hargaBarang) || hargaBarang <= 0) {
        alert('Masukkan data barang yang valid.');
        return;
    }

    daftarBarang.push({ nama: namaBarang, harga: hargaBarang });

    tampilkanDaftarBarang();

   
    hitungTotalBelanja();
}

function tampilkanDaftarBarang() {
    let daftarBarangElem = document.getElementById('daftarBarang');
    daftarBarangElem.innerHTML = '';

    daftarBarang.forEach(barang => {
        let li = document.createElement('li');
        li.textContent = `${barang.nama}: Rp ${barang.harga}`;
        daftarBarangElem.appendChild(li);
    });
}

function hitungTotalBelanja() {
    let total = 0;
    
    daftarBarang.forEach(barang => {
        total += barang.harga;
    });

    let totalBelanjaElem = document.getElementById('totalBelanja');
    totalBelanjaElem.textContent = `Total Belanja: Rp ${total}`;
}
