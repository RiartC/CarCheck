// Lokale Datenbank für Symptome und Diagnosen
export const symptomsDatabase = [
  {
    id: 1,
    symptom: "Auto zieht nach links",
    causes: [
      "Spureinstellung falsch",
      "Reifendruck ungleich",
      "Bremsen hängen",
      "Defektes Fahrwerksteil"
    ],
    category: "Fahrwerk"
  },
  {
    id: 2,
    symptom: "Motor springt nicht an",
    causes: [
      "Batterie leer",
      "Defekte Zündkerzen",
      "Kraftstoffpumpe defekt",
      "Anlasser kaputt"
    ],
    category: "Motor"
  },
  {
    id: 3,
    symptom: "Unruhiger Leerlauf",
    causes: [
      "Verschmutzte Zündkerzen",
      "Luftmassenmesser defekt",
      "Defekte Motorlager",
      "Undichte Ansaugung"
    ],
    category: "Motor"
  },
  {
    id: 4,
    symptom: "Bremse quietscht",
    causes: [
      "Abgenutzte Bremsbeläge",
      "Verschmutzte Bremsscheiben",
      "Fehlende Schmierung",
      "Lose Bremssattel"
    ],
    category: "Bremsen"
  },
  {
    id: 5,
    symptom: "Klimaanlage kühlt nicht",
    causes: [
      "Kältemittel zu wenig",
      "Defekter Kompressor",
      "Verstopfter Filter",
      "Elektrischer Defekt"
    ],
    category: "Klimaanlage"
  },
  {
    id: 6,
    symptom: "Lichter flackern",
    causes: [
      "Schwache Batterie",
      "Defekte Lichtmaschine",
      "Wackelkontakt",
      "Korrodierte Anschlüsse"
    ],
    category: "Elektronik"
  },
  {
    id: 7,
    symptom: "Lenkung schwergängig",
    causes: [
      "Niedriger Servoölstand",
      "Defekte Servopumpe",
      "Verschlissene Lenkgetriebe",
      "Falsche Reifengröße"
    ],
    category: "Lenkung"
  },
  {
    id: 8,
    symptom: "Öl-Kontrollleuchte leuchtet",
    causes: [
      "Zu wenig Motoröl",
      "Defekter Öldrucksensor",
      "Verstopfter Ölfilter",
      "Defekte Ölpumpe"
    ],
    category: "Motor"
  },
  {
    id: 9,
    symptom: "Auto ruckelt beim Beschleunigen",
    causes: [
      "Verschmutzte Zündkerzen",
      "Defekte Zündspule",
      "Probleme mit Einspritzdüsen",
      "Luftmassenmesser defekt"
    ],
    category: "Motor"
  },
  {
    id: 10,
    symptom: "Kühlwasser-Temperatur zu hoch",
    causes: [
      "Zu wenig Kühlmittel",
      "Defekter Thermostat",
      "Kühler verstopft",
      "Wasserpumpe defekt"
    ],
    category: "Kühlung"
  },
  {
    id: 11,
    symptom: "Batterie entlädt sich schnell",
    causes: [
      "Alte Batterie",
      "Lichtmaschine defekt",
      "Stromfresser im Standby",
      "Kurzschluss im System"
    ],
    category: "Elektronik"
  },
  {
    id: 12,
    symptom: "Kupplung rutscht",
    causes: [
      "Verschlissene Kupplungsscheibe",
      "Defekte Druckplatte",
      "Öl auf Kupplungsbelag",
      "Falsch eingestelltes Kupplungspedal"
    ],
    category: "Antrieb"
  },
  {
    id: 13,
    symptom: "Getriebe schaltet schwer",
    causes: [
      "Zu wenig Getriebeöl",
      "Verschlissene Synchronringe",
      "Defekte Kupplung",
      "Schaltgestänge falsch eingestellt"
    ],
    category: "Antrieb"
  },
  {
    id: 14,
    symptom: "Auspuff raucht blau",
    causes: [
      "Motor verbrennt Öl",
      "Verschlissene Kolbenringe",
      "Defekte Ventildichtungen",
      "Turbolader undicht"
    ],
    category: "Motor"
  },
  {
    id: 15,
    symptom: "Auspuff raucht schwarz",
    causes: [
      "Zu fettes Gemisch",
      "Defekte Einspritzdüsen",
      "Luftfilter verstopft",
      "Lambdasonde defekt"
    ],
    category: "Motor"
  },
  {
    id: 16,
    symptom: "Scheibenwischer schmieren",
    causes: [
      "Alte Wischerblätter",
      "Verschmutzte Scheibe",
      "Falsche Einstellung der Wischer",
      "Beschädigte Wischerblätter"
    ],
    category: "Komfort"
  },
  {
    id: 17,
    symptom: "ABS-Leuchte brennt",
    causes: [
      "Defekter ABS-Sensor",
      "Verschmutzter Sensor",
      "Fehler im ABS-Steuergerät",
      "Sicherung durchgebrannt"
    ],
    category: "Bremsen"
  },
  {
    id: 18,
    symptom: "Airbag-Warnleuchte leuchtet",
    causes: [
      "Sensordefekt",
      "Fehler im Steuergerät",
      "Kontaktprobleme unter dem Sitz",
      "Defekter Gurtstraffer"
    ],
    category: "Sicherheit"
  },
  {
    id: 19,
    symptom: "Türschloss klemmt",
    causes: [
      "Schlossmechanismus verschmutzt",
      "Fehlende Schmierung",
      "Türschloss vereist",
      "Defekter Schließzylinder"
    ],
    category: "Karosserie"
  },
  {
    id: 20,
    symptom: "Kraftstoffverbrauch zu hoch",
    causes: [
      "Fahrstil zu sportlich",
      "Zu niedriger Reifendruck",
      "Defekte Lambdasonde",
      "Luftfilter verschmutzt"
    ],
    category: "Motor"
  },
  {
    id: 21,
    symptom: "Automatikgetriebe schaltet ruckartig",
    causes: [
      "Zu wenig Getriebeöl",
      "Verschmutztes ATF-Öl",
      "Defektes Steuergerät",
      "Verschlissene Kupplungen"
    ],
    category: "Antrieb"
  },
  {
    id: 22,
    symptom: "Servolenkung heult",
    causes: [
      "Zu wenig Servoöl",
      "Luft im Servosystem",
      "Defekte Servopumpe",
      "Verschlissener Keilriemen"
    ],
    category: "Lenkung"
  },
  {
    id: 23,
    symptom: "Standheizung funktioniert nicht",
    causes: [
      "Defekte Glühkerze",
      "Kraftstoffzufuhr unterbrochen",
      "Sicherung defekt",
      "Steuergerät defekt"
    ],
    category: "Komfort"
  },
  {
    id: 24,
    symptom: "Scheinwerfer beschlagen von innen",
    causes: [
      "Undichte Scheinwerfergehäuse",
      "Defekte Entlüftung",
      "Riss im Glas",
      "Dichtung porös"
    ],
    category: "Beleuchtung"
  },
  {
    id: 25,
    symptom: "Auto vibriert bei hoher Geschwindigkeit",
    causes: [
      "Räder unwuchtig",
      "Defekte Stoßdämpfer",
      "Verschlissene Radlager",
      "Unwucht in der Kardanwelle"
    ],
    category: "Fahrwerk"
  }
];

