import iepLoad from 'instrumenpoche'

const elt = document.querySelector('#app')
iepLoad(elt, 'https://manuel.sesamath.net/coll_docs/bibliotheque_iep/valide/scr_iep_067.xml')
  .catch(error => console.log(error))
