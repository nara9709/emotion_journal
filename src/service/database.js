import { getDatabase, ref, set } from 'firebase/database';
import firebaseApp from './firebase';

const database = getDatabase(firebaseApp);

class HandleDatabase {
  writeUserData(userId, journal) {
    const key = journal.key;
    set(ref(database, `journal/${userId}/${key}`), {
      key: journal.key,
      date: journal.date,
      title: journal.title,
      content: journal.content,
      url: journal.url,
      emotion: journal.emotion,
      imageName: journal.imageName,
    });
  }
}

export default HandleDatabase;
