'use client';

import { useState } from 'react';

export default function AddSymptomForm({ onAdd }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    symptom: '',
    causes: '',
    category: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.symptom.trim() || !formData.causes.trim() || !formData.category.trim()) {
      setError('Bitte alle Felder ausfüllen.');
      return;
    }

    const newSymptom = {
      id: Date.now(),
      symptom: formData.symptom.trim(),
      causes: formData.causes.split(',').map(c => c.trim()).filter(c => c),
      category: formData.category.trim()
    };

    onAdd(newSymptom);
    setFormData({ symptom: '', causes: '', category: '' });
    setError('');
    setIsOpen(false);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (error) setError('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          + Neues Symptom hinzufügen
        </button>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Neues Symptom erstellen
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Symptom *
              </label>
              <input
                type="text"
                value={formData.symptom}
                onChange={(e) => handleChange('symptom', e.target.value)}
                placeholder="z.B. Motor springt nicht an"
                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Ursachen (kommagetrennt) *
              </label>
              <textarea
                value={formData.causes}
                onChange={(e) => handleChange('causes', e.target.value)}
                placeholder="z.B. Batterie leer, Defekte Zündkerzen, Kraftstoffpumpe defekt"
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Kategorie *
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => handleChange('category', e.target.value)}
                placeholder="z.B. Motor, Fahrwerk, Elektronik"
                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            {error && (
              <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                {error}
              </p>
            )}
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Hinzufügen
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setFormData({ symptom: '', causes: '', category: '' });
                  setError('');
                }}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Abbrechen
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
