// LocalStorage Utility für Persistenz

const STORAGE_KEYS = {
  CUSTOM_SYMPTOMS: 'symptocar_custom_symptoms',
  SEARCH_HISTORY: 'symptocar_search_history',
  LAST_DIAGNOSES: 'symptocar_last_diagnoses'
};

// Benutzerdefinierte Symptome
export function saveCustomSymptoms(symptoms) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_SYMPTOMS, JSON.stringify(symptoms));
  } catch (error) {
    console.error('Fehler beim Speichern der Symptome:', error);
  }
}

export function loadCustomSymptoms() {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CUSTOM_SYMPTOMS);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Fehler beim Laden der Symptome:', error);
    return [];
  }
}

// Suchhistorie
export function addToSearchHistory(searchTerm) {
  if (typeof window === 'undefined' || !searchTerm?.trim()) return;
  try {
    const history = getSearchHistory();
    const trimmedTerm = searchTerm.trim();
    
    // Entferne Duplikate und füge am Anfang hinzu
    const newHistory = [
      trimmedTerm,
      ...history.filter(term => term !== trimmedTerm)
    ].slice(0, 10); // Maximal 10 Einträge
    
    localStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(newHistory));
  } catch (error) {
    console.error('Fehler beim Speichern der Suchhistorie:', error);
  }
}

export function getSearchHistory() {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Fehler beim Laden der Suchhistorie:', error);
    return [];
  }
}

export function clearSearchHistory() {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEYS.SEARCH_HISTORY);
  } catch (error) {
    console.error('Fehler beim Löschen der Suchhistorie:', error);
  }
}

// Letzte Diagnosen
export function saveLastDiagnosis(searchTerm, results, aiDiagnosis) {
  if (typeof window === 'undefined') return;
  try {
    const diagnoses = getLastDiagnoses();
    const newDiagnosis = {
      id: Date.now(),
      searchTerm,
      results,
      aiDiagnosis,
      timestamp: new Date().toISOString()
    };
    
    const newDiagnoses = [
      newDiagnosis,
      ...diagnoses
    ].slice(0, 5); // Maximal 5 Diagnosen
    
    localStorage.setItem(STORAGE_KEYS.LAST_DIAGNOSES, JSON.stringify(newDiagnoses));
  } catch (error) {
    console.error('Fehler beim Speichern der Diagnose:', error);
  }
}

export function getLastDiagnoses() {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.LAST_DIAGNOSES);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Fehler beim Laden der Diagnosen:', error);
    return [];
  }
}

export function clearAllData() {
  if (typeof window === 'undefined') return;
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error('Fehler beim Löschen der Daten:', error);
  }
}
