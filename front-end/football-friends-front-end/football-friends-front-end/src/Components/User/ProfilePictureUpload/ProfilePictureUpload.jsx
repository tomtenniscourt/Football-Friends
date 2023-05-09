import { useState } from "react";
import axios from "axios";


const ProfilePictureUpload = () => {
    const [uploadedImagePath, setUploadedImagePath] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

        // Called when user selects a file
    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

        // Called when user submits form
    const onFileUpload = async (event) => {
        event.preventDefault();
        // If they click upload without choosing a file

        if (!selectedFile) {
            alert("Select a file to upload");
            return;
        }

        // This form data object holds the file data - it's equivalent to the postman option form-data (within Body)
        const formData = new FormData();
        // profilePicture refers to the naming convention in profilePicture.js + the key name in Postman
        // selectedFile.name refers to the original file name that the user uploads
        formData.append("profilePicture", selectedFile, selectedFile.name);

        // Send the POST req with the users file data
        try {
            const response = await axios.post(
                "http://localhost:5001/uploadProfilePicture",
                // send formData object from above to the server
                formData
            );
            console.log(response.data);
            alert("Profile picture uploaded succesfully!");
            setUploadedImagePath(response.data.imagePath);
        } catch (err) {
            console.log(err);
            alert("Error uploading the profile picture");
        }
    };

    return (
        <div>
            <h3> Upload your profile picture</h3>
            <form onSubmit={onFileUpload}>
                <input type="file" onChange={onFileChange} />
                <button type="submit">Upload</button>
            </form>
            
            {uploadedImagePath && (
                // if uploadedImagePath is truthy, run
                <div>
                    <h3> Uploaded Profile Picture:</h3>
                    <img src={`http://localhost:5001/${uploadedImagePath}`} alt="Profile" />
                </div>
            )}
        </div>
    );
};

export default ProfilePictureUpload
