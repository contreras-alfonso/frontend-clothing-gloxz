import React, { useState } from 'react'

export const useImage = (initialValues) => {
    
    const [selectedImages,setSelectedImages] = useState(initialValues);
    const [fileList,setFileList] = useState(initialValues);

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles)
    
        //obteniendo los objetos de imagen previos, para no perderlos
        const previus = [...fileList].concat(selectedFilesArray);
        //almacenandolo
        setFileList(previus);

        const imagesArray = selectedFilesArray.map(file=>{
            return URL.createObjectURL(file)
        })
            
        const previousImages = [...selectedImages].concat(imagesArray);

        setSelectedImages(previousImages);
      
    }

    return {
        selectedImages,
        setSelectedImages,
        onSelectFile,
        fileList,
      
    }
}
