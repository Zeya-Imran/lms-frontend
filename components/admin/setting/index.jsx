'use client'
import Layout from "@components/shared/layout";
import { Card, Button, Input, Form, Tag, Empty, Modal, Avatar } from "antd";
import { PlusOutlined, EditFilled, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const Setting = () => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState([]);
    const [edit, setEdit] = useState(false);

    //getting account details
    const bankAccout = (values)=>{
        console.log(values);
    }
    
    const createStatus = (values)=>{
      setStatus([...status,values])
      setOpen(false);
  }

  return (
    <div>
      <Layout title="Setting" subtitle="basic settign and profile setup">
        <div className="grid grid-cols gap-8">
          <Card
            type="inner"
            title={<h1 className="text-xl font-semibold">Profile</h1>}
            className="col-span-3"
            extra={
              <Button 
                shape="circle"
                icon={<EditFilled />}
                className="flex items-center justify-center"
                type="text" onClick={()=>setEdit(!edit)}
                size="large"
              />
            }
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Avatar size={64} icon={<UserOutlined />} className="" />
                <div>
                  <h1>Zeya Imran</h1>
                  <p>zeya@imran.example.in</p>
                </div>
              </div>
              <div>
                <Form className="grid grid-cols-2 gap-4" layout="vertical">
                  <Form.Item
                    label="Fullname"
                    name="fullname"
                  >
                    <Input defaultValue={"Zeya Imran"} size="large" style={{borderRadius:0}}
                      readOnly={!edit} className={`${!edit && 'border-0 p-0 hover:border-0 focus:shadow=none'}`}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    name="email"
                  >
                    <Input defaultValue={"zeya@imran.example.in"} size="large" style={{borderRadius:0}}
                       readOnly={!edit} className={`${!edit && 'border-0 p-0 hover:border-0 focus:shadow=none'}`}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Country"
                    name="country"
                  >
                    <Input defaultValue={"India"} size="large" style={{borderRadius:0}}
                       readOnly={!edit} className={`${!edit && 'border-0 p-0 hover:border-0 focus:shadow=none'}`}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Gender"
                    name="gender"
                  >
                    <Input defaultValue={"Male"} size="large" style={{borderRadius:0}}
                       readOnly={!edit} className={`${!edit && 'border-0 p-0 hover:border-0 focus:shadow=none'}`}
                    />
                  </Form.Item>
                  {
                    edit && 
                    <div className="flex gap-x-2">
                      <Form.Item>
                        <Button htmlType="submit" className="bg-indigo-600" type="primary" size="large">Save</Button>
                      </Form.Item>
                      <Form.Item>
                        <Button htmlType="button" className="bg-rose-600" type="primary" size="large" onClick={()=>setEdit(false)}>Cancel</Button>
                      </Form.Item>
                    </div>
                  }
                </Form>
              </div>
            </div>   
          </Card>

          <Card
            type="inner"
            title={<h1 className="text-xl font-semibold">Domain</h1>}
            className="col-span-2"
          >
             <div className="flex flex-col items-center py-4">
              <Empty
                className="flex flex-col items-center gap-y-2"
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{
                  height: 80,
                }}
                description={ <span>Add your domain for your own branding and identity</span>}
              >
                <Button type="primary" className="bg-indigo-600" style={{borderRadius:0}} size="large">Create Now</Button>
              </Empty>
            </div>
          </Card>

          <Card
            type="inner"
            title={<h1 className="text-lg font-semibold">Status</h1>}
            className="col-span-1 flex flex-col relative"
          >
            <div>
                {
                  status.length === 0 && <Empty />
                }
                {
                    status.map((item,index)=>
                    (
                        <Tag color={item.color} width={40} className='capitalize mb-2' key={index}>{item.title}</Tag>
                    ))
                }
            </div>
            <Button
                icon={<PlusOutlined />}
                className="bg-indigo-600 mt-4 absolute bottom-5"
                type="primary"
                size="large"
                style={{borderRadius:0}}
                onClick={()=>setOpen(true)}
            >Add</Button>
          </Card>

          <Card
            type="inner"
            title={
              <h1 className="text-xl font-semibold">KYC and Bank Account</h1>
            }
            className=""
          >
            <div>
              <Form onFinish={bankAccout}>
                <Form.Item
                  name="beneficiaryName"
                  rules={[
                    { required: true, message: "beneficiary name is required" },
                  ]}
                >
                  <Input
                    placeholder="Accound holder name "
                    size="large"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>

                <Form.Item
                  name="beneficiaryName"
                  rules={[
                    { required: true, message: "account number is required" },
                  ]}
                >
                  <Input
                    placeholder="Accound number "
                    size="large"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>

                <Form.Item
                  name="IFSC"
                  rules={[
                    { required: true, message: "IFSC code is required" },
                  ]}
                >
                  <Input
                    placeholder="IFSC code"
                    size="large"
                    style={{ borderRadius: 0 }}
                  />
                </Form.Item>

                <Form.Item>
                    <Button 
                        htmlType="submit" 
                        size="large" 
                        className="bg-indigo-600" 
                        type="primary" 
                        style={{borderRadius:0}}>Sumbit</Button>
                </Form.Item>
              </Form>
            </div>
          </Card>  
        </div>
        <Modal open={open} title="New status" onCancel={()=>setOpen(false)} footer={null}>
          <Form layout="vertical" onFinish={createStatus}>
            <Form.Item
              name="title"
              rules={[{required: true}]}
            >
              <Input placeholder="title" style={{borderRadius:0}} size="large"/>
            </Form.Item>

            <div className="flex justify-between items-center">
              <Form.Item>
                <Button 
                  htmlType="sbumit" 
                  size="large" 
                  style={{borderRadius:0}} 
                  className="bg-indigo-600" 
                  type="primary">create</Button>
              </Form.Item>
              <Form.Item
                label="Choose color"
                name="color"
                rules={[{required: true}]} width={100} 
              >
                <Input type="color" size="large" style={{borderRadius:0}} width={100} />
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </Layout>
    </div>
  );
};

export default Setting;
