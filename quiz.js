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
    
  }


  function showQuestion(){
    for(let i = 0; i < QuesPartA.length; i++){
        $(".questionBox").append('<div class="Question">Number '+ parseInt(i+1) +'</div>');
        $(".questionBox").append('<div class="Options">');
        QuesPartA[i]['option'].forEach(option => {
            $(".questionBox").append('<span>'+option +' </span><br>');  
        });
        $(".questionBox").append('</div><br>'); // end Options div
    } 
    $(".secondBox").append('<a href="Listening Part A.html" class="btnToPartB">Continue to Part B</a>'); 
};

