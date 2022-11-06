import { getDatabase, set, ref, remove, onValue } from 'firebase/database';
import firebaseApp from './firebase';

const database = getDatabase(firebaseApp);

class JournalRepository {
  syncJournals(userId, onUpdate) {
    const journalRef = ref(database, `${userId}/journals`);

    onValue(journalRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });

    // return () => journalRef.off();
  }
  saveJournal(userId, journal) {
    set(ref(database, `${userId}/journals/${journal.key}`), journal);
  }

  deleteJournal(userId, journal) {
    remove(ref(database, `${userId}/journals/${journal.key}`));
  }
}

export default JournalRepository;
