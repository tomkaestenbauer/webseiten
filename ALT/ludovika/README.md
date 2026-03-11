# LUDOVIKA Website

Fotografie-Portfolio Website für Tom Kästenbauer / LUDOVIKA

## Übersicht

Diese Website präsentiert die fotografischen Arbeiten von LUDOVIKA (Tom Kästenbauer) in drei Bereichen:
- **LUDOVIKA** - Mehrgenerationenporträts & Familienarbeiten
- **Hochzeiten** - Beobachtete Nähe
- **Firmen & Ateliers** - Arbeit & Identität

## Technologie

- **Reines HTML/CSS/JavaScript** - keine Build-Tools erforderlich
- **Responsive Design** - optimiert für alle Geräte
- **Minimalistisches Design** - elegant und zeitlos
- **DSGVO-konform** - mit Cookie-Banner und vollständigen Rechtstexten

## Struktur

```
ludovika/
├── index.html              # Startseite
├── ludovika.html           # LUDOVIKA Projektseite
├── hochzeiten.html         # Hochzeiten Seite
├── firmen.html             # Firmen Seite
├── ueber-tom.html          # Über Tom Seite
├── kontakt.html            # Kontakt Seite
├── impressum.html          # Impressum
├── datenschutz.html        # Datenschutzerklärung
├── agb.html                # AGB
├── assets/
│   ├── css/styles.css      # Haupt-Stylesheet
│   ├── js/main.js          # JavaScript
│   └── images/             # Bilder (siehe BILDER-ANLEITUNG.md)
└── favicon.ico             # Website-Icon
```

## Deployment auf Netlify

### Methode 1: Drag & Drop (Einfachste Methode)
1. Öffnen Sie https://app.netlify.com
2. Ziehen Sie den gesamten `ludovika` Ordner in das Drop-Bereich
3. Fertig! Die Website ist live

### Methode 2: Git-basiertes Deployment
1. Initialisieren Sie ein Git-Repository im `ludovika` Ordner:
   ```bash
   cd ludovika
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Erstellen Sie ein Repository auf GitHub/GitLab

3. Pushen Sie den Code:
   ```bash
   git remote add origin [IHR-REPOSITORY-URL]
   git push -u origin main
   ```

4. Verbinden Sie Netlify mit Ihrem Repository über das Netlify Dashboard

### Wichtige Netlify-Einstellungen
- **Build Command:** (leer lassen)
- **Publish Directory:** `.` (Root)
- **Custom Domain:** ludovika.at (in den Domain-Einstellungen konfigurieren)

## Domain-Setup für ludovika.at

1. In Netlify: "Domain management" → "Add custom domain" → `ludovika.at` eingeben
2. Bei Ihrem Domain-Registrar die DNS-Einträge anpassen:
   - A Record: `@` → `75.2.60.5`
   - CNAME: `www` → `[ihre-netlify-subdomain].netlify.app`
3. SSL-Zertifikat wird automatisch von Netlify erstellt

## Bilder hinzufügen

Siehe `BILDER-ANLEITUNG.md` für Details zu benötigten Bildern und Formaten.

Kurz zusammengefasst:
- Platzieren Sie Ihre Bilder in die entsprechenden Unterordner von `assets/images/`
- Benennen Sie sie exakt wie in den HTML-Dateien referenziert
- Empfohlene Formate: JPG, optimiert für Web

## Anpassungen

### Texte ändern
Alle Texte befinden sich direkt in den HTML-Dateien und können mit jedem Text-Editor bearbeitet werden.

### Farben ändern
Öffnen Sie `assets/css/styles.css` und passen Sie die CSS-Variablen unter `:root` an:
```css
:root {
    --color-primary: #1a1a1a;
    --color-secondary: #4a4a4a;
    /* etc. */
}
```

### Schriftarten ändern
Die aktuellen Schriftarten sind:
- **Überschriften:** Cormorant Garamond (Serif)
- **Fließtext:** Inter (Sans-Serif)

Diese werden von Google Fonts geladen und können in jeder HTML-Datei im `<head>` geändert werden.

## Kontaktformular

Das Kontaktformular wird über kreativ.management eingebunden. 
Der Code ist bereits in `kontakt.html` integriert.

## Browser-Kompatibilität

Die Website funktioniert in allen modernen Browsern:
- Chrome/Edge (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Mobile Browser (iOS Safari, Chrome Mobile)

## Support

Bei Fragen zur Website:
- Technische Fragen: Claude (dieser Chat)
- Inhaltliche Fragen: Tom Kästenbauer

## Lizenz

Alle Inhalte, Texte und Bilder: © 2026 Tom Kästenbauer / LUDOVIKA
Code: Für den Gebrauch durch Tom Kästenbauer lizenziert
