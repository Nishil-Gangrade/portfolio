import React from 'react';

const projects = [
  {
    title: "Text Editor",
    subtitle: "Data Structures",
    description: "This project is a text editor developed using the C programming language. It is built on the Doubly Linked List data structure, which enables efficient navigation within the editor. The project's user interface is created using the ncurses library. It includes features such as cut, copy, paste, find, navigation, and save.",
    link: "https://github.com/adityamuzumdar/TEXT-EDITOR-USING-GAP-BUFFER",
  },
  
  {
    title: "Used Car Price Prediction",
    subtitle: "Machine Learning",
    description: "A machine learning project used car price prediction model made using Random Forest Regression. The model was trained on a dataset that included attributes such as kilometers driven, age of the car, and other relevant features. The goal was to accurately estimate the prices of used cars based on these factors.    ",
    link: "https://github.com/adityamuzumdar/Used_car_price_prediction",
  },
  {
    title: "Faster Chrome extension",
    subtitle: "Chrome Extension",
    description: "A chrome extension which helps to change the playback speed of any kind of media in chrome browser according to the needs of the user. Made using HTML, CSS, JavaScript.",
    link: "https://github.com/adityamuzumdar/faster_chrome_ext",
  },
  {
    title: "Vim like editor",
    subtitle: "Operating System",
    description: "A feature-rich Unix-like shell in C, offering advanced functionalities such as redirection, pipes, history, and customizable settings. The shell should execute commands, manage I/O operations, provide command history recall, and allow for pipelining multiple commands. ",
    link: "https://github.com/adityamuzumdar/Shell_in_C",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-5">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h2 className="font-semibold text-lg mb-1">{project.title}</h2>
          <h3 className="text-gray-600 mb-2">{project.subtitle}</h3>
          <p>{project.description}</p>
          <a className="text-blue-700" href={project.link}>Link</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
