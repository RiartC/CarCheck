// KI-Service für Auto-Diagnose

// Gefahrenstufen
const DANGER_LEVELS = {
  CRITICAL: '🔴 KRITISCH - Sofort anhalten!',
  HIGH: '🟠 HOCH - Bald Werkstatt aufsuchen',
  MEDIUM: '🟡 MITTEL - Zeitnah prüfen lassen',
  LOW: '🟢 NIEDRIG - Bei Gelegenheit prüfen'
};

// Spezifische Auto-Schlüsselwörter (eindeutig fahrzeugbezogen)
const CAR_SPECIFIC_KEYWORDS = [
  // Fahrzeugteile
  'motor', 'bremse', 'lenkung', 'motoröl', 'klimaanlage', 'reifen', 'rad',
  'kupplung', 'getriebe', 'auspuff', 'autobatterie', 'zündung', 'anlasser',
  'ölfilter', 'luftfilter', 'windschutzscheibe', 'rückspiegel', 'scheinwerfer', 
  'rücklicht', 'blinker', 'hupe', 'scheibenwischer', 'katalysator', 'turbo', 
  'kühlmittel', 'servolenkung', 'stoßdämpfer', 'achse', 'differential',
  'keilriemen', 'zahnriemen', 'bremsscheibe', 'bremsbelag', 'bremssattel',
  'spurstange', 'lenkgetriebe', 'radlager', 'lenkrad',
  
  // Fahrzeugbegriffe
  'auto', 'wagen', 'fahrzeug', 'pkw', 'kfz', 'kraftfahrzeug',
  
  // Auto-spezifische Orte/Services
  'werkstatt', 'autowerkstatt', 'tüv', 'inspektion', 'ölwechsel',
  
  // Kraftstoffe
  'benzin', 'diesel', 'kraftstoff', 'tanken', 'tankstelle'
];

// Prüft ob die Eingabe Auto-bezogen ist
function isCarRelated(text) {
  const textLower = text.toLowerCase()
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ß/g, 'ss');
  
  // Akzeptiere NUR Eingaben, die mindestens ein spezifisches Auto-Schlüsselwort enthalten
  return CAR_SPECIFIC_KEYWORDS.some(keyword => textLower.includes(keyword));
}

// Simulierte KI-Antworten für Demo (wenn kein API-Key vorhanden)
const mockAIResponses = {
  'motor': {
    causes: ['Defekte Batterie', 'Verschlissene Zündkerzen', 'Kraftstoffpumpe defekt', 'Anlasser defekt'],
    danger: DANGER_LEVELS.HIGH,
    advice: 'Basierend auf Ihrer Beschreibung zum Motor sollten Sie zunächst die Batteriespannung prüfen und die Zündkerzen inspizieren. Wenn der Motor nicht startet, kann das zu Liegenbleiben führen.'
  },
  'bremse': {
    causes: ['Abgenutzte Bremsbeläge', 'Verschmutzte Bremsscheiben', 'Defekte Bremssattel', 'Niedriger Bremsflüssigkeitsstand'],
    danger: DANGER_LEVELS.CRITICAL,
    advice: 'Bei Bremsproblemen ist höchste Vorsicht geboten! Quietschende Geräusche deuten oft auf abgenutzte Bremsbeläge hin. Fahren Sie vorsichtig zur nächsten Werkstatt - Bremsprobleme sind SICHERHEITSRELEVANT!'
  },
  'lenkung': {
    causes: ['Niedriger Servoölstand', 'Defekte Servopumpe', 'Verschlissene Spurstangen', 'Defektes Lenkgetriebe'],
    danger: DANGER_LEVELS.HIGH,
    advice: 'Probleme mit der Lenkung sind ernst zu nehmen. Überprüfen Sie den Servoölstand und achten Sie auf ungewöhnliche Geräusche beim Lenken. Lassen Sie dies zeitnah professionell prüfen.'
  },
  'öl': {
    causes: ['Zu wenig Motoröl', 'Defekter Öldrucksensor', 'Verstopfter Ölfilter', 'Defekte Ölpumpe'],
    danger: DANGER_LEVELS.CRITICAL,
    advice: 'Wenn die Öl-Kontrollleuchte leuchtet, SOFORT anhalten! Prüfen Sie den Ölstand mit dem Ölmessstab. Fahren Sie NICHT weiter, wenn zu wenig Öl vorhanden ist - das führt zu schweren Motorschäden!'
  },
  'klimaanlage': {
    causes: ['Zu wenig Kältemittel', 'Defekter Kompressor', 'Verstopfter Innenraumfilter', 'Elektrischer Defekt'],
    danger: DANGER_LEVELS.LOW,
    advice: 'Wenn die Klimaanlage nicht kühlt, ist das unangenehm aber nicht gefährlich. Häufigste Ursache ist zu wenig Kältemittel. Eine Klimawartung in der Werkstatt kann das Problem beheben.'
  },
  'licht': {
    causes: ['Schwache Batterie', 'Defekte Lichtmaschine', 'Wackelkontakt', 'Korrodierte Anschlüsse'],
    danger: DANGER_LEVELS.MEDIUM,
    advice: 'Flackernde Lichter deuten oft auf elektrische Probleme hin. Überprüfen Sie die Batterie und Lichtmaschine. Auch korrodierte Anschlüsse können die Ursache sein. Bei Nachtfahrten besonders gefährlich!'
  },
  'lüftung': {
    causes: ['Defekter Gebläsemotor', 'Verstopfter Innenraumfilter', 'Defekter Gebläsewiderstand', 'Elektrischer Defekt'],
    danger: DANGER_LEVELS.LOW,
    advice: 'Wenn die Lüftung nicht richtig funktioniert, ist das meist nicht gefährlich. Häufigste Ursache ist ein verstopfter Innenraumfilter oder ein defekter Gebläsemotor. Bei Gelegenheit prüfen lassen.'
  }
};

