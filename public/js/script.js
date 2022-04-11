// Assign variables from the DOM
var chosenWord = document.getElementById("chosen-word");
var wordOfTheDayBtn = document.getElementById("word-of-day");
var selectButton = document.getElementById("select-button");
var wordContainer = document.querySelector(".word-container");
var headingForResult = document.getElementById("definition");
var displayContainer = document.getElementById("displayContainer");
var similarContainer = document.getElementById("similar-container");
var curNote = document.getElementById("current-note");


// Date at the top of the page
document.getElementById("date").textContent = moment().format("MMMM Do YYYY");

// Assign other variables
var storedWords = [];

function getWordofDay() {
  // clear previous data
  chosenWord.textContent = "";
  headingForResult.textContent = "";
  displayContainer.textContent = "";
  let today = new Date();
  var curDay = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
  // Fetch random word form database
  axios.get(`/api/word/${curDay}`).then(function (response) {
    // Sets the word of the day to the DOM
    var randomWord = response.data.word;
    chosenWord.textContent = '" ' + randomWord + ' "';
    chosenWord.setAttribute("data-word", randomWord);
    // Sets word of the day to local storage
    storedWords.push(randomWord);
    localStorage.setItem("words", JSON.stringify(storedWords));
    defintion(randomWord);
    similar(randomWord);
  });
} // End of Get Word of Day function

// THIS FUNCTION PINGS THE THESAURUS
function similar(rword) {
  // clear previous data
  displayContainer.textContent = "";
 fetch(`/api/sim/${rword}`)
    .then((response) => response.json())
    .then(function (data) {
        var similarOne = data.similarOne;
        var similarTwo = data.similarTwo;
        var similarThree = data.similarThree;
        let newHeading = document.createElement("div");
        newHeading.setAttribute("id", "definition");
        newHeading.textContent = "";
        displayContainer.appendChild(newHeading);
        similarContainer.textContent = `${similarOne}, ${similarTwo}, ${similarThree}`;
    })
    .catch((error) => console.log("error", error));
} //End of Thesarus Function

// THIS FUNCTION PINGS THE DICTIONARY
function defintion(rword) {
 
 fetch(`./api/def/${rword}`)
    .then((response) => response.json())
    .then(function (data) {
      // if statement to evaluate data if string then else
      if (typeof data[0] != typeof "string") {
        var gotMeta = data.gotMeta;
        headingForResult.textContent = "";
        displayContainer.textContent = gotMeta;
        let article = data.article;
        let artHead = document.createElement("div");
        artHead.setAttribute("id", "article");
        artHead.textContent = `| ${article} | `;
        displayContainer.appendChild(artHead);
      } else {
        var gotNice = data[0];
        headingForResult.textContent = "";
        displayContainer.textContent = gotNice;
        let article = data[0].fl;
        let artHead = document.createElement("div");
        artHead.setAttribute("id", "article");
        artHead.textContent = `| ${article} | `;
        displayContainer.appendChild(artHead);
      }
    })
    .catch((error) => console.log("error", error));
} //end of Dictionary Function

// Get past words
function pastWords() {
  axios.get(`/api/notes`).then(function (resp) {
    let today = new Date();
    let curDay = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    );
    for (let i = 0; i < resp.data.length; i++) {
      if (curDay == resp.data[i].day) {
        curNote.textContent = resp.data[i];
      } else {
        curNote.textContent = '';
      }
    }
  })

  for (let i = 1; i < 6; i++) {
    let pastDate = document.getElementById("past-date-" + i);
    let pastWord = document.getElementById(`past-word-` + [i]);
    let pastNote = document.getElementById(`past-note-` + [i]);
    let date = moment().subtract({ days: i });

    let today = new Date();
    var curDay = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    );

    let day = curDay - i;

    axios.get(`/api/word/${day}`).then(function (response) {
      archivedWord = response.data.word;
      pastDate.textContent = date.format("LL");
      pastWord.innerHTML = archivedWord;
    });

    axios.get(`/api/notes`).then(function (response) {
      let find = response.data.find((data) => data.day === day);
      if (find) {
        pastNote.textContent = find.note_of_day;
      } else {
        pastNote.textContent = "No note here!";
      }
    });
  }
}

function createNote() {
  let note = document.querySelector("#note").value.trim();
  let today = new Date();
  let curDay = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
  axios
    .post(`/api/notes/`, {
      note_of_day: `${note}`,
      day: `${curDay}`,
    })
    .catch((error) => console.log("error", error));
}

// call function on page load
getWordofDay();
pastWords();
