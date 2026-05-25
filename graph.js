const petaUNIB = {
    'GB5': { 
        koordinat: [-3.760132, 102.269752],
        tetangga: { 
            // Urutan 1-2: Paling Cepat
            'GB2 GB3 GB4': { jarak: 100, waktu_jalan: 60, waktu_motor: 60 },
            'FKIK': { jarak: 120, waktu_jalan: 70, waktu_motor: 70 },
            // Urutan 3-5
            'GSG': { jarak: 150, waktu_jalan: 90, waktu_motor: 90 },
            'Fakultas_Teknik': { jarak: 180, waktu_jalan: 120, waktu_motor: 120 },
            'GB1': { jarak: 250, waktu_jalan: 150, waktu_motor: 150 },
            // Urutan 6-8: Paling Lambat
            'FP': { jarak: 300, waktu_jalan: 200, waktu_motor: 200 },
            'Perpustakaan': { jarak: 350, waktu_jalan: 250, waktu_motor: 250 },
            'Rektorat': { jarak: 500, waktu_jalan: 400, waktu_motor: 400 }
        }
    },
    // Pastikan semua gedung terhubung balik dengan bobot yang sama
    'GB2 GB3 GB4': { koordinat: [-3.757000, 102.268000], tetangga: { 'GB5': { jarak: 100, waktu_jalan: 60, waktu_motor: 60 } } },
    'FKIK': { koordinat: [-3.754812, 102.266124], tetangga: { 'GB5': { jarak: 120, waktu_jalan: 70, waktu_motor: 70 } } },
    'GSG': { koordinat: [-3.763212, 102.264824], tetangga: { 'GB5': { jarak: 150, waktu_jalan: 90, waktu_motor: 90 } } },
    'Fakultas_Teknik': { koordinat: [-3.758814, 102.269011], tetangga: { 'GB5': { jarak: 180, waktu_jalan: 120, waktu_motor: 120 } } },
    'GB1': { koordinat: [-3.756412, 102.268854], tetangga: { 'GB5': { jarak: 250, waktu_jalan: 150, waktu_motor: 150 } } },
    'FP': { koordinat: [-3.760000, 102.270000], tetangga: { 'GB5': { jarak: 300, waktu_jalan: 200, waktu_motor: 200 } } },
    'Perpustakaan': { koordinat: [-3.759102, 102.267104], tetangga: { 'GB5': { jarak: 350, waktu_jalan: 250, waktu_motor: 250 } } },
    'Rektorat': { koordinat: [-3.760314, 102.266736], tetangga: { 'GB5': { jarak: 500, waktu_jalan: 400, waktu_motor: 400 } } }
};