import React, { useState, useEffect } from 'react';
import './EditProfile.css'; // Import the CSS file

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    about: '',
    description: '',
    image: null
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    // Fetch initial data from Django backend
    const fetchProfile = async () => {
      try {
        const response = await fetch('https://anumolapi.modelflick.com/list/'); // Replace with your API endpoint
        const data = await response.json();
        setProfile({
          name: data.name,
          about: data.about,
          description: data.description,
          image: data.image
        });
        setImagePreview(data.image);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setProfile({
        ...profile,
        [name]: files[0]
      });
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setProfile({
        ...profile,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('about', profile.about);
    formData.append('description', profile.description);
    if (profile.image) {
      formData.append('image', profile.image);
    }

    try {
      const response = await fetch('/api/about/1/', { // Replace with your API endpoint
        method: 'PUT',
        body: formData
      });
      const data = await response.json();
      console.log('Profile updated:', data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="edit-profile-container">
      <h1 className="edit-profile-title">Edit Profile</h1>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">About:</label>
          <textarea
            name="about"
            className="form-textarea"
            value={profile.about}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Description:</label>
          <textarea
            name="description"
            className="form-textarea"
            value={profile.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Image:</label>
          <input
            type="file"
            name="image"
            className="form-file-input"
            onChange={handleChange}
          />
          {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
        </div>
        <button type="submit" className="form-button">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
