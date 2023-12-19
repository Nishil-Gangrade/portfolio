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
    link: "https://github.com/adityamuzumdar",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-4">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h2 className="font-semibold text-lg mb-1">{project.title}</h2>
          <h3 className="text-gray-600 mb-2">{project.subtitle}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
