import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Profile.css';
import User from '../assets/images/User.png';
import { updateProfile, getProfile } from '../abi/firebasecode';
import firebase from 'firebase/app';
import 'firebase/storage';
import { useWeb3ModalAccount } from '@web3modal/ethers5/react';
import { useNavigate } from 'react-router-dom';
import { ProfileContext, SignatureContext } from '../SignatureContext';

const Profile = () => {
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { signature, setSignature } = useContext(SignatureContext);
    const [username, setUsername] = useState('');
    const { profileImage,setProfileImage  } = useContext(ProfileContext);
    const [edit, setEdit] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        if(!signature)
            navigate("/");
    }, [])

    useEffect(() => {
        async function fetchProfile() {
            try {
                const walletAddress = localStorage.getItem("walletAddress");
                const profile = await getProfile(walletAddress);
                if (profile) {
                    setUsername(profile.username);
                    setProfileImage(profile.image);
                }
                else{
                    setProfileImage(User);
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        }
        fetchProfile();
    }, [isConnected, address]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        console.log("File", file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                console.log("reader.result", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = async () => {
        const walletAddress = localStorage.getItem("walletAddress");
        if (imageFile) {
            const storageRef = firebase.storage().ref(`profileImages/${walletAddress}`);
            const uploadTask = storageRef.put(imageFile);
            uploadTask.on('state_changed', 
                (snapshot) => {
                },
                (error) => {
                    console.error("Error uploading image:", error);
                    toast.error("Error uploading image:")
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
                        await updateProfile(walletAddress, username, downloadURL);
                        setProfileImage(downloadURL);
                        console.log("Profile updated successfully!");
                        toast.success("Profile updated successfully!")
                        setEdit(false);
                    });
                }
            );
        } else {
            await updateProfile(walletAddress, username, profileImage);
            console.log("Profile updated successfully!");
            toast.success("Profile updated successfully!")
            setEdit(false);
        }
    };

    const logOut = () => {
        setSignature('');
        navigate("/");
    }

    return (
        <>
            <ToastContainer position='bottom-right' draggable={false} transition={Zoom} autoClose={4000} closeOnClick={false} />
            <div className='Dashboard_main_wrapper_ov'>
                <div className='box_main_border_ov'>
                    {edit ? <>
                        <div className='trade_now_block_ov'>
                            <div className="profile-header-container">
                                <h4>Edit Profile</h4>
                                <button onClick={() => setEdit(false)}>Cancel</button>
                            </div>
                            <div className='profile_image_section'>
                                <label htmlFor='profileImageUpload' className='profile_image_label'>
                                    {profileImage ? (
                                        <img src={profileImage} alt="Profile" className="profile_image_preview" />
                                    ) : (
                                        <div className="profile_image_placeholder">Upload Image</div>
                                    )}
                                </label>
                                <input
                                    type="file"
                                    id="profileImageUpload"
                                    style={{ display: 'none' }}
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div className='profile_details_section'>
                                <label htmlFor='username'>Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    placeholder="Enter your username"
                                />
                                <label htmlFor='walletAddress'>Wallet Address</label>
                                <input
                                    disabled
                                    type="text"
                                    id="walletAddress"
                                    value={localStorage.getItem("walletAddress")}
                                    placeholder="Enter your wallet address"
                                />
                            </div>
                            <center>
                                <button className='submit-button' onClick={handleSubmit}>Submit</button>
                            </center>
                        </div>
                    </> :<>
                        <div className='trade_now_block_ov'>
                            <div className="profile-header-container mb-4">
                                <h4>Profile</h4>
                                <button className='submit-button' onClick={logOut}>Log out</button>
                            </div>
                        <div className='profile_image_section'>
                            <label htmlFor='profileImageUpload' className='profile_image_label'>
                                <img src={profileImage} alt="Profile" className="profile_image_preview" />
                            </label>
                        </div>
                        <center><button className='silver-button' onClick={() => setEdit(true)}>Edit</button></center>
                        <div className='profile_details_section'>
                            <label htmlFor='username'>Username</label>
                            <input
                                disabled
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder=""
                            />
                            <label htmlFor='walletAddress'>Wallet Address</label>
                            <input
                                disabled
                                type="text"
                                id="walletAddress"
                                value={localStorage.getItem("walletAddress")}
                                placeholder=""
                            />
                        </div>
                        </div>
                    </>}
                </div>
            </div>
        </>
    );
}

export default Profile;
