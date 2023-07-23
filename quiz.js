// dışarıdan sorular listeni alıyoruz.
function Quiz(sorular) {
    this.sorular = sorular;
    // sorular içerisindeki ilk soruyu getirecek
    this.soruIndex = 0;
    this.dogruCevapSayisi = 0;
 }

 // Quiz içerisindeki sorular içerisinden o anki indexli olan soruyu getirir.
Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}