(theme source)[https://html.vristo.sbthemes.com/index.html]
(charts)[npm i react-apexcharts apexcharts --save]

dynamic import basically use for import statement


import dynamic from 'next/dynamic';
const ApexCharts = dynamic(()=>import('react-apexcharts'),{
    ssr:false
})


// More menu code in video 49 at last


*** text editor 
- we are using currently CKEditior 
- alternaive option is react-quill

*** image for container  width
<Image
    alt="example"
    width={0}
    height={0}
    layout='responsive'
    src={previewImage}
/>
 
