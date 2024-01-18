//  Promises and async/await

// const veriGetir = new Promise((basarili, basarisiz) => {
//     const veriGeldiMi = false;
//     if (veriGeldiMi) {
//         basarili("Verimiz burada");
//     } else {
//         basarisiz("Veriyi alamadik");
//     }
// });

// veriGetir
//     .then((cevap) => console.log("Gelen Cevap: ", cevap))
//     .catch((hata) => console.log("Gelen Hata: ", hata));

const axios = require("axios");

// console.log(axios);

// https://restcountries.eu/rest/v2/all

async function ulkeGetir() {
    // axios
    //     .get("https://restcountries.eu/rest/v2/all")
    //     .then((response) => console.log(response.data[0]))
    //     .catch(err => console.log(err));

    const ulkeListesi = await axios.get("https://restcountries.eu/rest/v2/all");
    
    console.log(ulkeListesi.data[0]);
}

ulkeGetir();