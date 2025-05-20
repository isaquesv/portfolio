
document.addEventListener("DOMContentLoaded", function () {
    let language = getLanguage();
    const LANGUAGE_SELECT = document.querySelector("#language-select");

    loadPageLanguage(language);

    LANGUAGE_SELECT.querySelector("[value='" + language + "']").setAttribute("selected", true);
    LANGUAGE_SELECT.addEventListener("change", function() {
        let selectedLanguage = LANGUAGE_SELECT.value;
        loadPageLanguage(selectedLanguage);
        changeLanguage(selectedLanguage);
    })
});

// Retorna o idioma atual definido na sessão ou no navegador do usuário
function getLanguage() {
    let storedLanguage = localStorage.getItem("language");

    if (storedLanguage == null) {
        let navigatorLanguage = navigator.language || navigator.userLanguage;

        if (navigatorLanguage.startsWith("pt")) {
            navigatorLanguage = "pt-BR";
        } else {
            navigatorLanguage = "en-US";
        }

        localStorage.setItem("language", navigatorLanguage);
        return navigatorLanguage;
    } else {
        return storedLanguage;
    }
}

// Busca o conteúdo do arquivo .json correspondente ao idioma informado
async function getLanguageContent(language) {
    const LANGUAGE_FILE_PATH = "src/json/" + language + ".json";

    try {
        const response = await fetch(LANGUAGE_FILE_PATH);
        if (!response.ok) {
            throw new Error("Falha ao carregar JSON!");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro inesperado! Não foi possível atualizar o idioma da página: ", error);
        return null;
    }
}

// Atualiza o idioma selecionado na sessão
function changeLanguage(selectedLanguage) {
    localStorage.setItem("language", selectedLanguage);
}

// Carrega o conteúdo do idioma para a página atual e atualiza os textos de acordo com a página informada
async function loadPageLanguage(language) {
    let languageData = await getLanguageContent(language);

    if (languageData != null) {
        updatePageLanguage(languageData);
    }
}

// Atualiza os textos da página inicial com base nos dados do idioma fornecido
function updatePageLanguage(languageData) {
    document.title = languageData.title;

    // Navbar secundária
    const navbarItens = document.querySelectorAll("#mobile-nav .navbar-nav .nav-item");
    navbarItens[0].querySelector(".nav-link").textContent = languageData.navLink1;
    navbarItens[1].querySelector(".nav-link").textContent = languageData.navLink2;
    navbarItens[2].querySelector(".nav-link").textContent = languageData.navLink3;
    navbarItens[3].querySelector(".nav-link").textContent = languageData.navLink4;
    navbarItens[4].querySelector(".nav-link").textContent = languageData.navLink5;
    
    navbarItens[0].querySelector(".nav-link").title = languageData.navLink1Title;
    navbarItens[1].querySelector(".nav-link").title = languageData.navLink2Title;
    navbarItens[2].querySelector(".nav-link").title = languageData.navLink3Title;
    navbarItens[3].querySelector(".nav-link").title = languageData.navLink4Title;
    navbarItens[4].querySelector(".nav-link").title = languageData.navLink5Title;

    // Sobre mim
    const aboutMeTitle = document.querySelector("#about-me .container-fluid .left-content article h1");
    aboutMeTitle.textContent = languageData.aboutMeTitle;
    
    const aboutMeSubtitle = document.querySelectorAll("#about-me .container-fluid .left-content article p")[0];
    aboutMeSubtitle.textContent = languageData.aboutMeSubtitle;

    const aboutMeParagraphs = document.querySelectorAll("#about-me .container-fluid .left-content article p");
    aboutMeParagraphs[1].innerHTML = languageData.aboutMeParagraph1;
    aboutMeParagraphs[2].innerHTML = languageData.aboutMeParagraph2;
    aboutMeParagraphs[3].innerHTML = languageData.aboutMeParagraph3;

    const aboutMeSocialLinks = document.querySelectorAll("#about-me .container-fluid .left-content article p a.social");
    aboutMeSocialLinks[0].title = languageData.githubLinkTitle;
    aboutMeSocialLinks[1].title = languageData.linkedInLinkTitle;
    aboutMeSocialLinks[2].title = languageData.instagramLinkTitle;
    aboutMeSocialLinks[3].title = languageData.emailLinkTitle;

    const aboutMeImage = document.querySelector("#about-me .container-fluid .right-content img");
    aboutMeImage.alt = languageData.aboutMeImageAlt;

    // Habilidades técnicas
    const technicalSkillsTitle = document.querySelector("#technical-skills .background .container-fluid h2");
    technicalSkillsTitle.textContent = languageData.technicalSkillsTitle;

    const technicalSkillsParagraph = document.querySelector("#technical-skills .background .container-fluid p");
    technicalSkillsParagraph.innerHTML = languageData.technicalSkillsParagraph;

    // Projetos
    const projectsTitle = document.querySelector("#projects .background .container-fluid h2");
    projectsTitle.textContent = languageData.projectsTitle;

    const projects = document.querySelectorAll("#projects .background .container-fluid #projects-content .project");
    const project1Title = projects[0].querySelector(".left-content article h2");
    project1Title.textContent = languageData.project1Title;
    const project1Type = projects[0].querySelector(".left-content article p:nth-of-type(1)");
    project1Type.textContent = languageData.projectType1;

    const project1Paragraphs = projects[0].querySelectorAll(".left-content article p");

    project1Paragraphs[1].innerHTML = languageData.project1Paragraph1;
    project1Paragraphs[2].innerHTML = languageData.project1Paragraph2;

    const project1Buttons = projects[0].querySelectorAll(".left-content .project-buttons button");
    project1Buttons[0].textContent = languageData.projectButton1;
    project1Buttons[1].textContent = languageData.projectButton3;
    
    const projectsImagesAlt = document.querySelectorAll(".project-image");
    projectsImagesAlt[0].alt = languageData.project1ImageAlt;
    projectsImagesAlt[3].alt = languageData.project1ImageAlt;


    const project2Title = projects[1].querySelector(".left-content article h2");
    project2Title.textContent = languageData.project2Title;

    const project2Type = projects[1].querySelector(".left-content article p:nth-of-type(1)");
    project2Type.textContent = languageData.projectType2;
    
    const project2Paragraphs = projects[1].querySelectorAll(".left-content article p");
    project2Paragraphs[1].innerHTML = languageData.project2Paragraph1;
    project2Paragraphs[2].innerHTML = languageData.project2Paragraph2;

    const project2Buttons = projects[1].querySelectorAll(".left-content .project-buttons button");
    project2Buttons[0].textContent = languageData.projectButton1;
    project2Buttons[1].textContent = languageData.projectButton2;    

    projectsImagesAlt[1].alt = languageData.project2ImageAlt;
    projectsImagesAlt[4].alt = languageData.project2ImageAlt;


    const project3Title = projects[2].querySelector(".left-content article h2");
    project3Title.textContent = languageData.project3Title;

    const project3Type = projects[2].querySelector(".left-content article p:nth-of-type(1)");
    project3Type.textContent = languageData.projectType1;
    
    const project3Paragraphs = projects[2].querySelectorAll(".left-content article p");
    project3Paragraphs[1].innerHTML = languageData.project3Paragraph1;

    const project3Buttons = projects[2].querySelectorAll(".left-content .project-buttons button");
    project3Buttons[0].textContent = languageData.projectButton1;
    project3Buttons[1].textContent = languageData.projectButton2;

    projectsImagesAlt[2].alt = languageData.project3ImageAlt;
    projectsImagesAlt[5].alt = languageData.project3ImageAlt;


    const project4Title = projects[3].querySelector(".left-content article h2");
    project4Title.textContent = languageData.project4Title;

    const project4Type = projects[3].querySelector(".left-content article p:nth-of-type(1)");
    project4Type.textContent = languageData.projectType1;
    
    const project4Paragraphs = projects[3].querySelectorAll(".left-content article p");
    project4Paragraphs[1].innerHTML = languageData.project4Paragraph1;
    project4Paragraphs[2].innerHTML = languageData.project4Paragraph2;

    const project4Buttons = projects[3].querySelectorAll(".left-content .project-buttons button");
    project4Buttons[0].textContent = languageData.projectButton1;
    
    
    const project5Title = projects[4].querySelector(".left-content article h2");
    project5Title.textContent = languageData.project5Title;

    const project5Type = projects[4].querySelector(".left-content article p:nth-of-type(1)");
    project5Type.textContent = languageData.projectType3;
    
    const project5Paragraphs = projects[4].querySelectorAll(".left-content article p");
    project5Paragraphs[1].innerHTML = languageData.project5Paragraph1;
    
    const project5Buttons = projects[4].querySelectorAll(".left-content .project-buttons button");
    project5Buttons[0].textContent = languageData.projectButton1;
    
    
    const project6Title = projects[5].querySelector(".left-content article h2");
    project6Title.textContent = languageData.project6Title;

    const project6Type = projects[5].querySelector(".left-content article p:nth-of-type(1)");
    project6Type.textContent = languageData.projectType3;
    
    const project6Paragraphs = projects[5].querySelectorAll(".left-content article p");
    project6Paragraphs[1].innerHTML = languageData.project6Paragraph1;
    
    const project6Buttons = projects[5].querySelectorAll(".left-content .project-buttons button");
    project6Buttons[0].textContent = languageData.projectButton1;
    
    
    const project7Title = projects[6].querySelector(".left-content article h2");
    project7Title.textContent = languageData.project7Title;

    const project7Type = projects[6].querySelector(".left-content article p:nth-of-type(1)");
    project7Type.textContent = languageData.projectType3;
    
    const project7Paragraphs = projects[6].querySelectorAll(".left-content article p");
    project7Paragraphs[1].innerHTML = languageData.project7Paragraph1;
    
    const project7Buttons = projects[6].querySelectorAll(".left-content .project-buttons button");
    project7Buttons[0].textContent = languageData.projectButton1;
    
    
    const project8Title = projects[7].querySelector(".left-content article h2");
    project8Title.textContent = languageData.project8Title;

    const project8Type = projects[7].querySelector(".left-content article p:nth-of-type(1)");
    project8Type.textContent = languageData.projectType3;
    
    const project8Paragraphs = projects[7].querySelectorAll(".left-content article p");
    project8Paragraphs[1].innerHTML = languageData.project8Paragraph1;
    
    const project8Buttons = projects[7].querySelectorAll(".left-content .project-buttons button");
    project8Buttons[0].textContent = languageData.projectButton1;

    // Certificados
    const certificationsTitle = document.querySelector("#certifications .background .container-fluid h2");
    certificationsTitle.textContent = languageData.certificationsTitle;

    const certifications = document.querySelectorAll("#certifications .background .container-fluid #certifications-content .certification");
    const certification1Title = certifications[0].querySelector("article h5");
    certification1Title.textContent = languageData.certification1Title;
    
    const certification1Type = certifications[0].querySelector("article p:nth-of-type(1)");
    certification1Type.textContent = languageData.certification1Type;
    
    const certification1Paragraphs = certifications[0].querySelectorAll("article p");
    certification1Paragraphs[1].textContent = languageData.certification1Paragraph1;
    certification1Paragraphs[2].textContent = languageData.certification1Paragraph2;


    const certification2Title = certifications[1].querySelector("article h5");
    certification2Title.textContent = languageData.certification2Title;
    
    const certification2Type = certifications[1].querySelector("article p:nth-of-type(1)");
    certification2Type.textContent = languageData.certification2Type;
    
    const certification2Paragraphs = certifications[1].querySelectorAll("article p");
    certification2Paragraphs[1].textContent = languageData.certification2Paragraph1;
    certification2Paragraphs[2].textContent = languageData.certification2Paragraph2;
    

    const certification3Title = certifications[2].querySelector("article h5");
    certification3Title.textContent = languageData.certification3Title;
    
    const certification3Type = certifications[2].querySelector("article p:nth-of-type(1)");
    certification3Type.textContent = languageData.certification3Type;
    
    const certification3Paragraphs = certifications[2].querySelectorAll("article p");
    certification3Paragraphs[1].textContent = languageData.certification3Paragraph1;
    certification3Paragraphs[2].textContent = languageData.certification3Paragraph2;
    

    const certification4Title = certifications[3].querySelector("article h5");
    certification4Title.textContent = languageData.certification4Title;
    
    const certification4Type = certifications[3].querySelector("article p:nth-of-type(1)");
    certification4Type.textContent = languageData.certification4Type;
    
    const certification4Paragraphs = certifications[3].querySelectorAll("article p");
    certification4Paragraphs[1].textContent = languageData.certification4Paragraph1;
    certification4Paragraphs[2].textContent = languageData.certification4Paragraph2;
       

    const certification5Title = certifications[4].querySelector("article h5");
    certification5Title.textContent = languageData.certification5Title;
    
    const certification5Type = certifications[4].querySelector("article p:nth-of-type(1)");
    certification5Type.textContent = languageData.certification5Type;
    
    const certification5Paragraphs = certifications[4].querySelectorAll("article p");
    certification5Paragraphs[1].textContent = languageData.certification5Paragraph1;
    certification5Paragraphs[2].textContent = languageData.certification5Paragraph2;
}