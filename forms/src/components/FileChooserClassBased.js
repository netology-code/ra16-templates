import React, { Component } from 'react'

export class FileChooserClassBased extends Component {
    constructor(props) {
        super(props);
        this.fileRef = React.createRef();
    }

    handleSubmit = evt => {
        evt.preventDefault();
        console.dir(this.fileRef.current.files);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="file" ref={this.fileRef} />
                <button>Ok</button>
            </form>
        )
    }
}

export default FileChooserClassBased