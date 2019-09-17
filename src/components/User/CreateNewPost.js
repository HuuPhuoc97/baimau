import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTitleAction, creatPostAction ,allcategories} from 'actions'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import MenuLeft from './MenuLeft'
import { Upload, Icon, message } from 'antd'
import {API_URL} from 'config'
import Message from 'antd/lib/message';
import { Spin } from 'antd';

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

class CreateNewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            loading: false,
            ispublic: false,
            photo: '',
            info: '',
            categories: 1,
            disabled: false
        }
        this._handleSelect = this._handleSelect.bind(this)
        this._handleSelectcate = this._handleSelectcate.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(
            setTitleAction('Create New Post', 'Home / Blog / Create New Post')
        )
        this.props.dispatch(allcategories()).then(({ value, action }) => {
            console.log(value, action)
        })
    }

    handleChange = (info, event) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true })
            return
        }
        if (info.file.status === 'done') {
            console.log(info)
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                })
            )
            this.setState({
                info,
            })
        }
    }
    _handleSelectcate(event) {
        // const categories = event.target.value;
        console.log('handle', event.target.value)
        this.setState({ categories: event.target.value })
    }
    changeContent = value => {
        this.setState({ content: value })
    }

    _handleSelect(event) {
        const ispublic = event.currentTarget.value === 'true' ? true : false
        console.log('handle', ispublic)
        this.setState({ ispublic })
    }
    changeTitle = e => {
        this.setState({ title: e.target.value })
    }
    submitForm = e => {
        let { auth } = this.props
        var info = this.state.info
        let { cate } = this.props
        console.log('gggggygyy', this.state)
        if(!this.state.title){
            Message.error('Your post title is empty!');
            return;
        }
        if(!this.state.content){
            Message.error('Your post content is empty!');
            return;
        }
        const data = new FormData()
        data.append('user', auth.id)
        data.append('title', this.state.title)
        data.append('content', this.state.content)
        data.append(
            'photo',
            info ? info.file.originFileObj : null,
            info ? info.file.originFileObj.name : null
        )
        data.append('public', this.state.ispublic)
        let categories_obj = cate.find(item => item.id === this.state.categories)
        categories_obj && categories_obj.posts && delete categories_obj.posts;
        let categories = JSON.stringify([categories_obj])
        console.log(categories)
        data.append('categories', categories)
        e.preventDefault()
        this.setState({disabled: true});
        this.props.dispatch(creatPostAction(data)).then(({ value, action }) => {
            if (!value.error) {
                this.setState({
                    title: '',
                    content: '',
                    loading: false,
                    ispublic: false,
                    photo: '',
                    info: '',
                    categories: 1,
                    disabled: false
                });                
                Message.success('Your post was public success !!')
                //this.props.dispatch(push('/creat-new-post'))
            } else {
                this.setState({
                    isSuccess: false,
                    message: value.message,
                })
            }
        })
    }

    render() {
        let { cate } = this.props

        // console.log(cate);
        const { ispublic } = this.state
        console.log(ispublic)
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        )
        const imageUrl = this.state.imageUrl
        if (this.props.location.pathname.indexOf('/create-new-post') >= 0)
            return (
                <div className="NewPost">               
                                           
                    <h2>Create New Post</h2>
        
                    <div className="boder" />
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <MenuLeft />
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: '\n#np {\ncolor:#1fbfda;\n}\n',
                                }}
                            />
                        </div>
                        <div
                            className="col-xs-5 col-sm-5 col-md-5 col-lg-5"
                            onSubmit={this.submitForm}
                        >
                            <div className="line1">
                                <p className="left">
                                    <b>Post Title</b>
                                </p>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={this.state.title}
                                    onChange={this.changeTitle}
                                    required
                                />
                            </div>

                            <div className="avata">
                                <div>
                                    <p className="left">
                                        <b>Photo</b>
                                    </p>
                                </div>
                                <div className="photo">
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action={API_URL + '/upload'}
                                        beforeUpload={beforeUpload}
                                        onChange={this.handleChange}
                                    >
                                        {imageUrl ? (
                                            <img src={imageUrl} alt="avatar" />
                                        ) : (
                                            uploadButton
                                        )}
                                    </Upload>
                                </div>
                            </div>
                            <div className="aa">
                                <div className="row">
                                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                        <p className="left">
                                            <b>Categories</b>
                                        </p>
                                        <select
                                            className="custom-select"
                                            id="inputGroupSelect01"
                                            value={this.state.categories}
                                            onChange={e =>
                                                this._handleSelectcate(e)
                                            }
                                        >
                                            {cate.map(item => (
                                                <option
                                                    value={item.id}
                                                    key={item.id}
                                                >
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
                                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                        <p className="left">
                                            <b>Public</b>
                                        </p>
                                        <select
                                            className="custom-select"
                                            id="inputGroupSelect02"
                                            onChange={this._handleSelect}
                                        >
                                            <option
                                                name="public"
                                                value="false"
                                                checked={ispublic === false}
                                            >
                                                Off
                                            </option>
                                            <option
                                                name="public"
                                                value="true"
                                                checked={ispublic === true}
                                            >
                                                On
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="content left">
                                        <b>Content:</b>
                                    </p>
                                    <form className="form-text-editor">
                                        <div className="form-group editor">
                                            <ReactQuill
                                                modules={CreateNewPost.modules}
                                                formats={CreateNewPost.formats}
                                                value={this.state.content}
                                                onChange={this.changeContent}
                                                bounds={'.editor'}
                                                placeholder={"write content here"}
                                            />
                                        </div>

                                        <div className="boder2" />
                                        <div>
                                            <button
                                                type="button"
                                                className="btn btn-warning"
                                                onClick={this.submitForm}
                                                disabled={this.state.disabled}
                                            >
                                                SUBMIT
                                                <span style={{marginLeft: "10px", display: this.state.disabled ? 'block' : 'none'}}><Spin size="small" /></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
                    </div>
                </div>
            )
    }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
CreateNewPost.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
CreateNewPost.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
]

const mapStateToProps = (state, ownProps) => ({
    cate: state.Categories.cate,
    auth: state.Common.auth,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch,
    setTitle: (title, breadcumb) => dispatch(setTitleAction(title, breadcumb)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateNewPost)
