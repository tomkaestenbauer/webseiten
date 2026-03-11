const fs = require('fs');
const path = require('path');

module.exports = function() {
  const paareDir = path.join(__dirname, '../hochzeiten/paare');
  
  // Prüfe ob Verzeichnis existiert
  if (!fs.existsSync(paareDir)) {
    console.log('Paare-Verzeichnis existiert nicht, erstelle leeres Array');
    return [];
  }
  
  // Lese alle JSON-Dateien
  const files = fs.readdirSync(paareDir).filter(file => file.endsWith('.json'));
  
  if (files.length === 0) {
    console.log('Keine Paare-JSON-Dateien gefunden');
    return [];
  }
  
  // Parse und sammle die Daten
  const paare = files.map(file => {
    const filePath = path.join(paareDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    try {
      const data = JSON.parse(content);
      console.log(`✓ Geladen: ${file} (${data.brautVorname} & ${data.braeutigamVorname})`);
      return data;
    } catch (error) {
      console.error(`✗ Fehler beim Parsen von ${file}:`, error.message);
      return null;
    }
  }).filter(Boolean); // Entferne null-Werte
  
  console.log(`\nInsgesamt ${paare.length} Hochzeits-Landingpage(s) werden generiert.\n`);
  
  return paare;
};
