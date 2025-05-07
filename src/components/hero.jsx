import React from 'react';
import { Card, Button } from 'antd';
import { CheckCircleOutlined, StarOutlined } from '@ant-design/icons';

const events = [
  {
    title: 'Mountain Expedition',
    date: 'May 18, 2024',
    location: 'Flagstaff, AZ',
    price: 'Starting $60',
    image: 'https://via.placeholder.com/300x180?text=Mountain+Expedition'
  },
  {
    title: 'Rocky Ridge Challenge',
    date: 'June 7, 2024',
    location: 'Moab, UT',
    price: 'Starting $40',
    image: 'https://via.placeholder.com/300x180?text=Rocky+Ridge'
  },
  {
    title: 'Family Offroad Weekend',
    date: 'July 20, 2024',
    location: 'Big Bear Lake, CA',
    price: 'Starting $20',
    image: 'https://via.placeholder.com/300x180?text=Family+Weekend'
  },
];

const categories = [
  { label: 'Trail Rides', icon: '🌍' },
  { label: 'Rock Crawling', icon: '⛰️' },
  { label: 'Overlanding', icon: '🚗' },
  { label: 'Family Friendly', icon: '👥' },
];

export default function OffroadEventsPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header Section */}
      <div className="h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://tse2.mm.bing.net/th?id=OIP.X5QZVsf22kkTXhdRfe4lZQHaE8&cb=iwc1&w=820&h=547&rs=1&pid=ImgDetMain')" }}></div>

      {/* Upcoming Events */}
      <div className="px-6 py-10 bg-[#f7f2e8]">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card
              key={index}
              cover={<img alt={event.title} src={event.image} className="h-48 object-cover" />}
              className="rounded-xl shadow-md"
            >
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date} - {event.location}</p>
              <p className="text-sm text-gray-700 mt-1">{event.price}</p>
              <Button type="primary" block className="mt-4 bg-orange-500 border-orange-500 hover:bg-orange-600">
                View Details
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-[#26322e] text-white px-6 py-10">
        <h2 className="text-xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-orange-400 font-semibold mb-2">For Participants</h3>
            <div className="flex gap-6 text-sm">
              <div>Find</div>
              <div>Register</div>
              <div>Ride</div>
            </div>
          </div>
          <div>
            <h3 className="text-orange-400 font-semibold mb-2">For Organizers</h3>
            <div className="flex gap-6 text-sm">
              <div>Create</div>
              <div>Promote</div>
              <div>Manage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore by Category */}
      <div className="bg-[#f7f2e8] px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="bg-[#26322e] text-white text-center py-6 rounded-xl shadow">
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className="font-medium">{cat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="px-6 py-10 bg-white">
        <h2 className="text-xl font-bold mb-4">Why Choose Us</h2>
        <ul className="text-sm text-gray-700 space-y-2">
          <li><StarOutlined className="text-yellow-500 mr-2" /> A fantastic experience</li>
          <li><CheckCircleOutlined className="text-green-500 mr-2" /> Largest Selection</li>
          <li><CheckCircleOutlined className="text-green-500 mr-2" /> Trusted Organizers</li>
        </ul>
      </div>
    </div>
  );
}
