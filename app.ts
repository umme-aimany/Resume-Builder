
document.getElementById('resumeForm')!.addEventListener('submit', function(event) {
    event.preventDefault();

  
    const name = (document.getElementById('name') as HTMLInputElement).value || getRandomName();
    const email = (document.getElementById('email') as HTMLInputElement).value || getRandomEmail();
    const phone = (document.getElementById('phone') as HTMLInputElement).value || getRandomPhone();
    const aboutMe = (document.getElementById('aboutMe') as HTMLTextAreaElement).value || getRandomAboutMe();
    const education = (document.getElementById('education') as HTMLInputElement).value || getRandomEducation();
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',') || ["HTML", "CSS", "JavaScript"];
    const languages = (document.getElementById('languages') as HTMLInputElement).value.split(',') || ["English", "Spanish"];
    const expertise = (document.getElementById('expertise') as HTMLInputElement).value.split(',') || ["Frontend Development", "UI/UX Design"];
    
 
    const profilePicURL = (document.getElementById('profilePic') as HTMLInputElement).value || "pic3.png";


    document.getElementById('resumeName')!.textContent = name;
    document.getElementById('aboutMeText')!.textContent = aboutMe;
    document.getElementById('contactPhone')!.textContent = `📞 ${phone}`;
    document.getElementById('contactEmail')!.textContent = `✉️ ${email}`;
    
    const languagesList = document.getElementById('languagesList')!;
    languagesList.innerHTML = '';
    languages.forEach(lang => {
        const li = document.createElement('li');
        li.textContent = lang.trim();
        languagesList.appendChild(li);
    });

    const expertiseList = document.getElementById('expertiseList')!;
    expertiseList.innerHTML = '';
    expertise.forEach(exp => {
        const li = document.createElement('li');
        li.textContent = exp.trim();
        expertiseList.appendChild(li);
    });


    const profilePicElement = document.getElementById('profilePicImage') as HTMLImageElement;
    profilePicElement.src = profilePicURL;


    document.getElementById('experience')!.textContent = "Software Developer at Tech Innovators Inc.";


    document.getElementById('educationText')!.textContent = education;

  
    document.getElementById('resumeSection')!.style.display = 'block';
    document.getElementById('resumeForm')!.style.display = 'none';
});


function getRandomName() {
    const names = ["John Doe", "Alice Smith", "Bob Johnson"];
    return names[Math.floor(Math.random() * names.length)];
}

function getRandomEmail() {
    const emails = ["john.doe@example.com", "alice.smith@example.com", "bob.johnson@example.com"];
    return emails[Math.floor(Math.random() * emails.length)];
}

function getRandomPhone() {
    const phones = ["+123-456-7890", "+987-654-3210", "+111-222-3333"];
    return phones[Math.floor(Math.random() * phones.length)];
}

function getRandomAboutMe() {
    const about = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Passionate about coding and building innovative solutions.",
        "A creative problem solver with a love for technology."
    ];
    return about[Math.floor(Math.random() * about.length)];
}

function getRandomEducation() {
    const educations = [
        "ABC University - Computer Science (2023)",
        "XYZ College - Software Engineering (2022)",
        "Tech Institute - Information Technology (2021)"
    ];
    return educations[Math.floor(Math.random() * educations.length)];
}
