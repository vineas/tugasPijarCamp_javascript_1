// // nomer 1
const biodata = {
    name: "Alvienas Yandika",
    age: 24,
    hobbies: ["olahraga", "makan", "game"],
    isMarried: false,
    schoolList: [
        {
            name: "SDN Pasir Gombong 04",
            yearIn: 2004,
            yearOut: 2010,
            major: null
        },
        {
            name: "SMPN 2 Cikarang Utara",
            yearIn: 2010,
            yearOut: 2013,
            major: null
        },
        {
            name: "SMAN 2 Cikarang Utara",
            yearIn: 2013,
            yearOut: 2016,
            major: "IPA"
        },
        {
            name: "UIN SGD Bandung",
            yearIn: 2016,
            yearOut: 2022,
            major: "Teknik Informatika"
        }
    ],
    skills: [
        {
            skillName: "Programming",
            level: "Beginner"
        },
        {
            skillName: "Design",
            level: "Advanced"
        }
    ],
    interestCoding: true
}
console.log(biodata)

// // nomer 2
const grade = (nilaiMTK, nilaiBahasaindonesia, nilaiBahasainggris, nilaiIPA) => {
    if (typeof nilaiMTK !== "number" || typeof nilaiBahasaindonesia !== "number" || typeof nilaiBahasainggris !== "number" || typeof nilaiIPA !== "number") {
        console.log("Harus number")
        return
    }
    else {
        const jumlah = nilaiMTK + nilaiBahasaindonesia + nilaiBahasainggris + nilaiIPA;
        const nilairata = jumlah / 4;
        const gradeUN =
            nilairata >= 90 && nilairata <= 100 ? "A" :
                nilairata >= 80 && nilairata <= 89 ? "B" :
                    nilairata >= 70 && nilairata <= 79 ? "C" :
                        nilairata >= 60 && nilairata <= 69 ? "D" :
                            nilairata >= 0 && nilairata <= 59 ? "E" : "gagal memuat";
        console.log(`Rata-rata nilai: ${nilairata}`);
        console.log(`Grade: ${gradeUN}`);

    }
}

grade(81, 80,71,90)

// nomer 3
const printSegitiga = 5;
if (typeof printSegitiga !== "number") {
    console.log("Harus number")
}
else {
    let hasil
    for (let i = printSegitiga; i >= 1; i--) {
        hasil = ""
        for (let j = 1; j <= i; j++) {
            hasil += j;
        }
        console.log(hasil)
    }
}

// nomer 4 a
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

// spread operator
let datasaya = {
    ...data,
    name: "Alvienas Yandika",
    email: "alvienasyandika@gmail.com",
    hobi: ["olahraga", "makan", "dengar musik"]
}
console.log(datasaya);

// nomer 4 b destructuring
const { street, city } = data.address
console.log(`Street: ${street}`);
console.log(`City: ${city}`);