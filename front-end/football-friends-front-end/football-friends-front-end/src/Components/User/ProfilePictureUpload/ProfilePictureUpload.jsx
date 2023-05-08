import { useState } from "react";
import axios from "axios";

const ProfilePictureUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

        // Called when user selects a file
    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

        // Called when user submits form
    const onFileUpload = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            alert("Select a file to upload");
            return;
        }

        // This form data object holds the file data
        const formData = new FormData();
        formData.append("profilePicture", selectedFile, selectedFile.name);

        // Send the POST req with the users file data
        try {
            const response = await axios.post(
                "http://localhost:5001/uploadProfilePicture",
                formData
            );
            console.log(response.data);
            alert("Profile picture uploaded succesfully!");
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
        </div>
    );
};

export default ProfilePictureUpload
