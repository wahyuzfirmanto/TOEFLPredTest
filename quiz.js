let index = 0;

//DAFTAR PERTANYAAN

let QuesPartA = [
  { option: [
        "She doesn't have an appointment",
        "She must live somewhere else",
        "Her apartment isn't far away",
        "Her problem is complicated",
      ],
    answer: 2
  },

  { option: [
     "There's no charge for phone calls",
     "She can call him later if she likes",
     "His phone is out of order too",
     "She can use his phone if she wants",
  ],
    answer: 1
  },
  { option: [
     "It was simpler than he'd thought",
      "It was too hard to solve",
      "He couldn't find it",
      "He solved it even though it was hard",
    ],
    answer: 3
  }
];



//AMBIL SOAL



const audioA = document.getElementById("AudioA");
const playBtn = document.getElementById("PlayBtn");

function playPartA() {
    audioA.play();
    playBtn.style.color = "#777777";
    showQuestion();
    pasangPilihan();
  }



function showQuestion(){
  for(let i = 0; i < 30; i++){
    $(".questionBox").append('<div class="Question"></div><div class="Options"><span></span><span></span><span></span><span></span></div>');
  } //Ini untuk pasang 30 tempat pertanyaan dan pilihan
  $(".secondBox").append('<a href="Listening Part A.html" class="btnToPartB">Continue to Part B</a>'); //ini untuk pasang tombol next
  
  $('.Question').each(function(index){
    $(this).html("Number ");
    $(this).append(index+1);
  }); //Ini untuk menambah nomor soal

 

  };


function pasangPilihan(){
  $('.Options').QuesPartA.forEach(option => {
    $('.Options span').eq(0).text(option[0]);
    $('.Options span').eq(1).text(option[1]);
    $('.Options span').eq(2).text(option[2]);
    $('.Options span').eq(3).text(option[3]);
   });
  }


