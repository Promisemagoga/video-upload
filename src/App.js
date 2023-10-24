import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { db, storage } from './Config/Firebase';
import { addDoc, collection } from 'firebase/firestore';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

function App() {
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [instructor, setInstructor] = useState("")
  const [videos, setVideos] = useState([])
  const [title, setTitle] = useState("")

  const handleFileChange = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      const content = event.target.files[i]
      setVideos((prevState => [...prevState, content]))
    }
  };


  const uploadCourse = async () => {
    const videoUrl = await Promise.all(videos.map(async (video) => {
      const videosPath = `videos/${video.name + v4()}`
      const videoStorageRef = ref(storage, videosPath);
      await uploadBytes(videoStorageRef, video)
      const url = await getDownloadURL(videoStorageRef)
      return { video: video.name, url }

    }))
  
    try {
      await addDoc(collection(db, 'Courses2'), {
        name: name,
        description: description,
        instructor: instructor,
        modules: [
          {
            title: title,
            content: videoUrl.map((video) => video.video),
            contentUrl: videoUrl.map((video) => video.url)

          },
        ],
      });
      console.log("Success");

      alert("Content successfully uploaded")
    } catch (error) {
      console.error("Error uploading video:", error);
    }

    console.log("clicked");
  };


  return (
    <div className="App">
      <input placeholder='Enter name of the course...' onChange={(event) => setName(event.target.value)} />
      <input placeholder='Enter name of the instructor...' onChange={(event) => setInstructor(event.target.value)} />
      <textarea placeholder='Enter course description...' onChange={(event) => setDescription(event.target.value)} />
      <input placeholder='Enter title...' onChange={(event) => setTitle(event.target.value)} />
      <input type="file" accept="video/*" multiple onChange={handleFileChange} />
      <button onClick={uploadCourse}>Upload Course</button>
    </div>
  );
}

export default App;
