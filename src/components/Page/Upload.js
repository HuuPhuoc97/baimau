import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTitleAction, uploadAction } from 'actions'

import { Upload, Icon, message } from 'antd'
import {API_URL} from 'config'


function getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg' || true
    if (!isJPG) {
        message.error('You can only upload JPG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!')
    }
    return isJPG && isLt2M
}

class TestUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            
        }
    }
    componentDidMount() {
        this.props.setTitle('Upload', 'Home/upload')
    }
    handleChange = (info, event) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true })
            return
        }
        if (info.file.status === 'done') {
            console.log(info);
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                })
            );
            const data = new FormData();
            data.append('photo', info.file.originFileObj, info.file.originFileObj.name)    
            data.append('title', "helo")
            data.append('content', "helo")
            this.props.dispatch(uploadAction(data))
        }
    }

    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        )
        const imageUrl = this.state.imageUrl
        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action={API_URL +"/upload"}
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
            </Upload>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch,
    setTitle: (title, breadcumb) => dispatch(setTitleAction(title, breadcumb)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestUpload)
