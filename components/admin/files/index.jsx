'use client'
import Uploaders from './upload';
import List from './list'
import Layout from '@components/shared/layout';
import { Input, Button, Breadcrumb, Modal, Form } from 'antd';
import {  PlusOutlined, SearchOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useState } from 'react';
const Files = () => {
    const [open, setOpen] = useState(false);
    const onFinish = (values)=>{
        console.log(values);
    }
  const Toolbar = ()=>{
    return(
        <>
            <Input 
                className='border-zinc-300 w-96'
                placeholder='Search files'
                style={{borderRadius:0, width:550}}
                suffix={
                    <Button
                        className='flex items-center justify-center text-zinc-300' 
                        type='text'
                    >
                        <SearchOutlined />
                    </Button>
                }
            />
            <Button
                icon={<PlusOutlined />}
                className="bg-indigo-600 font-semibold"
                size="large"
                type="primary"
                style={{borderRadius:0}}
                onClick={()=>setOpen(!open)}
            >
                Create Folder
            </Button>
        </>
    )
}
  return (
    <div>
      <Layout
        title="Files & Media"
        subtitle="Upload your media and use them later"
        toolbar={<Toolbar />}
      >
        <div className="flex flex-col gap-y-6 w-9/12 mx-auto">
          <Uploaders />
          <div className="flex items-center justify-between">
            <Button icon={<ArrowLeftOutlined />} className="bg-white" />
            <Breadcrumb
              items={[
                {
                  title: "Home",
                },
                {
                  title: <a href="">Application Center</a>,
                },
                {
                  title: <a href="">Application List</a>,
                },
                {
                  title: "An Application",
                },
              ]}
            />
          </div>
          <div>
            <List />
          </div>
        </div>
        <Modal open={open} footer={null} title="Create folder" onCancel={()=>setOpen(!open)}>
          <Form onFinish={onFinish}>
            <Form.Item
              name="folder"
              rules={[{ required: true, message: "Folder name is required" }]}
            >
              <Input placeholder="New folder" style={{borderRadius:0}} size='large' />
            </Form.Item>
            <Form.Item>
              <Button type='text' htmlType='submit' size="large" className='bg-indigo-600 text-white font-semibold'>Create</Button>
            </Form.Item>
          </Form>
        </Modal>
      </Layout>
    </div>
  );
}

export default Files