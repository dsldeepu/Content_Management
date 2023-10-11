const contentForm = document.getElementById('contentForm');
const titleInput = document.getElementById('titleInput');
const contentInput = document.getElementById('contentInput');
const imageURLInput = document.getElementById('imageURLInput');
const videoURLInput = document.getElementById('videoURLInput');
const contentContainer = document.getElementById('contentContainer');


let contentArray = [];


function displayContent() {
  contentContainer.innerHTML = '';
  contentArray.forEach((content) => {
    const blogElement = document.createElement('div');
    blogElement.classList.add('blog');
    let blogHTML = `<h3>${content.title}</h3>`;
    if (content.imageURL !== '') {
      blogHTML += `<img src="${content.imageURL}" alt="Blog Image">`;
    }
    if (content.videoURL !== '') {
      blogHTML += `<iframe src="${content.videoURL}" frameborder="0" allowfullscreen></iframe>`;
    }
    blogHTML += `<p>${content.content}</p>`;
    blogElement.innerHTML = blogHTML;
    contentContainer.appendChild(blogElement);
  });
}

function addContent(title, content, imageURL, videoURL) {
  const newContent = { title, content, imageURL, videoURL };
  contentArray.push(newContent);
  displayContent();
  clearForm();
}

function clearForm() {
  titleInput.value = '';
  contentInput.value = '';
  imageURLInput.value = '';
  videoURLInput.value = '';
}

contentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  const imageURL = imageURLInput.value.trim();
  const videoURL = videoURLInput.value.trim();
  if (title !== '' && content !== '') {
    addContent(title, content, imageURL, videoURL);
  }
  clearForm();
});
