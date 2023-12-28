const axios = require('axios');

async function convertCurrency(amount) {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/INR');
    const rate = response.data.rates.VND;
    return amount * rate;
}

convertCurrency(1) // Số lượng Rupee bạn muốn chuyển đổi
    .then(amountInVND => console.log(`Số tiền sau khi chuyển đổi: ${amountInVND} VND`))
    .catch(error => console.error(error));