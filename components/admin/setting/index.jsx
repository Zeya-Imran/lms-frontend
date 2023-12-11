'use client'
import Layout from "@components/shared/layout";
import { Card, Button, Input, Form, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const Setting = () => {
    const [status, setStatus] = useState([
        {
            id: 1,
            title: 'success',
            color:  'green'
        },
        {
            id: 2,
            title: 'pending',
            color:  'orange'
        },
        {
            id: 3,
            title: 'fail',
            color:  'red'
        }
    ]);

    const bankAccout = (values)=>{
        console.log(values);
    }
  return (
    <div>
      <Layout title="Setting" subtitle="basic settign and profile setup">
        <div className="grid grid-cols gap-8">
          <Card
            type="inner"
            title={<h1 className="text-xl font-semibold">Profile</h1>}
            className="col-span-3"
          >
            <div>fdfdsfsd</div>
          </Card>

          <Card
            type="inner"
            title={<h1 className="text-xl font-semibold">dfsdf</h1>}
            className="col-span-2"
          >
            <div>fdfdsfsd</div>
          </Card>

          <Card
            type="inner"
            title={<h1 className="text-xl font-semibold">Status</h1>}
            className=""
          >
            <div>
                {
                    status.map((item)=>
                    (
                        <Tag color={item.color} className='capitalize' key={item.id}>{item.title}</Tag>
                    ))
                }
            </div>
            <Button
                icon={<PlusOutlined />}
                className="bg-indigo-600 mt-4"
                type="primary"
                size="large"
                style={{borderRadius:0}}
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
      </Layout>
    </div>
  );
};

export default Setting;
