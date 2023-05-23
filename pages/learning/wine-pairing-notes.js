import { WINE_PAIRING_NOTES } from "@/data/wine-pairing-notes";

import classes from "./wine-pairing-notes.module.css";

function WinePairingNotes() {
  return (
    <section className={classes.winePairingPage}>
      <h2 className={classes.header}>Wine Pairing Notes</h2>
      <ul className={classes.list}>
        {WINE_PAIRING_NOTES.map((note, index) => (
          <li key={note.title} className={classes.listItem}>
            <h3 className={classes.noteHeader}>{index+1}. {note.title}</h3>
            <p className={classes.description}>{note.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WinePairingNotes;
