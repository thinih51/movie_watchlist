import db from '$lib/db.js';

export const actions = {
    create: async ({ request }) => {
        // Formulardaten abrufen
        const formData = await request.formData();

        // Daten aus dem Formular extrahieren
        const movie = {
            title: formData.get('name'), // Name-Feld
            year: parseInt(formData.get('year'), 10), // Jahr als Zahl
            length: `${formData.get('length')} Minuten`, // Länge mit Einheit
        };

        // Film in der Datenbank erstellen
        const id = await db.createMovie(movie);

        if (id) {
            return {
                success: true,
                id,
            };
        } else {
            return {
                success: false,
                error: 'Movie could not be created.',
            };
        }
    },
};
