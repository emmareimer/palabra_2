// TODO: Assign variables from the DOM
var chosenWord = document.getElementById("chosen-word");
var wordOfTheDayBtn = document.getElementById("word-of-day");
var selectButton = document.getElementById("select-button");
var wordContainer = document.querySelector(".word-container");
var headingForResult = document.getElementById("definition");
var displayContainer = document.getElementById("displayContainer");
var similarContainer = document.getElementById("similar-container");

// Date at the top of the page
document.getElementById("date").textContent = moment().format("MMMM Do YYYY");

// TODO: Assign other variables
var storedWords = [];

// function displayPastWord(word) {
// } //end of displayPastWord function

function getWordofDay() {
  // clear previous data
  chosenWord.textContent = "";
  headingForResult.textContent = "";
  displayContainer.textContent = "";
  let today = new Date();
  var curDay = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
  // TODO: Fetch random word form random word API
  axios.get(`/api/word/${curDay}`).then(function (response) {
    // Sets the word of the day to the DOM
    console.log(response);
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
  var key = "ca17d58e-66c7-41a6-a5c6-589cfe4e0342";
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch(
    "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/" +
      rword +
      "?key=" +
      key,
    requestOptions
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      // if statement to evaluate data - else if it is a string already
      if (typeof data[0] != typeof "string") {
        var similarOne = data[0].meta.syns[0][0];
        var similarTwo = data[0].meta.syns[0][1];
        var similarThree = data[0].meta.syns[0][2];
        let newHeading = document.createElement("div");
        newHeading.setAttribute("id", "definition");
        newHeading.textContent = "";
        displayContainer.appendChild(newHeading);
        similarContainer.textContent = `${similarOne}, ${similarTwo}, ${similarThree}`;
      } else {
        var oneWorder = data[0];
        var wordTwo = data[1];
        var wordThree = data[2];
        let newHeading = document.createElement("div");
        newHeading.setAttribute("id", "definition");
        newHeading.textContent = "";
        displayContainer.appendChild(newHeading);
        similarContainer.textContent = `${oneWorder},  ${wordTwo}, ${wordThree}`;
      }
    })
    .catch((error) => console.log("error", error));
} //End of Thesarus Function

// THIS FUNCTION PINGS THE DICTIONARY
function defintion(rword) {
  var word = rword;
  console.log(word);
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch(
    "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" +
      word +
      "?key=579eae0a-3a35-44ce-b657-5006082e2ec0",
    requestOptions
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      // if statement to evaluate data if string then else
      if (typeof data[0] != typeof "string") {
        var gotMeta = data[0].shortdef[0];
        headingForResult.textContent = "";
        displayContainer.textContent = gotMeta;
        let article = data[0].fl;
        console.log(article);
        let artHead = document.createElement("div");
        artHead.setAttribute("id", "article");
        artHead.textContent = `| ${article} | `;
        displayContainer.appendChild(artHead);
        console.log(data);
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

// Get from local storage and display to the table in the html framework
// function getWords() {
//   var words = localStorage.getItem("words");
//   words = JSON.parse(words);

//   var wordDiv = document.createElement("div");
//   wordDiv.textContent = words;
//   wordContainer.appendChild(wordDiv);
// }

// Get archived word
function archiveWords() {
  for (let i = 1; i < 6; i++) {
    let pastDate = document.getElementById("past-date-" + i);
    let pastWord = document.getElementById(`past-word-` + [i]);
    // let pastNote = document.getElementById(`past-note-` + [i]);
    let date = moment().subtract({ days: i });

    let today = new Date();
    var curDay = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    );

    axios.get(`/api/word/${curDay - i}`).then(function (response) {
      // Sets the word of the day to the DOM
      console.log(typeof response.data.word);
      pastWord = response.data.word;
      pastNote = response.data.note || null;
    });

    pastDate.textContent = date.format("LL");
    pastWord.textContent = pastWord;
    pastNote.textContent = pastNote;
  }
}
// call function on page load
getWordofDay();
archiveWords();
// event listener for go button
// selectButton.addEventListener("click", displayPastWord); **********change the listener to the past words similar to an activity with a clickable alphabet in like week 3-6 or so
