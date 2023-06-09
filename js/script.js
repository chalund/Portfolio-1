const aboutSection = document.querySelector(".about");
const workSection = document.querySelector(".project");
const contact = document.querySelector(".contact_me");


function scrollToSection(about) {
    // Retrieve the section element using the provided sectionClass
    const section = document.querySelector(about);
    // Scroll to the section smoothly
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(project) {
    // Retrieve the section element using the provided sectionClass
    const section = document.querySelector(project);
    // Scroll to the section smoothly
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(contact_me) {
    // Retrieve the section element using the provided sectionClass
    const section = document.querySelector(contact_me);
    // Scroll to the section smoothly
    section.scrollIntoView({ behavior: 'smooth' });
}