/**
 * Generiert eine KI-basierte Diagnose für ein Auto-Symptom
 * @param {string} symptom - Das beschriebene Symptom
 * @returns {Promise<string>} - Die KI-generierte Diagnose
 */
export async function getAIDiagnosis(symptom) {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  
  // Wenn kein API-Key vorhanden ist, verwende Mock-Antworten
  if (!apiKey || apiKey === 'your-api-key-here') {
    return getMockAIResponse(symptom);
  }
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Du bist ein KFZ-Experte und hilfst bei der Diagnose von Auto-Problemen. Gib präzise, hilfreiche und verständliche Diagnosen auf Deutsch. Halte deine Antworten auf 2-3 Sätze.'
          },
          {
            role: 'user',
            content: `Ein Auto hat folgendes Problem: "${symptom}". Was könnte die Ursache sein und was sollte man tun?`
          }
        ],
        max_tokens: 200,
        temperature: 0.7
      })
    });
    
    if (!response.ok) {
      throw new Error('API-Anfrage fehlgeschlagen');
    }
    
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Fehler bei KI-Anfrage:', error);
    return getMockAIResponse(symptom);
  }
}

/**
 * Generiert eine Mock-KI-Antwort basierend auf Schlüsselwörtern
 * @param {string} symptom - Das beschriebene Symptom
 * @returns {Promise<string>} - Eine simulierte KI-Antwort
 */
function getMockAIResponse(symptom) {
  return new Promise((resolve) => {
    // Simuliere eine kleine Verzögerung für Realismus
    setTimeout(() => {
      // Prüfe zuerst ob die Eingabe Auto-bezogen ist
      if (!isCarRelated(symptom)) {
        const offTopicResponse = `❌ Falsches Thema!\n\n📋 Ihre Eingabe: "${symptom}"\n\nDiese App ist speziell für Auto-Diagnosen entwickelt.\n\n💡 Beispiele für Auto-Probleme:\n• "Motor startet nicht"\n• "Bremse quietscht"\n• "Auto zieht nach links"\n• "Klimaanlage kühlt nicht"\n\nBitte geben Sie ein Symptom oder Problem ein, das mit Ihrem Fahrzeug zu tun hat! 🚗`;
        resolve(offTopicResponse);
        return;
      }
      
      const symptomLower = symptom.toLowerCase();
      let responseData;
      
      // Finde passende Mock-Antwort basierend auf Schlüsselwörtern
      for (const [keyword, response] of Object.entries(mockAIResponses)) {
        if (symptomLower.includes(keyword)) {
          responseData = response;
          break;
        }
      }
      
      // Wenn keine spezifische Antwort gefunden, generiere generische
      if (!responseData) {
        responseData = generateGenericResponse(symptom);
      }
      
      // Formatiere die strukturierte Antwort
      const formattedResponse = `${responseData.danger}\n\n📋 Mögliche Ursachen:\n${responseData.causes.map((cause, i) => `${i + 1}. ${cause}`).join('\n')}\n\n💡 Empfehlung:\n${responseData.advice}`;
      
      resolve(formattedResponse);
    }, 800);
  });
}

/**
 * Generiert eine kontextbezogene generische Antwort mit Struktur
 * @param {string} symptom - Das beschriebene Symptom
 * @returns {object} - Eine strukturierte Antwort mit Ursachen, Gefahr und Ratschlag
 */
