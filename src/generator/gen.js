import axios from "axios";

export function generatePuzzleJSON(diff) {
    const options = {
    method: 'GET',
    url: 'https://sudoku-generator1.p.rapidapi.com/sudoku/generate',
    params: {difficulty: diff},
    headers: {
        'X-RapidAPI-Key': '2138fedc77msh0d37375d64802d5p130230jsn41094285e5fe',
        'X-RapidAPI-Host': 'sudoku-generator1.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
};