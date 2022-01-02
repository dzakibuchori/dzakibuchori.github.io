"use strict";

var dummySantri = [
    {
        "nik": "3214016912080003",
        "nik_emis": "510022140344210000",
        "nisn": "0084199002",
        "nis_pondok": "212201001",
        "nama_santri": "Afifah Wafiyatun Nisa",
        "nama_arab": "عفيفة وافية النساء",
        "jk": "P",
        "ttl": "Purwakarta, 29 Desember 2008",
        "alamat": "Ko.Bojong RT.019/005 Kel. Nagri Kidul Kab/Kec.Purwakarta.",
        "sekolah_asal": "SDN 2 NAGRI KIDUL PURWAKARTA",
        "nama_ayah": "Hendra Gunawan.",
        "pekerjaan_ayah": "PNS Kementrian/Lembaga/Pemda",
        "nama_ibu": "Dati Kurnia.S.Ud",
        "pekejaan_ibu": "Guru/Dosen",
        "no_telp": "087779844801"
    },
    {
        "nik": "3213207108090001",
        "nik_emis": "510022140344210000",
        "nisn": "0099333363",
        "nis_pondok": "212201002",
        "nama_santri": "Aira Anindah Heryana Putri",
        "nama_arab": "أيرا عنيندة حرينا فوتري",
        "jk": "P",
        "ttl": "Subang, 31 Agustus 2009",
        "alamat": "Dusun II Cipeundeuy Rt 020/006 Ds. Cipeundeuy Kec. Cipeundeuy Kab. Subang",
        "sekolah_asal": "SDN LIGAR MANAH",
        "nama_ayah": "Yayan Heryana",
        "pekerjaan_ayah": "TNI/Polisi",
        "nama_ibu": "Neng Idah",
        "pekejaan_ibu": "Tidak bekerja (Ibu Rumah Tangga)",
        "no_telp": "081288099077"
    },
    {
        "nik": "3214065410080001",
        "nik_emis": "510022140344210000",
        "nisn": "0088153798",
        "nis_pondok": "212201003",
        "nama_santri": "Alma Amelia Faustine",
        "nama_arab": "الما عمليا فوصطين",
        "jk": "P",
        "ttl": "Purwakarta, 14 Oktober 2008",
        "alamat": "Ds. Darangdan Rt 27 Rw 06 Kec. Darangdan Purwakarta",
        "sekolah_asal": "SD NEGERI 1 DARANGDAN",
        "nama_ayah": "Imam Subekti",
        "pekerjaan_ayah": "Pengusaha/Wiraswasta",
        "nama_ibu": "Cucu Kurniasih",
        "pekejaan_ibu": "PNS Kementrian/Lembaga/Pemda",
        "no_telp": "0818226446"
    },
    {
        "nik": "3214011709080004",
        "nik_emis": "510022140344210000",
        "nisn": "0082640611",
        "nis_pondok": "212201004",
        "nama_santri": "Alviansyah Ramdani",
        "nama_arab": "الفيانشاه رمضان",
        "jk": "L",
        "ttl": "Purwakarta 17 September 2008",
        "alamat": "Simpang Rt/46 Rw/03 Kel Nagri Kidul Kec Purwakarta Kab Purwakarta Kode Poss 41111",
        "sekolah_asal": "SDN 1 SINDANGKASIH",
        "nama_ayah": "Asep Mulyana",
        "pekerjaan_ayah": "Pedagang",
        "nama_ibu": "Leli Nusrulaelia",
        "pekejaan_ibu": "Guru/Dosen",
        "no_telp": "088289309124"
    },
    {
        "nik": "3214097103090003",
        "nik_emis": "510022140344210000",
        "nisn": "0092477147",
        "nis_pondok": "212201005",
        "nama_santri": "Alya Nur Fadhila",
        "nama_arab": "اليا نور فضيلة",
        "jk": "P",
        "ttl": "Purwakarta, 31 Maret 2009",
        "alamat": "Jl. Syahbandar No 30 Rt/Rw 09/04 Wanayasa Purwakarta",
        "sekolah_asal": "SD NEGERI 1 WANAYASA",
        "nama_ayah": "Ende Angga Kuswaji",
        "pekerjaan_ayah": "TNI/Polisi",
        "nama_ibu": "Nurjanah",
        "pekejaan_ibu": "Pegawai Swasta",
        "no_telp": "087771838359"
    },
    {
        "nik": "3214031912080004",
        "nik_emis": "510022140344210000",
        "nisn": "0088281560",
        "nis_pondok": "212201006",
        "nama_santri": "Amizard Hadimi Putra ",
        "nama_arab": "أميزارد هادمي فطرا",
        "jk": "L",
        "ttl": "Purwakarta, 18 Desember 2008",
        "alamat": "Kp Sampih RT 05 RW 02 Ds Cibinong Kec Jatiluhur Kab Purwakarta",
        "sekolah_asal": "SD PLUS AL MUHAJIRIN ",
        "nama_ayah": "Hadimi",
        "pekerjaan_ayah": "Pengusaha/Wiraswasta",
        "nama_ibu": "Effi Mayoti",
        "pekejaan_ibu": "Pegawai Swasta",
        "no_telp": "082129982646"
    },
    {
        "nik": "3214012607090003",
        "nik_emis": "510022140344210000",
        "nisn": "0096850519",
        "nis_pondok": "212201007",
        "nama_santri": "Ananda Naufal Juliansyah",
        "nama_arab": "أناندا نوفال جوليانشاه",
        "jk": "L",
        "ttl": "Purwakarta, 26 Juli 2009",
        "alamat": "Kp. Margaluyu RT 15 / RW 04 Kel. Munjuljaya Kec. Purwakarta Kab. Purwakarta",
        "sekolah_asal": "SDN 1 CITALANG",
        "nama_ayah": "Gandi Heryandi",
        "pekerjaan_ayah": "Pengusaha/Wiraswasta",
        "nama_ibu": "Herawati",
        "pekejaan_ibu": "Tidak bekerja (Ibu Rumah Tangga)",
        "no_telp": "081261475147"
    },
    {
        "nik": "3214051908080001",
        "nik_emis": "510022140344210000",
        "nisn": "0089668909",
        "nis_pondok": "212201008",
        "nama_santri": "Arfa Mumtaz Maulana",
        "nama_arab": "عرف ممتاز مولانا",
        "jk": "L",
        "ttl": "Purwakarta, 19 Agustus 2008",
        "alamat": "Kp. Cimanglid Rt 007 Rw 002 Ds./Kec. Sukatani Kab. Purwakarta 41167",
        "sekolah_asal": "SDN 1 SUKATANI",
        "nama_ayah": "Umar",
        "pekerjaan_ayah": "Guru/Dosen",
        "nama_ibu": "Euis Maryam Maryani",
        "pekejaan_ibu": "Guru/Dosen",
        "no_telp": "081387864616"
    }
];

