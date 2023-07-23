


 // her defasında Quiz bilgisini sıfırlayacak
 const quiz = new Quiz(sorular);
 const ui = new UI();

 // Start Quiz butonuna tıklanıldığı zaman soru getirme eventi oluşturuyoruz ve soru değiştiriyoruz.
    ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active"); // quizbox kutusunu aktif ederek soruyla beraber gelmesi işlemi
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
 })
// Next Question butonuna işlev atama. Butona tıklayınca sıradaki soruya geçme işlemi
    ui.btn_next.addEventListener("click",function() {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1; // sorunun indexi 1 arttırılır
        clearInterval(counter);
        clearInterval(counterLine); // süre bitimi olduktan sonra yeni soruya geçerken süre belleği temizlenir.
        startTimer(10);
        startTimerLine(); // yeni soruya 10 saniye süre verilir.
        ui.soruGoster(quiz.soruGetir()) // sıradaki soru gösterilir
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
       } else {
            clearInterval(counter);
            clearInterval(counterLine);
            ui.quiz_box.classList.remove("active");
            ui.score_box.classList.add("active"); 
            ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
       }
 })

 // quiz bittikten sonra quit butonuna bastıktan sonraki işlemleri gerçekleştirir.
ui.btn_quit.addEventListener("click", function() {
    window.location.reload(); // sayfayı yeniden yükler
});

// quiz bittikten sonra replay butonuna bastıktan sonra testi yeniden çözmek için gerekli işlemler
ui.btn_replay.addEventListener("click", function() {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0; // önceki çözümdeki doğru cevapları sıfırlar
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});

// soruya cevap verdikten sonra tıklanan seçeneğin doğru olup olmadığını kontrol ediyoruz
function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if (soru.cevabiKontrolEt(cevap)) {
        quiz.dogruCevapSayisi +=1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
    }

    // soruya cevap verdikten sonra başka şıkkın işaretlenmesini önler
for (let i =0 ; i< ui.option_list.children.length; i++){
    ui.option_list.children[i].classList.add("disabled");
}

// soruya cevap verdikten sonra next butonunu aktifleştirir
ui.btn_next.classList.add("show");
}

let counter;
 // başlangıçta süre olarak belirttiğmiz 10 saniyeyi azaltma işlemi
function startTimer(time) {
    counter = setInterval(timer, 1000);
    // 1 saniyede 1 çağırılacak
    function timer() {
        ui.time_seconds.textContent = time;
        time--;

        if(time < 0) {
            // süre negatif olmasın diye o an bellekteki adresi yani counterdaki değeri temizler
            clearInterval(counter);
            
            // saniye 0olunca süre bitti ifadesi yazdırılır.
            ui.time_text.textContent = "Süre Bitti";

            // süre bittikten sonra doğru cevabın ekranda gösterilme işlemi
            let cevap = quiz.soruGetir().dogruCevap;

            // for döngüsü ile her sorunun doğru cevabı ile bütün şıklarla karşılaştırılır. Doğru cevap yeşil zemine boyanır.
        
            for(let option of ui.option_list.children) {
                
                if(option.querySelector("span b").textContent== cevap) {
                   // cevap doğruysa correct etiketi ve icon ekleme işlemi yapıldı.
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                // birden fazla seçenek işaretlenmesin diye.
                option.classList.add("disabled");
            }
            // süre bitiminden sonra yeni soruya geçme butonu
            ui.btn_next.classList.add("show");
        }
    }
}

let counterLine;
function startTimerLine() {
    let line_width = 0;

    counterLine = setInterval(timer,100);

    function timer() {
        line_width += 5;
        ui.time_line.style.width = line_width + "px";

        if(line_width > 549) {
            clearInterval(counterLine);
        }
    }
}