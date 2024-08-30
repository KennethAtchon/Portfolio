document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


const container = document.querySelector('.m-items-container');
container.addEventListener('animationiteration', () => {
    container.style.animation = 'none';
    container.offsetHeight; // Trigger reflow
    container.style.animation = null;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Check each possible class and apply the corresponding "Now" version
        if (entry.target.classList.contains('translateRight')) {
            if (entry.isIntersecting) {
                entry.target.classList.add('translateRightNow');
            } else {
                entry.target.classList.remove('translateRightNow');
            }
        }

        if (entry.target.classList.contains('moveDownScaleUp')) {
            if (entry.isIntersecting) {
                entry.target.classList.add('moveDownScaleUpNow');
            } else {
                entry.target.classList.remove('moveDownScaleUpNow');
            }
        }

        if (entry.target.classList.contains('translateLeft')) {
            if (entry.isIntersecting) {
                entry.target.classList.add('translateLeftNow');
            } else {
                entry.target.classList.remove('translateLeftNow');
            }
        }

        if (entry.target.classList.contains('FadeInAni')) {
          if (entry.isIntersecting) {
              entry.target.classList.add('FadeInAniNow');
          } else {
              entry.target.classList.remove('FadeInAniNow');
          }
      }


    });
});

const itemsToObserve = document.querySelectorAll('.translateRight, .moveDownScaleUp, .translateLeft, .FadeInAni');

