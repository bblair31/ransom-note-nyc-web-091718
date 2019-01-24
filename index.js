function buildHistogram(magazine) {
 let magazineHistogram = {}
 magazine.sort()

 for (let i = 0; i < magazine.length; i++) {
   if (magazineHistogram[magazine[i]] !== undefined) {
     magazineHistogram[magazine[i]] += 1
   } else {
     magazineHistogram[magazine[i]] = 1
   }
 }
 return magazineHistogram
}

function canBuildNote(magazine, note) {
 let magazineHistogram = buildHistogram(magazine)
 let sortedNote = note.split("").sort()

 for (let i = 0; i < sortedNote.length; i++) {
   if (!!magazineHistogram[sortedNote[i]]) {
     magazineHistogram[sortedNote[i]] -= 1
   } else {
     return false
   }
 }
 return true
}
