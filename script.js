const galleryContainer = document.getElementById('galleryContainer');
const formContainer = document.getElementById('galleryForm');

// Function to add image to gallery
function addImage() {
    const imageInput = document.getElementById('image-upload');
    const titleInput = document.getElementById('title').value;
    const descInput = document.getElementById('description').value;
    
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            // Create gallery item
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            // Add image
            const img = document.createElement('img');
            img.src = e.target.result;
            galleryItem.appendChild(img);
            
            // Add title
            const title = document.createElement('div');
            title.className = 'title';
            title.textContent = titleInput;
            galleryItem.appendChild(title);
            
            // Add description
            const description = document.createElement('div');
            description.className = 'description';
            description.textContent = descInput;
            galleryItem.appendChild(description);
            
            // Add action buttons
            const actions = document.createElement('div');
            actions.className = 'actions';

            const editButton = document.createElement('button');
            editButton.className = 'edit-btn';
            editButton.textContent = 'Edit';
            editButton.onclick = () => editItem(galleryItem);
            actions.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => galleryItem.remove();
            actions.appendChild(deleteButton);

            galleryItem.appendChild(actions);

            // Append to gallery
            galleryContainer.appendChild(galleryItem);
            galleryContainer.style.display = 'flex';

            // Clear form
            formContainer.reset();
        };

        reader.readAsDataURL(imageInput.files[0]);
    } else {
        alert('Please select an image to upload.');
    }
}

// Function to edit an existing gallery item
function editItem(galleryItem) {
    const title = galleryItem.querySelector('.title').textContent;
    const description = galleryItem.querySelector('.description').textContent;

    document.getElementById('title').value = title;
    document.getElementById('description').value = description;

    galleryItem.remove();
}
