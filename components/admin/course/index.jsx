import Layout from "@components/shared/layout";
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
const Course = ()=>{
    const Toolbar = ()=>{
       return(
        <Button
            icon={<PlusOutlined />}
                className="bg-indigo-600 font-semibold"
                size="large"
                type="primary"
                style={{borderRadius:0}}
                
        >New courses</Button>
       )
    }
    return(
        
        <Layout
            title="Courses"
            subtitle="your selective course is here"
            toolbar={<Toolbar />}
        >
            <h1>From Courses</h1>
        </Layout>
    );
}

export default Course;