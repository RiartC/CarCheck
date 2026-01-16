'use client';

import { useState, useEffect } from 'react';
import { getAIDiagnosis } from '@/lib/aiService';

export default function DiagnosisResult({ results, searchTerm }) {
  const [aiDiagnosis, setAiDiagnosis] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    if (searchTerm && searchTerm.trim() !== '') {
      setAiLoading(true);
      getAIDiagnosis(searchTerm)
        .then(diagnosis => {
          setAiDiagnosis(diagnosis);
          setAiLoading(false);
        })
        .catch(() => {
          setAiLoading(false);
        });
    } else {
      setAiDiagnosis('');
    }
  }, [searchTerm]);
  // Zeige immer Ergebnisse an, wenn ein Suchbegriff vorhanden ist

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Diagnoseergebnisse
      </h2>
      
      {/* KI-Diagnose */}
      {searchTerm && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-6 border-2 border-purple-200 dark:border-purple-800">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🤖</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-200 mb-2">
                KI-gestützte Diagnose
              </h3>
              {aiLoading ? (
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-700"></div>
                  <span>KI analysiert das Problem...</span>
                </div>
              ) : aiDiagnosis ? (
                <div className="text-purple-800 dark:text-purple-200 leading-relaxed whitespace-pre-line">
                  {aiDiagnosis}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
      
      {/* Datenbank-Ergebnisse */}
      {results && results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Gefundene Symptome in der Datenbank:
          </h3>
          {results.map((result) => (
        <div 
          key={result.id} 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {result.symptom}
            </h3>
            <span className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
              {result.category}
            </span>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mögliche Ursachen:
            </h4>
            <ul className="space-y-2">
              {result.causes.map((cause, index) => (
                <li 
                  key={index} 
                  className="flex items-start"
                >
                  <svg 
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{cause}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
        </div>
      )}
      
      {/* Keine Datenbank-Ergebnisse Hinweis */}
      {(!results || results.length === 0) && searchTerm && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
          <p className="text-blue-800 dark:text-blue-200">
            ℹ️ Keine passenden Einträge in der Symptom-Datenbank gefunden. Die KI-Diagnose oben kann Ihnen trotzdem weiterhelfen.
          </p>
        </div>
      )}
      
      {/* Initiale Nachricht */}
      {!searchTerm && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Geben Sie ein Symptom ein, um eine KI-gestützte Diagnose zu erhalten.
          </p>
        </div>
      )}
    </div>
  );
}
