
import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router';
import './WebcamCapture.css';


const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
}

const WebcamCapture = () => {

  const webcamRef = useRef(null)
  // const [image, setImage] = useState(null)

  const dispatch = useDispatch();
  const history = useHistory();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // console.log('img src : ', imageSrc);
    dispatch(setCameraImage(imageSrc))
    // setImage(imageSrc)
    history.push('/preview')
  }, [webcamRef])

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        width={videoConstraints.width}
      />
      <RadioButtonCheckedIcon
        className="webcamCapture_button"
        onClick={capture}
        fontSize="large"
      />
    </div>
  )
}

export default WebcamCapture
