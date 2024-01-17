import React, { Fragment, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function FileUpload() {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose a file');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [frameClass, setFrameClass] = useState('hidden'); // Initial class to hide the frame

    const notify = () => toast(`Your file ${fileName} has been uploaded`);

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setMessage('No file uploaded');
            toast.error(message);
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath });
            notify();

            // Display the frame by removing the 'hidden' class
            setFrameClass('');
        } catch (error) {
            if (error) {
                console.log('There was a problem with the server');
            } else {
                console.log(error.response.data.msg);
            }
        }
    };

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <center><label>{fileName}</label></center>
                <div className="custom-file mb-4">
                    <input
                        className="form-control mb-4"
                        type="file"
                        id="formFileMultiple"
                        multiple
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block w-100">
                    Submit
                </button>
            </form>

            {uploadedFile && (
                <div className={`row mt-5 ${frameClass}`}>
                    <div className="frame">
                        <div className="title">
                            <h3 className='text-center'>{uploadedFile.fileName}</h3>
                        </div>
                        <div style={{ width: '100%', height: '100%' }} className="dropzone">
                            <img style={{ width: '100%', height: '100%' }} src={uploadedFile.filePath} className="upload-icon" alt={uploadedFile.fileName} />
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            )}
        </Fragment>
    );
}

export default FileUpload;
