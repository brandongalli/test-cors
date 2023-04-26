import logo from './logo.svg';
import './App.css';

function App() {
  const img = document.createElement('img');
  img.src = 'https://imbc.adfontesmedia.com/mediaicons/newswars_com.png';
  img.crossOrigin = 'anonymous';
  img.addEventListener('load', () => {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    var lnk = document.createElement("a");
    lnk.download = `chart3_${new Date().toLocaleString()}.png`;
    lnk.href = canvas.toDataURL("image/png;base64");
    lnk.click();
  });
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="https://afcart-public-cors.s3.us-east-2.amazonaws.com/brandicons/100percentfedup_com.png" className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <img src="https://afcartpublic.s3.us-east-2.amazonaws.com/mediaicons/100percentfedup.png"></img>
      <img src="https://afcartpublic.s3.us-east-2.amazonaws.com/mediaicons/Dear_America.png"></img>
      <img src="https://afcartpublic.s3.us-east-2.amazonaws.com/mediaicons/11alive.jpg"></img> */}

    </div>
  );
}
// [
//     {
//         "AllowedHeaders": [
//             "*"
//         ],
//         "AllowedMethods": [
//             "PUT",
//             "POST",
//             "DELETE"
//         ],
//         "AllowedOrigins": [
//             "*"
//         ],
//         "ExposeHeaders": [],
//         "MaxAgeSeconds": 3000
//     }
// ]
export default App;