itemsToObserve.forEach(item => observer.observe(item));
const jsonData = {
    "languages": [
      {
        "language": "Python",
        "imgUrl": "logos/python.png",
        "posts": [
          {
            "year": "2024",
            "bulletPoints": [
              "Practice for coding interviews by solving problems on LeetCode using python",
              "Built a side project, GUI called 'Unital' in python, to help people convert word documents, filter them, and compare files",
            ]
          },
          {
            "year": "2023",
            "bulletPoints": [
              "Collaborated with professor on research investigating sublinear time algorithms for finding the sum of n integers",
              "Utilized Python libraries such as pandas and numpy to conduct detailed analysis and comparisons of various algorithms, including the Metropolis-Hastings algorithm",
            ]
          },
          {
            "year": "2020",
            "bulletPoints": [
              "Started my programming journey with Python",
              "Took a bootcamp in Python the summer after high school and decided I would pursue a career in tech",
              "Leanred data types, inheritance, common libraries, etc"
            ]
          }
        ]
      },
      {
        "language": "C++",
        "imgUrl": "logos/cplusplus.png",
        "posts": [
          {
            "year": "2023",
            "bulletPoints": [
              "Solved a very complex programming problem in C++ (maybe only 20% of my peers were able to complete it)",
              '<a href="downloads/CS30200Project1.zip" download="CS30200Project1.zip" style="color: #ED6A5E;">Download Project ZIP file</a>',
            ]
          },
          {
            "year": "2022",
            "bulletPoints": [
              "Learned C++ for the first time at my university",
              "Learned difference between call by value and call by reference",
              "Learned pointers, recursuion, and dynamic memory allocation"
            ]
          }
        ]
      },
      {
        "language": "Java",
        "imgUrl": "logos/java.png",
        "posts": [
          {
            "year": "2023",
            "bulletPoints": [
              'Learned about Computer Graphics in Java (3D models and MVC) <a href="downloads/hw4_work.zip" download="hw4_work.zip" style="color: #ED6A5E;">HW assignment</a>',
              'For Operating Systems class we learned how to use HTTP methods in Java <a href="downloads/hw3.zip" download="hw3.zip" style="color: #ED6A5E;">HW assignment</a> ',
              '<a href="downloads/CS336Hw3Atchon.zip" download="CS336Hw3Atchon.zip" style="color: #ED6A5E;">How I solved it</a>'
            ]
          },
          {
            "year": "2021",
            "bulletPoints": [
              "Had my first class in Java, and learned the basics of OOP and syntax",
              "I believe I built a hangman game in Java for extra practice with the language",
            ]
          }
        ]
      },
      {
        "language": "NodeJS",
        "imgUrl": "logos/nodejs.png",
        "posts": [
          {
            "year": "2024",
            "bulletPoints": [
              "Currently, I use strapi ontop of Node JS to build my webapps.",
            ]
          },
          {
            "year": "2023",
            "bulletPoints": [
              'For a Capstone Database Project, a team of developers and I built a NodeJS server for our React frontend <a href="https://github.com/KennethAtchon/Ecommerce-Website-CS442" target="_blank" style="color: #ED6A5E;">Link</a>',
            ]
          },
          {
            "year": "2021",
            "bulletPoints": [
              'Developed and hosted a personal website (old one) using React JS and AWS Amplify, showcasing my professional portfolio and projects.',
            ]
          }
        ]
      },
      {
        "language": "Web Dev",
        "imgUrl": "logos/webdev.png",
        "posts": [
          {
            "year": "2024",
            "bulletPoints": [
              "For most of my school year, I avoided HTML/CSS because I couldn't learn it, but after learning React and tailwind I decided to go back to the roots.",
              "I was able to build this website, with just vanilla JS, HTML/CSS with the knowledge I gained from React and Tailwind!",
            ]
          },
        ]
      },
      {
        "language": "React",
        "imgUrl": "logos/react.png",
        "posts": [
          {
            "year": "2024",
            "bulletPoints": [
              "I build most of my side web projects with react.",
              "I built 3 ecommerce stores, Trivowear, Broovie, and the store for my Database class",
              "I mainly use tailwind for styling when I use react."
            ]
          },
        ]
      }
    ]
  };

  document.addEventListener('DOMContentLoaded', function() {
    const chosenSkillContainer = document.querySelector('.chosen-coding-skill');

        // Function to create and insert the HTML structure for posts
    function updateChosenSkillContainer(skillData) {
        // Clear the container before adding new content
        chosenSkillContainer.innerHTML = '';

        if (skillData) {
            skillData.posts.forEach(post => {
                const postHtml = `
                    <div class="chosen-coding-items">
                        <div class="chosen-coding-title">
                            <div class="chosen-coding-bundle">
                                <div class="chosen-image">
                                    <img src="${skillData.imgUrl}" alt="${skillData.language}">
                                </div>
                                <div class="chosen-name">${post.year}</div>
                            </div>
                            <span class="minus-sign">-</span>
                        </div>
                        <div class="chosen-coding-content">
                            <ul class="bullet-points">
                                ${post.bulletPoints.map(point => `<li>${point}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                chosenSkillContainer.insertAdjacentHTML('beforeend', postHtml);
            });
        }
    }

    // Existing event listeners code remains unchanged
    const skillItems = document.querySelectorAll('.m-skills-items');
    const chosenSkill = document.querySelector('.chosen-coding-skill');
    const minusSigns = document.querySelectorAll('.minus-sign');

    // Handle progress circles and plus sign clicks
    skillItems.forEach(item => {
        const percentage = item.dataset.percentage;
        const color = item.dataset.color;
        const circle = item.querySelector('.progress-circle-path');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        circle.style.stroke = color;
    });

    skillItems.forEach(item => {
        const plusSign = item.querySelector('.plus-sign');

        plusSign.addEventListener('click', function() {
            skillItems.forEach(el => {
                if (el !== item) {
                    el.classList.add('hideDontShow');
                }
            });

            setTimeout(() => {
                item.classList.add('shrink');
                console.log(item.dataset.skill)

                const skillData = jsonData.languages.find(lang => lang.language === item.dataset.skill);

                updateChosenSkillContainer(skillData);

                setTimeout(() => {
                    skillItems.forEach(el => {
                        el.classList.add('hidden');
                    });

                    chosenSkill.classList.add('active');
                }, 500);
            }, 1000);
        });
    });

    // Handle minus sign clicks to deactivate the chosen skill
    chosenSkillContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('minus-sign')) {
            chosenSkill.classList.add('deactive');
            setTimeout(() => {
                skillItems.forEach(item => {
                    item.classList.remove('hidden');
                    item.classList.remove('hideDontShow');
                    item.classList.remove('shrink');
                });
                chosenSkill.classList.remove('deactive');
                chosenSkill.classList.remove('active');
            }, 500);
        }
    });
});

document.getElementById("scrollToHome").addEventListener("click", function() {
  document.getElementById("targetHome").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToAbout").addEventListener("click", function() {
  document.getElementById("targetAbout").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToResume").addEventListener("click", function() {
  document.getElementById("targetCV").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToResume1").addEventListener("click", function() {
  document.getElementById("targetCV").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToServices").addEventListener("click", function() {
  document.getElementById("targetServices").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToContact").addEventListener("click", function() {
  document.getElementById("targetContact").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToContact1").addEventListener("click", function() {
  document.getElementById("targetContact").scrollIntoView({ behavior: "smooth" });
});




