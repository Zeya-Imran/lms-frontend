import Carriculum from "@components/admin/course/carriculum";

const carriculumPage = ({params})=>{
    console.log(params);
    return <Carriculum title={params.carriculum} />
}

export default carriculumPage;