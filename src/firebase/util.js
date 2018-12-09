
class RealTimeDBUtil {
  add(text) {
    fbRef.push({
      "text" : text,
    });
  }
}

class FireStoreUtil {
  add() {

  }
}

module.exports ={
  firebaseUtil: new RealTimeDBUtil(),
  firestoreUtil: new FireStoreUtil(),
};
