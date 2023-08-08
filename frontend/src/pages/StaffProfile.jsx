import React from 'react'
import Chart from 'react-google-charts';



export const data = [
    ["Clarity", "Rating"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
  export const options = {
    title: "My Daily Activities",
    is3D: true
  };

const StaffProfile = () => {
  return (
    <div>
        <h1>Staff Profile</h1>
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"300px"}
            height={"300px"}
        />
    </div>
  )
}

export default StaffProfile