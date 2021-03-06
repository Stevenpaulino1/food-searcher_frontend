import React, { Component } from "react";
let image;
export default class UploadPhoto extends Component {
  state = {
    img: null
  };

  showWidget = widget => {
    widget.open();
  };

  checkUploadResult = (resultEvent, widget) => {
    // console.log("Steven holla",resultEvent.event);
    // console.log(widget);
    if (resultEvent.event === "success") {
      widget.close();
      this.setState({ img: resultEvent.info.secure_url });
      this.props.handlePhoto(resultEvent.info.secure_url);
    }
  };

  render() {
    // console.log(this.props);
    // console.log("this is your photo",this.state.photo)
    let widget = window.cloudinary.createUploadWidget(
      { cloudName: "df3knd9zd", uploadPreset: "rfk3xygs" },
      (error, result) => {
        this.checkUploadResult(result, widget);
      }
    );

    if (this.state.img) {
      image = <img className="box" src={this.state.img} alt="" />;
    }

    return (
      <div className="row">
        {this.state.img ? null : (
          <button onClick={() => this.showWidget(widget)}>
            Click to upload photo!{" "}
          </button>
        )}

        {image}
      </div>
    );
  }
}
