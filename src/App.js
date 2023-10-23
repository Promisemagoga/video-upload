import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [instructor, setInstructor] = useState("")
  const [video, setVideo] = useState(null)
  const [title, setTitle] = useState("")

    const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideo(file);
  };


    const uploadCourse = async () => {
    if (video) {
      const storage = getStorage();
      const storageRef = ref(storage, "videos/" + video.name);

      try {
        // Upload the video file to Firebase Storage
        await uploadBytes(storageRef, videoFile);

        // Get the download URL of the uploaded video
        const downloadURL = await storageRef.getDownloadURL();

        // Save the download URL to Firestore using addDoc
        const firestore = firebase.firestore();
        const videosCollectionRef = collection(firestore, "courses");
        await addDoc(videosCollectionRef, { 
          // url: downloadURL ,
          name: name,
          description: description,
          instructor: instructor,
          modules: [{ title: title, content: downloadURL }],
        
        });

        // Reset the videoFile state
        setVideo(null);
      } catch (error) {
        console.error("Error uploading video:", error);
      }
    }
  };


  return (
    <div className="App">
      <input placeholder='Enter name of the course...' onChange={(event) => setName(event.target.value)}/>
      <input placeholder='Enter name of the instructor...' onChange={(event) => setInstructor(event.target.value)}/>
      <textarea placeholder='Enter course description...' onChange={(event) => setDescription(event.target.value)}/>
      <input placeholder='Enter title...' onChange={(event) => setTitle(event.target.value)}/>
      <input type="file" accept="video/*" onChange={handleFileChange}/>
      <button onClick={uploadCourse}>Upload Course</button>
    </div>
  );
}

export default App;
