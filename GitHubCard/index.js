
import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get(`https://api.github.com/users/jordanbrewer509`)
  .then(res => {
    htmlMarkup(res.data);
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const cards = document.querySelector('.cards')

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'ehuntwork',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      htmlMarkup(res.data);
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function htmlMarkup(obj) {

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.src = obj.avatar_url;
  cardDiv.appendChild(cardImg);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  cardDiv.appendChild(cardInfo);

  const headingName = document.createElement('h3');
  headingName.classList.add('name');
  headingName.textContent = obj.name;
  cardInfo.appendChild(headingName);

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = obj.login;
  cardInfo.appendChild(userName);

  const locationP = document.createElement('p');
  locationP.textContent = obj.location;
  cardInfo.appendChild(locationP);

  const profileP = document.createElement('p');
  profileP.textContent = 'Profile: '
  cardInfo.appendChild(profileP);

  const linkAddress = document.createElement('a');
  linkAddress.href = obj.html_url;
  linkAddress.textContent = obj.html_url;
  profileP.appendChild(linkAddress);

  const followersCount = document.createElement('p');
  followersCount.textContent = `Followers: ${obj.followers}`;
  cardInfo.appendChild(followersCount);

  const followingCount = document.createElement('p');
  followingCount.textContent = `Following: ${obj.following}`;
  cardInfo.appendChild(followingCount);

  const bioP = document.createElement('p');
  bioP.textContent = obj.bio;
  cardInfo.appendChild(bioP);

  cards.appendChild(cardDiv);
  return cardDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
