for (let i = 0; i < document.querySelectorAll(".nav-link").length; i++) {
    document.querySelectorAll(".nav-link")[i].onclick = function() {
        scrollAction(i)
    };
}

function scrollAction(navLinkIndex) {
    let aboutMeHeight = document.querySelector("#about-me").clientHeight;
    let technicalSkillsHeight = document.querySelector("#technical-skills").clientHeight;
    let projectsHeight = document.querySelector("#projects").clientHeight;
    
    let distanceToTechnicalSkills = aboutMeHeight + 180;
    let distanceToProjects = distanceToTechnicalSkills + technicalSkillsHeight + 90;
    let distanceToCertifications = distanceToProjects + projectsHeight + 90;

    switch(navLinkIndex) {
        case 0:
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 1:
            window.scrollTo({ top: distanceToTechnicalSkills, behavior: 'smooth' });
            break;
        case 2:
            window.scrollTo({ top: distanceToProjects, behavior: 'smooth' });
            break;
        case 3:
            window.scrollTo({ top: distanceToCertifications, behavior: 'smooth' });
            break;
    }
}

const allSectionsNavLink = document.querySelectorAll("#mobile-nav .navbar-nav .nav-item .nav-link");

function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id == "about-me") {
                allSectionsNavLink[0].classList.add("active");
            } else if (entry.target.id == "technical-skills") {
                allSectionsNavLink[1].classList.add("active");
            } else if (entry.target.id == "projects") {
                allSectionsNavLink[2].classList.add("active");
            } else if (entry.target.id == "certifications") {
                allSectionsNavLink[3].classList.add("active");
            }
        } else {
            if (entry.target.id == "about-me") {
                allSectionsNavLink[0].classList.remove("active");
            } else if (entry.target.id == "technical-skills") {
                allSectionsNavLink[1].classList.remove("active");
            } else if (entry.target.id == "projects") {
                allSectionsNavLink[2].classList.remove("active");
            } else if (entry.target.id == "certifications") {
                allSectionsNavLink[3].classList.remove("active");
            }
        }
    });
}

const observer = new IntersectionObserver(callback, {
    threshold: [0.1, 0.25, 0.5],
});

const allSections = [
    document.querySelector("#about-me"),
    document.querySelector("#technical-skills"),
    document.querySelector("#projects"),
    document.querySelector("#certifications")
];

allSections.forEach(section => {
    observer.observe(section);
})