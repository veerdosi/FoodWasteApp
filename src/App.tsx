import React, { useState } from 'react';
import { 
  Leaf, UtensilsCrossed, Trophy, ChevronLeft, User, Home, BarChart3, 
  Search, QrCode, Users, Settings, Heart, Clock, Filter, Bell, Sparkles,
  Calendar, Target, TrendingUp, Award, Star, Timer, MapPin, Percent
} from 'lucide-react';

// Restaurant data
const restaurants = [
  {
    id: 1,
    name: "Asian Delight",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.5,
    time: "15-20",
    cuisine: "Asian",
    priceRange: "$",
    distance: "0.3km",
    featured: ["Chicken Rice", "Laksa", "Nasi Lemak"],
    eco_score: 95
  },
  {
    id: 2,
    name: "Green Earth Bowls",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.8,
    time: "10-15",
    cuisine: "Vegetarian",
    priceRange: "$$",
    distance: "0.5km",
    featured: ["Buddha Bowl", "Quinoa Salad"],
    eco_score: 98
  },
  {
    id: 3,
    name: "Pasta Paradise",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.3,
    time: "20-25",
    cuisine: "Western",
    priceRange: "$$",
    distance: "0.7km",
    featured: ["Carbonara", "Pesto Pasta"],
    eco_score: 90
  },
  {
    id: 4,
    name: "Spice Route",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.6,
    time: "20-30",
    cuisine: "Indian",
    priceRange: "$$",
    distance: "0.8km",
    featured: ["Butter Chicken", "Biryani"],
    eco_score: 92
  },
  {
    id: 5,
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.7,
    time: "15-25",
    cuisine: "Japanese",
    priceRange: "$$$",
    distance: "1.0km",
    featured: ["Salmon Roll", "Bento Box"],
    eco_score: 94
  }
];


// Screen Components
const HomeScreen = () => (
  <div className="space-y-6">
    {/* Virtual Pet Section */}
    <div className="bg-green-50 rounded-3xl p-6">
      <div className="text-center">
        <img 
          src="/eco-eats-pet.png"
          alt="Virtual Pet"
          className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
        />
        <h2 className="text-lg font-semibold mb-2">Your EcoPet is Happy!</h2>
        <p className="text-sm text-gray-600">15-day streak! 🔥</p>
      </div>
    </div>

    {/* Order Details Section */}
    <div className="bg-gray-50 rounded-2xl p-4">
      <h3 className="font-semibold">Meal Ordered:</h3>
      <p className="text-sm text-gray-600">Steamed Chicken Rice (No cucumber)</p>
      <p className="text-sm text-gray-600">Order number: 116</p>
      <p className="text-sm text-gray-600">Waiting time: 5 minutes</p>
    </div>

    {/* Quick Stats */}
    <div className="flex gap-4">
      {/* Waste Saved */}
      <div className="bg-green-50 rounded-2xl p-4 flex flex-col items-center text-center">
        <Leaf className="w-6 h-6 text-green-600 mb-2" />
        <h3 className="font-semibold">Waste Saved</h3>
        <p className="text-2xl font-bold">0.5kg</p>
      </div>
      {/* Latest Achievement */}
      <div className="w-1/2 bg-yellow-50 rounded-2xl p-4 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
          <Trophy className="w-8 h-8 text-yellow-600" />
        </div>
        <h3 className="font-semibold">Latest Achievement</h3>
        <p className="text-xs text-gray-700">Zero Waste Week</p>
      </div>
    </div>

    {/* Meal Reccomendation */}
    <div className="bg-blue-50 rounded-2xl p-6 my-4">
      <h2 className="text-xl font-bold mb-2">Personalised Meal Plan</h2>
      <p className="text-sm text-gray-700 mb-4">
        Based on your recent consumption patterns, we recommend a balanced meal to keep you energized!
      </p>
      <div className="flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&auto=format&fit=crop&q=60"
          alt="Recommended Meal"
          className="w-20 h-20 rounded-xl mr-4"
        />
        <div>
          <h3 className="font-semibold">Grilled Chicken Salad</h3>
          <p className="text-sm text-gray-600">High in protein and low in calories.</p>
        </div>
      </div>
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
              <p className="text-xs text-green-600 mt-1">Saved 0.2kg waste</p>
            </div>
            <span className="text-green-600 font-semibold">$5.50</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Vegetarian Noodles</h3>
              <p className="text-sm text-gray-600">Regular portion</p>
              <p className="text-xs text-green-600 mt-1">Zero waste! 🎉</p>
            </div>
            <span className="text-green-600 font-semibold">$4.80</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface OrderScreenProps {
  onNavigate: (screen: string) => void;
}

const OrderScreen: React.FC<OrderScreenProps> = ({ onNavigate }) => {
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const cuisines = ['All', 'Asian', 'Western', 'Japanese', 'Indian', 'Vegetarian', 'Halal'];

  const filteredRestaurants = selectedCuisine === 'All' 
    ? restaurants 
    : restaurants.filter(r => r.cuisine === selectedCuisine);

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for restaurants or dishes..."
          className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            onClick={() => setSelectedCuisine(cuisine)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-colors
              ${selectedCuisine === cuisine 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {cuisine}
          </button>
        ))}
      </div>

      {/* Closing Discount Section */}
      <div className="bg-gray-50 rounded-2xl p-4">
        <h3 className="font-semibold">Closing Discount</h3>
        <p className="text-sm text-gray-600">
          Steamed Chicken Rice &nbsp;
          <span className="line-through text-red-500">$4</span>
          &nbsp;
          <span className="font-bold text-green-600">$3.50</span>
        </p>
      </div>

      {/* Restaurant List */}
      <div className="space-y-6">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white rounded-2xl p-4 shadow-sm space-y-4">
            <div className="relative">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">{restaurant.rating}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                <div className="flex items-center gap-1 text-green-600">
                  <Leaf className="w-4 h-4" />
                  <span className="text-sm font-medium">{restaurant.eco_score}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Timer className="w-4 h-4" />
                  {restaurant.time} min
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {restaurant.distance}
                </span>
                <span>{restaurant.priceRange}</span>
              </div>

              <div className="flex gap-2">
                {restaurant.featured.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (item === 'Chicken Rice') {
                        // This calls App's setActiveScreen('customize')
                        onNavigate('customize');
                      }
                    }}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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

