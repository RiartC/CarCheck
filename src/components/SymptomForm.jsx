'use client';

import { useState } from 'react';

export default function SymptomForm({ onSearch }) {
  const [symptom, setSymptom] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validierung: Eingabefeld darf nicht leer sein
    if (!symptom.trim()) {
      setError('Bitte ein Symptom eingeben.');
      return;
    }
    
    setError('');
    onSearch(symptom);
  };

  const handleChange = (e) => {
    setSymptom(e.target.value);
    if (error) setError(''); // Fehler zurücksetzen beim Tippen
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label 
            htmlFor="symptom-input" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Was ist das Problem mit Ihrem Auto?
          </label>
          <input
            id="symptom-input"
            type="text"
            value={symptom}
            onChange={handleChange}
            placeholder="z.B. Auto zieht nach links"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            aria-describedby={error ? "error-message" : undefined}
          />
          {error && (
            <p 
              id="error-message" 
              className="mt-2 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Diagnose anzeigen
        </button>
      </form>
    </div>
  );
}
