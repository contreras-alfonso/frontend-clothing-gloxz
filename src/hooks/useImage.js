import React, { useState } from 'react'

export const useImage = (initialValues) => {
    const [selectedImages, setSelectedImages] = useState(initialValues);
    const [fileList, setFileList] = useState(initialValues);

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);
        
        // Obtener objetos de imagen previos para no perderlos
        const previous = [...fileList].concat(selectedFilesArray);
        setFileList(previous);

        const imagesArray = selectedFilesArray.map((file) => {
            const imageURL = URL.createObjectURL(file);
            return {
                id: imageURL, // Utiliza la URL de objeto como identificador único
                file: file,
            };
        });

        const previousImages = [...selectedImages].concat(imagesArray);
        setSelectedImages(previousImages);
    };

    const onDeleteFile = (image) => {
       
        let previusSelectedImages = [...selectedImages];
        previusSelectedImages = previusSelectedImages.filter(e=>e.id!==image.id)
        setSelectedImages(previusSelectedImages);
        let previusFileList = [...fileList];
        previusFileList = previusFileList.filter(e=>e!==image.file);
        setFileList(previusFileList);
        
    };

    return {
        selectedImages,
        setSelectedImages,
        onSelectFile,
        onDeleteFile,
        fileList,
    };
};
