import { render, screen } from '@testing-library/react';
import DiagnosisResult from '@/components/DiagnosisResult';

describe('DiagnosisResult', () => {
  const mockResults = [
    {
      id: 1,
      symptom: 'Auto zieht nach links',
      causes: ['Spureinstellung falsch', 'Reifendruck ungleich', 'Bremsen hängen'],
      category: 'Fahrwerk'
    },
    {
      id: 2,
      symptom: 'Motor springt nicht an',
      causes: ['Batterie leer', 'Defekte Zündkerzen'],
      category: 'Motor'
    }
  ];

  // Positiver Test: Ergebnisse werden angezeigt
  test('Given: Suchergebnisse sind vorhanden, When: Komponente wird gerendert, Then: Alle Symptome und Ursachen werden angezeigt', () => {
    // Given: Mock-Ergebnisse vorhanden
    render(<DiagnosisResult results={mockResults} searchTerm="Auto" />);
    
    // Then: Symptome werden angezeigt
    expect(screen.getByText('Auto zieht nach links')).toBeInTheDocument();
    expect(screen.getByText('Motor springt nicht an')).toBeInTheDocument();
    
    // Then: Kategorien werden angezeigt
    expect(screen.getByText('Fahrwerk')).toBeInTheDocument();
    expect(screen.getByText('Motor')).toBeInTheDocument();
    
    // Then: Ursachen werden angezeigt
    expect(screen.getByText('Spureinstellung falsch')).toBeInTheDocument();
    expect(screen.getByText('Batterie leer')).toBeInTheDocument();
  });

  // Negativer Test: Keine Ergebnisse gefunden
  test('Given: Keine Suchergebnisse gefunden, When: Komponente wird gerendert, Then: Meldung "Keine Ergebnisse gefunden" wird angezeigt', () => {
    // Given: Leere Ergebnisliste
    render(<DiagnosisResult results={[]} searchTerm="XYZ Unbekannt" />);
    
    // Then: Keine-Ergebnisse-Meldung wird angezeigt
    const noResultsMessage = screen.getByText(/Keine Ergebnisse für "XYZ Unbekannt" gefunden/i);
    expect(noResultsMessage).toBeInTheDocument();
  });

  // Zusätzlicher Test: Initiale Anzeige ohne Suche
  test('Given: Keine Suche durchgeführt, When: Komponente wird initial gerendert, Then: Hinweismeldung wird angezeigt', () => {
    // Given: Keine Ergebnisse und kein Suchbegriff
    render(<DiagnosisResult results={[]} searchTerm="" />);
    
    // Then: Initiale Hinweismeldung wird angezeigt
    expect(screen.getByText(/Geben Sie ein Symptom ein, um eine Diagnose zu erhalten/i)).toBeInTheDocument();
  });

  // Zusätzlicher Test: Korrekte Anzahl von Ursachen
  test('Given: Ein Symptom mit mehreren Ursachen, When: Ergebnis wird angezeigt, Then: Alle Ursachen sind sichtbar', () => {
    // Given: Ein einzelnes Ergebnis mit 3 Ursachen
    const singleResult = [mockResults[0]];
    render(<DiagnosisResult results={singleResult} searchTerm="zieht" />);
    
    // Then: Alle 3 Ursachen werden angezeigt
    expect(screen.getByText('Spureinstellung falsch')).toBeInTheDocument();
    expect(screen.getByText('Reifendruck ungleich')).toBeInTheDocument();
    expect(screen.getByText('Bremsen hängen')).toBeInTheDocument();
  });

  // Zusätzlicher Test: Header wird bei Ergebnissen angezeigt
  test('Given: Suchergebnisse vorhanden, When: Komponente wird gerendert, Then: "Diagnoseergebnisse" Header wird angezeigt', () => {
    // Given: Ergebnisse vorhanden
    render(<DiagnosisResult results={mockResults} searchTerm="Auto" />);
    
    // Then: Header wird angezeigt
    expect(screen.getByText('Diagnoseergebnisse')).toBeInTheDocument();
  });
});