// Synonyme für besseres Matching
const synonyms = {
  'startet': ['springt', 'geht', 'läuft'],
  'springt': ['startet', 'geht', 'läuft'],
  'zieht': ['driftet', 'lenkt'],
  'quietscht': ['quietschen', 'kreischt', 'kreischen'],
  'kühlt': ['kühlen', 'kalt'],
  'flackern': ['flackert', 'blinken', 'blinkt'],
  'schwergängig': ['schwer', 'hart', 'steif'],
  'leuchtet': ['brennt', 'an', 'blinkt']
};

// Helper-Funktion zum Normalisieren von Suchbegriffen
function normalizeSearchTerm(text) {
  return text.toLowerCase()
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ß/g, 'ss')
    .trim();
}

// Helper-Funktion zum Suchen von Symptomen mit Synonym-Unterstützung
export function findSymptomByKeyword(keyword) {
  if (!keyword || keyword.trim() === '') {
    return [];
  }
  
  const searchNormalized = normalizeSearchTerm(keyword);
  const searchWords = searchNormalized.split(/\s+/).filter(w => w.length > 2);
  
  return symptomsDatabase.filter(item => {
    const symptomNormalized = normalizeSearchTerm(item.symptom);
    const categoryNormalized = normalizeSearchTerm(item.category);
    const causesNormalized = item.causes.map(c => normalizeSearchTerm(c)).join(' ');
    
    // Kombiniere alle durchsuchbaren Texte
    const searchableText = `${symptomNormalized} ${categoryNormalized} ${causesNormalized}`;
    
    // Prüfe ob mindestens ein wichtiges Wort (oder Synonym) gefunden wird
    return searchWords.some(searchWord => {
      // Direktes Match
      if (searchableText.includes(searchWord)) {
        return true;
      }
      
      // Synonym-Match
      if (synonyms[searchWord]) {
        return synonyms[searchWord].some(synonym => searchableText.includes(synonym));
      }
      
      return false;
    });
  });
}

// Helper-Funktion zum Abrufen aller Symptome
export function getAllSymptoms() {
  return symptomsDatabase;
}

// Helper-Funktion zum Abrufen eines einzelnen Symptoms
export function getSymptomById(id) {
  return symptomsDatabase.find(item => item.id === parseInt(id));
}
