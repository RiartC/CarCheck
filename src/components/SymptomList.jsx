'use client';

import { useState } from 'react';

export default function SymptomList({ symptoms, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ symptom: '', causes: '', category: '' });
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  // Extrahiere alle verfügbaren Kategorien
  const categories = ['Alle', ...new Set(symptoms.map(s => s.category))].sort();

  // Filtere Symptome nach ausgewählter Kategorie
  const filteredSymptoms = selectedCategory === 'Alle' 
    ? symptoms 
    : symptoms.filter(s => s.category === selectedCategory);

  const handleEditClick = (symptom) => {
    setEditingId(symptom.id);
    setEditForm({
      symptom: symptom.symptom,
      causes: symptom.causes.join(', '),
      category: symptom.category
    });
  };

  const handleSaveEdit = (id) => {
    const updatedSymptom = {
      id,
      symptom: editForm.symptom,
      causes: editForm.causes.split(',').map(c => c.trim()).filter(c => c),
      category: editForm.category
    };
    onEdit(updatedSymptom);
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({ symptom: '', causes: '', category: '' });
  };

  if (!symptoms || symptoms.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p className="text-gray-600 dark:text-gray-400 text-center">
          Noch keine Symptome vorhanden.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Alle Symptome ({filteredSymptoms.length})
        </h2>
        
        {/* Kategoriefilter */}
        <div className="flex items-center gap-2">
          <label htmlFor="category-filter" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Kategorie:
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {filteredSymptoms.map((symptom) => (
        <div 
          key={symptom.id} 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
        >
          {editingId === symptom.id ? (
            // Edit Mode
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Symptom
                </label>
                <input
                  type="text"
                  value={editForm.symptom}
                  onChange={(e) => setEditForm({ ...editForm, symptom: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Ursachen (kommagetrennt)
                </label>
                <textarea
                  value={editForm.causes}
                  onChange={(e) => setEditForm({ ...editForm, causes: e.target.value })}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Kategorie
                </label>
                <input
                  type="text"
                  value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleSaveEdit(symptom.id)}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
                >
                  Speichern
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition-colors"
                >
                  Abbrechen
                </button>
              </div>
            </div>
          ) : (
            // View Mode
            <>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {symptom.symptom}
                  </h3>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    {symptom.category}
                  </span>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEditClick(symptom)}
                    className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm transition-colors"
                    aria-label={`Bearbeiten ${symptom.symptom}`}
                  >
                    Bearbeiten
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mögliche Ursachen:
                </h4>
                <ul className="space-y-1">
                  {symptom.causes.map((cause, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 ml-4">
                      • {cause}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
