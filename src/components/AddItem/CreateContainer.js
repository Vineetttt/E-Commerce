import React, { useState } from 'react';
import { categories } from "../../utils/data";
import {MdCloudUpload,MdDelete} from 'react-icons/md';
import {ref,uploadBytesResumable,getDownloadURL,deleteObject} from "firebase/storage";
import {saveItem,getItems, getAllData} from "../../utils/firebaseFunctions";
import { actionType } from "../../context/reducer";
import { useStateValue } from '../../context/StateProvider';
import './CreateContainer.css';
import Loader from '../Loader/Loader';
import { storage } from '../../firebase.config';

function CreateContainer() {
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [category,setCategory] = useState("");
  const [imageAsset,setImageAsset] = useState(null);
  const [fields,setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg,setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{ clothes },dispatch] = useStateValue();

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage,`Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef,imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try AGain 🙇");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully 😊");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };
  const deleteImage = () =>{
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully 😊");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };
  const saveDetails = () =>{
    setIsLoading(true);
    try {
      if (!title || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data Uploaded successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try AGain 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }

    fetchData();
  };
  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setPrice("");
    setCategory("Select Category");
  };
  const fetchData = async () =>{
    await getAllData().then((data) => {
      dispatch({
        type: actionType.SET_CLOTHES,
        clothes:data
      })
    });
  };
  return (
    <div className='container'>
        <form>
          <div className='titleInput'>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give me a title..."
          />
          </div>
          <div className='selectOption'>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="other" className="bg-white">
                Select Category
              </option>
                {categories &&
                  categories.map((item) => (
                    <option
                      key={item.id}
                      className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                      value={item.urlParamName}
                    >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className='imageInput'> 
            {isLoading ? <Loader/> 
            : <>
                {!imageAsset ? <>
                  <label className='imageAssestPresent'>
                    <div className="imageAssestPresent">
                      <MdCloudUpload className='imageAssestPresentText'/>
                      <p className='imageAssestPresentText'>Click here to upload</p>
                    </div>
                    <input type="file" name='uploadimage' accept='image/*'
                    onChange={uploadImage} className="chooseFile"/>
                  </label>
                </> 
                :<>
                <div className="imageAssestAbsent">
                  <img src={imageAsset} alt="Uploaded image" className='imageUploaded'/>
                  <button type='reUpload'
                  onClick={deleteImage}><MdDelete/></button>
                </div>
                </>}
              </> }
          </div>
          <div className="price">
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
          <div className="saveButton">
          <button
            type="button"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
        </form>
    </div>
  )
}

export default CreateContainer

/* <div className="alertContainer">
          {
            fields && (
              <p
                className={`message ${
                  alertStatus === "danger"
                  ? "dangerClass" : "normalClass"
                }`}>
                Something wrong
              </p>
            )
          }
        </div>
        <div className="form">
            <input 
            type="text" 
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give me a title..."
            className='formTitle'/>
        </div>*/