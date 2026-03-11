// LUDOVIKA – loadData.js
// Liest die JSON-Datei des jeweiligen Paares und befüllt das Template

async function loadData() {
    try {
        // JSON-Datei hat denselben Namen wie die HTML-Datei
        // z.B. sophie-max.html → sophie-max.json
        const currentPage = window.location.pathname
            .split('/').pop()
            .replace('.html', '.json');

        const response = await fetch(currentPage);

        if (!response.ok) {
            console.warn('Keine JSON-Datei gefunden – Platzhalter bleiben sichtbar.');
            return;
        }

        const data = await response.json();

        // Namen
        if (data.names) {
            document.getElementById('names').textContent = data.names;
            document.getElementById('namesShort').textContent = data.names;
            document.getElementById('namesClosing').textContent = data.names;
            document.title = `${data.names} – LUDOVIKA`;
        }

        // Datum
        if (data.date) {
            document.getElementById('date').textContent = data.date;
        }

        // Location
        if (data.location) {
            document.getElementById('location').textContent = data.location;
        }

        // Angebotsnummer
        if (data.offerNumber) {
            document.getElementById('offerNumber').textContent = data.offerNumber;
        }

        // Reservierung bis
        if (data.reservationUntil) {
            document.getElementById('reservationUntil').textContent = data.reservationUntil;
        }

        // Video
        if (data.videoUrl) {
            const container = document.getElementById('videoContainer');
            // Prüfe ob es ein YouTube oder Vimeo Link ist
            if (data.videoUrl.includes('youtube.com') || data.videoUrl.includes('youtu.be')) {
                const videoId = extractYouTubeId(data.videoUrl);
                container.innerHTML = `<iframe 
                    src="https://www.youtube.com/embed/${videoId}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>`;
            } else if (data.videoUrl.includes('vimeo.com')) {
                const videoId = extractVimeoId(data.videoUrl);
                container.innerHTML = `<iframe 
                    src="https://player.vimeo.com/video/${videoId}" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen>
                </iframe>`;
            } else {
                // Direkter Video-Link
                container.innerHTML = `<video controls style="width:100%;height:100%;">
                    <source src="${data.videoUrl}">
                </video>`;
            }
        } else {
            // Kein Video – Platzhalter anzeigen
            document.getElementById('videoContainer').innerHTML = `
                <div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;min-height:300px;background:#1a1a1a;color:#888;font-family:var(--font-sans);font-size:0.9rem;letter-spacing:0.1em;text-transform:uppercase;">
                    Video folgt in Kürze
                </div>`;
        }

    } catch (error) {
        console.error('Fehler beim Laden der Daten:', error);
    }
}

// YouTube ID extrahieren
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Vimeo ID extrahieren
function extractVimeoId(url) {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

// Ausführen wenn Seite geladen
document.addEventListener('DOMContentLoaded', loadData);
