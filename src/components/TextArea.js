import React, { useState } from 'react';

export default function TextArea(props) {
    var copyTxt = document.getElementById('copytxt')
    const [text, setText] = useState("");
    const alerts = document.getElementById('alert');
    const [alert, setAlert] = useState({
        style:{
            display:"block"
        }
    });
    window.mobileCheck = function () {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };
    
    let showAlert = (type, message) => {
        setAlert({
            typ: type,
            msg: message,
            style:{
                display:"block"
            }
        })
    }
    
    let handleOnchange = (e) => {
        setText(e.target.value);
        setAlert({});
    }
    let handleUpClick = () => {
        if (text === "") {
            showAlert("danger", "Please type in some text to analyze")
            alerts.classList.add('alert')
        }
        else {
            let upText = text.toLocaleUpperCase();
            setText(upText);
            showAlert("success", "Converted to Uppercase.")
        }
    }
    let handleLowClick = () => {
        if (text === "") {
            showAlert("danger", "Please type in some text to analyze")
            alerts.classList.add('alert')
        }
        else {
            let lowText = text.toLocaleLowerCase();
            setText(lowText);
            showAlert("success", "Converted to Lowercase.");
        }

    }
    let handleEsClick = () => {
        if (text === "") {
            showAlert("danger", "Please type in some text to analyze")
            alerts.classList.add('alert')
        }
        else {
            let esText = text.replace(/\s+/g, ' ').trim();
            setText(esText)         
            showAlert("success", "Extra spaces removed.");

        }
    }
    let handleRsClick = () => {
        if (text === "") {
            showAlert("danger", "Please type in some text to analyze")
            alerts.classList.add('alert')
        }
        else {
            let rsText = text.replaceAll(" ", "");
            setText(rsText)
            showAlert("success", "All spaces removed.");
        }
    }
    let handleClrClick = () => {
        if (text === "") {
            showAlert("danger", "Textbox is empty")
            alert("Your browser doesn't allow automatic copying. Try copying manually.")
            alerts.classList.add('alert')
        }
        else {
            setText("")
            showAlert("success", "Text cleared.");
        }
    }
    let handleCopyClick = () => {
        if (text === "") {
            showAlert("danger", "Enter some text to copy");
            alerts.classList.add('alert')
        }
        else {
            if (window.mobileCheck()) {
                copyTxt.select();
                copyTxt.setSelectionRange(0, 99999);
                showAlert("danger", "Your browser doesn't allow copying automatically. Try copying manually.")
            }
            else {
                copyTxt.select();
                copyTxt.setSelectionRange(0, 99999);
                let txt = copyTxt.value
                navigator.clipboard.writeText(txt);
                showAlert("success", "Text Copied.")
            }

        }
    }
    


    return (
        <div>
            <div className="container px-4 px-md-0">
                <div className="row mt-4">
                    <h1 className="display-6 fw-bold">Type in any text to Analyze.</h1>
                </div>
                <div className="row d-flex">
                    <div className="col-3 flex-grow-1 align-self-center">
                        <p className="lead"><span style={{ color: "#59319d", fontWeight: "bold" }}>{text.length === 0 || text.endsWith(' ') ? (text.split(' ').length) - 1 : text.split(' ').length}</span> Words, <span style={{ color: "#59319d", fontWeight: "bold" }}>{text.length}</span> Characters</p>
                        <p className={`fw-bold text-${alert.typ} m-0 p-0`} id="alert" style={alert.style}>{alert.msg}</p>
                    </div>
                </div>
                <div className="row">
                <div className="col-auto ms-auto">
                        <button className="btn"><iconify-icon icon="akar-icons:copy" style={props.iconStyle} onClick={handleCopyClick}></iconify-icon></button>
                        <button className="btn p-0 m-0 mx-md-1" onClick={handleClrClick}><iconify-icon icon="ant-design:delete-outlined" style={props.iconStyle}></iconify-icon></button>
                    </div>
                    <div className="mb-4">
                        <textarea className="form-control p-3" id="copytxt" placeholder='Enter text here...' value={text} onChange={handleOnchange} rows="10" style={props.inpStyle} spellCheck="true"></textarea>
                    </div>
                </div>
                <div className="row gap-2 d-flex align-items-center justify-content-center mb-5">
                    <button className="btn col-5 col-md-2" onClick={handleUpClick} style={props.scBtnStyle}>Convert to Uppercase</button>
                    <button className="btn col-5 col-md-2" onClick={handleLowClick} style={props.scBtnStyle}>Convert to Lowercase</button>
                    <button className="btn col-5 col-md-2" onClick={handleEsClick} style={props.scBtnStyle}>Remove extra spaces</button>
                    <button className="btn col-5 col-md-2" onClick={handleRsClick} style={props.scBtnStyle}>Remove all the spaces</button>
                </div>
            </div>

        </div >
    )
}