function generateGenericResponse(symptom) {
  const symptomLower = symptom.toLowerCase();
  
  // Kategorisierung basierend auf Schlüsselwörtern
  const categories = {
    sounds: ['quietscht', 'knarrt', 'klappert', 'pfeift', 'brummt', 'rattert', 'schleift', 'geräusch', 'laut'],
    electrical: ['licht', 'lampe', 'radio', 'display', 'elektronik', 'batterie', 'strom'],
    driving: ['zieht', 'wackelt', 'vibriert', 'schüttelt', 'ruckelt', 'lenkt', 'fährt'],
    fluids: ['leckt', 'tropft', 'öl', 'wasser', 'flüssigkeit', 'kühlmittel'],
    starting: ['startet', 'springt', 'anlasser', 'zündet'],
    temperature: ['heiß', 'überhitzt', 'qualm', 'rauch', 'dampf', 'temperatur'],
    performance: ['leistung', 'beschleunigt', 'langsam', 'ruckelt', 'stottert']
  };
  
  let detectedCategory = null;
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => symptomLower.includes(keyword))) {
      detectedCategory = category;
      break;
    }
  }
  
  // Strukturierte Antworten basierend auf erkannter Kategorie
  const responses = {
    sounds: {
      causes: ['Lose Teile', 'Verschlissene Lager', 'Abgenutzte Riemen', 'Defekte Dämpfer'],
      danger: DANGER_LEVELS.MEDIUM,
      advice: `Bei ungewöhnlichen Geräuschen wie "${symptom}" sollten Sie zunächst lokalisieren, woher das Geräusch kommt. Achten Sie darauf, wann es auftritt (beim Beschleunigen, Bremsen, Lenken). Eine Werkstattinspektion ist empfehlenswert.`
    },
    
    electrical: {
      causes: ['Schwache Batterie', 'Defekte Sicherungen', 'Lockere Kabelverbindungen', 'Defekte Lichtmaschine'],
      danger: DANGER_LEVELS.MEDIUM,
      advice: `Elektrische Probleme wie "${symptom}" können von verschiedenen Quellen stammen. Prüfen Sie zunächst die Batteriespannung (sollte über 12V sein) und die Sicherungen. Bei anhaltenden Problemen sollte die Lichtmaschine getestet werden.`
    },
    
    driving: {
      causes: ['Falscher Reifendruck', 'Ungleicher Reifenverschleiß', 'Defekte Spureinstellung', 'Verschlissene Stoßdämpfer'],
      danger: DANGER_LEVELS.HIGH,
      advice: `Wenn das Fahrzeug "${symptom}", kann das an der Bereifung, dem Fahrwerk oder der Spureinstellung liegen. Prüfen Sie den Reifendruck und kontrollieren Sie die Reifen. Bei Fahrstörungen zeitnah zur Werkstatt!`
    },
    
    fluids: {
      causes: ['Undichte Dichtungen', 'Rissige Schläuche', 'Defekte Pumpe', 'Überfüllung'],
      danger: DANGER_LEVELS.CRITICAL,
      advice: `Bei Flüssigkeitsaustritt wie "${symptom}" ist schnelles Handeln wichtig! Identifizieren Sie die Farbe (schwarz=Öl, grün=Kühlmittel, rot=ATF). Bei größeren Lecks NICHT weiterfahren!`
    },
    
    starting: {
      causes: ['Leere Batterie', 'Defekter Anlasser', 'Zündungsprobleme', 'Kraftstoffmangel'],
      danger: DANGER_LEVELS.HIGH,
      advice: `Startprobleme wie "${symptom}" haben oft mit der Batterie, dem Anlasser oder der Zündung zu tun. Prüfen Sie die Batteriespannung und reinigen Sie die Pole. Achten Sie auf Klickgeräusche beim Startversuch.`
    },
    
    temperature: {
      causes: ['Niedriger Kühlmittelstand', 'Defekter Thermostat', 'Undichte Schläuche', 'Defekte Wasserpumpe'],
      danger: DANGER_LEVELS.CRITICAL,
      advice: `Überhitzungsprobleme wie "${symptom}" sind EXTREM ERNST! Halten Sie SOFORT an, wenn die Temperaturanzeige im roten Bereich ist. Lassen Sie den Motor abkühlen, bevor Sie den Kühlmittelbehälter öffnen!`
    },
    
    performance: {
      causes: ['Verschmutzter Luftfilter', 'Defekte Zündkerzen', 'Kraftstoffpumpenprobleme', 'Verstopfte Einspritzdüsen'],
      danger: DANGER_LEVELS.MEDIUM,
      advice: `Leistungsprobleme wie "${symptom}" können verschiedene Ursachen haben. Ein Diagnosegerät in der Werkstatt kann Fehlercodes auslesen und die genaue Ursache eingrenzen.`
    }
  };
  
  if (detectedCategory && responses[detectedCategory]) {
    return responses[detectedCategory];
  }
  
  // Komplett generische Antwort für unbekannte Symptome
  return {
    causes: ['Verschleiß', 'Defekte Komponente', 'Wartungsbedarf', 'Einstellungsprobleme'],
    danger: DANGER_LEVELS.MEDIUM,
    advice: `Bei dem Problem "${symptom}" empfehle ich: Beobachten Sie genau, wann es auftritt (beim Starten, Fahren, Bremsen) und unter welchen Bedingungen. Prüfen Sie die Grundlagen wie Ölstand, Kühlmittel, Reifendruck und Batterie. Falls das Problem weiterhin besteht, sollte eine Fachwerkstatt das Fahrzeug diagnostizieren.`
  };
}
