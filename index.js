const translations = [
    {
        "en": "SELECT",
        "de": "WÄHLE"
    },
    {
        "en": "DISTINCT",
        "de": "DISTINKT"
    },
    {
        "en": "INTO",
        "de": "IN"
    },
    {
        "en": "TOP",
        "de": "OBERE"
    },
    {
        "en": "PERCENT",
        "de": "PROZENT"
    },
    {
        "en": "FROM",
        "de": "VON"
    },
    {
        "en": "WHERE",
        "de": "WO"
    },
    {
        "en": "AS",
        "de": "ALS"
    },
    {
        "en": "WHERE",
        "de": "WO"
    },
    {
        "en": "AND",
        "de": "UND"
    },
    {
        "en": "OR",
        "de": "ODER"
    },
    {
        "en": "BETWEEN",
        "de": "ZWISCHEN"
    },
    {
        "en": "LIKE",
        "de": "WIE"
    },
    {
        "en": "IN",
        "de": "IN"
    },
    {
        "en": "IS",
        "de": "IST"
    },
    {
        "en": "NULL",
        "de": "LEER"
    },
    {
        "en": "NOT",
        "de": "NICHT"
    },
    {
        "en": "CREATE",
        "de": "ERSTELLE"
    },
    {
        "en": "DATABASE",
        "de": "DATENBANK"
    },
    {
        "en": "TABLE",
        "de": "TABELLE"
    },
    {
        "en": "INDEX",
        "de": "INDEX"
    },
    {
        "en": "VIEW",
        "de": "ANSICHT"
    },
    {
        "en": "DROP",
        "de": "WERFE"
    },
    {
        "en": "UPDATE",
        "de": "AKTUALISIERE"
    },
    {
        "en": "DELETE",
        "de": "LÖSCHE"
    },
    {
        "en": "ALTER",
        "de": "ÄNDERE"
    },
    {
        "en": "ADD",
        "de": "HINZUFÜGEN"
    },
    {
        "en": "COLUMN",
        "de": "SPALTE"
    },
    {
        "en": "UPDATE",
        "de": "AKTUALISIERE"
    },
    {
        "en": "SET",
        "de": "SETZE"
    },
    {
        "en": "VALUES",
        "de": "WERTE"
    },
    {
        "en": "INSERT",
        "de": "EINFÜGEN"
    },
    {
        "en": "INTO",
        "de": "IN"
    },
    {
        "en": "DEFAULT",
        "de": "STANDARD"
    },
    {
        "en": "PRIMARY",
        "de": "PRIMÄR"
    },
    {
        "en": "KEY",
        "de": "SCHLÜSSEL"
    },
    {
        "en": "FOREIGN",
        "de": "FREMDSCHLÜSSEL"
    },
    {
        "en": "REFERENCES",
        "de": "BEZIEHT"
    },
    {
        "en": "UNIQUE",
        "de": "EINDEUTIG"
    },
    {
        "en": "CHECK",
        "de": "ÜBERPRÜFE"
    },
    {
        "en": "CONSTRAINT",
        "de": "BEGRÄNSUNG"
    },
    {
        "en": "AUTO_INCREMENT",
        "de": "AUTO_ERHÖHEN"
    },
    {
        "en": "ORDER",
        "de": "REIHENFOLGE"
    },
    {
        "en": "BY",
        "de": "BEI"
    },
    {
        "en": "SUM",
        "de": "SUMME"
    },
    {
        "en": "AVG",
        "de": "DURCHSCHNITT"
    },
    {
        "en": "MIN",
        "de": "MINIMUM"
    },
    {
        "en": "MAX",
        "de": "MAXIMUM"
    },
    {
        "en": "COUNT",
        "de": "ANZAHL"
    },
    {
        "en": "GROUP",
        "de": "GRUPPIERE"
    },
    {
        "en": "HAVING",
        "de": "HABEN"
    },
    {
        "en": "JOIN",
        "de": "VERBINDE"
    },
    {
        "en": "DESC",
        "de": "ABSTEIGEND"
    },
    {
        "en": "OFFSET",
        "de": "VERSATZ"
    },
    {
        "en": "FETCH",
        "de": "HOLE"
    },
    {
        "en": "INNER",
        "de": "INNER"
    },
    {
        "en": "OUTER",
        "de": "ÄUSSER"
    },
    {
        "en": "LEFT",
        "de": "LINKS"
    },
    {
        "en": "RIGHT",
        "de": "RECHTS"
    },
    {
        "en": "FULL",
        "de": "VOLL"
    },
    {
        "en": "EXISTS",
        "de": "EXISTIERT"
    },
    {
        "en": "GRANT",
        "de": "GEBE"
    },
    {
        "en": "REVOKE",
        "de": "ENTNEHME"
    },
    {
        "en": "SAVEPOINT",
        "de": "SICHERUNGSPUNKT"
    },
    {
        "en": "ROLLBACK",
        "de": "ZURÜCKSETZEN"
    },
    {
        "en": "COMMIT",
        "de": "BESTÄTIGE"
    },
    {
        "en": "TRUNCATE",
        "de": "LEERE"
    },
    {
        "en": "MERGE",
        "de": "VEREINIGE"
    },
    {
        "en": "WHEN",
        "de": "WENN"
    },
    {
        "en": "THEN",
        "de": "DANN"
    },
    {
        "en": "ELSE",
        "de": "SONST"
    },
    {
        "en": "CASE",
        "de": "FALL"
    },
    {
        "en": "END",
        "de": "ENDE"
    }
]


/*
// Translate a sql statement from german to englisch
// @param {string} statement - The sql statement to translate
// @returns {string} - The translated sql statement
*/
async function translate(statement) {

    // Create a new array with the translated words
    const translatedWords = statement.split(" ").map(word => {

        // Get the word from the the translation list#
        const translation = translations.find(translation => translation.de === word.toUpperCase());

        // Return the translated word
        return translation ? translation.en : word;
    });

    // Return the translated statement
    return translatedWords.join(" ").toString();
}

module.exports = translate;