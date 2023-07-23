// butonları herseferinde document query olarak çağırmak yerine onları bir değişkene tanımlayıp o değişkenleri çağırmak daha kullanışlı
function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.option_list= document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
    this.time_text = document.querySelector(".time_text"),
    this.time_seconds = document.querySelector(".time_seconds"),
    this.time_line = document.querySelector(".time_line")
}
 // dışarıdan aldığı soru objesine göre listeleme yapar.
 UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;;
    let options = '';

// döngü dinamik olarak soruların seçeneklerini alır
    for(let cevap in soru.cevapSecenekleri) {
        options += 
            `
                <div class="option"> 
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
    }
    // document komutu ile soruları ve tüm seçenekleri çektik ve üzerinde dolanma kodu yazdık

    

    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;

    const option =this.option_list.querySelectorAll(".option");

    // optionslara tıklayınca event ekleme işlemi
    for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

// kaç soru içerisinden kaçıncı soruda olunduğunu gösterir.
UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

// skor bilgisini gösterir.
UI.prototype.skoruGoster = function(toplamSoru, dogruCevap) {
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag
}