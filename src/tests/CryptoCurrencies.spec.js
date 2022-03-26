/* eslint-disable no-undef */
beforeAll(() => {
    return console.log("Iniciando testes");
});


describe('Testing the CryptoCurrencies Component',() => {
    
    
    it('should have data node inside data node', async () => {
        
        const axios = require('axios');
        const response = await axios('https://www.coinbase.com/api/v2/assets/search?base=BRL&country=BR&include_prices=true&limit=50');
        
        expect(response.data.data).toBeTruthy();
    });

    it('should length be 50', async () => {
        
        const axios = require('axios');
        const response = await axios('https://www.coinbase.com/api/v2/assets/search?base=BRL&country=BR&include_prices=true&limit=50');

        expect(response.data.data.length).toEqual(50);

    });

    it('should percentage variant be a number', async() => {

        const axios = require('axios');
        const response = await axios('https://www.coinbase.com/api/v2/assets/search?base=BRL&country=BR&include_prices=true&limit=50');

        expect(response.data.data[0].percent_change).toEqual(expect.any(Number));

      
    });

    it('should latest value be a number', async () => {
        const axios = require('axios');
        const response = await axios('https://www.coinbase.com/api/v2/assets/search?base=BRL&country=BR&include_prices=true&limit=50');

        expect(response.data.data[0].latest).toEqual(expect.any(String));
    });
});