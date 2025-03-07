import React, { useState } from 'react';
import { 
  AlertTriangle, ChevronDown, ChevronLeft, Home, Award, QrCode, ShoppingBag, 
  User, TrendingDown, Clock, Gift 
} from 'lucide-react';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  
  const screens = [
    'Home',
    'Order Customization',
    'Waste Tracking',
    'Virtual Pet',
    'Leaderboard',
    'Rewards'
  ];
  
  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };
  
  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };
  
  // Mock data
  const mockRecommendations = [
    { id: 1, name: "Chicken Rice", basePrice: 4.50, customizable: true, wasteSaved: "20g avg." },
    { id: 2, name: "Vegetable Noodles", basePrice: 3.80, customizable: true, wasteSaved: "15g avg." },
    { id: 3, name: "Fish Soup", basePrice: 5.20, customizable: true, wasteSaved: "25g avg." }
  ];
  
  const mockWasteData = [
    { day: "Mon", waste: 120 },
    { day: "Tue", waste: 95 },
    { day: "Wed", waste: 85 },
    { day: "Thu", waste: 70 },
    { day: "Fri", waste: 60 },
    { day: "Sat", waste: 50 },
    { day: "Sun", waste: 40 }
  ];
  
  const mockLeaderboard = [
    { rank: 1, name: "Sarah T.", faculty: "Engineering", points: 2450, reduction: "92%" },
    { rank: 2, name: "Jason L.", faculty: "Business", points: 2320, reduction: "89%" },
    { rank: 3, name: "You", faculty: "Science", points: 2180, reduction: "85%" },
    { rank: 4, name: "Michelle K.", faculty: "Arts", points: 2050, reduction: "82%" },
    { rank: 5, name: "Daniel W.", faculty: "Medicine", points: 1920, reduction: "78%" }
  ];
  
  // Components for each screen
  const HomeScreen = () => (
    <div className="flex flex-col h-full">
      <div className="bg-green-600 p-4 rounded-b-xl shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-white text-lg font-bold">Hey, Alex!</h2>
            <p className="text-green-100">Let's reduce waste today</p>
          </div>
          <div className="bg-white p-2 rounded-full">
            <User size={24} className="text-green-600" />
          </div>
        </div>
        
        <div className="mt-6 bg-white p-3 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-xs">Your Impact</p>
            <p className="font-bold text-lg">1.2kg waste saved</p>
          </div>
          <div className="bg-green-100 p-2 rounded-lg">
            <TrendingDown size={24} className="text-green-600" />
          </div>
        </div>
      </div>
      
      <div className="p-4 flex-1">
        <h3 className="font-bold text-gray-700 mb-4">Recommended For You</h3>
        
        {mockRecommendations.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-3 mb-3 flex justify-between items-center">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500 text-sm">${item.basePrice.toFixed(2)}</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-green-500 text-xs">{item.wasteSaved}</span>
              <button className="bg-green-500 text-white text-sm px-3 py-1 rounded-full mt-1">Order</button>
            </div>
          </div>
        ))}
        
        <div className="mt-4">
          <h3 className="font-bold text-gray-700 mb-2">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-100 p-3 rounded-lg flex flex-col items-center">
              <QrCode size={24} className="text-blue-600" />
              <p className="text-xs mt-1 text-center">Scan Tray</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg flex flex-col items-center">
              <Award size={24} className="text-purple-600" />
              <p className="text-xs mt-1 text-center">Challenges</p>
            </div>
            <div className="bg-amber-100 p-3 rounded-lg flex flex-col items-center">
              <Gift size={24} className="text-amber-600" />
              <p className="text-xs mt-1 text-center">Rewards</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white border-t border-gray-200 flex justify-around p-2">
        <button className="p-2 text-green-600">
          <Home size={24} />
        </button>
        <button className="p-2 text-gray-400">
          <ShoppingBag size={24} />
        </button>
        <button className="p-2 text-gray-400">
          <QrCode size={24} />
        </button>
        <button className="p-2 text-gray-400">
          <Award size={24} />
        </button>
        <button className="p-2 text-gray-400">
          <User size={24} />
        </button>
      </div>
    </div>
  );
  
  const OrderCustomizationScreen = () => (
    <div className="flex flex-col h-full">
      <div className="bg-green-600 p-4">
        <div className="flex items-center">
          <ChevronLeft size={24} className="text-white mr-2" />
          <h2 className="text-white text-lg font-bold">Customize Order</h2>
        </div>
      </div>
      
      <div className="p-4 flex-1">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="font-bold text-lg mb-1">Chicken Rice</h3>
          <p className="text-gray-500 mb-4">North Canteen • $4.50</p>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">Portion Size</p>
              <div className="flex items-center">
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded mr-2">AI Suggestion</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
            <div className="flex">
              <button className="flex-1 py-2 border border-gray-300 rounded-l-lg text-gray-500">Small</button>
              <button className="flex-1 py-2 bg-green-600 text-white border border-green-600">Regular</button>
              <button className="flex-1 py-2 border border-gray-300 rounded-r-lg text-gray-500">Large</button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Recommended based on your usual consumption</p>
          </div>
          
          <div className="mb-4">
            <p className="font-semibold mb-2">Ingredients</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input type="checkbox" checked className="rounded text-green-600 mr-2" />
                  <span>Chicken</span>
                </div>
                <div className="flex items-center">
                  <button className="bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center">-</button>
                  <span className="mx-2">Reg</span>
                  <button className="bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center">+</button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input type="checkbox" checked className="rounded text-green-600 mr-2" />
                  <span>Rice</span>
                </div>
                <div className="flex items-center">
                  <button className="bg-green-200 text-green-600 w-6 h-6 rounded-full flex items-center justify-center">-</button>
                  <span className="mx-2">Less</span>
                  <button className="bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center">+</button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input type="checkbox" checked className="rounded text-green-600 mr-2" />
                  <span>Cucumber</span>
                </div>
                <div className="flex items-center">
                  <button className="bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center">-</button>
                  <span className="mx-2">Reg</span>
                  <button className="bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center">+</button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input type="checkbox" className="rounded text-green-600 mr-2" />
                  <span className="text-gray-400">Chili Sauce</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <button className="bg-gray-100 text-gray-400 w-6 h-6 rounded-full flex items-center justify-center">-</button>
                  <span className="mx-2">None</span>
                  <button className="bg-gray-100 text-gray-400 w-6 h-6 rounded-full flex items-center justify-center">+</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg mb-4 flex items-start">
            <AlertTriangle size={20} className="text-green-600 mt-1 mr-2 flex-shrink-0" />
            <p className="text-xs text-green-700">Based on your history, you typically leave 25% of rice uneaten. We've suggested a reduced portion to minimize waste.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="text-lg font-bold">$4.50</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Potential Waste Saved</p>
              <p className="text-green-600 font-bold">~25g</p>
            </div>
          </div>
          
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
  
  const WasteTrackingScreen = () => (
    <div className="flex flex-col h-full">
      <div className="bg-green-600 p-4">
        <div className="flex items-center">
          <ChevronLeft size={24} className="text-white mr-2" />
          <h2 className="text-white text-lg font-bold">Waste Tracking</h2>
        </div>
      </div>
      
      <div className="p-4 flex-1">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex justify-between mb-4">
            <button className="text-green-600 font-medium">Weekly</button>
            <button className="text-gray-400">Monthly</button>
            <button className="text-gray-400">Yearly</button>
          </div>
          
          <div className="h-40 flex items-end justify-between">
            {mockWasteData.map((day) => (
              <div key={day.day} className="flex flex-col items-center">
                <div 
                  className="w-8 bg-green-200 rounded-t-lg" 
                  style={{ 
                    height: `${day.waste / 1.5}px`,
                    backgroundColor: day.day === "Sun" ? "#10B981" : "#A7F3D0"
                  }}
                ></div>
                <p className="text-xs mt-1">{day.day}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-gray-500">Weekly Average</p>
                <p className="font-bold">74g <span className="text-green-500 text-sm">↓12%</span></p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Campus Average</p>
                <p className="font-bold">120g</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Your Goal</p>
                <p className="font-bold">50g</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="font-bold mb-3">Recently Tracked</h3>
          
          <div className="border-l-4 border-green-500 pl-3 py-1 mb-3">
            <div className="flex justify-between">
              <p className="font-medium">Chicken Rice</p>
              <p className="text-green-600 font-medium">15g waste</p>
            </div>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock size={12} className="mr-1" />
              <span>Today, 12:45pm • North Canteen</span>
            </div>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-3 py-1 mb-3">
            <div className="flex justify-between">
              <p className="font-medium">Noodle Soup</p>
              <p className="text-yellow-600 font-medium">35g waste</p>
            </div>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock size={12} className="mr-1" />
              <span>Yesterday, 6:30pm • South Canteen</span>
            </div>
          </div>
          
          <div className="border-l-4 border-green-500 pl-3 py-1">
            <div className="flex justify-between">
              <p className="font-medium">Vegetable Rice</p>
              <p className="text-green-600 font-medium">10g waste</p>
            </div>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock size={12} className="mr-1" />
              <span>Yesterday, 1:15pm • North Canteen</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Insights</h3>
          <p className="text-sm mb-3">You waste less food when ordering lunch compared to dinner. Consider adjusting your dinner portions.</p>
          <button className="text-green-600 text-sm font-medium">View All Insights</button>
        </div>
      </div>
    </div>
  );
  
  const VirtualPetScreen = () => (
    <div className="flex flex-col h-full">
      <div className="bg-green-600 p-4">
        <div className="flex items-center">
          <ChevronLeft size={24} className="text-white mr-2" />
          <h2 className="text-white text-lg font-bold">Your EcoFriend</h2>
        </div>
      </div>
      
      <div className="p-4 flex-1">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col items-center">
          <div className="w-40 h-40 bg-green-100 rounded-full flex items-center justify-center mb-4">
            {/* This would be a dynamic SVG/image of the virtual pet */}
            <div className="w-32 h-32 rounded-full bg-green-300 flex items-center justify-center">
              <div className="relative">
                {/* Simple pet face */}
                <div className="w-28 h-28 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="absolute top-8 left-6 w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute top-8 right-6 w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute top-16 w-10 h-5 bg-white rounded-full"></div>
                </div>
                {/* Pet "ears" */}
                <div className="absolute top-0 left-2 w-6 h-8 bg-green-500 rounded-full transform -rotate-45"></div>
                <div className="absolute top-0 right-2 w-6 h-8 bg-green-500 rounded-full transform rotate-45"></div>
              </div>
            </div>
          </div>
          
          <h3 className="font-bold text-lg mb-1">Leafy</h3>
          <p className="text-gray-500 mb-4">Level 12 EcoFriend</p>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-xs text-gray-500 mb-4">75/100 XP to Level 13</p>
          
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="bg-green-50 p-3 rounded-lg flex flex-col items-center">
              <p className="text-xl font-bold text-green-600">85%</p>
              <p className="text-xs text-center">Happiness</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg flex flex-col items-center">
              <p className="text-xl font-bold text-green-600">92%</p>
              <p className="text-xs text-center">Health</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg flex flex-col items-center">
              <p className="text-xl font-bold text-green-600">12</p>
              <p className="text-xs text-center">Achievements</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="font-bold mb-3">Recent Activity</h3>
          
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <TrendingDown size={20} className="text-green-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Leafy is happy!</p>
              <p className="text-xs text-gray-500">You've reduced waste by 22% this week</p>
            </div>
            <p className="text-xs text-gray-400">2h ago</p>
          </div>
          
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <Award size={20} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Achievement Unlocked!</p>
              <p className="text-xs text-gray-500">Zero Waste Challenge: 3 days streak</p>
            </div>
            <p className="text-xs text-gray-400">1d ago</p>
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
              <Gift size={20} className="text-amber-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium">New outfit unlocked!</p>
              <p className="text-xs text-gray-500">Graduate Cap for achieving 1kg waste saved</p>
            </div>
            <p className="text-xs text-gray-400">2d ago</p>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="font-bold">Active Challenge</h3>
            <p className="text-sm">Zero Waste Week</p>
            <p className="text-xs text-gray-500">3/7 days completed</p>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">View</button>
        </div>
      </div>
    </div>
  );
  
  const LeaderboardScreen = () => (
    <div className="flex flex-col h-full">
      <div className="bg-green-600 p-4">
        <div className="flex items-center">
          <ChevronLeft size={24} className="text-white mr-2" />
          <h2 className="text-white text-lg font-bold">Leaderboard</h2>
        </div>
      </div>
      
      <div className="p-4 flex-1">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex justify-between mb-4">
            <button className="text-green-600 font-medium">Individual</button>
            <button className="text-gray-400">Faculty</button>
            <button className="text-gray-400">Canteen</button>
          </div>
          
          <div className="flex justify-around mb-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
                <p className="font-bold">2</p>
              </div>
              <p className="text-xs">Jason L.</p>
              <p className="text-xs text-green-600">2320 pts</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full mb-2 flex items-center justify-center border-2 border-amber-400">
                <p className="font-bold text-amber-600">1</p>
              </div>
              <p className="text-xs">Sarah T.</p>
              <p className="text-xs text-green-600">2450 pts</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
                <p className="font-bold">3</p>
              </div>
              <p className="text-xs font-bold">You</p>
              <p className="text-xs text-green-600">2180 pts</p>
            </div>
          </div>
          
          <div className="space-y-3">
            {mockLeaderboard.slice(3).map((user) => (
              <div key={user.rank} className="flex items-center p-2 rounded-lg hover:bg-gray-50">
                <p className="w-8 text-center font-medium text-gray-500">{user.rank}</p>
                <div className="flex-1 ml-2">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.faculty}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">{user.points} pts</p>
                  <p className="text-xs text-gray-500">Reduced by {user.reduction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="font-bold mb-3">Your Stats</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Current Rank</p>
              <p className="text-xl font-bold">3rd <span className="text-green-500 text-sm">↑2</span></p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Points</p>
              <p className="text-xl font-bold">2,180</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Waste Reduction</p>
              <p className="text-xl font-bold">85%</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">To Next Rank</p>
              <p className="text-xl font-bold">141 pts</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-bold mb-3">Active Challenges</h3>
          
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="font-medium">Zero Waste Week</p>
              <p className="text-xs text-gray-500">3/7 days completed</p>
            </div>
            <p className="text-green-600 font-medium">+500 pts</p>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Faculty Challenge</p>
              <p className="text-xs text-gray-500">Science vs Engineering</p>
            </div>
            <p className="text-green-600 font-medium">+300 pts</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  const RewardsScreen = () => (
    <div className="flex flex-col h-full">
      <div className="bg-green-600 p-4">
        <div className="flex items-center">
          <ChevronLeft size={24} className="text-white mr-2" />
          <h2 className="text-white text-lg font-bold">Rewards</h2>
        </div>
      </div>
      
      <div className="p-4 flex-1">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-bold">Your Balance</h3>
              <p className="text-xs text-gray-500">Earn more by reducing waste!</p>
            </div>
            <div>
              <p className="text-xl font-bold text-green-600">2,180</p>
              <p className="text-xs text-right text-gray-500">EcoPoints</p>
            </div>
          </div>
          
          <div className="flex justify-between space-x-2">
            <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm">Redeem</button>
            <button className="flex-1 border border-green-600 text-green-600 py-2 rounded-lg text-sm">History</button>
          </div>
        </div>
        
        <h3 className="font-bold mb-3">Available Rewards</h3>
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex">
            <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
              <ShoppingBag size={24} className="text-amber-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold">Meal Voucher</h4>
              <p className="text-gray-500 text-xs">Redeem for a $3 discount on your next meal</p>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-green-600">500 pts</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
              <Award size={24} className="text-purple-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold">Free Drink</h4>
              <p className="text-gray-500 text-xs">Get a complimentary beverage with your meal</p>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-green-600">300 pts</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <Gift size={24} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold">Exclusive Merchandise</h4>
              <p className="text-gray-500 text-xs">Limited edition NTU eco-friendly gear</p>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-green-600">800 pts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const renderScreen = () => {
    switch(currentScreen) {
      case 0:
        return <HomeScreen />;
      case 1:
        return <OrderCustomizationScreen />;
      case 2:
        return <WasteTrackingScreen />;
      case 3:
        return <VirtualPetScreen />;
      case 4:
        return <LeaderboardScreen />;
      case 5:
        return <RewardsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="h-screen">
      {renderScreen()}
      <div className="flex justify-between p-4">
        <button onClick={prevScreen} className="bg-gray-200 p-2 rounded-lg">Previous</button>
        <button onClick={nextScreen} className="bg-green-600 text-white p-2 rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default App;