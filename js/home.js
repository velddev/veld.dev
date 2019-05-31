/// -- Set up

var skills = [
    {
        title: "Backend Programmer",
        tags: ["Docker", "Microservices", "NodeJS", "Asp.Net", "RabbitMQ", "web", "webapp", "app"],
        icon: "gamepad",
    },
    {
        title: "Database Engineer",
        tags: ["SQL", "Redis", "PostgreSql", "MySQL", "Engineer"],
        icon: "database",
    },
    {
        title: "Frontend Programmer",
        tags: ["web", "programmer", "website", "design"],
        icon: "desktop",
    },
    {
        title: "Game Programmer",
        tags: ["Engine", "Graphics"],
        icon: "gamepad",
    },
    {
        title: "Lead Programmer",
        tags: ["Leadership", "Project", "Manager"],
        icon: "chart-bar",
    },
    {
        title: "Logo Designer",
        tags: ["Logo", "Design", "Sketch", "Mockup", "Branding"],
        icon: "pencil",
    },
    {
        title: "Translator",
        tags: ["Dutch", "English", "Translator"],
        icon: "language"
    },
    {
        title: "UI Designer",
        tags: ["UI", "Web", "App", "Adobe XD", "Mocking", "website"],
        icon: "pencil",
    },
]

let currentAnimationState = null;
const checkUserScroll = (ev) => {
    if(currentAnimationState != null)
    {
        clearInterval(currentAnimationState);
        currentAnimationState = null;
    }
}

if(window.addEventListener) {
    document.addEventListener('DOMMouseScroll', checkUserScroll, false); 
}
window.onmousewheel = checkUserScroll;

function lerp(from, to, t)
{
    return (1-t) * from + to * t;
}

export function scrollPage(pageId, speed = 0.01) {
    let current = 0.0;
    
    currentAnimationState = setInterval(() => {
        window.scrollTo(0, lerp(window.scrollY, pageId * window.innerHeight + 1, current));
        current += speed;
        if(current > 1)
        {
            clearInterval(currentAnimationState);
            currentAnimationState = null;
        }
    }, 16);
}

export function closeModal() {
    document.getElementById("modalBase")
        .classList.remove("is-active");
}

export function showModal(imageUrl) {
    document.getElementById("modalImg")
        .setAttribute("src", imageUrl);
    document.getElementById("modalBase")
        .classList.toggle("is-active");
}

document.addEventListener("DOMContentLoaded", function () {
    let contentDiv = document.getElementById("landing-content");

    for(var i = 0; i < skills.length; i++)
    {
        var d = document.createElement("div");
        d.id = skills[i].title;

        d.classList.add("button");
        d.classList.add("pushed");
        d.classList.add("is-rounded");
        d.classList.add("is-outlined");
        d.classList.add("is-white");
        d.classList.add("is-smooth");

        if(skills[i].icon)
        {
            var icon = document.createElement("i");
            icon.classList.add("fas");
            icon.classList.add("fa-" + skills[i].icon);
            d.appendChild(icon);
        }

        d.innerHTML += skills[i].title;

        contentDiv.appendChild(d);
    }
}, false);

/// -- Update/Search matches.

var options = {
    id: "title",
    threshold: 0.4,
    keys: [{
        name: 'tags',
        weight: 0.3
    }, {
        name: 'title',
        weight: 0.7
    }]
};

var fuse = new Fuse(skills, options)
  
var searchBar = document.getElementById("landing-search-bar");
searchBar.oninput = function (c) {
    let value = c.srcElement.value;
    if(value == null || value.trim() === '')
    {
        let content = document.getElementById("landing-content");
        for(var i = 0; i < content.childElementCount; i++)
        {
            content.children[i].classList.remove("is-unfocused");
        }
        return;
    }

    var result = fuse.search(c.srcElement.value);
    
    for(var i = 0; i < skills.length; i++)
    {
        if(result.includes(skills[i].title))
        {
            document.getElementById(skills[i].title).classList.remove("is-unfocused");
        }
        else
        {
            document.getElementById(skills[i].title).classList.add("is-unfocused");
        }
    }
}