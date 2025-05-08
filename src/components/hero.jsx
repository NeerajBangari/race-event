import React from "react";
import { Card, Button, Dropdown, Menu } from "antd";
import {
  CheckCircleOutlined,
  DownOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  StarOutlined,
  SearchOutlined,
  ArrowRightOutlined,
  FundOutlined,
} from "@ant-design/icons";

const events = [
  {
    title: "Mountain Expedition",
    date: "May 18, 2024",
    location: "Flagstaff, AZ",
    price: "Starting $60",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.rDgzcabinmZw1kMJ-moTDAHaE8&cb=iwc1&w=1024&h=683&rs=1&pid=ImgDetMain",
  },
  {
    title: "Rocky Ridge Challenge",
    date: "June 7, 2024",
    location: "Moab, UT",
    price: "Starting $40",
    image:
      "https://images.caricos.com/j/jeep/2018_jeep_wrangler/images/2560x1440/2018_jeep_wrangler_129_2560x1440.jpg",
  },
  {
    title: "Family Offroad Weekend",
    date: "July 20, 2024",
    location: "Big Bear Lake, CA",
    price: "Starting $20",
    image:
      "https://editorial.pxcrush.net/carsales/general/editorial/ge5534438099898018220.jpg?width=1024&height=682",
  },
];

const categories = [
  { label: "Trail Rides", icon: "🌍" },
  { label: "Rock Crawling", icon: "⛰️" },
  { label: "Overlanding", icon: "🚗" },
  { label: "Family Friendly", icon: "👥" },
];

export default function OffroadEventsPage() {
  const menu = (
    <Menu>
      <Menu.Item key="1">California</Menu.Item>
      <Menu.Item key="2">Colorado</Menu.Item>
      <Menu.Item key="3">Utah</Menu.Item>
    </Menu>
  );
  return (
    <div className="bg-white min-h-screen font-sans">
      <header className="w-full bg-[#0f1a1e] text-white px-4 py-3 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide flex-shrink-0">
            <span className="text-white">TRAILS</span>
            <span className="text-orange-500">OFF</span>
            <span className="text-white">ROAD</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
            <a href="#" className="text-white hover:text-orange-400">
              Pricing
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              Blog
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              Trail Map
            </a>
            <Dropdown
              menu={{
                items: [
                  { key: "1", label: "California" },
                  { key: "2", label: "Colorado" },
                  { key: "3", label: "Utah" },
                ],
              }}
            >
              <a
                onClick={(e) => e.preventDefault()}
                className="text-white hover:text-orange-400 cursor-pointer"
              >
                States <DownOutlined className="ml-1" />
              </a>
            </Dropdown>
            <a href="#" className="text-white hover:text-orange-400">
              Log In
            </a>
            <Button className="bg-orange-500 border-none hover:bg-orange-600 text-white font-semibold px-4 py-1 rounded">
              Sign Up for Free
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Dropdown
              menu={{
                items: [
                  { key: "pricing", label: <a href="#">Pricing</a> },
                  { key: "blog", label: <a href="#">Blog</a> },
                  { key: "map", label: <a href="#">Trail Map</a> },
                  { key: "states", label: "States" },
                  { key: "login", label: <a href="#">Log In</a> },
                  {
                    key: "signup",
                    label: (
                      <Button className="bg-orange-500 text-white border-none hover:bg-orange-600 w-full">
                        Sign Up
                      </Button>
                    ),
                  },
                ],
              }}
              placement="bottomRight"
            >
              <Button
                icon={<DownOutlined />}
                className="border-none bg-transparent text-white hover:bg-[#1e2b30]"
              />
            </Dropdown>
          </div>
        </div>
      </header>
      {/* Header Section */}
      <div className="relative h-[300px] overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/beJjMFZtwEE?autoplay=1&mute=1&loop=1&playlist=beJjMFZtwEE&controls=0&showinfo=0&modestbranding=1&start=0&end=64"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Upcoming Events */}
      <div className="px-6 py-10 bg-[#f7f2e8]">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card
              key={index}
              cover={
                <img
                  alt={event.title}
                  src={event.image}
                  className="h-48 object-cover"
                />
              }
              className="rounded-xl shadow-md"
            >
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500">
                {event.date} - {event.location}
              </p>
              <p className="text-sm text-gray-700 mt-1">{event.price}</p>
              <Button
                type="primary"
                block
                className="mt-4 bg-orange-500 border-orange-500 hover:bg-orange-600"
              >
                View Details
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-[#26322e] text-white px-6 py-10 w-full">
        <h2 className="text-xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-orange-400 font-semibold mb-4 uppercase">
              For Participants
            </h3>
            <div className="flex items-center gap-12 text-center">
              <div>
                <SearchOutlined className="text-3xl text-lime-400 mb-2" />
                <p className="font-medium">Find</p>
              </div>
              <div>
                <ArrowRightOutlined className="text-3xl text-lime-400 mb-2" />
                <p className="font-medium">Register</p>
              </div>
              <div>
                <FundOutlined className="text-3xl text-lime-400 mb-2" />
                <p className="font-medium">Ride</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-orange-400 font-semibold mb-4 uppercase">
              For Organizers
            </h3>
            <div className="flex items-center gap-12 text-center">
              <div>
                <FileTextOutlined className="text-3xl text-orange-400 mb-2" />
                <p className="font-medium">Create</p>
              </div>
              <div>
                <ArrowRightOutlined className="text-3xl text-orange-400 mb-2" />
                <p className="font-medium">Promote</p>
              </div>
              <div>
                <ClockCircleOutlined className="text-3xl text-orange-400 mb-2" />
                <p className="font-medium">Manage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore by Category */}
      <div className="bg-[#f7f2e8] px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-[#26322e] text-white text-center py-6 rounded-xl shadow"
            >
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
          <li>
            <StarOutlined className="text-yellow-500 mr-2" /> A fantastic
            experience
          </li>
          <li>
            <CheckCircleOutlined className="text-green-500 mr-2" /> Largest
            Selection
          </li>
          <li>
            <CheckCircleOutlined className="text-green-500 mr-2" /> Trusted
            Organizers
          </li>
        </ul>
      </div>
    </div>
  );
}
