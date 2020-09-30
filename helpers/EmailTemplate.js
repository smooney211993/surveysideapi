const content = (survey) => {
  return `
    <html>
      <body>
        <div style='text-align: center;'>
          <h3> Your feedback is incredible important to us </h3>
          <p> Let us know how we are doing by simply answering a yes or no question</p>
          <p>${survey.body}</p>
          <div>
            <a href='http://localhost:3000'>Yes </a>
          </div>
          <div>
            <a href ='http://localhost:3000'> No </a>
          </div>
        </div>
      </body>
    </html>
  `;
};

module.exports = content;