const CommunityScreen = () => {
  const topReducers = [
    {
      rank: 1,
      name: 'Ethan Hunt',
      wasteReduced: 8,
      image: 'user1.jpg',
    },
    {
      rank: 2,
      name: 'Jane Smith',
      wasteReduced: 6,
      image: 'user2.webp',
    },
    {
      rank: 3,
      name: 'Jason Bourne',
      wasteReduced: 4,
      image: 'user3.webp',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Leaderboard */}
      <div className="bg-white rounded-2xl p-4">
        <h3 className="font-semibold mb-4">Top Reducers</h3>
        <div className="space-y-4">
          {topReducers.map(({ rank, name, wasteReduced, image }) => (
            <div key={rank} className="flex items-center gap-4">
              <span className="font-bold">{rank}</span>
              <img
                src={image}
                alt={`${name}'s profile`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{name}</p>
                <p className="text-sm text-gray-600">-{wasteReduced}kg waste</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Challenge */}
      <div className="bg-purple-50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Daily Challenge</h3>
          <Target className="w-6 h-6 text-purple-600" />
        </div>
        <p className="text-sm text-gray-700 mb-3">Order a vegetarian meal today</p>
        <div className="w-full bg-purple-200 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full w-1/3"></div>
        </div>
        <p className="text-xs text-purple-600 mt-2">+50 points on completion</p>
      </div>

      {/* Active Challenges */}
      <div className="bg-white rounded-2xl p-4">
        <h3 className="font-semibold mb-4">Active Challenges</h3>
        <div className="space-y-4">
          {['Zero Waste Week', 'Team Challenge', 'Monthly Goal'].map((challenge) => (
            <div key={challenge} className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-medium">{challenge}</h4>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: '60%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LanguageSelector = () => {
  const [language, setLanguage] = useState('English');
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl my-4">
      <span className="text-gray-700">Language</span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border border-gray-200 p-1 rounded"
      >
        <option value="English">English</option>
        <option value="Mandarin">Mandarin</option>
        <option value="Tamil">Tamil</option>
        <option value="Malay">Malay</option>
      </select>
    </div>
  );
};

const ProfileScreen = () => (
  <div className="space-y-6">
    {/* Profile Header */}
    <div className="text-center">
      <img 
        src="/johndoe.jpeg"
        alt="John Doe Profile Picture"
        className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
      />
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
    <LanguageSelector />
  </div>
);


const RewardScreen = () => {
  // For demo, initializing with 100 available credits.
  const [credits, setCredits] = useState(100);
  const [sliderValue, setSliderValue] = useState(0);
  
  // Conversion rate: 50 credits = $1
  const moneyValue = (sliderValue / 50).toFixed(2);

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Point Reward System</h2>
      <div className="bg-gray-50 rounded-2xl p-4">
        <p className="text-sm font-medium mb-2">Food Waste to Credits:</p>
        <ul className="list-disc ml-5 text-sm">
          <li>0-10g food waste: 5 credits</li>
          <li>10-20g food waste: 3 credits</li>
          <li>&gt;20g food waste: 1 credit</li>
          <li>50 credits = $1</li>
        </ul>
      </div>
      <div className="bg-white rounded-2xl p-4">
        <label htmlFor="creditSlider" className="block text-sm font-medium text-gray-700">
          Convert Credits to Money
        </label>
        <input
          id="creditSlider"
          type="range"
          min="0"
          max={credits}
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
          className="w-full mt-2"
        />
        <p className="text-sm text-gray-600 mt-2">
          Converting {sliderValue} credits to ${moneyValue}
        </p>
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl">
          Redeem Now
        </button>
      </div>
    </div>
  );
};

function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen />;
      case 'order':
        return <OrderScreen onNavigate={setActiveScreen} />;
      case 'customize':
        return <CustomizationScreen />;
      case 'waste':
        return <WasteTrackingScreen />;
      case 'companion':
        return <CompanionScreen />;
      case 'community':
        return <CommunityScreen />;
      case 'reward':
        return <RewardScreen />;
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
               activeScreen === 'reward' ? 'Rewards' :
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
        <div className="h-[calc(100%-8rem)] px-6 pb-24 overflow-y-auto">
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
          <button 
            onClick={() => {
              setActiveTab('reward');
              setActiveScreen('reward');
            }}
            className={`flex flex-col items-center ${activeTab === 'reward' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <Award className="w-6 h-6" />
            <span className="text-xs mt-1">Reward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;