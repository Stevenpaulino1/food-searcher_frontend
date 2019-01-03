import React, { Component } from 'react';

class EditTextButton extends Component {
  state = {

  }

  iconMapper = () => {
    switch (this.props.cmd) {
      case "italic":
        return <i className="fas fa-italic"></i>
      case "bold":
        return <i className="fas fa-bold"></i>
      case "underline":
        return <i className="fas fa-underline"></i>
      case "strikeThrough":
        return <i className="fas fa-strikethrough"></i>
      case "insertUnorderedList":
        return <i className="fas fa-list-ul"></i>
      case "insertOrderedList":
        return <i className="fas fa-list-ol"></i>
      case "justifyCenter":
        return <i className="fas fa-align-center"></i>
      case "justifyLeft":
        return <i className="fas fa-align-left"></i>
      case "justifyRight":
        return <i className="fas fa-align-right"></i>
      case "indent":
        return <i className="fas fa-indent"></i>
      case "outdent":
        return <i className="fas fa-outdent"></i>
      default:
    }
  }

  commandMapper = {
    italic: { image: <i className="fas fa-italic"></i>, title: "Italic" },
    bold: { image: <i className="fas fa-bold"></i>, title: "Bold" },
    underline: { image: <i className="fas fa-underline"></i>, title: "Underline" },
    strikeThrough: { image: <i className="fas fa-strikethrough"></i>, title: "Strikethrough" },
    insertUnorderedList: { image: <i className="fas fa-list-ul"></i>, title: "Unordered List" },
    insertOrderedList: { image: <i className="fas fa-list-ol"></i>, title: "Ordered List" },
    justifyCenter: { image: <i className="fas fa-align-center"></i>, title: "Align Center" },
    justifyLeft: { image: <i className="fas fa-align-left"></i>, title: "Align Left" },
    justifyRight: { image: <i className="fas fa-align-right"></i>, title: "Align Right" },
    indent: { image: <i className="fas fa-indent"></i>, title: "Indent" },
    outdent: { image: <i className="fas fa-outdent"></i>, title: "Outdent" }
  }


  render() {
    const cmd = this.props.cmd
    return (
      <button
        className="edit-text-button"
        key={cmd}
        title={this.commandMapper[cmd].title}
        onClick={e => e.preventDefault()}
        onMouseDown={evt => {
          evt.preventDefault();
          document.execCommand(cmd, false, this.props.arg);
        }}
      >
        {this.commandMapper[cmd].image}
      </button>
    );

  }
}

export default EditTextButton;
