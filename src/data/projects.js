import minbarImg from "../images/minbar.png";
import recipefinderImg from "../images/food-spoon-fork-logo.jpeg";
import zombiedashImg from "../images/zombiedash.png";
import iliftsImg from "../images/ilifts.png";
import geenomicsImg from "../images/geenomics.png";
import spotifylistImg from "../images/spotifylist.png";
import gradeCalculatorScriptImg from "../images/grade_calculator_script.png";

const minbar = {
  title: "Minbar.io",
  image: minbarImg,
  imageWidth: 300,
  imageHeight: 350,
  altText: "minbar app",
  links: {},
  description: `Built React Native app as a Front End Engineering Intern with a team of 7 that aims to solve 
  logisitical challenges to book speakers for Friday Prayer Services.`,
  technologies: [
    "React Native",
    "Typescript",
    "Firebase",
    "Figma",
    "Formik",
    "Yup",
  ],
  whatILearned: `I obtained hands-on experience working in an agile team environment, developing a mobile application, 
  creating a multi-page registration form with client-side validation, and communicating with backend and design
  teams to implement/optimize features.`,
  difficulty: `With COVID-19, everything was remote and it was difficult for us as a team to have constant communication
  and recieve instant feedback on my code. In addition, since it was my first time in mobile devlopment, there was a considerable
  learning curve the mentorship I would have potentially acquired if in person.`,
  solution: `To solve the communication issue, I made sure to be active on our discord and reached out to individual teams members
  that could help address any problems or questions I had. I was in constant contact with the Product Manager to ensure I was making the
  decisions and on track to complete my tasks. To address the learning curve issue, I asked team members for the best resources to learn
  the various technologies and took down useful notes to refer back to.`,
};

const recipeFinder = {
  title: "Recipe Finder",
  image: recipefinderImg,
  imageWidth: 350,
  imageHeight: 350,
  altText: "recipe finder website",
  links: {
    project: "https://recipe-finder-unaz.herokuapp.com/",
    github: "https://github.com/usmanazz/Recipe-Finder",
  },
  description: `Designed and built full stack web application to search through 300,000+ recipes from integrated Spoonacular API
  based on available ingredients at home. Utilized JSON Web Token Authentication to supports users and allow users to
  favorite recipes and edit account info. Deployed on Heroku.`,
  technologies: [
    "ReactJS",
    "PostgreSQL",
    "ExpressJS",
    "NodeJS",
    "CSS3",
    "Heroku",
    "Figma",
    "Formik",
    "Yup",
    "Material-UI",
  ],
  whatILearned: `Acquired full stack experience working with PERN technologies. Built RESTful API as backend service to create, manage,
  and validate users as well as manage users' saved recipes. Obtained solid understanding of how to use React Hooks.
  Have a better understanding of how design, frontend, and backend come together to create complex web systems.`,
  difficulty: `It was difficult to find a suitable method to implement pagination in the search results page to prevent displaying 
  too many recipes at once. Tried to integrate a third-party Wizard component with no success.`,
  solution: `To incorporate pagination in the results page, I implemented a series of functions to slice the list of recipes obtained from
  the API and incremented a next page counter to indicate the next set of recipes in the list to display. Used a load more button rather
  than page numbers for a more simple and elegant UI experience.`,
};

const zombieDash = {
  title: "ZombieDash",
  image: zombiedashImg,
  imageWidth: 350,
  imageHeight: 350,
  altText: "zombie dash game",
  links: {
    github: "https://github.com/usmanazz/ZombieDash",
  },
  description: `Created a Zombie Survival Game wher you play as a zombie hunter trekking through an abandoned building, rescuing 
  frightened citizens before they are turned into brainless zombies. On each level, you must lead all of the citizens safely to the
  level’s exit(s), then head through an exit to advance to the next level of the building. Kill zombies with fire or mines to earn points.
  Once you have saved all of the citizens from every level, the game is over. Implemented in C++. Utilized Object Oriented Programming
  principles, STL, Data Structures.`,
  technologies: ["C++", "Visual Studio Code", "Object Oriented Design"],
  whatILearned: `This was developed as a school project and my first large-scale project (1000+ lines of code) that someone, even with 
  limited computer experience, could use.`,
  difficulty: `Since there are so many objects to keep track of throughout the game, (player, dumb zombie, smart zombie, citizens, lives,
    utility such as flames and mines, vaccines to get additional life, pits, walls, exit(s), etc) it was difficult to design the overall
    class structure of entire game.`,
  solution: `To solve this struggle, I put a lot more time into designing the project rather than jumping right into the code.
    I mapped out relationships between various objects (i.e. citizens, dumb zombies, and smart zombies are all Persons but citizens
    are NOT zombies) and once I had a comprehensive design layout in place, I incrementally implemented the various base
    and derived classes.`,
};

