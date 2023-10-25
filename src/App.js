import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { db, storage } from './Config/Firebase';
import { addDoc, collection } from 'firebase/firestore';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import EditForm from './EditForm';
import SignIn from './SignIn';

function App() {
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [instructor, setInstructor] = useState("")
  const [videos, setVideos] = useState([])
  const [title, setTitle] = useState("")
  const [courseTitle, setCourseTitle] = useState("")
  const [courseAuthor, setCourseAuthor] = useState("")
  const [whatYouLearn, setwhatYouLearn] = useState("")


  const [moduleDescription, setModuleDescription] = useState("")
  const [videoUrl, setVideoUrl] = useState([])
  const [showVid, setShowVid] = useState(false)
  const [selectedVideoUrl, setSelectedVideoUrl] = useState();
  const [showEditForm, setShowEditForm] = useState(false)


  // const handleFileChange = (event) => {
  //   for (let i = 0; i < event.target.files.length; i++) {
  //     const content = event.target.files[i]
  //     setVideos((prevState => [...prevState, content]))
  //   }
  // };

  // const handleFileChange = (event) => {
  //   for (let i = 0;  i < event.target.files.length; i++) {
  //     const content = event.target.files[i];
  //     const reader = new FileReader();
  //     reader.addEventListener("load", () => {
  //       const videoURL = reader.result;
  //       setVideoUrl((prevState) => [...prevState, videoURL]);
  //     });
  //     reader.readAsDataURL(content);
  //   }

  // };

  const handleFileChange = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      const content = event.target.files[i];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const videoURL = reader.result;
        const videoTitle = content.name;
        const videoInfo = {
          url: videoURL,
          title: videoTitle,
          // Add other information you want to include, such as description, tags, etc.
        };
        setVideoUrl((prevState) => [...prevState, videoInfo]);
      });
      reader.readAsDataURL(content);
      console.log(content);
    }
  };



  const uploadCourse = async () => {
    // const videoUrl = await Promise.all(videos.map(async (video) => {
    //   const videosPath = `videos/${video.name + v4()}`
    //   const videoStorageRef = ref(storage, videosPath);
    //   await uploadBytes(videoStorageRef, video)
    //   const url = await getDownloadURL(videoStorageRef)
    //   return { video: video.name, url }

    // }))

    // try {
    //   await addDoc(collection(db, 'Courses2'), {
    //     name: name,
    //     description: description,
    //     instructor: instructor,
    //       date: new Date
    //     modules: [
    //       {
    //        module1: { 
    //         title: title,
    //         moduleDescription: moduleDescription,
    //         content: videoUrl.map((video) => video.video),
    //         contentUrl: videoUrl.map((video) => video.url)
    //       }

    //       },
    //     ],
    //   });
    //   console.log("Success");

    //   alert("Content successfully uploaded")
    // } catch (error) {
    //   console.error("Error uploading video:", error);
    // }

    console.log("clicked");
  };

  function showVideo(videoUrl) {
    console.log(videoUrl);
    setShowVid(true)
    setSelectedVideoUrl(videoUrl)
  }

  function showEdit(){
    setShowEditForm(true)
  }


  return (
    <div className="App">
      {/* <input placeholder='Enter name of the course...' onChange={(event) => setName(event.target.value)} />
      <input placeholder='Enter name of the instructor...' onChange={(event) => setInstructor(event.target.value)} />
      <textarea placeholder='Enter course description...' onChange={(event) => setDescription(event.target.value)} />
      <textarea placeholder='Enter module description...' onChange={(event) => setModuleDescription(event.target.value)} />
      <input placeholder='Enter title...' onChange={(event) => setTitle(event.target.value)} />
      <input type="file" accept="video/*" multiple onChange={handleFileChange} />
      <button onClick={uploadCourse}>Upload Course</button>
      {showVid && <video controls src={selectedVideoUrl.url} width="90%" />}

      {videoUrl.map((data, index) => (

        <div key={index}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={require("./assets/cinema.webp")} width="50%" onClick={() => showVideo(data)} />
            <div>
              <p>Tittle:{data.title}</p>
              <button onClick={showEdit}>Edit</button>
            </div>
          </div>
          <hr />
        </div>
      ))}
      {showEditForm && <EditForm/>} */}
      <SignIn/>
    </div>
  );
}

export default App;
