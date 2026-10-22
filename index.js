const fs = require('fs');

function addition(a, b) {
    return a + b;
}

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/resultat.txt', 'Build CI/CD reussi !');

console.log('Compilation terminee avec succes');

module.exports = { addition };
