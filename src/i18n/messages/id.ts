import type { Messages } from "./en";

/** Bahasa Indonesia. Struktur harus sama dengan en.ts; jangan ubah {placeholder}. */
export const id: Messages = {
  meta: {
    title: "PT. Horra Prime Group | Bisnis, Perdagangan & Perjalanan di Indonesia",
    description:
      "Layanan konsultasi bisnis, bantuan visa dan imigrasi, perdagangan internasional, serta perjalanan dari PT. Horra Prime Group di Indonesia.",
    shortDescription:
      "Perusahaan Indonesia yang bergerak di bidang konsultasi bisnis, perdagangan internasional, serta tur dan perjalanan.",
  },

  common: {
    home: "Beranda",
    skipToContent: "Langsung ke konten",
    optional: "(opsional)",
    opensNewTab: "(terbuka di tab baru)",
    step: "Langkah",
    learnMore: "Selengkapnya",
    readMore: "Baca selengkapnya",
    toBeConfirmed: "Akan dikonfirmasi",
    pendingConfirmation: "Menunggu konfirmasi",
    checkOfficialSources: "Cek sumber resmi",
    contactOurTeam: "Hubungi Tim Kami",
    exploreOurServices: "Lihat Layanan Kami",
    requestConsultation: "Ajukan konsultasi",
    breadcrumb: "Navigasi halaman",
    language: "Bahasa",
    chooseLanguage: "Pilih bahasa",
    explore: "Lihat divisi",
    viewService: "Lihat layanan",
    andMore: " dan lainnya",
    servicesOf: "Layanan {name}",
    disclaimer: {
      regulationsTitle: "Mengikuti peraturan yang berlaku",
      immigrationTitle: "Informasi imigrasi mengikuti peraturan Indonesia yang berlaku",
      immigrationBody:
        "Persyaratan, masa berlaku, dan biaya visa serta izin tinggal dapat berubah. Keputusan ada di tangan otoritas imigrasi Indonesia, dan kami tidak dapat menjamin persetujuan, lama proses, perpanjangan, maupun alih status. Halaman ini adalah informasi umum, bukan nasihat hukum — pastikan detailnya melalui sumber resmi sebelum mengajukan.",
      tradeTitle: "Dikonfirmasi untuk setiap permintaan",
      tradeBody:
        "Ketersediaan, spesifikasi, harga, dokumen, dan syarat pengiriman dikonfirmasi satu per satu untuk setiap permintaan. Tidak ada isi halaman ini yang merupakan penawaran jual.",
    },
    sources: {
      immigration: { label: "Direktorat Jenderal Imigrasi", note: "Informasi imigrasi resmi" },
      evisa: { label: "e-Visa Indonesia", note: "Portal resmi pengajuan visa" },
      oss: { label: "OSS — Online Single Submission", note: "Sistem perizinan berusaha resmi" },
    },
    cta: {
      buildTogether: "Mari Wujudkan Rencana Anda Bersama Kami",
    },
  },

  nav: {
    main: "Utama",
    mobile: "Menu seluler",
    menu: "Menu",
    close: "Tutup",
    discuss: "Diskusikan Kebutuhan Anda",
    overview: "Ringkasan {label}",
    submenu: "Menu {label}",
    items: {
      home: "Beranda",
      about: "Tentang",
      consulting: "Konsultasi Bisnis",
      trading: "Perdagangan Internasional",
      travel: "Tur & Perjalanan",
      contact: "Kontak",
    },
    intros: {
      consulting: "Visa, izin tinggal, dan pendirian perusahaan bagi orang dan bisnis yang datang ke Indonesia.",
      trading: "Permintaan pembeli untuk komoditas Indonesia. Syarat dikonfirmasi untuk setiap permintaan.",
      travel: "Tiket, hotel, tur, antar-jemput, dan panduan untuk perjalanan di Indonesia.",
    },
    groups: {
      visa: "Visa & Imigrasi",
      setup: "Pendirian Usaha",
      categories: "Kategori produk",
      services: "Layanan",
    },
    links: {
      visaOverview: "Ringkasan Visa & Imigrasi",
      visaApply: "Ajukan visa online",
      c1: "Visa Turis C1",
      kitas: "KITAS Investor",
      ptPma: "Pendirian PT PMA",
      localPt: "Pendirian PT Lokal",
      nibOss: "NIB & OSS",
      virtualOffice: "Kantor Virtual",
      ticketHotel: "Tiket & Hotel",
      tourPackage: "Paket Tur",
      airport: "Antar-Jemput Bandara",
      guide: "Pemandu Wisata",
      productsListed: "{count} produk",
      rangeOnRequest: "Daftar atas permintaan",
    },
    footer: {
      label: "Kaki halaman",
      company: "Perusahaan",
      overview: "Ringkasan",
      getInTouch: "Hubungi kami",
      rights: "Hak cipta dilindungi.",
      privacy: "Kebijakan Privasi",
      terms: "Ketentuan Penggunaan",
      payOnline: "Bayar online",
    },
    contact: {
      email: "Email",
      phone: "Telepon",
      whatsapp: "WhatsApp",
      office: "Kantor",
      hours: "Jam kerja",
      greeting: "Halo Horra Prime Group, saya ingin bertanya tentang layanan Anda.",
    },
    homeAria: "Horra Prime Group, beranda",
  },

  divisions: {
    consulting: {
      name: "Konsultasi Bisnis",
      summary: "Bantuan visa, izin tinggal, dan pendirian perusahaan bagi orang dan bisnis yang datang ke Indonesia.",
      services: ["Visa & Imigrasi", "Pendirian Usaha"],
    },
    trading: {
      name: "Perdagangan Internasional",
      summary:
        "Permintaan pembeli untuk komoditas Indonesia, mulai dari rempah dan produk kelapa sawit hingga kopi, kakao, dan mineral.",
      services: ["Rempah & Herbal", "Produk Kelapa Sawit", "Kopi & Kakao", "Lima kategori lainnya"],
    },
    travel: {
      name: "Tur & Perjalanan",
      summary: "Bantuan tiket, hotel, paket tur, antar-jemput bandara, dan panduan perjalanan di seluruh Indonesia.",
      services: ["Tiket & Hotel", "Paket Tur", "Antar-Jemput Bandara", "Pemandu Wisata"],
    },
  },

  company: {
    featured: {
      visa: {
        name: "Visa & Imigrasi",
        text: "Visa turis dan bisnis, KITAS investor dan keluarga, perpanjangan, serta izin kerja.",
      },
      setup: {
        name: "Pendirian Usaha",
        text: "Pendirian PT PMA dan PT lokal, pendaftaran NIB melalui OSS, dan kantor virtual.",
      },
      trading: {
        name: "Perdagangan Komoditas",
        text: "Permintaan rempah, produk kelapa sawit, kopi, kakao, kelapa, mineral Indonesia, dan lainnya.",
      },
      travel: {
        name: "Tiket, Hotel & Tur",
        text: "Penerbangan, hotel, paket tur, antar-jemput bandara, dan panduan perjalanan.",
      },
    },
    principles: [
      {
        title: "Konsultasi profesional",
        text: "Kami mulai dengan memahami situasi Anda, sehingga saran yang diberikan sesuai kebutuhan nyata.",
      },
      {
        title: "Pendampingan menyeluruh",
        text: "Satu tim dapat mengoordinasikan kebutuhan yang saling terkait — pendirian perusahaan dan izin tinggal investor, atau perjalanan untuk kunjungan bisnis.",
      },
      {
        title: "Layanan transparan dan profesional",
        text: "Kami menjelaskan persyaratan dan langkah berikutnya dengan jelas, dan terus terang tentang hal yang bergantung pada otoritas atau pihak ketiga.",
      },
      {
        title: "Dukungan pelanggan khusus",
        text: "Anda memiliki narahubung untuk pertanyaan selama permintaan Anda diproses.",
      },
    ],
    process: [
      { title: "Kirim permintaan", text: "Gunakan formulir untuk menyampaikan kebutuhan Anda." },
      { title: "Konsultasi awal", text: "Kami membahas tujuan, waktu, dan batasan Anda." },
      { title: "Tinjauan persyaratan", text: "Kami menentukan dokumen, informasi, atau spesifikasi yang diperlukan." },
      { title: "Proposal dan langkah berikutnya", text: "Anda menerima usulan pendekatan dan cara melanjutkannya." },
      { title: "Pendampingan berkelanjutan", text: "Kami tetap berkomunikasi selama permintaan Anda berjalan." },
    ],
  },

  hero: {
    company: "PT. Horra Prime Group",
    title: "Mitra Terpercaya untuk Bisnis, Perdagangan & Perjalanan di Indonesia",
    lead: "Konsultasi bisnis, perdagangan internasional, dan bantuan perjalanan yang terpadu untuk menghubungkan peluang di Indonesia dan pasar global.",
  },

  home: {
    divisionsTitle: "Tiga divisi, satu narahubung",
    divisionsIntro:
      "Konsultasi bisnis, perdagangan internasional, serta tur dan perjalanan — dengan satu tim yang mengoordinasikan bila rencana Anda melibatkan lebih dari satu.",
    servicesTitle: "Layanan yang paling sering ditanyakan",
    servicesIntro:
      "Empat layanan yang paling sering ditanyakan klien. Semuanya diawali dengan percakapan tentang kebutuhan Anda.",
    whyTitle: "Mengapa Horra Prime Group",
    whyIntro: "Cara kami bekerja dengan klien, divisi mana pun yang Anda butuhkan.",
    tradingTitle: "Komoditas Indonesia untuk pembeli internasional",
    tradingIntro:
      "Delapan kategori produk yang ditangani divisi Perdagangan Internasional. Ketersediaan, spesifikasi, dan syarat dikonfirmasi untuk setiap permintaan.",
    tradingLink: "Lihat divisi perdagangan",
    visaLabel: "Visa & Imigrasi",
    visaTitle: "Ajukan visa Indonesia secara online",
    visaLead:
      "Pilih visa turis, bisnis, multiple entry, atau KITAS dengan harga yang jelas, isi satu formulir, dan bayar dengan aman secara online. Tim kami memeriksa dokumen Anda dan mengawal pengajuannya.",
    visaFrom: "Visa mulai dari",
    visaCta: "Lihat visa & harga",
    visaApply: "Ajukan sekarang",
    visaStepsTitle: "Cara kerjanya",
    processTitle: "Alur sebuah permintaan",
    processIntro: "Lima tahap yang sama berlaku di semua divisi kami, disesuaikan dengan tiap layanan.",
    processNote:
      "Ini alur kerja umum. Langkah, dokumen, dan waktu berbeda untuk tiap layanan dan kasus, dan bukan jadwal yang dijamin.",
    ctaText:
      "Ceritakan rencana Anda — kunjungan, perusahaan, pengiriman, atau perjalanan — dan kami akan menyarankan langkah awalnya.",
  },

  about: {
    metaTitle: "Tentang Kami",
    metaDescription:
      "PT. Horra Prime Group adalah perusahaan Indonesia di bidang konsultasi bisnis, perdagangan internasional, serta tur dan perjalanan.",
    title: "Tentang Horra Prime Group",
    lead: "PT. Horra Prime Group adalah perusahaan Indonesia dengan tiga divisi: konsultasi bisnis, perdagangan internasional, serta tur dan perjalanan.",
    whatTitle: "Apa yang kami kerjakan",
    whatIntro:
      "Setiap divisi melayani kebutuhan yang berbeda. Bersama-sama, ketiganya mencakup banyak hal yang dicari orang dan bisnis saat berhubungan dengan Indonesia.",
    howTitle: "Cara kami bekerja",
    promiseTitle: "Jelas tentang apa yang bisa kami janjikan",
    promiseIntro: "Banyak pekerjaan kami bergantung pada pemerintah, pemasok, dan penyedia jasa. Kami menyampaikannya dengan terus terang.",
    commitments: [
      {
        title: "Keputusan imigrasi ada di tangan otoritas",
        text: "Kami membantu klien menyiapkan dan menindaklanjuti, tetapi tidak pernah menjanjikan persetujuan, lama proses, atau alih status.",
      },
      {
        title: "Syarat perdagangan dikonfirmasi per permintaan",
        text: "Kami tidak memublikasikan spesifikasi, harga, atau komitmen pasokan yang belum disepakati untuk pesanan tertentu.",
      },
      {
        title: "Perjalanan bergantung pada ketersediaan",
        text: "Pemesanan dikonfirmasi bersama Anda, dengan harga yang berlaku saat itu, sebelum apa pun dipesan.",
      },
    ],
    companyInfo: "Informasi perusahaan",
    pending: [
      { title: "Kisah kami", text: "Kapan dan mengapa perusahaan didirikan, serta bagaimana divisinya berkembang." },
      { title: "Pimpinan", text: "Nama dan jabatan tim pimpinan, jika perusahaan ingin memublikasikannya." },
      { title: "Data terdaftar", text: "Alamat kantor terdaftar, nomor induk berusaha (NIB), dan jam operasional." },
    ],
  },

  consulting: {
    metaTitle: "Konsultasi Bisnis",
    metaDescription:
      "Bantuan visa dan imigrasi serta pendirian perusahaan di Indonesia — visa turis dan bisnis, KITAS Investor, PT PMA, PT lokal, NIB & OSS, dan kantor virtual.",
    title: "Konsultasi Bisnis",
    lead: "Bantuan visa, izin tinggal, dan pendirian perusahaan bagi orang dan bisnis yang datang ke Indonesia — dari kunjungan pertama hingga mendirikan perusahaan.",
    discuss: "Diskusikan rencana Anda",
    pillarsTitle: "Dua bidang konsultasi",
    pillarsIntro: "Sebagian besar klien datang untuk salah satunya. Banyak yang membutuhkan keduanya, dan kami mengoordinasikannya.",
    visaText: "Bantuan memilih visa atau izin tinggal yang sesuai dan menyiapkan pengajuan yang lengkap.",
    setupText: "Bantuan mendirikan perusahaan di Indonesia dan menyelesaikan pendaftaran usahanya.",
    goTo: "Ke {title}",
    pathwayTitle: "Dari kunjungan pertama hingga izin tinggal investor",
    pathwayIntro:
      "Bagi investor, dua bidang konsultasi kami sering saling terkait. Ini salah satu jalur yang umum — apakah berlaku untuk Anda bergantung pada rencana Anda dan aturan yang berlaku.",
    pathway: [
      { title: "Berkunjung", text: "Datang ke Indonesia dengan visa kunjungan yang sesuai, seperti C1, untuk menjajaki pasar." },
      { title: "Mendirikan", text: "Mendirikan PT PMA dan mendaftarkan usaha melalui OSS." },
      { title: "Tinggal", text: "Jika memenuhi syarat, mengajukan KITAS Investor yang terkait dengan investasi Anda." },
    ],
    howTitle: "Cara kami bekerja dengan Anda",
    howNote:
      "Alur kerja umum: dokumen, langkah, dan waktu bergantung pada layanan dan kondisi Anda, dan tidak dijamin.",
    inquiryTitle: "Ceritakan rencana Anda",
    inquiryText:
      "Sampaikan apa yang ingin Anda lakukan di Indonesia — berkunjung, berinvestasi, mendirikan perusahaan, atau pindah. Kami akan menjelaskan pilihan dan informasi yang diperlukan.",
    ctaTitle: "Ingin berdagang atau bepergian?",
    ctaText: "Divisi kami yang lain menangani permintaan komoditas dan pengaturan perjalanan.",
  },

  services: {
    visa: {
      "tourist-visa": {
        name: "Visa Turis",
        description: "Bantuan visa kunjungan untuk wisata dan tinggal singkat lain yang diizinkan, termasuk visa C1.",
      },
      "business-visa": {
        name: "Visa Bisnis",
        description: "Panduan pilihan visa untuk kunjungan bisnis yang tidak melibatkan pekerjaan di Indonesia.",
      },
      "investor-kitas": {
        name: "KITAS Investor",
        description: "Bantuan izin tinggal bagi warga negara asing yang berinvestasi di perusahaan Indonesia, bila memenuhi syarat.",
      },
      "visa-extension": {
        name: "Perpanjangan Visa",
        description: "Bantuan menyiapkan pengajuan perpanjangan jika jenis visa Anda saat ini memungkinkan.",
      },
      "work-visa": {
        name: "Visa Kerja",
        description: "Dukungan koordinasi izin kerja yang disponsori pemberi kerja yang memenuhi syarat di Indonesia.",
      },
      "family-kitas": {
        name: "KITAS Keluarga",
        description: "Bantuan izin tinggal bagi anggota keluarga yang memenuhi syarat, seperti pasangan dan tanggungan.",
      },
    },
    setup: {
      "pt-pma": {
        name: "Pendirian PT PMA",
        description: "Bantuan mendirikan PT PMA — bentuk perseroan terbatas untuk penanaman modal asing di Indonesia.",
      },
      "local-pt": {
        name: "Pendirian PT Lokal",
        description: "Bantuan mendirikan perseroan terbatas (PT) lokal yang dimiliki pemegang saham Indonesia.",
      },
      "nib-oss": {
        name: "NIB & OSS",
        description: "Bantuan memperoleh Nomor Induk Berusaha (NIB) melalui sistem Online Single Submission (OSS).",
      },
      "virtual-office": {
        name: "Kantor Virtual",
        description: "Layanan alamat usaha bagi perusahaan yang membutuhkannya, sesuai ketentuan domisili setempat.",
      },
    },
  },

  visa: {
    metaTitle: "Visa & Imigrasi — ajukan online",
    metaDescription:
      "Ajukan visa dan KITAS Indonesia secara online: visa on arrival B1, visa turis C1, bisnis, multiple entry, KITAS lansia, pekerja jarak jauh, dan keluarga. Harga jelas dan pembayaran aman melalui Midtrans.",
    label: "Konsultasi Bisnis",
    title: "Visa Indonesia, diajukan secara online",
    lead: "Pilih visa Anda, lihat harganya di awal, isi satu formulir pengajuan, lalu bayar dengan aman. Tim kami memeriksa dokumen Anda dan mengurus pengajuan melalui jalur resmi.",
    applyNow: "Ajukan sekarang",
    seePrices: "Lihat visa & harga",
    trust: ["Harga terlihat di awal", "Pembayaran online aman via Midtrans", "Dokumen diperiksa sebelum diajukan", "Situs dalam 4 bahasa"],
    bdTitle: "Penawaran khusus untuk warga negara Bangladesh",
    bdText:
      "Pemegang paspor Bangladesh mendapat diskon khusus 5% untuk setiap harga visa dan KITAS. Diskon otomatis diterapkan saat Anda memilih Bangladesh sebagai kewarganegaraan di formulir pengajuan.",
    bdBadge: "Bangladesh −5%",
    catalogTitle: "Pilih visa Anda",
    catalogIntro:
      "Harga per pemohon. Jika ada dua harga, yang lebih rendah adalah proses standar dan yang lebih tinggi adalah proses ekspres.",
    stepsTitle: "Cara pengajuan online",
    steps: [
      { title: "Pilih visa", text: "Bandingkan jenis visa, lama tinggal, dan harga, lalu pilih proses standar atau ekspres." },
      { title: "Isi formulir", text: "Masukkan data paspor pemohon, tanggal perjalanan, dan informasi kontak." },
      { title: "Bayar online", text: "Bayar dengan aman melalui transfer bank, QRIS, dompet digital, atau kartu lewat Midtrans." },
      { title: "Kirim dokumen", text: "Tim kami menghubungi Anda lewat WhatsApp atau email untuk menerima dokumen dengan aman." },
      { title: "Terima visa", text: "Jika otoritas menyetujui pengajuan, Anda menerima e-visa melalui email." },
    ],
    stepsNote: "Persetujuan dan lama proses ditentukan oleh otoritas imigrasi Indonesia, bukan oleh Horra Prime Group.",
    tableTitle: "Daftar harga",
    tableIntro: "Semua harga dalam rupiah (IDR) per pemohon.",
    colVisa: "Visa",
    colStandard: "Standar",
    colExpress: "Ekspres",
    colBd: "Bangladesh (−5%)",
    otherTitle: "Layanan visa dan izin tinggal lainnya",
    otherIntro: "Untuk layanan ini biayanya bergantung pada situasi Anda. Tanyakan kepada kami, lalu bayar online setelah menerima penawaran.",
    kitasTitle: "KITAS Investor",
    kitasText:
      "Izin tinggal terbatas bagi warga negara asing yang berinvestasi di perusahaan Indonesia. Kami dapat mengoordinasikannya dengan pendirian PT PMA Anda.",
    kitasLink: "Tentang KITAS Investor",
    c1Title: "Visa Turis C1",
    c1Text: "Visa kunjungan sekali masuk untuk wisata, kunjungan keluarga, pameran, dan kunjungan bisnis tanpa bekerja.",
    c1Link: "Tentang visa C1",
    faqTitle: "Pertanyaan umum",
    faqs: [
      {
        q: "Visa apa yang saya butuhkan?",
        a: "Tergantung kewarganegaraan, tujuan, dan rencana lama tinggal Anda. Jika ragu, kirim permintaan konsultasi dan kami akan menjelaskan pilihan yang tampaknya sesuai dengan aturan saat ini.",
      },
      {
        q: "Apa saja yang termasuk dalam harga?",
        a: "Harga adalah total biaya yang kami kenakan per pemohon untuk jenis visa dan pilihan proses yang tertera, untuk menyiapkan, memeriksa, dan mengajukan permohonan. Jika biaya pemerintah berubah, kami memberi tahu Anda sebelum pengajuan.",
      },
      {
        q: "Bagaimana diskon Bangladesh berlaku?",
        a: "Pilih Bangladesh sebagai kewarganegaraan di formulir pengajuan. Diskon 5% dihitung otomatis dan ditampilkan di ringkasan pesanan sebelum Anda membayar. Diskon berlaku berdasarkan kewarganegaraan paspor pemohon.",
      },
      {
        q: "Bagaimana cara membayar?",
        a: "Di akhir formulir pengajuan Anda membayar melalui Midtrans dengan transfer bank (virtual account), QRIS, dompet digital, atau kartu. Data kartu dan bank dimasukkan di jendela Midtrans dan tidak pernah kami lihat.",
      },
      {
        q: "Apakah Anda bisa menjamin persetujuan atau waktunya?",
        a: "Tidak. Persetujuan, lama proses, perpanjangan, dan alih status diputuskan oleh otoritas dan bergantung pada peraturan yang berlaku.",
      },
    ],
    consultTitle: "Belum yakin visa mana yang cocok?",
    consultText:
      "Sampaikan tujuan perjalanan dan kewarganegaraan Anda agar tim kami dapat menjelaskan langkah berikutnya dan informasi yang mungkin dibutuhkan.",
    ctaTitle: "Berencana berinvestasi atau mendirikan perusahaan?",
    ctaText: "Tim pendirian usaha kami dapat membantu mendirikan PT PMA atau PT lokal Anda.",
    payTitle: "Bayar layanan visa yang sudah ditawarkan",
    payText: "Sudah menerima penawaran untuk KITAS Investor, visa kerja, atau layanan lain? Bayar dengan aman secara online di sini.",
  },

  apply: {
    metaTitle: "Pengajuan visa",
    metaDescription: "Ajukan visa Indonesia secara online dan bayar dengan aman melalui Midtrans.",
    title: "Pengajuan visa",
    lead: "Empat langkah singkat. Harga Anda, termasuk diskon Bangladesh bila ada, ditampilkan sebelum membayar.",
    crumb: "Ajukan online",
    stepLabels: ["Visa", "Pemohon", "Dokumen", "Periksa & bayar"],
    stepOf: "Langkah {n} dari {total}",
    back: "Kembali",
    next: "Lanjut",
    edit: "Ubah",
    chooseVisa: "Visa apa yang Anda ajukan?",
    chooseVisaHint: "Harga per pemohon.",
    processing: "Proses",
    standard: "Standar",
    express: "Ekspres",
    standardHint: "Waktu proses reguler",
    expressHint: "Penanganan prioritas",
    applicantTitle: "Data pemohon",
    applicantHint: "Isi data persis seperti yang tertera di paspor.",
    fields: {
      fullName: "Nama lengkap (sesuai paspor)",
      nationality: "Kewarganegaraan (negara paspor)",
      passportNumber: "Nomor paspor",
      passportExpiry: "Tanggal habis berlaku paspor",
      birthDate: "Tanggal lahir",
      gender: "Jenis kelamin",
      email: "Email",
      phone: "Nomor WhatsApp / telepon",
      phoneHint: "Sertakan kode negara, mis. +880 …",
      arrival: "Rencana tanggal kedatangan",
      location: "Di mana Anda sekarang?",
      notes: "Catatan untuk tim kami",
    },
    genders: { male: "Laki-laki", female: "Perempuan" },
    locations: { outside: "Di luar Indonesia", inside: "Sudah di Indonesia" },
    selectCountry: "Pilih negara",
    documentsTitle: "Dokumen yang akan dibutuhkan",
    documentsHint:
      "Jangan unggah apa pun sekarang. Setelah pembayaran, tim kami menghubungi Anda lewat WhatsApp atau email dan menjelaskan cara mengirimnya dengan aman.",
    documents: {
      passport: "Halaman biodata paspor (berlaku minimal 6 bulan)",
      photo: "Pas foto terbaru dengan latar polos",
      ticket: "Pemesanan tiket pulang atau lanjutan",
      bank: "Rekening koran 3–6 bulan terakhir",
      address: "Alamat atau pemesanan hotel di Indonesia",
      sponsor: "Surat sponsor atau pendukung, jika jenis visa memerlukannya",
      kitas: "Visa atau KITAS saat ini, untuk perpanjangan",
    },
    confirmAccurate: "Saya menyatakan bahwa data yang saya isi benar dan sesuai dengan paspor saya.",
    confirmTerms:
      "Saya memahami bahwa Horra Prime Group membantu pengajuan dan persetujuan diputuskan oleh otoritas imigrasi Indonesia.",
    confirmPrivacy: "Saya setuju data saya digunakan untuk memproses pengajuan ini, sesuai kebijakan privasi.",
    reviewTitle: "Periksa pesanan Anda",
    summary: "Ringkasan pesanan",
    applicant: "Pemohon",
    price: "Harga",
    bdDiscount: "Diskon khusus Bangladesh (5%)",
    total: "Total bayar",
    payNow: "Bayar {amount} sekarang",
    preparing: "Menyiapkan pembayaran aman…",
    windowOpen: "Jendela pembayaran terbuka…",
    paymentMethods: "Transfer bank (virtual account), QRIS, dompet digital, atau kartu — diproses oleh Midtrans.",
    bdApplied: "Diskon Bangladesh diterapkan",
    bdNotice: "Warga negara Bangladesh mendapat potongan 5% — pilih Bangladesh sebagai kewarganegaraan untuk menerapkannya.",
    unavailableTitle: "Pembayaran online belum diaktifkan",
    unavailableText: "Pengajuan Anda belum bisa dibayar online. Silakan kirim sebagai permintaan konsultasi, atau hubungi tim kami.",
    sandbox: "Mode sandbox: hanya pembayaran uji coba, tidak ada uang sungguhan yang berpindah.",
    successTitle: "Pembayaran diterima — terima kasih!",
    successText:
      "Pesanan {order} sudah dibayar. Tim kami akan menghubungi Anda lewat WhatsApp atau email dalam satu hari kerja untuk menerima dokumen Anda.",
    pendingTitle: "Menunggu pembayaran Anda",
    pendingText:
      "Ikuti instruksi pembayaran yang ditampilkan (mis. nomor virtual account atau kode QR). Pesanan {order} terkonfirmasi otomatis setelah pembayaran masuk.",
    closedTitle: "Pembayaran belum selesai",
    closedText: "Jendela pembayaran ditutup sebelum pembayaran selesai. Data Anda masih tersimpan di sini — Anda bisa membayar kapan saja.",
    errorTitle: "Pembayaran tidak dapat dimulai",
    errorText: "Tidak ada dana yang ditarik. Periksa data Anda dan coba lagi, atau hubungi tim kami.",
    required: "Kolom ini wajib diisi.",
    invalidEmail: "Masukkan alamat email dengan format nama@contoh.com.",
    invalidPhone: "Masukkan nomor telepon berupa angka dengan kode negara + (opsional).",
    invalidPassport: "Gunakan 5–20 huruf dan angka.",
    invalidDate: "Masukkan tanggal yang valid.",
    passportTooSoon: "Paspor harus berlaku minimal 6 bulan setelah kedatangan.",
    arrivalPast: "Pilih tanggal yang akan datang.",
    mustConfirm: "Mohon centang untuk melanjutkan.",
    fixErrors: "Mohon periksa kolom yang ditandai.",
    catalog: {
      all: "Semua visa",
      B: "Visa on arrival",
      C: "Visa kunjungan",
      D: "Multiple entry",
      E: "KITAS (izin tinggal)",
      text: {
        B: "Tinggal singkat untuk kewarganegaraan yang memenuhi syarat, diterbitkan sebagai e-VOA.",
        C: "Visa kunjungan sekali masuk, diajukan sebelum berangkat.",
        D: "Visa kunjungan beberapa kali masuk untuk perjalanan berulang.",
        E: "Izin tinggal terbatas untuk menetap di Indonesia.",
      },
      apply: "Ajukan sekarang",
      bdBadge: "BD −5%",
      bdPrice: "Bangladesh mulai",
      stay: "Lama tinggal",
      extension: "Perpanjangan",
    },
    visas: {
      b1: {
        name: "Visa on Arrival B1 (e-VOA)",
        short: "Wisata, kunjungan keluarga, dan rapat bisnis singkat untuk kewarganegaraan yang memenuhi syarat.",
        stay: "30 hari",
        extension: "Sekali, hingga total 60 hari",
      },
      "b1-ext": {
        name: "Perpanjangan Visa on Arrival B1",
        short: "Perpanjang e-VOA / VOA satu kali selama 30 hari saat Anda berada di Indonesia.",
        stay: "+30 hari",
        extension: "Maksimal tinggal 60 hari",
      },
      c1: {
        name: "Visa Turis C1 (211A)",
        short: "Visa kunjungan sekali masuk untuk wisata, kunjungan keluarga, dan kunjungan bisnis tanpa bekerja.",
        stay: "60 hari",
        extension: "Dua kali, hingga total 180 hari",
      },
      "c-titre": {
        name: "Visa Kunjungan Tipe C — Titre de Voyage",
        short: "Visa kunjungan bagi pelancong yang memegang dokumen perjalanan, bukan paspor biasa.",
        stay: "60 hari",
        extension: "Sesuai aturan yang berlaku",
      },
      c2: {
        name: "C2 / C6 / C10 Bisnis, Sosial, Relawan & Pembicara",
        short: "Visa kunjungan untuk rapat bisnis, kegiatan sosial atau relawan, dan menjadi pembicara.",
        stay: "60 hari",
        extension: "Dua kali, hingga total 180 hari",
      },
      "c-ext": {
        name: "Perpanjangan Visa Kunjungan C1 / D1",
        short: "Perpanjang visa kunjungan C1, C2, C6, C10, atau D1 selama 60 hari.",
        stay: "+60 hari",
        extension: "Hingga batas maksimal visa",
      },
      artist: {
        name: "Visa Seniman & Penampil",
        short: "Visa kunjungan bagi seniman, musisi, dan penampil yang tampil di Indonesia.",
        stay: "30 hari",
        extension: "Tidak dapat diperpanjang",
      },
      c12: {
        name: "Visa Pra-Investasi C12",
        short: "Untuk menjajaki investasi atau bersiap mendirikan usaha di Indonesia.",
        stay: "180 hari",
        extension: "Sesuai aturan yang berlaku",
      },
      c16: {
        name: "C16 Pelatihan Teknologi Industri",
        short: "Untuk memberikan penyuluhan atau pelatihan teknologi dan inovasi industri.",
        stay: "60 hari",
        extension: "Sesuai aturan yang berlaku",
      },
      c9: {
        name: "C9 Kursus Singkat & Pelatihan",
        short: "Untuk kursus singkat, pelatihan, dan kegiatan belajar non-gelar sejenis.",
        stay: "60 hari",
        extension: "Sesuai aturan yang berlaku",
      },
      "d-multi": {
        name: "Visa Multiple Entry D1 / D2",
        short: "Beberapa kali masuk untuk wisata, rapat bisnis, atau kunjungan pra-investasi.",
        stay: "60 hari per kedatangan",
        extension: "Beberapa kali masuk selama berlaku",
      },
      d12: {
        name: "Visa Multiple Entry Pra-Investasi D12",
        short: "Beberapa kali masuk bagi investor yang menyiapkan usaha di Indonesia.",
        stay: "Hingga 180 hari per kedatangan",
        extension: "Beberapa kali masuk selama berlaku",
      },
      e33g: {
        name: "KITAS Pekerja Jarak Jauh E33G",
        short: "Tinggal di Indonesia sambil bekerja jarak jauh untuk pemberi kerja di luar Indonesia.",
        stay: "1 tahun",
        extension: "Dapat diperpanjang, sesuai aturan",
      },
      e33f: {
        name: "KITAS Lansia E33F",
        short: "Izin tinggal bagi pensiunan, umumnya berusia 60 tahun ke atas.",
        stay: "1 tahun",
        extension: "Dapat diperpanjang, sesuai aturan",
      },
      e33e: {
        name: "KITAS Lansia E33E — 5 tahun",
        short: "Izin tinggal lima tahun bagi pensiunan, umumnya berusia 60 tahun ke atas.",
        stay: "5 tahun",
        extension: "Sesuai aturan yang berlaku",
      },
      e31: {
        name: "KITAS Keluarga E31",
        short: "Izin tinggal bagi pasangan dan anak WNI atau pemegang KITAS.",
        stay: "1 tahun",
        extension: "Dapat diperpanjang, sesuai aturan",
      },
      "e31-2y": {
        name: "KITAS Keluarga E31 — 2 tahun",
        short: "Izin tinggal keluarga dua tahun bagi pasangan dan anak.",
        stay: "2 tahun",
        extension: "Dapat diperpanjang, sesuai aturan",
      },
      e33: {
        name: "KITAS Second Home E33 — 5 tahun",
        short: "Izin tinggal jangka panjang bagi orang asing dengan dana yang cukup di Indonesia.",
        stay: "5 tahun",
        extension: "Sesuai aturan yang berlaku",
      },
      "kitas-ext": {
        name: "Perpanjangan KITAS — 1 tahun",
        short: "Perpanjang KITAS yang masih berlaku selama satu tahun.",
        stay: "+1 tahun",
        extension: "Sesuai aturan yang berlaku",
      },
    },
  },

  c1: {
    metaTitle: "Visa Turis C1 untuk Indonesia",
    metaDescription:
      "Cakupan visa kunjungan C1, daftar dokumen awal, dan cara kami membantu pengajuannya. Persyaratan mengikuti aturan imigrasi Indonesia yang berlaku.",
    label: "Visa & Imigrasi",
    crumb: "Visa Turis C1",
    title: "Visa Turis C1 untuk Indonesia",
    lead: "Visa kunjungan sekali masuk untuk wisata dan tinggal singkat lain yang diizinkan. Kami membantu memastikan visa ini sesuai dengan perjalanan Anda dan menyiapkan pengajuan yang lengkap.",
    apply: "Ajukan visa C1",
    checklist: "Daftar dokumen",
    priceLabel: "Harga per pemohon",
    overviewTitle: "Untuk apa visa C1",
    overviewIntro:
      "C1 umumnya digunakan untuk kunjungan singkat yang tidak melibatkan pekerjaan di Indonesia. Tujuan yang diizinkan antara lain:",
    purposes: [
      "Wisata",
      "Mengunjungi keluarga atau teman",
      "Menghadiri pameran",
      "Kunjungan bisnis yang tidak melibatkan pekerjaan",
      "Kegiatan nonkomersial lain yang diizinkan",
    ],
    glance: "Sekilas",
    summary: [
      { term: "Masuk", detail: "Sekali masuk" },
      { term: "Tinggal awal", detail: "Hingga 60 hari" },
      { term: "Perpanjangan", detail: "Mungkin dapat dilakukan" },
    ],
    glanceNote:
      "Sesuai uraian saat ini. Lama tinggal dan pilihan perpanjangan ditetapkan oleh peraturan imigrasi Indonesia dan dapat berubah.",
    whoTitle: "Siapa yang mungkin memerlukan visa?",
    who: [
      "Warga negara asing yang tidak memenuhi syarat bebas visa atau Visa on Arrival (termasuk e-VOA) mungkin perlu memperoleh visa sebelum berangkat.",
      "Kelayakan bergantung pada kewarganegaraan dan tujuan perjalanan, dan daftar negara yang memenuhi syarat dapat berubah sewaktu-waktu. Periksa aturan terbaru di situs resmi imigrasi, atau minta penilaian dari kami.",
    ],
    processTitle: "Cara kami membantu",
    processIntro: "Dari percakapan pertama hingga kedatangan Anda — dan seterusnya, jika Anda memutuskan tinggal lebih lama atau berinvestasi.",
    process: [
      { title: "Konsultasi gratis", text: "Sampaikan kewarganegaraan, tujuan perjalanan, dan rencana Anda." },
      { title: "Penilaian kelayakan", text: "Kami menilai apakah visa C1 tampak sesuai dengan tujuan Anda menurut aturan saat ini." },
      { title: "Verifikasi dokumen", text: "Kami memeriksa kelengkapan dokumen Anda sebelum apa pun diajukan." },
      { title: "Pengajuan visa", text: "Permohonan diajukan melalui jalur resmi." },
      { title: "Proses imigrasi", text: "Otoritas imigrasi Indonesia meninjau permohonan." },
      { title: "Persetujuan e-visa", text: "Jika permohonan disetujui, otoritas menerbitkan e-visa." },
      { title: "Masuk ke Indonesia", text: "Anda berangkat dan menunjukkan dokumen saat tiba." },
      { title: "Bantuan perpanjangan visa", text: "Jika Anda butuh waktu lebih dan memenuhi syarat, kami dapat membantu mengajukan perpanjangan." },
      { title: "Bantuan alih status ke KITAS Investor", text: "Jika memenuhi syarat dan diizinkan, kami dapat memberi saran untuk beralih ke KITAS Investor." },
    ],
    processNote:
      "Langkah 5 dan 6 dilakukan oleh otoritas imigrasi Indonesia. Langkah 8 dan 9 hanya berlaku jika Anda memenuhi syarat dan aturan mengizinkan. Waktu tidak dijamin.",
    documentsTitle: "Daftar dokumen awal",
    documentsIntro: "Hanya sebagai titik awal. Persyaratan pasti berbeda untuk tiap pemohon dan harus diverifikasi sebelum mengajukan.",
    documents: [
      "Paspor dengan masa berlaku minimal enam bulan",
      "Pas foto",
      "Rencana penerbangan",
      "Pemesanan hotel atau detail akomodasi",
      "Rekening koran enam bulan terakhir",
      "Dokumen pendukung tambahan, tergantung kewarganegaraan",
    ],
    variesTitle: "Persyaratan dapat berbeda",
    variesText:
      "Otoritas imigrasi dapat meminta dokumen yang berbeda atau tambahan tergantung kewarganegaraan, kondisi Anda, dan peraturan yang berlaku. Kami akan memberi tahu apa yang berlaku untuk kasus Anda saat verifikasi dokumen.",
    kitasTitle: "Dari visa C1 ke KITAS Investor",
    kitasLead:
      "Jika Anda memutuskan berinvestasi di Indonesia, beralih dari visa C1 ke KITAS Investor mungkin dapat dilakukan setelah PT PMA berdiri dan persyaratan imigrasi terpenuhi.",
    kitasText:
      "Ini bersyarat. Bergantung pada hukum yang berlaku, kelayakan Anda, dan persetujuan otoritas — tidak tersedia untuk setiap pemegang C1. Kami dapat mengoordinasikan pendirian perusahaan dan pengajuan izin tinggal sekaligus.",
    aboutKitas: "Tentang KITAS Investor",
    aboutSetup: "Tentang pendirian usaha",
    whyTitle: "Mengapa menghubungi Horra Prime Group?",
    reasons: [
      "Konsultasi imigrasi profesional",
      "Bantuan perpanjangan visa",
      "Dukungan pendirian usaha",
      "Bantuan KITAS Investor",
      "Koordinasi menyeluruh",
      "Dukungan pelanggan",
    ],
    faqTitle: "Pertanyaan tentang visa C1",
    faqs: [
      {
        q: "Apakah Anda bisa menjamin visa saya disetujui?",
        a: "Tidak. Keputusan persetujuan dibuat oleh otoritas imigrasi Indonesia. Kami dapat membantu menyiapkan pengajuan yang lengkap, tetapi tidak ada yang dapat menjamin hasilnya.",
      },
      {
        q: "Berapa lama prosesnya?",
        a: "Lama proses ditetapkan oleh otoritas dan dapat berubah. Kami menyampaikan perkiraan terkini saat konsultasi — anggap sebagai perkiraan, bukan janji.",
      },
      {
        q: "Apakah saya memerlukan visa?",
        a: "Tergantung kewarganegaraan dan tujuan perjalanan Anda. Sebagian pelancong mungkin memenuhi syarat bebas visa atau visa on arrival (termasuk e-VOA). Periksa situs resmi imigrasi, atau minta penilaian dari kami.",
      },
      {
        q: "Bisakah saya memperpanjang masa tinggal?",
        a: "Perpanjangan mungkin dapat dilakukan menurut aturan saat ini. Apakah bisa diperpanjang, dan berapa lama, bergantung pada peraturan yang berlaku saat Anda mengajukan.",
      },
      {
        q: "Bisakah saya bekerja dengan visa C1?",
        a: "Tidak. C1 adalah visa kunjungan dan tidak mengizinkan bekerja di Indonesia. Jika Anda berencana bekerja, tanyakan kepada kami tentang izin kerja.",
      },
      {
        q: "Bisakah saya beralih dari visa C1 ke KITAS Investor?",
        a: "Mungkin bisa setelah PT PMA berdiri dan persyaratan imigrasi terpenuhi. Hal ini bergantung pada hukum yang berlaku dan persetujuan otoritas, sehingga tidak tersedia untuk setiap pemegang C1.",
      },
      {
        q: "Apakah informasi di halaman ini nasihat hukum?",
        a: "Bukan. Ini informasi umum tentang layanan kami. Persyaratan dapat berubah dan situasi Anda mungkin berbeda — pastikan detailnya melalui sumber resmi atau profesional yang berwenang sebelum mengajukan.",
      },
    ],
    inquiryTitle: "Butuh bantuan memahami pilihan visa Anda?",
    inquiryText:
      "Sampaikan tujuan perjalanan dan kewarganegaraan Anda agar tim kami dapat menjelaskan langkah berikutnya dan informasi yang mungkin dibutuhkan.",
  },

  kitas: {
    metaTitle: "KITAS Investor",
    metaDescription:
      "Bantuan izin tinggal KITAS Investor bagi warga negara asing yang berinvestasi di perusahaan Indonesia, dikoordinasikan dengan pendirian PT PMA. Mengikuti peraturan yang berlaku.",
    label: "Visa & Imigrasi",
    title: "KITAS Investor",
    lead: "Izin tinggal terbatas bagi warga negara asing yang berinvestasi di perusahaan Indonesia, biasanya PT PMA. Kami membantu memeriksa kelayakan serta mengoordinasikan pendirian perusahaan dan pengajuannya.",
    setupButton: "Pendirian usaha",
    helpTitle: "Bagaimana kami dapat membantu",
    helpIntro:
      "Kelayakan bergantung pada investasi Anda, struktur perusahaan, dan aturan imigrasi yang berlaku saat Anda mengajukan.",
    help: [
      { title: "Tinjauan kelayakan", text: "Kami mencocokkan rencana investasi dan struktur perusahaan Anda dengan persyaratan saat ini." },
      { title: "Koordinasi pendirian perusahaan", text: "Jika Anda belum memiliki PT PMA, tim pendirian usaha kami dapat membantu mendirikannya terlebih dahulu." },
      { title: "Persiapan dokumen", text: "Kami menyampaikan apa saja yang dibutuhkan dan memeriksa kelengkapan dokumen Anda." },
      { title: "Pengajuan dan tindak lanjut", text: "Kami mendukung pengajuan dan memberi kabar selama otoritas memprosesnya." },
      { title: "Perpanjangan", text: "Jika aturan mengizinkan, kami dapat membantu saat izin perlu diperpanjang." },
    ],
    pathwayTitle: "Jalur yang umum",
    pathwayIntro:
      "Urutan di bawah ini umum, tetapi jalur Anda bisa berbeda. Jika Anda sudah berada di Indonesia dengan visa C1, alih status mungkin dapat dilakukan setelah perusahaan berdiri dan persyaratan terpenuhi.",
    readMoreBefore: "Baca selengkapnya tentang",
    readMoreAfter: ".",
    pathway: [
      { title: "Rencanakan investasi", text: "Sepakati kegiatan usaha, kepemilikan, dan struktur perusahaan Indonesia Anda." },
      { title: "Dirikan PT PMA", text: "Dirikan perusahaan dan selesaikan pendaftaran usahanya." },
      { title: "Periksa kelayakan", text: "Pastikan Anda dan perusahaan memenuhi persyaratan KITAS Investor yang berlaku." },
      { title: "Ajukan", text: "Ajukan permohonan, yang kemudian diproses oleh otoritas imigrasi." },
      { title: "Keputusan izin", text: "Jika disetujui, izin diterbitkan. Masa berlaku dan pilihan perpanjangannya mengikuti aturan yang berlaku." },
    ],
    faqTitle: "Pertanyaan tentang KITAS Investor",
    faqs: [
      {
        q: "Apakah saya perlu PT PMA untuk mengajukan?",
        a: "KITAS Investor umumnya terkait dengan investasi di perusahaan Indonesia. Persyaratannya — termasuk minimal investasi atau kepemilikan saham — ditetapkan oleh peraturan yang berlaku, dan kami memastikannya untuk situasi Anda saat konsultasi.",
      },
      {
        q: "Bisakah saya mengajukan saat berada di Indonesia dengan visa C1?",
        a: "Alih status dari visa C1 mungkin dapat dilakukan setelah PT PMA berdiri dan persyaratan imigrasi terpenuhi. Hal ini bersyarat dan bergantung pada persetujuan otoritas.",
      },
      {
        q: "Apakah KITAS Investor mengizinkan saya bekerja di perusahaan?",
        a: "Kegiatan yang diizinkan dengan KITAS Investor ditetapkan oleh peraturan yang berlaku. Kami menjelaskan apa yang berlaku untuk kasus Anda sebelum mengajukan.",
      },
      {
        q: "Apakah Anda bisa menjamin izinnya?",
        a: "Tidak. Keputusan dibuat oleh otoritas imigrasi Indonesia, dan persyaratan dapat berubah.",
      },
    ],
    inquiryTitle: "Diskusikan rencana investasi Anda",
    inquiryText:
      "Sampaikan kewarganegaraan Anda dan bidang yang ingin Anda investasikan. Kami akan menjelaskan persyaratan terkini dan langkah-langkahnya.",
    ctaTitle: "Masih perlu mendirikan perusahaan?",
    ctaText: "Tim pendirian usaha kami dapat membantu mendirikan PT PMA dan mendaftarkannya melalui OSS.",
  },

  setup: {
    metaTitle: "Pendirian Usaha di Indonesia",
    metaDescription:
      "Bantuan pendirian PT PMA dan PT lokal, pendaftaran NIB melalui OSS, dan layanan kantor virtual di Indonesia.",
    label: "Konsultasi Bisnis",
    title: "Pendirian Usaha",
    lead: "Bantuan mendirikan perusahaan di Indonesia — PT PMA untuk penanaman modal asing atau PT lokal — dan menyelesaikan pendaftaran usahanya.",
    servicesTitle: "Layanan pendirian perusahaan",
    servicesIntro:
      "Persyaratan seperti bidang usaha yang diizinkan, modal, dan perizinan bergantung pada kegiatan Anda dan peraturan yang berlaku. Kami memastikan apa yang berlaku untuk Anda saat konsultasi.",
    noGuaranteeTitle: "Tidak ada jadwal atau hasil yang pasti",
    noGuaranteeText:
      "Pendirian perusahaan melibatkan pendaftaran dan persetujuan pemerintah. Jadwal, biaya, dan hasil bergantung pada usaha Anda dan otoritas, dan tidak dijamin. Halaman ini adalah informasi umum, bukan nasihat hukum.",
    questionsTitle: "Yang akan kami tanyakan",
    questionsIntro: "Beberapa detail membantu kami menyarankan jenis perusahaan dan langkah yang tepat.",
    questions: [
      "Kegiatan usaha Anda di Indonesia",
      "Apakah perusahaan akan memiliki pemegang saham asing",
      "Lokasi operasional yang direncanakan",
      "Target waktu Anda",
      "Apakah Anda atau tim Anda memerlukan izin tinggal",
    ],
    howTitle: "Cara kami bekerja dengan Anda",
    howIntroBefore: "Investor asing sering menggabungkan pendirian perusahaan dengan",
    howIntroAfter: ". Kami dapat mengoordinasikan keduanya.",
    howNote: "Alur kerja umum. Dokumen, langkah, dan waktu bergantung pada usaha Anda dan tidak dijamin.",
    inquiryTitle: "Ceritakan tentang usaha Anda",
    inquiryText:
      "Jelaskan apa yang ingin Anda dirikan dan cara Anda ingin dihubungi. Kami akan kembali dengan pilihan dan langkah berikutnya.",
    payTitle: "Bayar layanan pendirian usaha",
    payText: "Setelah menyepakati penawaran dengan tim kami, Anda dapat membayarnya dengan aman secara online.",
    ctaTitle: "Juga butuh visa atau izin tinggal?",
    ctaText: "Tim imigrasi kami bekerja berdampingan dengan tim pendirian usaha.",
  },

  trading: {
    metaTitle: "Perdagangan Internasional",
    metaDescription:
      "Permintaan pembeli untuk komoditas Indonesia: rempah dan herbal, produk kelapa sawit, kopi dan kakao, produk kelapa, petrokimia, batu bara dan mineral, serta hasil laut.",
    title: "Perdagangan Internasional",
    lead: "Kami menangani permintaan pembeli internasional untuk komoditas Indonesia dalam delapan kategori produk. Ketersediaan, spesifikasi, dan syarat dikonfirmasi untuk setiap permintaan.",
    browse: "Lihat kategori",
    sendInquiry: "Kirim permintaan produk",
    categoriesTitle: "Kategori produk",
    categoriesIntro:
      "Tiga kategori mencantumkan produk tertentu. Untuk kategori lainnya, sampaikan kebutuhan Anda dan kami akan mengonfirmasi apa yang dapat kami tawarkan.",
    askTitle: "Yang membantu kami merespons",
    askIntro: "Semakin banyak yang kami ketahui tentang kebutuhan Anda, semakin tepat kami dapat mengonfirmasi ketersediaan dan syaratnya.",
    askFor: [
      { title: "Produk dan mutu", text: "Apa yang Anda butuhkan, serta spesifikasi atau standar mutu yang Anda gunakan." },
      { title: "Volume", text: "Perkiraan jumlah dan frekuensi, jika Anda mengetahuinya." },
      { title: "Tujuan", text: "Negara dan pelabuhan, serta syarat pengiriman yang Anda inginkan." },
      { title: "Dokumen", text: "Sertifikat atau dokumen yang diwajibkan pasar Anda." },
    ],
    processTitle: "Alur permintaan dagang",
    processNote:
      "Alur kerja umum. Spesifikasi, harga, dokumen, dan syarat pengiriman disepakati kasus per kasus; tidak ada jadwal atau pasokan yang dijamin sebelum dikonfirmasi secara tertulis.",
    processNoteShort:
      "Alur kerja umum; syarat disepakati kasus per kasus dan tidak ada yang dijamin sebelum dikonfirmasi secara tertulis.",
    process: [
      { title: "Kirim permintaan produk", text: "Sampaikan produk, tujuan, dan volume yang Anda rencanakan." },
      { title: "Bahas kebutuhan", text: "Kami memperjelas spesifikasi, kemasan, dokumen, dan kebutuhan pengiriman." },
      { title: "Konfirmasi ketersediaan dan syarat", text: "Ketersediaan, spesifikasi, harga, dan syarat pengiriman dikonfirmasi untuk permintaan Anda." },
      { title: "Sepakati langkah berikutnya", text: "Anda menerima proposal dan memutuskan cara melanjutkan." },
      { title: "Koordinasi berkelanjutan", text: "Kami tetap berkomunikasi selama pesanan berjalan." },
    ],
    inquiryText: "Belum yakin kategori mana yang cocok? Jelaskan produknya dan kami akan meneruskannya ke tim yang tepat.",
    payTitle: "Bayar invoice atau uang muka perdagangan",
    payText: "Bayar jumlah pada proforma invoice atau uang muka yang disepakati dengan aman secara online.",
    ctaTitle: "Datang ke Indonesia untuk bertemu pemasok?",
    ctaText:
      "Divisi Tur & Perjalanan kami dapat membantu penerbangan, hotel, dan antar-jemput bandara, dan tim konsultasi kami membantu visa bisnis.",
    category: {
      metaCount: "{name} dari Indonesia: {summary} Kirim permintaan pembeli — ketersediaan, spesifikasi, dan syarat dikonfirmasi satu per satu.",
      metaNone: "Permintaan {name} dari Indonesia. Sampaikan kebutuhan Anda dan kami akan mengonfirmasi apa yang dapat kami tawarkan.",
      viewProducts: "Lihat {count} produk",
      products: "Produk",
      range: "Ragam produk",
      productsIntro:
        "Produk yang saat ini kami layani permintaannya. Mutu, spesifikasi, dan kemasan dikonfirmasi per permintaan.",
      rangeIntro: "Produk tertentu dalam kategori ini dikonfirmasi atas permintaan.",
      catalogue: "Katalog {name}",
      catalogueText:
        "Kami belum memublikasikan daftar produk untuk kategori ini. Kirim permintaan yang menjelaskan produk, spesifikasi, dan volume yang Anda butuhkan, dan kami akan mengonfirmasi apa yang dapat kami tawarkan.",
      inquire: "Tanya tentang {name}",
      inquiryText: "Sampaikan produk, perusahaan, dan tujuan Anda. Kami akan merespons dengan apa yang dapat kami konfirmasi.",
      others: "Kategori lainnya",
    },
    categories: {
      "spices-herbs": {
        name: "Rempah & Herbal",
        summary: "Jahe, kayu manis, lada hitam, cengkih, pala, dan lainnya.",
        intro:
          "Perdagangan rempah Indonesia sudah berlangsung berabad-abad. Kami menangani permintaan pembeli untuk rempah di bawah ini dan mengonfirmasi mutu, asal, kemasan, dan ketersediaan untuk setiap permintaan.",
      },
      "palm-oil": {
        name: "Produk Kelapa Sawit",
        summary: "Minyak sawit mentah dan olahan, produk inti sawit, dan produk sampingan.",
        intro:
          "Permintaan minyak sawit mentah dan olahan, produk inti sawit, dan produk sampingan. Spesifikasi, parameter mutu, dan syarat dagang disepakati untuk setiap permintaan.",
      },
      "coffee-cocoa": {
        name: "Kopi & Kakao",
        summary: "Kopi mentah dan sangrai, biji kakao, dan produk kakao olahan.",
        intro:
          "Kopi dalam bentuk biji mentah, sangrai, dan bubuk, serta kakao mulai dari biji hingga lemak, pasta, dan bungkil. Sampaikan kegunaannya dan kami akan mengonfirmasi apa yang dapat dipasok.",
      },
      coconut: {
        name: "Produk Kelapa",
        summary: "Ragam produk dikonfirmasi atas permintaan.",
        intro:
          "Permintaan produk berbahan kelapa. Daftar rinci untuk kategori ini sedang disusun — sampaikan yang Anda cari dan kami akan mengonfirmasi apa yang dapat kami tawarkan.",
      },
      petrochemical: {
        name: "Produk Petrokimia",
        summary: "Ragam produk dikonfirmasi atas permintaan.",
        intro:
          "Permintaan produk petrokimia. Daftar rinci untuk kategori ini sedang disusun — sampaikan spesifikasi Anda dan kami akan mengonfirmasi apa yang dapat kami tawarkan.",
      },
      "coal-minerals": {
        name: "Batu Bara & Mineral",
        summary: "Ragam produk dikonfirmasi atas permintaan.",
        intro:
          "Permintaan batu bara dan produk mineral. Daftar rinci untuk kategori ini sedang disusun — sampaikan kebutuhan Anda dan kami akan mengonfirmasi apa yang dapat kami tawarkan.",
      },
      "seafood-marine": {
        name: "Hasil Laut & Produk Kelautan",
        summary: "Ragam produk dikonfirmasi atas permintaan.",
        intro:
          "Permintaan hasil laut dan produk kelautan. Daftar rinci untuk kategori ini sedang disusun — sampaikan kebutuhan Anda dan kami akan mengonfirmasi apa yang dapat kami tawarkan.",
      },
      minerals: {
        name: "Mineral",
        summary: "Ragam produk dikonfirmasi atas permintaan.",
        intro:
          "Permintaan produk mineral. Daftar rinci untuk kategori ini sedang disusun — sampaikan spesifikasi Anda dan kami akan mengonfirmasi apa yang dapat kami tawarkan.",
      },
    },
    groups: { palm: "Minyak sawit", kernel: "Inti sawit", byproducts: "Produk sampingan", coffee: "Kopi", cocoa: "Kakao" },
    products: {
      ginger: "Jahe",
      cinnamon: "Kayu Manis",
      "black-pepper": "Lada Hitam",
      cloves: "Cengkih",
      "star-anise": "Bunga Lawang",
      nutmeg: "Pala",
      mace: "Fuli (Bunga Pala)",
      cardamom: "Kapulaga",
      "crude-palm-oil": "Minyak Sawit Mentah",
      "refined-palm-oil": "Minyak Sawit Olahan",
      "rbd-palm-olein": "RBD Palm Olein",
      "rbd-palm-stearin": "RBD Palm Stearin",
      "palm-kernel-oil": "Minyak Inti Sawit",
      "palm-kernel-expeller": "Bungkil Inti Sawit",
      "palm-kernel-shell": "Cangkang Sawit",
      "palm-fatty-acid-distillate": "Palm Fatty Acid Distillate",
      "palm-acid-oil": "Palm Acid Oil",
      "palm-oil-mill-effluent": "Limbah Cair Pabrik Sawit",
      "arabica-coffee-beans": "Biji Kopi Arabika",
      "robusta-coffee-beans": "Biji Kopi Robusta",
      "green-coffee-beans": "Biji Kopi Mentah (Green Bean)",
      "roasted-coffee-beans": "Biji Kopi Sangrai",
      "ground-coffee": "Kopi Bubuk",
      "cocoa-beans": "Biji Kakao",
      "cocoa-powder": "Bubuk Kakao",
      "cocoa-butter": "Lemak Kakao",
      "cocoa-liquor-cocoa-mass": "Pasta Kakao (Cocoa Mass)",
      "cocoa-cake": "Bungkil Kakao",
    },
  },

  travel: {
    metaTitle: "Tur & Perjalanan",
    metaDescription:
      "Bantuan tiket pesawat, hotel, paket tur, antar-jemput bandara, dan panduan perjalanan untuk perjalanan di Indonesia.",
    logoAlt: "Horra – Global Visa & Business Solutions",
    title: "Tur & Perjalanan",
    lead: "Tiket, hotel, paket tur, antar-jemput bandara, dan panduan perjalanan — disesuaikan dengan rencana Anda, baik untuk bisnis maupun liburan.",
    plan: "Rencanakan perjalanan",
    ourServices: "Layanan kami",
    servicesTitle: "Yang bisa kami atur",
    servicesIntro:
      "Sampaikan kebutuhan Anda dan kami akan kembali dengan pilihan. Harga dan ketersediaan dikonfirmasi sebelum apa pun dipesan.",
    services: {
      "ticket-hotel": {
        name: "Tiket & Hotel",
        description: "Tiket pesawat dan pemesanan hotel sesuai tanggal, anggaran, dan preferensi Anda.",
        details: ["Penerbangan domestik dan internasional", "Hotel untuk liburan atau perjalanan bisnis"],
      },
      "tour-package": {
        name: "Paket Tur",
        description: "Paket tur ke berbagai destinasi di Indonesia, direncanakan sesuai minat dan ritme Anda.",
        details: ["Liburan dan perjalanan singkat", "Rencana sesuai minat Anda"],
      },
      "airport-transfer": {
        name: "Antar-Jemput Bandara",
        description: "Transfer antara bandara dan hotel atau tempat pertemuan Anda, dipesan di muka.",
        details: ["Transfer kedatangan dan keberangkatan", "Disesuaikan dengan jadwal penerbangan Anda"],
      },
      "travel-guide": {
        name: "Pemandu Wisata",
        description: "Pengaturan pemandu dan panduan perjalanan praktis untuk tempat yang ingin Anda kunjungi.",
        details: ["Bantuan berkeliling", "Pengetahuan lokal tentang destinasi Anda"],
      },
    },
    processTitle: "Cara perencanaannya",
    process: [
      { title: "Sampaikan rencana", text: "Tanggal, destinasi, jumlah orang, dan hal yang penting bagi Anda." },
      { title: "Terima pilihan", text: "Kami kembali dengan saran dan ketersediaan untuk tanggal Anda." },
      { title: "Konfirmasi pemesanan", text: "Harga dan ketentuan dikonfirmasi sebelum apa pun dipesan." },
      { title: "Berangkat dengan dukungan", text: "Anda memiliki narahubung sebelum dan selama perjalanan." },
    ],
    availabilityTitle: "Ketersediaan dan harga",
    availabilityText:
      "Penerbangan, hotel, tur, dan transfer bergantung pada ketersediaan penyedia saat pemesanan. Kami mengonfirmasi harga dan ketentuan sebelum memesan; kami tidak memublikasikan paket atau tarif tetap.",
    inquiryText: "Sampaikan tanggal, destinasi, dan bantuan yang Anda butuhkan. Perkiraan kasar sudah cukup untuk memulai.",
    payTitle: "Bayar pemesanan Anda",
    payText: "Bayar pemesanan tiket, hotel, tur, atau transfer yang sudah dikonfirmasi dengan aman secara online.",
    ctaTitle: "Berkunjung untuk bisnis?",
    ctaText: "Tim konsultasi kami dapat memberi saran soal visa, dan tim perdagangan kami soal permintaan pemasok.",
  },

  contact: {
    metaTitle: "Kontak",
    metaDescription:
      "Hubungi PT. Horra Prime Group tentang konsultasi bisnis, visa dan imigrasi, perdagangan internasional, atau tur dan perjalanan.",
    title: "Hubungi tim kami",
    lead: "Sampaikan kebutuhan Anda — visa, perusahaan, produk, atau perjalanan — dan divisi yang tepat akan menindaklanjutinya.",
    formTitle: "Formulir permintaan",
    asideLabel: "Detail kontak dan langkah berikutnya",
    details: "Detail kontak",
    detailsPending: "Detail kontak resmi akan dipublikasikan setelah dikonfirmasi. Sementara itu, silakan gunakan formulir.",
    whatsapp: "Kirim pesan WhatsApp",
    nextTitle: "Apa yang terjadi selanjutnya",
    next: [
      "Kami membaca permintaan Anda dan meneruskannya ke divisi yang tepat.",
      "Kami membalas untuk bertanya atau mengatur konsultasi.",
      "Anda menerima usulan langkah berikutnya sebelum apa pun dijalankan.",
    ],
    divisionTitle: "Mencari divisi tertentu?",
  },

  notFound: {
    label: "Halaman tidak ditemukan",
    title: "Halaman ini tidak ada",
    text: "Tautannya mungkin sudah usang. Kembali ke beranda, atau pilih divisi di bawah ini.",
    home: "Ke beranda",
  },

  legal: {
    draftTitle: "Draf — menunggu tinjauan hukum",
    privacy: {
      metaTitle: "Kebijakan Privasi",
      metaDescription:
        "Cara PT. Horra Prime Group menangani informasi yang dikirim melalui situs ini. Draf menunggu tinjauan hukum.",
      title: "Kebijakan Privasi",
      lead: "Cara kami menangani informasi yang Anda bagikan melalui situs ini.",
      draft:
        "Ini draf awal berdasarkan cara kerja formulir di situs. Draf ini harus ditinjau terhadap Undang-Undang Pelindungan Data Pribadi (UU No. 27 Tahun 2022) dan aturan lain yang berlaku, serta dilengkapi dengan praktik data perusahaan yang sebenarnya, sebelum situs dipublikasikan.",
      sections: [
        {
          h: "Siapa kami",
          p: [
            "Situs ini dikelola oleh {company} (“kami”). Alamat terdaftar dan detail kontak kami dicantumkan di halaman kontak setelah dikonfirmasi.",
          ],
        },
        {
          h: "Informasi yang kami kumpulkan",
          p: [
            "Saat Anda mengirim permintaan, kami mengumpulkan data yang Anda isi di formulir. Tergantung formulirnya, ini dapat mencakup nama, alamat email, dan nomor telepon atau WhatsApp; negara atau kewarganegaraan dan nama perusahaan; serta layanan atau produk yang Anda tanyakan.",
            "Saat Anda mengajukan visa online, kami juga mengumpulkan data paspor yang diperlukan untuk pengajuan (nama sesuai paspor, kewarganegaraan, nomor dan tanggal habis berlaku paspor, tanggal lahir) serta tanggal perjalanan Anda. Pembayaran ditangani oleh Midtrans: data kartu dan bank dimasukkan di jendela Midtrans dan tidak kami lihat maupun simpan.",
          ],
        },
        {
          h: "Cara kami menggunakannya",
          p: [
            "Kami menggunakan informasi Anda untuk menjawab permintaan, menyiapkan dan mengajukan permohonan atau memberikan layanan yang Anda minta, serta menyimpan catatan korespondensi dan pembayaran. Kami tidak menjual informasi Anda.",
          ],
        },
        {
          h: "Berbagi informasi",
          p: [
            "Kami dapat membagikan informasi kepada penyedia layanan yang membantu kami mengoperasikan situs, menerima pembayaran, atau menangani permintaan, dan — bila permintaan Anda membutuhkannya — kepada otoritas imigrasi Indonesia atau mitra yang terlibat dalam layanan. [Akan dilengkapi: kategori penyedia dan transfer ke luar Indonesia.]",
          ],
        },
        { h: "Penyimpanan", p: ["[Akan dilengkapi: berapa lama data permintaan dan pengajuan disimpan dan bagaimana dihapus.]"] },
        {
          h: "Pilihan Anda",
          p: [
            "Anda dapat meminta akses, perbaikan, atau penghapusan data pribadi yang kami simpan, atau menarik persetujuan, sesuai hukum yang berlaku. {contact}",
          ],
        },
        {
          h: "Cookie",
          p: [
            "Situs ini menggunakan satu cookie fungsional untuk mengingat bahasa yang Anda pilih. Situs ini tidak menggunakan cookie iklan atau analitik. Jika analitik ditambahkan, bagian ini harus diperbarui sebelum diaktifkan.",
          ],
        },
        {
          h: "Perubahan",
          p: ["Kami dapat memperbarui kebijakan ini. Versi terbaru selalu dipublikasikan di halaman ini. [Tambahkan tanggal “terakhir diperbarui” saat publikasi.]"],
        },
      ],
      contactEmail: "Hubungi kami di {email}.",
      contactPending: "[Akan dilengkapi: alamat kontak untuk permintaan privasi.]",
    },
    terms: {
      metaTitle: "Ketentuan Penggunaan",
      metaDescription: "Ketentuan penggunaan situs PT. Horra Prime Group. Draf menunggu tinjauan hukum.",
      title: "Ketentuan Penggunaan",
      lead: "Dasar penggunaan situs ini dan informasi di dalamnya.",
      draft:
        "Ketentuan ini adalah draf awal. Ketentuan ini harus ditinjau oleh profesional yang berwenang dan dilengkapi sebelum situs dipublikasikan. Ketentuan ini mencakup penggunaan situs dan pesanan online, bukan ketentuan perjanjian layanan terpisah.",
      sections: [
        { h: "Tentang situs ini", p: ["Situs ini dikelola oleh {company}. Dengan menggunakannya, Anda menyetujui ketentuan ini."] },
        {
          h: "Hanya informasi",
          p: [
            "Konten di situs ini adalah informasi umum tentang layanan kami. Konten ini bukan nasihat hukum, imigrasi, pajak, atau investasi, dan bukan penawaran jual produk apa pun. Persyaratan — terutama aturan imigrasi dan pendaftaran perusahaan — dapat berubah, dan Anda perlu memastikannya melalui sumber resmi atau profesional yang berwenang sebelum bertindak.",
          ],
        },
        {
          h: "Tanpa jaminan",
          p: [
            "Keputusan visa dan izin dibuat oleh otoritas Indonesia. Kami tidak menjamin persetujuan, lama proses, perpanjangan, maupun alih status.",
            "Ketersediaan produk, spesifikasi, harga, dokumen, dan syarat pengiriman hanya berlaku bila dikonfirmasi untuk permintaan tertentu.",
            "Pemesanan perjalanan bergantung pada ketersediaan dan ketentuan penyedia saat pemesanan.",
          ],
        },
        {
          h: "Pesanan visa online dan pembayaran",
          p: [
            "Harga visa di situs ini berlaku per pemohon dan dikonfirmasi di ringkasan pesanan sebelum pembayaran. Diskon khusus Bangladesh sebesar 5% berlaku bagi pemohon dengan paspor Bangladesh. Pembayaran diproses oleh Midtrans. [Akan dilengkapi: kebijakan pengembalian dana bila pengajuan tidak dapat diajukan atau ditolak.]",
          ],
        },
        {
          h: "Layanan",
          p: ["Setiap layanan yang kami berikan diatur oleh perjanjian atau konfirmasi tertulis terpisah, yang lebih diutamakan daripada isi situs ini."],
        },
        {
          h: "Tautan eksternal",
          p: ["Kami menautkan situs resmi dan pihak ketiga untuk kemudahan. Kami tidak bertanggung jawab atas konten atau ketersediaannya."],
        },
        {
          h: "Hak kekayaan intelektual",
          p: ["Teks, desain, dan grafis di situs ini milik {company} atau digunakan dengan izin. Jangan memperbanyaknya tanpa persetujuan."],
        },
        { h: "Hukum yang berlaku", p: ["[Akan dikonfirmasi: hukum dan yurisdiksi yang berlaku, mis. hukum Republik Indonesia.]"] },
        {
          h: "Perubahan",
          p: ["Kami dapat memperbarui ketentuan ini. Versi terbaru dipublikasikan di halaman ini. [Tambahkan tanggal “terakhir diperbarui” saat publikasi.]"],
        },
      ],
    },
  },

  form: {
    ariaLabel: "Formulir permintaan",
    submit: {
      general: "Kirim permintaan",
      visa: "Ajukan konsultasi",
      "business-setup": "Ajukan konsultasi",
      trading: "Kirim permintaan produk",
      travel: "Kirim permintaan perjalanan",
    },
    sending: "Mengirim…",
    selectOption: "Pilih salah satu",
    checkOne: "Periksa 1 kolom",
    checkMany: "Periksa {count} kolom",
    privacyConsent: "Persetujuan privasi",
    privacyBefore: "Kami hanya menggunakan data Anda untuk menjawab permintaan ini. Lihat",
    privacyLink: "kebijakan privasi",
    privacyAfter: " kami.",
    sentTitle: "Permintaan terkirim",
    sentText: "Terima kasih. Kami akan membalas ke {email}.",
    sentFallback: "alamat email yang Anda berikan",
    demoTitle: "Mode demo: permintaan Anda tidak terkirim",
    demoText:
      "Data Anda lolos validasi, tetapi pengiriman permintaan belum terhubung, sehingga tidak ada yang terkirim atau tersimpan. Pemilik situs: hubungkan endpoint permintaan (INQUIRY_WEBHOOK_URL — lihat README) sebelum peluncuran.",
    errorTitle: "Permintaan Anda gagal terkirim",
    errorText: "Periksa koneksi Anda dan coba lagi. Data Anda masih ada di formulir.",
    honeypot: "Situs web",
    fields: {
      fullName: "Nama lengkap",
      email: "Email",
      phone: "Telepon atau WhatsApp",
      phoneHint: "Sertakan kode negara.",
      consent: "Saya setuju Horra Prime Group menggunakan data ini untuk menjawab permintaan saya, sesuai kebijakan privasi.",
      visaService: "Apa yang bisa kami bantu?",
      nationality: "Kewarganegaraan",
      nationalityHint: "Sesuai paspor Anda.",
      purpose: "Tujuan tinggal",
      arrival: "Rencana kedatangan",
      arrivalHint: "Perkiraan bulan sudah cukup.",
      anythingElse: "Ada hal lain yang perlu kami ketahui?",
      service: "Layanan",
      yourCountry: "Negara Anda",
      objective: "Apa yang ingin Anda dirikan di Indonesia?",
      objectiveHint: "Misalnya: kegiatan usaha, siapa pemegang sahamnya, dan target waktu Anda.",
      objectiveRequired: "Jelaskan apa yang ingin Anda dirikan.",
      contactMethod: "Cara dihubungi yang disukai",
      company: "Perusahaan",
      companyRequired: "Masukkan nama perusahaan Anda.",
      country: "Negara",
      product: "Produk yang diminati",
      productRequired: "Masukkan produk yang Anda minati.",
      quantity: "Perkiraan kebutuhan",
      quantityHint: "Misalnya volume dan frekuensi.",
      message: "Pesan",
      messageRequired: "Tuliskan pesan tentang kebutuhan Anda.",
      messageHint: "Spesifikasi, pelabuhan tujuan, kemasan, atau hal penting lainnya.",
      dates: "Tanggal perjalanan",
      datesHint: "Perkiraan sudah cukup.",
      travellers: "Jumlah orang",
      destination: "Destinasi",
      destinationHint: "Ke mana saja di Indonesia Anda ingin pergi?",
      trip: "Ceritakan tentang perjalanan Anda",
      tripRequired: "Ceritakan sedikit tentang perjalanan Anda.",
      topic: "Topik",
      help: "Apa yang bisa kami bantu?",
      helpRequired: "Sampaikan apa yang bisa kami bantu.",
      emailRequired: "Masukkan alamat email Anda.",
    },
    options: {
      topics: {
        "visa-and-immigration": "Visa & Imigrasi",
        "business-setup": "Pendirian Usaha",
        "international-trading": "Perdagangan Internasional",
        "tours-and-travel": "Tur & Perjalanan",
        "something-else": "Lainnya",
      },
      visaServices: {
        "tourist-visa": "Visa Turis (C1)",
        "business-visa": "Visa Bisnis",
        "investor-kitas": "KITAS Investor",
        "visa-extension": "Perpanjangan Visa",
        "work-visa": "Visa Kerja",
        "family-kitas": "KITAS Keluarga",
        "not-sure": "Belum yakin",
      },
      setupServices: {
        "pt-pma": "Pendirian PT PMA",
        "local-pt": "Pendirian PT Lokal",
        "nib-oss": "NIB & OSS",
        "virtual-office": "Kantor Virtual",
        "not-sure": "Belum yakin",
      },
      purposes: {
        tourism: "Wisata",
        "visiting-family-or-friends": "Mengunjungi keluarga atau teman",
        "attending-an-exhibition-or-event": "Menghadiri pameran atau acara",
        "business-visit-no-employment": "Kunjungan bisnis (tanpa bekerja)",
        "investment-or-company-setup": "Investasi atau pendirian perusahaan",
        work: "Bekerja",
        "something-else": "Lainnya",
      },
      contactMethods: { email: "Email", phone: "Telepon", whatsapp: "WhatsApp" },
      travelServices: {
        "ticket-hotel": "Tiket & Hotel",
        "tour-package": "Paket Tur",
        "airport-transfer": "Antar-Jemput Bandara",
        "travel-guide": "Pemandu Wisata",
        combination: "Gabungan beberapa layanan",
      },
      otherProduct: "Lainnya / tidak ada di daftar",
    },
    validation: {
      confirm: "Mohon centang untuk melanjutkan.",
      choose: "Pilih salah satu untuk “{label}”.",
      enter: "Isi {label} Anda.",
      tooLong: "Maksimal {max} karakter.",
      email: "Masukkan alamat email dengan format nama@contoh.com.",
      phone: "Masukkan nomor telepon berupa angka, spasi, dan kode negara + (opsional).",
      listed: "Pilih salah satu opsi yang tersedia.",
    },
  },

  pay: {
    invoice: {
      metaTitle: "Bayar invoice",
      metaDescription: "Pembayaran online yang aman untuk invoice dari PT. Horra Prime Group.",
      crumb: "Pembayaran",
      title: "Bayar invoice Anda",
      lead: "Bayar dengan aman melalui transfer bank (virtual account), QRIS, dompet digital, atau kartu. Pembayaran diproses oleh Midtrans.",
      notConfiguredTitle: "Pembayaran online belum tersedia",
      notConfiguredText: "Silakan hubungi kami untuk mengatur pembayaran.",
      expiredTitle: "Tautan pembayaran ini sudah kedaluwarsa",
      expiredText: "Invoice {invoice} tidak dapat lagi dibayar dengan tautan ini. Silakan hubungi kami untuk tautan baru.",
      invalidTitle: "Tautan pembayaran tidak dikenali",
      invalidText:
        "Tautan ini tidak lengkap atau telah diubah. Buka tautan persis seperti yang Anda terima, atau minta kami mengirimkannya lagi.",
      sandbox: "Mode sandbox: hanya pembayaran uji coba, tidak ada uang sungguhan yang berpindah.",
      details: "Detail invoice",
      invoice: "Invoice",
      billedTo: "Ditagihkan kepada",
      for: "Untuk",
      validUntil: "Tautan berlaku hingga",
      amountDue: "Jumlah tagihan",
      notOn: "Pembayaran online belum diaktifkan. Silakan hubungi kami untuk mengatur pembayaran invoice ini.",
      secure:
        "Data kartu dan bank dimasukkan di jendela pembayaran Midtrans dan tidak pernah dilihat atau disimpan oleh Horra Prime Group.",
    },
    button: {
      payNow: "Bayar sekarang",
      payAgain: "Bayar lagi",
      preparing: "Menyiapkan pembayaran aman…",
      open: "Jendela pembayaran terbuka…",
      success: {
        title: "Pembayaran diterima",
        body: "Terima kasih. Pembayaran Anda berhasil dan tim kami sudah diberi tahu. Bukti pembayaran dari Midtrans dikirim ke email Anda jika Anda mencantumkannya.",
      },
      pending: {
        title: "Menunggu pembayaran Anda",
        body: "Ikuti instruksi yang ditampilkan (mis. nomor virtual account atau kode QR) untuk menyelesaikan transfer. Kami diberi tahu otomatis setelah dana masuk.",
      },
      closed: {
        title: "Pembayaran belum selesai",
        body: "Jendela pembayaran ditutup sebelum pembayaran selesai. Anda dapat memulai lagi kapan saja.",
      },
      error: {
        title: "Pembayaran tidak dapat dimulai",
        body: "Tidak ada dana yang ditarik. Coba lagi sebentar lagi, atau hubungi kami dan kami akan membantu.",
      },
      alreadyPaid: {
        title: "Invoice ini sudah dibayar",
        body: "Catatan kami menunjukkan tautan pembayaran ini sudah dibayar. Tidak perlu membayar lagi.",
      },
      expired: { title: "Tautan pembayaran ini sudah kedaluwarsa", body: "Silakan hubungi kami untuk tautan baru." },
    },
    finish: {
      metaTitle: "Status pembayaran",
      metaDescription: "Status pembayaran Anda kepada PT. Horra Prime Group.",
      title: "Status pembayaran",
      lead: "Terima kasih telah membayar online di Horra Prime Group.",
      checking: "Memeriksa pembayaran Anda…",
      questions: "Ada pertanyaan? Hubungi tim kami",
      confirmingTitle: "Kami sedang mengonfirmasi pembayaran Anda",
      confirmingText: "Jika Anda sudah menyelesaikan pembayaran, tim kami diberi tahu secara otomatis. Anda tidak perlu membayar lagi.",
      paidTitle: "Pembayaran diterima",
      paidText: "Terima kasih. Pembayaran untuk {ref} berhasil.",
      yourOrder: "pesanan Anda",
      pendingTitle: "Menunggu pembayaran Anda",
      pendingText: "Pembayaran Anda belum masuk. Silakan ikuti instruksi pembayaran yang Anda terima.",
      failedTitle: "Pembayaran belum selesai",
      failedText: "Pembayaran ini tidak berhasil dan tidak ada dana yang ditarik. Anda dapat mencoba lagi dari tautan pembayaran.",
    },
    service: {
      title: "Bayar online",
      intro: "Bayar jumlah sesuai penawaran atau invoice Anda. Anda dapat membayar dengan transfer bank, QRIS, dompet digital, atau kartu.",
      service: "Layanan",
      reference: "Nomor penawaran atau invoice",
      referenceHint: "Sesuai yang tertulis di penawaran dari kami.",
      amount: "Jumlah (IDR)",
      amountHint: "Jumlah persis sesuai penawaran, dalam rupiah.",
      amountInvalid: "Masukkan jumlah rupiah bulat antara 10.000 dan 1.000.000.000.",
      fullName: "Nama lengkap",
      email: "Email",
      phone: "Nomor WhatsApp / telepon",
      notes: "Catatan",
      consent: "Saya menyatakan jumlah ini sesuai dengan penawaran dari Horra Prime Group.",
      submit: "Lanjut ke pembayaran",
      notice: "Belum menerima penawaran? Kirim permintaan dulu — tim kami mengonfirmasi harga sebelum Anda membayar.",
      services: {
        "visa-other": "Layanan visa atau KITAS lainnya",
        "investor-kitas": "KITAS Investor",
        "work-visa": "Visa kerja / izin kerja",
        "pt-pma": "Pendirian PT PMA",
        "local-pt": "Pendirian PT lokal",
        "nib-oss": "NIB & OSS",
        "virtual-office": "Kantor virtual",
        "trade-deposit": "Uang muka pesanan dagang",
        "trade-invoice": "Invoice perdagangan",
        "ticket-hotel": "Tiket & hotel",
        "tour-package": "Paket tur",
        "airport-transfer": "Antar-jemput bandara",
        "travel-guide": "Pemandu wisata",
        other: "Layanan lainnya",
      },
    },
  },
};