$(function(){
    if(window.matchMedia('(min-width: 1025px)').matches) {
        $("[data-toggle='sidebar']").trigger('click');
    }
});

dummySantri.forEach(function(e,i) {
    $('#tableDataSantriContainer').append(`
    <tr>
        <td>
            ${i+1}
        </td>
        <td>${e.nik}</td>
        <td>${e.nik_emis}</td>
        <td>${e.nisn}</td>
        <td>${e.nis_pondok}</td>
        <td>${e.nama_santri}</td>
        <td>${e.jk}</td>
        <td>${e.ttl}</td>
        <td>${e.sekolah_asal}</td>
        <td class="d-flex">
            <a href="#" class="btn btn-info mx-1" data-toggle="modal" data-target="#viewModal"><i class="fas fa-eye"></i></a>
            <a href="#" class="btn btn-warning mx-1"><i class="fas fa-edit"></i></a>
            <a href="" class="btn btn-danger mx-1" onclick="deleteRow(event);"><i class="fas fa-trash"></i></a>
        </td>
    </tr>
    `);
});

$("#table-1").dataTable({
    pageLength: 5,
    lengthMenu: [[5, 10, 20, 50], [5, 10, 20, 50]],
    columnDefs: [
        { "sortable": false, "targets": [9] }
    ]
});

/* Delete Row */
function deleteRow(e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apakah Anda Yakin?',
        text: "Anda tidak akan bisa mengembalikan data yang telah dihapus!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fb160a',
        cancelButtonColor: '#009900',
        cancelButtonText:'Maaf, tidak jadi!',
        confirmButtonText: 'Ya, tolong hapus!'
      }).then((result) => {
          if(result.isConfirmed) {
              Swal.fire(
                'Terhapus!',
                'Data telah berhasil dihapus.',
                'success'
              )
          }
      });
}