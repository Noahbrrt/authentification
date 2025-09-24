import PocketBase from 'https://cdnjs.cloudflare.com/ajax/libs/pocketbase/0.26.2/pocketbase.es.mjs';

<<<<<<< HEAD
const PB_URL = "https://authentification.noah-barret.fr:443";
=======
const PB_URL = "http://127.0.0.1:8090";
>>>>>>> 1bbbbd7 (Commit initial)

// Une seule instance PocketBase côté client
export const pb = new PocketBase(PB_URL);

// pb.authStore persiste tout seul dans localStorage
// donc l'utilisateur reste connecté même après refresh
<<<<<<< HEAD
 
=======

>>>>>>> 1bbbbd7 (Commit initial)
