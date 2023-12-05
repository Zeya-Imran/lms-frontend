'use client'
import Country from 'public/json/country.json';
import Logo from "@components/shared/logo";
import Image from 'next/image';
import Link from 'next/link';
import {Form, Input, Button, Divider, Select} from 'antd';
const Register = ()=>{
    const onFinish = ({values})=>{
        console.log(values);
    }
    const prefixSelector = (
        <Form.Item 
            name="prefix" 
            noStyle 
            rules={[{
                required: true,
                message: 'Dial code is required'
            }]}
        >
          <Select
            style={{
              width: 100,
            }}
            placeholder="+00"
          >
            {
                Country.map((item,index)=>(
                    <Select.Option key={index} value={item.dial_code}>
                        {item.dial_code} {item.code}
                    </Select.Option>
                ))
            }
          </Select>
        </Form.Item>
      );
    return (
      <div className="flex min-h-screen">
        <div className="flex flex-col justify-center items-center gap-y-8 w-50 w-6/12">
          <Logo size={75} />
          <Image
            src="/img/register.jpg"
            alt="register"
            width={720}
            height={640}
          />
        </div>

        <div className="flex flex-col justify-center bg-gray-100 items-center w-6/12">
          <div className="bg-white w-7/12 p-8 gap-y-4 flex flex-col animate__animated animate__zoomIn animate__faster">
            <h1>Start your Greate Journy with us!!!</h1>
            <Form onFinish={onFinish}>
              <Form.Item
                name="fullname"
                rules={[{ required: true, message: "Fullname is required" }]}
              >
                <Input placeholder="Fullname" className="br" size="large" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input placeholder="Email*" className="br" size="large" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Password is required" }]}
              >
                <Input
                  placeholder="******"
                  type="password"
                  className="br"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="mobile"
                rules={[{ required: true, message: "Mobile no is required" }]}
              >
                <Input addonBefore={prefixSelector} placeholder="Mobile no" className="br" size="large" />
              </Form.Item>
              <Form.Item>
                <Button
                    htmlType="submit"
                    size="large"
                    className="br w-full bg-rose-600 font-semobold text-white"
                >Register now</Button>
              </Form.Item>
            </Form>
            <Divider />
                <div className='flex gap-x-2 justify-center'>
                    <p>I have an account</p>
                    <Link href="/login" legacyBehavior>
                        <a className='text-indigo-900 font-semibold'>Login</a>
                    </Link>
                </div>
          </div>
        </div>
      </div>
    );
}

export default Register;