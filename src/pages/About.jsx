function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          React Front To Back
        </a>{" "}
        Udemy course.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">&nbsp;</p>
      <p className="text-lg text-gray-400">
        Course By:
        <a className="text-white" href="https://traversymedia.com">
          &nbsp;Brad Traversy
        </a>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          &nbsp;Hassib Moddasser
        </a>
      </p>
    </div>
  );
}

export default About;
