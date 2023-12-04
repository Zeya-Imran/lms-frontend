'use client'
import Logo from "@components/shared/logo";
import {Form, Button, Input, Divider} from 'antd';
import  Image  from "next/image";
import Link from 'next/link';
// const {Item} = Form;
const Login = ()=>{
    return(
       <div className="bg-gray-100 min-h-screen flex justify-center items-center">
           <div className="bg-white rounded-lg border p-8 md:w-4/12 w-11/12 flex flex-col gap-y-4 animate__animated animate__zoomIn animate__faster">
                <div className="flex items-center">
                    <Logo />
                    <h1>Happy to see you Again!!!</h1>
                </div>
                <Form>
                    <Form.Item>
                        <Input placeholder="Email"
                            size="large"
                            style={{borderRadius:0}}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Password" 
                            size="large"
                            style={{borderRadius:0}}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            style={{borderRadius:0}}
                            size="large"
                            className="w-full bg-rose-600 text-white font-semibold border-rose-600"
                        >Login</Button>
                    </Form.Item>
                </Form>
                <Divider>Or</Divider>
                <Button
                    icon={<Image src="/img/facebook.png" alt="Google icon" width={32} height={32} />}
                    className="flex justify-center items-center"
                    size="large"
                    style={{borderRadius:0}}
                >
                    Continue wiht Facebook
                </Button>

                <Button
                    icon={<Image src="/img/google.png" alt="Google icon" width={32} height={32} />}
                    className="flex justify-center items-center"
                    size="large"
                    style={{borderRadius:0}}
                >
                    Continue wiht Google
                </Button>
                <Divider />
                <div className="flex gap-x-2 justify-center">
                    <p>Do not have an account?</p>
                    <Link href="/register" legacyBehavior>
                        <a className="text-indigo-900 font-semibold">Register Now</a>
                    </Link>

                </div>
           </div>
       </div>
    );
}

export default Login;