import { render, screen, fireEvent } from '@testing-library/react';
import SymptomForm from '@/components/SymptomForm';

describe('SymptomForm', () => {
  // Positiver Test: Erfolgreiche Eingabe und Absenden
  test('Given: Nutzer gibt "Auto zieht nach links" ein, When: Er klickt auf "Diagnose anzeigen", Then: onSearch wird mit dem Symptom aufgerufen', () => {
    // Given: Mock-Funktion für onSearch
    const mockOnSearch = jest.fn();
    render(<SymptomForm onSearch={mockOnSearch} />);
    
    const input = screen.getByPlaceholderText(/z.B. Auto zieht nach links/i);
    const button = screen.getByText(/Diagnose anzeigen/i);
    
    // When: Nutzer gibt Symptom ein und klickt auf Button
    fireEvent.change(input, { target: { value: 'Auto zieht nach links' } });
    fireEvent.click(button);
    
    // Then: onSearch wurde mit dem richtigen Wert aufgerufen
    expect(mockOnSearch).toHaveBeenCalledWith('Auto zieht nach links');
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });

  // Negativer Test: Leeres Eingabefeld
  test('Given: Das Eingabefeld ist leer, When: Nutzer klickt auf "Diagnose anzeigen", Then: Die App zeigt die Fehlermeldung "Bitte ein Symptom eingeben." an', () => {
    // Given: Leere Eingabe
    const mockOnSearch = jest.fn();
    render(<SymptomForm onSearch={mockOnSearch} />);
    
    const button = screen.getByText(/Diagnose anzeigen/i);
    
    // When: Nutzer klickt auf Button ohne etwas einzugeben
    fireEvent.click(button);
    
    // Then: Fehlermeldung wird angezeigt
    const errorMessage = screen.getByText(/Bitte ein Symptom eingeben/i);
    expect(errorMessage).toBeInTheDocument();
    
    // Then: onSearch wurde NICHT aufgerufen
    expect(mockOnSearch).not.toHaveBeenCalled();
  });

  // Zusätzlicher Test: Fehlermeldung verschwindet beim Tippen
  test('Given: Fehlermeldung wird angezeigt, When: Nutzer beginnt zu tippen, Then: Fehlermeldung verschwindet', () => {
    // Given: Fehlermeldung vorhanden
    const mockOnSearch = jest.fn();
    render(<SymptomForm onSearch={mockOnSearch} />);
    
    const input = screen.getByPlaceholderText(/z.B. Auto zieht nach links/i);
    const button = screen.getByText(/Diagnose anzeigen/i);
    
    fireEvent.click(button);
    expect(screen.getByText(/Bitte ein Symptom eingeben/i)).toBeInTheDocument();
    
    // When: Nutzer beginnt zu tippen
    fireEvent.change(input, { target: { value: 'Motor' } });
    
    // Then: Fehlermeldung ist verschwunden
    expect(screen.queryByText(/Bitte ein Symptom eingeben/i)).not.toBeInTheDocument();
  });

  // Zusätzlicher Test: Leerzeichen am Anfang/Ende werden ignoriert
  test('Given: Nutzer gibt "  Motor springt nicht an  " ein (mit Leerzeichen), When: Er klickt auf "Diagnose anzeigen", Then: Eingabe wird akzeptiert', () => {
    // Given: Eingabe mit Leerzeichen
    const mockOnSearch = jest.fn();
    render(<SymptomForm onSearch={mockOnSearch} />);
    
    const input = screen.getByPlaceholderText(/z.B. Auto zieht nach links/i);
    const button = screen.getByText(/Diagnose anzeigen/i);
    
    // When: Nutzer gibt Text mit Leerzeichen ein
    fireEvent.change(input, { target: { value: '  Motor springt nicht an  ' } });
    fireEvent.click(button);
    
    // Then: onSearch wurde aufgerufen (trim wird intern gemacht)
    expect(mockOnSearch).toHaveBeenCalled();
  });
});
