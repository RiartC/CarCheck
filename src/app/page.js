'use client';

import { useState, useEffect } from 'react';
import SymptomForm from '@/components/SymptomForm';
import DiagnosisResult from '@/components/DiagnosisResult';
import SymptomList from '@/components/SymptomList';
import AddSymptomForm from '@/components/AddSymptomForm';
import { findSymptomByKeyword, getAllSymptoms } from '@/lib/symptomsData';
import { 
  saveCustomSymptoms, 
  loadCustomSymptoms, 
  addToSearchHistory 
} from '@/lib/storage';

export default function Home() {
  const [diagnosisResults, setDiagnosisResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [customSymptoms, setCustomSymptoms] = useState([]);
  const [activeTab, setActiveTab] = useState('diagnose'); // 'diagnose' oder 'manage'

  // Lade benutzerdefinierte Symptome beim Start
  useEffect(() => {
    const loaded = loadCustomSymptoms();
    setCustomSymptoms(loaded);
  }, []);

  // Speichere benutzerdefinierte Symptome bei Änderungen
  useEffect(() => {
    saveCustomSymptoms(customSymptoms);
  }, [customSymptoms]);

  const handleSearch = (symptom) => {
    setSearchTerm(symptom);
    
    // Speichere in Suchhistorie
    addToSearchHistory(symptom);
    
    const allSymptoms = [...getAllSymptoms(), ...customSymptoms];
    const results = allSymptoms.filter(item => 
      item.symptom.toLowerCase().includes(symptom.toLowerCase()) ||
      item.causes.some(cause => cause.toLowerCase().includes(symptom.toLowerCase())) ||
      item.category.toLowerCase().includes(symptom.toLowerCase())
    );
    setDiagnosisResults(results);
  };

  const handleAddSymptom = (newSymptom) => {
    setCustomSymptoms([...customSymptoms, newSymptom]);
  };

  const handleEditSymptom = (updatedSymptom) => {
    setCustomSymptoms(customSymptoms.map(s => 
      s.id === updatedSymptom.id ? updatedSymptom : s
    ));
  };

  const handleDeleteSymptom = (id) => {
    // Nur benutzerdefinierte Symptome können gelöscht werden
    if (customSymptoms.some(s => s.id === id)) {
      setCustomSymptoms(customSymptoms.filter(s => s.id !== id));
    }
  };

  const allSymptoms = [...getAllSymptoms(), ...customSymptoms];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🚗 SymptoCar
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Auto-Symptom-Diagnose-App
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Finden Sie schnell die Ursache für Ihr Autoproblem
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2 bg-white dark:bg-gray-800 p-1 rounded-lg shadow">
            <button
              onClick={() => setActiveTab('diagnose')}
              className={`flex-1 py-3 px-6 rounded-md font-semibold transition-colors ${
                activeTab === 'diagnose'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Diagnose
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`flex-1 py-3 px-6 rounded-md font-semibold transition-colors ${
                activeTab === 'manage'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Symptome verwalten
            </button>
          </div>
        </div>

        {/* Content */}
        <main>
          {activeTab === 'diagnose' ? (
            <>
              <SymptomForm onSearch={handleSearch} />
              <DiagnosisResult results={diagnosisResults} searchTerm={searchTerm} />
            </>
          ) : (
            <>
              <AddSymptomForm onAdd={handleAddSymptom} />
              <SymptomList 
                symptoms={allSymptoms} 
                onEdit={handleEditSymptom}
              />
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="mb-2">
            Entwickelt von Riart Çekaj & Fabian Ott
          </p>
          <p className="text-xs mb-4 max-w-2xl mx-auto">
            ⚠️ <strong>Haftungsausschluss:</strong> Diese App dient nur zu Informationszwecken. 
            Die bereitgestellten Diagnosen und Empfehlungen sind unverbindlich und ersetzen keine professionelle Werkstattdiagnose. 
            Wir übernehmen keine Haftung für Schäden, die durch die Nutzung dieser Informationen entstehen.
          </p>
          <div className="flex justify-center gap-4 text-sm mb-4">
            <a 
              href="/disclaimer" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Haftungsausschluss
            </a>
            <span>|</span>
            <a 
              href="https://github.com/RiartC/CarCheck" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </div>
          <p className="text-sm">
            © 2026 SymptoCar - Alle Rechte vorbehalten
          </p>
        </footer>
      </div>
    </div>
  );
}
