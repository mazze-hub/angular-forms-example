import { Component } from '@angular/core';

/**
 * - Baue in der Komponente "password-change" ein entsprechendes Passwort ändern - Formular auf.
 *   Es beinhaltet 3 Eingabefelder (altes Passwort, neues Passwort, neues Passwort wiederholen).
 *   Ferner besteht ein Submit-Button zur Bestätigung des Formulars.
 *
 * - Füge zur erstellten Form entsprechende Validatoren hinzu:
 *  1. Mindestens 6 Zeichen
 *  2. Muss Groß und Kleinbuchstaben enthalten
 *  3. Muss Sonderzeichen enthalten
 *
 *  Zeige dem Nutzer den Zustand der Validatoren unter den Eingabefeldern an.
 *
 * - Bei Klick auf den Submit-Button wird, bei einem gültigen Formular, eine beliebige Konsolen-Ausgabe erstellt.
 *
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms-example';
}
