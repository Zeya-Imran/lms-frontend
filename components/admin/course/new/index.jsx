/*
    -New Courses component
**/
'use client'
import Image from 'next/image';
import Layout from '@components/shared/layout';
import Editor from '@components/shared/editior';
import { useEffect, useState } from 'react';
import { CheckOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, Button, Input, List, Form, Select, Upload, Modal, Checkbox } from "antd";
// codee for preview images
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const NewCourses = ()=>{
    const [editorValue, setEditorValue] = useState('');
     // start upload code
     const [previewOpen, setPreviewOpen] = useState(false);
     const [previewImage, setPreviewImage] = useState('');
     const [previewTitle, setPreviewTitle] = useState('');
     const [fileList, setFileList] = useState([]);
     const handleCancel = () => setPreviewOpen(false);
     const handlePreview = async (file) => {
         if (!file.url && !file.preview) {
         file.preview = await getBase64(file.originFileObj);
         }
         setPreviewImage(file.url || file.preview);
         setPreviewOpen(true);
         setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
     };
     const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
// end upload code

    const onFinish = (values)=>{
        values.description = editorValue;
        console.log(values);
    }
    const category = [
        {
            name: 'Frontend'
        },
        {
            name: 'Backend'
        },
        {
            name: 'Fullstack'
        }
    ]
    const [editorLoading, setEditorLoading] = useState(true);
    useEffect(()=>{
        setEditorLoading(false);
    },[])
    const UploadButton = ()=>{
        return(
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          )
    }
    return(
        
        <Layout
            title='New Courses'
            subtitle='create a course to start your new Journey'
        >   
        <div className='flex gap-5'>
            <div className='w-9/12'>
                <Card
                    title="Course Information"
                >
                    <Form onFinish={onFinish} layout='vertical'>
                        <div className='flex gap-x-4'>
                        <Form.Item
                            className='w-full'
                            label="Corse Title"
                            name="title"
                            rules={[{required:true, message: 'Course Title is required'}]}
                        >
                            <Input size='large' placeholder='Enter the title name' style={{borderRadius:0}} />
                        </Form.Item>
                        <Form.Item
                            label="Duration"
                            name='duration'
                            rules={[{required:true, message: 'Duration is required'}]}
                        >
                            <Input 
                                type='number' 
                                size='large' 
                                placeholder='3' 
                                style={{borderRadius:0}} 
                                addonAfter={
                                    <Form.Item name='durationIn'>
                                        <Select 
                                            style={{minWidth:100,}} 
                                            placeholder='Select'
                                            size='large'
                                        >
                                            <Select.Option value="year">Year</Select.Option>
                                            <Select.Option value="month">Month</Select.Option>
                                            <Select.Option value="days">Days</Select.Option>
                                            <Select.Option value="hors">Hours</Select.Option>
                                        </Select>
                                    </Form.Item>
                                }
                            />
                            
                        </Form.Item>
                        </div>

                        <div className='flex gap-x-4'>
                        <Form.Item
                                className='w-full'
                                label="Category"
                                name="category"
                                rules={[{required:true, message: 'Category is required'}]}
                                
                            >       
                                <Select size='large' placeholder="Select" style={{borderRadius:0}} >
                                    {
                                        category.map((items,index)=>(
                                            <Select.Option key={index} value={items.name.toLocaleLowerCase()}>
                                                {items.name}
                                            </Select.Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item
                                className='w-full'
                                label="Price"
                                name="price"
                                rules={[{required:true, message: 'Price is required'}]}
                            >
                                <Input size='large' placeholder='3' style={{borderRadius:0}} 
                                />
                            </Form.Item>
                            <Form.Item
                                className='w-full'
                                label="Discount"
                                name="discount"
                            >
                                <Input size='large' placeholder='3' style={{borderRadius:0}} 
                                    addonAfter={<span className='semi-bold'>%</span>}
                                />
                            </Form.Item>
                        </div>
                        <Form.Item
                            className='w-full'
                            label="Description"
                            name="description"
                            >
                             <Editor 
                                loading={editorLoading}
                                getValue={(value)=>setEditorValue(value)}
                            />   
                        </Form.Item>

                        <Form.Item
                            className='w-full'
                            label="Thumbnail (1280 * 720)"
                            name="thumbnail"
                            rules={[{required: true, message: "Thunbnail is required"}]}
                            >
                             <Upload
                                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                            >
                                {fileList.length === 0 && <UploadButton />}
                            </Upload>
                        </Form.Item>
                        <div className='flex gapx-x-5'>
                            <Form.Item>
                                <Checkbox>is Free?</Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <Checkbox>is Live?</Checkbox>
                            </Form.Item>
                        </div>
                        <Form.Item>
                            <Button 
                                htmlType='submit'
                                size='large' 
                                type="primary" 
                                className='bg-violet-600'
                                style={{borderRadius:0}}
                            
                            >Create</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
                
                {/* Category create div */}
            <div className='w-3/12'>
                <Card title="Category">
                    <Input 
                        size="large"
                        placeholder="Category name"
                        suffix={<Button 
                            icon={<CheckOutlined className="text-white" />}
                            className="flex items-center justify-center bg-green-400"
                            type="text"
                            shape="circle"
                        />}
                        style={{borderRadius:0, marginBottom: 16}}
                    />
                    <List
                        className="demo-loadmore-list font-semibold"
                        itemLayout="horizontal"
                        dataSource={category}
                        renderItem={(item) => (
                            <List.Item
                            actions={[
                            <Button key="edit" type='text' className='text-blue-600 font-semibold' >Edit</Button>, 
                            <Button key="delete" type='text' className='text-rose-600 font-semibold' >Delete</Button>                            ]}
                            >  {item.name}
                            </List.Item>
                        )}
                    />

                </Card>
            </div>
        </div>

        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
            <Image
            alt="example"
            width={0}
            height={0}
            layout='responsive'
            src={previewImage}
            />
        </Modal>
        </Layout>

    )
}

export default NewCourses;