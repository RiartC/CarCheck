export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🚗 SymptoCar
          </h1>
          <h2 className="text-2xl text-gray-700 dark:text-gray-300">
            Haftungsausschluss & Nutzungsbedingungen
          </h2>
        </header>

        {/* Content */}
        <main className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              ⚠️ Wichtiger Haftungsausschluss
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Die SymptoCar-App dient ausschließlich zu Informations- und Bildungszwecken. 
              Die bereitgestellten Diagnosen, Ursachen und Empfehlungen basieren auf allgemeinen 
              Informationen und KI-generierten Inhalten und stellen keine professionelle Fahrzeugdiagnose dar.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              🔧 Keine Ersatz für professionelle Diagnose
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Die App kann und soll NICHT die Diagnose durch eine qualifizierte Fachwerkstatt ersetzen. 
              Bei Problemen mit Ihrem Fahrzeug empfehlen wir dringend:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Konsultieren Sie einen zertifizierten KFZ-Mechaniker</li>
              <li>Lassen Sie Ihr Fahrzeug in einer Fachwerkstatt untersuchen</li>
              <li>Verlassen Sie sich nicht ausschließlich auf diese App für sicherheitsrelevante Entscheidungen</li>
              <li>Bei kritischen Problemen (Bremsen, Lenkung, etc.) sofort Fachpersonal kontaktieren</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              🚫 Keine Haftung
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Die Entwickler und Betreiber von SymptoCar übernehmen keinerlei Haftung für:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-3">
              <li>Schäden am Fahrzeug, die durch die Nutzung der App oder deren Informationen entstehen</li>
              <li>Folgeschäden oder Unfälle aufgrund fehlerhafter oder unvollständiger Diagnosen</li>
              <li>Finanzielle Verluste durch unnötige Reparaturen oder übersehene Probleme</li>
              <li>Gesundheitsschäden oder Personenschäden jeglicher Art</li>
              <li>Datenverlust oder technische Probleme bei der Nutzung der App</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              🤖 KI-generierte Inhalte
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Die App nutzt KI-basierte Algorithmen zur Generierung von Diagnosen. Diese können:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-3">
              <li>Ungenau oder fehlerhaft sein</li>
              <li>Nicht alle möglichen Ursachen berücksichtigen</li>
              <li>Für Ihr spezifisches Fahrzeugmodell nicht zutreffend sein</li>
              <li>Sich auf veraltete oder generische Informationen stützen</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              📚 Bildungszweck
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Diese App wurde im Rahmen eines Bildungsprojekts entwickelt und dient primär 
              zu Lern- und Demonstrationszwecken. Sie ist nicht als kommerzielle Diagnose-Software gedacht.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              ✅ Nutzung auf eigenes Risiko
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Durch die Nutzung dieser App erklären Sie sich damit einverstanden, dass:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-3">
              <li>Sie die App auf eigenes Risiko nutzen</li>
              <li>Sie die Verantwortung für alle Handlungen tragen, die Sie aufgrund der App-Informationen durchführen</li>
              <li>Sie verstehen, dass die App keine Garantie für Richtigkeit oder Vollständigkeit bietet</li>
              <li>Sie im Zweifelsfall immer professionelle Hilfe in Anspruch nehmen</li>
            </ul>
          </section>

          <section className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-200 mb-2">
              ⚡ Sicherheitshinweis
            </h3>
            <p className="text-yellow-800 dark:text-yellow-300 leading-relaxed">
              Bei sicherheitsrelevanten Problemen (Bremsen, Lenkung, Airbag-Warnungen, etc.) 
              fahren Sie NICHT weiter und kontaktieren Sie SOFORT eine Werkstatt oder den Pannendienst!
            </p>
          </section>

          <section className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Letzte Aktualisierung: Januar 2026
            </p>
            <a 
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Zurück zur App
            </a>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© 2026 SymptoCar - Entwickelt von Riart Çekaj & Fabian Ott</p>
        </footer>
      </div>
    </div>
  );
}
