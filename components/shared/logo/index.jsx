'use client'
import { Button } from 'antd';
import { DingdingOutlined } from '@ant-design/icons';
const Logo = ({size=32})=>{
    return(
        <Button 
            icon={<DingdingOutlined className='text-rose-600'/>}
            style={{
            fontSize:size
            }}
            className='font-bold w-fit flex items-center shadow-none border-0'
        >
        LMS 
        </Button>
    )
}

export default Logo;