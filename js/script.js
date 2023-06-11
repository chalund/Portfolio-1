const aboutSection = document.querySelector(".about");
const workSection = document.querySelector(".project");
const contact = document.querySelector(".contact_me");

function scrollToSection(about) {
    const section = document.querySelector(about);
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(project) {
    const section = document.querySelector(project);
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(contact_me) {
    const section = document.querySelector(contact_me);
    section.scrollIntoView({ behavior: 'smooth' });
}