const ilifts = {
  title: "iLifts",
  image: iliftsImg,
  imageWidth: 350,
  imageHeight: 350,
  altText: "ilifts app logo",
  links: {
    github: "https://github.com/usmanazz/iLifts",
  },
  description: `Built fitness app with React Native to log workouts and track exercise progression. Serves as a free competitor to the 
    large array of perium apps on IOS and Android marketplace that charge $5-50+ per month.`,
  technologies: [
    "React Native",
    "MobX",
    "Javascript",
    "CSS3",
    "React Navigation",
    "Visual Studio Code",
  ],
  whatILearned: `On top of getting more experience developing with React Native and overall front end technologies, I learned about 
  state management. The benefit of using a state library like MobX was that it took care of re-rendering the app on state change,
  I was able to create multiple stores to separate state of unrelated features, and overall write more maintainable code.`,
  difficulty: `One of the difficulties of creating the UI to track the sets and reps of each exercise was how to represent the data 
  so that it could display whether the user has started a set as well as storing this info in the user's workout history.`,
  solution: `To address this issue, instead of storing the sets as a list of strings, I created a list of objects where each object 
  stores the number of reps the user completed and a state property to keep track of whether or not the set was started. This ensures
  a clean and simple UI at the cost of some additional preprocessing to update state on user interaction.`,
};

const geenomics = {
  title: "Gee-nomics",
  image: geenomicsImg,
  imageWidth: 425,
  imageHeight: 350,
  altText: "gee-nomics command line interface",
  links: {
    github: "https://github.com/usmanazz/Gee-nomics",
  },
  description: `Built a genome searching tool in C++ to process and store genetic data of bacteria responsible for common illnesses. 
  Implemented 3 main classes to maintain library of genomes, allow users to search library for specified DNA or a SNiP of it, and
  identify genomes with a high percentage of matching DNA with user input. Integrated unit tests to efficiently implement new features
  and maintain code reliability.`,
  technologies: ["C++", "Xcode", "GoogleTest", "Object Oriented Design"],
  whatILearned: `This project was a great introduction to utilizing more complex data structures to avoid duplicate work and achieve 
  more efficient code. I created a trie data structure to store DNA sequences and quickly extract subsquences that match user input.
  In addition, I got more experience in Object Oriented Design and manipulating common STL containers/Data Structures.`,
  difficulty: `I had a hard time implementing a function to find subsquences in the trie data structure that were SNiPs of the passed in 
  DNA. A SNiP is a sequence that differs from another sequence by only 1 DNA base.`,
  solution: `My solution was to create an algorithm that loops through the sequence and replaces 1 character in the string at each 
  iteration with a character that exists in the trie and checks if the modified string is stored in the trie.`,
};

const spotifyList = {
  title: "SpotifyList",
  image: spotifylistImg,
  imageWidth: 425,
  imageHeight: 300,
  altText: "spotifylist web application",
  links: {
    project: "https://spotifylist.netlify.app/",
    github: "https://github.com/usmanazz/SpotifyList",
  },
  description: `Built a single page React web application that Utilizes Spotify API to create and save playlists to user's Spotify Account.`,
  technologies: [
    "ReactJS",
    "Javascript",
    "HTML5",
    "CSS3",
    "Visual Studio Code",
  ],
  whatILearned: `This was my first time creating and deploying a React Application. This was also my first time integrating a third-party
  API to get and display dynamic data onto a website.`,
  difficulty: `I spent countless hours reading through Spotify API documentation trying to understand which queries to use and what options 
  to include in the query string to get the right songs/artists/albums.`,
  solution: `My solution was to google examples on various blogs and forums to understand how API queries work as well as trying out the 
  various example queries in the documentation and parse through the responses to breakdown how the JSON is formatted. Trial and error was
  the best teacher in this scenario.`,
};

const gradeCalculatorScript = {
  title: "Final Grade Calculator",
  image: gradeCalculatorScriptImg,
  imageWidth: 425,
  imageHeight: 300,
  altText: "table of student grades for a quarter at UCLA",
  links: {
    github: "https://github.com/usmanazz/final-grade-calculator",
  },
  description: `Created a Python script that takes in an Excel sheet of student grades for a class at UCLA and returns a dataframe with 
  all the students' final grades based on up to 2 grading schemes.`,
  technologies: ["Python", "NumPy", "Pandas", "Visual Studio Code"],
  whatILearned: `Gained experience on how to take in data of some arbitrary form and parse it to meet client's data requirements. Learned 
  how create a dataframe using Pandas Python library.`,
  difficulty: `I struggled to add homework and test average columns to the dataframe without modifying the existing data and calculating 
    the averages for every student in an efficent manner.`,
  solution: `My solution was to use iloc, a pandas integer-location based indexing, to quickly access all students homework grades across 8 
  assignments, calculate the averages, and place the result in the homework average columns. `,
};

const projects = [
  minbar,
  recipeFinder,
  zombieDash,
  ilifts,
  geenomics,
  spotifyList,
  gradeCalculatorScript,
];

export default projects;
