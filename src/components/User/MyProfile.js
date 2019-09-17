import React, { Component } from 'react';
import { setTitleAction, uploadAvatarAction, updateAction } from 'actions'
import Menuuser from './MenuLeft';
import { connect } from 'react-redux'
import { Upload, Icon, message } from 'antd'
import { API_URL } from 'config';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg' || true
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            username: '',
            company: '',
            email: '',
            position: '',
            message: '',
            isSuccess: false,

            loading: false,
            // imageUrl: '',
        }

    }
    changeName = e => {
        this.setState({ name: e.target.value })
    }
    changeUsername = e => {
        this.setState({ username: e.target.value })
    }
    changeCompany = e => {
        this.setState({ company: e.target.value })
    }
    changePosition = e => {
        this.setState({ position: e.target.value })
    }
    changeEmail = e => {
        this.setState({ email: e.target.value })
    }

    changeAvatar = (info, event) => {
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
            data.append('avatar', info.file.originFileObj, info.file.originFileObj.name);
            this.props.dispatch(uploadAvatarAction(data, this.props.auth.id)).then(({ value, action }) => {
                if (!value.error) {
                    message.success('Upload avatar successful!');
                    this.setState({
                        isSuccess: true,
                        message: '',
                    })
                }
            })
        }
    }

    submitForm = e => {
        let data = {
            name: this.state.name,
            username: this.state.username,
            company: this.state.company,
            position: this.state.position,
            email: this.state.email
        }
        console.log(this.props.auth);

        e.preventDefault()
        this.props.dispatch(updateAction(data, this.props.auth.id)).then(({ value, action }) => {
            if (!value.error) {
                message.success('Update successful!');
                this.setState({
                    isSuccess: true,
                    message: '',
                })
                return
            } else {
                this.setState({
                    isSuccess: false,
                    message: value.message,
                })
            }
        })
    }
    componentDidMount() {
        this.props.dispatch(setTitleAction("PROFILE", 'Home / Page / Profile'));
    }
    render() {
        let { auth } = this.props;
        if (auth != null && !this.state.name) {
            this.setState({
                name: auth.name,
                username: auth.username,
                company: auth.company,
                position: auth.position,
                email: auth.email,
            })
        }
        console.log(auth);
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        // const imageUrl = this.state.imageUrl;
        return (
            <div className="profile row">
                <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 "></div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                    <Menuuser />
                    <style dangerouslySetInnerHTML={{ __html: "\n#prf {\ncolor:#1fbfda;\n}\n" }} />
                </div>
                <div className="infoprofile col-xs-12 col-sm-5 col-md-5 col-lg-5">
                    <div className="titleprofile">
                        <p className="col-xs-1 col-sm-1 col-md-1 col-lg-1">Profile</p>
                        <div className="borderbottom col-xs-11 col-sm-11 col-md-11 col-lg-11"></div>
                    </div>
                    <div className="row">
                        <div className="avatar col-xs-3 col-sm-3 col-md-3 col-lg-3">

                            {/* {imageUrl || auth && auth.avatar ? <img src={ imageUrl} alt="avatar" /> : uploadButton} */}

                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action={API_URL + "/upload"}
                                beforeUpload={beforeUpload}
                                onChange={this.changeAvatar}
                            >
                                {auth && auth.avatar ? <img src={API_URL + auth.avatar.url} alt="avatar" /> : uploadButton}
                            </Upload>
                        </div>
                        <div className="info col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            <span className="start">*</span><span>Name</span>
                            <input type="text" className="form-control" placeholder="Name" onChange={this.changeName} value={this.state.name} />
                            <span>Username</span>
                            <input type="text" className="form-control" placeholder="User name" onChange={this.changeUsername} value={this.state.username} />
                            <span className="start">*</span><span>Email</span>
                            <input type="text" className="form-control" placeholder="abc@gmail.com" onChange={this.changeEmail} value={this.state.email} disabled />
                            <span>Your company</span>
                            <input type="text" className="form-control" onChange={this.changeCompany} value={this.state.company} />
                            <span>Position</span>
                            <input type="text" className="form-control" onChange={this.changePosition} value={this.state.position} />
                            <button type="button" className="btn" onClick={this.submitForm}>Update</button>
                        </div>
                    </div>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        title: state.title,
        auth: state.Common.auth,
    }
}
export default connect(
    mapStateToProps
)((Profile));
