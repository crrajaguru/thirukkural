const { getSections, getChapterGroups, getChapters, getAllChapterGroups, getAllChapters, getKuralByChapter, getSongByNumber, kuralSearch } = require('../dist/lib/es5') ;

console.log(kuralSearch('உலகு'));
console.log(getSongByNumber(1330));
console.log(getKuralByChapter(133));