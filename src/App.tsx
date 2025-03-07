import React, { useState } from 'react';
import { 
  Leaf, UtensilsCrossed, Trophy, ChevronLeft, User, Home, BarChart3, 
  Search, QrCode, Users, Settings, Heart, Clock, Filter, Bell
} from 'lucide-react';

// Screen Components
const HomeScreen = () => (
  <div className="space-y-6">
    {/* Virtual Pet Section */}
    <div className="bg-green-50 rounded-3xl p-6">
      <div className="text-center">
        <img 
          src="https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          alt="Virtual Pet"
          className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
        />
        <h2 className="text-lg font-semibold mb-2">Your EcoPet is Happy!</h2>
        <p className="text-sm text-gray-600">15-day streak! 🔥</p>
      </div>
    </div>

    {/* Quick Stats */}
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-blue-50 rounded-2xl p-4">
        <UtensilsCrossed className="w-6 h-6 text-blue-600 mb-2" />
        <h3 className="font-semibold">Today's Orders</h3>
        <p className="text-2xl font-bold">2</p>
      </div>
      <div className="bg-green-50 rounded-2xl p-4">
        <Leaf className="w-6 h-6 text-green-600 mb-2" />
        <h3 className="font-semibold">Waste Saved</h3>
        <p className="text-2xl font-bold">0.5kg</p>
      </div>
    </div>

    {/* Quick Actions */}
    <div className="grid grid-cols-2 gap-4">
      <button className="bg-green-600 text-white rounded-2xl p-4 text-center">
        Order Food
      </button>
      <button className="bg-blue-600 text-white rounded-2xl p-4 text-center">
        Scan Tray
      </button>
    </div>

    {/* Recent Activity */}
    <div>
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Chicken Rice</h3>
              <p className="text-sm text-gray-600">Customized • No cucumber</p>
            </div>
            <span className="text-green-600 font-semibold">$5.50</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const OrderScreen = () => (
  <div className="space-y-6">
    {/* Search Bar */}
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search for food..."
        className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>

    {/* Filters */}
    <div className="flex gap-2 overflow-x-auto pb-2">
      {['All', 'Asian', 'Western', 'Vegetarian', 'Halal'].map((filter) => (
        <button
          key={filter}
          className="px-4 py-2 rounded-full bg-gray-100 text-sm whitespace-nowrap"
        >
          {filter}
        </button>
      ))}
    </div>

    {/* Restaurant List */}
    <div className="space-y-4">
      {[1, 2, 3].map((restaurant) => (
        <div key={restaurant} className="bg-white rounded-2xl p-4 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Restaurant"
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="font-semibold text-lg">Asian Delight</h3>
          <p className="text-sm text-gray-600">⭐ 4.5 • 15-20 min</p>
        </div>
      ))}
    </div>
  </div>
);

const CustomizationScreen = () => (
  <div className="space-y-6">
    <img
      src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      alt="Dish"
      className="w-full h-48 object-cover rounded-2xl"
    />
    
    <div>
      <h2 className="text-2xl font-bold">Chicken Rice</h2>
      <p className="text-gray-600">Customize your order to reduce waste</p>
    </div>

    {/* Portion Size */}
    <div className="bg-white rounded-2xl p-4">
      <h3 className="font-semibold mb-4">Portion Size</h3>
      <input
        type="range"
        min="0"
        max="100"
        className="w-full"
      />
      <p className="text-sm text-gray-600 mt-2">
        Suggested: Regular (based on your history)
      </p>
    </div>

    {/* Ingredients */}
    <div className="bg-white rounded-2xl p-4">
      <h3 className="font-semibold mb-4">Ingredients</h3>
      <div className="space-y-4">
        {['Rice', 'Chicken', 'Cucumber', 'Sauce'].map((ingredient) => (
          <div key={ingredient} className="flex items-center justify-between">
            <span>{ingredient}</span>
            <input type="checkbox" defaultChecked />
          </div>
        ))}
      </div>
    </div>

    {/* Sustainability Score */}
    <div className="bg-green-50 rounded-2xl p-4">
      <h3 className="font-semibold mb-2">Sustainability Score</h3>
      <div className="flex items-center gap-2">
        <Leaf className="text-green-600 w-5 h-5" />
        <span className="text-green-600 font-bold">95</span>
      </div>
    </div>
  </div>
);

const WasteTrackingScreen = () => (
  <div className="space-y-6">
    {/* QR Scanner */}
    <div className="bg-gray-900 rounded-2xl p-8 text-center">
      <QrCode className="w-16 h-16 text-white mx-auto mb-4" />
      <p className="text-white">Scan QR Code to Track Waste</p>
    </div>

    {/* Today's Stats */}
    <div className="bg-white rounded-2xl p-4">
      <h3 className="font-semibold mb-4">Today's Waste</h3>
      <div className="flex justify-between items-center">
        <span>0.2kg</span>
        <span className="text-green-600">-15% vs avg</span>
      </div>
    </div>

    {/* History */}
    <div className="space-y-4">
      <h3 className="font-semibold">History</h3>
      {[1, 2, 3].map((day) => (
        <div key={day} className="bg-white rounded-2xl p-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium">Monday</h4>
              <p className="text-sm text-gray-600">0.3kg waste</p>
            </div>
            <BarChart3 className="text-gray-400 w-5 h-5" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CompanionScreen = () => (
  <div className="space-y-6">
    {/* Pet Display */}
    <div className="bg-green-50 rounded-3xl p-8 text-center">
      <img
        src="https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        alt="Virtual Pet"
        className="w-48 h-48 mx-auto mb-4 rounded-full object-cover"
      />
      <h2 className="text-xl font-bold mb-2">Luna</h2>
      <p className="text-gray-600">Level 5 EcoPet</p>
    </div>

    {/* Pet Stats */}
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white rounded-2xl p-4">
        <Heart className="w-6 h-6 text-red-500 mb-2" />
        <h3 className="font-semibold">Health</h3>
        <p className="text-2xl font-bold">95%</p>
      </div>
      <div className="bg-white rounded-2xl p-4">
        <Trophy className="w-6 h-6 text-yellow-500 mb-2" />
        <h3 className="font-semibold">Experience</h3>
        <p className="text-2xl font-bold">2.5k</p>
      </div>
    </div>

    {/* Achievements */}
    <div className="bg-white rounded-2xl p-4">
      <h3 className="font-semibold mb-4">Recent Achievements</h3>
      <div className="space-y-4">
        {['Zero Waste Week', 'Perfect Streak', 'Community Leader'].map((achievement) => (
          <div key={achievement} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-yellow-600" />
            </div>
            <span>{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CommunityScreen = () => (
  <div className="space-y-6">
    {/* Leaderboard */}
    <div className="bg-white rounded-2xl p-4">
      <h3 className="font-semibold mb-4">Top Reducers</h3>
      <div className="space-y-4">
        {[1, 2, 3].map((rank) => (
          <div key={rank} className="flex items-center gap-4">
            <span className="font-bold">{rank}</span>
            <div className="w-10 h-10 rounded-full bg-gray-200" />
            <div>
              <p className="font-medium">User {rank}</p>
              <p className="text-sm text-gray-600">-{rank * 2}kg waste</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Active Challenges */}
    <div className="bg-white rounded-2xl p-4">
      <h3 className="font-semibold mb-4">Active Challenges</h3>
      <div className="space-y-4">
        {['Zero Waste Week', 'Team Challenge', 'Monthly Goal'].map((challenge) => (
          <div key={challenge} className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-medium">{challenge}</h4>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProfileScreen = () => (
  <div className="space-y-6">
    {/* Profile Header */}
    <div className="text-center">
      <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
      <h2 className="text-xl font-bold">John Doe</h2>
      <p className="text-gray-600">Eco Warrior Level 5</p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <p className="text-2xl font-bold">15</p>
        <p className="text-sm text-gray-600">Day Streak</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold">2.5kg</p>
        <p className="text-sm text-gray-600">Saved</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold">12</p>
        <p className="text-sm text-gray-600">Badges</p>
      </div>
    </div>

    {/* Settings */}
    <div className="space-y-4">
      {[
        'Dietary Preferences',
        'Notifications',
        'Connected Accounts',
        'Goals',
        'Help & Support',
        'About'
      ].map((setting) => (
        <button
          key={setting}
          className="w-full flex items-center justify-between p-4 bg-white rounded-2xl"
        >
          <span>{setting}</span>
          <ChevronLeft className="w-5 h-5 transform rotate-180" />
        </button>
      ))}
    </div>
  </div>
);

function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen />;
      case 'order':
        return <OrderScreen />;
      case 'customize':
        return <CustomizationScreen />;
      case 'waste':
        return <WasteTrackingScreen />;
      case 'companion':
        return <CompanionScreen />;
      case 'community':
        return <CommunityScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {/* iPhone-style container */}
      <div className="w-[375px] h-[812px] bg-white rounded-[60px] shadow-2xl overflow-hidden relative">
        {/* Status bar */}
        <div className="h-6 bg-black"></div>
        
        {/* Dynamic notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-7 bg-black rounded-b-3xl"></div>

        {/* Header */}
        <div className="pt-8 px-6 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {activeScreen !== 'home' && (
              <button onClick={() => setActiveScreen('home')}>
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
            )}
            <h1 className="text-2xl font-bold">
              {activeScreen === 'home' ? 'EcoEats' : 
               activeScreen === 'order' ? 'Order Food' :
               activeScreen === 'customize' ? 'Customize' :
               activeScreen === 'waste' ? 'Waste Tracking' :
               activeScreen === 'companion' ? 'My Pet' :
               activeScreen === 'community' ? 'Community' :
               'Profile'}
            </h1>
          </div>
          <div className="flex gap-4">
            <button>
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
            <button onClick={() => setActiveScreen('profile')}>
              <User className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="h-[calc(100%-8rem)] px-6 overflow-y-auto">
          {renderScreen()}
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-200 flex items-center justify-around px-6">
          <button 
            onClick={() => {
              setActiveTab('home');
              setActiveScreen('home');
            }}
            className={`flex flex-col items-center ${activeTab === 'home' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button 
            onClick={() => {
              setActiveTab('order');
              setActiveScreen('order');
            }}
            className={`flex flex-col items-center ${activeTab === 'order' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <UtensilsCrossed className="w-6 h-6" />
            <span className="text-xs mt-1">Order</span>
          </button>
          <button 
            onClick={() => {
              setActiveTab('waste');
              setActiveScreen('waste');
            }}
            className={`flex flex-col items-center ${activeTab === 'waste' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <QrCode className="w-6 h-6" />
            <span className="text-xs mt-1">Track</span>
          </button>
          <button 
            onClick={() => {
              setActiveTab('community');
              setActiveScreen('community');
            }}
            className={`flex flex-col items-center ${activeTab === 'community' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <Users className="w-6 h-6" />
            <span className="text-xs mt-1">Community</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;