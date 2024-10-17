
document.referrer = "\ Editor";

tinymce.init({
    selector: 'textarea',
    plugins: [
      // Core editing features
      'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
     
      'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
    ],
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ],
    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
  });

  // Save post to local storage

document.getElementById('save-button').addEventListener('click', function () {
    const title = document.getElementById('post-title').value;
    const category = document.getElementById('post-category').value;
    const content = tinymce.get('editor').getContent();

    if (title && category && content) {
        const post = { title, category, content };
        let posts = JSON.parse(localStorage.getItem('travelPosts')) || [];
        posts.push(post);
        localStorage.setItem('travelPosts', JSON.stringify(posts));
        alert('Post saved successfully!');
        loadPosts();
        document.getElementById('post-title').value = '';
        document.getElementById('post-category').value = '';
        tinymce.get('editor').setContent('');
    } else {
        alert('Please fill in all fields!');
    }
});

// Load posts from local storage

function loadPosts(filter = '') {
    const postsContainer = document.getElementById('posts-list');
    postsContainer.innerHTML = '';
    const posts = JSON.parse(localStorage.getItem('travelPosts')) || [];

    const filteredPosts = filter ? posts.filter(post => post.category === filter) : posts;

    filteredPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post-container');
        postElement.innerHTML = `<h3>${post.title}</h3><p><strong>Category:</strong> ${post.category}</p><div>${post.content}</div>`;
        postsContainer.appendChild(postElement);
    });
}

// Filter posts by category

document.getElementById('filter-category').addEventListener('change', function () {
    const filterValue = this.value;
    loadPosts(filterValue);
});

// Load posts on page load
loadPosts();

  // Function to delete a post

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem('travelPosts')) || [];
    posts.splice(index, 1); // Remove the post from the array
    localStorage.setItem('travelPosts', JSON.stringify(posts)); // Update localStorage
    loadPosts(); // Reload posts to display updates
}

// Update loadPosts function to add a "Delete" button

function loadPosts(filter = '') {
    const postsContainer = document.getElementById('posts-list');
    postsContainer.innerHTML = '';
    const posts = JSON.parse(localStorage.getItem('travelPosts')) || [];

    const filteredPosts = filter ? posts.filter(post => post.category === filter) : posts;

    filteredPosts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post-container');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>Category:</strong> ${post.category}</p>
            <div>${post.content}</div>

            <button class="delete-button" onclick="deletePost(${index})">Delete</button>
         ` ;
        postsContainer.appendChild(postElement);
    });
}
// Load posts on page load
loadPosts();


