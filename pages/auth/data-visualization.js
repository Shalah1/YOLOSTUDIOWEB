import React, { useState, useEffect } from 'react';
import { Chart, LinearScale, Title, CategoryScale, LineController, LineElement } from 'chart.js';
import { PieController, CategoryScale as CategoryScale2, ArcElement } from 'chart.js';

Chart.register(
  LinearScale,
  Title,
  CategoryScale,
  LineController,
  LineElement,
  PieController,
  CategoryScale2,
  ArcElement 
);

export default function AttendanceSheet() {
  const [attendanceData, setAttendanceData] = useState({
    labels: [], 
    datasets: [
      {
        label: 'Attendance',
        data: [], 
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  const [userName, setUserName] = useState(''); 
  const [attendanceHours, setAttendanceHours] = useState(''); 
  const [selectedDate, setSelectedDate] = useState(''); 

  useEffect(() => {

    createPieChart();
  }, [attendanceData]);

const createPieChart = () => {
  const existingPieChart = Chart.getChart('pieChart');
  if (existingPieChart) {
    existingPieChart.destroy(); 
  }

  const ctx = document.getElementById('pieChart').getContext('2d');
  const data = {
    labels: attendanceData.labels,
    datasets: [
      {
        label: 'Attendance',
        data: attendanceData.datasets[0].data.map((entry) => {
          const hours = entry.split(' ')[1]; 
          return parseFloat(hours);
        }),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Attendance Breakdown',
      },
    },
  };
  new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options,
    id: 'pieChart', 
  });
};


  const addAttendance = () => {

    if (userName && attendanceHours && selectedDate) {
      setAttendanceData((prevData) => ({
        labels: [userName, ...prevData.labels], 
        datasets: [
          {
            ...prevData.datasets[0],
            data: [`${selectedDate} ${attendanceHours} hours`, ...prevData.datasets[0].data], 
          },
        ],
      }));
      setUserName('');
      setAttendanceHours('');
      setSelectedDate('');
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-semibold mb-4">Attendance Sheet</h1>
      <div className="w-full max-w-xl flex flex-row">
        <div className="w-1/2">
          <div className="mb-4">
            <label htmlFor="datePicker" className="mr-2">
              Select Date:
            </label>
            <input
              type="date"
              id="datePicker"
              value={selectedDate}
              onChange={handleDateChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Attendance Table (10 AM to 7 PM)if its below then 6 hours its not GOOD</h2>
            <table className="table-auto border-collapse border border-gray-600">
              <thead>
                <tr>
                  <th className="border border-gray-600 p-2">Date</th>
                  <th className="border border-gray-600 p-2">User</th>
                  <th className="border border-gray-600 p-2">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.labels.map((user, index) => (
                  <tr key={index}>
                    <td className="border border-gray-600 p-2">{attendanceData.datasets[0].data[index * 2]}</td>
                    <td className="border border-gray-600 p-2">{user}</td>
                    <td className="border border-gray-600 p-2">
                      {parseFloat(attendanceData.datasets[0].data[index * 2 + 1]) >= 6 ? 'OK' : 'Not OK'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/2">
          <canvas id="pieChart" className="w-full h-72" width="400" height="200"></canvas>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Add Attendance</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border rounded px-2 py-1 mr-2"
          />
          <input
            type="number"
            placeholder="Attendance Hours"
            value={attendanceHours}
            onChange={(e) => setAttendanceHours(e.target.value)}
            className="border rounded px-2 py-1 mr-2"
          />
          <button onClick={addAttendance} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
                }  