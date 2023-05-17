
import { WINE_PAIRING_NOTES } from "@/data/wine-pairing-notes"

function WinePairingNotes() {


  return (
    <section>

        <h2>Wine Pairing Notes</h2>
        <ul>
            {WINE_PAIRING_NOTES.map((note) => (
                <li key={note.title}>
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                </li>
            ))}
        </ul>



    </section>
  )
}

export default WinePairingNotes