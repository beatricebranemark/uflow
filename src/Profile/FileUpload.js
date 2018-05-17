import React from 'react';
import Dropzone from 'react-dropzone';

const FileUpload = ({children}) => (
  <Dropzone className= "ignore" onDrop = {(files) => console.log(files)}>
  {children}
  </Dropzone>
);
export default FileUpload;
