
document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value || getRandomName();
    var email = document.getElementById('email').value || getRandomEmail();
    var phone = document.getElementById('phone').value || getRandomPhone();
    var aboutMe = document.getElementById('aboutMe').value || getRandomAboutMe();
    var education = document.getElementById('education').value || getRandomEducation();
    var skills = document.getElementById('skills').value.split(',') || ["HTML", "CSS", "JavaScript"];
    var languages = document.getElementById('languages').value.split(',') || ["English", "Spanish"];
    var expertise = document.getElementById('expertise').value.split(',') || ["Frontend Development", "UI/UX Design"];

    var profilePicURL = document.getElementById('profilePic').value || "pic3.png";
  
    document.getElementById('resumeName').textContent = name;
    document.getElementById('aboutMeText').textContent = aboutMe;
    document.getElementById('contactPhone').textContent = "\uD83D\uDCDE ".concat(phone);
    document.getElementById('contactEmail').textContent = "\u2709\uFE0F ".concat(email);
    var languagesList = document.getElementById('languagesList');
    languagesList.innerHTML = '';
    languages.forEach(function (lang) {
        var li = document.createElement('li');
        li.textContent = lang.trim();
        languagesList.appendChild(li);
    });
    var expertiseList = document.getElementById('expertiseList');
    expertiseList.innerHTML = '';
    expertise.forEach(function (exp) {
        var li = document.createElement('li');
        li.textContent = exp.trim();
        expertiseList.appendChild(li);
    });
  
    var profilePicElement = document.getElementById('profilePicImage');
    profilePicElement.src = profilePicURL;
 
    document.getElementById('experience').textContent = "Software Developer at Tech Innovators Inc.";
   
    document.getElementById('educationText').textContent = education;
  
    document.getElementById('resumeSection').style.display = 'block';
    document.getElementById('resumeForm').style.display = 'none';
});

function getRandomName() {
    var names = ["John Doe", "Alice Smith", "Bob Johnson"];
    return names[Math.floor(Math.random() * names.length)];
}
function getRandomEmail() {
    var emails = ["john.doe@example.com", "alice.smith@example.com", "bob.johnson@example.com"];
    return emails[Math.floor(Math.random() * emails.length)];
}
function getRandomPhone() {
    var phones = ["+123-456-7890", "+987-654-3210", "+111-222-3333"];
    return phones[Math.floor(Math.random() * phones.length)];
}
function getRandomAboutMe() {
    var about = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Passionate about coding and building innovative solutions.",
        "A creative problem solver with a love for technology."
    ];
    return about[Math.floor(Math.random() * about.length)];
}
function getRandomEducation() {
    var educations = [
        "ABC University - Computer Science (2023)",
        "XYZ College - Software Engineering (2022)",
        "Tech Institute - Information Technology (2021)"
    ];
    return educations[Math.floor(Math.random() * educations.length)];
}
