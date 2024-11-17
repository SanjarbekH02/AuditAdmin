import React, { useState } from 'react';
import './AddLesson.css'

const AddLesson = () => {

    const [fileName, setFileName] = useState("Add file")
    const [videoName, setVideoName] = useState("Add video")

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(file){
            setFileName(file.name)
        }
    }

    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        if(file){
            setVideoName(file.name)
        }
    }

    return (
        <div className='add'>
            <div className="add-select">
                <h3 className="add-select-title">Darslikni tanlang:</h3>
                <select className='select-change'>
                    <option value="Audit" className="select-option">Buxgalteriya va audit mavzusi</option>
                    <option value="Buxgalteriya" className="select-option">Buxgalteriya</option>
                    <option value="Hisobot" className="select-option">Hisobot chiqarish mavzusi</option>
                </select>
            </div>

            <div className="add-file-block">
                <div className="add-file-left">
                    <p className="add-file-title">File qo’shish</p>
                    <div className="add-file">
                        <p className="added-file">{fileName}</p>
                        <i class="ri-add-box-line"></i>
                        <input onChange={handleFileChange} type="file" className="add-input" />
                    </div>
                </div>

                <div className="add-file-left">
                    <p className="add-file-title">Video qo’shish</p>
                    <div className="add-file">
                        <p className="added-file">{videoName}</p>
                        <i class="ri-add-box-line"></i>
                        <input onChange={handleVideoChange} type="file"  accept="video/*" className="add-input" />
                    </div>
                </div>
            </div>

            <div className="add-text">
                <div className="add-file-left">
                    <p className="add-file-title">Matn yozish</p>
                    <textarea placeholder='Your text here' type="textarea" className="textarea" />
                </div>
                <div className="add-text-right">
                    <button type='reset' className="cancel-btn">Cancel</button>
                    <button className="fonfirm-btn">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default AddLesson;
