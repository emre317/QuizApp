// constructor oluşturduk. kaç tane soru varsa o kadar nesne kopyalaması yapıyoruz. ayrı ayrı nesne oluşturmaya göre işimizi daha kolaylaştırı.
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    // değişkenlere sorulara ait değerleri atadık.
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

// her soruya cevabı kontrol et fonksiyonu gönderilmesin (örneğin 200 soru tanımlıyor olsaydık fonksiyonu 200 kere tanımlamamak için) diye tek bir yerden tüm sorular alsın diye ayrı oluşturduk üstteki cons. içine dahil etmedik.
Soru.prototype.cevabiKontrolEt = function(cevap) {
// kullanıcın vereceği cevap doğru mu diye kontrol ediyoruz ona göre return işlemi oluyor.
    return cevap === this.dogruCevap
}

// soru nesnelerine ayrı ayrı isim vermek yerine hepsini bir dizide birleştirip döngüye alarak ekrana bastırabiliriz.
let sorular = [
    new Soru("2022 Dünya Kupasini hangi takim kazanmistir?",  {a:"Fransa",b:"Brezilya",c:"Arjantin",d:"Portekiz"},"c"),
    new Soru("2022 Dünya Kupasinin ilk golünü kim atmistir?",  {a:"Messi",b:"Valencia",c:"Neymar",d:"Ronaldo"},"b"),
    new Soru("2022 Dünya Kupasinin gol krali kim olmuştur?",  {a:"Mbappe",b:"Kane",c:"Richarlison",d:"Alvarez"},"a"),
    new Soru("2022 Dünya Kupasinda hangi takim yari finale çikmiştir ?",  {a:"İngiltere",b:"İspanya",c:"Brezilya",d:"Fas"},"d"),
    new Soru("2022 Dünya Kupasinda hangi takim gruplardan çikamamiştir ?",  {a:"Hirvatistan",b:"İsviçre",c:"Uruguay",d:"Japonya"},"c"),
    new Soru("2022 Dünya Kupasi kaç takimla düzenlenmiştir ?",  {a:"16",b:"24",c:"32",d:"48"},"c"),
    new Soru("2022 Dünya Kupasinda oynamamiştir? ",  {a:"Jesus",b:"Morata",c:"Depay",d:"Benzema"},"d"),
    new Soru("2022 Dünya Kupasi çeyrek finalinde Fransa'ya karşi penalti kaçiran İngiliz futbolcu kimdir?",  {a:"Sterling",b:"Kane",c:"Foden",d:"Saka"},"b")
 ];