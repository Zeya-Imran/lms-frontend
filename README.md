(theme source)[https://html.vristo.sbthemes.com/index.html]
(charts)[npm i react-apexcharts apexcharts --save]

dynamic import basically use for import statement


import dynamic from 'next/dynamic';
const ApexCharts = dynamic(()=>import('react-apexcharts'),{
    ssr:false
})